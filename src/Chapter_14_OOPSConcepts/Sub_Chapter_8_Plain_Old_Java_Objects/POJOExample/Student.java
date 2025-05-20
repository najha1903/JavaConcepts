package Chapter_14_OOPSConcepts.Sub_Chapter_8_Plain_Old_Java_Objects.POJOExample;

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


    // The mose common annotation in java which is used
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
