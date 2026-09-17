package Chapter_1_Java_Introduction.Sub_Chapter_2_Java_Intro_CodingChallenge;

/*
 * Challenge: Print your name, age, and developer status on separate lines using System.out.println.
 * Then print all three values on one line using string concatenation.
 *
 * Practises :- calling System.out.println, and joining text with the + operator.
 * Note :- println ends the line for you, but concatenation does not add spaces, so you have to
 * include them yourself, for example "Navneet " + 41 gives Navneet 41 and not Navneet41.
 * Expected output :- three lines first, then one line holding all three values.
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
