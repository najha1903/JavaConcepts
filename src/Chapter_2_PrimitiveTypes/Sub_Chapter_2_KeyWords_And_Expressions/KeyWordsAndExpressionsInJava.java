package Chapter_2_PrimitiveTypes.Sub_Chapter_2_KeyWords_And_Expressions;
// Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.
// Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.
// Reference: https://en.wikipedia.org/wiki/List_of_Java_keywords
// An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.
// The data type declaration (e.g., 'int') is NOT part of the expression. In 'int x = 5 + 3', the expression is 'x = 5 + 3'.
// Control flow keywords like 'if', 'for', 'while' and their surrounding parentheses are NOT part of the expression — only the content inside the parentheses forms the expression.
// For example: if(highScore == 50) — the keyword 'if' and the brackets are not part of the expression. The expression is 'highScore == 50'.
// Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value.
public class KeyWordsAndExpressionsInJava {

    // Link For Java Keywords :- https://en.wikipedia.org/wiki/List_of_Java_keywords

    // Expression consists of variables, values and operators.

    public static void main(String[] args) {

        double kilometers = (100 * 1.609344); // The data type doesn't form the part of expression, but everything else on the line forms the part of expression.  kilometers = (100 * 1.609344); forms the part of expression.

        int highScore = 0; // highScore = 0; is part of the expression.

        if(highScore == 50){ // Keyword if, and brackets do not form the part of expression, whatever component is inside the brackets, they are part of expression. highScore == 50 forms the part of expression.
            System.out.println("You got the high score!"); // You got the highscore! is a part of expression.

            
        }

    }
}
