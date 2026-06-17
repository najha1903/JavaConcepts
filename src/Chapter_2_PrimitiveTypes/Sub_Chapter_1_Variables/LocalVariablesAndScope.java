package Chapter_2_PrimitiveTypes.Sub_Chapter_1_Variables;
// A local variable is one declared inside a method, constructor, or block. It only exists (is "in scope") within that block.
// Scope describes the region of code where a variable is accessible. 'In scope' = accessible. 'Out of scope' = the variable no longer exists and cannot be used.
// Best practice: Declare and initialise a variable in the same place if possible. Declare variables in the narrowest scope possible.
// Rule: Inner (nested) blocks CAN access variables from their outer block. But outer blocks CANNOT access variables declared inside an inner block.
// For loop scope: the counter variable declared in 'for(int i = ...)' is LOCAL to the loop — it does not exist outside the loop.
// If statement scope: a variable declared inside an if block is NOT accessible in the else block or outside the if structure.
// Switch scope is different: a variable declared in one case IS accessible in later cases (cases further down), but NOT in cases that come before it, and NOT outside the switch.

/*
  LOCAL VARIABLE SCOPE EXAMPLES

  --- FOR LOOP SCOPE ---
  Variables declared inside the for loop init section are local to the loop only.

  {  // outer block (e.g., a method)
    for (int i = 1; i <= 5; i++) {
      System.out.println(i);   // OK: i is accessible inside the loop
    }
    System.out.println(i);     // ERROR: i is out of scope here — it only existed during the loop
  }

  --- IF STATEMENT SCOPE ---
  Variables declared inside an if block are NOT accessible in else or outside the if.

  public static void aMethod(int counter) {
    if (counter > 0) {
      int i = 10;                 // i is in scope only inside this if block
    } else {
      System.out.println(i);     // ERROR: i is out of scope here
    }
    System.out.println(i);       // ERROR: i is out of scope here too
  }

  --- SWITCH SCOPE (special rule!) ---
  In a switch, a variable declared in one case IS accessible to later cases (cases that come after),
  but NOT to earlier cases, and NOT outside the switch.

  public static void aMethod(int value) {
    switch (value) {
      case 1:
        int i = 10;               // i declared here, accessible from this point downwards in the switch
        break;

      case 2:
        System.out.println(j);   // ERROR: j is declared in case 3 (later), so case 2 cannot see it
        break;

      case 3:
        int j = 10;               // j declared here
        System.out.println(j);   // OK: j is accessible from this point
        break;

      default:
        i = value;                // OK: i was declared in case 1 (before default)
        System.out.println(i);   // OK: accessible
        System.out.println(j);   // OK: j was declared in case 3 (before default)
        break;
    }
    System.out.println(i);        // ERROR: i is out of scope outside the switch
    System.out.println(j);        // ERROR: j is out of scope outside the switch
  }
*/
public class LocalVariablesAndScope {

    /*
    * Local variables are always in the scope in the block they are declared.
    *
    * They are also in scope for any nested blocks or blocks contained within the outer block
    *
    * Local Variables are always out of scope for outer blocks or the containing blocks they are declared in.
    *
    * */

    public static void main(String[] args)

     // Starts an outer block - method block. It is also the containing block in this instance
    {

        int firstVariable = 5;  // firstVariable is a local variable. It is available to use in the current outer block as well the inner block

        int secondVariable = 10; // secondVariable is a local variable. It is available to use in the current outer block as well the inner block

        if(firstVariable > 0)

        // Flow statement block starts inner block

        // Inner block code has access to outer block's variables
        {
            int thirdVariable = 9; // thirdVariable is only available to be used in the inner code block.


            System.out.println(secondVariable);
        }

      //  System.out.println(thirdVariable); // Compile Error :- Cannot resolve symbol 'thirdVariable'
                                           // Outer code block cannot access the thirdVariable as third variable is out of scope for second code block

    }

}
