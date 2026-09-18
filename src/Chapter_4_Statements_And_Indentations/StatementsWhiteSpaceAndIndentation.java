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

// What a statement is :-
// - A statement is a complete unit of execution, and most statements end with a semicolon.
// - The statement types you will write most often are a declaration (`int x = 5;`), an assignment (`x = 10;`), and a method call (`System.out.println(x);`).
// - An expression produces a value, such as `2 + 3` or `x > 5`. A statement is the complete instruction. `int x = 5;` contains the expression `x = 5`, but the whole line is a declaration statement.
// - A bare expression on its own line is not a statement, so `x > 5` by itself does not compile unless it is used somewhere.
//
// Rules that surprise people :-
// - A statement is ended by the semicolon, not by the line break.
// - Several statements may share one line, and one statement may be spread over several lines. Both compile.
// - These do NOT end with a semicolon: a class declaration, a method declaration, the header of an `if`, `for` or `while`, and a block `{ ... }`.
//
// Worked examples :-
// 1) One statement over several lines :-
// String message = "Hello"
//     + " World"
//     + "!";
// System.out.println(message);      // prints Hello World!
// Note :- the semicolon is what ends the declaration, so the line breaks inside it are only whitespace.
//
// 2) Several statements on one line :-
// int a = 1; int b = 2; System.out.println(a + b);   // prints 3
// Note :- this compiles, but one statement per line is far easier to read and to debug.
//
// 3) Whitespace and indentation are ignored :-
// int c=5     ;
// int     d =    10;
// System.out.println(c + d);        // prints 15
// Note :- the compiler discards the extra spaces. Indentation exists to show the nesting to a human reader.
//
// 4) A variable declared in a block lives only in that block :-
// if (true) {
//     int inner = 10;
//     System.out.println(inner);    // prints 10, inner is in scope here
// }
// System.out.println(inner);        // Compile Error :- cannot resolve symbol 'inner'
// Note :- the closing brace ends the block, and `inner` stops existing with it. That is why the same name can be declared again in a later block.
//
// Pitfall :- a lone semicolon is a legal empty statement. That is why `if (x > 5);` compiles: the semicolon becomes the body of the if, and the block written after it runs no matter what the condition was.
//
// @takeaway A statement is one complete instruction. Most of them end with a semicolon, and it is the semicolon that ends them rather than the line break, which is why `int x = 5` on its own line does not compile even though it looks finished.
// @takeaway An expression works out to a value, such as `2 + 3` or `x > 5`, and a statement is the complete instruction built around it. `int x = 5;` contains the expression `x = 5`, but the line as a whole is a declaration statement.
// @takeaway Spaces, tabs and line breaks mean nothing to the compiler. `int     c     =      5;` compiles exactly like `int c = 5;`. Indentation is there so that you and I can see which lines sit inside which block.
// @takeaway One statement can be spread across several lines, and several statements can share one line. Both compile. Write one statement per line anyway, because that is what makes a mistake easy to spot.
// @takeaway A line holding nothing but a semicolon is a legal empty statement, and that is what makes `if (x > 5);` so dangerous: the semicolon becomes the body of the if, and the block you wrote underneath ends up belonging to nothing.
// @gotcha A semicolon straight after `if (condition)` ends the if before its block, so the block runs no matter what the condition said. The code still compiles, which is what makes it easy to miss.
// @gotcha A variable declared inside a block disappears at the closing brace. Using it afterwards gives "cannot resolve symbol", because the name no longer exists.
// @gotcha Braces are not punctuation you can sprinkle anywhere. A class body, a method body, and the headers of `if` and `for` all end in `{` or `}`, and none of them takes a semicolon.

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

// @quiz (OCJP, HARD) What is printed by this code?
// @code int x = 5;
// @code if (x > 10);
// @code {
// @code     System.out.println("Hi");
// @code }
// @option Hi, once, because the semicolon is the empty body of the if and the block always runs. [correct]
// @option Nothing, because x > 10 is false.
// @option Hi twice, once for each branch.
// @option It does not compile, because the if has no body.
// @explain `if (x > 10);` ends the if at the semicolon, which is a legal empty statement. The braces that follow are then just a plain block.
// @why B: the block is not part of the if, so the false condition does not stop it.
// @why C: the block holds one statement, and there is no else branch.
// @why D: an empty statement is a valid body, which is why this compiles at all.

// @quiz (OCJP, HARD) What is printed by this code?
// @code if (false)
// @code     System.out.println("one");
// @code     System.out.println("two");
// @option two, because only the first statement belongs to the if. [correct]
// @option one and then two.
// @option Nothing, because the condition is false.
// @option It does not compile, because the indented lines are misaligned.
// @explain Braces decide the body of an if, not indentation. Without braces only the next statement is controlled, so the second println always runs.
// @why B: the first println is inside the if and the condition is false, so it never runs.
// @why C: the second println is outside the if, so it does run.
// @why D: indentation is ignored by the compiler, so the layout causes no error.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int a = 1; int b = 2; System.out.println(a + b);
// @option 3, because several statements may share one line. [correct]
// @option It does not compile, because only one statement is allowed per line.
// @option 12, because the digits are joined together.
// @option Nothing, because the middle statement is skipped.
// @explain The semicolon, not the line break, ends a statement, so three statements on one line behave exactly as if they were on three lines.
// @why B: Java has no one-statement-per-line rule. That is only a style convention.
// @why C: a and b are int variables, so + adds them instead of joining text.
// @why D: every statement on the line runs, in the order written.

// @quiz (OCJP, MEDIUM) Does this code compile, and what is printed?
// @code int outer = 1;
// @code {
// @code     int inner = 2;
// @code     System.out.println(outer + inner);
// @code }
// @option It compiles and prints 3, because an inner block can still see outer variables. [correct]
// @option It does not compile, because outer is not declared inside the block.
// @option It compiles and prints 2, because outer is out of scope in the block.
// @option It does not compile, because a block cannot contain a println.
// @explain Scope runs outwards. A variable declared in an enclosing block stays visible inside a nested block, so both names are usable there.
// @why B: the rule stops an inner name being used outside its block, not the other way round.
// @why C: outer is declared before the block and is still visible inside it.
// @why D: a println is an ordinary statement and may appear in any block.

// @quiz (OCJP, MEDIUM) Does this code compile?
// @code System.out.println(
// @code     "Hello"
// @code );
// @option Yes. The statement ends at the semicolon, so the line breaks inside are only whitespace. [correct]
// @option No. Each statement must fit on one line.
// @option No. A method call must close its parentheses on the same line.
// @option Yes, but only if the arguments are split with a comma.
// @explain A statement runs until its semicolon. The compiler ignores line breaks between tokens, so a call may be spread over several lines.
// @why B: line breaks between tokens carry no meaning, so a statement may span lines.
// @why C: the closing parenthesis may sit on its own line, as long as the semicolon follows.
// @why D: one argument needs no comma. Splitting the lines is allowed either way.

// @quiz (OCJP, MEDIUM) Which of these is NOT terminated by a semicolon?
// @option The block that follows an if, such as { x = 1; } [correct]
// @option A variable declaration, such as int x = 5;
// @option An assignment, such as x = 10;
// @option A method call, such as System.out.println(x);
// @explain A block is a group of statements inside braces and takes no semicolon of its own, just like a class body or a method body.
// @why B: a declaration statement ends with a semicolon.
// @why C: an assignment statement ends with a semicolon.
// @why D: a method call statement ends with a semicolon.

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
