package Chapter_1_Java_Introduction.Sub_Chapter_2_Java_Intro_CodingChallenge;

/*
 * Challenge: Print your name, age, and developer status on separate lines using System.out.println.
 * Then print all three values on one line using string concatenation.
 */
public class HelloWorldVariationChallenge {

    public static void main(String[] args) {
        String name = "Alice";
        int age = 30;
        boolean isDeveloper = true;

        System.out.println(name);
        System.out.println(age);
        System.out.println(isDeveloper);
        System.out.println("Name: " + name + ", Age: " + age + ", Developer: " + isDeveloper);
    }
}
