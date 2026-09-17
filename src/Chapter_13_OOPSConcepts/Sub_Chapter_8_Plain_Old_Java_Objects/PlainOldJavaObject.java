package Chapter_13_OOPSConcepts.Sub_Chapter_8_Plain_Old_Java_Objects;
// A POJO (Plain Old Java Object) is a simple class whose primary purpose is to hold data.
// POJOs are the workhorses of Java data modelling — databases, APIs, and frameworks use them extensively.
// A POJO typically has: private fields, a constructor, getters, setters, and often a toString() method.
// The toString() method is overridden to return a human-readable representation of the object's state — useful for debugging and logging.
// The @Override annotation tells the compiler this method intentionally overrides a parent class method. The compiler checks the signature matches.
// Annotations (@Override, @SuppressWarnings, etc.) are metadata — they provide information to the compiler or tools. They do not change runtime behaviour.
// POJOs are sometimes called: JavaBeans (with stricter rules), Entity (matching a database table), or DTO (Data Transfer Object for passing data between layers).
// Compare POJO with Record (Java 16+): POJO is mutable (you can change its fields via setters). A Record is immutable (no setters, fields are final).
/*
   POJO CONCEPTS

   i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data
   ii)  It's used to house data and pass data between functional classes.
   iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.
   iv)  Many database frameworks use POJO's to read data from, or to write data to databases,files or streams.
   v)   Examples :- i)   A POJO also might be called a bean or a JavaBean.
                  ii)  A JavaBean is just a POJO with some extra rules applied to it.
                  iii) These rules are in place so that Java frameworks have a standard way to manipulate and manage these objects.
                  iv)  A POJO is sometimes called an Entity because it mirrors database entities.
                  v)   Another acronym is DTO for Data Transfer Object. It's a description of an object that can be modeled as just data.




* */

// Parameter notes (what each argument means and how to choose it):
// - This overview class defines no constructors or methods with parameters, so there are no local parameters to pass.
// - POJO parameter pattern to remember: a typical all-arguments constructor receives one value per field, and each setter receives the replacement value for exactly one field.
// - Choose constructor arguments to represent the object's starting state; choose setter arguments to represent later updates. Important: unless validation is coded, setters and constructors usually store the caller's value directly.
// - toString() in a POJO normally has no parameters because it reads the object's current fields and returns a formatted String.
// @quiz (INTERVIEW) In a typical POJO constructor with one parameter per field, how should a caller choose each argument?
// @answer Choose values that represent the initial state of the object, matching the constructor parameter order and types.
// @quiz (INTERVIEW TRAP) If a POJO setter has no validation, what warning applies to its parameter?
// @answer The setter will usually store the argument directly, so callers must avoid invalid, null, or inconsistent values themselves.
// @quiz (OCJP) Why does a POJO getter usually take no parameters?
// @answer A getter reads an existing field from the current object, so the object reference already identifies what data to return.

public class PlainOldJavaObject {
}
