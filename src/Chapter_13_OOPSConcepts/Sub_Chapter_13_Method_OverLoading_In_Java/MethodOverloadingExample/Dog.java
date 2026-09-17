package Chapter_13_OOPSConcepts.Sub_Chapter_13_Method_OverLoading_In_Java.MethodOverloadingExample;

// Parameter notes (what each argument means and how the parameter list matters):
// - bark() has an empty parameter list, so it means "bark once" with no caller-controlled repeat count.
// - bark(int number) uses number as the repeat count; choose a positive whole number for how many "woof" lines you want.
// important: bark() and bark(int number) are OVERLOADS because the parameter COUNT is different.
// remember: the compiler chooses bark() or bark(int) at compile time from the arguments in the call.
// careful: adding a different return type to bark(int number) would not create another overload; the parameter list must differ.
// - If a child class wanted to override bark(int number), it would need the identical int parameter list.

// @quiz (INTERVIEW) Why are bark() and bark(int number) overloads?
// @answer They have the same method name but different parameter counts: zero parameters versus one int parameter.
// @quiz (INTERVIEW TRAP) Would bark(int number) and int bark(int number) be valid overloads?
// @answer No. A return type change alone is not enough; overloading requires a different parameter list.

public class Dog {

    /*
     * Bark method has same name but different parameters
     *
     * */

    public void bark(){
        System.out.println("woof");
    }

    public void bark(int number){
        for(int i = 0; i < number; i++){
            System.out.println("woof");
        }
    }
}
