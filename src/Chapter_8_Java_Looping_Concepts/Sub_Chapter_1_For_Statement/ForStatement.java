package Chapter_8_Java_Looping_Concepts.Sub_Chapter_1_For_Statement;
/*
 Loops let us execute the same block of code multiple times without writing that code again and again.
 Java supports several looping statements for repetitive execution:
 - for --> best when you are iterating over a known range or set of values.
 - while --> runs until a specified condition becomes false.
 - do while --> always runs at least once, then continues until the condition becomes false.

 The for statement is often referred to as the for loop.
 It repeatedly loops until a condition is no longer satisfied.

 for(initialisation; condition; update) {
     // block of statements
 }

 - Initialisation runs once before the loop starts and usually declares or sets a loop variable.
 - Condition is checked before each iteration. If it becomes false, the loop ends.
 - Update runs after each iteration body and usually increments or decrements the loop variable.
 - A variable declared inside for(int i = ...) is local to that loop and does not exist outside it.

 Break Statement :-
 A break statement transfers control out of an enclosing statement.
 It can also be used inside a loop to exit immediately.

 Continue Statement :-
 The continue statement stops the current iteration, skips the remaining code in that iteration, and starts the next one.
 It is useful when you want to keep looping but skip certain values or partially execute some iterations.

 Example of continue statement:
 int number = 0;

 while (number < 50) {
     number = number + 5;

     if (number % 25 == 0) {  // 25 and 50 get skipped.
        continue;
     }

     if (number < 50) {
        System.out.print(number + " ");
     } else {
        System.out.print(number);
     }
 }

 Output :- 5 10 15 20 30 35 40 45 [Numbers 25 and 50 are not printed]

 The three parts in more detail :-
 1) Off-by-one is decided by < or <= :-
 for (int i = 0; i < 5; i++) { System.out.print(i + " "); }     // prints 0 1 2 3 4
 for (int i = 0; i <= 5; i++) { System.out.print(i + " "); }    // prints 0 1 2 3 4 5
 Note :- starting at 0 with < gives exactly 5 passes. Changing < to <= adds one more pass, which is the usual off-by-one mistake.

 2) The loop variable and the header :-
 for (int i = 0; i < 3; i++) { System.out.println(i); }
 // System.out.println(i);      // Compile Error :- cannot resolve symbol 'i'
 Note :- i is declared in the header, so it belongs to the loop and is gone once the loop ends. To keep it, declare it before the loop.

 3) Two counters in one header :-
 for (int i = 0, j = 10; i < j; i++, j--) { System.out.println(i + " " + j); }
 Output :- 0 10, then 1 9, then 2 8, and so on
 Note :- the initialisation and update sections may each hold several statements separated by commas.

 4) The endless for loop :-
 for (;;) { ... }                // same as while (true)
 Note :- all three sections are optional. Only a break or a return inside the body can end this loop.

 5) continue skips the rest of this pass, but still runs the update :-
 for (int i = 1; i <= 5; i++) {
     if (i == 3) { continue; }   // 3 is skipped
     System.out.print(i + " ");  // prints 1 2 4 5
 }
 Note :- continue jumps to the update step, so i still increases. That is why the loop cannot get stuck here.

 6) Nested loops, and how to leave both at once :-
 outer:
 for (int i = 1; i <= 3; i++) {
     for (int j = 1; j <= 3; j++) {
         if (i * j == 6) { break outer; }   // leaves BOTH loops
         System.out.println(i + " x " + j + " = " + (i * j));
     }
 }
 Note :- the inner loop runs its whole 3 passes for every single pass of the outer loop. A plain break would leave only the inner loop, which is why a label is used when both must stop.

 @takeaway A `for` header holds all three parts: the setup, the test, and the update after each pass.
 @snippet for (int i = 0; i < 5; i++) { }
 @takeaway The variable declared in the header belongs to the loop and disappears at the closing brace.
 @takeaway `break` leaves the loop; `continue` skips the rest of the pass and still runs the update step.
 @takeaway `i < 5` stops at 4 and `i <= 5` stops at 5, and that one extra pass is the usual off-by-one bug.
 @takeaway Nested loops run the inner loop completely for every pass of the outer one, so 3 x 4 runs the inner body 12 times.
 @gotcha A loop that never changes its condition runs forever, and the program just looks frozen.
 @gotcha `break` on its own leaves only the innermost loop; leaving two needs a label.
 @gotcha In a `while`, a `continue` before the update spins forever; in a `for`, the update still runs.

 @quiz (INTERVIEW) What is the difference between for, while, and do-while loops in Java?
 @answer for is best when initialization, condition, and update belong together, while while is better for condition-driven loops.
 @answer do-while checks the condition after the body, so it runs at least once.

 @quiz (INTERVIEW) What is an enhanced for-each loop, and when can you not use it?
 @answer The enhanced for loop iterates over arrays or collections without managing an index manually.
 @answer It is not suitable when you need the index, need to skip backward, or need structural modification during iteration.

 @quiz (INTERVIEW) Can you declare multiple variables in a for loop initializer?
 @answer Yes, but they must be of the same declared type in that initializer.
 @answer For example, for (int i = 0, j = 10; i < j; i++, j--) is valid.

 @quiz (INTERVIEW) When is a for loop usually preferred over a while loop?
 @answer A for loop is preferred when the loop count or iteration pattern is known up front.
 @answer It keeps loop setup in one place and is often easier to read for counter-based logic.

 @quiz (OCJP) What does for (;;) do in Java?
 @answer It creates an infinite loop because all three sections are omitted.
 @answer The loop stops only with break, return, an exception, or external termination.

 @quiz (OCJP) What prints here: for (int i = 0; i < 3; i++) { i++; System.out.print(i); }?
 @answer It prints 13.
 @answer Modifying the loop variable inside the body is legal, but it changes the loop flow and can be tricky.

 @quiz (INTERVIEW) In calculateInterest(amount, interestRate), should interestRate be 7.5 or 0.075 for 7.5 percent?
 @answer Pass 7.5 because the method treats the parameter as a percent and divides it by 100 internally.

 @quiz (INTERVIEW) What do the start, end, and step values mean in for(double rate = 7.5; rate <= 10; rate += 0.25)?
 @answer The loop starts at 7.5, includes values up to 10 because of <=, and increases by 0.25 each iteration.

 @quiz (OCJP) What happens if amount is 100 and interestRate is 2 in calculateInterest?
 @answer The method returns 2.0 because it computes 100 * (2 / 100), treating 2 as 2 percent.
 */

// @quiz (INTERVIEW, EASY) In what order does Java execute the three parts of a for statement?
// @option Initialisation once before the loop starts, then the condition before each iteration, then the update after each iteration body. [correct]
// @option Initialisation, condition and update once each, all before the first iteration begins.
// @option The condition once, followed by the initialisation and the update on every iteration.
// @option The update first, then the condition, then the initialisation on every pass.
// @explain The header reads for(initialisation; condition; update). The initialisation runs a single time, the condition is re-tested before every iteration, and the update runs after the body of each iteration.
// @why B: Only the initialisation runs once; the condition and the update are repeated.
// @why C: The condition is tested before every iteration, not just once.
// @why D: The parts always run in the written order, with the update last.

// @quiz (OCJP, MEDIUM) What is the result of this code?
// @code for (int i = 0; i < 3; i++) {
// @code     System.out.println(i);
// @code }
// @code System.out.println(i);
// @option It does not compile, because a variable declared in the for initialiser is local to the loop and is not visible after it. [correct]
// @option It prints 3, the value i held when the loop ended.
// @option It prints 2, because the update does not run after the final iteration.
// @option It prints 0, because i is re-initialised once the loop has finished.
// @explain A variable declared in for(int i = ...) is scoped to the loop, so i no longer exists at the println after the closing brace. The value would have been 3 if the name were still in scope.
// @why B: The value 3 is never printed, because the name i is out of scope at that point.
// @why C: The update does run at the end of each completed iteration, but the real problem is scope rather than the value.
// @why D: There is no re-initialisation; the name is simply not declared in the enclosing block.

// @quiz (OCJP, HARD) What does this loop print?
// @code for (int i = 0; i < 3; i++) {
// @code     i++;
// @code     System.out.print(i);
// @code }
// @option 13 [correct]
// @option 012
// @option 123
// @option It does not compile, because a loop variable may not be modified inside the body.
// @explain The body increments the loop variable as well as the update does, so the printed values are 1 and then 3, and the loop ends when i reaches 4. Modifying the loop variable inside the body is legal, but it changes the loop flow and is easy to get wrong.
// @why B: The body increments i before printing, so 0 is never printed.
// @why C: The first printed value is 1, but the second is 3, because i is incremented twice per iteration.
// @why D: Java allows the loop variable to be modified inside the body; it is legal but confusing.

// @quiz (OCJP, MEDIUM) What does for (;;) do in Java?
// @option It creates an infinite loop, because all three sections are omitted, and it stops only with break, return, an exception or external termination. [correct]
// @option It does not compile, because the header of a for statement may not be empty.
// @option It runs its body exactly once, because a missing condition counts as false after the first pass.
// @option It is an infinite loop that ignores any break statement inside its body.
// @explain Leaving the initialisation, condition and update empty gives a header that is always true, so the loop repeats until something inside it ends it. This is a deliberate way of writing "loop until done".
// @why B: An empty header is legal Java and is a recognised way to write an infinite loop.
// @why C: A missing condition is treated as permanently true, not as false after one pass.
// @why D: break, return and exceptions inside the body all end the loop as usual.

// @quiz (INTERVIEW, EASY) In which situation is the enhanced for loop unsuitable?
// @option When you need the element index, need to iterate backwards, or need to change the structure of the array or collection while iterating. [correct]
// @option When the array holds double values instead of int values.
// @option When you only want to read the elements and not change them.
// @option When the collection is declared as an interface rather than a class.
// @explain The enhanced for loop hides the index and always walks forward, so it cannot give you positions or move backwards, and it is not suitable when the structure is modified during iteration. A counted for loop is used for those tasks.
// @why B: The enhanced for loop works with arrays of any element type, including double.
// @why C: Reading the elements without changing them is exactly what the enhanced for loop is designed for.
// @why D: It works with any array or collection, whether the variable is declared as an interface or a class.

// @quiz (OCJP, MEDIUM) Which of these for headers is valid Java?
// @option for (int i = 0, j = 10; i < j; i++, j--) [correct]
// @option for (int i = 0, double j = 10; i < j; i++, j--)
// @option for (int i = 0, j = 10.0; i < j; i++, j--)
// @option for (int i = 0; j = 10; i < j; i++, j--)
// @explain The initialiser may declare several variables as long as they share the single declared type, and the update section may hold several comma-separated expressions. Here both i and j are int, and the loop runs while i is less than j.
// @why B: One declaration cannot mix types, so declaring int i and double j in the same initialiser does not compile.
// @why C: 10.0 is a double literal, so it cannot initialise the int variable j in that declaration.
// @why D: A for header has exactly three sections separated by two semicolons, so the third semicolon is a syntax error.

// @quiz (INTERVIEW, MEDIUM) Why should a caller pass 7.5 rather than 0.075 to mean 7.5 percent to calculateInterest?
// @option Because the parameter is treated as a percentage and the method divides it by 100 internally. [correct]
// @option Because the method expects a fraction and multiplies the parameter by 100 internally.
// @option Because the method rounds every rate up to the nearest whole number.
// @option Because the parameter is an int, so 0.075 would not compile.
// @explain calculateInterest computes amount * (interestRate / 100), so the parameter is a percent value. Passing 0.075 would divide twice and give a rate far too small.
// @why B: The method divides by 100 and never multiplies by 100, so a fraction is the wrong scale.
// @why C: There is no rounding anywhere, only a multiplication and a division.
// @why D: The parameter is declared as double, so 0.075 compiles but produces a wrong, very small result.

// @quiz (OCJP, HARD) This loop breaks as soon as the interest is greater than 8.5. Which rate is the last one for which interest is printed?
// @code for (double rate = 7.5; rate <= 10; rate += 0.25) {
// @code     double interestAmount = calculateInterest(100.00, rate);
// @code     if (interestAmount > 8.5) {
// @code         break;
// @code     }
// @code     System.out.println(rate + "% interest on 100 = " + interestAmount);
// @code }
// @option 8.5, because the comparison is strictly greater than, so a rate of 8.5 is still printed. [correct]
// @option 8.25, because a rate of 8.5 counts as reaching the cutoff.
// @option 10.0, because break only ends the loop after the last iteration.
// @option No rate is printed, because the break runs on the very first iteration.
// @explain calculateInterest(100, rate) is just rate, so the interest amount equals the rate. 8.5 is not greater than 8.5, so it is printed, and the next rate of 8.75 triggers the break.
// @why B: The cutoff is exclusive, so 8.25 is not the last printed rate; 8.5 is printed after it.
// @why C: break leaves the loop immediately, so rates above 8.5 are never reached.
// @why D: The first interest amount is 7.5, which is below the cutoff, so several rates are printed before the break.

// @quiz (OCJP, MEDIUM) What is printed by this loop?
// @code int number = 0;
// @code while (number < 50) {
// @code     number = number + 5;
// @code     if (number % 25 == 0) { continue; }
// @code     System.out.print(number + " ");
// @code }
// @option 5 10 15 20 30 35 40 45, because 25 and 50 are skipped. [correct]
// @option 5 10 15 20 25 30 35 40 45 50
// @option 5 10 15 20, because the loop stops at 25.
// @option nothing, because continue ends the loop.
// @explain continue skips the rest of the current iteration only. When number reaches 25 or 50 the print is skipped, but the loop itself carries on.
// @why B: the continue prevents 25 and 50 from being printed.
// @why C: the loop does not stop. continue is not break.
// @why D: continue skips one iteration, not the whole loop.

// @quiz (INTERVIEW, MEDIUM) How many numbers does this loop print?
// @code for (int i = 0; i <= 5; i++) { System.out.println(i); }
// @option 6, printing 0 to 5. [correct]
// @option 5, printing 0 to 4.
// @option 5, printing 1 to 5.
// @option 6, printing 1 to 6.
// @explain i starts at 0 and the condition is i <= 5, so the last accepted value is 5. Counting 0, 1, 2, 3, 4, 5 gives six prints.
// @why B: i <= 5 includes 5, so there is one more iteration than i < 5 would give.
// @why C: i begins at 0, not 1.
// @why D: i never reaches 6, and the first value printed is 0.

// @quiz (INTERVIEW, MEDIUM) What does this loop do?
// @code for (;;) { System.out.println("tick"); }
// @option It runs forever, because an absent condition is treated as always true. [correct]
// @option It does not compile, because a for header needs all three parts.
// @option It runs exactly once.
// @option It never runs at all.
// @explain All three parts of a for header are optional. An empty condition means true, so the loop repeats until something such as break or return stops it.
// @why B: the parts are optional, so for(;;) is legal Java.
// @why C: nothing limits it to a single pass.
// @why D: an empty condition is true, so the body does run.

// @quiz (INTERVIEW, MEDIUM) What is the difference between break and continue inside a loop?
// @option break ends the loop, while continue skips the rest of this iteration and moves to the next. [correct]
// @option break skips one iteration, while continue ends the loop.
// @option Both end the loop immediately.
// @option Both only skip the current iteration.
// @explain break leaves the loop entirely, so no further iterations run. continue abandons only the current pass and lets the loop continue with the next one.
// @why B: the two are swapped.
// @why C: only break ends the loop.
// @why D: only continue behaves that way.

// @quiz (OCJP, HARD) Does this code compile?
// @code for (int i = 0; i < 3; i++) { System.out.print(i); }
// @code System.out.println(i);
// @option No. i is declared in the for header, so its scope ends with the loop. [correct]
// @option Yes, and it prints the final value of i.
// @option Yes, and it prints 0.
// @option Yes, because i defaults to 0 after the loop.
// @explain A variable declared in the initialisation of a for header lives only inside that loop. After the closing brace the name no longer exists, so the println cannot refer to it.
// @why B: the name is out of scope, so the line does not compile.
// @why C: the same scope error applies.
// @why D: the variable is not reset. It simply no longer exists.

// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code for (int i = 0; i < 5; i++) {
// @code     if (i % 2 == 0) continue;
// @code     System.out.print(i);
// @code }
// @option 13 [correct]
// @option 024
// @option 01234
// @option Nothing is printed.
// @explain The continue skips the print for even i, but the update i++ still runs, so only 1 and 3 print.
// @why B: 024 are the even values, which the continue branch skips.
// @why C: the print is skipped for half the iterations, not for all of them.
// @why D: the odd values do reach the print statement.
// @quiz (OCJP, HARD) What is printed by this program?
// @code outer:
// @code for (int i = 1; i <= 3; i++) {
// @code     for (int j = 1; j <= 3; j++) {
// @code         if (j == 2) break outer;
// @code         System.out.print(i + "" + j + " ");
// @code     }
// @code }
// @option 11 [correct]
// @option 11 21 31
// @option 11 12 13 21 22 23 31 32 33
// @option 11 12 21 22 31 32
// @explain The label outer names the first for loop, so break outer leaves both loops at once.
// @why B: an unlabelled break would exit only the inner loop and leave the outer one running.
// @why C: that is the output when there is no break at all.
// @why D: the break runs when j is 2, not when j is 3.
// @quiz (INTERVIEW, MEDIUM) How many times is the body of the inner loop executed in total?
// @code int count = 0;
// @code for (int i = 0; i < 3; i++) {
// @code     for (int j = 0; j < 4; j++) {
// @code         count++;
// @code     }
// @code }
// @option 12, because 3 outer passes each run the inner loop 4 times. [correct]
// @option 7, because the two bounds are added together.
// @option 3, because only the outer loop repeats.
// @option 4, because only the inner loop repeats.
// @explain The loops are nested, so the iteration counts multiply: 3 outer passes times 4 inner passes is 12.
// @why B: nested loops multiply their counts rather than adding them.
// @why C: the inner loop runs again for each of the 3 outer passes.
// @why D: the outer loop repeats the whole inner loop three times.
// @quiz (OCJP, HARD) What happens when this code runs?
// @code for (int i = 0; i < 5; ) {
// @code     System.out.println(i);
// @code }
// @option It prints 0 for ever, because nothing changes i. [correct]
// @option It prints 0 to 4 and then stops.
// @option It does not compile, because the update section is missing.
// @option It prints nothing, because the header is incomplete.
// @explain The update is optional, so this compiles. Nothing changes i, so the condition stays true.
// @why B: i never grows, so i < 5 is true on every pass.
// @why C: a for header may omit the update, so for (int i = 0; i < 5; ) is legal Java.
// @why D: the condition is true at the start, so the body does run.
// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code for (int i = 5; i > 0; i--) {
// @code     System.out.print(i + " ");
// @code }
// @option 5 4 3 2 1 [correct]
// @option 5 4 3 2 1 0
// @option 1 2 3 4 5
// @option Nothing, because i > 0 is false at the first test.
// @explain The update i-- counts down and the test stops at 0, so the values printed are 5 down to 1.
// @why B: the test i > 0 fails when i is 0, so 0 is never printed.
// @why C: the loop starts at 5 and decreases, so it counts down rather than up.
// @why D: 5 > 0 is true, so the body runs on the first pass.
// @quiz (OCJP, MEDIUM) How many times does the body of this loop run?
// @code for (int i = 0; i <= 10; i += 3) {
// @code     System.out.println(i);
// @code }
// @option 4, printing 0, 3, 6 and 9. [correct]
// @option 3, printing 0, 3 and 6.
// @option 4, printing 0, 3, 6 and 10.
// @option 5, printing 0, 3, 6, 9 and 12.
// @explain i takes the values 0, 3, 6 and 9, then becomes 12 and fails i <= 10, so four passes run.
// @why B: 9 also satisfies i <= 10, so there is one more pass.
// @why C: i jumps by 3, so 10 is never a value of i.
// @why D: 12 fails the test, so it is never printed.
public class ForStatement {

    public static void main(String[] args) {

        System.out.println("Counting from 1 to 5:");
        for(int counter = 1; counter <=5; counter++){ // counter is the variable that got initialised. It is then compared with the value less than equal to 5. If the counter is greater than 5, the loop will terminate. Lastly the loop is incremented, after the expression is tested.
           System.out.println(counter);
        }

        System.out.println();
        System.out.println("Interest on 10000 for rates 2.0% to 5.0%:");
        for(double rate = 2.0; rate<=5.0; rate++){
           System.out.println(rate + "% interest on 10000 = " + calculateInterest(10000, rate));
        }

        System.out.println();
        System.out.println("Interest on 10000 at 2.0% = " + calculateInterest(10000, 2));

        /* Using a new for statement, call the calculateInterest method with the dollar amount of 100

           Use the interest rate between 7.5 to 10, but increment by a quarter of percent each time, meaning 0.25 percent
        */
        System.out.println();
        System.out.println("Interest on 100 for rates 7.5% to 10.0%:");
        for(double rate = 7.5; rate<=10; rate+=0.25){
           System.out.println(rate + "% interest on 100 = " + calculateInterest(100, rate));
        }


        System.out.println();
        System.out.println("For statement with break keyword:");
        for(double rate = 7.5; rate<=10; rate+=0.25){
           double interestAmount = calculateInterest(100.00,rate);
           if(interestAmount > 8.5){
               break;
           }
           System.out.println(rate + "% interest on 100 = " + interestAmount);
        }
    }

    public static double calculateInterest(double amount, double interestRate){

        return (amount * (interestRate / 100));
    }

}
