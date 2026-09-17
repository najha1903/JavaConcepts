package Chapter_13_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;

/*
* The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.
*
*  */
// @quiz (INTERVIEW) What does super.printMethod() pass as arguments, and which method body does it select?
// @answer It passes no arguments and explicitly selects the parent class printMethod() implementation.
// @quiz (INTERVIEW TRAP) Why is super important in the overriding printMethod() even though there are no parameters?
// @answer Without super, a call to printMethod() from inside the override would call itself recursively instead of the parent method.
// @quiz (OCJP) What is stored in the args parameter of main(String[] args)?
// @answer The JVM stores command-line arguments in args, though this example ignores them.

public class SuperKeywordUseExample { // parent class also known as super class

    public void printMethod() {
        System.out.println("Printed in SuperClass.");
    }
}

    class SubClass extends SuperKeywordUseExample{ // subclass also known as child class

    // overrides methods from the parent class
        @Override
        public void printMethod() {
            super.printMethod(); // calls the method in the SuperClass (parent)
            // Without adding the keyword super in this case, it would end up being a recursive call.
            // What that means is that the method would call itself forever, or until memory is fully used, crashing the program. That's why we need the super keyword - so that we can call a method with the same name from a parent class.
            System.out.println("Printed in SubClass.");
        }
    }

    class MainClass {

        public static void main(String[] args) {
            SubClass s = new SubClass();
            s.printMethod();
        }
    }

