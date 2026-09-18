package Chapter_9_WhileAndDoWhileLoopingConcepts.Sub_Chapter_1_While_Loop;
/*
  WHILE LOOPS

  The while loop repeatedly executes its body as long as a condition remains true.
  Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.
  You must declare and initialise any counter variables BEFORE the loop, and update them INSIDE the loop body.

  Syntax:
    while (condition) {
        // body
        // must update loop variable here, or you get an infinite loop!
    }

  Key difference from for loop:
  - for loop: initialisation, condition, and update are all in one line — ideal when you know the count upfront.
  - while loop: only the condition is in the declaration — ideal when you don't know upfront how many times to loop.

  EXAMPLE 1 — Basic counting with while:
    int j = 1;           // initialisation happens OUTSIDE the while
    while (j <= 5) {     // condition
        System.out.println(j);
        j++;             // update happens INSIDE the while
    }

  EXAMPLE 2 — while(true) with break (common pattern for "loop until done"):
    while (true) {       // infinite loop — will loop forever unless break is used
        if (j > 5) {
            break;       // exits the loop when j exceeds 5
        }
    }

  CONTINUE and BREAK:
  - continue: skips the REMAINING code in the current iteration and starts the next iteration immediately.
  - break: exits the loop entirely at the point it is executed. No further iterations run.

  IMPORTANT: Always check your loop condition carefully.
  - An infinite loop (condition never becomes false, no break) will freeze or crash your program.
  - A never-executing loop (condition is false from the start) will silently skip all the loop code.

  THE THREE SHAPES A WHILE LOOP TAKES

  1) Count up to a limit, when you know how many passes you want:
     int i = 0;
     while (i < 5) {
         System.out.println("pass " + i);   // pass 0, pass 1, pass 2, pass 3, pass 4
         i++;                                // without this line the loop never ends
     }

  2) Keep going until a sentinel value arrives, when you do not know how many passes:
     int total = 0;
     int value = scanner.nextInt();
     while (value != -1) {        // -1 is the sentinel that stops the loop
         total += value;
         value = scanner.nextInt();
     }
     Note :- -1 is called a sentinel. It is a value chosen only to mean "stop here", so it is never added to the total.

  3) Keep asking until the input becomes valid:
     int age = -1;
     while (age < 0) {
         System.out.print("Enter your age: ");
         age = Integer.parseInt(scanner.nextLine());
     }
     Note :- the loop repeats while the data is wrong, so the code after it only ever sees a valid value.

  THE DIGIT PATTERN — the idea behind most of the challenges in this chapter

     `n % 10` gives the LAST digit of a number, and `n = n / 10` removes it, because integer division throws the fraction away.

     int n = 1234;
     while (n > 0) {
         int digit = n % 10;      // 4, then 3, then 2, then 1
         System.out.print(digit + " ");
         n = n / 10;              // 123, then 12, then 1, then 0
     }
     Output :- 4 3 2 1
     Note :- the digits arrive in reverse, because the last digit is the easiest one to reach. The loop stops when n reaches 0.
     Note :- this single pattern is the basis of the digit sum, the palindrome check, the even digit sum and number-to-words.

  Pitfall :- `while (condition);` with a semicolon gives the loop an empty body, so the condition is tested forever and the block you wrote underneath does not belong to the loop at all.
  Pitfall :- in a while loop, `continue` jumps straight back to the condition without running the update, so a counter that is only incremented at the end of the body never advances.

 @takeaway A while loop tests its condition before every pass, so when the condition is false to begin with the body never runs at all.
 @takeaway Nothing is built into a while header. You set the counter up before the loop and change it inside the body, and forgetting to change it is what produces an infinite loop.
 @takeaway Three shapes cover most while loops: count up to a limit, keep going until a sentinel value arrives, and keep asking until the input becomes valid.
 @takeaway `n % 10` gives the last digit of a number and `n = n / 10` removes it. Repeat that while `n > 0` and the digits come out in reverse, which is the basis of digit sum, palindrome checks and number-to-words.
 @gotcha A while loop whose body never changes the condition runs forever, and the program looks frozen rather than reporting anything.
 @gotcha `while (condition);` with a stray semicolon gives the loop an empty body, so the condition is tested endlessly and the block underneath is outside the loop.
 @gotcha `continue` in a while loop jumps back to the condition without running the update, so a counter incremented only at the end of the body never moves.
*/

// @quiz (INTERVIEW) What is the difference between while and do-while in Java?
// @answer while checks its condition before the body, so it may run zero times.
// @answer do-while checks after the body, so it always runs at least once.

// @quiz (INTERVIEW) What is an infinite loop, and how do you break out of one?
// @answer An infinite loop is a loop whose condition never becomes false or that intentionally uses while(true).
// @answer You exit it with break, return, an exception, or by changing the condition from inside the loop.

// @quiz (INTERVIEW) When would you prefer while over for?
// @answer Prefer while when the number of iterations is not known in advance and the loop depends on a changing condition.
// @answer It is common for input-reading, waiting, and sentinel-controlled loops.

// @quiz (INTERVIEW) What do break and continue do inside a while loop?
// @answer break exits the loop immediately, while continue skips the rest of the current iteration and reevaluates the condition.
// @answer Both change control flow without waiting for the loop body to finish normally.

// @quiz (OCJP) What prints here: int x = 0; do { x++; } while (x < 0); System.out.println(x);?
// @answer It prints 1.
// @answer A do-while loop always executes its body once before checking the condition.

// @quiz (OCJP) Which is usually clearer: while (condition) { ... } or while (true) { if (condition) break; }?
// @answer The explicit condition form is usually clearer when the exit rule is known up front.
// @answer while (true) with break is fine when the exit depends on logic inside the loop body.
// @quiz (INTERVIEW) What parameter-like value controls when while(number < 15) stops?
// @answer The boolean condition number < 15 controls the loop; it stops when that expression becomes false.
//
// @quiz (INTERVIEW TRAP) In if(number <= 5), is 5 skipped or printed?
// @answer 5 is skipped because <= is inclusive, and continue jumps to the next iteration before the plain number print.
//
// @quiz (OCJP) What is passed to println in System.out.println("Skipping number " + number)?
// @answer The concatenation creates one String argument, such as "Skipping number 6", and println prints that String with a newline.

// @quiz (INTERVIEW, EASY) Where do the declaration and the update of the counter go in a while loop?
// @option The counter is declared and initialised before the loop, and updated inside the loop body. [correct]
// @option The counter is declared in the while header, exactly as it would be in a for loop.
// @option The counter is updated inside the condition, for example while (j++ <= 5).
// @option Java updates the counter automatically after each iteration.
// @explain A while header holds only a boolean condition, so unlike a for loop it has no initialisation or update section. The counter must be prepared before the loop and changed inside the body, otherwise the condition never becomes false.
// @why B: There is no initialisation part in a while header; only the condition is written there.
// @why C: The condition is a test, not the place for the required update; changing it there also changes the test itself.
// @why D: Java never updates loop variables automatically, which is exactly why a missing update causes an infinite loop.

// @quiz (OCJP, MEDIUM) How many times does the body of this loop execute?
// @code int j = 10;
// @code while (j <= 5) {
// @code     System.out.println(j);
// @code     j++;
// @code }
// @option Zero times, because the condition is tested before the body and is already false. [correct]
// @option Once, because a while loop always runs its body at least once.
// @option Forever, because the condition is never tested again once j is above the bound.
// @option The code does not compile, because j is declared outside the loop.
// @explain A while loop tests its condition first, so when the condition is false from the start the body is skipped entirely and control continues after the loop. This is the "never-executing loop" case.
// @why B: Running the body at least once is the behaviour of a do-while loop, not a while loop.
// @why C: The condition is re-tested every time, and it is false on the very first test.
// @why D: Declaring the counter before the loop is exactly what a while loop requires.

// @quiz (INTERVIEW, MEDIUM) Which statement about while (true) is correct?
// @option It repeats until something inside the body ends it, such as break, return or an exception. [correct]
// @option It does not compile, because the condition must be a variable rather than a literal.
// @option It runs exactly one iteration, because true is only tested once.
// @option It must contain a continue statement, otherwise it is a syntax error.
// @explain while (true) is a deliberate infinite loop whose condition never becomes false. It is a common "loop until done" pattern, and the exit has to come from inside the body.
// @why B: A boolean literal is a valid condition, and while (true) compiles.
// @why C: The condition is re-tested before every iteration and stays true, so it does not stop after one pass.
// @why D: continue only skips the rest of the current iteration; the statements that actually end the loop are break and return.

// @quiz (INTERVIEW TRAP, MEDIUM) In this file's loop, is the value 5 printed as a bare number?
// @option No, because the test number <= 5 includes 5, and continue skips the rest of that iteration. [correct]
// @option Yes, because continue only applies to even numbers.
// @option Yes, because <= stops just below 5 and lets 5 through to the plain print.
// @option No, because continue exits the loop entirely before 5 is reached.
// @explain The test number <= 5 is inclusive, so 1 through 5 all take the continue branch and print the Skipping message instead of the bare number. The first bare number printed is 6.
// @why B: There is no test on even or odd numbers here; every value up to and including 5 is skipped.
// @why C: <= is inclusive, so 5 satisfies the condition and is skipped along with 1 to 4.
// @why D: continue skips only the current iteration; it is break that leaves the loop.

// @quiz (INTERVIEW, EASY) When is a while loop usually a better choice than a for loop?
// @option When the number of iterations is not known in advance and the loop depends on a condition that changes. [correct]
// @option When the exact number of iterations is known before the loop starts.
// @option When the loop must run at least once whatever the condition says.
// @option When the counter needs to be initialised inside the loop header.
// @explain A while loop keeps only the condition in its declaration, which suits sentinel-controlled and input-reading loops where the count is unknown. A for loop is preferred when the count is known up front.
// @why B: A known iteration count is the case where a for loop fits better, because its setup stays in one line.
// @why C: Running at least once regardless of the condition is the job of a do-while loop.
// @why D: A while header holds only the condition, so there is nowhere to initialise a counter in it.

// @quiz (OCJP, HARD) In this loop, which values reach the final System.out.println(number)?
// @code int number = 0;
// @code while (number < 15) {
// @code     number++;
// @code     if (number <= 5) {
// @code         System.out.println("Skipping number " + number);
// @code         continue;
// @code     }
// @code     if (number >= 10) {
// @code         System.out.println("Skipping number " + number);
// @code         break;
// @code     }
// @code     System.out.println(number);
// @code }
// @option 6, 7, 8 and 9 [correct]
// @option 1, 2, 3, 4 and 5
// @option 6, 7, 8, 9 and 10
// @option 5, 6, 7, 8, 9 and 10
// @explain Values 1 to 5 are caught by the first test, print the Skipping message and continue, and 10 is caught by the second test and breaks. Only 6, 7, 8 and 9 fall through both tests to the plain println.
// @why B: Those values print the Skipping message and continue, so they never reach the bare print.
// @why C: 10 prints the Skipping message and then breaks, so it is not printed as a bare number.
// @why D: 5 is skipped by the <= 5 test and 10 is stopped by break, so neither reaches the final print.

// @quiz (INTERVIEW, EASY) Which loop always executes its body at least once?
// @option do-while, because it tests the condition after the body. [correct]
// @option while, because it re-tests the condition after every iteration.
// @option for, because its initialisation always runs before the condition.
// @option The enhanced for loop, because it visits each element in turn.
// @explain A do-while loop checks its condition after the body has run, so the body executes once even when the condition is false from the start. while and for test before the body and may run it zero times.
// @why B: A while loop tests first, so a false condition means the body never runs.
// @why C: The initialisation of a for loop runs once, but the body is still skipped when the condition is false.
// @why D: An enhanced for loop runs zero times when the array or collection is empty.

// @quiz (OCJP, MEDIUM) What happens when this code runs?
// @code int j = 1;
// @code while (j <= 5) {
// @code     System.out.println(j);
// @code }
// @option It prints 1 again and again and never stops, because the condition stays true. [correct]
// @option It prints 1, 2, 3, 4 and 5 and then stops normally.
// @option It does not compile, because the body must change the loop variable.
// @option It prints nothing, because the condition is false from the start.
// @explain The body never changes j, so j stays 1 and j <= 5 remains true for ever. Every while loop depends on the body updating its counter.
// @why B: Nothing increments j, so the loop never reaches 5 and never ends.
// @why C: Java does not require the body to modify the loop variable; the code compiles but loops for ever.
// @why D: The condition is true when j is 1, so the body does run; it simply never stops.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int j = 10;
// @code do {
// @code     System.out.println("body");
// @code } while (j < 5);
// @option body, printed once, because a do-while tests its condition after the body. [correct]
// @option nothing, because j < 5 is false.
// @option body printed repeatedly, because the condition is false.
// @option It does not compile, because the condition is false.
// @explain A do-while runs its body first and tests the condition afterwards. Even though j < 5 is false from the start, the body has already executed once.
// @why B: that is the behaviour of a while loop, which tests before the body.
// @why C: the false condition ends the loop after the first pass.
// @why D: a condition that is false at runtime is perfectly legal.

// @quiz (OCJP, HARD) What is wrong with this loop?
// @code int j = 1;
// @code while (j <= 5) {
// @code     System.out.println(j);
// @code }
// @option It never ends, because j is never changed inside the body. [correct]
// @option It ends after five iterations.
// @option It does not compile, because j is declared outside the loop.
// @option It prints nothing, because the condition is false.
// @explain A while header has no update step, so the body must change the counter. Since j stays 1, the condition remains true and the loop never stops.
// @why B: the condition never becomes false, so it cannot stop after five passes.
// @why C: declaring the counter before the loop is exactly how while loops are written.
// @why D: 1 <= 5 is true, so the body runs and prints.

// @quiz (INTERVIEW TRAP, HARD) What is the effect of this loop?
// @code int j = 0;
// @code while (j < 5) {
// @code     if (j == 2) { continue; }
// @code     j++;
// @code }
// @option It hangs forever, because when j is 2 the continue skips the increment. [correct]
// @option It finishes normally after five increments.
// @option It skips the value 2 and then finishes.
// @option It does not compile, because continue cannot be used in a while.
// @explain When j becomes 2 the continue jumps straight back to the condition, so the j++ below it is never reached. j stays 2 and the loop never ends.
// @why B: the increment is skipped exactly when it is needed most.
// @why C: nothing raises j past 2, so it cannot finish.
// @why D: continue is valid in a while; the problem is where it was placed.

// @quiz (INTERVIEW, MEDIUM) How many times does this loop run?
// @code int j = 1;
// @code int count = 0;
// @code while (j <= 4) { count++; j += 2; }
// @option 2 times, for j = 1 and j = 3. [correct]
// @option 4 times, for j = 1, 2, 3 and 4.
// @option 3 times, for j = 1, 3 and 5.
// @option Once, because j += 2 ends the loop.
// @explain j goes 1, then 3, each time passing j <= 4, and then becomes 5 which fails the test. That is two passes.
// @why B: the step is 2, so the even values are never used.
// @why C: when j is 5 the condition is false, so there is no third pass.
// @why D: the loop continues while the condition holds, which it does for 1 and 3.

// @quiz (INTERVIEW, MEDIUM) When should you prefer a do-while over a while loop?
// @option When the body must run at least once, such as showing a menu before checking the choice. [correct]
// @option When the number of iterations is known in advance.
// @option When the condition must be tested before the body.
// @option When the loop must be able to run zero times.
// @explain do-while tests after the body, so the body always executes at least once. That suits prompts and menus, where something must be shown before the response can be tested.
// @why B: a known count is the strength of a for loop.
// @why C: testing first is what a while loop does.
// @why D: running zero times is impossible with do-while, which is the point of the question.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int i = 10;
// @code while (i < 5) {
// @code     System.out.print(i + " ");
// @code     i++;
// @code }
// @code System.out.println("done");
// @option done, and nothing else, because the condition is false before the first pass. [correct]
// @option 10, then done, because the body always runs once.
// @option 10 11 12 ... and the program never stops.
// @option Nothing at all, not even done.
// @explain A while loop tests first, so i < 5 is already false, the body is skipped and done still prints.
// @why B: the condition fails before the body, so 10 is never printed.
// @why C: the body never runs, so i is never printed and never incremented.
// @why D: the println after the loop is outside it, so it still runs.
// @quiz (OCJP, HARD) What happens when this code runs?
// @code int i = 0;
// @code while (i < 3);
// @code {
// @code     System.out.println("body " + i);
// @code     i++;
// @code }
// @option The loop hangs forever, and the block after it is never part of the loop. [correct]
// @option It prints body 0, body 1, body 2 and then stops.
// @option It does not compile, because a while loop must have a body.
// @option It prints body 0 exactly once.
// @explain The semicolon after while (i < 3) is the loop body, so i never changes and it spins forever.
// @why B: the loop never enters that block, so nothing is printed.
// @why C: an empty statement is a legal body, so the file compiles.
// @why D: the block is outside the loop and is reached only if the loop ends, which it does not.
// @quiz (OCJP, MEDIUM) What does this loop print?
// @code int n = 1234;
// @code while (n > 0) {
// @code     System.out.print(n % 10 + " ");
// @code     n = n / 10;
// @code }
// @option 4 3 2 1, because n % 10 takes the last digit and n / 10 removes it. [correct]
// @option 1 2 3 4, because the digits come out in their original order.
// @option 1234, because the whole number is printed on every pass.
// @option 4 3 2 1 0, because the loop also runs when n is 0.
// @explain n % 10 gives the last digit and n / 10 drops it, so 1234 comes out as 4, 3, 2, 1.
// @why B: the last digit is the easiest one to reach, so the order is reversed.
// @why C: the loop prints n % 10, not n itself.
// @why D: the test is n > 0, so the pass with n equal to 0 never happens.
// @quiz (OCJP, HARD) What happens when this loop runs?
// @code int count = 0;
// @code int sum = 0;
// @code while (count < 4) {
// @code     if (count % 2 == 0) { continue; }
// @code     sum += count;
// @code     count++;
// @code }
// @option It never ends, because the continue at count = 0 skips the increment. [correct]
// @option It ends with sum equal to 4.
// @option It ends with sum equal to 6.
// @option It prints sum four times and then ends.
// @explain At count 0 the test is true, so continue jumps back before the increment and count never moves.
// @why B: sum is never changed, because the increment line is never reached.
// @why C: the sum += count line is below the continue and is never executed.
// @why D: there is no print statement anywhere inside this loop.
// @quiz (OCJP, MEDIUM) What does this loop print?
// @code int i = 0;
// @code while (i < 10) {
// @code     if (i == 4) { break; }
// @code     System.out.print(i + " ");
// @code     i++;
// @code }
// @option 0 1 2 3, because break leaves the loop as soon as i is 4. [correct]
// @option 0 1 2 3 4, because the value 4 is printed before the break.
// @option 0 1 2 3 4 5 6 7 8 9, because break only skips one pass.
// @option 4, because break prints the value that stopped the loop.
// @explain break exits at once, and the test comes before the print, so 4 is never printed.
// @why B: the break happens before the print on that pass.
// @why C: break ends the whole loop, it does not skip a single iteration.
// @why D: break does not print anything.

public class WhileLoops {

    /* while loop simply has expression

    While loop code format :-

    while(expression)  {
    // block of statements

    } */

    /*
Unlike the for loop, there is no place for the declaration of a temporary variable, in
    the declaration of the while statement.
    So we have to declare any iteration variables, outside the loop.
 */

    public static void main(String[] args) {
/*        int j = 1; // In while loop the initialisation of the variable happens outside the while loop

        while (j <= 5) { // condition
            System.out.println(j);
            j++;   // Iteration
        }

        // Another common way to program while loop is :-

        while(true){ // If break condition is not put, it will lead to infinite loop condition
            if(j > 5){ // Here in this code, we are breaking the loop, as soon as the condition is met.
                break;
            }
        }*/

        int number = 0;

        while(number < 15){
            number++;

            if(number <= 5){
                System.out.println("Skipping number " + number);
                continue;
            }

            if(number >= 10){
                System.out.println("Skipping number " + number);
                break;
            }

            System.out.println(number);
        }

    }

// while statement with continue and break: 'continue' skips to the next iteration, 'break' exits the loop entirely.

}

