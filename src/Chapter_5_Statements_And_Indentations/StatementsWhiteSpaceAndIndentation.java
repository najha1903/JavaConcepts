package Chapter_5_Statements_And_Indentations;
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
public class StatementsWhiteSpaceAndIndentation {

    public static void main(String[] args) {

        int myVariable = 50; // Statement represents the entire line. Adding datatype at the start of the expression and then finishing of with a semicolon we have made a valid Java Statement.
        myVariable++; // This also represents complete statement
        System.out.println("This is a test"); // This also represents complete statement.

        System.out.println("This is" +
                " another" +
                " still more."); // This is a valid statement, spread across multiple lines

        int var = 5;
        var--;
        System.out.println("Writing in same line");

        int anotherVar
                =
                50; // Its a completely valid code, java compiles the code, deletes the spaces internally.


    }
}
