// ==========================================================================
// Java Concepts Revision Dashboard - Application Logic
// ==========================================================================

// Global state variables
let currentChapterIndex = 0;
let currentTopicIndex = 0;
let revisionDepth = 'detailed'; // 'detailed' or 'quick'
let activeQuizQuestions = [];
let currentQuizQuestionIndex = 0;
let quizScore = 0;
let selectedOptionIndex = null;
let selectedOptionIndices = []; // array of selected indices for multi-choice
let currentPredictAnswer = ''; // text string for output predictions
let currentInterviewAnswer = ''; // text string for mock interview response
let isInterviewCheckingModel = false; // user is in self-evaluation checklist step
let answeredQuestions = []; // tracker for current quiz results
let currentInterviewCheckedPoints = []; // checked key points during interview self-evaluation
let currentChallengeIndex = 0; // currently selected practice challenge
let currentNotesTopicPath = null;
let currentPracticeScope = { chapterName: null, subChapterName: null };
let currentQuizScope = { chapterName: null, subChapterName: null };
let currentDifficultyFilter = 'all'; // 'all', 'easy', 'medium', 'hard'


// LocalStorage helpers
const STORAGE_REVISED_KEY = 'javarev_revised_topics';
const STORAGE_QUIZ_KEY = 'javarev_quiz_history';
const STORAGE_PRACTICE_KEY = 'javarev_practice_status';
const STORAGE_NOTES_KEY = 'javarev_notes';
const STORAGE_QHISTORY_KEY = 'javarev_question_history';

function getRevisedTopics() {
  const data = localStorage.getItem(STORAGE_REVISED_KEY);
  return data ? JSON.parse(data) : {};
}

function saveRevisedTopic(filePath, isCompleted) {
  const revised = getRevisedTopics();
  if (isCompleted) {
    revised[filePath] = true;
  } else {
    delete revised[filePath];
  }
  localStorage.setItem(STORAGE_REVISED_KEY, JSON.stringify(revised));
  updateStats();
  updateSidebarCompletionStates();
}

function getQuizHistory() {
  const data = localStorage.getItem(STORAGE_QUIZ_KEY);
  return data ? JSON.parse(data) : [];
}

function saveQuizResult(chapterName, correctCount, totalCount) {
  const history = getQuizHistory();
  history.push({
    chapter: chapterName,
    correct: correctCount,
    total: totalCount,
    percentage: Math.round((correctCount / totalCount) * 100),
    date: new Date().toLocaleDateString()
  });
  localStorage.setItem(STORAGE_QUIZ_KEY, JSON.stringify(history));
  updateStats();
}

function getNotesState() {
  const data = localStorage.getItem(STORAGE_NOTES_KEY);
  if (!data) {
    return { project: '', topics: {} };
  }
  const parsed = JSON.parse(data);
  if (!parsed.project) parsed.project = '';
  if (!parsed.topics) parsed.topics = {};
  return parsed;
}

function saveNotesState(notes) {
  localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
}

function getQuestionHistory() {
  const data = localStorage.getItem(STORAGE_QHISTORY_KEY);
  return data ? JSON.parse(data) : {};
}

function recordQuestionResult(qid, isCorrect) {
  if (!qid) return;
  const hist = getQuestionHistory();
  if (!hist[qid]) hist[qid] = { seen: 0, correct: 0, wrong: 0, lastSeenMs: 0 };
  hist[qid].seen++;
  hist[qid].lastSeenMs = Date.now();
  if (isCorrect) hist[qid].correct++; else hist[qid].wrong++;
  localStorage.setItem(STORAGE_QHISTORY_KEY, JSON.stringify(hist));
}

function getQuestionWeight(qid, history) {
  if (!qid || !history[qid]) return 10; // never seen — highest priority
  const h = history[qid];
  const daysSince = (Date.now() - h.lastSeenMs) / (1000 * 60 * 60 * 24);
  if (h.wrong > h.correct && daysSince < 7) return 8;  // recently wrong
  if (h.wrong > h.correct) return 5;                    // wrong (older)
  if (daysSince > 14) return 3;                          // not seen in 2 weeks
  return 1;                                              // recently correct
}

function getProjectNotes() {
  return getNotesState().project || '';
}

function saveProjectNotes(text) {
  const notes = getNotesState();
  notes.project = text;
  saveNotesState(notes);
}

function getTopicNote(filePath) {
  const notes = getNotesState();
  return notes.topics[filePath] || '';
}

function saveTopicNote(filePath, text) {
  const notes = getNotesState();
  notes.topics[filePath] = text;
  saveNotesState(notes);
}

// ==========================================================================
// Static Question Bank based on Java concepts in user's src folder
// ==========================================================================
// QUESTIONS_BANK is loaded from questions.js (included via script tag in index.html)


// ==========================================================================
// Syntax Highlighting Engine (Regex based, 100% offline & fast)
// ==========================================================================
function highlightJava(code) {
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  const comments = [];
  html = html.replace(/\/\*[\s\S]*?\*\//g, (match) => {
    const id = `__BLOCK_COMMENT_${comments.length}__`;
    comments.push({ id, text: `<span class="code-comment">${match}</span>` });
    return id;
  });
  
  html = html.replace(/\/\/.*/g, (match) => {
    const id = `__LINE_COMMENT_${comments.length}__`;
    comments.push({ id, text: `<span class="code-comment">${match}</span>` });
    return id;
  });
  
  const strings = [];
  html = html.replace(/"(\\.|[^"\\])*"/g, (match) => {
    const id = `__STRING_${strings.length}__`;
    strings.push({ id, text: `<span class="code-string">${match}</span>` });
    return id;
  });
  
  const keywords = /\b(public|protected|private|static|final|class|interface|record|enum|extends|implements|package|import|new|return|if|else|for|while|do|switch|case|default|break|continue|try|catch|throw|throws|finally|this|super|instanceof)\b/g;
  html = html.replace(keywords, '<span class="code-keyword">$1</span>');
  
  const types = /\b(int|double|float|long|short|byte|boolean|char|void|String|Object|System|Exception|NullPointerException|BankAccount|Customer|Animal|Dog|Fish|Worker|Employee|SalariedEmployee|HourlyEmployee|Wall|Point|House|Car|Student|StudentRecord)\b/g;
  html = html.replace(types, '<span class="code-type">$1</span>');
  
  html = html.replace(/\b(\d+(\.\d+)?[dfL]?)\b/g, '<span class="code-number">$1</span>');
  
  // Annotations MUST come after keywords/types so 'class' inside generated span attributes is not re-processed
  html = html.replace(/@\w+/g, '<span class="code-annotation">$&</span>');
  
  strings.forEach(item => {
    html = html.replace(item.id, item.text);
  });
  comments.forEach(item => {
    html = html.replace(item.id, item.text);
  });
  
  return html;
}

// ==========================================================================
// Dashboard Logic & Event Handlers
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  setupTheme();
  renderSidebar();
  updateStats();
  renderResumeChapters();
  setupEventListeners();
  initPracticeLab();
  
  // Show Overview View on start
  showView('dashboard-view');
}

function setupTheme() {
  const currentTheme = localStorage.getItem('javarev_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeToggle = document.getElementById('theme-toggle');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  const sunIcon = themeToggle.querySelector('.sun-icon');
  
  if (currentTheme === 'light') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('javarev_theme', newTheme);
  
  const themeToggle = document.getElementById('theme-toggle');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  const sunIcon = themeToggle.querySelector('.sun-icon');
  
  if (newTheme === 'light') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

// View switching
function showView(viewId) {
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.remove('active');
  });
  document.getElementById(viewId).classList.add('active');
  
  // Update sidebar active states
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  if (viewId === 'dashboard-view') {
    document.getElementById('nav-dashboard-btn').classList.add('active');
  } else if (viewId === 'quiz-view') {
    document.getElementById('nav-quiz-menu-btn').classList.add('active');
  } else if (viewId === 'practice-view') {
    document.getElementById('nav-practice-btn').classList.add('active');
  } else if (viewId === 'notes-view') {
    document.getElementById('nav-notes-btn').classList.add('active');
  }
}

function shuffleArray(items) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function pickRandomQuestions(pool, count) {
  const shuffled = shuffleArray(pool);
  if (count >= shuffled.length) {
    return shuffled;
  }
  return shuffled.slice(0, count);
}

function pickSmartQuestions(pool, count, difficultyFilter) {
  const history = getQuestionHistory();
  let filtered = [...pool];

  if (difficultyFilter && difficultyFilter !== 'all') {
    const filtered2 = filtered.filter(q => (q.difficulty || 'easy') === difficultyFilter);
    if (filtered2.length >= Math.min(count, 5)) filtered = filtered2;
  }

  const weighted = filtered.map(q => ({ q, w: getQuestionWeight(q.qid, history) }));

  const selected = [];
  const usedIndices = new Set();

  for (let pick = 0; pick < count && usedIndices.size < weighted.length; pick++) {
    const available = weighted.filter((_, i) => !usedIndices.has(i));
    if (available.length === 0) break;

    const totalWeight = available.reduce((s, item) => s + item.w, 0);
    let rand = Math.random() * totalWeight;
    let chosenIdx = -1;
    for (let i = 0; i < available.length; i++) {
      rand -= available[i].w;
      if (rand <= 0) { chosenIdx = i; break; }
    }
    if (chosenIdx === -1) chosenIdx = available.length - 1;

    selected.push(available[chosenIdx].q);
    let count2 = 0;
    for (let i = 0; i < weighted.length; i++) {
      if (!usedIndices.has(i)) {
        if (count2 === chosenIdx) { usedIndices.add(i); break; }
        count2++;
      }
    }
  }

  return selected;
}

function setQuizDifficulty(level, btn) {
  currentDifficultyFilter = level;
  document.querySelectorAll('.diff-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function getQuestionsForScope(chapterName, subChapterName) {
  const chapterQuestions = QUESTIONS_BANK[chapterName] || [];
  if (!subChapterName) {
    return chapterQuestions;
  }

  const chapter = CONCEPTS_DATA.find(c => c.name === chapterName);
  if (!chapter) {
    return chapterQuestions;
  }

  const scopedTopics = chapter.topics
    .filter(topic => topic.subChapter === subChapterName)
    .map(topic => topic.topicName);

  if (scopedTopics.length === 0) {
    return chapterQuestions;
  }

  return chapterQuestions.filter(question => scopedTopics.includes(question.topic));
}

function getQuestionScope(question) {
  if (question.chapter || question.topic) {
    return {
      chapterName: question.chapter || currentQuizScope.chapterName,
      subChapterName: currentQuizScope.subChapterName || null,
      topicName: question.topic || null
    };
  }

  return {
    chapterName: currentQuizScope.chapterName,
    subChapterName: currentQuizScope.subChapterName,
    topicName: null
  };
}

function openQuizRevisit(scope) {
  if (!scope || !scope.chapterName) {
    return;
  }

  const chapter = CONCEPTS_DATA.find(c => c.name === scope.chapterName);
  if (!chapter) {
    return;
  }

  let topicIndex = 0;
  if (scope.topicName) {
    const foundIndex = chapter.topics.findIndex(t => t.topicName === scope.topicName);
    if (foundIndex >= 0) {
      topicIndex = foundIndex;
    }
  } else if (scope.subChapterName) {
    const foundIndex = chapter.topics.findIndex(t => t.subChapter === scope.subChapterName);
    if (foundIndex >= 0) {
      topicIndex = foundIndex;
    }
  }

  selectTopic(CONCEPTS_DATA.indexOf(chapter), topicIndex);
}

function getScopedPracticeChallenges() {
  if (!currentPracticeScope.chapterName) {
    return PRACTICE_CHALLENGES;
  }
  const scoped = PRACTICE_CHALLENGES.filter(ch => ch.chapter === currentPracticeScope.chapterName);
  return scoped.length > 0 ? scoped : PRACTICE_CHALLENGES;
}

function setupEventListeners() {
  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
  // Sidebar buttons
  document.getElementById('nav-dashboard-btn').addEventListener('click', () => {
    showView('dashboard-view');
  });
  
  document.getElementById('nav-quiz-menu-btn').addEventListener('click', () => {
    startChapterQuiz("Grand Java Quiz");
  });

  document.getElementById('nav-practice-btn').addEventListener('click', () => {
    showPracticeLab({ chapterName: null, subChapterName: null });
  });

  document.getElementById('nav-notes-btn').addEventListener('click', () => {
    openNotesView();
  });
  
  // Dashboard buttons
  document.getElementById('btn-grand-quiz').addEventListener('click', () => {
    startChapterQuiz("Grand Java Quiz");
  });
  
  document.getElementById('btn-reset-data').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all your revision progress and quiz history? This cannot be undone.")) {
      localStorage.removeItem(STORAGE_REVISED_KEY);
      localStorage.removeItem(STORAGE_QUIZ_KEY);
      localStorage.removeItem(STORAGE_PRACTICE_KEY);
      updateStats();
      renderSidebar();
      renderResumeChapters();
      showView('dashboard-view');
    }
  });
  
  // Study navigation buttons
  document.getElementById('btn-mark-revised').addEventListener('click', toggleTopicRevisedState);
  document.getElementById('btn-quiz-this-chapter').addEventListener('click', () => {
    const chapterName = CONCEPTS_DATA[currentChapterIndex].name;
    const topic = CONCEPTS_DATA[currentChapterIndex].topics[currentTopicIndex];
    startChapterQuiz(chapterName, topic ? topic.subChapter : null);
  });
  document.getElementById('btn-practice-this-section').addEventListener('click', () => {
    const chapter = CONCEPTS_DATA[currentChapterIndex];
    const topic = chapter.topics[currentTopicIndex];
    showPracticeLab({
      chapterName: chapter.name,
      subChapterName: topic ? topic.subChapter : null
    });
  });
  document.getElementById('btn-open-notes').addEventListener('click', () => {
    openNotesView();
  });
  document.getElementById('btn-open-selected-topic').addEventListener('click', () => {
    const topicInfo = currentNotesTopicPath ? findTopicByFilePath(currentNotesTopicPath) : null;
    if (topicInfo) {
      selectTopic(topicInfo.chIdx, topicInfo.tpIdx);
    }
  });
  
  document.getElementById('btn-prev-topic').addEventListener('click', loadPrevTopic);
  document.getElementById('btn-next-topic').addEventListener('click', loadNextTopic);
  
  // Copy code helper
  document.getElementById('btn-copy-code').addEventListener('click', copyCodeSnippet);
  
  // Quiz controls
  document.getElementById('btn-start-quiz-now').addEventListener('click', runActiveQuiz);
  document.getElementById('btn-submit-answer').addEventListener('click', submitQuizAnswer);
  document.getElementById('btn-next-question').addEventListener('click', loadNextQuizQuestion);
  document.getElementById('btn-retry-quiz').addEventListener('click', retryQuiz);
  document.getElementById('btn-return-dashboard').addEventListener('click', () => {
    showView('dashboard-view');
  });

  // Revision Depth controls
  document.getElementById('btn-depth-detailed').addEventListener('click', () => {
    setRevisionDepth('detailed');
  });
  document.getElementById('btn-depth-quick').addEventListener('click', () => {
    setRevisionDepth('quick');
  });
  
  // Search feature
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });
}

// ==========================================================================
// Sidebar & Content Rendering
// ==========================================================================
function renderSidebar() {
  const container = document.getElementById('chapters-list');
  container.innerHTML = '';
  
  const revised = getRevisedTopics();
  
  CONCEPTS_DATA.forEach((chapter, chIdx) => {
    const accordion = document.createElement('div');
    accordion.className = `chapter-accordion ch-${chIdx}`;
    
    // Header trigger
    const trigger = document.createElement('button');
    trigger.className = 'chapter-trigger';
    
    trigger.innerHTML = `
      <span class="chapter-title-text" title="${chapter.name}">${chapter.name}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron-icon"><path d="m9 18 6-6-6-6"/></svg>
    `;
    
    // Sub-topic content block
    const content = document.createElement('div');
    content.className = 'chapter-content';
    
    // Group topics in this chapter by subChapter
    const subChaptersMap = {};
    const directTopics = [];
    
    chapter.topics.forEach((topic, tpIdx) => {
      const topicWithIdx = { ...topic, originalIdx: tpIdx };
      if (topic.subChapter) {
        if (!subChaptersMap[topic.subChapter]) {
          subChaptersMap[topic.subChapter] = [];
        }
        subChaptersMap[topic.subChapter].push(topicWithIdx);
      } else {
        directTopics.push(topicWithIdx);
      }
    });
    
    // Render direct topics first
    directTopics.forEach(topic => {
      renderTopicItem(topic, content, chIdx, topic.originalIdx, revised);
    });
    
    // Render sub-chapters
    Object.keys(subChaptersMap).forEach(subChapterName => {
      const subChWrapper = document.createElement('div');
      subChWrapper.className = 'sidebar-subchapter';
      
      const subChHeader = document.createElement('div');
      subChHeader.className = 'sidebar-subchapter-header';
      subChHeader.innerText = subChapterName;
      subChHeader.title = subChapterName;
      
      subChWrapper.appendChild(subChHeader);
      
      const subChTopicsList = document.createElement('div');
      subChTopicsList.className = 'sidebar-subchapter-topics';
      
      subChaptersMap[subChapterName].forEach(topic => {
        renderTopicItem(topic, subChTopicsList, chIdx, topic.originalIdx, revised);
      });
      
      subChWrapper.appendChild(subChTopicsList);
      content.appendChild(subChWrapper);
    });
    
    trigger.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('open');
      document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.remove('open'));
      if (!isOpen) {
        accordion.classList.add('open');
      }
    });
    
    accordion.appendChild(trigger);
    accordion.appendChild(content);
    container.appendChild(accordion);
  });
}

function renderTopicItem(topic, parentContainer, chIdx, tpIdx, revised) {
  const item = document.createElement('button');
  const isCompleted = revised[topic.filePath];
  item.className = `subtopic-item ${isCompleted ? 'completed' : ''}`;
  item.id = `subtopic-item-${chIdx}-${tpIdx}`;
  
  let displayName = topic.topicName;
  if (displayName.length > 36) {
    displayName = displayName.substring(0, 33) + '...';
  }
  
  item.innerHTML = `
    <span title="${topic.topicName}">${displayName}</span>
    <span class="subtopic-status"></span>
  `;
  
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    selectTopic(chIdx, tpIdx);
  });
  
  parentContainer.appendChild(item);
}

function updateSidebarCompletionStates() {
  const revised = getRevisedTopics();
  CONCEPTS_DATA.forEach((chapter, chIdx) => {
    chapter.topics.forEach((topic, tpIdx) => {
      const element = document.getElementById(`subtopic-item-${chIdx}-${tpIdx}`);
      if (element) {
        if (revised[topic.filePath]) {
          element.classList.add('completed');
        } else {
          element.classList.remove('completed');
        }
      }
    });
  });
}

function updateStats() {
  const revised = getRevisedTopics();
  const history = getQuizHistory();
  
  // Total Topics count
  let totalTopics = 0;
  let completedTopics = 0;
  CONCEPTS_DATA.forEach(chapter => {
    totalTopics += chapter.topics.length;
    chapter.topics.forEach(topic => {
      if (revised[topic.filePath]) {
        completedTopics++;
      }
    });
  });
  
  // Calculate percentage
  const progressPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  document.getElementById('overall-progress-text').innerText = `${progressPercent}%`;
  document.getElementById('overall-progress-bar').style.width = `${progressPercent}%`;
  const pendingTopics = Math.max(totalTopics - completedTopics, 0);
  document.getElementById('overall-progress-sub').innerText = `${completedTopics} revised, ${pendingTopics} left to cover`;
  
  // Total chapters
  document.getElementById('total-chapters-val').innerText = CONCEPTS_DATA.length;
  
  // Quizzes count
  document.getElementById('quiz-taken-val').innerText = history.length;
  
  // Average Score
  if (history.length > 0) {
    const totalScore = history.reduce((sum, h) => sum + h.percentage, 0);
    const avgScore = Math.round(totalScore / history.length);
    document.getElementById('avg-score-val').innerText = `${avgScore}%`;
  } else {
    document.getElementById('avg-score-val').innerText = '0%';
  }
}

function renderResumeChapters() {
  const container = document.getElementById('resume-chapters-list');
  container.innerHTML = '';
  
  const revised = getRevisedTopics();
  
  // Display first 4 chapters
  CONCEPTS_DATA.slice(0, 4).forEach((chapter, chIdx) => {
    const countCompleted = chapter.topics.filter(t => revised[t.filePath]).length;
    const total = chapter.topics.length;
    const remaining = total - countCompleted;
    
    const card = document.createElement('div');
    card.className = 'resume-card';
    card.innerHTML = `
      <div class="resume-card-info">
        <span class="resume-card-title">${chapter.name}</span>
        <span class="resume-card-desc">${countCompleted} reviewed, ${remaining} left</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="resume-card-icon"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    `;
    
    card.addEventListener('click', () => {
      // Open chapter accordion in sidebar and select first topic
      const accordion = document.querySelector(`.chapter-accordion.ch-${chIdx}`);
      if (accordion) {
        document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.remove('open'));
        accordion.classList.add('open');
      }
      selectTopic(chIdx, 0);
    });
    
    container.appendChild(card);
  });
}

function findTopicByFilePath(filePath) {
  for (let chIdx = 0; chIdx < CONCEPTS_DATA.length; chIdx++) {
    const chapter = CONCEPTS_DATA[chIdx];
    for (let tpIdx = 0; tpIdx < chapter.topics.length; tpIdx++) {
      const topic = chapter.topics[tpIdx];
      if (topic.filePath === filePath) {
        return { chapter, topic, chIdx, tpIdx };
      }
    }
  }
  return null;
}

function openNotesView(filePath) {
  if (filePath) {
    currentNotesTopicPath = filePath;
  } else if (!currentNotesTopicPath) {
    const currentTopic = CONCEPTS_DATA[currentChapterIndex] && CONCEPTS_DATA[currentChapterIndex].topics[currentTopicIndex];
    currentNotesTopicPath = currentTopic ? currentTopic.filePath : null;
  }

  renderNotesView();
  showView('notes-view');
}

function renderNotesView() {
  const projectTextarea = document.getElementById('project-notes-textarea');
  const topicTextarea = document.getElementById('topic-notes-textarea');
  const topicTitle = document.getElementById('notes-topic-title');
  const projectMeta = document.getElementById('project-notes-meta');
  const topicMeta = document.getElementById('topic-notes-meta');

  if (projectTextarea) {
    projectTextarea.value = getProjectNotes();
    projectTextarea.oninput = (e) => {
      saveProjectNotes(e.target.value);
      if (projectMeta) projectMeta.innerText = `Last updated ${new Date().toLocaleTimeString()}`;
    };
  }

  const topicInfo = currentNotesTopicPath ? findTopicByFilePath(currentNotesTopicPath) : null;
  if (topicInfo && topicTitle) {
    topicTitle.innerText = `${topicInfo.chapter.name} — ${topicInfo.topic.topicName}`;
  } else if (topicTitle) {
    topicTitle.innerText = 'Topic Notes';
  }

  if (topicTextarea) {
    topicTextarea.value = topicInfo ? getTopicNote(topicInfo.topic.filePath) : '';
    topicTextarea.disabled = !topicInfo;
    topicTextarea.oninput = (e) => {
      if (!topicInfo) return;
      saveTopicNote(topicInfo.topic.filePath, e.target.value);
      if (topicMeta) topicMeta.innerText = `Autosaved ${new Date().toLocaleTimeString()}`;
      renderNotesTopicList();
    };
  }

  if (topicMeta) {
    topicMeta.innerText = topicInfo ? 'Autosaved locally' : 'Select a topic to start writing';
  }

  renderNotesTopicList();
}

function renderNotesTopicList() {
  const container = document.getElementById('notes-topic-list');
  if (!container) return;

  const notes = getNotesState();
  container.innerHTML = '';

  CONCEPTS_DATA.forEach((chapter, chIdx) => {
    const chapterWrap = document.createElement('div');
    chapterWrap.className = 'notes-chapter-group';

    const chapterHeader = document.createElement('button');
    chapterHeader.className = 'notes-chapter-header';
    chapterHeader.innerText = chapter.name;
    chapterHeader.addEventListener('click', () => {
      const firstTopic = chapter.topics[0];
      if (firstTopic) {
        currentNotesTopicPath = firstTopic.filePath;
        renderNotesView();
      }
    });

    const topicList = document.createElement('div');
    topicList.className = 'notes-chapter-topics';

    chapter.topics.forEach(topic => {
      const item = document.createElement('button');
      const hasNote = (notes.topics[topic.filePath] || '').trim().length > 0;
      const isActive = topic.filePath === currentNotesTopicPath;
      item.className = `notes-topic-item ${isActive ? 'active' : ''} ${hasNote ? 'has-note' : ''}`;
      item.innerHTML = `
        <span class="notes-topic-name">${topic.topicName}</span>
        <span class="notes-topic-indicator">${hasNote ? 'Saved' : 'Blank'}</span>
      `;
      item.addEventListener('click', () => {
        currentNotesTopicPath = topic.filePath;
        renderNotesView();
      });
      topicList.appendChild(item);
    });

    chapterWrap.appendChild(chapterHeader);
    chapterWrap.appendChild(topicList);
    container.appendChild(chapterWrap);
  });
}

// ==========================================================================
// Study / Flashcards Logic
// ==========================================================================
function selectTopic(chIdx, tpIdx) {
  currentChapterIndex = chIdx;
  currentTopicIndex = tpIdx;
  
  const chapter = CONCEPTS_DATA[chIdx];
  const topic = chapter.topics[tpIdx];
  currentNotesTopicPath = topic.filePath;
  
  // Highlight in sidebar
  document.querySelectorAll('.subtopic-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeSidebarItem = document.getElementById(`subtopic-item-${chIdx}-${tpIdx}`);
  if (activeSidebarItem) {
    activeSidebarItem.classList.add('active');
  }
  
  // Update header breadcrumbs
  document.getElementById('breadcrumb-chapter').innerText = chapter.name;
  document.getElementById('breadcrumb-topic').innerText = topic.topicName;
  
  // Update Topic Title
  document.getElementById('concept-title').innerText = topic.topicName;
  
  // Update Explanations
  const explanationsContainer = document.getElementById('concept-explanations');
  explanationsContainer.innerHTML = '';
  let usedInlineAsOverview = false;
  
  if (topic.headerComments && topic.headerComments.length > 0) {
    const bullets = document.createElement('ul');
    bullets.className = 'bullet-list concept-bullet-list';

    topic.headerComments.forEach(commentBlock => {
      commentBlock.lines.forEach(line => {
        const li = document.createElement('li');
        
        // Escape HTML entities first, then apply safe markup
        const escaped = line
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        
        // Apply backtick → <code> and bold label formatting
        let formattedLine = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
        if (formattedLine.endsWith(':-') || formattedLine.endsWith(':')) {
          formattedLine = `<strong>${formattedLine}</strong>`;
        }
        li.innerHTML = formattedLine;
        bullets.appendChild(li);
      });
    });
    explanationsContainer.appendChild(bullets);
  } else if (topic.inlineComments && topic.inlineComments.length > 0) {
    const fallbackBullets = document.createElement('ul');
    fallbackBullets.className = 'bullet-list concept-bullet-list';
    topic.inlineComments.slice(0, 12).forEach(comment => {
      const li = document.createElement('li');
      li.innerText = comment;
      fallbackBullets.appendChild(li);
    });
    explanationsContainer.appendChild(fallbackBullets);
    usedInlineAsOverview = true;
  } else {
    explanationsContainer.innerHTML = '<p class="text-muted">No overview comments found for this file. Revise the code example on the right to understand the concept.</p>';
  }
  
  // Inline comments accordion
  const inlineContainer = document.getElementById('inline-comments-panel');
  const inlineList = document.getElementById('inline-comments-list');
  inlineList.innerHTML = '';
  
  if (topic.inlineComments && topic.inlineComments.length > 0 && !usedInlineAsOverview) {
    inlineContainer.style.display = 'block';
    topic.inlineComments.forEach(comment => {
      const li = document.createElement('li');
      li.innerText = comment;
      inlineList.appendChild(li);
    });
  } else {
    inlineContainer.style.display = 'none';
  }
  
  // Code Editor setup
  document.getElementById('code-filename').innerText = topic.fileName;
  const codeContentElement = document.getElementById('code-content');
  codeContentElement.innerHTML = highlightJava(topic.code);
  
  // Revised state toggle button setup
  const revised = getRevisedTopics();
  const btnMark = document.getElementById('btn-mark-revised');
  const btnQuiz = document.getElementById('btn-quiz-this-chapter');
  const btnPractice = document.getElementById('btn-practice-this-section');
  if (revised[topic.filePath]) {
    btnMark.classList.add('completed');
    btnMark.querySelector('span').innerText = 'Revised';
    btnMark.classList.remove('btn-outline');
    btnMark.classList.add('btn-primary-outline');
  } else {
    btnMark.classList.remove('completed');
    btnMark.querySelector('span').innerText = 'Mark as Revised';
    btnMark.classList.add('btn-outline');
    btnMark.classList.remove('btn-primary-outline');
  }

  if (btnQuiz) {
    btnQuiz.innerText = topic.subChapter ? `Quiz This Subchapter` : `Quiz This Chapter`;
  }
  if (btnPractice) {
    btnPractice.innerText = topic.subChapter ? `Practice This Subchapter` : `Practice This Chapter`;
  }
  
  // Pagination text
  document.getElementById('topic-pagination').innerText = `${tpIdx + 1} of ${chapter.topics.length}`;
  
  // Enable/Disable navigation buttons
  document.getElementById('btn-prev-topic').disabled = (tpIdx === 0 && chIdx === 0);
  document.getElementById('btn-next-topic').disabled = (chIdx === CONCEPTS_DATA.length - 1 && tpIdx === chapter.topics.length - 1);
  
  updateRevisionView();
  showView('study-view');
}

function setRevisionDepth(depth) {
  revisionDepth = depth;
  
  document.getElementById('btn-depth-detailed').classList.toggle('active', depth === 'detailed');
  document.getElementById('btn-depth-quick').classList.toggle('active', depth === 'quick');
  
  document.querySelector('.study-grid').style.display = depth === 'detailed' ? 'grid' : 'none';
  document.getElementById('quick-revision-panel').style.display = depth === 'quick' ? 'block' : 'none';
  
  updateRevisionView();
}

function updateRevisionView() {
  const chapter = CONCEPTS_DATA[currentChapterIndex];
  const topic = chapter.topics[currentTopicIndex];
  
  if (revisionDepth === 'quick') {
    renderQuickRevision(topic);
  }
}

function renderQuickRevision(topic) {
  const bulletContainer = document.getElementById('quick-bullet-points');
  const gotchasContainer = document.getElementById('quick-gotchas-list');
  const badgeContainer = document.getElementById('quick-syntax-badges');
  const syntaxCode = document.getElementById('quick-syntax-code');
  
  bulletContainer.innerHTML = '';
  gotchasContainer.innerHTML = '';
  badgeContainer.innerHTML = '';
  
  const chapter = CONCEPTS_DATA[currentChapterIndex];
  
  // Reset flashcard to front face on topic change
  const flashcard = document.getElementById('quick-flashcard');
  if (flashcard) flashcard.classList.remove('is-flipped');
  
  // Populate flashcard front
  const fcChapterLabel = document.getElementById('fc-chapter-label');
  const fcTopicName = document.getElementById('fc-topic-name');
  if (fcChapterLabel) fcChapterLabel.textContent = chapter.name;
  if (fcTopicName) fcTopicName.textContent = topic.topicName;
  
  // Curated lookup first
  const curated = QUICK_REVISION_BANK[chapter.name];
  
  // Populate flashcard back from curated data
  const fcCoreRule = document.getElementById('fc-core-rule');
  const fcProTip = document.getElementById('fc-pro-tip');
  if (curated) {
    if (fcCoreRule) fcCoreRule.textContent = curated.takeaways[0] || 'Review the core concept in this chapter.';
    if (fcProTip) fcProTip.textContent = curated.proTip || curated.gotchas[0] || 'Be precise about edge cases when explaining this in an interview.';
  } else {
    if (fcCoreRule) fcCoreRule.textContent = `Study the structure of ${topic.fileName} to understand key Java constraints.`;
    if (fcProTip) fcProTip.textContent = 'Be aware of implicit type promotions and compiler restrictions. Always mention edge cases in an interview.';
  }
  
  if (curated) {
    curated.takeaways.forEach(rule => {
      const li = document.createElement('li');
      li.innerHTML = rule.replace(/`([^`]+)`/g, '<code>$1</code>');
      bulletContainer.appendChild(li);
    });
    
    curated.gotchas.forEach(gotcha => {
      const li = document.createElement('li');
      li.innerHTML = gotcha.replace(/`([^`]+)`/g, '<code>$1</code>');
      gotchasContainer.appendChild(li);
    });
    
    if (curated.badges) {
      curated.badges.forEach(b => {
        const badge = document.createElement('span');
        badge.className = 'syntax-badge';
        badge.innerText = b;
        badgeContainer.appendChild(badge);
      });
    }
    
    syntaxCode.innerHTML = highlightJava(curated.syntax);
  } else {
    // Dynamic Fallback
    const coreRules = [];
    const gotchas = [];
    const gotchasKeywords = ["gotcha", "pitfall", "warning", "caution", "error", "note", "remember", "important", "trick", "overflow", "bounds", "trap", "avoid"];
    
    if (topic.headerComments && topic.headerComments.length > 0) {
      topic.headerComments.forEach(block => {
        block.lines.forEach(line => {
          const lowerLine = line.toLowerCase();
          const isGotcha = gotchasKeywords.some(keyword => lowerLine.includes(keyword));
          
          const escapedLine = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          let formatted = escapedLine.replace(/`([^`]+)`/g, '<code>$1</code>');
          if (isGotcha) {
            gotchas.push(formatted);
          } else {
            coreRules.push(formatted);
          }
        });
      });
    }
    
    if (coreRules.length === 0) {
      coreRules.push(`Study the structure of <code>${topic.fileName}</code> to understand key Java constraints.`);
      coreRules.push(`Review variable declarations, scopes, and visibility modifiers.`);
    }
    if (gotchas.length === 0) {
      gotchas.push(`Be aware of implicit type promotions and compiler restrictions when working with this topic.`);
      gotchas.push(`Always check boundaries, limits, and potential null references.`);
    }
    
    coreRules.forEach(rule => {
      const li = document.createElement('li');
      li.innerHTML = rule;
      bulletContainer.appendChild(li);
    });
    
    gotchas.forEach(gotcha => {
      const li = document.createElement('li');
      li.innerHTML = gotcha;
      gotchasContainer.appendChild(li);
    });
    
    const code = topic.code;
    const signatureRegex = /(public|private|protected)?\s*(static\s+)?(class|interface|record|enum|[\w<>]+)\s+(\w+)\s*(\([^)]*\))?\s*(?:extends|implements|\{)/g;
    
    const signatures = [];
    let sigMatch;
    while ((sigMatch = signatureRegex.exec(code)) !== null) {
      const fullSig = sigMatch[0].replace(/\{$/, '').trim();
      if (!fullSig.includes('if(') && !fullSig.includes('while(') && !fullSig.includes('for(') && !fullSig.includes('switch(') && !fullSig.includes('return ')) {
        signatures.push(fullSig);
      }
    }
    
    if (signatures.length > 0) {
      signatures.slice(0, 4).forEach(sig => {
        const badge = document.createElement('span');
        badge.className = 'syntax-badge';
        badge.innerText = sig.split('extends')[0].split('implements')[0].trim();
        badgeContainer.appendChild(badge);
      });
      syntaxCode.innerHTML = highlightJava(signatures.join('\n\n') + " {\n    // Implementation details...\n}");
    } else {
      badgeContainer.innerHTML = `<span class="syntax-badge">${topic.fileName.replace('.java', '')}</span>`;
      syntaxCode.innerHTML = highlightJava(`// No specific method signatures extracted.\n// Class reference: ${topic.fileName}`);
    }
  }
}

function toggleTopicRevisedState() {
  const topic = CONCEPTS_DATA[currentChapterIndex].topics[currentTopicIndex];
  const revised = getRevisedTopics();
  const isCompleted = !revised[topic.filePath];
  
  saveRevisedTopic(topic.filePath, isCompleted);
  
  // Toggle button UI
  const btnMark = document.getElementById('btn-mark-revised');
  if (isCompleted) {
    btnMark.classList.add('completed');
    btnMark.querySelector('span').innerText = 'Revised';
    btnMark.classList.remove('btn-outline');
    btnMark.classList.add('btn-primary-outline');
  } else {
    btnMark.classList.remove('completed');
    btnMark.querySelector('span').innerText = 'Mark as Revised';
    btnMark.classList.add('btn-outline');
    btnMark.classList.remove('btn-primary-outline');
  }
}

function loadPrevTopic() {
  if (currentTopicIndex > 0) {
    selectTopic(currentChapterIndex, currentTopicIndex - 1);
  } else if (currentChapterIndex > 0) {
    // Go to previous chapter last topic
    const prevChIdx = currentChapterIndex - 1;
    const lastTopicIdx = CONCEPTS_DATA[prevChIdx].topics.length - 1;
    
    // Open accordion
    document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.remove('open'));
    const acc = document.querySelector(`.chapter-accordion.ch-${prevChIdx}`);
    if (acc) acc.classList.add('open');
    
    selectTopic(prevChIdx, lastTopicIdx);
  }
}

function loadNextTopic() {
  const chapter = CONCEPTS_DATA[currentChapterIndex];
  if (currentTopicIndex < chapter.topics.length - 1) {
    selectTopic(currentChapterIndex, currentTopicIndex + 1);
  } else if (currentChapterIndex < CONCEPTS_DATA.length - 1) {
    // Go to next chapter first topic
    const nextChIdx = currentChapterIndex + 1;
    
    document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.remove('open'));
    const acc = document.querySelector(`.chapter-accordion.ch-${nextChIdx}`);
    if (acc) acc.classList.add('open');
    
    selectTopic(nextChIdx, 0);
  }
}

function copyCodeSnippet() {
  const codeText = CONCEPTS_DATA[currentChapterIndex].topics[currentTopicIndex].code;
  navigator.clipboard.writeText(codeText).then(() => {
    const btn = document.getElementById('btn-copy-code');
    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 1500);
  });
}

// ==========================================================================
// Dynamic Question Generators (Infinite random pool matching user concepts)
// ==========================================================================

function generateDynamicLoopQuestion() {
  const loopTypes = ["for", "while", "do-while"];
  const type = loopTypes[Math.floor(Math.random() * loopTypes.length)];
  const start = Math.floor(Math.random() * 5); // 0 to 4
  const step = Math.floor(Math.random() * 2) + 2; // 2 or 3
  const limit = start + step * (Math.floor(Math.random() * 3) + 3); // 3 to 5 iterations
  
  let code = "";
  let answerVal = 0;
  
  if (type === "for") {
    code = `int sum = 0;\nfor (int i = ${start}; i < ${limit}; i += ${step}) {\n    sum += i;\n}\nSystem.out.println(sum);`;
    for (let i = start; i < limit; i += step) {
      answerVal += i;
    }
  } else if (type === "while") {
    code = `int sum = 0;\nint i = ${start};\nwhile (i < ${limit}) {\n    sum += i;\n    i += ${step};\n}\nSystem.out.println(sum);`;
    let i = start;
    while (i < limit) {
      answerVal += i;
      i += step;
    }
  } else { // do-while
    code = `int sum = 0;\nint i = ${start};\ndo {\n    sum += i;\n    i += ${step};\n} while (i < ${limit});\nSystem.out.println(sum);`;
    let i = start;
    do {
      answerVal += i;
      i += step;
    } while (i < limit);
  }
  
        return {
          type: "predict",
          difficulty: "medium",
          chapter: chapterName,
          question: `Trace the loop execution and predict the exact console output printed by System.out.println(sum):`,
    code: code,
    answer: [String(answerVal)],
    explanation: `The loop starts at i = ${start}, increments by ${step} on each iteration, and executes while i < ${limit}. The final sum of the values is ${answerVal}.`
  };
}

function generateDynamicIncrementQuestion() {
  const xStart = Math.floor(Math.random() * 5) + 1; // 1 to 5
  const yStart = Math.floor(Math.random() * 5) + 1; // 1 to 5
  const patterns = [
    {
      expr: "x++ + ++y",
      calc: (x, y) => {
        const result = x + (y + 1);
        return { res: result, newX: x + 1, newY: y + 1 };
      }
    },
    {
      expr: "++x + y++",
      calc: (x, y) => {
        const result = (x + 1) + y;
        return { res: result, newX: x + 1, newY: y + 1 };
      }
    },
    {
      expr: "x++ - --y",
      calc: (x, y) => {
        const result = x - (y - 1);
        return { res: result, newX: x + 1, newY: y - 1 };
      }
    },
    {
      expr: "++x - y--",
      calc: (x, y) => {
        const result = (x + 1) - y;
        return { res: result, newX: x + 1, newY: y - 1 };
      }
    }
  ];
  
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  const { res, newX, newY } = pattern.calc(xStart, yStart);
  
  const code = `int x = ${xStart};\nint y = ${yStart};\nint z = ${pattern.expr};\nSystem.out.println(x + \",\" + y + \",\" + z);`;
  const answerStr = `${newX},${newY},${res}`;
  const answerAlt = `${newX}, ${newY}, ${res}`;
  
    return {
      type: "predict",
      difficulty: "hard",
      chapter: "Chapter 3: Operators",
      question: `Predict the output of the print statement. Pay close attention to pre/post-increment semantics:`,
    code: code,
    answer: [answerStr, answerAlt],
    explanation: `Initial: x=${xStart}, y=${yStart}. Evaluating '${pattern.expr}' yields z=${res}. In memory, variables update to x=${newX}, y=${newY}. The print outputs 'x,y,z' resulting in '${answerStr}'.`
  };
}

function generateDynamicKeywordQuestion(chapter) {
  if (!chapter || !chapter.topics || chapter.topics.length === 0) return null;
  
  const topics = chapter.topics.slice().sort(() => 0.5 - Math.random());
  const targetKeywords = ["static", "void", "public", "extends", "implements", "finally", "super", "this", "new", "throws", "class", "interface", "record", "enum"];
  
  for (const topic of topics) {
    const code = topic.code;
    const lines = code.split('\n');
    
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];
      if (line.trim().startsWith('import') || line.trim().startsWith('package') || line.trim().startsWith('//') || line.trim().startsWith('*')) continue;
      
      const words = line.split(/\b/);
      const foundKeywords = words.filter(word => targetKeywords.includes(word));
      
      if (foundKeywords.length > 0) {
        const targetKw = foundKeywords[Math.floor(Math.random() * foundKeywords.length)];
        const regex = new RegExp(`\\b${targetKw}\\b`, 'g');
        const maskedLine = line.replace(regex, '[___]');
        
        const startLine = Math.max(0, lineIdx - 2);
        const endLine = Math.min(lines.length - 1, lineIdx + 2);
        
        const contextLines = [];
        for (let j = startLine; j <= endLine; j++) {
          if (j === lineIdx) {
            contextLines.push(maskedLine);
          } else {
            contextLines.push(lines[j]);
          }
        }
        
        const contextCode = contextLines.join('\n');
        const distractors = targetKeywords.filter(kw => kw !== targetKw).sort(() => 0.5 - Math.random()).slice(0, 3);
        const options = [targetKw, ...distractors].sort(() => 0.5 - Math.random());
        const correctIdx = options.indexOf(targetKw);
        
        return {
          type: "scq",
          difficulty: "easy",
          chapter: chapter.name,
          question: `Identify the missing Java keyword marked as [___] in this code snippet from "${topic.fileName}":`,
          code: contextCode,
          options: options,
          answer: correctIdx,
          explanation: `The correct keyword is '${targetKw}' which fits the syntax of this Java statement. File source: ${topic.fileName}.`
        };
      }
    }
  }
  return null;
}

function getDynamicQuestionsForChapter(chapterName, count) {
  const list = [];
  const chapter = CONCEPTS_DATA.find(c => c.name === chapterName);
  if (!chapter) return list;

  for (let i = 0; i < count; i++) {
    const rand = Math.random();
    let q = null;
    
    if (chapterName.includes("Loop") || chapterName.includes("While")) {
      q = generateDynamicLoopQuestion();
    } else if (chapterName.includes("Operator")) {
      q = generateDynamicIncrementQuestion();
    } else {
      q = generateDynamicKeywordQuestion(chapter);
    }
    
    if (!q) {
      if (Math.random() > 0.5) {
        q = generateDynamicLoopQuestion();
      } else {
        q = generateDynamicIncrementQuestion();
      }
    }
    
    if (q) list.push(q);
    if (q && !q.chapter) {
      q.chapter = chapterName;
    }
  }
  return list;
}

// ==========================================================================
// Quiz Gameplay Engine (Upgraded to SCQ, MCQ, Predict, and Conceptual Interview formats)
// ==========================================================================

function startChapterQuiz(chapterName, subChapterName) {
  let questions = [];
  currentQuizScope = {
    chapterName: chapterName,
    subChapterName: subChapterName || null
  };
  
  if (chapterName === "Grand Java Quiz") {
    const allQuestions = [];
    Object.keys(QUESTIONS_BANK).forEach(ch => {
      allQuestions.push(...QUESTIONS_BANK[ch]);
    });
    
    // Shuffle from the full pool every time; no answered-question filtering.
    questions = pickSmartQuestions(allQuestions, 40, currentDifficultyFilter);
    
    // Generate 6 random dynamic questions across chapters to keep it fresh
    const allChapters = Object.keys(QUESTIONS_BANK);
    for (let i = 0; i < 6; i++) {
      const randCh = allChapters[Math.floor(Math.random() * allChapters.length)];
      const dynQs = getDynamicQuestionsForChapter(randCh, 1);
      if (dynQs.length > 0) questions.push(dynQs[0]);
    }

    questions = shuffleArray(questions); // Shuffle mixed pool
    
    document.getElementById('quiz-start-title').innerText = "Grand Java Revision Quiz";
    document.getElementById('quiz-start-desc').innerText = "Test your grasp on all concepts in this Java project. Includes randomized logic predictions, multi-select questions, and technical interview scenarios.";
  } else {
    // Chapter specific questions: combine the full chapter bank with a few dynamic syntax tests
    const staticQs = getQuestionsForScope(chapterName, subChapterName);
    const dynamicQs = subChapterName ? [] : getDynamicQuestionsForChapter(chapterName, 4);
    const chapterLabel = subChapterName ? `${chapterName} > ${subChapterName}` : chapterName;
    
    // Shuffle from the full scoped pool every time; no tracking of previously answered items.
    questions = pickSmartQuestions([...staticQs, ...dynamicQs], 20, currentDifficultyFilter);
    
    document.getElementById('quiz-start-title').innerText = `${chapterLabel} Revision Quiz`;
    document.getElementById('quiz-start-desc').innerText = `Review the core concepts in ${chapterLabel} through dynamic logic tracking, multiple-choice questions, and conceptual mock interviews.`;
  }
  
  if (questions.length === 0) {
    alert("No quiz questions available for this chapter yet. Proceeding with a grand quiz instead!");
    startChapterQuiz("Grand Java Quiz");
    return;
  }
  
  activeQuizQuestions = questions;
  currentQuizQuestionIndex = 0;
  quizScore = 0;
  answeredQuestions = [];
  
  document.getElementById('quiz-question-count').innerText = `${questions.length} Questions`;
  document.getElementById('quiz-est-time').innerText = `${Math.ceil(questions.length * 1.5)} Mins`;
  document.getElementById('quiz-subtitle').innerText = `Revising: ${chapterName === "Grand Java Quiz" ? "All concepts" : (subChapterName ? `${chapterName} > ${subChapterName}` : chapterName)}`;
  
  document.getElementById('quiz-start-container').style.display = 'flex';
  document.getElementById('quiz-active-container').style.display = 'none';
  document.getElementById('quiz-result-container').style.display = 'none';
  
  showView('quiz-view');
}

function runActiveQuiz() {
  document.getElementById('quiz-start-container').style.display = 'none';
  document.getElementById('quiz-active-container').style.display = 'block';
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = activeQuizQuestions[currentQuizQuestionIndex];
  
  // Progress Header
  const total = activeQuizQuestions.length;
  const currentIdx = currentQuizQuestionIndex + 1;
  document.getElementById('current-q-index').innerText = currentIdx;
  document.getElementById('total-q-index').innerText = total;
  document.getElementById('quiz-q-progress').style.width = `${(currentIdx / total) * 100}%`;
  
  // Question text
  document.getElementById('quiz-question-text').innerText = question.question;
  
  // Optional code snippet
  const codeWrapper = document.getElementById('quiz-question-code-wrapper');
  if (question.code) {
    codeWrapper.style.display = 'block';
    document.getElementById('quiz-question-code').innerHTML = highlightJava(question.code);
  } else {
    codeWrapper.style.display = 'none';
  }
  
  // Question Type Badge
  const badge = document.getElementById('quiz-question-type-badge');
  const difficultyBadge = document.getElementById('quiz-question-difficulty-badge');
  const typeMap = {
    'scq': 'Single Choice MCQ',
    'mcq': 'Multiple Choice (Select All)',
    'predict': 'Predict the Output',
    'codefill': 'Code Practice',
    'interview': 'Technical Interview Question'
  };
  badge.innerText = typeMap[question.type] || 'Revision Question';
  const difficulty = (question.difficulty || 'easy').toLowerCase();
  difficultyBadge.innerText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  difficultyBadge.className = `difficulty-badge ${difficulty}`;
  
  // Reset selected choices / input states
  selectedOptionIndex = null;
  selectedOptionIndices = [];
  currentPredictAnswer = '';
  currentInterviewAnswer = '';
  isInterviewCheckingModel = false;
  currentInterviewCheckedPoints = [];
  
  // Show/hide MCQ "Select All" indicator
  const mcqIndicator = document.getElementById('quiz-mcq-indicator');
  if (mcqIndicator) {
    mcqIndicator.style.display = (question.type === 'mcq') ? 'inline-flex' : 'none';
  }
  
  // Show/Hide input panels
  const optionsContainer = document.getElementById('quiz-options-container');
  const inputContainer = document.getElementById('quiz-input-container');
  const interviewContainer = document.getElementById('quiz-interview-container');
  const evalWrapper = document.getElementById('quiz-interview-eval-wrapper');
  
  optionsContainer.style.display = 'none';
  optionsContainer.innerHTML = '';
  inputContainer.style.display = 'none';
  document.getElementById('quiz-predict-input').value = '';
  document.getElementById('quiz-predict-input').disabled = false;
  interviewContainer.style.display = 'none';
  document.getElementById('quiz-interview-textarea').value = '';
  document.getElementById('quiz-interview-textarea').disabled = false;
  evalWrapper.style.display = 'none';
  
  // Action buttons
  document.getElementById('quiz-feedback-text').innerText = '';
  document.getElementById('quiz-feedback-text').className = 'answer-feedback';
  const submitBtn = document.getElementById('btn-submit-answer');
  submitBtn.style.display = 'inline-flex';
  submitBtn.innerText = (question.type === 'interview') ? 'Submit & Reveal Answer' : 'Submit Answer';
  submitBtn.disabled = true;
  document.getElementById('btn-next-question').style.display = 'none';
  
  // Populate UI based on type
  if (question.type === 'scq' || question.type === 'mcq') {
    optionsContainer.style.display = 'flex';
    question.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-item';
      if (question.type === 'mcq') {
        btn.classList.add('multiple-choice');
      }
      btn.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="option-text">${opt}</span>
      `;
      
      btn.addEventListener('click', () => {
        if (submitBtn.style.display !== 'none' && !isInterviewCheckingModel) {
          if (question.type === 'scq') {
            document.querySelectorAll('.option-item').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedOptionIndex = idx;
            submitBtn.disabled = false;
          } else {
            // MCQ (Select all)
            if (btn.classList.contains('selected')) {
              btn.classList.remove('selected');
              selectedOptionIndices = selectedOptionIndices.filter(i => i !== idx);
            } else {
              btn.classList.add('selected');
              selectedOptionIndices.push(idx);
            }
            submitBtn.disabled = selectedOptionIndices.length === 0;
          }
        }
      });
      optionsContainer.appendChild(btn);
    });
  } else if (question.type === 'predict' || question.type === 'codefill') {
    inputContainer.style.display = 'block';
    const predictInput = document.getElementById('quiz-predict-input');
    const inputLabel = inputContainer.querySelector('.input-label');
    if (inputLabel) {
      inputLabel.innerText = (question.type === 'codefill') ? 'Your Code Fill:' : 'Your Predicted Output:';
    }
    predictInput.placeholder = (question.type === 'codefill') ? 'Type the missing keyword or code here...' : 'Type the exact output here...';
    predictInput.focus();
    
    // Bind listeners
    predictInput.oninput = (e) => {
      currentPredictAnswer = e.target.value.trim();
      submitBtn.disabled = currentPredictAnswer.length === 0;
    };
  } else if (question.type === 'interview') {
    interviewContainer.style.display = 'block';
    const textarea = document.getElementById('quiz-interview-textarea');
    textarea.focus();
    
    textarea.oninput = (e) => {
      currentInterviewAnswer = e.target.value.trim();
      submitBtn.disabled = currentInterviewAnswer.length === 0;
    };
  }
}

function submitQuizAnswer() {
  const question = activeQuizQuestions[currentQuizQuestionIndex];
  const submitBtn = document.getElementById('btn-submit-answer');
  const feedback = document.getElementById('quiz-feedback-text');
  const revisitScope = getQuestionScope(question);
  
  if (question.type === 'interview') {
    // Two-step submission for Mock Interview Questions
    if (!isInterviewCheckingModel) {
      // Step 1: Reveal model answer and grading checklist
      isInterviewCheckingModel = true;
      document.getElementById('quiz-interview-textarea').disabled = true;
      
      const evalWrapper = document.getElementById('quiz-interview-eval-wrapper');
      evalWrapper.style.display = 'block';
      document.getElementById('quiz-model-answer').innerText = question.modelAnswer;
      
      // Populate self-evaluation checkboxes
      const checklist = document.getElementById('quiz-interview-checklist');
      checklist.innerHTML = '';
      question.keyPoints.forEach((pt, idx) => {
        const item = document.createElement('div');
        item.className = 'checklist-item';
        item.innerHTML = `
          <input type="checkbox" class="checklist-checkbox" id="pt-${idx}">
          <label for="pt-${idx}" style="flex: 1; cursor: pointer;">${pt}</label>
        `;
        
        item.addEventListener('click', (e) => {
          if (e.target.tagName !== 'INPUT') {
            const cb = item.querySelector('.checklist-checkbox');
            cb.checked = !cb.checked;
            cb.dispatchEvent(new Event('change'));
          }
        });
        
        const cb = item.querySelector('.checklist-checkbox');
        cb.addEventListener('change', () => {
          if (cb.checked) {
            item.classList.add('checked');
            if (!currentInterviewCheckedPoints.includes(idx)) currentInterviewCheckedPoints.push(idx);
          } else {
            item.classList.remove('checked');
            currentInterviewCheckedPoints = currentInterviewCheckedPoints.filter(i => i !== idx);
          }
        });
        checklist.appendChild(item);
      });
      
      submitBtn.innerText = 'Complete Self-Evaluation';
    } else {
      // Step 2: Finalize score based on checked boxes (requires >= 50% points to be marked correct)
      const checkedCount = currentInterviewCheckedPoints.length;
      const totalPoints = question.keyPoints.length;
      const isCorrect = checkedCount >= Math.ceil(totalPoints / 2);
      
      if (isCorrect) {
        quizScore++;
      }
      
      answeredQuestions.push({
        question: question.question,
        selected: `Covered ${checkedCount}/${totalPoints} criteria points`,
        correct: `Covered >= ${Math.ceil(totalPoints / 2)} criteria points`,
        isCorrect,
        scope: revisitScope
      });
      recordQuestionResult(question.qid, isCorrect);
      
      if (isCorrect) {
        feedback.innerText = `✓ Evaluated: Covered ${checkedCount}/${totalPoints} key points. Great explanation!`;
        feedback.className = "answer-feedback text-success";
      } else {
        feedback.innerHTML = `✗ Evaluated: Covered ${checkedCount}/${totalPoints} key points. Try to include more core details. <button class="btn btn-outline btn-small" id="btn-revisit-missed-topic">Revisit Topic Again</button>`;
        feedback.className = "answer-feedback text-danger";
        const revisitBtn = document.getElementById('btn-revisit-missed-topic');
        if (revisitBtn && revisitScope.chapterName) {
          revisitBtn.addEventListener('click', () => openQuizRevisit(revisitScope));
        }
      }
      
      // Toggle buttons
      submitBtn.style.display = 'none';
      const nextBtn = document.getElementById('btn-next-question');
      nextBtn.style.display = 'inline-flex';
      nextBtn.innerText = (currentQuizQuestionIndex === activeQuizQuestions.length - 1) ? "See Results" : "Next Question";
    }
  } else {
    // Normal single-choice/multi-choice/predict submission
    let isCorrect = false;
    
    if (question.type === 'scq') {
      isCorrect = selectedOptionIndex === question.answer;
      
      const options = document.querySelectorAll('.option-item');
      options.forEach((optBtn, idx) => {
        optBtn.classList.remove('selected');
        if (idx === question.answer) {
          optBtn.classList.add('correct');
        } else if (idx === selectedOptionIndex) {
          optBtn.classList.add('incorrect');
        }
      });
      
      answeredQuestions.push({
        question: question.question,
        selected: selectedOptionIndex,
        correct: question.answer,
        isCorrect,
        scope: revisitScope
      });
      recordQuestionResult(question.qid, isCorrect);
    } else if (question.type === 'mcq') {
      const sortedCorrect = question.answer.slice().sort();
      const sortedUser = selectedOptionIndices.slice().sort();
      isCorrect = sortedCorrect.length === sortedUser.length && sortedCorrect.every((val, i) => val === sortedUser[i]);
      
      const options = document.querySelectorAll('.option-item');
      options.forEach((optBtn, idx) => {
        optBtn.classList.remove('selected');
        const isUserSelected = selectedOptionIndices.includes(idx);
        const isActualCorrect = question.answer.includes(idx);
        if (isActualCorrect) {
          optBtn.classList.add('correct');
        } else if (isUserSelected && !isActualCorrect) {
          optBtn.classList.add('incorrect');
        }
      });
      
      answeredQuestions.push({
        question: question.question,
        selected: selectedOptionIndices,
        correct: question.answer,
        isCorrect,
        scope: revisitScope
      });
      recordQuestionResult(question.qid, isCorrect);
    } else if (question.type === 'predict' || question.type === 'codefill') {
      const predictInput = document.getElementById('quiz-predict-input');
      predictInput.disabled = true;
      const userText = currentPredictAnswer.toLowerCase().replace(/\s+/g, '');
      isCorrect = question.answer.some(ans => ans.trim().toLowerCase().replace(/\s+/g, '') === userText);
      
      if (isCorrect) {
        predictInput.style.borderColor = 'var(--success)';
      } else {
        predictInput.style.borderColor = 'var(--danger)';
      }
      
      answeredQuestions.push({
        question: question.question,
        selected: currentPredictAnswer,
        correct: question.answer[0],
        isCorrect,
        scope: revisitScope
      });
      recordQuestionResult(question.qid, isCorrect);
    }
    
    if (isCorrect) {
      quizScore++;
      feedback.innerText = "✓ Correct! " + question.explanation;
      feedback.className = "answer-feedback text-success";
    } else {
      let correctAnsStr = "";
      if (question.type === 'predict' || question.type === 'codefill') {
        correctAnsStr = ` Correct answer: "${question.answer[0]}".`;
      }
      feedback.innerHTML = `✗ Incorrect.${correctAnsStr} ${question.explanation} <button class="btn btn-outline btn-small" id="btn-revisit-missed-topic">Revisit Topic Again</button>`;
      feedback.className = "answer-feedback text-danger";
      const revisitBtn = document.getElementById('btn-revisit-missed-topic');
      if (revisitBtn && revisitScope.chapterName) {
        revisitBtn.addEventListener('click', () => openQuizRevisit(revisitScope));
      }
    }
    
    // Toggle buttons
    submitBtn.style.display = 'none';
    const nextBtn = document.getElementById('btn-next-question');
    nextBtn.style.display = 'inline-flex';
    nextBtn.innerText = (currentQuizQuestionIndex === activeQuizQuestions.length - 1) ? "See Results" : "Next Question";
  }
}

function loadNextQuizQuestion() {
  if (currentQuizQuestionIndex < activeQuizQuestions.length - 1) {
    currentQuizQuestionIndex++;
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quiz-active-container').style.display = 'none';
  document.getElementById('quiz-result-container').style.display = 'block';
  
  const total = activeQuizQuestions.length;
  const percentage = Math.round((quizScore / total) * 100);
  
  document.getElementById('result-score-text').textContent = `${percentage}%`;
  document.getElementById('result-correct-count').textContent = quizScore;
  document.getElementById('result-incorrect-count').textContent = total - quizScore;
  
  const chapterName = document.getElementById('quiz-start-title').innerText.replace(" Revision Quiz", "").replace(" Revision Quiz", "");
  document.getElementById('result-topic-name').textContent = chapterName;
  
  const circle = document.getElementById('result-radial-fill');
  circle.setAttribute('stroke-dasharray', `${percentage}, 100`);
  
  saveQuizResult(chapterName, quizScore, total);
  
  // Detailed review breakdown populate
  const breakdown = document.getElementById('quiz-results-breakdown');
  breakdown.innerHTML = '';
  
  answeredQuestions.forEach((ans, idx) => {
    const item = document.createElement('div');
    item.className = 'review-item';
    
    const statusText = ans.isCorrect ? '<span class="text-success bold">Correct</span>' : '<span class="text-danger bold">Incorrect</span>';
    
    let selectedText = "";
    let correctText = "";
    
    const q = activeQuizQuestions[idx];
    
    if (q.type === 'scq') {
      selectedText = q.options[ans.selected] || "Unanswered";
      correctText = q.options[ans.correct];
    } else if (q.type === 'mcq') {
      selectedText = Array.isArray(ans.selected) ? ans.selected.map(i => q.options[i]).join(', ') : "None";
      correctText = Array.isArray(ans.correct) ? ans.correct.map(i => q.options[i]).join(', ') : "";
    } else {
      selectedText = ans.selected;
      correctText = ans.correct;
    }
    
    item.innerHTML = `
      <div class="review-question">Q${idx + 1}: ${ans.question} - ${statusText}</div>
      <div class="review-answer-row">
        <div><span class="review-label">Your Response:</span><span class="review-value">${selectedText}</span></div>
        <div><span class="review-label">Expected Output / Answer:</span><span class="review-value">${correctText}</span></div>
      </div>
      <div class="review-explanation">${q.explanation || ""}</div>
      ${(!ans.isCorrect && ans.scope && ans.scope.chapterName) ? `<button class="btn btn-outline btn-small revisit-topic-btn" data-review-idx="${idx}">Revisit Topic Again</button>` : ''}
    `;
    
    breakdown.appendChild(item);

    const revisitBtn = item.querySelector('.revisit-topic-btn');
    if (revisitBtn && ans.scope && ans.scope.chapterName) {
      revisitBtn.addEventListener('click', () => openQuizRevisit(ans.scope));
    }
  });
}

function retryQuiz() {
  currentQuizQuestionIndex = 0;
  quizScore = 0;
  answeredQuestions = [];
  
  // Reshuffle questions to avoid memorization on retry!
  activeQuizQuestions = activeQuizQuestions.sort(() => 0.5 - Math.random());
  
  document.getElementById('quiz-result-container').style.display = 'none';
  document.getElementById('quiz-active-container').style.display = 'block';
  
  renderQuizQuestion();
}

// ==========================================================================
// Live Search Logic
// ==========================================================================
function handleSearch(query) {
  const trimmed = query.trim().toLowerCase();
  
  if (trimmed.length < 2) {
    // Hide search results and return to previous state
    if (document.getElementById('search-view').classList.contains('active')) {
      showView('dashboard-view');
    }
    return;
  }
  
  const matches = [];
  
  CONCEPTS_DATA.forEach((chapter, chIdx) => {
    chapter.topics.forEach((topic, tpIdx) => {
      let score = 0;
      let snippet = '';
      
      // Match file name or topic name
      if (topic.topicName.toLowerCase().includes(trimmed) || topic.fileName.toLowerCase().includes(trimmed)) {
        score += 10;
      }
      
      // Match in chapter or subchapter
      if (chapter.name.toLowerCase().includes(trimmed) || (topic.subChapter && topic.subChapter.toLowerCase().includes(trimmed))) {
        score += 5;
      }
      
      // Match in explanations
      let explanationMatch = false;
      if (topic.headerComments) {
        topic.headerComments.forEach(block => {
          block.lines.forEach(line => {
            if (line.toLowerCase().includes(trimmed)) {
              score += 2;
              if (!snippet) {
                snippet = line;
              }
              explanationMatch = true;
            }
          });
        });
      }
      
      // Match in code
      if (topic.code.toLowerCase().includes(trimmed)) {
        score += 1;
        if (!snippet && !explanationMatch) {
          // Find the matching line in code
          const lines = topic.code.split('\n');
          const matchLine = lines.find(l => l.toLowerCase().includes(trimmed));
          if (matchLine) snippet = "Code match: " + matchLine.trim();
        }
      }
      
      if (score > 0) {
        if (!snippet) {
          snippet = topic.headerComments?.[0]?.lines?.[0] || 'No description available.';
        }
        
        matches.push({
          chapterIndex: chIdx,
          topicIndex: tpIdx,
          chapterName: chapter.name,
          subChapterName: topic.subChapter,
          topicName: topic.topicName,
          snippet: snippet,
          score: score
        });
      }
    });
  });
  
  // Sort by score
  matches.sort((a, b) => b.score - a.score);
  
  // Render search results
  renderSearchResults(matches, query);
}

function renderSearchResults(results, query) {
  showView('search-view');
  
  const summaryText = document.getElementById('search-summary');
  summaryText.innerHTML = `Found <strong>${results.length}</strong> match${results.length === 1 ? '' : 'es'} for "<strong>${query}</strong>"`;
  
  const container = document.getElementById('search-results-container');
  container.innerHTML = '';
  
  if (results.length === 0) {
    container.innerHTML = `
      <div class="card">
        <div class="card-body centered-content">
          <p class="text-muted">No topics or code examples match your search terms. Try searching for terms like 'variable', 'method', 'loop', 'switch', or 'constructor'.</p>
        </div>
      </div>
    `;
    return;
  }
  
  results.forEach(res => {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    
    let meta = res.chapterName;
    if (res.subChapterName) {
      meta += ` > ${res.subChapterName}`;
    }
    
    card.innerHTML = `
      <div class="search-result-meta">${meta}</div>
      <h3>${res.topicName}</h3>
      <div class="search-result-snippet">${res.snippet}</div>
    `;
    
    card.addEventListener('click', () => {
      // Reset search bar and click topic
      document.getElementById('search-input').value = '';
      
      // Expand accordion
      document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.remove('open'));
      const acc = document.querySelector(`.chapter-accordion.ch-${res.chapterIndex}`);
      if (acc) acc.classList.add('open');
      
      selectTopic(res.chapterIndex, res.topicIndex);
    });
    
    container.appendChild(card);
  });
}

// ==========================================================================
// Practice Lab Coding Challenges & Simulated Compiler
// ==========================================================================

function getPassedChallenges() {
  const data = localStorage.getItem(STORAGE_PRACTICE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveChallengePassed(id) {
  const passed = getPassedChallenges();
  passed[id] = true;
  localStorage.setItem(STORAGE_PRACTICE_KEY, JSON.stringify(passed));
  renderChallengesList();
}

const PRACTICE_CHALLENGES = [
  {
    id: "casting",
    title: "Tricky Primitive Casting",
    difficulty: "Easy",
    chapter: "Chapter 2: Primitive Types",
    description: `
      <p>Write a method <code>public static boolean isLossyCast(double val)</code> that checks whether casting a <code>double</code> to an <code>int</code> will result in a loss of precision/data (i.e. losing the fractional part).</p>
      <p>Your method should return:</p>
      <ul>
        <li><code>true</code> if the cast is lossy (e.g. <code>3.14</code> becomes <code>3</code>, which loses <code>0.14</code>).</li>
        <li><code>false</code> if there is no loss of precision (e.g. <code>5.0</code> becomes <code>5</code>, which is identical).</li>
      </ul>
    `,
    template: `public class PracticeWorkspace {\n    public static boolean isLossyCast(double val) {\n        // Write your code here\n        return false;\n    }\n}`,
    testCases: [
      { args: [3.14], expected: true },
      { args: [5.0], expected: false },
      { args: [-2.5], expected: true },
      { args: [0.0], expected: false }
    ],
    verify: function(userCode, testCase) {
      const body = extractMethodBody(userCode, "isLossyCast");
      const fn = new Function("val", body);
      return fn(testCase.args[0]) === testCase.expected;
    }
  },
  {
    id: "modulus",
    title: "Modulus Without Operators",
    difficulty: "Medium",
    chapter: "Chapter 3: Operators",
    description: `
      <p>Write a method <code>public static int getModulus(int dividend, int divisor)</code> that returns the remainder of the division of <code>dividend</code> by <code>divisor</code> <strong>without</strong> using the modulus operator (<code>%</code>) or division operator (<code>/</code>).</p>
      <p>Assume both inputs are positive integers.</p>
    `,
    template: `public class PracticeWorkspace {\n    public static int getModulus(int dividend, int divisor) {\n        // Write your code here\n        return 0;\n    }\n}`,
    testCases: [
      { args: [10, 3], expected: 1 },
      { args: [20, 5], expected: 0 },
      { args: [7, 8], expected: 7 },
      { args: [0, 4], expected: 0 }
    ],
    verify: function(userCode, testCase) {
      const body = extractMethodBody(userCode, "getModulus");
      const fn = new Function("dividend", "divisor", body);
      return fn(testCase.args[0], testCase.args[1]) === testCase.expected;
    }
  },
  {
    id: "leapyear",
    title: "Perfect Leap Year Checker",
    difficulty: "Medium",
    chapter: "Chapter 7: Methods In Java",
    description: `
      <p>Write a method <code>public static boolean isLeapYear(int year)</code> that returns <code>true</code> if the parameter <code>year</code> is a leap year, and <code>false</code> otherwise.</p>
      <p>A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.</p>
      <p>If the parameter <code>year</code> is not in the range <strong>[1, 9999]</strong>, return <code>false</code> immediately.</p>
    `,
    template: `public class PracticeWorkspace {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}`,
    testCases: [
      { args: [2000], expected: true },
      { args: [1900], expected: false },
      { args: [2024], expected: true },
      { args: [2023], expected: false },
      { args: [10000], expected: false }
    ],
    verify: function(userCode, testCase) {
      const body = extractMethodBody(userCode, "isLeapYear");
      const fn = new Function("year", body);
      return fn(testCase.args[0]) === testCase.expected;
    }
  },
  {
    id: "palindrome",
    title: "Tricky Palindrome Numbers",
    difficulty: "Medium",
    chapter: "Chapter 9: Java Looping Concepts",
    description: `
      <p>Write a method <code>public static boolean isPalindrome(int number)</code> that returns <code>true</code> if the number is a palindrome, and <code>false</code> otherwise.</p>
      <p>A palindrome number reads the same forwards and backwards. Negative numbers should be supported by ignoring their negative sign (e.g. <code>-121</code> is a palindrome).</p>
      <p>Do <strong>not</strong> convert the number to a <code>String</code> to solve this!</p>
    `,
    template: `public class PracticeWorkspace {\n    public static boolean isPalindrome(int number) {\n        // Write your code here\n        return false;\n    }\n}`,
    testCases: [
      { args: [121], expected: true },
      { args: [-121], expected: true },
      { args: [123], expected: false },
      { args: [7], expected: true }
    ],
    verify: function(userCode, testCase) {
      const body = extractMethodBody(userCode, "isPalindrome");
      const fn = new Function("number", body);
      return fn(testCase.args[0]) === testCase.expected;
    }
  },
  {
    id: "statictracking",
    title: "Static Instance Tracking",
    difficulty: "Medium",
    chapter: "Chapter 11: Class Object Static And Instance Fields",
    description: `
      <p>Create a static variable tracker. Write a method <code>public static int track(int countToCreate)</code> that simulates instantiating a class multiple times.</p>
      <p>Each instantiation increments a static counter. Return the total instances created.</p>
      <p>For example, if the class has a static counter, starting from 0, and you instantiate it 3 times, the counter should be 3.</p>
    `,
    template: `public class PracticeWorkspace {\n    private static int instanceCount = 0;\n    \n    public PracticeWorkspace() {\n        instanceCount++;\n    }\n    \n    public static int track(int countToCreate) {\n        // Write your code here to instantiate PracticeWorkspace countToCreate times\n        // and return the current instanceCount.\n        return 0;\n    }\n}`,
    testCases: [
      { args: [3], expected: 3 },
      { args: [5], expected: 8 },
      { args: [1], expected: 9 }
    ],
    verify: function(userCode, testCase) {
      const count = testCase.args[0];
      const body = extractMethodBody(userCode, "track");
      
      const simulator = `
        let instanceCount = ${this.accumulated || 0};
        function Constructor() {
            instanceCount++;
        }
        function track(countToCreate) {
            ${body.replace(/new\s+PracticeWorkspace\(\)/g, "Constructor()")}
            return instanceCount;
        }
        return track(${count});
      `;
      const fn = new Function(simulator);
      const res = fn();
      this.accumulated = res;
      return res === testCase.expected;
    }
  },
  {
    id: "polymorphism",
    title: "Method Overriding with super()",
    difficulty: "Hard",
    chapter: "Chapter 14: OOP Concepts",
    description: `
      <p>In OOP, overriding allows a child class to provide a specific implementation of a method that is already provided by its parent class.</p>
      <p>Write a method <code>public static String getPolymorphicMessage()</code> inside a subclass <code>Child</code> that overrides the parent <code>Parent</code>'s method <code>public String getMessage()</code>.</p>
      <p>Your child method should invoke <code>super.getMessage()</code> and prepend the string <code>"Child: "</code> to it.</p>
      <p>The parent <code>Parent</code> class has been defined for you and returns <code>"Parent Message"</code>.</p>
    `,
    template: `class Parent {\n    public String getMessage() {\n        return "Parent Message";\n    }\n}\n\npublic class PracticeWorkspace extends Parent {\n    @Override\n    public String getMessage() {\n        // Write code here to override getMessage and return: "Child: " + parent message\n        return "";\n    }\n    \n    public static String getPolymorphicMessage() {\n        PracticeWorkspace child = new PracticeWorkspace();\n        return child.getMessage();\n    }\n}`,
    testCases: [
      { args: [], expected: "Child: Parent Message" }
    ],
    verify: function(userCode, testCase) {
      const body = extractMethodBody(userCode, "getMessage");
      
      const simulator = `
        class Parent {
            getMessage() { return "Parent Message"; }
        }
        class PracticeWorkspace extends Parent {
            getMessage() {
                const super_getMessage = () => super.getMessage();
                ${body.replace(/super\.getMessage\(\)/g, "super_getMessage()")}
            }
        }
        const child = new PracticeWorkspace();
        return child.getMessage();
      `;
      const fn = new Function(simulator);
      return fn() === testCase.expected;
    }
  }
];

function initPracticeLab() {
  const textarea = document.getElementById('practice-code-textarea');
  if (textarea) {
    textarea.addEventListener('input', syncLineNumbers);
    textarea.addEventListener('scroll', () => {
      document.getElementById('editor-line-numbers').scrollTop = textarea.scrollTop;
    });
  }
  
  const resetBtn = document.getElementById('btn-reset-practice');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const challenge = getScopedPracticeChallenges()[currentChallengeIndex];
      if (!challenge) {
        return;
      }
      textarea.value = challenge.template;
      syncLineNumbers();
      logToConsole("SYSTEM: Editor template reset successfully.");
    });
  }
  
  const runBtn = document.getElementById('btn-run-practice');
  if (runBtn) {
    runBtn.addEventListener('click', runPracticeChallenge);
  }
  
  const clearBtn = document.getElementById('btn-clear-console');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      document.getElementById('console-output').innerText = '';
    });
  }
}

function showPracticeLab(scope) {
  if (scope) {
    currentPracticeScope = {
      chapterName: scope.chapterName || null,
      subChapterName: scope.subChapterName || null
    };
  } else if (!currentPracticeScope.chapterName) {
    const chapter = CONCEPTS_DATA[currentChapterIndex];
    const topic = chapter.topics[currentTopicIndex];
    currentPracticeScope = {
      chapterName: chapter.name,
      subChapterName: topic ? topic.subChapter : null
    };
  }

  currentChallengeIndex = 0;
  showView('practice-view');
  renderChallengesList();
  selectChallenge(currentChallengeIndex);
}

function renderChallengesList() {
  const container = document.getElementById('challenge-list');
  const scopeLabel = document.getElementById('practice-scope-label');
  container.innerHTML = '';
  
  const passed = getPassedChallenges();
  const scopedChallenges = getScopedPracticeChallenges();
  if (currentChallengeIndex >= scopedChallenges.length) {
    currentChallengeIndex = 0;
  }

  if (scopeLabel) {
    scopeLabel.innerText = currentPracticeScope.chapterName
      ? (currentPracticeScope.subChapterName ? `${currentPracticeScope.chapterName} > ${currentPracticeScope.subChapterName}` : currentPracticeScope.chapterName)
      : 'All chapters';
  }

  scopedChallenges.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = `challenge-item ${idx === currentChallengeIndex ? 'active' : ''}`;
    
    const isPassed = passed[ch.id];
    
    btn.innerHTML = `
      <span class="challenge-item-title">${ch.title}</span>
      <div class="challenge-item-meta">
        <span class="difficulty-badge ${ch.difficulty.toLowerCase()}">${ch.difficulty}</span>
        <span class="challenge-item-status ${isPassed ? 'passed' : 'unresolved'}">${isPassed ? 'Passed' : 'Pending'}</span>
      </div>
    `;
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.challenge-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectChallenge(idx);
    });
    
    container.appendChild(btn);
  });
}

function selectChallenge(index) {
  currentChallengeIndex = index;
  const scopedChallenges = getScopedPracticeChallenges();
  const challenge = scopedChallenges[index];
  if (!challenge) {
    return;
  }
  
  document.getElementById('practice-title').innerText = challenge.title;
  const diffBadge = document.getElementById('practice-difficulty');
  diffBadge.innerText = challenge.difficulty;
  diffBadge.className = `difficulty-badge ${challenge.difficulty.toLowerCase()}`;
  
  document.getElementById('practice-instructions').innerHTML = challenge.description;
  
  const textarea = document.getElementById('practice-code-textarea');
  textarea.value = challenge.template;
  syncLineNumbers();
  
  // Render test cases grid
  const casesContainer = document.getElementById('test-cases-grid');
  casesContainer.innerHTML = '';
  
  challenge.testCases.forEach((tc, idx) => {
    const card = document.createElement('div');
    card.className = 'test-case-card';
    card.id = `test-case-card-${idx}`;
    
    let argsText = tc.args.length > 0 ? tc.args.map(a => typeof a === 'string' ? `"${a}"` : a).join(', ') : 'None';
    
    card.innerHTML = `
      <div class="test-case-info">
        <span class="test-case-args">Input: (${argsText})</span>
        <span class="test-case-expected">Expected: ${tc.expected}</span>
      </div>
      <div class="test-case-status pending" id="test-case-status-${idx}"></div>
    `;
    casesContainer.appendChild(card);
  });
  
  logToConsole(`SYSTEM READY: Loaded challenge "${challenge.title}". Click Compile & Run to verify your solution.`);
}

function logToConsole(message, type = "info") {
  const consoleOut = document.getElementById('console-output');
  if (type === "clear") {
    consoleOut.innerText = message;
    return;
  }
  
  const time = new Date().toLocaleTimeString();
  consoleOut.innerText += `\n[${time}] ${message}`;
  consoleOut.scrollTop = consoleOut.scrollHeight;
}

function syncLineNumbers() {
  const textarea = document.getElementById('practice-code-textarea');
  const container = document.getElementById('editor-line-numbers');
  const linesCount = textarea.value.split('\n').length;
  
  container.innerHTML = '';
  for (let i = 1; i <= linesCount; i++) {
    const span = document.createElement('span');
    span.innerText = i;
    container.appendChild(span);
  }
}

function compileJavaCode(code, challengeId) {
  const errors = [];
  
  let curlyBraces = 0;
  let parentheses = 0;
  let brackets = 0;
  
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (char === '{') curlyBraces++;
    else if (char === '}') curlyBraces--;
    else if (char === '(') parentheses++;
    else if (char === ')') parentheses--;
    else if (char === '[') brackets++;
    else if (char === ']') brackets--;
  }
  
  if (curlyBraces !== 0) {
    errors.push("error: reached end of file while parsing (mismatched curly braces)");
  }
  if (parentheses !== 0) {
    errors.push("error: mismatched parentheses '(' or ')'");
  }
  
  const lines = code.split('\n');
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.length === 0) return;
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.endsWith('*/')) return;
    if (trimmed.startsWith('@') || trimmed.includes('class ') || trimmed.includes('interface ')) return;
    if (trimmed.endsWith('{') || trimmed.endsWith('}') || trimmed.endsWith(';')) return;
    
    if (trimmed.includes('=') || trimmed.includes('return') || trimmed.includes('System.out') || trimmed.includes('instanceCount++')) {
      errors.push(`line ${idx + 1}: error: ';' expected`);
    }
  });

  const doubleToIntRegex = /\bint\s+\w+\s*=\s*\d+\.\d+/;
  if (doubleToIntRegex.test(code)) {
    errors.push("error: incompatible types: possible lossy conversion from double to int");
  }
  
  if (challengeId === "modulus") {
    const cleanCode = code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    if (cleanCode.includes('%')) {
      errors.push("error: modulus operator '%' is forbidden for this challenge");
    }
    if (cleanCode.includes('/')) {
      errors.push("error: division operator '/' is forbidden for this challenge");
    }
  }
  
  if (challengeId === "palindrome") {
    const cleanCode = code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    if (cleanCode.includes('toString') || cleanCode.includes('valueOf') || cleanCode.includes('String.')) {
      errors.push("error: Converting numbers to Strings is forbidden for this challenge. Solve it purely using mathematical looping!");
    }
  }
  
  return errors;
}

function extractMethodBody(code, methodName) {
  const regex = new RegExp(`public\\s+(?:static\\s+)?(?:\\w+|<[^>]+>)\\s+${methodName}\\s*\\([^)]*\\)\\s*\\{`);
  const match = code.match(regex);
  if (!match) {
    throw new Error(`Method '${methodName}' not found or has incorrect signature.`);
  }
  
  const startIdx = match.index + match[0].length;
  let braceCount = 1;
  let endIdx = startIdx;
  
  while (braceCount > 0 && endIdx < code.length) {
    const char = code[endIdx];
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
    }
    endIdx++;
  }
  
  if (braceCount > 0) {
    throw new Error("Mismatched curly braces in class definition.");
  }
  
  return code.substring(startIdx, endIdx - 1);
}

function runPracticeChallenge() {
  const code = document.getElementById('practice-code-textarea').value;
  const challenge = getScopedPracticeChallenges()[currentChallengeIndex];
  if (!challenge) {
    logToConsole("No practice challenge is available for the current scope.", "error");
    return;
  }
  
  logToConsole("COMPILING PracticeWorkspace.java...", "clear");
  
  // 1. Run simulated compiler
  const compileErrors = compileJavaCode(code, challenge.id);
  if (compileErrors.length > 0) {
    compileErrors.forEach(err => logToConsole(err, "error"));
    logToConsole(`COMPILATION FAILED: ${compileErrors.length} error(s) found.`, "error");
    
    // Set all test case badges to fail
    challenge.testCases.forEach((tc, idx) => {
      const statusEl = document.getElementById(`test-case-status-${idx}`);
      statusEl.className = 'test-case-status fail';
    });
    return;
  }
  
  logToConsole("COMPILATION SUCCESSFUL. Executing test cases...");
  
  let allPassed = true;
  challenge.testCases.forEach((tc, idx) => {
    const statusEl = document.getElementById(`test-case-status-${idx}`);
    try {
      if (challenge.id === "statictracking" && idx === 0) {
        challenge.accumulated = 0;
      }
      
      const passed = challenge.verify(code, tc);
      if (passed) {
        statusEl.className = 'test-case-status pass';
        logToConsole(`Test Case ${idx + 1}: Passed.`);
      } else {
        statusEl.className = 'test-case-status fail';
        allPassed = false;
        logToConsole(`Test Case ${idx + 1}: Failed. Output mismatch.`, "error");
      }
    } catch (err) {
      statusEl.className = 'test-case-status fail';
      allPassed = false;
      logToConsole(`Test Case ${idx + 1}: Failed with Exception: ${err.message}`, "error");
    }
  });
  
  if (allPassed) {
    logToConsole("\n✓ SUCCESS: ALL TEST CASES PASSED!", "success");
    logToConsole("Saving challenge completed status... Great job!");
    saveChallengePassed(challenge.id);
  } else {
    logToConsole("\n✗ FAILURE: Some test cases did not pass. Debug your logic and try again.", "error");
  }
}
