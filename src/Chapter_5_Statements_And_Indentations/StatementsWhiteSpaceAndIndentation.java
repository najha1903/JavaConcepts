package Chapter_5_Statements_And_Indentations;

public class StatementsWhiteSpaceAndIndentation {

// Java Statements can be assignment expressions. Java statements don't have to be necessarily in one line. You can have multiple statements in one line

// Whitespace is the space between expressions, operators and so forth. Whether we have 1 space or multiple space, java compiles the syntax.

// Concept of indenting is make it easy for us to understand logical flow of the code.

// In Intellij Ide, navigate to code, and click on Reformat Code.

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
