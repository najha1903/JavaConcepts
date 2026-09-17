package Chapter_13_OOPSConcepts.Sub_Chapter_8_Plain_Old_Java_Objects.POJOExample;

// Parameter notes (what each argument means and how to choose it):
// - Student(String id, String name, String dateOfBirth, String classList): id identifies the student, name is the student's display name, dateOfBirth is birth-date text, and classList is the course list text. Choose all four values in this exact order; this code stores them directly without validation.
// - setId(String id): id is the replacement identifier. Choose the new unique or meaningful student id expected by the rest of the program.
// - setName(String name): name is the replacement display name. Choose the exact text that should appear in output.
// - setDateOfBirth(String dateOfBirth): dateOfBirth is the replacement birth-date text. Choose a consistent date format such as the format already used by callers.
// - setClassList(String classList): classList is the replacement course list. Important: setters replace the old value, so pass oldValue + extra text if you want to append.
// - this.id = id and similar assignments copy parameters into fields; pitfall: the parameter shadows the field, so this.field means the object's stored data.
// - Getters and toString() take no parameters because they read and format the current object state.
//
// @quiz (INTERVIEW) What are the four constructor parameters of Student used for?
// @answer id, name, dateOfBirth, and classList initialize the matching fields of the new Student object.
// @quiz (INTERVIEW TRAP) What is the warning when calling setClassList(String classList)?
// @answer The parameter replaces the whole classList field; it does not automatically append to the existing value.
// @quiz (OCJP) Why is this.id required in this.id = id?
// @answer The parameter id shadows the field id, so this.id identifies the instance field while id identifies the parameter.
// @quiz (INTERVIEW) How should a caller choose the dateOfBirth parameter?
// @answer Pass the birth-date text in the format the application expects, because this class stores it as a String without validation or conversion.

public class Student {

// All the instance fields related to Student class have been mentioned here
    private String id;
    private String name;
    private String dateOfBirth;
    private String classList;


 // Argument constructor explicitly mentioned to create instance(object) and assign values to the instance fields(variables) of the objects(instances)
    public Student(String id, String name, String dateOfBirth, String classList) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.classList = classList;
    }

  // Getters and setters created, to set / update and retrieve instance variables data

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getClassList() {
        return classList;
    }

    public void setClassList(String classList) {
        this.classList = classList;
    }



    /* The toString() method is a special method in Java.
    The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way.
    The toString() method can be implemented in any class, and doing this helps to print out the current state of the object.
 * */


    /* 1) Anytime a statement starts with an at symbol, this is called an annotation.
       2) Annotations are a type of metadata.
       3) Metadata is a way to formally describe additional information about the code.
       4) Annotations are more structured and have more meaning than comments.
       5) This is because they can be used by the compiler or other types of pre-processing functions,
          to get information about the code.
       6) Metadata doesn't affect how the code runs so this code will still run with or without the annotation.
     */


    // The most common annotation in Java, commonly used
    // It tells the compiler that this a special type of method in Java, an overridden method

    @Override
    public String toString() {
        return "Student{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", dateOfBirth='" + dateOfBirth + '\'' +
                ", classList='" + classList + '\'' +
                '}';
    }
}
