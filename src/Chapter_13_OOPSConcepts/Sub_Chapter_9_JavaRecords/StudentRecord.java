package Chapter_13_OOPSConcepts.Sub_Chapter_9_JavaRecords;
// Java Records (introduced in Java 14 as preview, standard in Java 16) are a concise way to create immutable data carrier classes.
// Instead of writing a class with fields, constructor, getters, and toString — a record generates ALL of that automatically.
// 'record' keyword replaces 'class'. The fields are declared in the record header (parentheses after the name).
// ALL fields in a record are automatically: private and final (cannot be changed after construction).
// Java auto-generates for every record: a canonical constructor, accessor methods (field name only, no 'get' prefix), equals(), hashCode(), and toString().
// Accessor method naming: for a field 'name', the accessor is name() NOT getName() — this differs from POJO convention.
// Records have NO setter methods — they are immutable by design. You cannot change a record's data after creation.
// Use records when you need a simple, immutable data container. Use a POJO/class when you need to modify the data later.
/*
    The Record Type

  1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.
  2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive.
     Java calls them "plain data carriers".
  3) The record is a special class that contains data that's not meant to be altered.
  4) In other words, it seeks to achieve immutability for the data in its members.
  5) It contains only the most fundamental methods, such as constructors and accessors (or getters).
     The developers don't have to write or generate any of this code.
  6) The record Class doesn't have or support setter methods, but the other functionality,
     calling the constructor with four parameters and printing the data out,
     is implicitly part of the record.

*/



/*
  1) A Record Class looks a lot like a normal Class, it also starts with a public access modifier,
     but instead of the class keyword, it's using the record keyword.
  2) But different to a class, in the below code, there are a set of parentheses
     after the name of Record class Name.
  3) The part that's in parentheses, is called the record header.
  4) Similar to a constructor, we can set up some parameters within those parentheses.
  5) After setting up the required necessary parameters within the parentheses of the Record type class, we don't have to do anything.
     Everything else is handled internally.
  6) The part that's in parentheses, is called the record header.
     i)   The record header consists of record components, a comma-delimited list of components.
     ii)  For each component in the header, Java generates: A field with the same name and declared type
          as the record component. It sets up fields for us as we have them in the parentheses.
     iii) These become the fields of the record. The field is declared private and final.
     iv)  Simply put, it means the field can't be modified.
     v)   The field is sometimes referred to as a component field. Java generates a toString method that prints
          out each attribute in a formatted String.
     vi)  In addition to creating a private final field for each component, Java generates a public accessor method for each component.
          This method has the same name and type of the component, but it doesn't have any kind of special
          prefix like get or is.

 */


/*  POJO vs Record

    i) If the objective is to modify data on the class, record is not intended and suited for this purpose.
       The code generation options for the POJO works well for the above mentioned objective.
    ii) But if the objective is reading a whole lot of records from a database or file source and simply passing this
        data around, then the record type Class serves the objective.




*/

// Parameter notes (what each argument means and how to choose it):
// - record StudentRecord(String id, String name, String dateOfBirth, String classList): id, name, dateOfBirth, and classList are record components; each becomes a canonical constructor parameter, a private final field, and an accessor method with the same name.
// - id identifies the student record. Choose a stable identifier String that callers can use to distinguish students.
// - name is the student's display name. Choose the exact text that should appear in generated toString() output and name() accessor results.
// - dateOfBirth is birth-date text. Choose a consistent date format because this record stores the String directly without validation or parsing.
// - classList is the course or courses text. Choose the complete course-list value at construction time; remember records have no setters, so it cannot be changed later.
// - new StudentRecord(id, name, dateOfBirth, classList) arguments are matched by position. Important trap: all four components are Strings, so swapping arguments can compile but create an incorrect record.
// - Accessor calls id(), name(), dateOfBirth(), and classList() take no parameters because they return the final component values copied by the canonical constructor.
//
// @quiz (OCJP) In record StudentRecord(String id, String name, String dateOfBirth, String classList), what does each component generate automatically?
// @answer Each component becomes a canonical constructor parameter, a private final field, and a public accessor method with the same name.
// @quiz (INTERVIEW) How should a caller choose the classList component value for a StudentRecord?
// @answer Pass the complete course-list String the record should keep, because records are immutable and provide no setter to change it later.
// @quiz (INTERVIEW TRAP) Why is swapping name and dateOfBirth a dangerous trap in new StudentRecord(...)?
// @answer Both are Strings, so the code may still compile, but the record will store the student's name in the dateOfBirth component and the date in the name component.
// @quiz (OCJP) What is the accessor method for the name component?
// @answer The accessor is name(), not getName().

public record StudentRecord(String id, String name, String dateOfBirth, String classList) {
}
