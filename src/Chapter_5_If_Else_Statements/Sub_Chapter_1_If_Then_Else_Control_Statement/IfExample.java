package Chapter_5_If_Else_Statements.Sub_Chapter_1_If_Then_Else_Control_Statement;
// Conditional logic (also called control flow) lets your program make decisions: execute different code depending on whether a condition is true or false.
// The if statement evaluates a boolean expression. If the expression is true, the code block runs. If false, it is skipped.
// IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.
// Always use curly braces { } with if — even for single-line bodies. It prevents bugs when you add more code later.
// Comparison operators for conditions: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater or equal), <= (less or equal).
// Logical AND (&&): both conditions must be true. Example: (score >= 50) && (score < 100)
// Logical OR (||): at least one condition must be true. Example: (score < 10) || (score > 90)
// The NOT operator (!): inverts a boolean. !true = false. !false = true. Example: if(!isAlien) means "if isAlien is false".
// The assignment operator (=) assigns a value. The equality operator (==) compares values. Never use = inside a condition — use == instead.
// Ternary Operator: a compact if-else in a single expression. Syntax: condition ? valueIfTrue : valueIfFalse
// Example from code below: boolean wasCar = isCar ? true : false; — if isCar is true, wasCar = true; else wasCar = false.
// Reference for expressions: https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html
// Note :- Boolean objects can be unboxed in conditions, but a null Boolean throws NullPointerException.
// A boolean assignment such as if (flag = true) compiles and assigns true; it is usually a mistaken comparison.

// Conditions in practice :-
// 1) The condition must be a boolean :-
// int x = 5;
// if (x != 0) { System.out.println("not zero"); }   // prints not zero
// Note :- Java is strict here, so `if (1)` and `if (x)` do not compile. C and C++ allow a number to stand in for a boolean, Java does not.
// Note :- an object reference cannot be used directly either. Write `if (obj != null)`, not `if (obj)`.
//
// 2) Only the first true branch of a chain runs :-
// int score = 75;
// if (score >= 90)      { System.out.println("A"); }
// else if (score >= 70) { System.out.println("B"); }   // prints B
// else if (score >= 50) { System.out.println("C"); }
// Note :- 75 is also at least 50, but the chain stops at the first match, so C is never reached. Put the narrowest condition first.
//
// 3) Without braces, an if controls exactly one statement :-
// if (true) System.out.println("A");
// System.out.println("B");        // prints A then B, because B is outside the if
// Note :- this is why braces are recommended even for a single statement. Adding a line later silently moves it outside the condition.
//
// 4) The dangling else :-
// if (a) if (b) x = 1; else x = 2;   // the else belongs to the inner if
// Note :- Java binds an else to the nearest unmatched if, which is not always the one a reader expects. Braces remove the doubt.
//
// 5) Short-circuiting makes a null guard safe :-
// String name = null;
// if (name != null && name.length() > 5) { System.out.println("long"); }
// Note :- when name is null the left side is false, so `name.length()` is never called. The single-ampersand `&` would evaluate both sides and throw.
//
// 6) `==` on Strings compares references, not text :-
// String a = "hello";
// String b = new String("hello");
// if (a == b) { System.out.println("equal"); } else { System.out.println("not equal"); }   // prints not equal
// Note :- both hold the same characters, but `new String` makes a different object. Use `a.equals(b)` for content.
//
// Pitfall :- a semicolon straight after the condition ends the if and gives it an empty body, so the block written after it runs whatever the condition was.
// Pitfall :- `=` assigns and `==` compares, so `if (x = 5)` does not compile rather than testing anything.

// @takeaway `if` asks a true-or-false question and runs its block only when the answer is true.
// @takeaway The condition must be a real boolean, so `if (1)` does not compile the way it does in C.
// @snippet if (1) { }        // compile error
// @takeaway In an `else if` chain only the first condition that turns out true runs, and the rest are never looked at.
// @takeaway Without braces, an `if` controls only the one statement that follows it.
// @snippet boolean flag = true;
// @snippet if (flag) System.out.println("A");
// @snippet System.out.println("B");          // always runs
// @takeaway `condition ? a : b` is an if-else that produces a value, so it fits where a statement cannot.
// @snippet boolean isMember = true;
// @snippet int paid = isMember ? 10 : 20;
// @gotcha A semicolon straight after the condition gives the `if` an empty body, so the block underneath always runs.
// @gotcha `if (x = 5)` does not compile: `=` assigns and yields an int, and an `if` needs a boolean.
// @gotcha `==` on two Strings asks whether they are the same object, not the same text; use `.equals()`.
// @gotcha `&&` stops as soon as the answer is settled, which is what makes `name != null && name.length() > 5` safe.
/*
    Ternary Operator Example :-

    int ageOfClient = 20;

    boolean isEighteenOrOver = (ageOfClient >= 18) ? true : false;

    Operand one - ageOfClient >= 18 checks whether the age is at least 18, producing true or false.

    Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.

    Operand three - false. is the value to be assigned to the variable isEighteenOrOver if the condition above is false.

 */

// @quiz (INTERVIEW) What is the dangling else problem in Java?
// @answer A dangling else happens when nested if statements omit braces and it is unclear which if the else belongs to.
// @answer In Java, else always matches the nearest unmatched if.

// @quiz (INTERVIEW) Can an if condition use non-boolean types in Java?
// @answer No. Java requires the condition to be a boolean expression.
// @answer Unlike C, Java does not allow numbers or object references directly as if conditions.

// @quiz (INTERVIEW) When should you use the ternary operator instead of if-else?
// @answer Use the ternary operator for short value-producing decisions, such as assigning one of two values.
// @answer Use if-else when the logic is longer or you need multiple statements.

// @quiz (INTERVIEW) Why are braces recommended even for a single if statement?
// @answer Braces make the controlled block explicit and prevent bugs when more lines are added later.
// @answer They also make nested conditions easier to read.

// @quiz (OCJP) What happens here: int x = 5; if (x = 5) { System.out.println("Hi"); }?
// @answer It does not compile because x = 5 is an int assignment expression, not a boolean condition.
// @answer Java if conditions must evaluate to true or false.

// @quiz (OCJP) How many statements does if control here: if (true) System.out.println("A"); System.out.println("B");?
// @answer Only the first statement after if is controlled by the condition.
// @answer The second println is outside the if unless braces are used.
// @quiz (INTERVIEW) In main(String[] args), what does the args parameter contain?
// @answer It contains command-line arguments as a zero-based String array, in the same order the user supplied them when starting the program.
//
// @quiz (INTERVIEW TRAP) What parameter value does System.out.println(null) print?
// @answer It does not compile: println(String) and println(char[]) are both applicable, so the call is ambiguous. println((String) null) prints "null".
//
// @quiz (OCJP) In condition ? a : b, what do the second and third operands mean?
// @answer The second operand is the value used when the condition is true, and the third operand is the value used when the condition is false.
// @quiz (OCJP, HARD) What does this code print?
// @code int x = 5;
// @code if (x > 3) ; { System.out.println("Hello"); }
// @option Hello, and it is printed even if the condition were false. [correct]
// @option Nothing at all.
// @option It does not compile.
// @option Hello, but only when x > 3 is true.
// @explain The semicolon straight after the condition ends the if statement, creating an empty body. The braced block that follows is then a separate statement that always runs. This is why a semicolon must never be placed after if (condition).
// @why B: the block is no longer controlled by the if, so it does run.
// @why C: it is legal Java, which is exactly what makes the mistake so easy to miss.
// @why D: the block is outside the if, so the condition no longer affects it.

// @quiz (INTERVIEW, EASY) Why is it recommended to always use braces with if, even for a single statement?
// @option Braces make the controlled block explicit and prevent bugs when more lines are added later. [correct]
// @option Braces make the code run faster.
// @option Java requires braces, otherwise the code will not compile.
// @option Braces are needed only when the condition is complex.
// @explain Without braces, only the single next statement belongs to the if. A later edit that adds a line is easy to get wrong, and the second line silently falls outside the condition.
// @why B: braces have no effect on execution speed.
// @why C: braces are optional for a single statement, which is the reason the guidance exists.
// @why D: the risk applies to simple conditions too.

// @quiz (INTERVIEW, MEDIUM) In the ternary expression condition ? a : b, what are the three parts?
// @option A boolean condition, the value used when it is true, and the value used when it is false. [correct]
// @option An assignment, a variable, and a literal.
// @option Two conditions and one value.
// @option A method call, its argument, and its return value.
// @explain The ternary operator is a compact if-else that produces a value. The condition must be boolean, and the two result expressions should be of compatible types.
// @why B: there is no assignment in the operator itself.
// @why C: only the first part is a condition; the other two are the results.
// @why D: it is an operator, not a method call.

// @quiz (OCJP, HARD) With braces omitted, which if does an else belong to?
// @code if (a) if (b) x = 1; else x = 2;
// @option The inner if, because else always binds to the nearest unmatched if. [correct]
// @option The outer if, because else always belongs to the first if.
// @option It does not compile without braces.
// @option It is ambiguous and the compiler picks at random.
// @explain This is the dangling else problem. Java resolves it by binding else to the closest if that does not already have one, which is the inner if here. Braces remove the doubt.
// @why B: binding to the outer if would change the meaning, and Java does not do that.
// @why C: it compiles, and it compiles in a way that often surprises people.
// @why D: the rule is fixed and deterministic, not random.

// @quiz (OCJP, MEDIUM) Can a Java if condition use a number or an object reference directly?
// @option No. The condition must be a boolean expression, unlike C where a number can be tested. [correct]
// @option Yes, where 0 means false and any other number means true.
// @option Yes, where null means false.
// @option Yes, but only for int values.
// @explain Java is strict here. Something like if (1) is a compile-time error, and it must be written as a real comparison such as if (x != 0).
// @why B: that rule belongs to C and C++, not to Java.
// @why C: an object reference cannot be used directly either. Write if (obj != null) instead.
// @why D: no numeric type is accepted, not even int.

// @quiz (OCJP, MEDIUM) How many statements does the if control here?
// @code if (true) System.out.println("A");
// @code System.out.println("B");
// @option Only the first, so B is printed whatever the condition is. [correct]
// @option Both, because the condition is true.
// @option Neither, because there are no braces.
// @option It does not compile without braces.
// @explain Without braces, an if controls exactly one statement, the one immediately after it. Everything after that is outside the condition.
// @why B: braces would be needed to control both lines.
// @why C: an if with no braces still controls the single following statement.
// @why D: braces are optional for one statement.

// @quiz (INTERVIEW, MEDIUM) What is the difference between && and || in a condition?
// @option && requires both sides to be true, while || requires at least one side to be true. [correct]
// @option && requires at least one side to be true, while || requires both.
// @option Both mean the same thing.
// @option && works only with numbers, and || only with Strings.
// @explain They are the logical AND and OR operators. Both also short-circuit, so the right side is skipped once the answer is already known.
// @why B: the two are swapped.
// @why C: they differ, and swapping them changes when a block runs.
// @why D: both operators work on boolean expressions.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int score = 75;
// @code if (score >= 90) { System.out.println("A"); }
// @code else if (score >= 70) { System.out.println("B"); }
// @code else if (score >= 50) { System.out.println("C"); }
// @option B, because the first matching condition wins and the rest are skipped. [correct]
// @option C, because score is also at least 50.
// @option B and C, because both conditions are true.
// @option A, because 75 is more than 50.
// @explain An else-if chain is checked from the top and stops at the first true condition. 75 fails the >= 90 test and passes >= 70, so B is printed and the remaining branches are never reached.
// @why B: the C branch is never tested, because the chain already stopped.
// @why C: only one branch of an if/else-if chain runs.
// @why D: 75 is less than 90, so the first condition is false.

// @quiz (OCJP, HARD) Why is this condition safe, even when name is null?
// @code if (name != null && name.length() > 5) { ... }
// @option && short-circuits, so the right side is skipped when name is null. [correct]
// @option && always evaluates both sides, so it would throw a NullPointerException.
// @option The condition is not safe, and it always throws.
// @option Java converts null to an empty String before the check.
// @explain Short-circuit evaluation stops as soon as the answer is known. When name is null the left side is false, so the length() call is never made and the exception cannot happen.
// @why B: only the non-short-circuiting & evaluates both sides. That version would throw.
// @why C: the guard exists precisely to prevent the exception.
// @why D: null is not converted. Calling a method on it is what throws.

// @quiz (OCJP, HARD) What is printed by this code?
// @code String a = "hello";
// @code String b = new String("hello");
// @code if (a == b) { System.out.println("equal"); }
// @code else { System.out.println("not equal"); }
// @option not equal, because == compares references and these are two different objects. [correct]
// @option equal, because both strings contain the same characters.
// @option equal, because == compares String content in Java.
// @option It does not compile, because Strings cannot be compared with ==.
// @explain The == operator on object references asks whether both point to the same object. new String always creates a fresh object, so the references differ even though the characters match. Use equals for content.
// @why B: content is what equals compares, not ==.
// @why C: == compares references. equals is the method that compares content.
// @why D: it compiles for any reference type, which is why the bug is so easy to make.

// @quiz (INTERVIEW, MEDIUM) What does this code print?
// @code int x = 10;
// @code if (x > 5); { System.out.println("big"); }
// @option big, and it would print even if x were 1. [correct]
// @option big, but only when x > 5 is true.
// @option nothing at all.
// @option It does not compile, because of the semicolon.
// @explain The semicolon right after the condition ends the if statement, giving it an empty body. The braced block is then a separate statement that always runs, so the condition no longer controls it.
// @why B: the block is outside the if, so the condition cannot affect it.
// @why C: the block is unconditional, so it always prints.
// @why D: it is legal Java, and that is what makes the mistake dangerous.

// @quiz (INTERVIEW, MEDIUM) What is the value of result?
// @code int result = (10 > 5) ? 1 : 2 + 3;
// @option 1, because the condition is true and only that branch is used. [correct]
// @option 6, because the false branch is added.
// @option 4, because the ternary is evaluated after the addition.
// @option It does not compile, because the branches are different expressions.
// @explain The ternary evaluates only the branch it needs. 10 > 5 is true, so the value is the first branch, 1. The expression 2 + 3 on the other side is never evaluated.
// @why B: the false branch is not used, and 2 + 3 is not added to the result.
// @why C: the branches of a ternary are alternatives, never combined.
// @why D: both branches are int here, so the types are compatible.


// @quiz (OCJP, MEDIUM) Does this code compile?
// @code int x = 5;
// @code if (x = 5) { System.out.println("five"); }
// @option It does not compile, because x = 5 is an int assignment and if needs a boolean. [correct]
// @option It prints five, because x is assigned 5 and the test then succeeds.
// @option It prints nothing, because an assignment is never true.
// @option It does not compile, because x has already been declared.
// @explain An assignment produces the assigned int, and an if needs a boolean, so the compiler rejects it.
// @why B: the assignment gives an int, not a boolean, so no branch can run.
// @why C: the failure happens while compiling, before anything runs.
// @why D: x is declared once; the error is the type of the expression in the condition.

// @quiz (OCJP, HARD) Does this code compile?
// @code boolean flag = true;
// @code if (flag);
// @code System.out.println("A");
// @code else System.out.println("B");
// @option It does not compile, because the semicolon ends the if and leaves else without an if. [correct]
// @option It prints A, because flag is true.
// @option It prints B, because the empty if is false.
// @option It prints A and then B.
// @explain if (flag); is already a complete if with an empty body, so the else has no if to belong to.
// @why B: the else cannot attach to the if, so the file is rejected before running.
// @why C: the file is rejected while compiling, so no branch can print anything.
// @why D: the stray else is a compile-time error, so this never runs either.

// @quiz (OCJP, HARD) What is printed by this code?
// @code double d = 0.1 + 0.2;
// @code if (d == 0.3) { System.out.println("equal"); }
// @code else { System.out.println("not equal"); }
// @option not equal, because the sum is not exactly 0.3 in binary floating point. [correct]
// @option equal, because 0.1 + 0.2 is 0.3.
// @option It does not compile, because doubles cannot be compared with ==.
// @option equal, because Java rounds the sum to one decimal place.
// @explain Doubles are binary fractions, so 0.1 + 0.2 is 0.30000000000000004 and never equal to 0.3.
// @why B: the two sides differ in their last bits, so == reports false.
// @why C: == is allowed for primitives, and double is a primitive.
// @why D: Java does not round to a chosen number of decimal places.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int x = 5;
// @code if (!(x > 5)) System.out.println("A");
// @code System.out.println("B");
// @option A then B, because the negated test is true and B is outside the if. [correct]
// @option B only, because x > 5 is false.
// @option A only, because the if controls the rest of the block.
// @option It does not compile, because ! cannot be applied to a comparison.
// @explain x > 5 is false, so the negated test is true and A runs; B runs because it is outside the if.
// @why B: the ! inverts the false test, so the branch does run.
// @why C: without braces an if controls one statement only.
// @why D: ! applies to any boolean, and a comparison is a boolean.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int x = 3;
// @code if (x < 10) { System.out.println("small"); }
// @code else if (x < 5) { System.out.println("tiny"); }
// @option small, because the first branch matches and the chain stops there. [correct]
// @option tiny, because 3 is less than 5 as well.
// @option small and tiny, because both conditions are true.
// @option It does not compile, because the second test can never be reached.
// @explain The chain stops at the first true test, and 3 < 10 is true, so the narrower test is skipped.
// @why B: the wider test above matched first, so the chain never reaches the else-if.
// @why C: only one branch of a chain runs.
// @why D: an unreachable condition is legal, which is exactly why the order matters.

// @quiz (OCJP, HARD) What is printed by this code?
// @code boolean flag = true;
// @code Object result = flag ? 1 : "a";
// @code System.out.println(result);
// @option 1, because the int branch is boxed, both branches share Object, and only one is used. [correct]
// @option It does not compile, because the two branches have different types.
// @option a, because the String branch is always the one chosen for an Object.
// @option 1a, because both branches are evaluated and combined.
// @explain The int branch is boxed and both branches share Object as a supertype; only the true one is used.
// @why B: the branches have a common supertype, so the expression compiles.
// @why C: flag is true, so the first branch supplies the value.
// @why D: a conditional expression produces one value, never a combination.

public class IfExample {

    public static void main(String[] args) {

        boolean isAlien = false;

        // If keyword, takes what inside the parenthesis,and if(and only if), the result of expression is true, next line will be executed.
        if(isAlien == false){ // condition check
            System.out.println("It is not an alien!");
        } // Always uses code block, with if statement, it reduces confusion. It allows more than one statement to be executed.

        int topScore = 100;
        if(topScore == 100){
            System.out.println("You got the high score!");
        }
        if(topScore != 100){
            System.out.println("You didn't get the high score!");
        }
        if(topScore >= 100){
            System.out.println("You got the high score for greater than equal to!");
        }
        if((topScore >= 100) && (topScore < 200)){ // && represents logical AND operator
            System.out.println("You got the high score");
        }

        if((topScore < 100) || (topScore >= 100)){ // || represents logical OR operator
            System.out.println("You got the high score");
        }

        boolean isCar = false;
        if(isCar == true){ // Ideally, we should have used equalsTo(==) operator in place of assignment(=) operator. In this case,
            System.out.println("This is not supposed to happen");

            boolean wasCar = isCar ? true : false; // This block is skipped when isCar is false. If entered, the expression copies true into wasCar.

            if(wasCar){
                System.out.println("wasCar is true");
            }
        }
    }

}
