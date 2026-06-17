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
