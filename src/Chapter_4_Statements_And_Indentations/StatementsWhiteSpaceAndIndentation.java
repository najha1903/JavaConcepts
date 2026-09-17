package Chapter_4_Statements_And_Indentations;
// A Java statement is a complete unit of execution. Most statements end with a semicolon (;).
// Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println("hi");), and more.
// A single statement CAN span multiple lines — Java doesn't care about line breaks, only about the semicolon that ends the statement.
// Example: String s = "Hello" + " World" + "!"; — this is one statement split across multiple lines. It's still valid.
// Multiple statements CAN be placed on a single line, though it reduces readability.
// Whitespace (spaces, tabs, blank lines) between tokens is completely ignored by the Java compiler. It is for human readability only.
// Indentation is not required by Java — code will compile and run with any (or no) indentation. BUT proper indentation is essential for readability and shows the logical nesting of code blocks.
// In IntelliJ IDEA: Code -> Reformat Code (Ctrl+Alt+L) will auto-indent and format your code.
// Best practice: one statement per line, consistent indentation (usually 4 spaces or 1 tab per level).

// @quiz (INTERVIEW) What is the difference between a statement and an expression in Java?
// @answer An expression produces a value, such as 2 + 3 or x > 5.
// @answer A statement is a complete instruction, such as int x = 5; or System.out.println(x);.

// @quiz (INTERVIEW) Do whitespace and indentation affect Java compilation?
// @answer No. Java mostly ignores extra spaces, tabs, and line breaks between tokens.
// @answer They matter for readability, but not for the meaning of correctly separated code.

// @quiz (INTERVIEW) Can one statement span multiple lines or multiple statements share one line?
// @answer Yes. A statement can span lines, and multiple statements can appear on one line if each is properly terminated.
// @answer The semicolon ends most statements, not the line break.

// @quiz (OCJP) Is int x = 5; a statement or an expression?
// @answer It is a declaration statement.
// @answer The whole line is not just an expression, even though it contains the assignment expression x = 5.
// Parameter notes (important method parameters and how to choose them):
// - pieces in String concatenation: each quoted literal around + is an operand used to build the final println
//     parameter. Choose pieces for readability, but remember the runtime receives one combined String.
// @quiz (INTERVIEW TRAP) Does indentation change the parameter passed to println?
// @answer No. Indentation and most whitespace are ignored by the compiler; the expression before the semicolon determines the parameter value.
//
// @quiz (OCJP) What tells Java where the println statement with its parameter ends?
// @answer The semicolon ends the statement. A method call and its parameter can be split across multiple lines before that semicolon.
// @quiz (INTERVIEW, EASY) What is the difference between a statement and an expression?
// @option An expression produces a value, such as 2 + 3, while a statement is a complete instruction, such as int x = 5; [correct]
// @option A statement produces a value, while an expression is a complete instruction.
// @option They are two names for the same thing.
// @option An expression is always a whole line, and a statement is always a fragment.
// @explain An expression evaluates to something. A statement is the complete unit of execution that the compiler acts on, and most statements end in a semicolon.
// @why B: this is reversed. 2 + 3 yields a value, so it is an expression.
// @why C: int x = 5; contains the expression x = 5, but the whole declaration is a statement, so the two are not the same.
// @why D: expressions can be fragments such as 2 + 3, and statements are the ones usually written as a line.

// @quiz (INTERVIEW, MEDIUM) Do whitespace and indentation affect whether Java code compiles?
// @option No. The compiler ignores extra spaces, tabs and line breaks between tokens, though they matter for readability. [correct]
// @option Yes. Incorrect indentation is a compile-time error.
// @option Yes, but only inside an if statement.
// @option Only tabs cause an error, not spaces.
// @explain Whitespace between tokens is discarded by the compiler. Indentation exists for humans, and it shows the nesting of code blocks.
// @why B: Java has no rule requiring indentation. Unindented code still compiles.
// @why C: an if statement is not special in this respect.
// @why D: neither tabs nor spaces change compilation. Mixing them only affects how the code looks.

// @quiz (INTERVIEW, MEDIUM) Can a single statement be spread over several lines?
// @option Yes. What ends most statements is the semicolon, not the line break. [correct]
// @option No. Every statement must be written on exactly one line.
// @option Only if the statement is a method call.
// @option Yes, but only for comments.
// @explain Java does not treat a newline as a terminator. A concatenation or method call may be split over many lines and still be one statement, as long as it ends with a semicolon.
// @why B: line breaks are whitespace and carry no meaning between tokens.
// @why C: any statement may be wrapped, including declarations and assignments.
// @why D: comments have their own rules, and this applies to ordinary statements.

// @quiz (OCJP, MEDIUM) What decides where a println statement and its parameter end?
// @option The semicolon ends the statement. A method call and its arguments may be split across several lines before it. [correct]
// @option The newline character in the source file ends the statement.
// @option The closing parenthesis ends the statement.
// @option The indentation of the next line ends the statement.
// @explain A method call is one statement that runs until the semicolon. Line breaks inside the parentheses are ignored, so a long concatenation can be formatted over several lines.
// @why B: source line breaks are whitespace, so they end nothing.
// @why C: the parenthesis closes the argument list, but the statement is not complete until the semicolon.
// @why D: indentation is for readability only.

// @quiz (INTERVIEW, EASY) Which of these is NOT one of the common statement types in Java?
// @option A comparison that evaluates to true or false but is never used, such as (x > 5) on its own line. [correct]
// @option A declaration statement, such as int x = 5;
// @option An assignment statement, such as x = 10;
// @option A method call statement, such as System.out.println("hi");
// @explain A bare comparison is an expression, not a complete statement, so the compiler rejects it. The other three are the everyday statement forms.
// @why B: int x = 5; is a declaration statement.
// @why C: x = 10; is an assignment statement.
// @why D: a method call followed by a semicolon is a statement.

// @quiz (OCJP, MEDIUM) Does this code compile?
// @code public static void main(String[] args) {
// @code     int x = 5
// @code     System.out.println(x);
// @code }
// @option No. The missing semicolon after int x = 5 is a compile error. [correct]
// @option Yes, because Java adds the semicolon for you.
// @option Yes, because a line break ends the statement.
// @option Yes, and it prints 5.
// @explain A semicolon, not a line break, ends most statements. Without it the compiler cannot tell where the declaration stops, so it reports an error at that line.
// @why B: Java never inserts missing punctuation.
// @why C: this is the common misconception. The statement ends at the semicolon, and the line break is only whitespace.
// @why D: nothing runs, because the file never compiles.

// @quiz (INTERVIEW, MEDIUM) What is the effect of the semicolon in this line?
// @code int x = 5;;
// @option It compiles. The second semicolon is an empty statement that does nothing. [correct]
// @option It is a compile error, because only one semicolon is allowed.
// @option It sets x to 0.
// @option It creates a second variable named x.
// @explain A lone semicolon is a complete, empty statement. Java allows it, which is why a stray semicolon after an if condition is legal and silently changes the meaning of the code.
// @why B: an empty statement is valid Java, which is exactly what makes the mistake so easy to miss.
// @why C: an empty statement performs no assignment.
// @why D: declaring x twice with the same type in one scope would be an error, but that is not what this line does.

// @quiz (INTERVIEW, EASY) Which of these is a single valid statement?
// @option int x = 5; [correct]
// @option x > 5
// @option 5 + 3
// @option "hello"
// @explain A statement is a complete instruction. A declaration with a semicolon qualifies. The others are expressions, which produce a value, and on their own they are not complete instructions.
// @why B: x > 5 is an expression that produces a boolean. Alone, it is not a statement.
// @why C: 5 + 3 is an expression that produces 8. It has no effect on its own.
// @why D: a String literal is an expression. Without a semicolon or a use for the value, it is not a statement.

// @quiz (OCJP, MEDIUM) Where can the variable declared here be used?
// @code if (true) {
// @code     int inner = 10;
// @code }
// @code System.out.println(inner);
// @option It does not compile, because inner is scoped to the block and is gone after the closing brace. [correct]
// @option It compiles and prints 10.
// @option It compiles and prints 0, because inner loses its value.
// @option It compiles only if inner is declared final.
// @explain A variable declared inside a block exists only inside that block. Once the closing brace is reached, inner no longer exists, so the println cannot refer to it.
// @why B: the name is out of scope at that point.
// @why C: the variable is not reset, it is simply no longer visible.
// @why D: final changes whether the value can be reassigned, not how long the variable lives.

public class StatementsWhiteSpaceAndIndentation {

    public static void main(String[] args) {

        int myVariable = 50; // Statement represents the entire line. Adding datatype at the start of the expression and then finishing of with a semicolon we have made a valid Java Statement.
        myVariable++; // This also represents complete statement
        System.out.println(myVariable); // Shows the incremented value: 51
        System.out.println("This is a test"); // This also represents complete statement.

        System.out.println("This is" +
                " another" +
                " still more."); // This is a valid statement, spread across multiple lines

        int var = 5;
        var--;
        System.out.println(var); // Shows the decremented value: 4
        System.out.println("Writing in same line");

        int anotherVar
                =
                50; // Its a completely valid code, java compiles the code, deletes the spaces internally.
        System.out.println(anotherVar); // Shows anotherVar was assigned correctly despite the odd formatting: 50

    }
}
