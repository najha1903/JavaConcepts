package Chapter_2_PrimitiveTypes.Sub_Chapter_1_Variables;

// Core Concepts: Java Variables & Initialization
// A variable is a named storage location in memory that holds a data value.
// In Java, variables are strongly typed: every variable must be declared with a specific data type before it can be used.
//
// Syntax: dataType variableName = initialValue;
// Example: int myFirstNumber = 5;
//
// Naming Rules & Conventions:
// - Identifiers must begin with a letter, underscore (_), or dollar sign ($).
// - By convention, variable names follow camelCase (e.g. myFirstNumber, totalAccountBalance).
// - Keywords (such as int, double, class, public) cannot be used as variable identifiers.
//
// Local Variable Lifecycle & Rules:
// - Local variables are declared inside methods, constructors, or code blocks.
// - Unlike instance/static fields, local variables NEVER receive default values.
// - Warning: You MUST initialize a local variable before reading or referencing it, otherwise the code will fail to compile.
//
// The three kinds of variable :-
// - Local variable :- declared inside a method, constructor or block. It exists only while that block
//   runs, and it must be assigned before it is read.
// - Instance field :- declared in the class but outside any method. Every object gets its own copy.
// - Static field :- declared with the static keyword. One copy is shared by the whole class.
//
// Default values, for fields only. Local variables get none :-
// - int, long, short, byte :- 0
// - double, float :- 0.0
// - boolean :- false
// - char :- the null character, Unicode 0000
// - any reference type, including String :- null
//
// Syntax and a declaration in practice :-
// dataType variableName = initialValue;
// int myFirstNumber = 5;


// @quiz (INTERVIEW) What are Java's 8 primitive types and their sizes?
// @answer byte (8-bit), short (16-bit), int (32-bit), long (64-bit), char (16-bit Unicode), float (32-bit IEEE 754), double (64-bit IEEE 754), and boolean (true/false).
// @answer Primitive variables hold values; reference variables hold references to objects, not the objects themselves. Local variables belong to method frames, while instance fields belong to objects, so neither kind of variable always lives on the stack.

// @quiz (INTERVIEW TRAP) Do local variables receive default values in Java?
// @answer No. Instance and static fields get default values (0, false, null), but local variables do not.
// @answer An uninitialized local variable causes a compile-time error if read before assignment.

// @quiz (INTERVIEW, EASY) Which of these is a valid Java variable identifier that also follows the usual naming convention?
// @option totalAccountBalance [correct]
// @option 2ndPlaceScore
// @option class
// @option total-balance
// @explain An identifier must begin with a letter, an underscore, or a dollar sign, may not be a keyword, and by convention uses camelCase.
// @why B: an identifier cannot begin with a digit.
// @why C: class is a Java keyword and cannot be used as a variable name.
// @why D: a hyphen is not allowed in an identifier; the compiler reads it as a subtraction.

// @quiz (INTERVIEW, MEDIUM) Is `int x = 1_000_000;` valid Java, and what do the underscores do?
// @option It is valid from Java 7 onward, the value is one million, and the underscores are ignored by the compiler. [correct]
// @option It is invalid, because underscores are not permitted in numeric literals.
// @option It creates a String rather than a number.
// @option The underscores must appear after every third digit, or the code will not compile.
// @explain Underscores exist purely to make long numbers easier for a human to read. The compiler strips them, so the value is unchanged.
// @why B: Java 7 added underscores in numeric literals exactly for readability.
// @why C: it is still an int literal, and x holds the number 1000000.
// @why D: grouping in threes is only a convention. The real rules forbid an underscore at the very start or end, next to a decimal point, or directly before a suffix such as L or f.

// @quiz (OCJP, MEDIUM) Does this code compile?
// @code public static void main(String[] args) {
// @code     int count;
// @code     System.out.println(count);
// @code }
// @option No. A local variable must be assigned before it is read, or the compiler stops. [correct]
// @option Yes, and it prints 0.
// @option Yes, and it prints null.
// @option Yes, and it prints whatever was left in memory.
// @explain Local variables never receive a default value, unlike fields. Reading count before assigning it is a compile-time error.
// @why B: only fields are zeroed. A local int has no value at all until you assign one.
// @why C: null is not even a legal value for a primitive such as int.
// @why D: Java does not expose leftover memory. It refuses to compile the read instead.

// @quiz (OCJP, HARD) What is printed by this code?
// @code int x = 1;
// @code {
// @code     int x = 2;
// @code     System.out.println(x);
// @code }
// @code System.out.println(x);
// @option 2 and then 1, because the inner x hides the outer one only inside its block. [correct]
// @option It does not compile, because x is declared twice.
// @option 2 and then 2, because the second declaration changes the first variable.
// @option 1 and then 1, because the inner declaration is ignored.
// @explain A name declared inside a block is a new variable that shadows the outer one for that block. After the closing brace the outer one is visible again.
// @why B: redeclaring a name in a nested block is legal. It is an error only within the same block.
// @why C: the inner x is a separate variable that disappears at the closing brace.
// @why D: the inner declaration is a real declaration, so the first print sees 2.

// @quiz (INTERVIEW, MEDIUM) Does this code compile?
// @code final int limit = 5;
// @code limit = 6;
// @option No. A final variable can be assigned once only, so the second assignment is an error. [correct]
// @option Yes, and limit becomes 6.
// @option Yes, because final only stops a variable being read.
// @option No. limit must be initialised on a separate line.
// @explain final means the variable is assigned exactly once. Once the declaration has given it a value, any further assignment is an error.
// @why B: the compiler rejects the second assignment, so the value never changes.
// @why C: final restricts writing, not reading. A final variable can be read normally.
// @why D: initialising it in the declaration is fine. That first assignment is the one that counts.

// @quiz (OCJP, MEDIUM) Which of these variable declarations does NOT compile?
// @option int 2count = 5; [correct]
// @option int count2 = 5;
// @option int _count = 5;
// @option int $count = 5;
// @explain An identifier must begin with a letter, an underscore, or a dollar sign. It may not begin with a digit.
// @why B: a digit is allowed anywhere except the first character, so count2 is legal.
// @why C: an underscore may begin an identifier, although it is poor style.
// @why D: a dollar sign may begin an identifier, though it is unusual in ordinary code.

// @quiz (OCJP, HARD) Does this code compile?
// @code System.out.println(total);
// @code int total = 10;
// @option No. A local variable cannot be used before its declaration. [correct]
// @option Yes, and it prints 10.
// @option Yes, and it prints 0, because total is not yet initialised.
// @option No, because println cannot take an int.
// @explain A local variable is in scope from its declaration onwards. The println comes first, so at that point total is unknown.
// @why B: the declaration has not been seen yet, so there is no variable to read.
// @why C: locals are never given a default, and the code does not compile at all.
// @why D: println has an overload for int. The problem is the ordering, not the type.

// @quiz (OCJP, HARD) What is printed by this code?
// @code boolean flag = false;
// @code int x;
// @code if (flag) { x = 1; } else { x = 2; }
// @code System.out.println(x);
// @option 2. It compiles because x is assigned on both paths before it is read. [correct]
// @option It does not compile, because x is read without a value.
// @option 1, because the if branch runs first.
// @option 0, because x is a local variable and starts at zero.
// @explain Java checks definite assignment at compile time. Assigning on both paths makes the later read legal, and flag is false so the else branch gives 2.
// @why B: assigning on both branches is exactly what the rule requires.
// @why C: the condition is false, so the else branch is the one that runs.
// @why D: local variables are never defaulted. x gets 2 from the else branch, not 0.

public class Variables {

    public static void main(String[] args) {

        // Declaration statement: declares data type (int), identifier (myFirstNumber), and initial value (5).
        int myFirstNumber = 5;

        System.out.println(myFirstNumber);
    }
}
