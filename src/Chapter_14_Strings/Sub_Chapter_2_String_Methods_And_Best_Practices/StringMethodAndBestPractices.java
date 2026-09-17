package Chapter_14_Strings.Sub_Chapter_2_String_Methods_And_Best_Practices;

/*
* ===========================================================================================
*                          STRING METHODS AND BEST PRACTICES
* ===========================================================================================
*
* String is a sequence of characters, which means its characters are ordered and indexed.
* String indexing is 0 - based, so the first character is at index 0 and the last one is at length() - 1.
*
* String methods can be grouped into three categories :-
*
* 1) String Inspection Methods :- These give information about the String, such as its length or the position of a character. For example :- length(), isEmpty(), isBlank(), charAt(), indexOf(), lastIndexOf().
* 2) String Comparison Methods :- These compare the content of the String with another String or CharSequence and return true or false. For example :- equals(), equalsIgnoreCase(), contentEquals(), startsWith(), endsWith(), contains(), regionMatches().
* 3) String Manipulation Methods :- These return a new String after a transformation. For example :- substring(), replace(), replaceAll(), replaceFirst(), concat(), join(), repeat(), indent(), strip(), trim(), toLowerCase(), toUpperCase().
*
* Note :- the original String is never changed, because String is immutable. Every method of the String class
* returns a new String instead of changing the existing one.
*
* ---- Important points to remember ----
*
* 1) isEmpty() vs isBlank() :-
*    isEmpty() returns true only when the length is 0, so a String with only spaces, like "   ", returns false.
*    isBlank() returns true when the length is 0, or when the String has only whitespace characters.
*    Note :- for user input validation, always use isBlank(), otherwise the user can enter spaces and bypass it.
*
* 2) trim() vs strip() (JDK 11+) :-
*    trim() removes only ASCII whitespace, which means characters with a codepoint of 32 or less.
*    strip() is Unicode - aware, so it also removes characters like \u2000 (en quad) and other Unicode spaces.
*    Note :- in JDK 11 or above, prefer strip(), stripLeading() and stripTrailing() over trim().
*
* 3) equals() vs contentEquals() :-
*    equals() returns true only when the other object is also a String.
*    contentEquals() accepts any CharSequence, such as StringBuilder, StringBuffer or CharBuffer.
*    Note :- to compare a String with a StringBuilder, use contentEquals(), because it avoids calling toString() and creating an extra String object on the heap.
*
* 4) replace() vs replaceAll() vs replaceFirst() :-
*    replace() takes a literal value as the target, so it does not treat the target as a Regular Expression.
*    replaceAll() and replaceFirst() take a Regular Expression as the target, so they are slower, because the pattern has to be compiled first.
*    Note :- use replace() for literal replacements, and use replaceAll() or replaceFirst() only when pattern matching is really needed.
*    Pitfall :- in replaceAll(".", "X"), the "." is a Regular Expression which matches ANY character, so every character of the String gets replaced. To replace only the dots, use replaceAll("\\.", "X") or use replace(".", "X").
*
* 5) concat() vs + operator vs join() vs StringBuilder :-
*    concat() joins 2 Strings, but it throws NullPointerException when the argument is null.
*    The + operator is easy to read, and it converts null to the text "null" instead of throwing an exception.
*    String.join() is useful for joining many elements with a delimiter, without writing extra logic for it.
*    StringBuilder should be used when Strings are joined inside a loop.
*    Pitfall :- never join Strings inside a loop using concat() or +, because a new String object gets created every time and the program becomes slow. Use StringBuilder inside the loop instead.
*
* ---- Edge cases to remember ----
*
* 1) substring(length) is valid, it returns an empty String and does not throw an exception.
* 2) substring(0, 0) is valid, it also returns an empty String, because the range has 0 length.
* 3) repeat(-1) throws IllegalArgumentException, because the count cannot be negative.
* 4) concat(null) throws NullPointerException, but "hello" + null gives "hellonull".
* 5) indexOf() and lastIndexOf() return -1 when the value is not found.
* 6) The end index of substring() is exclusive, so substring(3, 5) returns 2 characters.
*
* */

// @quiz (INTERVIEW) What range is valid for the index parameter in text.charAt(index)?
// @answer The valid range is 0 to length() - 1. Any index outside that range throws StringIndexOutOfBoundsException.
//
// @quiz (INTERVIEW) In text.indexOf("l", 3), what does the 3 parameter do?
// @answer It tells indexOf to start the search at index 3, which is useful to skip the earlier matches.
//
// @quiz (OCJP) In substring(3, 5), which index is included and which one is excluded?
// @answer The index 3 (beginIndex) is included and the index 5 (endIndex) is excluded, so the result has 2 characters.
//
// @quiz (OCJP) What does "Hello".substring(5) return?
// @answer It returns "" (an empty String). An index equal to length() is valid, so no exception is thrown.
//
// @quiz (OCJP) Does "abc".substring(0, 0) throw an exception?
// @answer It does not throw an exception. It returns "" (an empty String), because beginIndex and endIndex are the same, so the range has 0 length.
//
// @quiz (INTERVIEW TRAP) What is the output of: String s = "123.456"; s.replaceAll(".", "X")?
// @answer The output is XXXXXXX, 7 X characters, because "." in a Regular Expression matches ANY single character. To replace only the dots, use replaceAll("\\.", "X") or replace(".", "X").
//
// @quiz (OCJP) What happens when "ABC".repeat(-1) is called?
// @answer It throws IllegalArgumentException, because the repeat count cannot be negative.
//
// @quiz (INTERVIEW TRAP) What happens when "hello".concat(null) is called?
// @answer It throws NullPointerException, because concat() does not accept null. In contrast, "hello" + null gives "hellonull", because the + operator converts null to the text "null".
//
// @quiz (INTERVIEW) What is the difference between isEmpty() and isBlank()?
// @answer isEmpty() returns true only when the length is 0. isBlank() returns true when the length is 0 or when the String has only whitespace characters. Use isBlank() for user input validation.
//
// @quiz (INTERVIEW) How does strip() differ from trim()?
// @answer trim() removes only ASCII whitespace, which means characters with a codepoint of 32 or less. strip() uses Character.isWhitespace(), so it also removes Unicode whitespace such as \u2000. Prefer strip() in JDK 11 or above.
//
// @quiz (INTERVIEW) What is the difference between equals() and contentEquals()?
// @answer equals() returns true only when the other object is also a String. contentEquals() accepts any CharSequence, such as StringBuilder or StringBuffer, so it avoids calling toString() and creating a temporary String.
//
// @quiz (INTERVIEW) When should replace() be used instead of replaceAll()?
// @answer Use replace() when the target is a literal value, because it does not compile a Regular Expression and is faster. Use replaceAll() only when the target is really meant to be a pattern.
//
// Why immutability is the thing to hold on to :-
// String s = "Java";
// s.concat(" is fun");                 // the result is thrown away
// System.out.println(s);               // prints Java, s never changed
// String t = s.concat(" is fun");      // the result is stored
// System.out.println(t);               // prints Java is fun
// Note :- String cannot be changed once it exists. Every method that looks like it modifies a String actually builds and returns a new one, so the result has to be stored or printed to be seen.
//
// What that means for comparing two Strings :-
// String a = "hello";
// String b = "hello";
// String c = new String("hello");
// System.out.println(a == b);          // prints true, both literals come from the string pool
// System.out.println(a == c);          // prints false, new String made a separate object
// System.out.println(a.equals(c));     // prints true, equals compares the characters
// Note :- `==` asks whether they are the same object. equals asks whether the text matches. Use equals for content, always.

// Parameter notes :-
// - beginIndex and endIndex (substring): the returned text runs from beginIndex up to but NOT including endIndex, so substring(0, 3) gives the first three characters and index 3 itself is left out. An index outside the String throws StringIndexOutOfBoundsException.
// - target (indexOf, replace, replaceAll): the text being searched for or replaced. In replaceAll the target is a REGULAR EXPRESSION, so a "." matches any single character and needs escaping when you mean a real dot.
// - newChar or replacement (replace): a literal value, useful when the text to find contains characters that a regular expression would treat specially.

// @takeaway A String cannot be changed after it is created. `concat`, `toUpperCase`, `trim`, `replace` and `substring` all build and return a NEW String, so the result must be stored or printed to be seen.
// @takeaway `==` asks whether two variables point at the same object, while `.equals()` asks whether the characters match. Use equals for content, because literals and runtime-built Strings do not share an object.
// @takeaway Characters are counted from index 0, and `substring(begin, end)` stops just before end, so `substring(0, 3)` gives the first three characters.
// @takeaway A `char` uses single quotes and holds exactly one character, while a String uses double quotes and holds any number of them. Adding a char to a number gives a number: `'A' + 1` is 66, and `(char) ('A' + 1)` is B.
// @gotcha `"Java" + 10 + 20` gives Java1020 rather than Java30, because + starts joining as soon as one side is text. Wrap the arithmetic in parentheses to add it first.
// @gotcha `substring` and `charAt` throw StringIndexOutOfBoundsException at runtime when the index is outside the String, so bound the value before using it.
// @gotcha Comparing Strings with `==` can appear to work with literals and then fail as soon as one of them is built at runtime, because `==` never compares text.
// @gotcha `replaceAll` reads its first argument as a regular expression, so `replaceAll(".", "-")` replaces every character. Use `replace` when you mean a literal dot.


public class StringMethodAndBestPractices {

    public static void main(String[] args) {

        String text = "Hello World";

        System.out.println("=== 1. STRING INSPECTION METHODS ===");
        /*
         * Output :-
         * === 1. STRING INSPECTION METHODS ===
         */

        StringInspectionMethods(text);
        StringInspectionMethods("");
        StringInspectionMethods("\t   \n");

        System.out.println("\n=== 2. STRING COMPARISON METHODS ===");
        /*
         * Output :-
         * === 2. STRING COMPARISON METHODS ===
         */

        StringComparisonMethods(text);

        System.out.println("\n=== 3. STRING MANIPULATION METHODS ===");
        /*
         * Output :-
         * === 3. STRING MANIPULATION METHODS ===
         */

        StringManipulationMethods();
    }

    // String Inspection Methods :- These give information about the String, they never change it.
    // This method is called with "Hello World", with "" and with "\t   \n", so that these methods can be
    // seen working on a normal String, on an empty String and on a blank String.
    public static void StringInspectionMethods(String text) {

        int length = text.length();

        // length() returns the total number of characters, and it is an O(1) operation.
        System.out.printf("length = %d %n", length);
        /*
         * Output for the three calls :-
         *   i)   For "Hello World" -> length = 11
         *   ii)  For ""            -> length = 0
         *   iii) For "\t   \n"     -> length = 5
         */

        // isEmpty() returns true only when the length is 0, so a String with only whitespace returns false.
        if (text.isEmpty()) {
            System.out.println("String is Empty");
            /*
             * Output (when text = "") :-
             * String is Empty
             */
            return;
        }

        // isBlank() returns true when the length is 0 or when the String has only whitespace characters.
        // This is the check to use for user input, because isEmpty() would let spaces pass through.
        if (text.isBlank()) {
            System.out.println("String is Blank");
            /*
             * Output (when text = "\t   \n") :-
             * String is Blank
             */
        }

        // charAt(index) returns the character at that index. The index has to be between 0 and length() - 1,
        // otherwise StringIndexOutOfBoundsException is thrown.
        System.out.printf("First char = %c %n", text.charAt(0));
        /*
         * Output for the two calls that reach this line :-
         *   i)  For "Hello World" -> First char = H
         *   ii) For "\t   \n"     -> First char = a tab character
         */

        // The index of the last character is length - 1, because the indexing starts at 0.
        System.out.printf("Last char = %c %n", text.charAt(length - 1));
        /*
         * Output for the two calls that reach this line :-
         *   i)  For "Hello World" -> Last char = d
         *   ii) For "\t   \n"     -> Last char = a newline character
         */

        // indexOf() searches from left to right, and lastIndexOf() searches from right to left.
        // Both of them return -1 when the value is not found.
        if (!text.isBlank()) {
            System.out.printf("index of r = %d %n", text.indexOf('r'));
            /*
             * Output (when text = "Hello World") :-
             * index of r = 8
             */

            System.out.printf("index of World = %d %n", text.indexOf("World"));
            /*
             * Output (when text = "Hello World") :-
             * index of World = 6
             */

            System.out.printf("index of l = %d %n", text.lastIndexOf("l"));
            /*
             * Output (when text = "Hello World") :-
             * index of l = 9
             */

            // The second argument of indexOf() is the position where the search starts.
            System.out.printf("index of l = %d %n", text.indexOf("l", 3));
            /*
             * Output (when text = "Hello World") :-
             * index of l = 3
             */

            // The second argument of lastIndexOf() is the position where the backward search starts.
            System.out.printf("index of l = %d %n", text.lastIndexOf("l", 8));
            /*
             * Output (when text = "Hello World") :-
             * index of l = 3
             */
        }
    }

    // String Comparison Methods :- These compare the content of the String with another String or with a
    // CharSequence, and they return true or false.
    public static void StringComparisonMethods(String text) {

        // equals() compares the content and it is case - sensitive.
        // Note :- always use equals() instead of == for Strings, because == compares the memory references.
        if (text.equals("Hello World")) {
            System.out.println("Checking equals method: Values match exactly (case-sensitive)");
            /*
             * Output :-
             * Checking equals method: Values match exactly (case-sensitive)
             */
        }

        // equalsIgnoreCase() compares the content and ignores the case, so no lowercasing is needed first.
        if ("HELLO WORLD".equalsIgnoreCase(text)) {
            System.out.println("Checking equalsIgnoreCase method: Values match ignoring case");
            /*
             * Output :-
             * Checking equalsIgnoreCase method: Values match ignoring case
             */
        }

        // startsWith() checks the prefix of the String.
        if (text.startsWith("Hello")) {
            System.out.println("String starts with 'Hello'");
            /*
             * Output :-
             * String starts with 'Hello'
             */
        }

        // endsWith() checks the suffix of the String.
        if (text.endsWith("World")) {
            System.out.println("String ends with 'World'");
            /*
             * Output :-
             * String ends with 'World'
             */
        }

        // contentEquals() accepts any CharSequence, so a String can be compared with a StringBuilder
        // without calling toString() on it.
        StringBuilder sb = new StringBuilder("Hello World");
        if (text.contentEquals(sb)) {
            System.out.println("Checking contentEquals method: CharSequence values match exactly (with StringBuilder)");
            /*
             * Output :-
             * Checking contentEquals method: CharSequence values match exactly (with StringBuilder)
             */
        }

        // contains() checks whether the given sequence appears anywhere inside the String.
        if (text.contains("World")) {
            System.out.println("Checking contains method: String contains 'World'");
            /*
             * Output :-
             * Checking contains method: String contains 'World'
             */
        }

        // regionMatches(ignoreCase, toffset, other, ooffset, len) compares only the given regions,
        // so no extra substring objects are created.
        boolean regionMatch = text.regionMatches(true, 6, "WORLD", 0, 5);
        System.out.println("Region match ('World' vs 'WORLD' ignoring case): " + regionMatch);
        /*
         * Output :-
         * Region match ('World' vs 'WORLD' ignoring case): true
         */
    }

    // String Manipulation Methods :- These return a new String after a transformation, the original String
    // is never changed.
    public static void StringManipulationMethods() {

        String birthDate = "25/12/2026";

        // indexOf() gives the position of the year, and substring() then takes the text from that position.
        int startingIndex = birthDate.indexOf("2026");
        System.out.println("Starting index of year 2026 = " + startingIndex);
        /*
         * Output :-
         * Starting index of year 2026 = 6
         */

        // substring(beginIndex) returns the text from beginIndex up to the end of the String.
        System.out.println("Birth year = " + birthDate.substring(startingIndex));
        /*
         * Output :-
         * Birth year = 2026
         */

        // substring(beginIndex, endIndex) takes beginIndex as inclusive and endIndex as exclusive.
        // The result length is always endIndex - beginIndex, so 5 - 3 gives 2 characters.
        System.out.println("Month = " + birthDate.substring(3, 5));
        /*
         * Output :-
         * Month = 12
         */

        // The same 3 values are joined with the delimiter "/" in four different ways.
        // i) String.join() is the cleanest one, because the delimiter is written only once.
        String newDate = String.join("/", "25", "11", "1982");
        System.out.println("newDate (String.join) = " + newDate);
        /*
         * Output :-
         * newDate (String.join) = 25/11/1982
         */

        // ii) Reassigning the result of concat() at every step. This creates a new String object each time,
        // and it also throws NullPointerException when the argument is null.
        newDate = "25";
        newDate = newDate.concat("/");
        newDate = newDate.concat("11");
        newDate = newDate.concat("/");
        newDate = newDate.concat("1982");
        System.out.println("newDate (concat iterative) = " + newDate);
        /*
         * Output :-
         * newDate (concat iterative) = 25/11/1982
         */

        // iii) The + operator, which is the easiest one to read. It also converts null to the text "null"
        // instead of throwing an exception.
        newDate = "25" + "/" + "11" + "/" + "1982";
        System.out.println("newDate (+) = " + newDate);
        /*
         * Output :-
         * newDate (+) = 25/11/1982
         */

        // iv) Chaining all the concat() calls in a single statement.
        newDate = "25".concat("/").concat("11").concat("/").concat("1982");
        System.out.println("newDate (concat chained) = " + newDate);
        /*
         * Output :-
         * newDate (concat chained) = 25/11/1982
         */

        // replace(char, char) replaces every occurrence of that literal character.
        System.out.println(newDate.replace('/', '-'));
        /*
         * Output :-
         * 25-11-1982
         */

        // replace(CharSequence, CharSequence) also works on literal text, so "2" is not treated as a pattern.
        System.out.println(newDate.replace("2", "00"));
        /*
         * Output :-
         * 005/11/19800
         */

        // replaceFirst() takes a Regular Expression and replaces only the first match.
        System.out.println(newDate.replaceFirst("/", "---"));
        /*
         * Output :-
         * 25---11/1982
         */

        // replaceAll() takes a Regular Expression and replaces every match.
        System.out.println(newDate.replaceAll("/", "---"));
        /*
         * Output :-
         * 25---11---1982
         */

        // A Regular Expression is needed only when a pattern has to be matched, for example \d+ for digits.
        // For a fixed text such as "/", replace() is faster and safer, because no pattern is compiled.
        String sampleText = "Price is 100 dollars, item code 200";
        System.out.println("replaceAll regex (replace digits with X): " + sampleText.replaceAll("\\d+", "X"));
        /*
         * Output :-
         * replaceAll regex (replace digits with X): Price is X dollars, item code X
         */

        // repeat() was added in JDK 11. A count of 0 gives an empty String, and a negative count throws
        // IllegalArgumentException.
        System.out.println("ABC\n".repeat(3));
        /*
         * Output :-
         * ABC
         * ABC
         * ABC
         */

        System.out.println("-".repeat(20));
        /*
         * Output :-
         * --------------------
         */

        // indent() was added in JDK 15. A positive value adds that many leading spaces to every line.
        System.out.println("ABC\n".repeat(3).indent(8));
        /*
         * Output :-
         *         ABC
         *         ABC
         *         ABC
         */

        System.out.println("-".repeat(20));
        /*
         * Output :-
         * --------------------
         */

        // A negative value removes up to that many leading whitespace characters from every line.
        System.out.println("ABC\n".repeat(3).indent(-2));
        /*
         * Output :-
         * ABC
         * ABC
         * ABC
         */

        System.out.println("-".repeat(20));
        /*
         * Output :-
         * --------------------
         */

        // trim() removes only ASCII whitespace, which means characters with a codepoint of 32 or less.
        // strip() is Unicode - aware, so it also removes characters like \u2000 (en quad).
        String unicodeWhitespaceText = "\u2000  Hello Java World  \u2000";
        System.out.println("Original string with Unicode spaces length: " + unicodeWhitespaceText.length());
        /*
         * Output :-
         * Original string with Unicode spaces length: 22
         */

        System.out.println("trim() length (misses Unicode spaces): " + unicodeWhitespaceText.trim().length());
        /*
         * Output :-
         * trim() length (misses Unicode spaces): 22
         */

        System.out.println("strip() length (Unicode-aware cleanup): " + unicodeWhitespaceText.strip().length());
        /*
         * Output :-
         * strip() length (Unicode-aware cleanup): 16
         */

        // stripLeading() removes the leading whitespace only, so the two trailing spaces and the \u2000
        // after them are still present.
        System.out.println("stripLeading(): '" + unicodeWhitespaceText.stripLeading() + "'");
        /*
         * Output :-
         * stripLeading(): 'Hello Java World  \u2000'
         */

        // stripTrailing() removes the trailing whitespace only, so the \u2000 at the start and the two
        // spaces after it are still present.
        System.out.println("stripTrailing(): '" + unicodeWhitespaceText.stripTrailing() + "'");
        /*
         * Output :-
         * stripTrailing(): '\u2000  Hello Java World'
         */
    }
}