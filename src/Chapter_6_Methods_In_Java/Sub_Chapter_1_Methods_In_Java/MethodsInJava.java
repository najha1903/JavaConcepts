package Chapter_6_Methods_In_Java.Sub_Chapter_1_Methods_In_Java;
// A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.
// Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.
// Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }
// The return type declares what type of value the method sends back to the caller. Use 'void' if the method returns nothing.
// If a method has a non-void return type, it MUST have a 'return statement' that returns a value of that type.
// Parameters are local variables automatically created when the method is called, holding the values (arguments) passed in. They are destroyed when the method returns.
// You can call a method with literal values: calculateScore(true, 800, 5, 100)
// Or with variables: calculateScore(gameOver, score, levelCompleted, bonus) — the VALUES of those variables are passed.
// Method overloading: you can have multiple methods with the SAME name but DIFFERENT parameter lists (different number or types of parameters). Java picks the correct version based on the arguments you pass.
// A negative return value (like -1) is a common programming convention to signal that something went wrong or the input was invalid.
// This file evolves ONE method, calculateScore, through three stages, defined further down in this same file in this order:
// Stage 1 — calculateScore() with no parameters: void, hard-coded values, only prints (see the method with empty parentheses).
// Stage 2 — a commented-out calculateScore(boolean, int, int, int): still void, now WITH parameters; kept only as a /* */ block to show the in-between step — it never compiles or runs.
// Stage 3 — calculateScore(boolean, int, int, int): the final, real overload; same parameters as stage 2, but now returns an int so the caller can capture and reuse the result.

// How a method call actually works :-
// 1) Parameters receive copies of the argument values :-
// static void tryToChange(int n) { n = 99; }
// int x = 5;
// tryToChange(x);
// System.out.println(x);            // prints 5, because n was a copy
// Note :- Java is always pass-by-value. For a primitive, the copy is the number itself, so changing the parameter inside the method can never change the caller's variable.
//
// 2) The classic swap that does nothing :-
// static void swap(int a, int b) { int t = a; a = b; b = t; }
// int x = 1, y = 2;
// swap(x, y);
// System.out.println(x + " " + y);  // prints 1 2, not 2 1
// Note :- only the copies a and b are swapped. swap only works if the values come back through a return value, or if they are objects whose fields you swap.
//
// 3) For an object, the copy is the reference :-
// static void update(int[] data) { data[0] = 99; }
// int[] nums = {1, 2, 3};
// update(nums);
// System.out.println(nums[0]);      // prints 99, the caller's array really changed
// Note :- the parameter holds a copy of the reference, and both copies point at the same array, so writing through it is visible to the caller.
//
// 4) Reassigning the reference is not visible :-
// static void reset(int[] data) { data = new int[]{0, 0, 0}; }
// int[] nums = {1, 2, 3};
// reset(nums);
// System.out.println(nums[0]);      // prints 1, because only the copy was pointed elsewhere
// Note :- comparing 3 and 4 is the whole of the pass-by-value trap. Changing the object is visible, pointing the parameter at a new object is not.
//
// 5) A non-void method must return on every path :-
// static int sign(int n) {
//     if (n > 0) { return 1; }
// }                                  // Compile Error :- missing return statement
// Note :- when n is 0 or less the method would finish without a value, so the compiler refuses the file.
//
// 6) An overload is chosen by the argument types :-
// static void print(int x)    { System.out.println("int"); }
// static void print(double x) { System.out.println("double"); }
// print(5);                         // prints int
// Note :- Java decides at compile time and prefers the most specific match, so an int argument takes the int version rather than widening to double.
//
// 7) void means the call produces no value :-
// static void printScore(int score) { System.out.println(score); }
// int result = printScore(10);      // Compile Error :- void cannot be converted to int
// Note :- the method still runs and prints, but there is no value to store.
//
// Parameter notes :-
// - score, levelCompleted and bonus (the three int values passed to calculateScore): score is the starting points, levelCompleted is how many levels were finished, and bonus is the points per level. The method adds score to levelCompleted * bonus, so a zero or negative bonus would reduce the score.
// - gameOver (the boolean passed to calculateScore): it decides whether the score is reported, so pass true for a finished game and false to keep playing.

// @takeaway A method is a named block you run by name, so the logic is written once instead of copied around.
// @takeaway Parameters are locals created fresh for each call, holding copies of what you passed, and they disappear on return.
// @takeaway Java always passes by value: a copy of the number for a primitive, and a copy of the reference for an object.
// @takeaway A non-void method must return a value on every path that can finish.
// @takeaway Overloading is one name with different parameter lists, chosen at compile time from the argument types.
// @takeaway `void` means the call produces no value at all.
// @snippet int r = printScore(10);      // compile error
// @gotcha A parameter is a copy, so assigning to it inside the method never changes the caller's variable.
// @gotcha Writing through an object reference is visible to the caller, but reassigning the reference is not.
// @gotcha The return type is not part of the signature, so two methods differing only in return type cannot overload.
// @gotcha One branch that can finish without a return fails the whole file, not just that branch.

// @quiz (INTERVIEW) Is Java pass-by-value or pass-by-reference?
// @answer Java is ALWAYS pass-by-value.
// @answer For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable.
// @answer For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference.
// @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.

// @quiz (INTERVIEW) How does Java choose between overloaded methods such as print(int x) and print(double x)?
// @answer Java resolves overloads at compile time and chooses the most specific applicable method.
// @answer Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double.
// @answer If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order.

// @quiz (INTERVIEW) What is the difference between a void method and a method with a return type?
// @answer A void method performs work but does not return a value to the caller.
// @answer A method with a return type must return a value of that declared type on every valid execution path.
// @answer You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use.

// @quiz (INTERVIEW) What is the difference between a static method and an instance method in Java?
// @answer A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork().
// @answer An instance method belongs to a specific object and is called on an object reference.
// @answer Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members.
// @quiz (INTERVIEW) How should a caller choose levelCompleted and bonus for calculateScore?
// @answer levelCompleted should be the number of levels completed, and bonus should be the points per level; the method multiplies them together.
//
// @quiz (INTERVIEW TRAP) Does calculateScore(gameOver, score, levelCompleted, bonus) receive the caller's variables themselves?
// @answer No. Java passes argument values by value; parameter variables receive copies of those values in the declared order.
//
// @quiz (OCJP) Which overload is called by calculateScore(true, 800, 5, 100)?
// @answer The int-returning overload with parameters (boolean, int, int, int) is called because the argument count and types match that signature.

// @quiz (INTERVIEW, EASY) Which statement about method parameters in Java is correct?
// @option A parameter is a local variable that is created on each call, holds a copy of the argument value, and is destroyed when the method returns. [correct]
// @option A parameter is an alias for the caller's variable, so assigning a new value to the parameter also changes the caller's variable.
// @option A parameter keeps the value from the previous call, because Java reuses the same variable for the same method.
// @option A parameter must have exactly the same name as the variable that the caller passes in.
// @explain Parameters are local variables that exist only for the duration of a call. They are initialised with copies of the argument values, which is why Java is described as pass-by-value.
// @why B: Java always passes by value, so reassigning a parameter cannot affect the caller's variable.
// @why C: Each call creates fresh parameters, and they are destroyed when the method returns, so nothing is retained.
// @why D: The parameter name is local to the method; the caller's variable names have no effect on it.

// @quiz (INTERVIEW, MEDIUM) A method is declared as public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus). What does the int return type require of this method?
// @option Every valid execution path must return an int value, and this method uses -1 to signal that no valid score could be produced. [correct]
// @option Nothing extra, because the int only documents the type of the value that is printed inside the method.
// @option The method must return a double, because finalScore is increased by the constant 1000.
// @option The method may finish without returning a value, as long as it prints the result first.
// @explain A non-void return type is a promise that the method sends back a value of that declared type on every path that finishes normally. Here the promise is kept by returning finalScore, or -1 as the sentinel when no score is valid.
// @why B: The return type describes the value sent back to the caller, not what is printed inside the method.
// @why C: finalScore is an int and the declared return type stays int; adding 1000 does not widen it.
// @why D: Printing is not returning, so a method with a non-void return type must still return a value.

// @quiz (OCJP, MEDIUM) Given the overloads print(int x) and print(double x), which one runs for the call print(5)?
// @option print(int), because the argument is already an int, so that overload is the most specific applicable one. [correct]
// @option print(double), because Java widens to double before it looks for an exact match.
// @option Neither, because the call is ambiguous and the code does not compile.
// @option Java decides at runtime, by asking the argument which parameter type it prefers.
// @explain Overload resolution happens at compile time and picks the most specific applicable method. The argument is exactly an int, so print(int) is a better match than print(double).
// @why B: Widening is only considered when no more specific applicable overload exists, so the int version wins here.
// @why C: The call is not ambiguous, because print(int) is strictly more specific than print(double).
// @why D: Overload resolution is a compile-time decision based on the declared types of the arguments.

// @quiz (INTERVIEW TRAP, MEDIUM) A classic swap(int a, int b) method exchanges the values of its two parameters. What does the caller see afterwards?
// @option The caller's variables are unchanged, because the method swaps only its own copies of the two values. [correct]
// @option The caller's variables are swapped, because int arguments are passed by reference.
// @option The caller's variables are swapped, but only when the method is declared static.
// @option The code does not compile, because Java cannot pass an int value to a method.
// @explain Java passes arguments by value, so a and b are copies. Swapping the copies leaves the caller's variables exactly as they were, which is the classic Java trap.
// @why B: Primitives are passed by value, so no link to the caller's variables is ever created.
// @why C: Being static has no effect on argument passing; copies are made either way.
// @why D: Passing int values to int parameters is completely legal; the values are simply copied.

// @quiz (INTERVIEW, EASY) Which statement about a void method is correct?
// @option A void method can be called as a statement but cannot be used inside an expression, because the call produces no value. [correct]
// @option A void method must still return a value, and the usual choice is to return 0 as a placeholder.
// @option A void method cannot declare parameters, because it has nothing to send back.
// @option A void method can be assigned to any variable, and that variable then holds null.
// @explain void means the method sends no value back to the caller. The call is therefore an action rather than an expression, so it cannot be used where a value is expected.
// @why B: A void method may finish without any return statement at all.
// @why C: void describes only the return type; a void method may take as many parameters as it needs.
// @why D: There is no value to assign, so a void method call cannot appear on the right-hand side of an assignment.

// @quiz (INTERVIEW, MEDIUM) Which statement correctly compares a static method with an instance method?
// @option A static method has no current object, so it cannot directly access instance fields, while an instance method can access both instance and static members. [correct]
// @option A static method is called on an object, while an instance method is called with the class name.
// @option An instance method cannot read static fields, because static members belong only to the class.
// @option A static method belongs to each object separately, so every object gets its own copy of it.
// @explain A static method belongs to the class itself and is called through the class name, such as Math.max(). It has no current object, so instance fields are out of reach, whereas an instance method has a current object and can use both kinds of member.
// @why B: It is the other way round: static members are used with the class name, and instance members with an object reference.
// @why C: An instance method can access static members as well as instance members.
// @why D: Static members belong to the class and are shared by all objects rather than copied for each object.

// @quiz (OCJP, HARD) What is the value of result after this call?
// @code int result = calculateScore(false, 800, 5, 100);
// @option -1, because gameOver is false, so the calculation is skipped and the sentinel value is returned. [correct]
// @option 2300, because 800 + (5 * 100) + 1000 is calculated from the arguments that were passed.
// @option 0, because finalScore is still zero when the if block does not run.
// @option The code does not compile, because an if block without an else block cannot return an int on every path.
// @explain The whole calculation sits inside if(gameOver), so passing false skips it. Execution then reaches the final return -1, which is the documented sentinel meaning no valid score.
// @why B: The arithmetic is never performed for a false gameOver, so 2300 cannot be returned here.
// @why C: finalScore is declared inside the if block, so it does not exist at all when the block is skipped.
// @why D: The return -1 after the if statement provides a value on every path, so the method compiles.

// @quiz (INTERVIEW, EASY) Why can the first version of calculateScore be called as calculateScore() with no arguments?
// @option Because that version declares an empty parameter list and hard-codes its own gameOver, score, levelCompleted and bonus values. [correct]
// @option Because Java fills in a default value for every argument that is left out.
// @option Because void methods are not allowed to declare parameters.
// @option Because the other overload has already stored the four values for it to use.
// @explain A no-argument method declares no parameters, so it must supply its own values inside the body. That is exactly why the caller of this version has no way to change gameOver, score, levelCompleted or bonus.
// @why B: Java never invents arguments; the argument count and types must match a declared parameter list.
// @why C: void methods can declare parameters, as the later versions of calculateScore show.
// @why D: Overloading does not carry values between methods; the no-argument call simply matches the method with an empty parameter list.

// @quiz (INTERVIEW, MEDIUM) What is printed by this code?
// @code static void update(int[] data) { data[0] = 99; }
// @code int[] nums = {1, 2, 3};
// @code update(nums);
// @code System.out.println(nums[0]);
// @option 99, because the method receives a copy of the reference and changes the same array object. [correct]
// @option 1, because Java passes a copy of the array so the original is untouched.
// @option It does not compile, because arrays cannot be passed to methods.
// @option 0, because the array is reset when the method returns.
// @explain Java is always pass-by-value, but for an object the value being copied is the reference. Both the caller and the parameter point at the same array, so writing data[0] is visible through nums.
// @why B: the reference is copied, not the contents. The copy still points at the same array.
// @why C: arrays are objects and can be passed freely.
// @why D: nothing is reset. The change made inside the method persists.

// @quiz (INTERVIEW, HARD) What is printed by this code?
// @code static void reset(int[] data) { data = new int[]{0, 0, 0}; }
// @code int[] nums = {1, 2, 3};
// @code reset(nums);
// @code System.out.println(nums[0]);
// @option 1, because reassigning the parameter only changes the local copy of the reference. [correct]
// @option 0, because the method replaces the array with zeros.
// @option It does not compile, because data cannot be reassigned.
// @option 99, because the old value is retained.
// @explain The parameter holds a copy of the reference. Pointing that copy at a new array does not change which array the caller's variable refers to, so nums still holds the original.
// @why B: the new array is local to the method and is discarded when it returns.
// @why C: reassigning a parameter is allowed; it simply has no effect on the caller.
// @why D: 99 was never involved in this code.

// @quiz (OCJP, MEDIUM) Does this method compile?
// @code public static int sign(int n) {
// @code     if (n > 0) { return 1; }
// @code }
// @option No. A non-void method must return a value on every path, and the case where n is not positive has no return. [correct]
// @option Yes, and it returns 0 when n is not positive.
// @option Yes, because Java supplies a default return value of 0.
// @option Yes, and it returns 1 in every case.
// @explain The compiler checks every path through the method. When n is not positive the if body is skipped and the method reaches its closing brace without returning, which is an error rather than a default.
// @why B: there is no implicit 0. The method would have to say so.
// @why C: Java never supplies a default return value for a method.
// @why D: the return sits inside the if, so it does not cover every case.

// @quiz (OCJP, MEDIUM) Does this line compile?
// @code public static void printScore(int score) { System.out.println(score); }
// @code int result = printScore(10);
// @option No. A void method produces no value, so there is nothing to assign to result. [correct]
// @option Yes, and result becomes 10.
// @option Yes, and result becomes 0.
// @option Yes, because Java converts the printed value into an int.
// @explain void means the method hands back nothing at all, so it cannot be used where a value is expected, such as the right-hand side of an assignment.
// @why B: the score inside the method is a parameter, not a return value.
// @why C: an absent value is not the same as zero.
// @why D: printing is output, not a return.

// @quiz (INTERVIEW TRAP, HARD) What is printed by this code?
// @code static void swap(int a, int b) { int t = a; a = b; b = t; }
// @code int x = 1, y = 2;
// @code swap(x, y);
// @code System.out.println(x + " " + y);
// @option 1 2, because the method swaps only its own copies of the values. [correct]
// @option 2 1, because the swap is applied to the caller's variables.
// @option It does not compile, because a and b cannot be reassigned.
// @option 1 1, because both variables end up with the same value.
// @explain Parameters receive copies of the argument values. Swapping the copies has no effect on x and y, which is the classic demonstration of pass-by-value.
// @why B: reaching the caller's variables would need pass-by-reference, which Java does not do.
// @why C: reassigning parameters is perfectly legal.
// @why D: the method works correctly on its own copies; the caller simply never sees it.


// @quiz (INTERVIEW, MEDIUM) What is printed by this code?
// @code static int bump(int n) { n = n + 1; return n; }
// @code int x = 5;
// @code int y = bump(x);
// @code System.out.println(x + " " + y);
// @option 5 6, because the parameter is a copy while the return sends the new value back. [correct]
// @option 6 6, because the change to n also changes x.
// @option 5 5, because the changed copy is thrown away at the end.
// @option It does not compile, because a parameter cannot be reassigned.
// @explain The parameter is a copy, so x is untouched; the new value reaches the caller only through return.
// @why B: nothing links n back to x, so only the return can deliver the value.
// @why C: y takes the returned value, which is 6.
// @why D: a parameter is an ordinary local variable and may be reassigned.

// @quiz (OCJP, MEDIUM) Does this class compile?
// @code public void greet() { System.out.println("hi"); }
// @code public static void main(String[] args) { greet(); }
// @option No. greet() is an instance method and main is static, so there is no object to call it on. [correct]
// @option Yes, and it prints hi, because main may call any method of its own class.
// @option Yes, but it prints nothing because greet() was never initialised.
// @option Yes, as long as greet() is called twice.
// @explain A static method has no current object, so it cannot call an instance method without one.
// @why B: a static context has no current object, so the call is rejected.
// @why C: the failure happens while compiling, so nothing runs.
// @why D: the number of calls makes no difference to the rule.

// @quiz (OCJP, HARD) What is printed by this code?
// @code static void addMark(StringBuilder sb) { sb.append("!"); }
// @code StringBuilder text = new StringBuilder("hi");
// @code addMark(text);
// @code System.out.println(text);
// @option hi!, because the copied reference points at the same StringBuilder as text. [correct]
// @option hi, because Java copies the argument before the call.
// @option It does not compile, because StringBuilder cannot be passed to a method.
// @option null, because the StringBuilder is emptied by the call.
// @explain The copied reference still points at the same object, so the append is visible through text.
// @why B: what is copied is the reference, not the object, so the change is visible.
// @why C: objects of any class can be passed; only the reference is copied.
// @why D: nothing empties it; the append adds one character to the existing text.

// @quiz (OCJP, HARD) Does this method compile?
// @code public static int pick() {
// @code     return 1;
// @code     System.out.println("never");
// @code }
// @option No, because the statement after return can never be reached. [correct]
// @option Yes, and it prints never before returning.
// @option Yes, and it returns 1 without printing.
// @option No, because pick() has an empty parameter list.
// @explain After return, control has left the method, so the next statement can never be reached.
// @why B: the compiler rejects unreachable statements, so nothing runs.
// @why C: the code is refused before it can run at all.
// @why D: an empty parameter list is perfectly legal.

// @quiz (OCJP, HARD) Given these overloads, what does the call show(5) print?
// @code static void show(long n) { System.out.println("long"); }
// @code static void show(double n) { System.out.println("double"); }
// @code show(5);
// @option long, because widening to long is more specific than widening to double. [correct]
// @option double, because Java prefers floating-point for numeric arguments.
// @option Neither, because the call is ambiguous and does not compile.
// @option It does not compile, because an int cannot be widened.
// @explain Both overloads fit, and long is more specific than double, so show(long) is the one chosen.
// @why B: double is used only when no closer overload exists.
// @why C: the most-specific rule picks a winner, so the call is not ambiguous.
// @why D: an int widens to both long and double without any cast.

public class MethodsInJava {

    public static void main(String[] args) {
     calculateScore(); //method without any parameter
     // calculateScore(true,800,5,100); // Calling the overloaded method with parameters
        // The parameters should be passed in the same order as it is defined in the method.

        int highScore = calculateScore(true,800,5,100); // The value returned by calculateScore function is now assigned to highScore variable.
        System.out.println("Your final score was " + highScore);

        // We can also pass the values to the method using variables

        boolean gameOver = true;
        int score = 800;
        int levelCompleted = 5;
        int bonus = 100;

        int highScoreValue = calculateScore(gameOver,score,levelCompleted,bonus); // Here, the value supplied to the method is in the form of variables, which is also valid input to the method.
        System.out.println("Your final score was " + highScoreValue);
    }

    public static void calculateScore(){

        boolean gameOver = true;
        int score = 800;
        int levelCompleted = 5;
        int bonus = 100;

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            System.out.println("Your final score was " + finalScore);
        }

    }

/*
//    public static void calculateScore(boolean gameOver, int score, int levelCompleted, int bonus){

        // When we define parameters,Java will automatically create variables with appropriate data types, and it gets deleted, once process goes back to the line where method is called.
        // void means don't send any value back.If we don 't the method to return any information, we use void as a return type of method.

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            System.out.println("Your final score was " + finalScore);
        }

//    }
*/

    public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus){

        // Here, the data return type is int, which means method is returning a value of type int.
        // If we have to return any information, and send the value(result) back to the method call, we can use the method with return type option

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            return finalScore;
        }
      /*  else{
            return -1;
        }*/

        return -1; // In programming terms, negative value indicates programming error.
    }
}
