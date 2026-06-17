package Chapter_2_PrimitiveTypes.Sub_Chapter_1_Variables;

/*

  A local variable is called local because it is available for use by the code block in which it was declared.
  It is also available to code blocks that are contained by a declaring block.

  Local Variables are a way to store and manipulate temporary data

  Scope - 1) Scope describes the accessibility of a variable.
          2) "In scope" means the variable can be used by an executing block or any nested blocks.
          3) "Out of scope" means the variable is no longer available and cannot be used

   Scope best practice

   1) It is considered best practice to declare and initialise variable in the same place, if possible.
   2) It is also advised to declare variables in the narrowest scope possible.

Local variables and for statement:

The variable i that is declared, isn't accessible outside the loop.
This is because any variables declared in the init section are local to the loop, meaning, they exist
and are accessible in memory only while the loop is executing, and only to the loop code block.

   {  // Starts on outer block = for example a method block

    for (int i = 1; i <=5 ; i++){   // declaration and initialisation of the i variable in for loop declaration
      The variable i is accessible inside the for loop scope (e.g. System.out.println(i) works here)
    }
    System.out.println(i);    // ERROR|! is is out of the scope
   }

Local variables and if statement:

Local variables declared in an if statement block are not accessible outside of that block.
This also includes other parts of the if statement, like the else if block or the else block.

     public static void aMethod(int counter) {

     if(counter > 0) {
     int i = 10;                // The variable i is only in scope for the block declared in the first part of the if statement.
     }
     else{
     System.out.println(i);   // ERROR : i is out of scope
     }
     System.out.println(i); // ERROR : i is out of scope
     }

Declaring variables in a switch statement block:

The switch statement is different from the if-then-else statement block.
The case block has different access for local variables than the if-else block.
In the switch statement, a variable declared in one case label code block can be accessed in another case label code block,
but only if that block is after the declaration and initialisation of the variable.

       public static void aMethod(int counter){

       switch(value) { // Curly braces are optional in switch statement

       case 1:        // Start of code block for case 1
       int i = 10;    // Variable i declared in case 1 is accessible in the default block, as default comes after case 1's declaration
       break;         // End of code block for case 1

       case 2: -- accessing j here causes a compile ERROR (j is declared later in case 3)
       System.out.println(j); // ERROR, j is out of scope of case 2, as variable j is declared in case 3, which is after case 2, hence case 2 cannot access variables declared in case 3
       break;

       case 3: -- j is declared here, accessible from this point in the switch block
       int j = 10;
       System.out.println(j);
       break;

       default: -- can access i (case 1) and j (case 3) since both are declared before this block
        i = value;              // this is ok  // the i variable, even though is declared in case 1, can be accessed by default block as default block is after case 1
        System.out.println(i);  // this is ok
        System.out.println(j);  // as variable j is declared in case 2, hence it can be accessed by default block as default block is after case 2
        break;

       }
       System.out.println(i);  // ERROR: i is out of the scope outside the switch
       System.out.println(j);  // ERROR: j is out of the scope outside the switch
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
