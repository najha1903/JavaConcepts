package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;

/*
* The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.
*
*  */
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

