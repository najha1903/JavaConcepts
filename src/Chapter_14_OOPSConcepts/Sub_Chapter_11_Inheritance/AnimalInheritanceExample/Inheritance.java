package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;
// Inheritance is a mechanism for code reuse — a child class inherits all accessible fields and methods from its parent.
// In Java, a class can only extend ONE direct parent (single inheritance), but inherits all the way up the hierarchy.
// The 'extends' keyword establishes the parent-child relationship: class Dog extends Animal
// "IS-A" relationship: Dog IS-A Animal. This means a Dog object can be used ANYWHERE an Animal is expected.
// When a Dog object is passed to a method expecting an Animal, Java accepts it — because Dog is a type of Animal.
// Java uses DYNAMIC DISPATCH (polymorphism at runtime) to call the correct overridden method.
//   Example: doAnimalStuff(dog, "fast") — even though the parameter type is Animal, Java calls Dog's makeNoise() and move() methods.
// Every class in Java implicitly extends Object if no other class is specified. Object is the root of the class hierarchy.
// Inheritance hierarchy example:
//   Object (root of all classes)
//     +-- Animal
//           +-- Dog
//           +-- Fish
/*
  Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child
  hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.
*
*
* */

/*
*                                      Animal (Base Class)
*                                        |
*                                        |
*                                    Vertebrates (Sub Class of Animal)
*                                        |
*                         _______________|_______________
*                         |                             |
*                         |                             |
*                    Warm Blooded                   Cold Blooded
*                         |                             |
*                _________|__________          _________|__________
*                |                  |          |                  |
*                |                  |          |                  |
*              Mammal              Bird       Fish             Reptiles
*                |                             |
*     ___________|__________         __________|__________
*     |                    |         |                   |
*     |                    |         |                   |
*    Dog                  Cat      Salmon              GoldFish
*
* Each box on this diagram represents a Class
*
* The most generic, or base class, starts at the top of the hierarchy.
*
* Every class below it is a subclass.
*
* A baseclass or parent class can have multiple children.
*
* A child can only have one direct parent in Java, but it will inherit from its parents class's parents and so on.
*
* All subclasses can execute methods even though the code is declared on the parent class.
*
* The code doesn't have to be duplicated in each subclass.
*
* We can use code from the parent. Or we can change that code for the subclass.
*
*
 */


public class Inheritance {

    public static void main(String[] args) {

        Animal animal = new Animal("Generic Animal", "Huge", 400);
       doAnimalStuff(animal,"slow");


       Dog dog = new Dog();
       // Since Dog inherits from animal,

        // A dog object can be used as the method argument even though the type was declared as an animal.
        // It works because dog inherits from animal, it's a type of animal
        // A dog instance can be passed to any method that takes an animal

       doAnimalStuff(dog,"fast");


       /*

       If only super() is called from the Dog() constructor then :-

          Output :-
       *  null makes some kind of noise
       *  null moves fast
       *  Since Dog() constructor called the super() with no arguments passed,
       *  so nothing got set on the Animal Class
       *  but dog has inherited all of animal's attributes.
       *  The values have the default values for their type because there is no way,
       *  to pass any data to these fields on dog
       *
       * */

/*        If super("Mutt","Big", 50) is called from the Dog() constructor then :-

          Output :-
       *  Mutt makes some kind of noise
       *  Mutt moves fast
       *  Since the Dog constructor calls the parameterized Animal constructor,
          all values are stored in the Animal class fields.
       *
*/

        Dog dog1 = new Dog("Yorkie",15);  // Constructor chaining is used in this object creation
        doAnimalStuff(dog1,"Fast");

        Fish goldie = new Fish("GoldFish",0.25,2,5);
        doAnimalStuff(goldie,"fast");


    }

    public static void doAnimalStuff(Animal animal, String speed){
        animal.makeNoise();
        animal.move(speed);
        System.out.println(animal);
        System.out.println("*************************************************************************************");
        // Java checks the actual object type and uses its toString() method. If that class doesn't have toString(), it uses the parent class's version.


    }


}
