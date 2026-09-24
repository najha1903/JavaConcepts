// Independent examples from the stated exercise contracts, not values obtained by
// running the solutions. Representative finite inputs, not an exhaustive Java test suite.
const chapter6 = 'src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/';
const chapter9 = 'src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/';
const cases = rows => rows.map(([category, args, expected]) => ({
  category, args, expected, provenance: { kind: 'independent-contract', file: 'data/practice-contracts.js' }
}));
const PRACTICE_CONTRACTS = [
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
