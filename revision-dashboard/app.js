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
// Which view the quiz was launched from, so closing it returns the author there rather
// than always dumping him on the Overview.
let quizOriginView = 'dashboard-view';
// True while reviewing an earlier question. The options are not clickable and Submit is
// hidden, so stepping back can never change the score.
let quizReviewMode = false;
let currentDifficultyFilter = 'all'; // 'all', 'easy', 'medium', 'hard'
let currentTagFilter = 'all'; // 'all', 'ocjp', 'interview', 'tricky', 'predict', 'concept', 'codefill'
let currentPracticeTab = 'coding'; // 'coding' or 'deep'
// When the whole challenge set is shown it is ordered weakest-concept-first, so the top
// of the list is what to do. The author can turn that off and get the file order back.
let practiceOrderByWeakness = true;

// Anki-style spaced-repetition flashcard state
let quickRevMode = 'flashcards';   // 'flashcards' (Anki) or 'browse'
let ankiScope = 'chapter';         // 'chapter' or 'all'
let ankiDeck = [];                 // array of card objects for the active deck
let ankiQueue = [];                // in-session study queue (subset of ankiDeck)
let ankiCurrentCard = null;        // card currently shown
let ankiFlipped = false;           // is the current card showing its answer
let ankiSessionReviewed = 0;       // cards graduated (not "again") this session
let ankiDeckKey = null;            // identifies which deck is currently built/active
let ankiActive = false;            // true when Anki flashcard UI is on screen (for keyboard)


// LocalStorage helpers
const STORAGE_REVISED_KEY = 'javarev_revised_topics';
const STORAGE_QUIZ_KEY = 'javarev_quiz_history';
const STORAGE_PRACTICE_KEY = 'javarev_practice_status';
const STORAGE_NOTES_KEY = 'javarev_notes';
const STORAGE_QHISTORY_KEY = 'javarev_question_history';
const STORAGE_ANKI_KEY = 'javarev_anki_srs';
// A half-finished quiz. Closing a quiz saves it here, so closing is instant and
// lossless and needs no confirmation dialog.
const STORAGE_QUIZ_PROGRESS_KEY = 'javarev_quiz_progress';

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
  if (isCorrect) {
    hist[qid].correct++;
    hist[qid].lastCorrectMs = Date.now();
  } else {
    hist[qid].wrong++;
  }

  // A question now has a real DUE DATE, not only a weight. Without this a question
  // that was answered wrongly was merely MORE LIKELY to be picked again, never
  // guaranteed to come back before it was forgotten. The schedule is deliberately
  // simple: wrong means "again in this session", right means tomorrow and then
  // further out each time. See questionDueMs.
  const DAY = 24 * 60 * 60 * 1000;
  const s = hist[qid];
  if (isCorrect) {
    s.intervalDays = s.intervalDays ? Math.round(s.intervalDays * 2.5) : 1;
  } else {
    s.intervalDays = 0;
  }
  s.dueMs = s.intervalDays > 0 ? Date.now() + s.intervalDays * DAY : Date.now() + 10 * 60 * 1000;

  localStorage.setItem(STORAGE_QHISTORY_KEY, JSON.stringify(hist));
}

// When a question should be seen again. A question that has never been answered is
// due now, which is how new material enters the queue.
function questionDueMs(record) {
  if (!record) return 0;
  if (typeof record.dueMs === 'number') return record.dueMs;
  // Answered before due dates were recorded, so treat it as due rather than losing it.
  return 0;
}

function getQuestionWeight(qid, history) {
  if (!qid || !history[qid]) return 10; // never seen â€” highest priority
  const h = history[qid];
  const daysSince = (Date.now() - h.lastSeenMs) / (1000 * 60 * 60 * 24);
  if (h.wrong > h.correct && daysSince < 7) return 8;  // recently wrong
  if (h.wrong > h.correct) return 5;                    // wrong (older)
  if (daysSince > 14) return 3;                          // not seen in 2 weeks
  return 1;                                              // recently correct
}

// ============================================================================
// Mastery: what am I actually weak at?
//
// Accuracy was recorded per question from the start but never aggregated, so the
// dashboard could not answer the one question that matters for revision: which
// concepts am I bad at. Everything below is derived from data already stored, so
// nothing new has to be recorded for it to work on history that already exists.
// ============================================================================

const MASTERY_MIN_SEEN = 3;          // fewer than this and a score is noise
const MASTERY_PROVEN = 0.8;          // accuracy at which a concept counts as proved

function questionIndex() {
  if (questionIndexCache) return questionIndexCache;
  const byId = new Map();
  const byConcept = new Map();
  for (const [chapterName, questions] of Object.entries(QUESTIONS_BANK)) {
    for (const q of questions || []) {
      byId.set(q.qid, { ...q, chapter: chapterName });
      for (const concept of q.concepts || []) {
        if (!byConcept.has(concept)) byConcept.set(concept, []);
        byConcept.get(concept).push(q.qid);
      }
    }
  }
  questionIndexCache = { byId, byConcept };
  return questionIndexCache;
}
let questionIndexCache = null;

// Per-concept accuracy, weakest first, so the top of the screen is always what to
// work on next.
function getConceptMastery() {
  const history = getQuestionHistory();
  const { byConcept } = questionIndex();
  const rows = [];

  for (const [conceptId, qids] of byConcept) {
    let seen = 0, correct = 0, wrong = 0, lastCorrectMs = 0, lastSeenMs = 0;
    for (const qid of qids) {
      const h = history[qid];
      if (!h || !h.seen) continue;
      seen += h.seen;
      correct += h.correct || 0;
      wrong += h.wrong || 0;
      if (h.lastCorrectMs && h.lastCorrectMs > lastCorrectMs) lastCorrectMs = h.lastCorrectMs;
      if (h.lastSeenMs && h.lastSeenMs > lastSeenMs) lastSeenMs = h.lastSeenMs;
    }
    const answered = correct + wrong;
    rows.push({
      id: conceptId,
      name: conceptDisplayName(conceptId),
      questions: qids.length,
      answered,
      correct,
      wrong,
      seen,
      accuracy: answered ? correct / answered : null,
      lastCorrectMs,
      lastSeenMs,
      attempted: answered > 0,
      proved: answered >= MASTERY_MIN_SEEN && (correct / answered) >= MASTERY_PROVEN
    });
  }

  // Weakest first: unattempted work is not "weak", it is simply not started, so
  // attempted concepts sort by accuracy and unattempted ones come after them.
  rows.sort((a, b) => {
    if (a.attempted !== b.attempted) return a.attempted ? -1 : 1;
    if (a.attempted && b.attempted) {
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
      // Same accuracy: the one untouched for longer is the more urgent.
      return (a.lastSeenMs || 0) - (b.lastSeenMs || 0);
    }
    return a.name.localeCompare(b.name);
  });
  return rows;
}

function humanAgo(ms) {
  if (!ms) return 'never';
  const mins = Math.round((Date.now() - ms) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + ' min ago';
  const hours = Math.round(mins / 60);
  if (hours < 24) return hours + (hours === 1 ? ' hour ago' : ' hours ago');
  const days = Math.round(hours / 24);
  return days + (days === 1 ? ' day ago' : ' days ago');
}

// ============================================================================
// One review queue: questions and flashcards together, ordered by due date.
//
// There were two systems. Flashcards had a real SM-2 schedule with due dates.
// Questions had only a weight, so a question answered wrongly was more likely to
// reappear but never guaranteed to. This merges both into one list, because what
// matters to the learner is "what is due", not which system it came from.
// ============================================================================

function getDueQuestions() {
  const history = getQuestionHistory();
  const { byId } = questionIndex();
  const now = Date.now();
  const due = [];
  for (const [qid, record] of Object.entries(history)) {
    if (!record || !record.seen) continue;
    const when = questionDueMs(record);
    if (when > now) continue;
    const question = byId.get(qid);
    if (!question) continue;   // the question no longer exists in the bank
    due.push({
      kind: 'question',
      id: qid,
      due: when,
      overdueMs: now - when,
      title: String(question.question || 'Question').slice(0, 120),
      chapter: question.chapter,
      detail: `${question.difficulty || 'medium'} Â· wrong ${record.wrong || 0} of ${(record.wrong || 0) + (record.correct || 0)}`
    });
  }
  return due;
}

function getDueCards() {
  const state = getAnkiState();
  const now = Date.now();
  const due = [];
  for (const [cardId, s] of Object.entries(state)) {
    if (!s) continue;
    const when = typeof s.due === 'number' ? s.due : 0;
    if (when > now) continue;
    due.push({ kind: 'card', id: cardId, due: when, overdueMs: now - when, title: 'Flashcard', chapter: '', detail: s.state || 'review' });
  }
  return due;
}

// Everything due, oldest first, whatever kind it is.
function getReviewQueue() {
  const items = [...getDueQuestions(), ...getDueCards()];
  items.sort((a, b) => a.due - b.due);
  return items;
}

// ============================================================================
// Readiness: one honest number.
//
// Three things go into it, and each is deliberately a different question:
//   accuracy   how often you are right when you answer
//   coverage   how much of the material you have actually attempted
//   proof      how many concepts you have answered well enough, repeatedly
//
// A number that only used accuracy would look great after ten easy questions.
// ============================================================================

function computeReadiness() {
  const history = getQuestionHistory();
  const mastery = getConceptMastery();
  const attempted = mastery.filter(m => m.attempted);
  const totalConcepts = mastery.length;
  const provedConcepts = mastery.filter(m => m.proved).length;

  let correct = 0, answered = 0;
  for (const h of Object.values(history)) {
    if (!h || !h.seen) continue;
    correct += h.correct || 0;
    answered += (h.correct || 0) + (h.wrong || 0);
  }

  const accuracy = answered ? correct / answered : 0;
  const coverage = totalConcepts ? attempted.length / totalConcepts : 0;
  const proof = totalConcepts ? provedConcepts / totalConcepts : 0;

  // Proof carries the most weight, because it is the only part that cannot be
  // reached by luck: it needs several right answers on the same concept.
  const score = Math.round((accuracy * 0.35 + coverage * 0.2 + proof * 0.45) * 100);

  return {
    score,
    accuracy, coverage, proof,
    answered, correct,
    conceptsTotal: totalConcepts,
    conceptsAttempted: attempted.length,
    conceptsProved: provedConcepts,
    weakest: attempted.filter(m => !m.proved).slice(0, 5)
  };
}

// ============================================================================
// Progressive unlocking.
//
// A nudge, never a lock. Drilling hard questions before the easy ones are solid is
// how confidence gets destroyed, but blocking a level outright would be worse: the
// learner decides. Each level reports whether it is ready and what would make it so.
// ============================================================================

const LEVEL_READY = 0.7;             // accuracy at a level before the next opens
const LEVEL_MIN_ANSWERED = 5;        // and enough answers for that to mean something

function getLevelProgress() {
  const history = getQuestionHistory();
  const { byId } = questionIndex();
  const levels = { easy: { correct: 0, answered: 0 }, medium: { correct: 0, answered: 0 }, hard: { correct: 0, answered: 0 } };

  for (const [qid, h] of Object.entries(history)) {
    if (!h || !h.seen) continue;
    const question = byId.get(qid);
    if (!question) continue;
    const level = String(question.difficulty || 'medium').toLowerCase();
    if (!levels[level]) continue;
    levels[level].correct += h.correct || 0;
    levels[level].answered += (h.correct || 0) + (h.wrong || 0);
  }

  const summary = {};
  for (const [level, s] of Object.entries(levels)) {
    summary[level] = {
      answered: s.answered,
      accuracy: s.answered ? s.correct / s.answered : null,
      solid: s.answered >= LEVEL_MIN_ANSWERED && (s.correct / s.answered) >= LEVEL_READY
    };
  }
  // Easy is always open. A later level opens when the one before it is solid - OR
  // when the learner has already proved that level itself. Without the second part a
  // learner who had answered 13 medium questions at 77% would be told medium is not
  // open yet, while hard was, which is both wrong and irritating. This is a nudge,
  // never a lock.
  summary.easy.unlocked = true;
  summary.medium.unlocked = summary.easy.solid || summary.medium.solid;
  summary.hard.unlocked = summary.medium.solid || summary.hard.solid;
  return summary;
}

// A short sentence for the UI: why a level is or is not open yet.
function levelStatusText(level, progress) {
  const p = progress[level];
  if (p.unlocked) {
    if (p.answered) return `${Math.round(p.accuracy * 100)}% right over ${p.answered} answered`;
    return level === 'easy' ? 'always open' : 'open, nothing answered yet';
  }
  const needed = level === 'medium' ? 'easy' : 'medium';
  const before = progress[needed];
  const shortfall = Math.max(0, LEVEL_MIN_ANSWERED - before.answered);
  if (shortfall > 0) {
    return `opens after ${shortfall} more ${needed} question${shortfall === 1 ? '' : 's'} (${before.answered} answered)`;
  }
  return `opens at ${Math.round(LEVEL_READY * 100)}% on ${needed} (currently ${Math.round((before.accuracy || 0) * 100)}%)`;
}

// ============================================================================
// Study next: the single most useful thing to do right now.
//
// The dashboard used to offer three generic start buttons. This decides one action
// from the data: overdue reviews first, then the weakest concept, then new material.
// ============================================================================

// ============================================================================
// Where each concept first appears in the author's notes.
//
// "Study next" used to pick the first untried concept ALPHABETICALLY, so with no
// history at all it offered to drill "Abstract classes and interfaces" - a chapter he
// had not reached. It was not a recommendation at all, it was the letter A, and it
// presented itself as advice.
//
// The order that means something is the order of his own notes: the first place a
// concept appears. That makes "next" mean "the next thing in your material", which is
// what a learner expects.
// ============================================================================
let conceptOrderCache = null;

function conceptNotesOrder() {
  if (conceptOrderCache) return conceptOrderCache;
  const { byConcept, byId } = questionIndex();

  // Each topic's position, flattened into one number so concepts can be compared.
  const topicPosition = new Map();
  CONCEPTS_DATA.forEach((chapter, chapterIndex) => {
    (chapter.topics || []).forEach((topic, topicIndex) => {
      topicPosition.set(topic.filePath, chapterIndex * 1000 + topicIndex);
    });
  });

  const position = new Map();
  for (const [conceptId, qids] of byConcept) {
    let earliest = Infinity;
    for (const qid of qids) {
      const question = byId.get(qid);
      if (!question) continue;
      const where = topicPosition.get(question.topicPath);
      if (typeof where === 'number' && where < earliest) earliest = where;
    }
    position.set(conceptId, earliest);
  }
  conceptOrderCache = position;
  return position;
}

// Untried concepts in the order they appear in the notes, so the first one is the
// earliest thing he has not covered.
function untriedConceptsInNotesOrder(mastery) {
  const order = conceptNotesOrder();
  return mastery
    .filter(m => !m.attempted)
    .sort((a, b) => {
      const oa = order.has(a.id) ? order.get(a.id) : Infinity;
      const ob = order.has(b.id) ? order.get(b.id) : Infinity;
      return oa - ob || a.name.localeCompare(b.name);
    });
}

function pickStudyNext() {
  const queue = getReviewQueue();
  const mastery = getConceptMastery();
  const weakest = mastery.find(m => m.attempted && !m.proved);
  const attempted = mastery.filter(m => m.attempted);
  const untouched = untriedConceptsInNotesOrder(mastery);

  // 1. Anything due comes first: forgetting is worse than not having started.
  if (queue.length) {
    const overdue = queue.filter(i => i.overdueMs > 0).length;
    return {
      action: 'review',
      title: `Review ${queue.length} due item${queue.length === 1 ? '' : 's'}`,
      why: overdue
        ? `${overdue} of them ${overdue === 1 ? 'is' : 'are'} past due. Clearing these first is what stops you forgetting them.`
        : 'These are due now, so clearing them first keeps the schedule honest.',
      button: 'Open the review queue',
      handler: 'openReviewQueue'
    };
  }

  // 2. A concept he has tried but not proved. This is a real weakness, measured.
  if (weakest) {
    return {
      action: 'weakest',
      title: `Work on ${weakest.name}`,
      why: `Your weakest concept: ${Math.round(weakest.accuracy * 100)}% right over ${weakest.answered} answer${weakest.answered === 1 ? '' : 's'}, last practised ${humanAgo(weakest.lastSeenMs)}.`,
      button: `Drill ${weakest.name}`,
      handler: 'startWeakestConceptQuiz',
      concept: weakest.id
    };
  }

  // 3. Nothing answered at all. There is no weakness to find, so the honest thing is
  // to start at the beginning of the notes rather than to name a concept at random.
  if (!attempted.length) {
    const firstChapter = CONCEPTS_DATA[0];
    return {
      action: 'start',
      title: firstChapter ? `Start with ${firstChapter.name}` : 'Start with a chapter',
      why: 'You have not answered anything yet, so there is no weakness to work on. This is where your notes begin.',
      button: firstChapter ? `Read ${firstChapter.name}` : 'Open the first chapter',
      handler: 'openFirstChapter'
    };
  }

  // 4. Everything tried is proved. Point at the next thing in the notes, in order.
  if (untouched.length) {
    const next = untouched[0];
    return {
      action: 'new',
      title: `Next in your notes: ${next.name}`,
      why: `Everything you have tried is proved. This is the earliest concept you have not covered yet, out of ${untouched.length} still untried.`,
      button: `Drill ${next.name}`,
      handler: 'startWeakestConceptQuiz',
      concept: next.id
    };
  }

  return {
    action: 'start',
    title: 'Everything is proved',
    why: 'Nothing is due and nothing is weak. Read a chapter you have not revisited in a while, or take the Grand Quiz.',
    button: 'Open the Grand Quiz',
    handler: 'openGrandQuiz'
  };
}

function openGrandQuiz() {
  startChapterQuiz('Grand Java Quiz');
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
  renderStudyNext();
  renderResumeQuiz();
  setupEventListeners();
  initPracticeLab();
  
  // Show Overview View on start
  showView('dashboard-view');
}

function updateThemeIcons(theme) {
  document.querySelectorAll('.theme-icon.moon-icon').forEach(el => {
    el.style.display = theme === 'light' ? 'none' : 'block';
  });
  document.querySelectorAll('.theme-icon.sun-icon').forEach(el => {
    el.style.display = theme === 'light' ? 'block' : 'none';
  });
}

function setupTheme() {
  const currentTheme = localStorage.getItem('javarev_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcons(currentTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('javarev_theme', newTheme);
  updateThemeIcons(newTheme);
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
  } else if (viewId === 'bank-view') {
    document.getElementById('nav-bank-btn').classList.add('active');
  } else if (viewId === 'quiz-menu-view') {
    document.getElementById('nav-quiz-menu-btn').classList.add('active');
  } else if (viewId === 'coverage-view') {
    document.getElementById('nav-coverage-btn').classList.add('active');
  }
}

// ==========================================================================
// Coverage â€” what is covered, and what still needs work
//
// The numbers come from COVERAGE_DATA, which scripts/coverage.js computes on
// every run. The browser never recomputes them, so the ledger, coverage.md and
// this screen can never disagree.
// ==========================================================================

let coverageIncompleteOnly = false;

function coverageCell(value, suffix) {
  if (value === 0) return `<span class="cov-missing">0${suffix || ''}</span>`;
  return `<span class="cov-present">${value}${suffix || ''}</span>`;
}

function chapterNeedsWork(chapter) {
  // A chapter still being written is never flagged. Flagging a half-written chapter
  // is double work, because the author may cover the gap in his next session.
  if (chapter.inProgress) return false;
  return chapter.topicsWithQuestions < chapter.topicsTotal ||
    chapter.easy === 0 ||
    chapter.hard === 0 ||
    chapter.ocjp === 0 ||
    chapter.syntaxIsBoilerplate ||
    (chapter.strayBadges || []).length > 0 ||
    chapter.takeaways === 0 ||
    chapter.practice === 0;
}

function renderCoverage() {
  const data = typeof COVERAGE_DATA !== 'undefined' ? COVERAGE_DATA : null;
  if (!data) {
    document.getElementById('coverage-subtitle').textContent =
      'The ledger has not been generated yet. Run npm run revise.';
    return;
  }

  const t = data.totals;
  document.getElementById('coverage-subtitle').textContent =
    `Generated ${new Date(data.generated).toLocaleString()}. What exists, what is missing, and what to do next. A chapter you are still writing is listed without being judged.`;

  document.getElementById('coverage-summary').innerHTML = `
    <div class="cov-stat"><span class="cov-stat-value">${t.topicsWithQuestions}/${t.topics}</span><span class="cov-stat-label">topics covered</span></div>
    <div class="cov-stat"><span class="cov-stat-value">${t.questions}</span><span class="cov-stat-label">questions</span></div>
    <div class="cov-stat"><span class="cov-stat-value">${t.easy} / ${t.medium} / ${t.hard}</span><span class="cov-stat-label">easy / medium / hard</span></div>
    <div class="cov-stat"><span class="cov-stat-value">${t.ocjp}</span><span class="cov-stat-label">OCJP tagged</span></div>
    <div class="cov-stat"><span class="cov-stat-value">${t.authored}</span><span class="cov-stat-label">written by hand</span></div>
    ${(data.inProgress && data.inProgress.chapters) ? `<div class="cov-stat in-progress"><span class="cov-stat-value">${data.inProgress.chapters}</span><span class="cov-stat-label">still being written</span></div>` : ''}
  `;

  // The work list: exactly what is outstanding, so nothing has to be remembered.
  const work = [];
  if (data.workList.length) {
    work.push(`
      <div class="cov-work-card">
        <h3>${data.workList.length} topic(s) with nothing of their own</h3>
        <ul class="cov-work-list">${data.workList.map(w => `<li>${w.chapter.replace(/^Chapter (\d+).*/, 'Ch$1')} &middot; ${w.topic} &mdash; needs ${w.needs}</li>`).join('')}</ul>
      </div>`);
  }
  if (data.ocjpWork.length) {
    work.push(`
      <div class="cov-work-card">
        <h3>OCJP bank â€” target ${data.ocjpTarget} exam questions per chapter</h3>
        <ul class="cov-work-list">${data.ocjpWork.map(w => `<li>${w.ocjp} now, ${w.gap} to write &middot; ${w.name}</li>`).join('')}</ul>
        <p class="cov-work-note">Ask Copilot: &ldquo;write the OCJP questions for ${data.ocjpWork[0].name}&rdquo;</p>
      </div>`);
  }
  const qr = data.quickRevision;
  if (qr.syntax || qr.badges || qr.tables) {
    const parts = [];
    if (qr.syntax) parts.push(`${qr.syntax} chapter(s) whose syntax snippet is boilerplate rather than the chapter's construct`);
    if (qr.badges) parts.push(`${qr.badges} chapter(s) whose badges are not the syntax the chapter teaches`);
    if (qr.tables) parts.push(`${qr.tables} chapter(s) with no comparison table &mdash; your content to add, nothing is generated`);
    work.push(`<div class="cov-work-card"><h3>Quick Revision</h3><ul class="cov-work-list">${parts.map(p => `<li>${p}</li>`).join('')}</ul></div>`);
  }
  document.getElementById('coverage-work').innerHTML = work.join('');

  // Suggestions: what a finished chapter's code shows and its notes do not
  // explain. Read-only here; the accepting happens in the review page, because
  // that is the one place that writes to the author's files.
  const suggestions = typeof SUGGESTIONS !== 'undefined' ? SUGGESTIONS : null;
  const suggestionBox = document.getElementById('coverage-suggestions');
  if (!suggestions || !suggestions.items.length) {
    suggestionBox.innerHTML = `
      <div class="cov-work-card cov-suggest-empty">
        <h3>Suggested additions</h3>
        <p class="cov-work-note">Nothing to suggest. A suggestion is raised only for a chapter that is finished, and only when the tool can point at the exact API or construct the notes never explain.</p>
      </div>`;
  } else {
    const byChapter = new Map();
    suggestions.items.forEach(item => {
      if (!byChapter.has(item.chapter)) byChapter.set(item.chapter, []);
      byChapter.get(item.chapter).push(item);
    });
    suggestionBox.innerHTML = `
      <div class="cov-work-card">
        <h3>Suggested additions â€” ${suggestions.items.length}</h3>
        <p class="cov-work-note">Things your code uses that your notes do not explain. Nothing is written to your notes until you accept it.</p>
        ${[...byChapter.entries()].map(([chapter, items]) => `
          <div class="cov-suggest-chapter">
            <h4>${chapter}</h4>
            <ul class="cov-work-list">
              ${items.map(i => `<li><strong>${i.topic}</strong> â€” ${i.what}<br><span class="cov-suggest-draft">${(i.draft || []).join(' ')}</span></li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>`;
  }

  // The chapters, with a row per topic.
  const shown = data.chapters.filter(c => !coverageIncompleteOnly || chapterNeedsWork(c));
  document.getElementById('coverage-chapters').innerHTML = shown.map(chapter => {
    const needs = chapterNeedsWork(chapter);
    const flags = [];
    if (chapter.inProgress) {
      flags.push('still being written â€” nothing is generated for it yet, and it is not counted as incomplete');
    } else {
      if (chapter.topicsWithQuestions < chapter.topicsTotal) flags.push(`${chapter.topicsTotal - chapter.topicsWithQuestions} topic(s) with no question`);
      if (chapter.easy === 0) flags.push('no easy question');
      if (chapter.hard === 0) flags.push('no hard question');
      if (chapter.ocjp === 0) flags.push('no OCJP question');
      if (chapter.syntaxIsBoilerplate) flags.push('syntax snippet is boilerplate');
      if ((chapter.strayBadges || []).length) flags.push(`badges no concept of this chapter teaches: ${chapter.strayBadges.join(', ')}`);
      if (chapter.practice === 0) flags.push('no practice challenge');
    }

    return `
      <div class="cov-chapter ${needs ? 'needs-work' : 'complete'}">
        <div class="cov-chapter-head">
          <h2>${chapter.name}</h2>
          <span class="cov-chapter-meta">${chapter.questions} Q (E${chapter.easy} M${chapter.medium} H${chapter.hard}) &middot; OCJP ${chapter.ocjp} &middot; practice ${chapter.practice} &middot; takeaways ${chapter.takeaways} &middot; gotchas ${chapter.gotchas}</span>
        </div>
        ${flags.length ? `<p class="cov-flags">${flags.join(' &middot; ')}</p>` : ''}
        <table class="cov-table">
          <thead><tr><th>Topic</th><th>Notes</th><th>Q</th><th>E</th><th>M</th><th>H</th><th>OCJP</th><th>Challenge</th></tr></thead>
          <tbody>
            ${chapter.topics.map(topic => `
              <tr class="${topic.covered ? '' : 'cov-row-missing'}">
                <td class="cov-topic-name">${topic.name}</td>
                <td>${coverageCell(topic.noteLines)}</td>
                <td>${coverageCell(topic.questions)}</td>
                <td>${topic.easy || '&ndash;'}</td>
                <td>${topic.medium || '&ndash;'}</td>
                <td>${topic.hard || '&ndash;'}</td>
                <td>${topic.ocjp || '&ndash;'}</td>
                <td>${topic.practice ? (topic.practiceAutoChecked ? '<span class="cov-present">auto</span>' : '<span class="cov-selfcheck">self</span>') : '<span class="cov-missing">&ndash;</span>'}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }).join('');
}

function showCoverage() {
  showView('coverage-view');
  renderCoverage();
}

// ==========================================================================
// Mastery, readiness, the review queue and the study-next nudge
// ==========================================================================

// Notes, question text and concept names are the author's own words, so anything
// interpolated into innerHTML has to be escaped or a `<` in a note would break the
// page.
function escapeHtml(value) {
  return String(value === null || value === undefined ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

let masteryFilter = 'all';

function setMasteryFilter(value, btn) {
  masteryFilter = value;
  document.querySelectorAll('.mastery-controls .coverage-filter').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMastery();
}

function showMastery() {
  showView('mastery-view');
  renderMastery();
}

function renderMastery() {
  renderReadiness();
  renderLevels();
  renderReviewQueue();
  renderMasteryList();
}

// ---- The one honest number ---------------------------------------------------
function renderReadiness() {
  const host = document.getElementById('mastery-readiness');
  if (!host) return;
  const r = computeReadiness();

  // A score of zero on an empty history is not a failure, it is the starting line.
  const started = r.answered > 0;
  const band = r.score >= 85 ? 'exam-ready' : r.score >= 65 ? 'nearly-there' : r.score >= 35 ? 'building' : 'starting';
  const verdict = !started
    ? 'Nothing answered yet, so there is nothing to measure. Take a quiz and this becomes real.'
    : r.score >= 85
      ? 'Strong across accuracy, coverage and proof. This is where sitting the exam makes sense.'
      : r.score >= 65
        ? 'Solid, but the weak concepts below are what is holding the number down.'
        : r.score >= 35
          ? 'Building. Accuracy is not the problem yet â€” how much you have proved is.'
          : 'Early days. Keep answering and watch which part moves.';

  host.innerHTML = `
    <div class="readiness-card ${band}">
      <div class="readiness-score">
        <span class="readiness-number">${r.score}</span>
        <span class="readiness-out-of">/ 100</span>
      </div>
      <div class="readiness-body">
        <h2>Exam readiness</h2>
        <p class="readiness-verdict">${verdict}</p>
        <div class="readiness-parts">
          <div class="readiness-part">
            <span class="part-value">${started ? Math.round(r.accuracy * 100) + '%' : 'â€”'}</span>
            <span class="part-label">Accuracy</span>
            <span class="part-note">${r.correct} right of ${r.answered} answered</span>
          </div>
          <div class="readiness-part">
            <span class="part-value">${r.conceptsAttempted} / ${r.conceptsTotal}</span>
            <span class="part-label">Concepts tried</span>
            <span class="part-note">${Math.round(r.coverage * 100)}% of your concepts</span>
          </div>
          <div class="readiness-part">
            <span class="part-value">${r.conceptsProved} / ${r.conceptsTotal}</span>
            <span class="part-label">Concepts proved</span>
            <span class="part-note">${Math.round(MASTERY_PROVEN * 100)}% or better over ${MASTERY_MIN_SEEN}+ answers</span>
          </div>
        </div>
      </div>
    </div>`;
}

// ---- Level unlocking ---------------------------------------------------------
function renderLevels() {
  const host = document.getElementById('mastery-levels');
  if (!host) return;
  const progress = getLevelProgress();
  const rows = ['easy', 'medium', 'hard'].map(level => {
    const p = progress[level];
    return `
      <div class="level-card ${p.unlocked ? 'unlocked' : 'locked'}">
        <div class="level-head">
          <span class="level-name">${level}</span>
          <span class="level-badge">${p.unlocked ? 'open' : 'not yet'}</span>
        </div>
        <p class="level-status">${levelStatusText(level, progress)}</p>
        <button class="btn btn-small ${p.unlocked ? 'btn-primary-outline' : 'btn-outline'}" onclick="startLevelQuiz('${level}')">
          Quiz ${level}
        </button>
      </div>`;
  }).join('');
  host.innerHTML = `
    <div class="mastery-section-head">
      <h2>Levels</h2>
      <p class="panel-subtitle">A nudge, not a lock. Every level stays reachable whenever you want it.</p>
    </div>
    <div class="level-grid">${rows}</div>`;
}

// ---- One review queue --------------------------------------------------------
function renderReviewQueue() {
  const host = document.getElementById('mastery-queue');
  if (!host) return;
  const queue = getReviewQueue();
  const questions = queue.filter(i => i.kind === 'question').length;
  const cards = queue.length - questions;

  if (!queue.length) {
    host.innerHTML = `
      <div class="mastery-section-head">
        <h2>Review queue</h2>
        <p class="panel-subtitle">Nothing is due. Questions and flashcards are scheduled together here.</p>
      </div>`;
    return;
  }

  const shown = queue.slice(0, 8).map(item => `
    <li class="queue-item">
      <span class="queue-kind ${item.kind}">${item.kind === 'question' ? 'Q' : 'Card'}</span>
      <span class="queue-title">${escapeHtml(item.title)}</span>
      <span class="queue-when">${item.overdueMs > 0 ? 'overdue' : 'due now'}</span>
    </li>`).join('');

  host.innerHTML = `
    <div class="mastery-section-head">
      <h2>Review queue</h2>
      <p class="panel-subtitle">${queue.length} due &middot; ${questions} question${questions === 1 ? '' : 's'}, ${cards} flashcard${cards === 1 ? '' : 's'}. Ordered by due date, whatever kind of item it is.</p>
    </div>
    <ul class="queue-list">${shown}</ul>
    ${queue.length > 8 ? `<p class="queue-more">and ${queue.length - 8} more.</p>` : ''}
    <div class="queue-actions">
      <button class="btn btn-primary" onclick="startDueQuestionsQuiz()">Quiz the due questions</button>
      <button class="btn btn-outline" onclick="startAnkiSession()">Open flashcards</button>
    </div>`;
}

// ---- The concept list, weakest first ----------------------------------------
function renderMasteryList() {
  const host = document.getElementById('mastery-list');
  if (!host) return;
  const all = getConceptMastery();
  const rows = all.filter(m => {
    if (masteryFilter === 'weak') return m.attempted && !m.proved;
    if (masteryFilter === 'untried') return !m.attempted;
    return true;
  });

  if (!rows.length) {
    host.innerHTML = '<div class="card"><div class="card-body">Nothing in this filter. ' +
      (masteryFilter === 'weak' ? 'Every concept you have tried is proved â€” a good place to be.' : 'Try a different filter.') +
      '</div></div>';
    return;
  }

  const attemptedCount = all.filter(m => m.attempted).length;
  const head = `<div class="mastery-section-head">
      <h2>Concepts</h2>
      <p class="panel-subtitle">${attemptedCount} of ${all.length} concepts tried &middot; weakest first, so the top of this list is always what to work on.</p>
    </div>`;

  host.innerHTML = head + rows.map(m => {
    const pct = m.attempted ? Math.round(m.accuracy * 100) : null;
    const band = !m.attempted ? 'untried' : m.proved ? 'proved' : pct >= 60 ? 'shaky' : 'weak';
    const bar = m.attempted ? `<span class="mastery-bar"><span class="mastery-bar-fill ${band}" style="width:${pct}%"></span></span>` : '';
    const meta = m.attempted
      ? `${m.correct} right of ${m.answered} &middot; last right ${humanAgo(m.lastCorrectMs)}`
      : `${m.questions} question${m.questions === 1 ? '' : 's'} waiting`;
    return `
      <div class="mastery-row ${band}">
        <div class="mastery-row-main">
          <span class="mastery-name">${escapeHtml(m.name)}</span>
          <span class="mastery-meta">${meta}</span>
          ${bar}
        </div>
        <div class="mastery-row-side">
          <span class="mastery-pct">${pct === null ? 'â€”' : pct + '%'}</span>
          <button class="btn btn-small btn-outline" onclick="startConceptQuiz('${m.id}')">Drill</button>
          ${challengesForConcept(m.id, true).length ? `<button class="btn btn-small btn-outline" onclick="practiseConceptInCode('${m.id}')">Practise in code</button>` : ''}
        </div>
      </div>`;
  }).join('');
}

// ---- The dashboard nudge -----------------------------------------------------
function renderStudyNext() {
  const host = document.getElementById('study-next-panel');
  if (!host) return;
  const next = pickStudyNext();
  host.innerHTML = `
    <div class="study-next-card ${next.action}">
      <div class="study-next-label">Study next</div>
      <h2>${escapeHtml(next.title)}</h2>
      <p>${escapeHtml(next.why)}</p>
      <button class="btn btn-primary" onclick="${next.handler}()">${escapeHtml(next.button)}</button>
    </div>`;
}

// ---- The actions the nudge and the list can take -----------------------------
function startConceptQuiz(conceptId) {
  const pool = questionsForConcept(conceptId);
  if (!pool.length) { alert('No questions carry that concept yet.'); return; }
  startSelectionQuiz(pool, `Concept drill: ${conceptDisplayName(conceptId)}`, Math.min(pool.length, 20));
}

function startWeakestConceptQuiz() {
  const next = pickStudyNext();
  if (next.concept) startConceptQuiz(next.concept);
  else openFirstChapter();
}

function startDueQuestionsQuiz() {
  const history = getQuestionHistory();
  const { byId } = questionIndex();
  const now = Date.now();
  const pool = [];
  for (const [qid, record] of Object.entries(history)) {
    if (!record || !record.seen) continue;
    if (questionDueMs(record) > now) continue;
    const question = byId.get(qid);
    if (question) pool.push(question);
  }
  if (!pool.length) { alert('Nothing is due right now.'); return; }
  startSelectionQuiz(pool, 'Due for review', Math.min(pool.length, 25));
}

function startLevelQuiz(level) {
  const pool = [];
  Object.keys(QUESTIONS_BANK).forEach(ch => (QUESTIONS_BANK[ch] || []).forEach(q => {
    if (String(q.difficulty || 'medium').toLowerCase() === level) pool.push(q);
  }));
  if (!pool.length) { alert(`No ${level} questions yet.`); return; }
  startSelectionQuiz(pool, `${level} questions: all chapters`, Math.min(pool.length, 25));
}

function openFirstChapter() {
  const first = CONCEPTS_DATA[0];
  if (first && first.topics && first.topics[0]) openNotesView(first.topics[0].filePath);
}

function openReviewQueue() {
  showMastery();
  const host = document.getElementById('mastery-queue');
  if (host && host.scrollIntoView) host.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================================================
// Mobile drawer + notes-only helpers
// ==========================================================================
function isMobileView() {
  return window.matchMedia('(max-width: 768px)').matches;
}
function openDrawer() {
  const c = document.querySelector('.app-container');
  if (c) c.classList.add('drawer-open');
}
function closeDrawer() {
  const c = document.querySelector('.app-container');
  if (c) c.classList.remove('drawer-open');
}
function toggleDrawer() {
  const c = document.querySelector('.app-container');
  if (c) c.classList.toggle('drawer-open');
}
function resetMobileCodePanel() {
  const panel = document.querySelector('.study-code-panel');
  if (panel) panel.classList.remove('mobile-show');
  const btn = document.getElementById('mobile-code-toggle');
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    const label = btn.querySelector('span');
    if (label) label.textContent = 'View code example';
  }
}
function toggleMobileCode() {
  const panel = document.querySelector('.study-code-panel');
  const btn = document.getElementById('mobile-code-toggle');
  if (!panel || !btn) return;
  const showing = panel.classList.toggle('mobile-show');
  btn.setAttribute('aria-expanded', showing ? 'true' : 'false');
  const label = btn.querySelector('span');
  if (label) label.textContent = showing ? 'Hide code example' : 'View code example';
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

function pickSmartQuestions(pool, count, difficultyFilter, tagFilter) {
  const history = getQuestionHistory();
  let filtered = [...pool];

  // An explicit filter is honoured. The old code silently fell back to the whole
  // pool when fewer than 5 questions matched, so "Easy" could still serve hard
  // questions. Now the quiz simply gets shorter when few questions match.
  if (difficultyFilter && difficultyFilter !== 'all') {
    const byLevel = filtered.filter(q => (q.difficulty || 'medium') === difficultyFilter);
    if (byLevel.length > 0) filtered = byLevel;
  }

  if (tagFilter && tagFilter !== 'all') {
    const byTag = filtered.filter(q => q.tags && q.tags.includes(tagFilter));
    if (byTag.length > 0) filtered = byTag;
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

function setQuizTag(tag, btn) {
  currentTagFilter = tag;
  document.querySelectorAll('.tag-pill').forEach(b => b.classList.remove('active'));
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
    .map(topic => topic.filePath);

  if (scopedTopics.length === 0) {
    return chapterQuestions;
  }

  return chapterQuestions.filter(question => scopedTopics.includes(question.topicPath));
}

function getQuestionScope(question) {
  if (question.chapter || question.topic) {
    return {
      chapterName: question.chapter || currentQuizScope.chapterName,
      subChapterName: currentQuizScope.subChapterName || null,
      topicName: question.topic || null,
      topicPath: question.topicPath || null
    };
  }

  return {
    chapterName: currentQuizScope.chapterName,
    subChapterName: currentQuizScope.subChapterName,
    topicName: null,
    topicPath: null
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
  if (scope.topicPath) {
    const foundIndex = chapter.topics.findIndex(t => t.filePath === scope.topicPath);
    if (foundIndex >= 0) topicIndex = foundIndex;
  } else if (scope.topicName) {
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
  const all = getAllPracticeChallenges();

  if (!currentPracticeScope.chapterName) {
    // Showing everything: order it by what the author is weakest at, so the top of the
    // list is what to actually do rather than whatever order the files happen to be in.
    return practiceOrderByWeakness ? orderChallengesByWeakness(all) : all;
  }
  const scoped = all.filter(ch => ch.chapter === currentPracticeScope.chapterName);
  return scoped.length > 0 ? scoped : all;
}

// Every challenge, unscoped. The scoped accessor above exists for the lab's LIST; code
// that needs to know what exists - such as Mastery asking whether a challenge teaches a
// concept - must not be affected by whatever chapter the lab happens to be showing.
function getAllPracticeChallenges() {
  // Every challenge comes from practice.js now - both the hand-written ones and the
  // generated ones. They used to be split across two files, which meant the audit
  // could not see the hand-written six and they would have missed their concept tags.
  // See data/practice-challenges.js.
  return (typeof GENERATED_PRACTICE_CHALLENGES !== 'undefined' ? GENERATED_PRACTICE_CHALLENGES : [])
    .map(ch => {
      if (ch.verifyFnStr && !ch.verify) {
        try { ch.verify = eval('(' + ch.verifyFnStr + ')'); } catch (e) { ch.selfCheck = true; }
      }
      return ch;
    });
}

function setupEventListeners() {
  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
  // Sidebar buttons
  document.getElementById('nav-dashboard-btn').addEventListener('click', () => {
    showView('dashboard-view');
  });
  
  document.getElementById('nav-quiz-menu-btn').addEventListener('click', () => {
    renderQuizMenu();
    showView('quiz-menu-view');
  });

  document.getElementById('nav-practice-btn').addEventListener('click', () => {
    showPracticeLab({ chapterName: null, subChapterName: null });
  });

  document.getElementById('nav-notes-btn').addEventListener('click', () => {
    openNotesView();
  });

  document.getElementById('nav-bank-btn').addEventListener('click', () => {
    initBankChapterSelect();
    renderRevisionBank();
    showView('bank-view');
  });

  document.getElementById('nav-coverage-btn').addEventListener('click', () => {
    showCoverage();
  });

  document.getElementById('nav-mastery-btn').addEventListener('click', () => {
    showMastery();
  });

  document.getElementById('coverage-filter-all').addEventListener('click', () => {
    coverageIncompleteOnly = false;
    document.getElementById('coverage-filter-all').classList.add('active');
    document.getElementById('coverage-filter-incomplete').classList.remove('active');
    renderCoverage();
  });

  document.getElementById('coverage-filter-incomplete').addEventListener('click', () => {
    coverageIncompleteOnly = true;
    document.getElementById('coverage-filter-incomplete').classList.add('active');
    document.getElementById('coverage-filter-all').classList.remove('active');
    renderCoverage();
  });
  
  // Dashboard buttons
  document.getElementById('btn-grand-quiz').addEventListener('click', () => {
    startChapterQuiz("Grand Java Quiz");
  });

  const menuGrand = document.getElementById('btn-menu-grand-quiz');
  if (menuGrand) menuGrand.addEventListener('click', () => startChapterQuiz("Grand Java Quiz"));
  const menuOcjp = document.getElementById('btn-menu-ocjp-quiz');
  if (menuOcjp) menuOcjp.addEventListener('click', () => {
    const pool = [];
    Object.keys(QUESTIONS_BANK).forEach(ch => QUESTIONS_BANK[ch].forEach(q => {
      if ((q.tags || []).includes('ocjp')) pool.push(q);
    }));
    startSelectionQuiz(pool, 'OCJP questions: all chapters', 25);
  });
  const menuTricky = document.getElementById('btn-menu-tricky-quiz');
  if (menuTricky) menuTricky.addEventListener('click', () => {
    const pool = [];
    Object.keys(QUESTIONS_BANK).forEach(ch => QUESTIONS_BANK[ch].forEach(q => {
      if ((q.tags || []).includes('tricky')) pool.push(q);
    }));
    startSelectionQuiz(pool, 'Tricky questions: all chapters', 25);
  });
  const menuBank = document.getElementById('btn-menu-open-bank');
  if (menuBank) menuBank.addEventListener('click', () => {
    initBankChapterSelect();
    renderRevisionBank();
    showView('bank-view');
  });

  // Concept drill: one concept, every chapter that covers it. The pool is built
  // from the concept tag on each question, which is the tag the Revision Bank
  // filter uses, so the two can never disagree about what a concept contains.
  const menuConcept = document.getElementById('btn-menu-concept-quiz');
  if (menuConcept) menuConcept.addEventListener('click', () => {
    const select = document.getElementById('menu-concept-select');
    const conceptId = select ? select.value : 'all';
    const pool = questionsForConcept(conceptId);
    if (pool.length === 0) {
      alert('No questions carry that concept yet.');
      return;
    }
    const name = conceptDisplayName(conceptId);
    startSelectionQuiz(pool, `Concept drill: ${name}`, Math.min(pool.length, 25));
  });
  const topicQuizBtn = document.getElementById('btn-quiz-this-topic');
  if (topicQuizBtn) topicQuizBtn.addEventListener('click', startTopicQuiz);
  document.getElementById('btn-start-notes').addEventListener('click', () => {
    openNotesView(CONCEPTS_DATA[0]?.topics?.[0]?.filePath);
  });
  document.getElementById('btn-start-quiz').addEventListener('click', () => {
    startChapterQuiz(CONCEPTS_DATA[0]?.name);
  });
  document.getElementById('btn-start-practice').addEventListener('click', () => {
    showPracticeLab({ chapterName: null, subChapterName: null });
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
  document.getElementById('btn-print-chapter-notes').addEventListener('click', () => {
    const select = document.getElementById('notes-chapter-select');
    printChapterNotes(select ? select.value : currentChapterIndex);
  });
  
  document.getElementById('btn-prev-topic').addEventListener('click', loadPrevTopic);
  document.getElementById('btn-next-topic').addEventListener('click', loadNextTopic);
  
  // Copy code helper
  document.getElementById('btn-copy-code').addEventListener('click', copyCodeSnippet);
  
  // Quiz controls
  document.getElementById('btn-start-quiz-now').addEventListener('click', runActiveQuiz);
  document.getElementById('btn-submit-answer').addEventListener('click', submitQuizAnswer);
  document.getElementById('btn-next-question').addEventListener('click', loadNextQuizQuestion);
  // Closing saves the quiz and returns to where it was launched from. No confirmation:
  // nothing is lost, so there is nothing to confirm.
  document.getElementById('btn-close-quiz').addEventListener('click', closeQuiz);
  document.getElementById('btn-prev-question').addEventListener('click', previousQuizQuestion);
  const practiceOrderBtn = document.getElementById('btn-practice-order');
  if (practiceOrderBtn) practiceOrderBtn.addEventListener('click', togglePracticeOrder);
  document.getElementById('btn-retry-quiz').addEventListener('click', retryQuiz);
  document.getElementById('btn-return-dashboard').addEventListener('click', () => {
    // Back to where the quiz was launched from, not always the Overview.
    showView(quizOriginView || 'dashboard-view');
  });

  // Revision Depth controls
  document.getElementById('btn-depth-detailed').addEventListener('click', () => {
    setRevisionDepth('detailed');
  });
  document.getElementById('btn-depth-quick').addEventListener('click', () => {
    setRevisionDepth('quick');
  });

  // Anki flashcard keyboard shortcuts (Space to reveal, 1-4 to rate)
  document.addEventListener('keydown', handleAnkiKeydown);
  
  // Search feature
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  // Mobile drawer + notes-only controls
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) menuBtn.addEventListener('click', toggleDrawer);
  const backdrop = document.getElementById('drawer-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  const drawerClose = document.getElementById('drawer-close-btn');
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  const browseBtn = document.getElementById('mobile-browse-btn');
  if (browseBtn) browseBtn.addEventListener('click', openDrawer);
  const mobileTheme = document.getElementById('mobile-theme-toggle');
  if (mobileTheme) mobileTheme.addEventListener('click', toggleTheme);
  const codeToggle = document.getElementById('mobile-code-toggle');
  if (codeToggle) codeToggle.addEventListener('click', toggleMobileCode);
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
    
    // Render sub-chapters â€” sorted numerically by Sub_Chapter_N from filePath
    const sortedSubChapterNames = Object.keys(subChaptersMap).sort((a, b) => {
      const aNum = parseInt((subChaptersMap[a][0]?.filePath || '').match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      const bNum = parseInt((subChaptersMap[b][0]?.filePath || '').match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      return aNum - bNum;
    });

    sortedSubChapterNames.forEach(subChapterName => {
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
        // Auto-select first topic so one click navigates directly â€” no second click needed
        selectTopic(chIdx, 0);
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

function escapePrintHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatPrintInline(value) {
  return escapePrintHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
}

function renderPrintTopicNotes(topic) {
  const blocks = topic.headerComments || [];
  let html = '';
  let listItems = [];

  const flushList = () => {
    if (!listItems.length) return;
    html += `<ul>${listItems.map(item => `<li>${formatPrintInline(item.replace(/^[-*â€¢]\s*/, ''))}</li>`).join('')}</ul>`;
    listItems = [];
  };

  blocks.forEach(block => {
    if (block.type === 'table') {
      flushList();
      html += '<div class="print-table-wrap"><table><thead><tr>';
      (block.headers || []).forEach(header => { html += `<th>${formatPrintInline(header)}</th>`; });
      html += '</tr></thead><tbody>';
      (block.rows || []).forEach(row => {
        html += '<tr>';
        row.forEach(cell => { html += `<td>${formatPrintInline(cell)}</td>`; });
        html += '</tr>';
      });
      html += '</tbody></table></div>';
      return;
    }

    if (block.type === 'code' && block.code) {
      flushList();
      html += `<pre><code>${escapePrintHtml(block.code)}</code></pre>`;
      return;
    }

    (block.lines || []).forEach(rawLine => {
      const line = String(rawLine || '').trim();
      if (!line) return;
      const callout = line.match(/^(Warning|OCJP [Tt]rap|Interview [Tt]rap|Pitfall|Important|CAUTION|NOTE)\s*:\s*(.*)/i);
      const heading = /^(Parameter notes|Key Takeaways|Core Concepts|Syntax|Rules|Exception Hierarchy|Method Overview|Good Practices)\b/i.test(line) ||
        ((line.endsWith(':') || line.endsWith(':-')) && line.length < 80 && !line.startsWith('-'));

      if (callout) {
        flushList();
        html += `<aside><strong>${formatPrintInline(callout[1])}</strong> ${formatPrintInline(callout[2])}</aside>`;
      } else if (heading) {
        flushList();
        html += `<h4>${formatPrintInline(line.replace(/[:-]+$/, ''))}</h4>`;
      } else {
        listItems.push(line);
      }
    });
  });
  flushList();

  if (!html && topic.inlineComments && topic.inlineComments.length) {
    html = `<ul>${topic.inlineComments.map(item => `<li>${formatPrintInline(item)}</li>`).join('')}</ul>`;
  }
  return html || '<p class="muted">No generated overview notes are available for this topic.</p>';
}

function isCodeChallengeTopic(topic) {
  return /(challenge|deep\s*problem|deepproblems)/i.test(`${topic.topicName || ''} ${topic.fileName || ''} ${topic.filePath || ''}`);
}

function getChallengeCode(topic) {
  return String(topic.code || '// No solution code available.')
    .replace(/^\s*package[^;]+;\s*/m, '')
    .replace(/^\s*\/\*[\s\S]*?\*\/\s*/, '')
    .trim();
}

function printChapterNotes(chapterIndex) {
  const chapter = CONCEPTS_DATA[Number(chapterIndex)];
  if (!chapter) return;

  const printUrl = new URL(window.location.href);
  printUrl.hash = 'chapter-print';
  const printWindow = window.open(printUrl.href, '_blank');
  if (!printWindow) {
    window.alert('Please allow pop-ups to print chapter notes.');
    return;
  }

  const topics = chapter.topics || [];
  const topicHtml = topics.map((topic, index) => `
    <article class="topic">
      <div class="topic-kicker">Topic ${index + 1} of ${topics.length}</div>
      <h2>${escapePrintHtml(topic.topicName)}</h2>
      <section class="notes-content">${renderPrintTopicNotes(topic)}</section>
      ${isCodeChallengeTopic(topic) && topic.code ? `<section class="challenge-code"><h3>Implementation</h3><pre><code>${escapePrintHtml(getChallengeCode(topic))}</code></pre></section>` : ''}
    </article>`).join('');

  const projectNote = getProjectNotes().trim();
  const projectHtml = projectNote ? `
    <section class="project-notes">
      <h2>Project Notes</h2>
      <div>${formatPrintInline(projectNote).replace(/\r?\n/g, '<br>')}</div>
    </section>` : '';

  printWindow.document.write(`<!doctype html><html><head><meta charset="utf-8"><title></title>
    <style>
      @page { size: A4; margin: 0; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 18mm 16mm; color: #172033; background: #fff; font-family: Arial, Helvetica, sans-serif; font-size: 11pt; line-height: 1.55; }
      .cover { min-height: 261mm; display: flex; flex-direction: column; justify-content: center; border-bottom: 2px solid #d8dee9; page-break-after: always; }
      .eyebrow, .topic-kicker { color: #52627a; text-transform: uppercase; letter-spacing: .08em; font-size: 9pt; font-weight: 700; }
      h1 { margin: 10pt 0; color: #102a43; font-size: 28pt; line-height: 1.15; }
      h2 { margin: 0 0 14pt; padding-bottom: 6pt; color: #102a43; font-size: 19pt; line-height: 1.2; border-bottom: 1px solid #cbd5e1; }
      h3 { margin: 18pt 0 7pt; color: #1f4e79; font-size: 13pt; }
      h4 { margin: 14pt 0 5pt; color: #1f4e79; font-size: 11.5pt; page-break-after: avoid; }
      .cover p { color: #52627a; font-size: 12pt; }
      .topic { page-break-before: always; break-inside: auto; }
      .topic:first-of-type { page-break-before: auto; }
      .topic-kicker { margin-bottom: 6pt; }
      .notes-content p, .notes-content li, .project-notes div { orphans: 3; widows: 3; }
      ul { margin: 6pt 0 12pt; padding-left: 20pt; }
      li { margin: 3pt 0; }
      code { font-family: Consolas, 'Courier New', monospace; }
      :not(pre) > code { padding: 1pt 3pt; background: #eef2f7; border-radius: 3pt; }
      pre { margin: 10pt 0 14pt; padding: 10pt 12pt; background: #f4f6f8; border: 1px solid #d5dce5; border-radius: 4pt; color: #18212f; font: 9pt/1.5 Consolas, 'Courier New', monospace; white-space: pre-wrap; overflow-wrap: anywhere; break-inside: auto; }
      .notes-content > pre { break-inside: avoid; }
      .challenge-code { margin-top: 18pt; }
      .challenge-code h3 { border-bottom: 1px solid #d8dee9; padding-bottom: 4pt; page-break-after: avoid; break-after: avoid; }
      aside { margin: 10pt 0; padding: 8pt 10pt; background: #fff8e6; border-left: 4px solid #d48a00; break-inside: avoid; }
      aside strong { color: #8a5700; }
      .print-table-wrap { margin: 10pt 0 14pt; overflow: visible; break-inside: auto; }
      table { width: 100%; border-collapse: collapse; font-size: 9.5pt; }
      th, td { padding: 6pt 7pt; border: 1px solid #cbd5e1; text-align: left; vertical-align: top; overflow-wrap: anywhere; }
      th { color: #102a43; background: #e8eef5; font-weight: 700; }
      tr { break-inside: avoid; }
      .project-notes { page-break-before: always; }
      .muted { color: #64748b; font-style: italic; }
      @media print { a { color: inherit; text-decoration: none; } }
    </style></head><body>
    <header class="cover"><div class="eyebrow">Java Concepts Revision Notes</div><h1>${escapePrintHtml(chapter.name)}</h1><p>${topics.length} topic${topics.length === 1 ? '' : 's'} in this chapter</p></header>
    ${topicHtml}${projectHtml}
    </body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.setTimeout(() => printWindow.print(), 350);
}

function populateNotesChapterExport() {
  const select = document.getElementById('notes-chapter-select');
  if (!select) return;
  select.innerHTML = CONCEPTS_DATA.map((chapter, index) => `<option value="${index}">${escapePrintHtml(chapter.name)}</option>`).join('');
  select.value = String(currentChapterIndex || 0);
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
    topicTitle.innerText = `${topicInfo.chapter.name} â€” ${topicInfo.topic.topicName}`;
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

  populateNotesChapterExport();
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

    // Sort topics by sub-chapter number before rendering
    const sortedTopics = chapter.topics.slice().sort((a, b) => {
      const aNum = parseInt((a.filePath || '').match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      const bNum = parseInt((b.filePath || '').match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      return aNum - bNum;
    });

    sortedTopics.forEach(topic => {
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
function buildNoteTable(block) {
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

  const wrapper = document.createElement('div');
  wrapper.className = 'note-table-wrapper';

  const table = document.createElement('table');
  table.className = 'note-table';

  if (block.headers && block.headers.length) {
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    block.headers.forEach(h => {
      const th = document.createElement('th');
      th.innerHTML = esc(h);
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
  }

  const tbody = document.createElement('tbody');
  (block.rows || []).forEach(row => {
    const tr = document.createElement('tr');
    row.forEach((cell, idx) => {
      const td = document.createElement('td');
      if (idx === 0) td.className = 'note-table-key';
      td.innerHTML = esc(cell);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  wrapper.appendChild(table);
  return wrapper;
}

function selectTopic(chIdx, tpIdx) {
  currentChapterIndex = chIdx;
  currentTopicIndex = tpIdx;
  
  const chapter = CONCEPTS_DATA[chIdx];
  const topic = chapter.topics[tpIdx];
  currentNotesTopicPath = topic.filePath;

  // Open the correct chapter accordion in the sidebar (single click navigation)
  document.querySelectorAll('.chapter-accordion').forEach((acc, idx) => {
    acc.classList.toggle('open', idx === chIdx);
  });
  
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
    let currentList = null;
    const flushList = () => {
      if (currentList && currentList.childElementCount > 0) {
        explanationsContainer.appendChild(currentList);
      }
      currentList = null;
    };

    topic.headerComments.forEach(commentBlock => {
      if (commentBlock.type === 'table' && commentBlock.headers) {
        flushList();
        explanationsContainer.appendChild(buildNoteTable(commentBlock));
        return;
      }

      if (commentBlock.type === 'code' && commentBlock.code) {
        flushList();
        const pre = document.createElement('pre');
        pre.className = 'note-code-block';
        const code = document.createElement('code');
        code.className = `language-${commentBlock.language || 'java'}`;
        code.innerHTML = highlightJava(commentBlock.code);
        pre.appendChild(code);
        explanationsContainer.appendChild(pre);
        return;
      }

      (commentBlock.lines || []).forEach(rawLine => {
        const trimmedLine = rawLine.trim();

        // Safe HTML escaping helper
        const formatInlineText = (str) => {
          return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/`([^`]+)`/g, '<code>$1</code>');
        };

        // 1. Check for Warning / Gotcha Callouts
        const calloutMatch = trimmedLine.match(/^(Warning|OCJP [Tt]rap|Interview [Tt]rap|Pitfall|Important|CAUTION|NOTE)\s*:\s*(.*)/i);
        if (calloutMatch) {
          flushList();
          const badgeType = calloutMatch[1];
          const textBody = calloutMatch[2];
          const calloutDiv = document.createElement('div');
          calloutDiv.className = 'note-callout note-callout-warning';
          calloutDiv.innerHTML = `
            <div class="callout-header">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="callout-icon"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <strong>${badgeType}:</strong>
            </div>
            <div class="callout-body">${formatInlineText(textBody)}</div>
          `;
          explanationsContainer.appendChild(calloutDiv);
          return;
        }

        // 2. Check for Section Headers (e.g., "Parameter notes (what each argument means...):" or "Exception Hierarchy:")
        const isHeaderLine = /^(Parameter notes|Key Takeaways|Core Concepts|Syntax|Rules|Exception Hierarchy|Method Overview|Good Practices)\b/i.test(trimmedLine) ||
          ((trimmedLine.endsWith(':') || trimmedLine.endsWith(':-')) && trimmedLine.length < 80 && !trimmedLine.startsWith('-'));

        if (isHeaderLine) {
          flushList();
          const headingDiv = document.createElement('h4');
          headingDiv.className = 'note-section-title';
          headingDiv.innerHTML = formatInlineText(trimmedLine.replace(/[:-]+$/, ''));
          explanationsContainer.appendChild(headingDiv);
          return;
        }

        // 3. Check for Parameter Note Items (e.g. "- args (main): ...")
        const paramMatch = trimmedLine.match(/^[-*â€¢]\s*([a-zA-Z0-9_$]+)\s*(?:\(([^)]+)\))?\s*:\s*(.*)/);
        if (paramMatch) {
          flushList();
          const paramName = paramMatch[1];
          const paramContext = paramMatch[2];
          const paramDesc = paramMatch[3];

          const paramCard = document.createElement('div');
          paramCard.className = 'param-note-card';
          paramCard.innerHTML = `
            <div class="param-card-header">
              <code>${paramName}</code>
              ${paramContext ? `<span class="param-context">(${formatInlineText(paramContext)})</span>` : ''}
            </div>
            <div class="param-card-body">${formatInlineText(paramDesc)}</div>
          `;
          explanationsContainer.appendChild(paramCard);
          return;
        }

        // 4. Regular Bullet Point Note
        if (!currentList) {
          currentList = document.createElement('ul');
          currentList.className = 'bullet-list concept-bullet-list';
        }

        const cleanBulletText = trimmedLine.replace(/^[-*â€¢]\s*/, '');
        const li = document.createElement('li');
        li.innerHTML = formatInlineText(cleanBulletText);
        currentList.appendChild(li);
      });
    });
    flushList();
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

  // On mobile, tidy up the drawer / code panel after navigating (keep the
  // user's current Detailed/Quick mode rather than forcing it back)
  if (isMobileView()) {
    resetMobileCodePanel();
    closeDrawer();
    window.scrollTo(0, 0);
  }
}

function setRevisionDepth(depth) {
  revisionDepth = depth;
  
  document.getElementById('btn-depth-detailed').classList.toggle('active', depth === 'detailed');
  document.getElementById('btn-depth-quick').classList.toggle('active', depth === 'quick');
  
  document.querySelector('.study-grid').style.display = depth === 'detailed' ? 'grid' : 'none';
  document.getElementById('quick-revision-panel').style.display = depth === 'quick' ? 'block' : 'none';

  ankiActive = (depth === 'quick' && quickRevMode === 'flashcards');
  updateRevisionView();
}

function updateRevisionView() {
  const chapter = CONCEPTS_DATA[currentChapterIndex];
  const topic = chapter.topics[currentTopicIndex];
  
  if (revisionDepth === 'quick') {
    // Always keep the browse-mode flashcard/notes in sync
    renderQuickRevision(topic);
    if (quickRevMode === 'flashcards') {
      ensureAnkiDeck();
    }
  }
}

// ==========================================================================
// Anki-style Spaced Repetition Flashcards
// ==========================================================================
function setQuickRevMode(mode) {
  quickRevMode = mode;
  const ankiEl = document.getElementById('anki-mode');
  const browseEl = document.getElementById('browse-mode');
  document.getElementById('qr-mode-flashcards').classList.toggle('active', mode === 'flashcards');
  document.getElementById('qr-mode-browse').classList.toggle('active', mode === 'browse');
  if (ankiEl) ankiEl.style.display = mode === 'flashcards' ? 'block' : 'none';
  if (browseEl) browseEl.style.display = mode === 'browse' ? 'block' : 'none';
  ankiActive = (mode === 'flashcards');
  if (mode === 'flashcards') ensureAnkiDeck();
}

function setAnkiScope(scope) {
  if (ankiScope === scope) return;
  ankiScope = scope;
  document.getElementById('anki-scope-chapter').classList.toggle('active', scope === 'chapter');
  document.getElementById('anki-scope-all').classList.toggle('active', scope === 'all');
  ankiDeckKey = null; // force rebuild
  ensureAnkiDeck();
}

// Build deck only when the relevant chapter/scope changes (so topic navigation
// doesn't reset an in-progress study session).
function ensureAnkiDeck() {
  const desiredKey = ankiScope === 'all' ? 'ALL' : CONCEPTS_DATA[currentChapterIndex].name;
  if (ankiDeckKey === desiredKey && ankiDeck.length > 0) {
    renderAnkiArea();
    updateAnkiStats();
    return;
  }
  ankiDeckKey = desiredKey;
  ankiDeck = buildAnkiDeck(ankiScope);
  const titleEl = document.getElementById('anki-deck-title');
  if (titleEl) {
    titleEl.textContent = ankiScope === 'all'
      ? `All Chapters Â· ${ankiDeck.length} cards`
      : `${CONCEPTS_DATA[currentChapterIndex].name} Â· ${ankiDeck.length} cards`;
  }
  startAnkiSession();
}

// ---- Card generation ------------------------------------------------------
function ankiHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = (((h << 5) + h) ^ str.charCodeAt(i)) >>> 0;
  return 'c' + h.toString(36);
}

function ankiEscape(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function ankiCleanText(text) {
  return String(text)
    .replace(/@quiz\s*(\(INTERVIEW TRAP\))?/gi, '')
    .replace(/@answer/gi, '')
    .replace(/^\s*[-*â€¢]\s*/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const ANKI_STOPWORDS = new Set(['this','that','these','those','their','which','where','there','would','could','should','about','after','every','other','first','being','using','java','value','values','when','with','from','have','into','than','then','will','your','each','because','between','inside','outside','before','during','while','means','example']);

function ankiMakeCloze(sentence) {
  const clean = ankiCleanText(sentence);
  if (clean.length < 25) return null;
  const words = clean.split(/\s+/);
  let best = null, bestScore = -1;
  for (const w of words) {
    const bare = w.replace(/[^A-Za-z]/g, '');
    if (bare.length < 5) continue;
    if (ANKI_STOPWORDS.has(bare.toLowerCase())) continue;
    let score = bare.length;
    if (/^[A-Z]/.test(bare)) score += 3;
    if (/^(static|final|public|private|protected|abstract|interface|extends|implements|override|overload|overrid|immutab|mutable|bytecode|compil|interpret|inherit|polymorph|encapsulat|constructor|exception|primitive|reference|autobox)/i.test(bare)) score += 6;
    if (score > bestScore) { bestScore = score; best = bare; }
  }
  if (!best) return null;
  const escaped = best.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('\\b' + escaped + '\\b');
  const front = clean.replace(re, '_____');
  if (front === clean) return null;
  return { front, back: clean, answer: best };
}

function buildAnkiDeck(scope) {
  const cards = [];
  const seen = new Set();

  const addChapter = (chapterName) => {
    // 1) Hand-authored interview Q&A (richest cards)
    const qbank = (typeof QUESTIONS_BANK !== 'undefined' && QUESTIONS_BANK[chapterName]) || [];
    qbank.forEach(q => {
      if (q.type !== 'interview' || !q.modelAnswer) return;
      const front = ankiCleanText(q.question);
      const back = ankiCleanText(q.modelAnswer);
      if (front.length < 8 || back.length < 8) return;
      const key = front.toLowerCase().slice(0, 90);
      if (seen.has(key)) return; seen.add(key);
      cards.push({
        id: ankiHash(chapterName + '::qa::' + front),
        chapter: chapterName, topic: q.topic || '',
        type: 'qa', front, back,
        keyPoints: Array.isArray(q.keyPoints) ? q.keyPoints.slice(0, 4) : []
      });
    });

    // 2) Cloze cards from chapter takeaways + gotchas (Quick Revision bank)
    const rev = (typeof QUICK_REVISION_BANK !== 'undefined' && QUICK_REVISION_BANK[chapterName]) || null;
    if (rev) {
      (rev.takeaways || []).forEach(t => {
        const c = ankiMakeCloze(t);
        if (!c) return;
        const key = c.back.toLowerCase().slice(0, 90);
        if (seen.has(key)) return; seen.add(key);
        cards.push({
          id: ankiHash(chapterName + '::cz::' + c.back),
          chapter: chapterName, topic: 'Core Rule',
          type: 'cloze', front: c.front, back: c.back, answer: c.answer
        });
      });

      (rev.gotchas || []).forEach(g => {
        // Skip raw @quiz traps â€” already represented as interview Q&A cards
        if (/output of:|INTERVIEW TRAP|what is wrong with|what is the result|what happens/i.test(g)) return;
        const clean = ankiCleanText(g);
        if (clean.length < 20) return;
        const key = clean.toLowerCase().slice(0, 90);
        if (seen.has(key)) return; seen.add(key);
        const c = ankiMakeCloze(clean);
        if (c) {
          cards.push({
            id: ankiHash(chapterName + '::gz::' + c.back),
            chapter: chapterName, topic: 'Gotcha',
            type: 'gotcha', front: c.front, back: c.back, answer: c.answer
          });
        } else {
          cards.push({
            id: ankiHash(chapterName + '::gr::' + clean),
            chapter: chapterName, topic: 'Gotcha',
            type: 'gotcha', front: 'âš ï¸ Recall this pitfall / best-practice:', back: clean
          });
        }
      });
    }
  };

  if (scope === 'all') {
    CONCEPTS_DATA.forEach(ch => addChapter(ch.name));
  } else {
    addChapter(CONCEPTS_DATA[currentChapterIndex].name);
  }
  return cards;
}

// ---- SRS storage + scheduling ---------------------------------------------
function getAnkiState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_ANKI_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveAnkiState(state) {
  try { localStorage.setItem(STORAGE_ANKI_KEY, JSON.stringify(state)); } catch (e) {}
}

const ANKI_DAY = 86400000;

function ankiSchedule(card, rating) {
  const state = getAnkiState();
  let s = state[card.id] || { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0, state: 'new' };
  const now = Date.now();
  switch (rating) {
    case 'again':
      s.lapses = (s.lapses || 0) + 1; s.reps = 0;
      s.ease = Math.max(1.3, (s.ease || 2.5) - 0.2);
      s.interval = 0; s.state = 'learning'; s.due = now + 60000;
      break;
    case 'hard':
      s.reps = (s.reps || 0) + 1;
      s.ease = Math.max(1.3, (s.ease || 2.5) - 0.15);
      s.interval = s.interval < 1 ? 1 : Math.max(1, Math.round(s.interval * 1.2));
      s.state = 'review'; s.due = now + s.interval * ANKI_DAY;
      break;
    case 'good':
      s.reps = (s.reps || 0) + 1;
      s.interval = s.interval < 1 ? 1 : Math.round(s.interval * (s.ease || 2.5));
      s.state = 'review'; s.due = now + s.interval * ANKI_DAY;
      break;
    case 'easy':
      s.reps = (s.reps || 0) + 1;
      s.ease = (s.ease || 2.5) + 0.15;
      s.interval = s.interval < 1 ? 4 : Math.round(s.interval * s.ease * 1.3);
      s.state = 'review'; s.due = now + s.interval * ANKI_DAY;
      break;
  }
  state[card.id] = s;
  saveAnkiState(state);
  return s;
}

function ankiPreviewInterval(card, rating) {
  const state = getAnkiState();
  const s = state[card.id] || { ease: 2.5, interval: 0 };
  let days;
  switch (rating) {
    case 'again': return '<1m';
    case 'hard': days = s.interval < 1 ? 1 : Math.max(1, Math.round(s.interval * 1.2)); break;
    case 'good': days = s.interval < 1 ? 1 : Math.round(s.interval * (s.ease || 2.5)); break;
    case 'easy': days = s.interval < 1 ? 4 : Math.round(s.interval * ((s.ease || 2.5) + 0.15) * 1.3); break;
  }
  return ankiFormatDays(days);
}

function ankiFormatDays(d) {
  if (!d || d < 1) return '<1d';
  if (d < 30) return d + 'd';
  if (d < 365) return Math.max(1, Math.round(d / 30)) + 'mo';
  return (d / 365).toFixed(1) + 'y';
}

// ---- Session flow ---------------------------------------------------------
function startAnkiSession() {
  const state = getAnkiState();
  const NEW_LIMIT = 25;
  const now = Date.now();
  const newCards = [], dueCards = [];
  ankiDeck.forEach(card => {
    const s = state[card.id];
    if (!s || s.state === 'new') newCards.push(card);
    else if ((s.due || 0) <= now) dueCards.push(card);
  });
  ankiQueue = shuffleArray(dueCards).concat(shuffleArray(newCards).slice(0, NEW_LIMIT));
  ankiQueue = shuffleArray(ankiQueue);
  ankiSessionReviewed = 0;
  ankiFlipped = false;
  ankiCurrentCard = ankiQueue.length ? ankiQueue[0] : null;
  renderAnkiArea();
  updateAnkiStats();
}

function cramAnkiDeck() {
  ankiQueue = shuffleArray(ankiDeck.slice());
  ankiSessionReviewed = 0;
  ankiFlipped = false;
  ankiCurrentCard = ankiQueue.length ? ankiQueue[0] : null;
  renderAnkiArea();
  updateAnkiStats();
}

function shuffleAnkiQueue() {
  if (ankiQueue.length <= 1) return;
  ankiQueue = shuffleArray(ankiQueue);
  ankiFlipped = false;
  ankiCurrentCard = ankiQueue[0];
  renderAnkiArea();
}

function resetAnkiDeck() {
  if (!confirm('Reset spaced-repetition progress for this deck? This clears scheduling for these cards only.')) return;
  const state = getAnkiState();
  ankiDeck.forEach(card => { delete state[card.id]; });
  saveAnkiState(state);
  startAnkiSession();
}

function flipAnkiCard() {
  if (!ankiCurrentCard || ankiFlipped) return;
  ankiFlipped = true;
  renderAnkiArea();
}

function rateAnkiCard(rating) {
  if (!ankiCurrentCard || !ankiFlipped) return;
  const card = ankiCurrentCard;
  ankiSchedule(card, rating);
  ankiQueue.shift();
  if (rating === 'again') {
    ankiQueue.push(card); // resurface later this session
  } else {
    ankiSessionReviewed++;
  }
  ankiFlipped = false;
  ankiCurrentCard = ankiQueue.length ? ankiQueue[0] : null;
  renderAnkiArea();
  updateAnkiStats();
}

// ---- Rendering ------------------------------------------------------------
function ankiTypeLabel(type) {
  return ({ qa: 'Q & A', cloze: 'Core Rule', gotcha: 'Gotcha / Pitfall' })[type] || 'Card';
}

function ankiInlineCode(text) {
  // escape, then render `code` spans
  return ankiEscape(text).replace(/`([^`]+)`/g, '<code>$1</code>');
}

function renderAnkiFrontText(card) {
  return ankiInlineCode(card.front);
}

function renderAnkiBackText(card) {
  if (card.type === 'qa') {
    let html = ankiInlineCode(card.back);
    if (card.keyPoints && card.keyPoints.length) {
      html += '<ul class="anki-keypoints">' +
        card.keyPoints.map(k => `<li>${ankiInlineCode(ankiCleanText(k))}</li>`).join('') +
        '</ul>';
    }
    return html;
  }
  // cloze / gotcha-cloze: highlight the answer word inside the full sentence
  if (card.answer) {
    const escapedAnswer = card.answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('\\b' + escapedAnswer + '\\b');
    return ankiInlineCode(card.back).replace(re, '<span class="anki-cloze-answer">' + ankiEscape(card.answer) + '</span>');
  }
  return ankiInlineCode(card.back);
}

function renderAnkiArea() {
  const area = document.getElementById('anki-card-area');
  if (!area) return;

  if (ankiDeck.length === 0) {
    area.innerHTML = `<div class="anki-empty"><div style="font-size:34px">ðŸ—‚ï¸</div>
      <p>No flashcards available for this scope yet.</p>
      <p style="font-size:12px">Add notes / <code>@quiz</code> markers in the source files and run <code>npm run revise</code>.</p></div>`;
    return;
  }

  if (!ankiCurrentCard) {
    const nextDue = ankiNextDueLabel();
    area.innerHTML = `
      <div class="anki-complete">
        <div class="anki-complete-emoji">ðŸŽ‰</div>
        <h3>Deck complete!</h3>
        <p>You reviewed <b>${ankiSessionReviewed}</b> card${ankiSessionReviewed === 1 ? '' : 's'} this session.</p>
        ${nextDue ? `<p class="anki-next-due">Next review due: <b>${nextDue}</b></p>` : ''}
        <div class="anki-complete-actions">
          <button class="btn btn-primary" onclick="cramAnkiDeck()">ðŸ” Study all again (cram)</button>
        </div>
      </div>`;
    return;
  }

  const card = ankiCurrentCard;
  const controls = ankiFlipped
    ? `<div class="anki-rating-row">
         <button class="anki-rate again" onclick="rateAnkiCard('again')">Again<small>${ankiPreviewInterval(card, 'again')}</small></button>
         <button class="anki-rate hard" onclick="rateAnkiCard('hard')">Hard<small>${ankiPreviewInterval(card, 'hard')}</small></button>
         <button class="anki-rate good" onclick="rateAnkiCard('good')">Good<small>${ankiPreviewInterval(card, 'good')}</small></button>
         <button class="anki-rate easy" onclick="rateAnkiCard('easy')">Easy<small>${ankiPreviewInterval(card, 'easy')}</small></button>
       </div>`
    : `<button class="anki-show-btn" onclick="flipAnkiCard()">Show Answer <kbd>Space</kbd></button>`;

  area.innerHTML = `
    <div class="flashcard-scene anki-scene" onclick="flipAnkiCard()">
      <div class="flashcard anki-flashcard ${ankiFlipped ? 'is-flipped' : ''}">
        <div class="flashcard-face flashcard-front anki-face-front">
          <div class="flashcard-chip">${ankiTypeLabel(card.type)}${card.topic ? ' Â· ' + ankiEscape(card.topic) : ''}</div>
          <div class="anki-card-text">${renderAnkiFrontText(card)}</div>
          <div class="flashcard-hint">Tap card or press Space to reveal</div>
        </div>
        <div class="flashcard-face flashcard-back anki-face-back">
          <div class="flashcard-chip flashcard-chip-back">Answer${card.answer ? ' Â· ' + ankiEscape(card.answer) : ''}</div>
          <div class="anki-card-text anki-card-back-text">${renderAnkiBackText(card)}</div>
        </div>
      </div>
    </div>
    <div class="anki-controls" onclick="event.stopPropagation()">${controls}</div>`;
}

function updateAnkiStats() {
  const state = getAnkiState();
  const now = Date.now();
  let nw = 0, due = 0, done = 0;
  ankiDeck.forEach(card => {
    const s = state[card.id];
    if (!s || s.state === 'new') nw++;
    else if ((s.due || 0) <= now) due++;
    else done++;
  });
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('anki-stat-new', nw);
  set('anki-stat-due', due);
  set('anki-stat-done', done);
  set('anki-stat-left', ankiQueue.length);

  const total = ankiSessionReviewed + ankiQueue.length;
  const pct = total > 0 ? Math.round((ankiSessionReviewed / total) * 100) : (ankiDeck.length ? 100 : 0);
  const bar = document.getElementById('anki-progress-bar');
  if (bar) bar.style.width = pct + '%';
}

function ankiNextDueLabel() {
  const state = getAnkiState();
  let earliest = Infinity;
  ankiDeck.forEach(card => {
    const s = state[card.id];
    if (s && s.due && s.state === 'review') earliest = Math.min(earliest, s.due);
  });
  if (earliest === Infinity) return null;
  const diff = earliest - Date.now();
  if (diff <= 0) return 'now';
  const days = Math.round(diff / ANKI_DAY);
  if (days < 1) return 'in a few hours';
  if (days === 1) return 'tomorrow';
  return 'in ' + ankiFormatDays(days);
}

function handleAnkiKeydown(e) {
  if (!ankiActive) return;
  const panel = document.getElementById('quick-revision-panel');
  if (!panel || panel.style.display === 'none') return;
  // Ignore when typing in an input/textarea
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
  if (!ankiCurrentCard) return;

  if (e.code === 'Space' || e.key === 'Enter') {
    e.preventDefault();
    if (!ankiFlipped) flipAnkiCard();
    return;
  }
  if (ankiFlipped && ['1', '2', '3', '4'].includes(e.key)) {
    e.preventDefault();
    rateAnkiCard({ '1': 'again', '2': 'hard', '3': 'good', '4': 'easy' }[e.key]);
  }
}

function renderQuickRevision(topic) {
  const bulletContainer = document.getElementById('quick-bullet-points');
  const gotchasContainer = document.getElementById('quick-gotchas-list');
  const badgeContainer = document.getElementById('quick-syntax-badges');
  const syntaxCode = document.getElementById('quick-syntax-code');
  const tablesContainer = document.getElementById('quick-tables');
  
  bulletContainer.innerHTML = '';
  gotchasContainer.innerHTML = '';
  badgeContainer.innerHTML = '';
  if (tablesContainer) tablesContainer.innerHTML = '';
  
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

    // Comparison tables render as real tables, never as flattened text rows.
    if (tablesContainer) {
      (curated.tables || []).forEach(table => {
        tablesContainer.appendChild(buildNoteTable(table));
      });
    }
    
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
    const fallbackTables = [];
    const gotchasKeywords = ["gotcha", "pitfall", "warning", "caution", "error", "note", "remember", "important", "trick", "overflow", "bounds", "trap", "avoid"];
    
    if (topic.headerComments && topic.headerComments.length > 0) {
      topic.headerComments.forEach(block => {
        // Keep the grid intact for the Quick Revision panel instead of
        // squashing each row into "cell â€” cell â€” cell" text.
        if (block.type === 'table' && (block.headers || block.rows)) {
          fallbackTables.push(block);
          return;
        }
        if (block.type === 'code') return;
        (block.lines || []).forEach(line => {
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
    
    if (tablesContainer) {
      fallbackTables.forEach(table => {
        tablesContainer.appendChild(buildNoteTable(table));
      });
    }
    
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

    // The same question can legitimately belong to two chapters, for example the
    // String pool traps. In a mixed quiz it must still appear only once.
    const seenInGrand = new Set();
    const uniqueQuestions = allQuestions.filter(q => {
      const key = `${q.question || ''}||${q.code || ''}||${(q.options || []).join('|')}`;
      if (seenInGrand.has(key)) return false;
      seenInGrand.add(key);
      return true;
    });

    // Shuffle from the full pool every time; no answered-question filtering.
    questions = pickSmartQuestions(uniqueQuestions, 40, currentDifficultyFilter, currentTagFilter);

    document.getElementById('quiz-start-title').innerText = "Grand Java Revision Quiz";
    document.getElementById('quiz-start-desc').innerText = "Test your grasp on all concepts in this Java project. Includes randomized logic predictions, multi-select questions, and technical interview scenarios.";
  } else {
    // Chapter specific questions, taken from the chapter bank only. Invented
    // filler questions are not added any more: every question here comes from
    // the author's own notes.
    const staticQs = getQuestionsForScope(chapterName, subChapterName);
    const chapterLabel = subChapterName ? `${chapterName} > ${subChapterName}` : chapterName;
    
    questions = pickSmartQuestions(staticQs, 20, currentDifficultyFilter, currentTagFilter);
    
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
  
  quizOriginView = (document.querySelector('.view-section.active') || {}).id || 'dashboard-view';
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
  hideConceptReview();
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

  // Show tags on the question
  const tagsContainer = document.getElementById('quiz-question-tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    // Say where the question came from. In a mixed quiz this is the difference
    // between knowing your weak area and guessing at it.
    if (question.chapter) {
      const sourceSpan = document.createElement('span');
      sourceSpan.className = 'question-tag tag-source';
      const topicPart = (question.topic && question.topic !== 'OCJP Tricky') ? ` â€º ${question.topic}` : '';
      sourceSpan.textContent = `ðŸ“˜ ${question.chapter}${topicPart}`;
      tagsContainer.appendChild(sourceSpan);
    }
    (question.tags || []).forEach(tag => {
      const span = document.createElement('span');
      span.className = `question-tag tag-${tag}`;
      const tagLabels = { ocjp: 'ðŸŽ“ OCJP', interview: 'ðŸ’¼ Interview', tricky: 'âš¡ Tricky', concept: 'ðŸ“š Concept', predict: 'ðŸ”® Predict', codefill: 'âŒ¨ Code Fill' };
      span.textContent = tagLabels[tag] || tag;
      tagsContainer.appendChild(span);
    });
  }
  
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
  // innerText does not remove child nodes, so the "why was this wrong" note from
  // the previous question used to stay on screen. Clear the contents properly.
  const feedbackEl = document.getElementById('quiz-feedback-text');
  feedbackEl.replaceChildren();
  feedbackEl.innerText = '';
  feedbackEl.className = 'answer-feedback';
  const submitBtn = document.getElementById('btn-submit-answer');
  submitBtn.style.display = 'inline-flex';
  submitBtn.innerText = (question.type === 'interview') ? 'Submit & Reveal Answer' : 'Submit Answer';
  submitBtn.disabled = true;
  document.getElementById('btn-next-question').style.display = 'none';

  // Previous is offered from the second question onward, so an earlier question can be
  // re-read. In review mode the options are inert and Submit is hidden, so stepping
  // back can never change the score.
  const prevBtn = document.getElementById('btn-prev-question');
  if (prevBtn) prevBtn.style.display = currentQuizQuestionIndex > 0 ? 'inline-flex' : 'none';

  if (quizReviewMode) {
    renderQuizReview(question, optionsContainer, inputContainer, interviewContainer);
    return;
  }
  
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

function getNotesForQuestion(question) {
  if (!question || !question.chapter || !question.topic) return null;
  const chapter = CONCEPTS_DATA.find(c => c.name === question.chapter);
  if (!chapter) return null;
  let topic = question.topicPath
    ? chapter.topics.find(t => t.filePath === question.topicPath)
    : null;
  if (!topic) topic = chapter.topics.find(t => t.topicName === question.topic);
  if (!topic) topic = chapter.topics.find(t => t.topicName && t.topicName.toLowerCase().includes(question.topic.toLowerCase().substring(0, 10)));
  if (!topic) return null;
  // Tables and code blocks carry no prose bullets, so they are skipped here.
  const overviewLines = (topic.headerComments || [])
    .filter(block => block.type !== 'table' && block.type !== 'code')
    .flatMap(block => block.lines || [])
    .filter(Boolean);
  const inlineLines = (topic.inlineComments || []).slice(0, 5);
  return { topicName: topic.topicName, overview: overviewLines, inline: inlineLines };
}

function showConceptReview(question) {
  const panel = document.getElementById('quiz-concept-review');
  const topicNameEl = document.getElementById('review-topic-name');
  const bulletsEl = document.getElementById('review-bullets');
  if (!panel || !bulletsEl) return;

  const notes = getNotesForQuestion(question);
  if (!notes || (notes.overview.length === 0 && notes.inline.length === 0)) {
    panel.style.display = 'none';
    return;
  }

  topicNameEl.textContent = notes.topicName || question.topic;
  bulletsEl.innerHTML = '';

  const lines = notes.overview.length > 0 ? notes.overview.slice(0, 5) : notes.inline.slice(0, 5);
  lines.forEach(line => {
    const li = document.createElement('li');
    li.textContent = line;
    bulletsEl.appendChild(li);
  });

  panel.style.display = 'block';
}

function hideConceptReview() {
  const panel = document.getElementById('quiz-concept-review');
  if (panel) panel.style.display = 'none';
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
        feedback.innerText = `âœ“ Evaluated: Covered ${checkedCount}/${totalPoints} key points. Great explanation!`;
        feedback.className = "answer-feedback text-success";
      } else {
        feedback.innerHTML = `âœ— Evaluated: Covered ${checkedCount}/${totalPoints} key points. Try to include more core details. <button class="btn btn-outline btn-small" id="btn-revisit-missed-topic">Revisit Topic Again</button>`;
        feedback.className = "answer-feedback text-danger";
        const revisitBtn = document.getElementById('btn-revisit-missed-topic');
        if (revisitBtn && revisitScope.chapterName) {
          revisitBtn.addEventListener('click', () => openQuizRevisit(revisitScope));
        }
        showConceptReview(question);
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
      feedback.innerText = "âœ“ Correct! " + question.explanation;
      feedback.className = "answer-feedback text-success";
    } else {
      // When the question explains why a wrong option is wrong, say so: that is
      // where the learning happens.
      let whyMine = "";
      if (question.whyByOption) {
        // A single-choice question stores its pick in selectedOptionIndex; a
        // multi-select question stores an array. Reading the wrong one is why the
        // explanation used to go missing for single-choice questions.
        const chosen = question.type === 'mcq'
          ? (selectedOptionIndices || [])
          : [selectedOptionIndex];
        const reasons = chosen
          .map(i => question.whyByOption[i])
          .filter(Boolean);
        if (reasons.length) whyMine = reasons.join(" ");
      }
      let correctAnsStr = "";
      if (question.type === 'predict' || question.type === 'codefill') {
        correctAnsStr = ` Correct answer: "${question.answer[0]}".`;
      }
      feedback.innerHTML = `âœ— Incorrect.${correctAnsStr} ${question.explanation} <button class="btn btn-outline btn-small" id="btn-revisit-missed-topic">Revisit Topic Again</button>`;
      feedback.className = "answer-feedback text-danger";
      if (whyMine) {
        const whyPara = document.createElement('div');
        whyPara.className = 'why-note';
        whyPara.textContent = whyMine;
        feedback.appendChild(whyPara);
      }
      const revisitBtn = document.getElementById('btn-revisit-missed-topic');
      if (revisitBtn && revisitScope.chapterName) {
        revisitBtn.addEventListener('click', () => openQuizRevisit(revisitScope));
      }
      showConceptReview(question);
    }
    
    // Toggle buttons
    submitBtn.style.display = 'none';
    const nextBtn = document.getElementById('btn-next-question');
    nextBtn.style.display = 'inline-flex';
    nextBtn.innerText = (currentQuizQuestionIndex === activeQuizQuestions.length - 1) ? "See Results" : "Next Question";
  }
}

// ==========================================================================
// Reviewing an earlier question
//
// The author chose read-only review. The question, his answer and the feedback that was
// given are all shown, but nothing can be changed: the options are not clickable and
// Submit is hidden. Next is available straight away, so stepping forward again does not
// require answering anything.
// ==========================================================================

function renderQuizReview(question, optionsContainer, inputContainer, interviewContainer) {
  const record = answeredQuestions[currentQuizQuestionIndex];
  const submitBtn = document.getElementById('btn-submit-answer');
  const nextBtn = document.getElementById('btn-next-question');
  const feedback = document.getElementById('quiz-feedback-text');

  submitBtn.style.display = 'none';
  nextBtn.style.display = 'inline-flex';
  nextBtn.innerText = (currentQuizQuestionIndex === activeQuizQuestions.length - 1) ? 'See Results' : 'Next Question';

  // The options, with the chosen one marked and everything inert.
  if (question.type === 'scq' || question.type === 'mcq') {
    optionsContainer.style.display = 'flex';
    const chosen = new Set();
    if (Array.isArray(question.answer)) question.answer.forEach(i => chosen.add(i));
    else chosen.add(question.answer);

    question.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-item is-review';
      btn.disabled = true;
      // The right answer is marked so the review teaches something, not just replays.
      if (chosen.has(idx)) btn.classList.add('selected');
      btn.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="option-text">${opt}</span>
      `;
      optionsContainer.appendChild(btn);
    });
  } else if (question.type === 'predict' || question.type === 'codefill') {
    inputContainer.style.display = 'block';
    const input = document.getElementById('quiz-predict-input');
    input.value = record && record.selected ? String(record.selected) : '';
    input.disabled = true;
  } else if (question.type === 'interview') {
    interviewContainer.style.display = 'block';
    const textarea = document.getElementById('quiz-interview-textarea');
    textarea.value = '';
    textarea.disabled = true;
    if (record && record.selected) {
      const wrapper = document.getElementById('quiz-interview-eval-wrapper');
      wrapper.style.display = 'block';
      document.getElementById('quiz-model-answer').innerText = question.modelAnswer || '';
    }
  }

  feedback.className = 'answer-feedback';
  const verdict = document.createElement('div');
  verdict.className = record && record.isCorrect ? 'review-verdict correct' : 'review-verdict wrong';
  verdict.textContent = record
    ? (record.isCorrect ? 'You answered this correctly.' : 'You answered this incorrectly.')
    : 'You have not answered this question.';
  feedback.appendChild(verdict);

  if (record && record.selected) {
    const given = document.createElement('div');
    given.className = 'review-answer-row';
    given.textContent = `Your answer: ${record.selected}`;
    feedback.appendChild(given);
  }
  if (question.explanation) {
    const why = document.createElement('div');
    why.className = 'why-note';
    why.textContent = question.explanation;
    feedback.appendChild(why);
  }
  const notice = document.createElement('div');
  notice.className = 'review-readonly-note';
  notice.textContent = 'Reviewing an earlier question. Go forward to continue the quiz.';
  feedback.appendChild(notice);
}

function loadNextQuizQuestion() {
  if (currentQuizQuestionIndex < activeQuizQuestions.length - 1) {
    currentQuizQuestionIndex++;
    quizReviewMode = false;
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

// ==========================================================================
// Closing a quiz, and coming back to it
//
// Closing used to be impossible: there was no control at all, and the only escape was a
// sidebar click that threw the score away silently. Now closing is instant and lossless,
// so it needs no confirmation dialog - there is nothing to confirm.
//
// The questions are stored BY ID and re-resolved from the question bank, so a stored
// copy cannot go stale. If a question no longer exists, the saved quiz is reported as
// no longer resumable and cleared, rather than failing on resume.
// ==========================================================================

function saveQuizProgress() {
  if (!activeQuizQuestions.length) return;
  try {
    localStorage.setItem(STORAGE_QUIZ_PROGRESS_KEY, JSON.stringify({
      label: (currentQuizScope && currentQuizScope.chapterName) || 'Quiz',
      questionIds: activeQuizQuestions.map(q => q.qid),
      index: currentQuizQuestionIndex,
      score: quizScore,
      // Stored as-is: the records are already plain data, and they line up with the
      // question order because a question cannot be reached without answering the one
      // before it.
      answered: answeredQuestions,
      originView: quizOriginView,
      savedAt: Date.now()
    }));
  } catch (e) { /* storage full or unavailable: closing still works, only resuming is lost */ }
}

function loadQuizProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_QUIZ_PROGRESS_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved || !Array.isArray(saved.questionIds) || !saved.questionIds.length) return null;

    // Re-resolve the questions from the bank, so a stored copy cannot go stale.
    const { byId } = questionIndex();
    const questions = saved.questionIds.map(id => byId.get(id)).filter(Boolean);
    if (questions.length !== saved.questionIds.length) {
      // A question has gone from the bank since this was saved.
      return { stale: true, saved };
    }
    return { saved, questions };
  } catch (e) {
    return null;
  }
}

function clearQuizProgress() {
  try { localStorage.removeItem(STORAGE_QUIZ_PROGRESS_KEY); } catch (e) {}
}

// A quiz is only worth offering back if there is somewhere to come back to.
function resumableQuiz() {
  const loaded = loadQuizProgress();
  if (!loaded) return null;
  if (loaded.stale) { clearQuizProgress(); return null; }
  const { saved, questions } = loaded;
  // Nothing left to answer means it was effectively finished.
  if (saved.index >= questions.length) { clearQuizProgress(); return null; }
  return { saved, questions };
}

function resumeQuiz() {
  const resumable = resumableQuiz();
  if (!resumable) { alert('There is no saved quiz to resume.'); return; }
  const { saved, questions } = resumable;

  currentQuizScope = { chapterName: saved.label, subChapterName: null };
  activeQuizQuestions = questions;
  currentQuizQuestionIndex = Math.min(saved.index || 0, questions.length - 1);
  quizScore = saved.score || 0;
  answeredQuestions = Array.isArray(saved.answered) ? saved.answered : [];
  quizOriginView = saved.originView || 'dashboard-view';
  quizReviewMode = false;

  document.getElementById('quiz-question-count').innerText = `${questions.length} Questions`;
  document.getElementById('quiz-est-time').innerText = `${Math.ceil(questions.length * 1.5)} Mins`;
  document.getElementById('quiz-subtitle').innerText = saved.label;
  document.getElementById('quiz-start-container').style.display = 'none';
  document.getElementById('quiz-active-container').style.display = 'block';
  document.getElementById('quiz-result-container').style.display = 'none';
  showView('quiz-view');
  renderQuizQuestion();
}

function closeQuiz() {
  saveQuizProgress();
  // A finished quiz has nothing to resume, so clear rather than keep a dead entry.
  if (currentQuizQuestionIndex >= activeQuizQuestions.length - 1 && answeredQuestions.length >= activeQuizQuestions.length) {
    clearQuizProgress();
  }
  quizReviewMode = false;
  renderResumeQuiz();
  showView(quizOriginView || 'dashboard-view');
}

// Steps back to an earlier question for REVIEW ONLY. The options are inert and Submit is
// hidden, so the score cannot be changed by stepping back.
function previousQuizQuestion() {
  if (currentQuizQuestionIndex <= 0) return;
  currentQuizQuestionIndex--;
  quizReviewMode = true;
  renderQuizQuestion();
}

function renderResumeQuiz() {
  const host = document.getElementById('resume-quiz-panel');
  if (!host) return;
  const resumable = resumableQuiz();
  if (!resumable) { host.innerHTML = ''; return; }

  const { saved, questions } = resumable;
  const answered = (saved.answered || []).length;
  host.innerHTML = `
    <div class="resume-quiz-card">
      <div class="resume-quiz-body">
        <div class="study-next-label">Saved quiz</div>
        <h2>Resume &ldquo;${escapeHtml(saved.label)}&rdquo;</h2>
        <p>Question ${(saved.index || 0) + 1} of ${questions.length}${answered ? ` &middot; ${answered} answered, ${saved.score} right` : ''}.</p>
      </div>
      <div class="resume-quiz-actions">
        <button class="btn btn-primary" onclick="resumeQuiz()">Resume</button>
        <button class="btn btn-outline" onclick="discardSavedQuiz()">Discard</button>
      </div>
    </div>`;
}

function discardSavedQuiz() {
  clearQuizProgress();
  renderResumeQuiz();
}

function showQuizResults() {
  // The quiz is finished, so there is nothing left to resume.
  clearQuizProgress();
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

  // Per-chapter strengths: shows which chapter needs another pass.
  const chapterBreakdown = document.getElementById('result-chapter-breakdown');
  if (chapterBreakdown) {
    chapterBreakdown.innerHTML = '';
    const perChapter = new Map();
    answeredQuestions.forEach((ans, idx) => {
      const question = activeQuizQuestions[idx];
      const key = question && question.chapter ? question.chapter : 'General';
      if (!perChapter.has(key)) perChapter.set(key, { correct: 0, total: 0 });
      const entry = perChapter.get(key);
      entry.total++;
      if (ans.isCorrect) entry.correct++;
    });
    if (perChapter.size > 1) {
      const heading = document.createElement('h3');
      heading.className = 'result-breakdown-heading';
      heading.textContent = 'Where you stand, chapter by chapter';
      chapterBreakdown.appendChild(heading);
      Array.from(perChapter.entries())
        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
        .forEach(([name, stats]) => {
          const percent = Math.round((stats.correct / stats.total) * 100);
          const row = document.createElement('div');
          row.className = 'result-breakdown-row';
          row.innerHTML = `
            <span class="result-breakdown-name">${name}</span>
            <span class="result-breakdown-score ${percent >= 70 ? 'good' : percent >= 40 ? 'mid' : 'weak'}">${stats.correct}/${stats.total} Â· ${percent}%</span>
          `;
          chapterBreakdown.appendChild(row);
        });
    }
  }

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
      ${(!ans.isCorrect && q.whyByOption) ? `<div class="why-note">${(q.type === 'mcq' ? (Array.isArray(ans.selected) ? ans.selected : []) : [ans.selected]).map(i => q.whyByOption[i]).filter(Boolean).join(' ')}</div>` : ''}
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

  // On mobile, close the drawer so search results are visible in the main area
  if (isMobileView()) closeDrawer();
  
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
      
      // Match in explanations. Table blocks have no lines array, so their cells
      // are searched as joined row text and code blocks are skipped safely.
      let explanationMatch = false;
      if (topic.headerComments) {
        topic.headerComments.forEach(block => {
          const searchableLines = block.type === 'table'
            ? [...(block.headers || []), ...(block.rows || []).flat()].filter(Boolean)
            : (block.lines || []);
          searchableLines.forEach(line => {
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
// Quiz menu
// ==========================================================================
// Choosing how to be tested, instead of being dropped straight into the Grand
// Quiz. Every option is built from the chapters the author has notes for.
function renderQuizMenu() {
  initMenuConceptSelect();
  const chaptersContainer = document.getElementById('quiz-menu-chapters');
  if (!chaptersContainer) return;

  const allQuestions = [];
  Object.keys(QUESTIONS_BANK).forEach(chapter => allQuestions.push(...QUESTIONS_BANK[chapter]));
  const ocjpCount = allQuestions.filter(q => (q.tags || []).includes('ocjp')).length;
  const trickyCount = allQuestions.filter(q => (q.tags || []).includes('tricky')).length;
  const ocjpEl = document.getElementById('menu-ocjp-count');
  const trickyEl = document.getElementById('menu-tricky-count');
  if (ocjpEl) ocjpEl.textContent = ocjpCount;
  if (trickyEl) trickyEl.textContent = trickyCount;

  chaptersContainer.innerHTML = '';
  CONCEPTS_DATA.forEach((chapter, index) => {
    const questions = QUESTIONS_BANK[chapter.name] || [];
    const subChapters = Array.from(new Set(chapter.topics.map(t => t.subChapter).filter(Boolean)));
    const row = document.createElement('div');
    row.className = 'quiz-menu-chapter-row';
    row.innerHTML = `
      <div class="quiz-menu-chapter-info">
        <span class="quiz-menu-chapter-name">${chapter.name}</span>
        <span class="bank-topic-meta">${chapter.topics.length} topic(s) Â· ${questions.length} question(s)</span>
      </div>
      <div class="quiz-menu-chapter-actions"></div>
    `;
    const actions = row.querySelector('.quiz-menu-chapter-actions');
    const chapterBtn = document.createElement('button');
    chapterBtn.className = 'btn btn-primary-outline btn-small';
    chapterBtn.textContent = 'Quiz chapter';
    chapterBtn.addEventListener('click', () => startChapterQuiz(chapter.name));
    actions.appendChild(chapterBtn);
    subChapters.forEach(subChapter => {
      const subBtn = document.createElement('button');
      subBtn.className = 'btn btn-outline btn-small';
      subBtn.textContent = subChapter;
      subBtn.addEventListener('click', () => startChapterQuiz(chapter.name, subChapter));
      actions.appendChild(subBtn);
    });
    chaptersContainer.appendChild(row);
  });
}

// Starts a quiz for the single topic currently open in the Notes view.
function startTopicQuiz() {
  const chapter = CONCEPTS_DATA[currentChapterIndex];
  const topic = chapter && chapter.topics[currentTopicIndex];
  if (!chapter || !topic) {
    alert('Open a topic first, then start a topic quiz.');
    return;
  }
  const pool = (QUESTIONS_BANK[chapter.name] || []).filter(q => q.topicPath === topic.filePath);
  if (pool.length === 0) {
    alert(`No questions have been written for "${topic.topicName}" yet.`);
    return;
  }
  currentQuizScope = { chapterName: chapter.name, subChapterName: topic.subChapter || null };
  activeQuizQuestions = pickSmartQuestions(pool, 15, 'all', 'all');
  currentQuizQuestionIndex = 0;
  quizScore = 0;
  answeredQuestions = [];

  document.getElementById('quiz-question-count').innerText = `${activeQuizQuestions.length} Questions`;
  document.getElementById('quiz-est-time').innerText = `${Math.ceil(activeQuizQuestions.length * 1.5)} Mins`;
  document.getElementById('quiz-subtitle').innerText = `${chapter.name} > ${topic.topicName}`;
  document.getElementById('quiz-start-container').style.display = 'none';
  document.getElementById('quiz-active-container').style.display = 'block';
  document.getElementById('quiz-result-container').style.display = 'none';
  quizOriginView = (document.querySelector('.view-section.active') || {}).id || 'dashboard-view';
  showView('quiz-view');
  renderQuizQuestion();
}

// Starts a quiz from a whole filtered selection, used by the bank and the menu.
function startSelectionQuiz(questions, label, maxQuestions) {
  if (!questions || questions.length === 0) {
    alert('No questions match this selection yet. Try another filter.');
    return false;
  }
  currentQuizScope = { chapterName: label || 'Revision Bank', subChapterName: null };
  activeQuizQuestions = pickSmartQuestions(questions, maxQuestions || 20, 'all', 'all');
  currentQuizQuestionIndex = 0;
  quizScore = 0;
  answeredQuestions = [];

  document.getElementById('quiz-question-count').innerText = `${activeQuizQuestions.length} Questions`;
  document.getElementById('quiz-est-time').innerText = `${Math.ceil(activeQuizQuestions.length * 1.5)} Mins`;
  document.getElementById('quiz-subtitle').innerText = label || 'Revision Bank selection';
  document.getElementById('quiz-start-container').style.display = 'none';
  document.getElementById('quiz-active-container').style.display = 'block';
  document.getElementById('quiz-result-container').style.display = 'none';
  quizOriginView = (document.querySelector('.view-section.active') || {}).id || 'dashboard-view';
  showView('quiz-view');
  renderQuizQuestion();
  return true;
}

// ==========================================================================
// Central Revision Bank
// ==========================================================================
// One place to revise everything the author has written notes for. It is built
// from CONCEPTS_DATA, so only topics that exist under src/ can ever appear here.
let bankFilters = { chapter: 'all', search: '', level: 'all', tag: 'all', concept: 'all' };

// The concepts present in the current chapter selection, so the filter only ever
// offers concepts that can actually match something.
function bankAvailableConcepts() {
  const chapters = CONCEPTS_DATA.filter((chapter, index) =>
    bankFilters.chapter === 'all' || String(index) === bankFilters.chapter);
  const counts = new Map();
  chapters.forEach(chapter => {
    (QUESTIONS_BANK[chapter.name] || []).forEach(question => {
      (question.concepts || []).forEach(id => counts.set(id, (counts.get(id) || 0) + 1));
    });
  });
  return [...counts.entries()]
    .map(([id, count]) => ({ id, count, name: (typeof CONCEPT_NAMES !== 'undefined' && CONCEPT_NAMES[id]) || id }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function initBankConceptSelect() {
  const select = document.getElementById('bank-concept-select');
  if (!select) return;
  const available = bankAvailableConcepts();
  // Keep the chosen concept when it is still on offer, otherwise fall back to Any.
  if (bankFilters.concept !== 'all' && !available.some(c => c.id === bankFilters.concept)) {
    bankFilters.concept = 'all';
  }
  select.innerHTML = '';
  const all = document.createElement('option');
  all.value = 'all';
  all.textContent = 'Any concept';
  select.appendChild(all);
  available.forEach(({ id, count, name }) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = `${name} (${count})`;
    select.appendChild(option);
  });
  select.value = bankFilters.concept;
}

function setBankConcept(value) {
  bankFilters.concept = value || 'all';
  renderRevisionBank();
}

// ---- Concept drill (Quiz Menu) ----------------------------------------------
// One concept, every chapter that covers it. This is the Quiz Menu's version of
// the Revision Bank's concept filter, and it reads the same `concepts` tag, so the
// two cannot disagree about what a concept contains.
function conceptDisplayName(conceptId) {
  if (typeof CONCEPT_NAMES !== 'undefined' && CONCEPT_NAMES[conceptId]) return CONCEPT_NAMES[conceptId];
  return conceptId;
}

function allQuestionsFlat() {
  const all = [];
  Object.keys(QUESTIONS_BANK).forEach(chapter => all.push(...(QUESTIONS_BANK[chapter] || [])));
  return all;
}

function questionsForConcept(conceptId) {
  if (!conceptId || conceptId === 'all') return allQuestionsFlat();
  return allQuestionsFlat().filter(q => (q.concepts || []).includes(conceptId));
}

function initMenuConceptSelect() {
  const select = document.getElementById('menu-concept-select');
  if (!select) return;
  const counts = new Map();
  allQuestionsFlat().forEach(q => {
    (q.concepts || []).forEach(id => counts.set(id, (counts.get(id) || 0) + 1));
  });
  const rows = [...counts.entries()]
    .map(([id, count]) => ({ id, count, name: conceptDisplayName(id) }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  const previous = select.value;
  select.innerHTML = '';
  rows.forEach(({ id, count, name }) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = `${name} (${count})`;
    select.appendChild(option);
  });
  // Keep the choice across a re-render when it is still on offer.
  if (previous && rows.some(r => r.id === previous)) select.value = previous;
  updateMenuConceptCount();
}

function updateMenuConceptCount() {
  const select = document.getElementById('menu-concept-select');
  const el = document.getElementById('menu-concept-count');
  if (!select || !el) return;
  el.textContent = questionsForConcept(select.value).length;
}

function initBankChapterSelect() {
  const select = document.getElementById('bank-chapter-select');
  if (!select) return;
  select.innerHTML = '';
  const all = document.createElement('option');
  all.value = 'all';
  all.textContent = 'All chapters';
  select.appendChild(all);
  CONCEPTS_DATA.forEach((chapter, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = chapter.name;
    select.appendChild(option);
  });
  select.value = bankFilters.chapter;
  initBankConceptSelect();
}

function setBankChapter(value) {
  bankFilters.chapter = value;
  initBankConceptSelect();
  renderRevisionBank();
}

function setBankSearch(value) {
  bankFilters.search = String(value || '').toLowerCase().trim();
  renderRevisionBank();
}

function setBankLevel(level, btn) {
  bankFilters.level = level;
  document.querySelectorAll('#bank-level-pills .diff-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderRevisionBank();
}

function setBankTag(tag, btn) {
  bankFilters.tag = tag;
  document.querySelectorAll('#bank-type-pills .tag-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderRevisionBank();
}

function topicSearchText(topic) {
  const notes = (topic.headerComments || []).flatMap(b => b.lines || []).join(' ');
  return `${topic.topicName} ${topic.fileName} ${topic.subChapter || ''} ${notes}`.toLowerCase();
}

function questionMatchesBankFilters(question) {
  if (bankFilters.level !== 'all' && (question.difficulty || 'medium') !== bankFilters.level) return false;
  if (bankFilters.tag !== 'all' && !(question.tags || []).includes(bankFilters.tag)) return false;
  if (bankFilters.concept !== 'all' && !(question.concepts || []).includes(bankFilters.concept)) return false;
  return true;
}

// Collects the topics and questions matching the current filters.
function collectBankSelection() {
  const chapters = CONCEPTS_DATA.filter((chapter, index) =>
    bankFilters.chapter === 'all' || String(index) === bankFilters.chapter);

  const topics = [];
  chapters.forEach(chapter => {
    chapter.topics.forEach(topic => {
      // An exercise file is practice, not revision material. It is not listed here;
      // the chapter shows one line pointing at the Practice Lab instead. The flag is
      // written by the parser, so the browser is not re-deriving the rule.
      if (topic.isExercise) return;
      if (bankFilters.search && !topicSearchText(topic).includes(bankFilters.search)) return;
      topics.push({ chapter: chapter.name, topic });
    });
  });

  const includedPaths = new Set(topics.map(entry => entry.topic.filePath));
  const questions = [];
  const seen = new Set();
  chapters.forEach(chapter => {
    (QUESTIONS_BANK[chapter.name] || []).forEach(question => {
      // A question belongs here when its topic is selected, or when it is a
      // chapter-level question that has no topic of its own.
      const inSelectedTopic = question.topicPath && includedPaths.has(question.topicPath);
      const isChapterLevel = !question.topicPath;
      if (!inSelectedTopic && !isChapterLevel) return;
      if (!isChapterLevel && bankFilters.search && !includedPaths.has(question.topicPath)) return;
      if (seen.has(question.qid)) return;
      if (!questionMatchesBankFilters(question)) return;
      seen.add(question.qid);
      questions.push(question);
    });
  });

  return { topics, questions };
}

// ============================================================================
// The Revision Bank shows the author's notes ORGANISED BY THEIR OWN SHAPE.
//
// It used to extract "concept lines" with a blocklist of ~11 "reject if it looks
// like X" rules, which let headings through as if they were claims, left wrapped
// fragments standing alone, and dropped code that WAS the explanation. A blocklist
// cannot tell a heading from a claim - the same trap that got two earlier features
// in this project deleted.
//
// Nothing is filtered now. A line's SHAPE decides how it is drawn, never whether it
// is good enough to show.
// ============================================================================

// Classify a note line by shape only. No meaning is inferred.
function lineKind(text) {
  const t = String(text || '').trim();
  if (!t) return 'blank';

  // A list item, by its own literal marker.
  if (/^[-*\u2022]\s+/.test(t)) return 'bullet';
  if (/^\d+[.)]\s/.test(t)) return 'bullet';
  if (/^[ivx]{1,4}[.)]\s/i.test(t)) return 'bullet';

  const words = t.split(/\s+/).filter(Boolean).length;
  const endsSentence = /[.!?]$/.test(t);
  const letters = t.replace(/[^A-Za-z]/g, '');

  // A label: short, and ends with a colon or a colon-dash. The author writes his
  // section titles this way, such as "Those two steps, in order:".
  if (/[:-]$/.test(t) && words <= 12) return 'heading';

  // A shout: short and entirely capitals, such as "LOCAL VARIABLE SCOPE EXAMPLES"
  // or "--- FOR LOOP SCOPE ---". Punctuation is ignored for the test.
  if (letters.length >= 3 && letters === letters.toUpperCase() && words <= 8) return 'heading';

  // A short title with no sentence-ending punctuation, such as
  // "Core Concepts: Java Architecture & Execution Flow".
  if (!endsSentence && words <= 8 && /^[A-Z0-9]/.test(t)) return 'heading';

  return 'prose';
}

// The topic's own blocks, with each prose line labelled by shape. Code and tables are
// carried through as themselves, because in these notes the code IS the explanation:
// the prose says a variable is out of scope and the code shows exactly where.
function bankNoteBlocks(topic) {
  const blocks = [];
  (topic.headerComments || []).forEach(block => {
    if (block.type === 'generated' || block.type === 'generated-parameters') return;

    if (block.type === 'table') {
      if ((block.rows || []).length) blocks.push({ type: 'table', headers: block.headers || [], rows: block.rows || [] });
      return;
    }
    if (block.type === 'code') {
      const code = String(block.code || '').replace(/\s+$/, '');
      if (code.trim()) blocks.push({ type: 'code', code, language: block.language || 'java' });
      return;
    }
    const lines = (block.lines || [])
      .map(line => String(line || '').trim())
      .filter(Boolean)
      .map(text => ({ kind: lineKind(text), text }));
    if (lines.length) blocks.push({ type: 'lines', lines });
  });

  // A supporting class often has no notes above the class declaration: its notes are
  // written INSIDE the body, beside the code they explain. Those are shown when there
  // is nothing above, so a topic such as House or Monitor is not blank. Nothing is
  // duplicated, because this only runs when the header has no notes at all.
  if (blocks.length === 0) {
    const inline = (topic.inlineComments || [])
      .map(text => String(text || '').trim())
      .filter(Boolean)
      .map(text => ({ kind: lineKind(text), text }));
    if (inline.length) blocks.push({ type: 'lines', lines: inline });
  }
  return blocks;
}

// A compact picture of a topic's questions, so a long answer key is not needed.
function bankTopicStats(questions) {
  const stats = { total: questions.length, easy: 0, medium: 0, hard: 0, ocjp: 0, tricky: 0, written: 0, choices: 0 };
  questions.forEach(q => {
    const level = (q.difficulty || 'medium').toLowerCase();
    if (stats[level] !== undefined) stats[level]++;
    if ((q.tags || []).includes('ocjp')) stats.ocjp++;
    if ((q.tags || []).includes('tricky')) stats.tricky++;
    if (q.options) stats.choices++; else stats.written++;
  });
  return stats;
}

function findTopicLocation(filePath) {
  for (let ci = 0; ci < CONCEPTS_DATA.length; ci++) {
    const ti = CONCEPTS_DATA[ci].topics.findIndex(t => t.filePath === filePath);
    if (ti !== -1) return { chapterIndex: ci, topicIndex: ti };
  }
  return null;
}

// Opens the Notes view on the topic, so the full explanation and code are one click
// away instead of being duplicated inside the bank.
function reviseTopicFromBank(filePath) {
  const loc = findTopicLocation(filePath);
  if (!loc) return;
  currentChapterIndex = loc.chapterIndex;
  currentTopicIndex = loc.topicIndex;
  document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.remove('open'));
  const accordion = document.querySelector('.chapter-accordion.ch-' + loc.chapterIndex);
  if (accordion) accordion.classList.add('open');
  showView('notes-view');
  selectTopic(loc.chapterIndex, loc.topicIndex);
}

function quizTopicFromBank(filePath) {
  const loc = findTopicLocation(filePath);
  if (!loc) return;
  currentChapterIndex = loc.chapterIndex;
  currentTopicIndex = loc.topicIndex;
  startTopicQuiz();
}

function renderRevisionBank() {
  const container = document.getElementById('bank-results');
  const summary = document.getElementById('bank-summary');
  if (!container) return;

  const selection = collectBankSelection();
  const revised = getRevisedTopics();
  const questionsByPath = new Map();
  selection.questions.forEach(question => {
    const key = question.topicPath;
    if (!key) return;
    if (!questionsByPath.has(key)) questionsByPath.set(key, []);
    questionsByPath.get(key).push(question);
  });

  // When a level or type filter is active, a topic with nothing matching is hidden
  // rather than shown empty, so the list reflects the filter.
  const filtering = bankFilters.level !== 'all' || bankFilters.tag !== 'all' || bankFilters.concept !== 'all';
  const topics = selection.topics.filter(entry => {
    if (!filtering) return true;
    return (questionsByPath.get(entry.topic.filePath) || []).length > 0;
  });

  // Counted as the number of note blocks shown, since nothing is extracted any more.
  const totalNotePoints = topics.reduce((n, e) => {
    return n + bankNoteBlocks(e.topic).reduce((m, b) => m + (b.type === 'lines' ? b.lines.length : 1), 0);
  }, 0);
  const revisedCount = topics.filter(e => revised[e.topic.filePath]).length;

  if (summary) {
    summary.textContent = topics.length + ' topics | ' + totalNotePoints + ' note points | ' +
      selection.questions.length + ' questions | ' + revisedCount + ' marked revised';
  }
  const quizBtn = document.getElementById('btn-bank-quiz');
  if (quizBtn) {
    quizBtn.disabled = selection.questions.length === 0;
    quizBtn.textContent = selection.questions.length > 0
      ? 'Start quiz from this selection (' + selection.questions.length + ')'
      : 'No questions match this selection';
  }

  container.innerHTML = '';
  if (topics.length === 0) {
    container.innerHTML = '<div class="card"><div class="card-body">Nothing matches this filter. Try clearing the search box, or set the level, type and concept back to Any.</div></div>';
    return;
  }

  let currentChapter = null;
  // The same sentence can appear in more than one topic file. It is shown once, the
  // first time it appears, so the bank is not repetitive.
  const shownNoteText = new Set();
  topics.forEach(({ chapter, topic }) => {
    if (chapter !== currentChapter) {
      currentChapter = chapter;
      const heading = document.createElement('h2');
      heading.className = 'bank-chapter-heading';
      heading.textContent = chapter;
      container.appendChild(heading);
      // Exercises are practice, not revision material, so they are not listed as
      // topics. One line per chapter keeps them reachable without 70 cards of noise.
      const practiceHere = (CONCEPTS_DATA.find(c => c.name === chapter)?.topics || [])
        .filter(t => t.isExercise).length;
      if (practiceHere) {
        const practice = document.createElement('div');
        practice.className = 'bank-practice-line';
        practice.innerHTML = `${practiceHere} practice challenge${practiceHere === 1 ? '' : 's'} in this chapter &middot; `;
        const practiceBtn = document.createElement('button');
        practiceBtn.className = 'btn btn-outline btn-small';
        practiceBtn.textContent = 'Open the Practice Lab';
        practiceBtn.addEventListener('click', () => {
          document.getElementById('nav-practice-btn').click();
        });
        practice.appendChild(practiceBtn);
        container.appendChild(practice);
      }
    }

    const topicQuestions = questionsByPath.get(topic.filePath) || [];
    const stats = bankTopicStats(topicQuestions);

    const card = document.createElement('div');
    card.className = 'bank-card' + (revised[topic.filePath] ? ' is-revised' : '');

    const head = document.createElement('div');
    head.className = 'bank-card-head';
    head.innerHTML =
      '<div class="bank-card-title">' +
        '<span class="bank-topic-name">' + topic.topicName + '</span>' +
        (topic.subChapter ? '<span class="bank-sub">' + topic.subChapter + '</span>' : '') +
      '</div>' +
      '<div class="bank-card-counts">' +
        (stats.easy ? '<span class="count-chip easy">' + stats.easy + ' easy</span>' : '') +
        (stats.medium ? '<span class="count-chip medium">' + stats.medium + ' medium</span>' : '') +
        (stats.hard ? '<span class="count-chip hard">' + stats.hard + ' hard</span>' : '') +
        (stats.ocjp ? '<span class="count-chip ocjp">' + stats.ocjp + ' OCJP</span>' : '') +
        (stats.tricky ? '<span class="count-chip tricky">' + stats.tricky + ' tricky</span>' : '') +
        (revised[topic.filePath] ? '<span class="count-chip revised">revised</span>' : '') +
      '</div>';
    card.appendChild(head);

    // The topic's own notes, organised by shape. Nothing is filtered: every line he
    // wrote appears, styled by what it is.
    const noteBlocks = bankNoteBlocks(topic);
    const notes = document.createElement('div');
    notes.className = 'bank-notes';

    // Code is collapsed by default, because some examples run to 25 lines and would
    // bury the prose. Nothing is hidden - one click opens it.
    const codeBodies = [];
    const lineNodes = [];
    let codeCounter = 0;

    const addCode = (block) => {
      const wrap = document.createElement('div');
      wrap.className = 'bank-code-block';
      const body = document.createElement('pre');
      body.className = 'bank-code-body';
      const codeEl = document.createElement('code');
      codeEl.textContent = block.code;
      body.appendChild(codeEl);
      body.style.display = 'none';

      const lineCount = block.code.split('\n').length;
      const toggle = document.createElement('button');
      toggle.className = 'bank-code-toggle';
      toggle.textContent = `${block.language === 'text' ? 'Diagram' : 'Java example'}, ${lineCount} line${lineCount === 1 ? '' : 's'}`;

      const state = { open: false };
      toggle.addEventListener('click', () => {
        state.open = !state.open;
        body.style.display = state.open ? 'block' : 'none';
        toggle.classList.toggle('is-open', state.open);
      });

      wrap.appendChild(toggle);
      wrap.appendChild(body);
      codeBodies.push({ state, body, toggle });
      codeCounter++;
      notes.appendChild(wrap);
    };

    const addTable = (block) => {
      const table = document.createElement('table');
      table.className = 'bank-note-table';
      if (block.headers.length) {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        block.headers.forEach(h => {
          const th = document.createElement('th');
          th.textContent = h;
          tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
      }
      const tbody = document.createElement('tbody');
      block.rows.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      notes.appendChild(table);
    };

    noteBlocks.forEach(block => {
      if (block.type === 'code') { addCode(block); return; }
      if (block.type === 'table') { addTable(block); return; }
      block.lines.forEach(({ kind, text }) => {
        // The same sentence can appear in more than one topic file. It is shown once,
        // the first time it appears, so the bank is not repetitive.
        if (shownNoteText.has(text)) return;
        shownNoteText.add(text);
        const el = document.createElement('div');
        el.className = 'bank-note bank-note-' + kind;
        el.textContent = kind === 'bullet' ? '\u2022 ' + text : text;
        notes.appendChild(el);
        lineNodes.push(el);
      });
    });

    if (!notes.childNodes.length) {
      const empty = document.createElement('div');
      empty.className = 'bank-empty';
      // Be specific about WHY there is nothing, so it does not read like a fault.
      empty.textContent = topic.isExercise
        ? 'This is an exercise file, so it holds a task rather than revision notes.'
        : 'This is a supporting class with no notes of its own. Its notes are in the topic that uses it.';
      notes.appendChild(empty);
    }
    card.appendChild(notes);

    // A long topic shows its first screenful; the rest is one click away. This is a
    // length control, not a quality one - nothing is ever discarded.
    const firstBatch = 14;
    const overflow = lineNodes.slice(firstBatch);
    if (overflow.length) {
      overflow.forEach(el => { el.style.display = 'none'; });
      let expanded = false;
      const more = document.createElement('button');
      more.className = 'btn btn-outline btn-small bank-more-btn';
      more.textContent = `Show the remaining ${overflow.length} line${overflow.length === 1 ? '' : 's'}`;
      more.addEventListener('click', () => {
        if (expanded) return;
        overflow.forEach(el => { el.style.display = ''; });
        expanded = true;
        more.remove();
      });
      notes.appendChild(more);
    }

    // One control for all the code in the card, since code is the bulkiest part and
    // the Notes view shows it in full.
    if (codeBodies.length) {
      const codeToggle = document.createElement('button');
      codeToggle.className = 'btn btn-outline btn-small bank-code-all';
      const label = () => `Show code (${codeBodies.length})`;
      const hideLabel = () => `Hide code (${codeBodies.length})`;
      codeToggle.textContent = label();
      let allOpen = false;
      codeToggle.addEventListener('click', () => {
        allOpen = !allOpen;
        codeBodies.forEach(({ state, body, toggle }) => {
          state.open = allOpen;
          body.style.display = allOpen ? 'block' : 'none';
          toggle.classList.toggle('is-open', allOpen);
        });
        codeToggle.textContent = allOpen ? hideLabel() : label();
      });
      head.appendChild(codeToggle);
    }

    const actions = document.createElement('div');
    actions.className = 'bank-card-actions';
    if (topicQuestions.length > 0) {
      const quizTopicBtn = document.createElement('button');
      quizTopicBtn.className = 'btn btn-primary-outline btn-small';
      quizTopicBtn.textContent = 'Quiz this topic (' + topicQuestions.length + ')';
      quizTopicBtn.addEventListener('click', () => quizTopicFromBank(topic.filePath));
      actions.appendChild(quizTopicBtn);
    }
    const notesBtn = document.createElement('button');
    notesBtn.className = 'btn btn-outline btn-small';
    notesBtn.textContent = 'Open full notes';
    notesBtn.addEventListener('click', () => reviseTopicFromBank(topic.filePath));
    actions.appendChild(notesBtn);
    card.appendChild(actions);

    if (topicQuestions.length > 0) {
      const details = document.createElement('details');
      details.className = 'bank-questions';
      const sum = document.createElement('summary');
      sum.textContent = 'Preview the ' + topicQuestions.length + ' question(s), answers hidden';
      details.appendChild(sum);
      topicQuestions.forEach(question => details.appendChild(buildBankQuestion(question)));
      card.appendChild(details);
    }

    container.appendChild(card);
  });
}

// A question card whose answer stays hidden until the learner asks for it, so the
// bank can be used to test yourself rather than only to read.
function buildBankQuestion(question) {
  const wrap = document.createElement('div');
  wrap.className = 'bank-q';

  const level = (question.difficulty || 'medium').toLowerCase();
  const badges = ['<span class="difficulty-badge ' + level + '">' + level + '</span>'];
  (question.tags || []).forEach(tag => badges.push('<span class="syntax-badge">' + tag + '</span>'));

  const correctText = question.options
    ? (Array.isArray(question.answer)
        ? question.answer.map(i => question.options[i]).join('  |  ')
        : question.options[question.answer])
    : (question.answer ? question.answer.join(' ') : (question.modelAnswer || '(written answer)'));

  wrap.innerHTML =
    '<div class="bank-q-head">' + badges.join('') + '</div>' +
    '<div class="bank-q-text">' + question.question + '</div>' +
    (question.code ? '<pre class="bank-q-code"><code>' + highlightJava(question.code) + '</code></pre>' : '');

  const reveal = document.createElement('button');
  reveal.className = 'btn btn-outline btn-small bank-reveal';
  reveal.textContent = 'Show answer';
  const answerBox = document.createElement('div');
  answerBox.className = 'bank-q-answer';
  answerBox.style.display = 'none';
  answerBox.innerHTML = '<div><strong>Answer:</strong> ' + (correctText || '(none recorded)') + '</div>' +
    (question.explanation ? '<div class="bank-q-explain">' + question.explanation + '</div>' : '');
  reveal.addEventListener('click', () => {
    const showing = answerBox.style.display !== 'none';
    answerBox.style.display = showing ? 'none' : 'block';
    reveal.textContent = showing ? 'Show answer' : 'Hide answer';
  });

  wrap.appendChild(reveal);
  wrap.appendChild(answerBox);
  return wrap;
}
function startBankQuiz() {
  const { questions } = collectBankSelection();
  const bankLabel = bankFilters.chapter === 'all'
    ? 'Revision Bank: all chapters'
    : `Revision Bank: ${CONCEPTS_DATA[Number(bankFilters.chapter)]?.name || ''}`;
  startSelectionQuiz(questions, bankLabel, 20);
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


function switchPracticeTab(tab, btn) {
  currentPracticeTab = tab;
  document.querySelectorAll('.practice-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  if (tab === 'deep') {
    renderDeepChallengesList();
  } else {
    renderChallengesList();
    selectChallenge(currentChallengeIndex);
  }
}

function renderDeepChallengesList() {
  const container = document.getElementById('challenge-list');
  if (!container) return;

  const allDeep = typeof DEEP_CHALLENGES !== 'undefined' ? DEEP_CHALLENGES : [];
  const scoped = currentPracticeScope.chapterName
    ? allDeep.filter(c => c.chapter === currentPracticeScope.chapterName)
    : allDeep;

  const toShow = scoped.length > 0 ? scoped : allDeep;

  container.innerHTML = '';

  toShow.forEach((challenge) => {
    const item = document.createElement('button');
    item.className = 'challenge-item';
    const tagHtml = (challenge.tags || []).map(t => `<span class="question-tag tag-${t}">${t}</span>`).join('');
    item.innerHTML = `
      <span class="challenge-item-title">${challenge.title}</span>
      <div class="challenge-item-meta">
        <span class="difficulty-badge ${(challenge.difficulty || 'medium').toLowerCase()}">${challenge.difficulty || 'Medium'}</span>
        ${tagHtml}
      </div>
    `;
    item.addEventListener('click', () => {
      document.querySelectorAll('.challenge-item').forEach(b => b.classList.remove('active'));
      item.classList.add('active');
      selectDeepChallenge(challenge);
    });
    container.appendChild(item);
  });

  if (toShow.length > 0) selectDeepChallenge(toShow[0]);
}

function selectDeepChallenge(challenge) {
  document.getElementById('practice-title').textContent = challenge.title;
  const diffBadge = document.getElementById('practice-difficulty');
  if (diffBadge) {
    diffBadge.innerText = challenge.difficulty || 'Hard';
    diffBadge.className = `difficulty-badge ${(challenge.difficulty || 'hard').toLowerCase()}`;
  }

  const tagHtml = (challenge.tags || []).map(t => `<span class="question-tag tag-${t}">${t}</span>`).join('');

  const hintsHtml = challenge.hints && challenge.hints.length > 0
    ? `<div class="dc-section" id="dc-hints">
        <button class="dc-section-toggle" onclick="toggleDcSection('dc-hints')">
          <span>ðŸ’¡ Hints <span class="dc-count">${challenge.hints.length}</span></span>
          <span class="dc-chevron">â–¼</span>
        </button>
        <div class="dc-section-body">
          <ul>${challenge.hints.map(h => `<li>${h}</li>`).join('')}</ul>
        </div>
      </div>`
    : '';

  const testcasesHtml = challenge.testcases && challenge.testcases.length > 0
    ? `<div class="dc-section" id="dc-testcases">
        <button class="dc-section-toggle" onclick="toggleDcSection('dc-testcases')">
          <span>ðŸ§ª Test Cases <span class="dc-count">${challenge.testcases.length}</span></span>
          <span class="dc-chevron">â–¼</span>
        </button>
        <div class="dc-section-body">
          <ul>${challenge.testcases.map(t => `<li><code>${t}</code></li>`).join('')}</ul>
        </div>
      </div>`
    : '';

  const descEl = document.getElementById('practice-instructions');
  if (descEl) descEl.innerHTML = `
    <div class="deep-challenge-header">${tagHtml}</div>

    <div class="dc-section dc-open" id="dc-desc">
      <button class="dc-section-toggle" onclick="toggleDcSection('dc-desc')">
        <span>ðŸ“‹ Problem Description</span>
        <span class="dc-chevron">â–¼</span>
      </button>
      <div class="dc-section-body">
        <div class="deep-challenge-body">${challenge.description.replace(/\n/g, '<br>')}</div>
      </div>
    </div>

    ${hintsHtml}
    ${testcasesHtml}

    <div class="dc-section dc-open" id="dc-submit">
      <button class="dc-section-toggle" onclick="toggleDcSection('dc-submit')">
        <span>âœ Submit</span>
        <span class="dc-chevron">â–¼</span>
      </button>
      <div class="dc-section-body">
        <div class="deep-self-check">
          <p>Implement this in your IDE or in the editor below, then mark as complete when done.</p>
          <button class="btn btn-success" onclick="markDeepChallengeDone('${challenge.id}')">âœ“ Mark as Completed</button>
        </div>
      </div>
    </div>
  `;

  const codeArea = document.getElementById('practice-code-textarea');
  if (codeArea) {
    codeArea.value = `// Deep Challenge: ${challenge.title}\n// Implement your solution here\n\npublic class Solution {\n    // Your code here\n}`;
    syncLineNumbers();
  }

  const casesContainer = document.getElementById('test-cases-grid');
  if (casesContainer) {
    casesContainer.innerHTML = '<p class="self-check-note">ðŸ“‹ This is a self-check challenge. Implement in your IDE, verify your test cases, then mark as completed.</p>';
  }

  logToConsole(`SYSTEM READY: Loaded deep challenge "${challenge.title}". Implement in your IDE, then mark as completed.`);
}

function markDeepChallengeDone(id) {
  saveChallengePassed(id);
  const btn = document.querySelector(`button[onclick="markDeepChallengeDone('${id}')"]`);
  if (btn) { btn.textContent = 'âœ“ Completed!'; btn.disabled = true; btn.style.opacity = '0.7'; }
}

function toggleDcSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const isOpen = section.classList.contains('dc-open');
  section.classList.toggle('dc-open', !isOpen);
  const chevron = section.querySelector('.dc-chevron');
  if (chevron) chevron.style.transform = isOpen ? 'rotate(-90deg)' : 'rotate(0deg)';
}

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

// Exact integer division when both values are whole numbers, plain division
// otherwise, so Java's "int / int" behaviour is preserved without breaking
// floating point maths such as "kilometers / 1.609344".
function javaDiv(left, right) {
  if (Number.isInteger(left) && Number.isInteger(right)) return Math.trunc(left / right);
  return left / right;
}

// Java's String.replace(CharSequence, CharSequence) replaces EVERY occurrence.
// JavaScript's String.replace with a string replaces only the first, so
// "A man a plan a canal Panama" lost just one space and the palindrome check was
// told the answer was wrong. This restores the Java meaning for that overload.
function javaReplaceAll(text, find, replacement) {
  return String(text).split(String(find)).join(String(replacement));
}

// The practice checker runs the learner's method body in the browser, so ordinary
// Java syntax has to be translated first. Without this, correct Java code such as
// "double circleArea = ...;" would throw and be reported as a wrong answer.
// A Java cast such as "(int) (value * 1000)" is not valid JavaScript, so it has to
// be translated before the checker can run the body. The operand is taken as either
// a parenthesised group or a single primary expression, which covers the casts that
// appear in practice: "(int) x", "(int) (a * b)", "(long) minutes / 1000".
function translateJavaCasts(code) {
  const CAST = /\((int|long|short|byte|float|double|char)\)/g;
  let out = '';
  let last = 0;
  let match;
  while ((match = CAST.exec(code)) !== null) {
    const type = match[1];
    let i = match.index + match[0].length;
    while (i < code.length && /\s/.test(code[i])) i++;

    let end = i;
    if (code[i] === '(') {
      let depth = 0;
      for (; end < code.length; end++) {
        if (code[end] === '(') depth++;
        else if (code[end] === ')') { depth--; if (depth === 0) { end++; break; } }
      }
    } else {
      // A primary expression: names, dots, indexes, and any call or group it applies.
      while (end < code.length) {
        const ch = code[end];
        if (/[\w$.\[\]]/.test(ch)) { end++; continue; }
        if (ch === '(') {
          let depth = 0;
          for (; end < code.length; end++) {
            if (code[end] === '(') depth++;
            else if (code[end] === ')') { depth--; if (depth === 0) { end++; break; } }
          }
          continue;
        }
        break;
      }
    }
    if (end === i) continue;                       // nothing to wrap, leave it alone

    const operand = code.slice(i, end);
    const wrapper = type === 'char' ? 'String.fromCharCode'
      : (type === 'double' || type === 'float') ? 'Number'
      : 'Math.trunc';                              // int, long, short and byte truncate
    out += code.slice(last, match.index) + `${wrapper}(${operand})`;
    last = end;
    CAST.lastIndex = end;
  }
  return out + code.slice(last);
}

// Translates a Java method body into JavaScript so the practice checker can run it.
//
// captureOutput routes printing to the two helpers the checker provides instead of
// the console, so the text a void method prints can be compared with what the
// notes say it should print. print and println are handled separately because a
// println adds a newline and a print does not, and that difference is part of the
// expected output.
function prepareJavaBody(body, captureOutput) {
  let code = String(body || '');
  code = translateJavaCasts(code);
  if (captureOutput) {
    code = code.replace(/System\.out\.println\s*\(/g, '__printLn(');
    code = code.replace(/System\.out\.print\s*\(/g, '__print(');
  } else {
    code = code.replace(/System\.out\.print(?:ln)?\s*\(/g, 'console.log(');
  }
  code = code.replace(/\bInteger\.parseInt\s*\(/g, 'parseInt(');
  code = code.replace(/\bLong\.parseLong\s*\(/g, 'parseInt(');
  code = code.replace(/\bDouble\.parseDouble\s*\(/g, 'parseFloat(');
  code = code.replace(/\bFloat\.parseFloat\s*\(/g, 'parseFloat(');
  code = code.replace(/\bString\.valueOf\s*\(/g, 'String(');
  code = code.replace(/\bMath\.pow\s*\(/g, 'Math.pow(');
  code = code.replace(/\.length\s*\(\s*\)/g, '.length');
  // charAt(i) is index access on a JavaScript string. Without this the method call
  // does not exist, and a verifier that silently throws gives no verdict at all.
  code = code.replace(/([A-Za-z_$][\w$.\[\]]*)\.charAt\s*\(\s*([^()]+?)\s*\)/g, '$1[$2]');
  code = code.replace(/([A-Za-z_$][\w$.\[\]]*)\.toCharArray\s*\(\s*\)/g, '$1.split("")');
  // Java replaces every occurrence when the first argument is plain text, and
  // JavaScript replaces only the first, so the two-argument string form is routed
  // through a helper that matches Java.
  code = code.replace(/([A-Za-z_$][\w$.\[\]]*)\.replace\s*\(\s*("(?:[^"\\]|\\.)*")\s*,\s*(("(?:[^"\\]|\\.)*")|[^()]*?)\s*\)/g,
    'javaReplaceAll($1, $2, $3)');
  code = code.replace(/([A-Za-z_$][\w$.\[\]]*)\.equalsIgnoreCase\s*\(([^()]*)\)/g,
    '($1.toLowerCase() === String($2).toLowerCase())');
  code = code.replace(/([A-Za-z_$][\w.$\[\]'"]*)\.equals\s*\(([^()]*)\)/g, '($1 === $2)');
  code = code.replace(/([A-Za-z_$][\w.$\[\]'"]*)\.isEmpty\s*\(\s*\)/g, '($1.length === 0)');
  // Local variable declarations, including the one inside "for (int i = 0; ...)".
  code = code.replace(/\b(?:int|long|short|byte|double|float|boolean|char|String)\s+([A-Za-z_$][\w$]*)\s*=/g, 'var $1 =');
  code = code.replace(/\b(?:int|long|short|byte|double|float|boolean|char|String)\s+([A-Za-z_$][\w$]*)\s*;/g, 'var $1;');
  // Division keeps Java semantics through javaDiv.
  //
  // The operands are restricted to a number, an identifier chain, or a call on one,
  // so the pattern can never swallow a bracket. It used to include brackets in the
  // character class, which turned "Math.trunc((minutes / 60))" into
  // "javaDiv(Math.trunc((minutes, 60)))" and produced NaN instead of a number.
  const TERM = '(?:\\d+(?:\\.\\d+)?|[A-Za-z_$][\\w$]*(?:\\.[A-Za-z_$][\\w$]*)*(?:\\([^()]*\\))?)';
  code = code.replace(new RegExp(`(${TERM})\\s*/\\s*(${TERM})`, 'g'), 'javaDiv($1, $2)');
  return code;
}

// ============================================================================
// Connecting Mastery and the Code Practice lab
//
// They share no capability: Mastery measures, the lab is a tool. They never used to
// reference each other, so Mastery said "Drill this concept" and never "practise it in
// code", and the lab showed its challenges in file order with no idea which ones the
// author was weak at. These functions are that connection.
// ============================================================================

// The challenges that teach a given concept.
//
// `preciseOnly` matters. A challenge whose concepts came from its own notes narrowed to
// that topic is a real match. One whose concepts fell back to the whole chapter's list
// only means "this chapter teaches it", and offering it would promise a challenge about
// one concept and deliver another - measured, 8 of 69 are precise and 61 are not. The
// Mastery button uses preciseOnly; the weakness ordering uses both, because ranking by
// chapter weakness is genuinely what the data supports.
function challengesForConcept(conceptId, preciseOnly) {
  if (!conceptId) return [];
  // Unscoped on purpose: this answers "is there a challenge for this concept", which
  // must not depend on which chapter the lab is currently showing.
  return getAllPracticeChallenges().filter(ch => {
    if (!Array.isArray(ch.concepts) || !ch.concepts.includes(conceptId)) return false;
    if (preciseOnly && ch.conceptsSource !== 'topic') return false;
    return true;
  });
}

// Opens the lab on the first challenge that genuinely teaches this concept.
function practiseConceptInCode(conceptId) {
  const matches = challengesForConcept(conceptId, true);
  if (!matches.length) return;
  const target = matches[0];
  // Scope to the chapter so the list around it makes sense, then select it.
  currentPracticeScope = { chapterName: target.chapter, subChapterName: null };
  showView('practice-view');
  renderChallengesList();
  const scoped = getScopedPracticeChallenges();
  const idx = scoped.findIndex(ch => ch.id === target.id);
  currentChallengeIndex = idx >= 0 ? idx : 0;
  selectChallenge(currentChallengeIndex);
}

// How weak the author is at the concepts a challenge teaches. Lower is weaker, so the
// sort is ascending. A concept never attempted counts as weakest, because it is unknown
// rather than proved.
function challengeWeakness(challenge) {
  const mastery = getConceptMastery();
  const byId = new Map(mastery.map(m => [m.id, m]));
  const concepts = (challenge.concepts || []).map(id => byId.get(id)).filter(Boolean);
  if (!concepts.length) return 1;                       // no data: treat as weak
  const attempted = concepts.filter(c => c.attempted);
  if (!attempted.length) return 0;                      // nothing tried yet: weakest
  return attempted.reduce((sum, c) => sum + c.accuracy, 0) / attempted.length;
}

// Orders the lab's list by what the author is weakest at, so the top of the list is what
// to actually do. Applied only when the whole set is shown; a chapter-scoped list is
// small enough that its own order reads better.
function orderChallengesByWeakness(list) {
  return list.slice().sort((a, b) => challengeWeakness(a) - challengeWeakness(b));
}

// Switches the lab's list between weakest-concept-first and the file order.
function togglePracticeOrder() {
  practiceOrderByWeakness = !practiceOrderByWeakness;
  currentChallengeIndex = 0;
  renderChallengesList();
  selectChallenge(currentChallengeIndex);
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

  // The ordering note only means anything when the whole set is shown; a chapter-scoped
  // list is small and keeps its own order.
  const orderBar = document.getElementById('practice-order-bar');
  const orderNote = document.getElementById('practice-order-note');
  const orderBtn = document.getElementById('btn-practice-order');
  if (orderBar) {
    orderBar.style.display = currentPracticeScope.chapterName ? 'none' : 'flex';
    if (orderNote) orderNote.innerText = practiceOrderByWeakness
      ? 'Weakest concepts first'
      : 'In chapter order';
    if (orderBtn) orderBtn.innerText = practiceOrderByWeakness ? 'By chapter' : 'Weakest first';
  }

  scopedChallenges.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = `challenge-item ${idx === currentChallengeIndex ? 'active' : ''}`;
    
    const isPassed = passed[ch.id];
    
    btn.innerHTML = `
      <span class="challenge-item-title">${ch.title}</span>
      <div class="challenge-item-meta">
        <span class="difficulty-badge ${ch.difficulty.toLowerCase()}">${ch.difficulty}</span>
        <span class="check-badge ${ch.selfCheck ? 'self' : 'auto'}">${ch.selfCheck ? 'Self-check' : 'Auto-checked'}</span>
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

  // Be honest about whether this challenge is verified or must be self-checked.
  const checkNote = document.getElementById('practice-check-note');
  if (checkNote) {
    checkNote.textContent = challenge.selfCheck
      ? 'Self-check: no automatic verification. Run it in your IDE and compare with the examples.'
      : 'Auto-checked: your method is run against the expected values below.';
    checkNote.className = `practice-check-note ${challenge.selfCheck ? 'self' : 'auto'}`;
  }
  
  const textarea = document.getElementById('practice-code-textarea');
  textarea.value = challenge.template;
  syncLineNumbers();
  
  // Render test cases grid
  const casesContainer = document.getElementById('test-cases-grid');
  casesContainer.innerHTML = '';

  if (challenge.selfCheck) {
    // Self-check mode: show examples and a "Mark as Completed" button
    const noteDiv = document.createElement('div');
    noteDiv.className = 'test-case-card self-check-card';
    noteDiv.innerHTML = '<p class="self-check-note">ðŸ“‹ Self-check: Implement the method, run it in your IDE and verify the output matches the examples in the description, then mark as completed.</p>';
    casesContainer.appendChild(noteDiv);
    const markBtn = document.createElement('button');
    markBtn.className = 'btn btn-success btn-small';
    markBtn.innerText = 'âœ“ Mark as Completed';
    markBtn.onclick = () => { saveChallengePassed(challenge.id); };
    casesContainer.appendChild(markBtn);
  } else {
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
  }
  
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
  
  // Statements may be wrapped across several lines, which is normal Java style.
  // So statements are rebuilt first and only a statement that genuinely never ends
  // is reported, instead of flagging every continuation line.
  const lines = code.split('\n');
  const endsWithOperator = text => /(\+|-|\*|\/|%|&&|\|\||,|=|<|>|&|\|)\s*$/.test(text);
  const isControlStart = text => /^(if|else|for|while|do|switch|try|catch|finally|case|default)\b/.test(text);
  const isCompleteStatement = text => /[;{}:]\s*$/.test(text);

  let statement = '';
  let statementStartLine = 0;
  let depth = 0;

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.length === 0) return;
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.endsWith('*/')) return;
    if (trimmed.startsWith('@') || trimmed.includes('class ') || trimmed.includes('interface ')) return;

    const pending = statement.trim();
    const startsFreshStatement = /^(public|private|protected|static|final|return|throw|System\.|\w[\w<>\[\].]*\s*[=(])/.test(trimmed);
    if (pending && depth === 0 && startsFreshStatement &&
        !/[;{}:]\s*$/.test(pending) && !endsWithOperator(pending) && !isControlStart(pending)) {
      errors.push(`line ${statementStartLine + 1}: error: ';' expected`);
      statement = '';
    }

    if (statement === '') {
      statementStartLine = idx;
      depth = 0;
    }
    statement += (statement ? ' ' : '') + trimmed;
    // Only parentheses and brackets mean "continues on the next line". Braces
    // close a block, so counting them here used to disable the check completely
    // once inside a method body.
    depth += (trimmed.match(/[(\[]/g) || []).length - (trimmed.match(/[)\]]/g) || []).length;
    if (depth <= 0 && /[;{}]\s*$/.test(trimmed)) {
      statement = '';
      depth = 0;
    }
  });

  const leftover = statement.trim();
  if (leftover && depth === 0 && !isCompleteStatement(leftover) && !endsWithOperator(leftover) && !isControlStart(leftover)) {
    errors.push(`line ${statementStartLine + 1}: error: ';' expected`);
  }

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

  // For self-check challenges, just compile and notify the user
  if (challenge.selfCheck) {
    const compileErrors = compileJavaCode(code, challenge.id);
    if (compileErrors.length > 0) {
      compileErrors.forEach(err => logToConsole(err, "error"));
      logToConsole(`COMPILATION FAILED: ${compileErrors.length} error(s) found.`, "error");
    } else {
      logToConsole("COMPILATION SUCCESSFUL.");
      logToConsole("This is a self-check challenge. Run your code in an IDE and verify the output, then click 'Mark as Completed'.");
    }
    return;
  }

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
  let anyUnverified = false;
  challenge.testCases.forEach((tc, idx) => {
    const statusEl = document.getElementById(`test-case-status-${idx}`);
    try {
      if (challenge.id === "statictracking" && idx === 0) {
        challenge.accumulated = 0;
      }
      
      const outcome = challenge.verify(code, tc);
      if (outcome === null || outcome === undefined) {
        // The checker could not run this code. That is not a wrong answer, so it
        // must never be reported as one.
        anyUnverified = true;
        statusEl.className = 'test-case-status pending';
        logToConsole(`Test Case ${idx + 1}: could not be checked automatically (unsupported syntax). Compare your result with the expected value by hand.`);
      } else if (outcome) {
        statusEl.className = 'test-case-status pass';
        logToConsole(`Test Case ${idx + 1}: Passed.`);
      } else {
        statusEl.className = 'test-case-status fail';
        allPassed = false;
        logToConsole(`Test Case ${idx + 1}: Failed. Output mismatch.`, "error");
      }
    } catch (err) {
      anyUnverified = true;
      statusEl.className = 'test-case-status pending';
      logToConsole(`Test Case ${idx + 1}: could not be checked automatically (${err.message}).`, "error");
    }
  });
  
  if (allPassed && anyUnverified) {
    logToConsole("\nSome test cases could not be checked automatically. Verify them by hand before marking this complete.");
  } else if (allPassed) {
    logToConsole("\nâœ“ SUCCESS: ALL TEST CASES PASSED!", "success");
    logToConsole("Saving challenge completed status... Great job!");
    saveChallengePassed(challenge.id);
  } else {
    logToConsole("\nâœ— FAILURE: Some test cases did not pass. Debug your logic and try again.", "error");
  }
}
