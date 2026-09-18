package Chapter_2_PrimitiveTypes.Sub_Chapter_2_KeyWords_And_Expressions;
// Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.
// Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.
// Reference: https://en.wikipedia.org/wiki/List_of_Java_keywords
// An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.
// The data type declaration (e.g., 'int') is NOT part of the expression. In 'int x = 5 + 3', the expression is 'x = 5 + 3'.
// Control flow keywords like 'if', 'for', 'while' and their surrounding parentheses are NOT part of the expression — only the content inside the parentheses forms the expression.
// For example: if(highScore == 50) — the keyword 'if' and the brackets are not part of the expression. The expression is 'highScore == 50'.
// Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value.
// @quiz (INTERVIEW TRAP) Why is if(highScore = 50) not the right parameter for checking equality?
// @answer = is assignment, not comparison. Use == when the condition should test whether highScore already equals 50.
//
// @quiz (OCJP, MEDIUM) Which of these identifiers is a reserved keyword and cannot be used as a name?
// @option static [correct]
// @option main
// @option String
// @option args
// @explain A keyword has a fixed meaning in the language, so it can never be used for a class, method, or variable name.
// @why B: main is an ordinary method name that the JVM looks for. It is not a keyword.
// @why C: String is a class in java.lang, not a keyword, so a variable may be called String.
// @why D: args is just a parameter name, required by convention rather than by any rule.

// @quiz (OCJP, MEDIUM) In the statement below, which part is NOT part of an expression?
// @code int x = 5 + 3;
// @option int, because the data type is not part of any expression. [correct]
// @option =, because the assignment operator is a statement of its own.
// @option 5 + 3, because a value on its own is never an expression.
// @option x, because a variable name only becomes an expression when it is printed.
// @explain An expression is built from variables, literals, and operators. The type int says what kind of value is being declared.
// @why B: = is an operator, so x = 5 + 3 is an assignment expression.
// @why C: 5 + 3 is an expression, and it works out to 8.
// @why D: x is a variable, which is the simplest kind of expression there is.

// @quiz (OCJP, HARD) Which line does NOT compile?
// @option int class = 5; [correct]
// @option int Class = 5;
// @option int classes = 5;
// @option int classRoom = 5;
// @explain Java is case-sensitive, so class is the keyword while Class is just an ordinary identifier. A keyword may never name a variable.
// @why B: capitalising the name makes it an ordinary identifier. Class is not the keyword class.
// @why C: classes merely starts with the letters of the keyword. It is a legal name.
// @why D: classRoom is a single identifier and is perfectly legal.

// @quiz (OCJP, MEDIUM) Which of these is an expression?
// @option highScore == 50 [correct]
// @option int highScore = 0;
// @option if (highScore == 50) { }
// @option public static void main(String[] args)
// @explain An expression works out to a value. The comparison highScore == 50 produces a boolean, so it is an expression.
// @why B: this is the whole declaration statement. It contains an expression but is not one.
// @why C: this is a control statement. The keyword if and its brackets are not part of the expression.
// @why D: this is a method header, not an expression.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int Total = 10;
// @code int total = 20;
// @code System.out.println(Total + total);
// @option 30, because Java identifiers are case-sensitive, so Total and total are two variables. [correct]
// @option 40, because the two declarations are added together.
// @option It does not compile, because a variable named Total already exists.
// @option It does not compile, because Java keywords must be lowercase.
// @explain Java tells upper and lower case apart in every identifier, so Total and total are two separate int variables. Adding them gives 30.
// @why B: 40 would need the values 20 and 20, but Total holds 10.
// @why C: the names differ by case, so there is no duplicate declaration.
// @why D: int is already lowercase here. The point is that case matters in names, not that keywords vary.

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
