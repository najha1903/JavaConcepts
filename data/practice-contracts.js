// Independent examples from the stated exercise contracts, not values obtained by
// running the solutions. Representative finite inputs, not an exhaustive Java test suite.
const chapter6 = 'src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/';
const chapter1 = 'src/Chapter_1_Java_Introduction/';
const chapter7 = 'src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/';
const chapter9 = 'src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/';
const chapter11 = 'src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/';
const cases = rows => rows.map(([category, args, expected]) => ({
  category, args, expected, provenance: { kind: 'independent-contract', file: 'data/practice-contracts.js' }
}));
const PRACTICE_CONTRACTS = [
  {
    id: 'fibonacci-sequence', challengeId: 'fibonaccideepproblem',
    sourceFile: chapter1 + 'Sub_Chapter_3_DeepProblems/FibonacciDeepProblem.java',
    methodName: 'generateFibonacci', parameterTypes: ['int'], returnType: 'long[]',
    // F(0)=0, F(1)=1; each following entry is the sum of the previous two.
    // Keep allocation bounded; long overflow and enormous counts are not checked.
    cases: cases([
      ['normal', [6], [0, 1, 1, 2, 3, 5]],
      ['normal', [12], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]],
      ['boundary', [0], []], ['boundary', [1], [0]], ['boundary', [2], [0, 1]],
      ['boundary', [3], [0, 1, 1]], ['invalid', [-1], []]
    ])
  },
  {
    id: 'fibonacci-membership', challengeId: 'fibonaccideepproblem',
    sourceFile: chapter1 + 'Sub_Chapter_3_DeepProblems/FibonacciDeepProblem.java',
    methodName: 'isFibonacci', parameterTypes: ['long'], returnType: 'boolean',
    // F(46)=1836311903, F(47)=2971215073; neighbors are not sequence terms.
    cases: cases([
      ['normal', [144], true], ['normal', [145], false], ['normal', [4], false],
      ['boundary', [0], true], ['boundary', [1], true], ['boundary', [2], true],
      ['boundary', [2971215072], false], ['boundary', [2971215073], true],
      ['boundary', [2971215074], false], ['invalid', [-1], false]
    ])
  },
  {
    id: 'celsius-to-fahrenheit', challengeId: 'temperatureconverterchallenge',
    sourceFile: chapter1 + 'Sub_Chapter_2_Java_Intro_CodingChallenge/TemperatureConverterChallenge.java',
    methodName: 'toFahrenheit', parameterTypes: ['double'], returnType: 'double', tolerance: 1e-12,
    invalidCasesNotApplicable: 'The exercise specifies a conversion formula with no rejected temperature range; finite inputs only.',
    cases: cases([
      ['normal', [12.5], 54.5], ['normal', [-10], 14],
      ['boundary', [0], 32], ['boundary', [100], 212], ['boundary', [-40], -40]
    ])
  },
  {
    id: 'inclusive-teen-range', challengeId: 'teennumbercheckercodingchallenge',
    sourceFile: chapter6 + 'TeenNumberCheckerCodingChallenge.java',
    methodName: 'isTeen', parameterTypes: ['int'], returnType: 'boolean',
    invalidCasesNotApplicable: 'Every int is accepted; numbers outside 13 through 19 return false.',
    cases: cases([
      ['normal', [16], true], ['normal', [30], false], ['normal', [-1], false],
      ['boundary', [12], false], ['boundary', [13], true], ['boundary', [19], true], ['boundary', [20], false]
    ])
  },
  {
    id: 'any-teen-range', challengeId: 'teennumbercheckercodingchallenge',
    sourceFile: chapter6 + 'TeenNumberCheckerCodingChallenge.java',
    methodName: 'hasTeen', parameterTypes: ['int', 'int', 'int'], returnType: 'boolean',
    invalidCasesNotApplicable: 'Every int triple is accepted; any one teen suffices even when another number is negative.',
    cases: cases([
      ['normal', [16, 30, 40], true], ['normal', [30, 16, 40], true], ['normal', [30, 40, 16], true],
      ['normal', [14, 16, 18], true], ['normal', [-1, 16, 40], true], ['normal', [30, 40, 50], false],
      ['boundary', [13, 12, 20], true], ['boundary', [12, 13, 20], true], ['boundary', [12, 20, 13], true],
      ['boundary', [19, 12, 20], true], ['boundary', [12, 19, 20], true], ['boundary', [12, 20, 19], true],
      ['boundary', [12, 20, 12], false]
    ])
  },
  {
    id: 'barking-hours', challengeId: 'barkingdogcodingchallenge',
    sourceFile: chapter6 + 'BarkingDogCodingChallenge.java',
    methodName: 'shouldWakeUp', parameterTypes: ['boolean', 'int'], returnType: 'boolean',
    cases: cases([
      ['normal', [true, 3], true], ['normal', [true, 12], false], ['normal', [false, 3], false],
      ['boundary', [true, 0], true], ['boundary', [true, 7], true], ['boundary', [true, 8], false],
      ['boundary', [true, 22], false], ['boundary', [true, 23], true], ['boundary', [false, 23], false],
      ['invalid', [true, -1], false], ['invalid', [true, 24], false]
    ])
  },
  {
    id: 'seasonal-playing-temperature', challengeId: 'playingcatcodingchallenge',
    sourceFile: chapter6 + 'PlayingCatCodingChallenge.java',
    methodName: 'isCatPlaying', parameterTypes: ['boolean', 'int'], returnType: 'boolean',
    invalidCasesNotApplicable: 'Every temperature int is accepted; outside the seasonal interval returns false.',
    cases: cases([
      ['normal', [false, 30], true], ['normal', [true, 40], true], ['normal', [false, -5], false],
      ['boundary', [false, 24], false], ['boundary', [false, 25], true],
      ['boundary', [false, 35], true], ['boundary', [false, 36], false],
      ['boundary', [true, 24], false], ['boundary', [true, 25], true],
      ['boundary', [true, 35], true], ['boundary', [true, 36], true],
      ['boundary', [true, 45], true], ['boundary', [true, 46], false]
    ])
  },
  {
    id: 'calendar-month-days', challengeId: 'numberofdaysinamonthcodingchallenge',
    sourceFile: chapter7 + 'NumberOfDaysInAMonthCodingChallenge.java',
    methodName: 'getDaysInMonth', parameterTypes: ['int', 'int'], returnType: 'int',
    cases: cases([
      ['normal', [1, 2023], 31], ['normal', [2, 2023], 28], ['normal', [3, 2023], 31],
      ['normal', [4, 2023], 30], ['normal', [5, 2023], 31], ['normal', [6, 2023], 30],
      ['normal', [7, 2023], 31], ['normal', [8, 2023], 31], ['normal', [9, 2023], 30],
      ['normal', [10, 2023], 31], ['normal', [11, 2023], 30], ['normal', [12, 2023], 31],
      ['boundary', [2, 1900], 28], ['boundary', [2, 2000], 29], ['boundary', [2, 2024], 29],
      ['boundary', [1, 1], 31], ['boundary', [12, 9999], 31],
      ['invalid', [0, 2024], -1], ['invalid', [13, 2024], -1],
      ['invalid', [2, 0], -1], ['invalid', [2, 10000], -1]
    ])
  },
  {
    id: 'two-digit-sharing', challengeId: 'shareddigitcodingchallenge',
    sourceFile: chapter9 + 'SharedDigitCodingChallenge.java',
    methodName: 'hasSharedDigit', parameterTypes: ['int', 'int'], returnType: 'boolean',
    cases: cases([
      ['normal', [12, 23], true], ['normal', [23, 12], true], ['normal', [12, 34], false],
      ['normal', [12, 13], true], ['normal', [12, 32], true],
      ['boundary', [10, 20], true], ['boundary', [99, 19], true], ['boundary', [10, 99], false],
      ['invalid', [9, 19], false], ['invalid', [19, 9], false],
      ['invalid', [100, 10], false], ['invalid', [10, 100], false]
    ])
  },
  {
    id: 'whole-flour-bags', challengeId: 'floorpackproblemcodingchallenge',
    sourceFile: chapter9 + 'FloorPackProblemCodingChallenge.java',
    methodName: 'canPack', parameterTypes: ['int', 'int', 'int'], returnType: 'boolean',
    // Choose a subset of whole bags: unused bags are allowed, and zero needs none.
    cases: cases([
      ['normal', [2, 2, 11], true], ['normal', [1, 3, 9], false], ['normal', [0, 6, 4], true],
      ['boundary', [0, 0, 0], true], ['boundary', [2, 0, 0], true],
      ['boundary', [2, 0, 5], true], ['boundary', [2, 0, 9], false],
      ['boundary', [2, 0, 10], true], ['boundary', [1, 0, 4], false],
      ['boundary', [0, 0, 1], false],
      ['invalid', [-1, 5, 5], false], ['invalid', [1, -1, 5], false], ['invalid', [1, 1, -1], false]
    ])
  },
  {
    id: 'paint-area-buckets', challengeId: 'paintjobchallenge',
    sourceFile: chapter11 + 'PaintJobChallenge.java',
    methodName: 'getBucketCount', parameterTypes: ['double', 'double'], returnType: 'int',
    cases: cases([
      ['normal', [10, 3], 4], ['normal', [7.5, 2.5], 3],
      ['boundary', [6, 3], 2], ['boundary', [6.001, 3], 3], ['boundary', [0.001, 3], 1],
      ['invalid', [0, 3], -1], ['invalid', [3, 0], -1], ['invalid', [-1, 3], -1], ['invalid', [3, -1], -1]
    ])
  },
  {
    id: 'paint-wall-buckets', challengeId: 'paintjobchallenge',
    sourceFile: chapter11 + 'PaintJobChallenge.java',
    methodName: 'getBucketCount', parameterTypes: ['double', 'double', 'double'], returnType: 'int',
    cases: cases([
      ['normal', [3, 4, 5], 3], ['normal', [2.5, 4, 2], 5],
      ['boundary', [2, 3, 6], 1], ['boundary', [2, 3.001, 6], 2],
      ['invalid', [0, 3, 6], -1], ['invalid', [2, 0, 6], -1], ['invalid', [2, 3, 0], -1],
      ['invalid', [-2, 3, 6], -1], ['invalid', [2, -3, 6], -1], ['invalid', [2, 3, -6], -1]
    ])
  },
  {
    id: 'paint-extra-buckets', challengeId: 'paintjobchallenge',
    sourceFile: chapter11 + 'PaintJobChallenge.java',
    methodName: 'getBucketCount', parameterTypes: ['double', 'double', 'double', 'int'], returnType: 'int',
    // Buckets to buy = max(0, ceil(wall area / coverage) - buckets already owned).
    cases: cases([
      ['normal', [3, 4, 5, 1], 2], ['normal', [2.5, 4, 2, 3], 2],
      ['boundary', [2, 3, 6, 0], 1], ['boundary', [2, 3.001, 6, 1], 1],
      ['boundary', [2, 3, 6, 1], 0], ['boundary', [2, 3, 6, 2], 0],
      ['invalid', [0, 3, 6, 0], -1], ['invalid', [2, 0, 6, 0], -1],
      ['invalid', [2, 3, 0, 0], -1], ['invalid', [2, 3, 6, -1], -1]
    ])
  },
  {
    id: 'speed-kmh-to-mph', challengeId: 'speedconvertercodingchallenge',
    sourceFile: chapter6 + 'SpeedConverterCodingChallenge.java', methodName: 'toMilesPerHour',
    parameterTypes: ['double'], returnType: 'long',
    cases: cases([['normal', [10.25], 6], ['normal', [75.114], 47], ['boundary', [0], 0], ['boundary', [1.609], 1], ['invalid', [-0.01], -1]])
  },
  {
    id: 'gregorian-leap-year', challengeId: 'leapyearcalculatorcodingchallenge',
    sourceFile: chapter6 + 'LeapYearCalculatorCodingChallenge.java', methodName: 'isLeapYear',
    parameterTypes: ['int'], returnType: 'boolean',
    cases: cases([['normal', [2024], true], ['normal', [2023], false], ['boundary', [1900], false], ['boundary', [2000], true], ['boundary', [1], false], ['boundary', [9999], false], ['invalid', [0], false], ['invalid', [10000], false], ['invalid', [-400], false]])
  },
  {
    id: 'positive-odd-number', challengeId: 'sumoddchallenge',
    sourceFile: 'src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/SumOddChallenge.java',
    methodName: 'isOdd', parameterTypes: ['int'], returnType: 'boolean',
    cases: cases([['normal', [3], true], ['normal', [4], false], ['boundary', [1], true], ['boundary', [0], false], ['invalid', [-3], false]])
  },
  {
    id: 'inclusive-positive-odd-sum', challengeId: 'sumoddchallenge',
    sourceFile: 'src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/SumOddChallenge.java',
    methodName: 'sumOdd', parameterTypes: ['int', 'int'], returnType: 'int',
    cases: cases([['normal', [1, 10], 25], ['normal', [10, 20], 75], ['boundary', [13, 13], 13], ['boundary', [2, 2], 0], ['invalid', [0, 5], -1], ['invalid', [5, 1], -1], ['invalid', [1, -2], -1]])
  },
  {
    id: 'even-digit-sum', challengeId: 'evendigitsumcodingchallenge',
    sourceFile: chapter9 + 'EvenDigitSumCodingChallenge.java', methodName: 'getEvenDigitSum',
    parameterTypes: ['int'], returnType: 'int',
    cases: cases([['normal', [123456789], 20], ['normal', [2468], 20], ['normal', [13579], 0], ['boundary', [0], 0], ['boundary', [2], 2], ['invalid', [-22], -1]])
  },
  {
    id: 'gcd-minimum-ten', challengeId: 'greatestcommondivisorcodingchallenge',
    sourceFile: chapter9 + 'GreatestCommonDivisorCodingChallenge.java', methodName: 'getGreatestCommonDivisor',
    parameterTypes: ['int', 'int'], returnType: 'int',
    cases: cases([['normal', [81, 153], 9], ['normal', [11, 13], 1], ['boundary', [10, 10], 10], ['boundary', [10, 20], 10], ['invalid', [9, 20], -1], ['invalid', [20, 9], -1], ['invalid', [-10, 20], -1]])
  },
  {
    id: 'circle-area', challengeId: 'areacalculatorcodingchallenge',
    sourceFile: chapter6 + 'AreaCalculatorCodingChallenge.java', methodName: 'area',
    parameterTypes: ['double'], returnType: 'double', tolerance: 1e-12,
    cases: cases([['normal', [1], 3.141592653589793], ['normal', [2], 12.566370614359172], ['boundary', [0], 0], ['invalid', [-1], -1]])
  },
  {
    id: 'rectangle-area', challengeId: 'areacalculatorcodingchallenge',
    sourceFile: chapter6 + 'AreaCalculatorCodingChallenge.java', methodName: 'area',
    parameterTypes: ['double', 'double'], returnType: 'double',
    cases: cases([['normal', [5, 4], 20], ['normal', [2.5, 4], 10], ['boundary', [0, 4], 0], ['invalid', [-1, 4], -1], ['invalid', [4, -1], -1]])
  }
];
module.exports = { PRACTICE_CONTRACTS };
