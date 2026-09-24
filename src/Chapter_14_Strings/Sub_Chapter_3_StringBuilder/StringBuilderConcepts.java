package Chapter_14_Strings.Sub_Chapter_3_StringBuilder;

// StringBuilder is a mutable sequence of characters, unlike String which is immutable.
// Because String is immutable, every concatenation with + creates a brand new String object,
// so building a String inside a loop with + is O(n^2) in work and wasteful in memory.
// StringBuilder modifies its internal char buffer in place, making repeated appends O(n) and far more efficient.
// Prefer StringBuilder whenever you build text incrementally, especially inside loops.
//
// StringBuilder vs StringBuffer: both are mutable and share the same API, but StringBuffer is synchronized
// (thread-safe, slower) while StringBuilder is NOT synchronized (faster, the right default for single-threaded code).
//
// Capacity vs length: length() is the number of characters currently stored; capacity() is the size of the
// internal buffer. Capacity is NOT the same as length -- capacity is how much the buffer can hold before it
// must grow, while length is how much is actually in it right now.
// The default capacity of new StringBuilder() is 16 characters (an empty buffer sized for 16 chars).
// note: new StringBuilder(String) starts with capacity 16 + the text length, so new StringBuilder("Hello")
// has capacity 21 (16 + 5), not 16. new StringBuilder(int n) starts with capacity exactly n.
// When the buffer overflows, it grows to (oldCapacity * 2) + 2, so from 16 the sequence is 16 -> 34 -> 70 -> ...
// Presizing with new StringBuilder(int) avoids repeated buffer reallocation when you know the size up front.
//
// append() returns the same StringBuilder instance, which is what enables fluent method chaining
// like sb.append("a").append("b").append(1). Convert back to an immutable String with toString().
//
// OCJP trap: StringBuilder does NOT override equals(), so sb1.equals(sb2) compares references, not contents.
// To compare character content, use sb1.toString().equals(sb2.toString()) or String.contentEquals(sb).
// Important: reverse() reverses the characters in place AND returns the same object, it does not create a copy.
// Remember: the four constructor forms are new StringBuilder(), new StringBuilder(int capacity),
// new StringBuilder(String), and new StringBuilder(CharSequence).
//
// Repeating text: StringBuilder itself has no repeat() method until Java 21, so on Java 8-20 you build
// repeated content by calling append() inside a loop (which is exactly what StringBuilder is good at).
// note: String.repeat(int) was added in Java 11 and returns a new String with the value repeated n times,
// for example "ab".repeat(3) produces "ababab", and "=".repeat(20) is a clean way to build a divider line.
// note: Java 21 added StringBuilder.repeat(CharSequence, int); on Java 17 (this project) use the append loop instead.
//
// Core mutation methods (all modify the buffer in place and, except setLength, return the same StringBuilder):
// insert(int offset, X): inserts X at the given index, shifting existing characters right. offset can equal
//   length() (append at the end) but must be within 0..length() or it throws StringIndexOutOfBoundsException.
// delete(int start, int end): removes characters in the half-open range [start, end) -- start inclusive, end
//   exclusive. delete(1, 4) removes indexes 1,2,3. If end > length() it is treated as length().
// deleteCharAt(int index): removes the single character at index; throws if index is out of bounds.
// reverse(): reverses the characters in place and returns the same object (no copy is made).
// setLength(int newLength): changes the length. If newLength is smaller it TRUNCATES; if larger it pads with
//   '\u0000' (the null character). Unlike the others, setLength returns void. setLength(0) is a common idiom
//   to clear/reuse a StringBuilder without allocating a new one.
// pitfall: delete uses an EXCLUSIVE end index, so delete(0, sb.length()) clears everything, but delete(0, 1)
//   removes only the first character, not two.
// remember: index-based methods throw StringIndexOutOfBoundsException for invalid positions.
//
// Parameter glossary (what each method/constructor argument means and how to choose it):
// - offset (insert): the 0-based index where new text is placed. Character currently at that index and
//     everything after it shift right. Set offset = 0 to insert at the very start, offset = length() to append
//     at the end. Valid range is 0..length() inclusive.
// - index (deleteCharAt, charAt, setCharAt): the 0-based position of a SINGLE character. First char is 0,
//     last char is length() - 1. Set it to the exact position you want to read or remove.
// - start (delete, replace, substring): the 0-based INCLUSIVE index where the range begins (this position is
//     included in the operation).
// - end (delete, replace, substring): the 0-based EXCLUSIVE index where the range ends (this position is NOT
//     included). The range covers start..end-1, so the count of affected characters is (end - start).
// - newLength (setLength): the desired length after the call. Smaller than current -> truncate; larger ->
//     pad with '\u0000'. Set to 0 to clear the builder for reuse.
// - capacity (constructor int arg, ensureCapacity): the buffer size, NOT the content. new StringBuilder(50)
//     pre-allocates room for 50 chars while length() stays 0. Set it when you can estimate final size to
//     avoid repeated re-allocation.
// - the X argument of append(X) / insert(offset, X): an overloaded value of almost any type -- String, char,
//     char[], boolean, int, long, float, double, Object. For Object/String it appends "null" when the value
//     is null; note the char[] overload would throw NullPointerException on a null array.
// - str + fromIndex (indexOf(str), indexOf(str, fromIndex)): str is the substring to search for; fromIndex is
//     the 0-based position to start searching from (defaults to 0 in the one-arg form). Returns -1 if not found.

/*
 * String        -> immutable; each method call returns a NEW String instance.
 * StringBuilder -> mutable class that lets us change its text value in place.
 *
 * Instantiating String Objects
 *   String hello      = "Hello";
 *   String helloWorld = "Hello" + " World";
 *   String badHello   = new String("Hello");
 *
 * Instantiating StringBuilder Objects
 *   StringBuilder helloBuilder  = new StringBuilder("Hello");
 *   StringBuilder emptyBuilder  = new StringBuilder();
 *   StringBuilder emptyBuilder5 = new StringBuilder(5);
 *   StringBuilder stringBuilder = new StringBuilder(helloBuilder);
 *
 * There are four ways to create a StringBuilder with the new keyword:
 *   i)   Pass a String
 *   ii)  Pass no arguments at all
 *   iii) Pass an integer initial capacity
 *   iv)  Pass another CharSequence (like a StringBuilder)
 *
 *
 */

// @quiz (INTERVIEW) What is the core difference between String and StringBuilder?
// @answer String is immutable, so every modification creates a new object.
// @answer StringBuilder is mutable and edits its internal buffer in place, which is far more efficient for repeated changes.

// @quiz (INTERVIEW) When should you prefer StringBuilder over String concatenation?
// @answer When building text incrementally, especially inside loops.
// @answer String + in a loop creates a new object each iteration (O(n^2) work); StringBuilder appends in place (O(n)).

// @quiz (INTERVIEW) What is the difference between StringBuilder and StringBuffer?
// @answer StringBuffer is synchronized (thread-safe) but slower; StringBuilder is not synchronized but faster.
// @answer Use StringBuilder by default in single-threaded code; use StringBuffer only when multiple threads share the buffer.

// @quiz (INTERVIEW) Why can you chain calls like sb.append("a").append("b")?
// @answer Because append() returns the same StringBuilder instance, enabling a fluent builder-style API.

// @quiz (INTERVIEW TRAP) What does new StringBuilder(20) create?
// @answer An EMPTY StringBuilder with an initial capacity of 20 characters, NOT the text "20".
// @answer length() is 0; capacity() is 20. An int argument sets capacity, not content.

// @quiz (OCJP) What does sb1.equals(sb2) compare for two StringBuilder objects with identical text?
// @answer It returns false unless they are the same reference, because StringBuilder does not override equals().
// @answer Compare content with sb1.toString().equals(sb2.toString()) instead.

// @quiz (OCJP) What is the default capacity of new StringBuilder() and how does it grow?
// @answer The default capacity is 16 characters.
// @answer When exceeded, the buffer grows to (oldCapacity * 2) + 2, so from 16 the sequence is 16 -> 34 -> 70.

// @quiz (OCJP) What is the capacity of new StringBuilder("Hello")?
// @answer 21 -- the String constructor uses 16 + the length of the initial text (16 + 5).
// @answer It is NOT 16; only new StringBuilder() with no argument gives capacity 16.

// @quiz (INTERVIEW TRAP) For new StringBuilder() then append("a".repeat(17)), what are length() and capacity()?
// @answer length() is 17 (the 17 appended characters) and capacity() is 34.
// @answer The buffer starts at the default capacity 16; appending 17 chars overflows it, so it grows to (16 * 2) + 2 = 34.

// @quiz (INTERVIEW TRAP) For new StringBuilder(32) then append("a".repeat(17)), what are length() and capacity()?
// @answer length() is 17 and capacity() stays 32.
// @answer 17 fits inside the pre-allocated capacity 32, so no growth happens; capacity only changes when the content exceeds it.

// @quiz (INTERVIEW TRAP) How do you repeat text with a StringBuilder on Java 17, and does StringBuilder have a repeat() method?
// @answer On Java 17 StringBuilder has no repeat() method (that arrived in Java 21), so you append inside a loop.
// @answer For a plain repeated String use String.repeat(int) from Java 11, e.g. "ab".repeat(3) returns "ababab".

// @quiz (INTERVIEW TRAP) For sb = new StringBuilder("Hello"), what does sb.delete(1, 3) produce?
// @answer "Hlo" -- delete uses a half-open range [start, end), so it removes indexes 1 and 2 ('e' and 'l'), not index 3.
// @answer The end index is EXCLUSIVE; delete(1, 3) removes 2 characters, not 3.

// @quiz (INTERVIEW) What is the difference between delete(start, end) and deleteCharAt(index)?
// @answer delete(start, end) removes a RANGE of characters in [start, end) (end exclusive).
// @answer deleteCharAt(index) removes exactly ONE character at the given index.

// @quiz (INTERVIEW TRAP) What does setLength do when the new length is LARGER than the current length?
// @answer It pads the extra positions with the null character '\u0000', it does not pad with spaces.
// @answer If the new length is smaller, it truncates. setLength(0) is a common way to clear and reuse a StringBuilder.

// @quiz (OCJP) Does insert(offset, x) allow offset to equal the current length()?
// @answer Yes -- inserting at offset == length() appends at the end. Any offset outside 0..length() throws StringIndexOutOfBoundsException.

// @quiz (INTERVIEW TRAP) In delete(start, end), what do start and end mean and how many characters are removed?
// @answer start is the inclusive begin index and end is the exclusive stop index, so characters at start..end-1 are removed.
// @answer The number of characters removed is (end - start), which is why delete(2, 5) removes 3 characters.

// @quiz (INTERVIEW) What does the int argument to the constructor new StringBuilder(int) represent?
// @answer It sets the initial CAPACITY (buffer size), not the length or content. length() stays 0.
// @answer Choose it when you can estimate the final size, to avoid repeated buffer re-allocation as the builder grows.

// @challenge Reverse each word in a sentence using StringBuilder
// @desc Given a sentence like "Java is fun", return "avaJ si nuf" (each word reversed, word order preserved).
// @hint Split on spaces, wrap each word in a new StringBuilder, call reverse(), and join with a single space.
// @hint Use one result StringBuilder and append(word).append(" ") to avoid String + concatenation in the loop.
// @testcase reverseEachWord("Java is fun") -> "avaJ si nuf"
// @testcase reverseEachWord("hello") -> "olleh"
// @testcase reverseEachWord("") -> ""

// @quiz (INTERVIEW, EASY) What is the key difference between String and StringBuilder?
// @option String is immutable, so every change creates a new object, while StringBuilder modifies its own character buffer in place. [correct]
// @option StringBuilder is immutable, while String is mutable.
// @option Both are immutable, and StringBuilder is only faster to type.
// @option StringBuilder always stores fewer characters than String.
// @explain String never changes once created. StringBuilder edits one internal buffer, which is why repeated appends are far cheaper than building the same text with +.
// @why B: this is reversed. StringBuilder is the mutable one.
// @why C: mutability is the whole reason StringBuilder exists.
// @why D: they can hold the same text. The difference is how changes are performed, not how much fits.

// @quiz (INTERVIEW, MEDIUM) What is the difference between length() and capacity() on a StringBuilder?
// @option length() is how many characters are currently stored, and capacity() is how much the buffer can hold before it must grow. [correct]
// @option They always return the same number.
// @option length() is the buffer size, and capacity() is the number of characters stored.
// @option capacity() is the maximum number of characters a StringBuilder can ever hold.
// @explain Capacity is the size of the internal storage and length is what is actually used. A new StringBuilder() has length 0 but capacity 16, because the buffer is already reserved.
// @why B: they are equal only when the buffer happens to be exactly full.
// @why C: this is the reverse of the actual meaning.
// @why D: capacity is not a fixed limit. The buffer grows when it overflows.

// @quiz (OCJP, HARD) What does this code print?
// @code StringBuilder sb = new StringBuilder("abc");
// @code StringBuilder same = sb.reverse();
// @code System.out.println(sb + " " + (sb == same));
// @option cba true, because reverse() reverses in place and returns the same object. [correct]
// @option abc false, because reverse() returns a new StringBuilder and leaves sb untouched.
// @option cba false, because reverse() returns a copy.
// @option It does not compile, because reverse() returns void.
// @explain reverse() mutates the buffer and returns the same instance, which is why sb and same refer to one object and the identity check prints true.
// @why B: reverse() does change the original, so sb is no longer "abc".
// @why C: no copy is made. Returning the same object is what allows chaining.
// @why D: reverse() returns a StringBuilder, not void, so the assignment compiles.
// @why D: capacity grows with the text, it does not shrink.

// @quiz (OCJP, HARD) Why does sb1.equals(sb2) return false for two StringBuilders holding the same text?
// @option StringBuilder does not override equals(), so it compares references rather than contents. [correct]
// @option StringBuilders can never be compared at all.
// @option equals() on StringBuilder compares only the first character.
// @option It returns true, because the text is the same.
// @explain Without an override, equals() falls back to the version inherited from Object, which compares identity. Two different objects are therefore unequal even when they hold identical characters.
// @why B: the comparison compiles and runs, but it answers the wrong question.
// @why C: no content comparison happens at all.
// @why D: identical text does not help, because equals is not looking at the text.
// @answer To compare the content, use sb1.toString().equals(sb2.toString()) or String.contentEquals(sb).

// @quiz (INTERVIEW, MEDIUM) When a StringBuilder buffer overflows, how does it grow?
// @option It grows to (oldCapacity * 2) + 2, so from 16 the sequence is 16, then 34, then 70. [correct]
// @option It grows by exactly one character each time.
// @option It doubles to 32, then 64, then 128.
// @option It does not grow. Adding more text throws an exception.
// @explain The growth rule doubles the old capacity and adds 2. Knowing this is why presizing with new StringBuilder(int) is worthwhile when the final size is known.
// @why B: growing one character at a time would make appending very slow.
// @why C: the rule adds 2 as well, so 16 becomes 34 rather than 32.
// @why D: the buffer grows automatically. It does not fail.

// @quiz (INTERVIEW TRAP, MEDIUM) What does delete(0, 1) remove from a StringBuilder?
// @option One character, because the end index is exclusive. [correct]
// @option Two characters, because the range is 0 to 1.
// @option Nothing, because the range is empty.
// @option Everything, because 0 is the start.
// @explain The range is half-open: start is included and end is excluded. So delete(0, 1) affects index 0 only, while delete(0, sb.length()) clears the whole buffer.
// @why B: the end index is not affected, so only index 0 is removed.
// @why C: the range contains index 0, so one character is removed.
// @why D: clearing everything needs the end index to be length(), not 1.

// @quiz (INTERVIEW, MEDIUM) What does setLength(0) do, and how does it differ from the other mutation methods?
// @option It clears the buffer by truncating to length 0, and unlike the others it returns void rather than the same instance. [correct]
// @option It creates a brand new empty StringBuilder and returns it.
// @option It does nothing, because 0 is not a valid length.
// @option It returns a String containing the removed characters.
// @explain A smaller length truncates the buffer, and 0 therefore clears it. This is a common way to reuse a StringBuilder without allocating a new one. Its void return means it cannot be chained.
// @why B: the same object is reused, which is the point of the idiom.
// @why C: 0 is valid and truncates everything.
// @why D: it returns nothing at all.
// @answer A larger newLength pads with the null character \u0000, and calling it with a value larger than the current length therefore does not add spaces.

// @quiz (INTERVIEW, MEDIUM) Why can calls like sb.append("a").append("b").append(1) be chained?
// @option Because append() returns the same StringBuilder instance, which allows fluent chaining. [correct]
// @option Because each append() returns a new StringBuilder.
// @option Because Java automatically joins statements that end with a dot.
// @option Because append() is a static method.
// @explain Returning the same instance is what makes chaining work. Because it is the same object, every call writes into one buffer. Call toString() when you finally need an immutable String.
// @why B: returning a new instance each time would defeat the efficiency of StringBuilder.
// @why C: chaining is ordinary method-call syntax, not a compiler trick.
// @why D: append is an instance method, called on the builder.

// @quiz (OCJP, MEDIUM) What does this code print?
// @code StringBuilder sb = new StringBuilder("abc");
// @code sb.insert(sb.length(), "d");
// @code System.out.println(sb);
// @option abcd, because insert accepts an offset equal to length(), which appends. [correct]
// @option It does not compile, because the offset must be less than length().
// @option It throws StringIndexOutOfBoundsException.
// @option dabc, because the offset is ignored at the end.
// @explain The valid offset range is 0 up to and including length(). Using exactly length() places the text after the last character, which is the same effect as append.
// @why B: the range is inclusive of length(), unlike an array index.
// @why C: the exception is thrown for an offset outside 0 to length(), and this one is inside it.
// @why D: the offset is honoured. It places the text at that position, which is the end here.

// @quiz (OCJP, MEDIUM) What is the result of this call?
// @code StringBuilder sb = new StringBuilder("abcdef");
// @code sb.delete(1, 4);
// @code System.out.println(sb);
// @option aef, because delete removes the half-open range 1 to 3. [correct]
// @option adef, because only one character is removed.
// @option abcd, because the last four characters are removed.
// @option abcdef, because nothing is removed.
// @explain The end index is exclusive, so delete(1, 4) removes the characters at indexes 1, 2 and 3. That is b, c and d, leaving a, e and f.
// @why B: three characters are removed, not one. deleteCharAt(1) would remove a single character.
// @why C: the range starts at 1, so a is kept.
// @why D: the range is not empty, so characters are removed.

// @quiz (INTERVIEW, MEDIUM) What is printed by this code?
// @code StringBuilder sb = new StringBuilder("Hello");
// @code String snapshot = sb.toString();
// @code sb.append(" World");
// @code System.out.println(snapshot);
// @option Hello, because toString() created a String copy at that moment. [correct]
// @option Hello World, because the String tracks the builder.
// @option It does not compile, because a String cannot be made from a StringBuilder.
// @option null, because the String was created before the append.
// @explain toString() returns an immutable String holding the characters as they were at that instant. Later changes to the StringBuilder cannot affect it, because String never changes.
// @why B: the String is a separate object and is not linked to the builder.
// @why C: toString() is exactly how you convert a StringBuilder back to a String.
// @why D: the value is captured, so it holds Hello rather than null.

// Why StringBuilder exists :-
// String result = "";
// for (int i = 0; i < 5; i++) { result = result + i; }   // builds 5 brand new Strings and throws 4 of them away
//
// StringBuilder builder = new StringBuilder();
// for (int i = 0; i < 5; i++) { builder.append(i); }     // edits one buffer, nothing is copied
// System.out.println(builder.toString());                // prints 01234
// Note :- String is immutable, so every `+` makes a new object from the old ones. A StringBuilder is mutable, so append changes the same object and hands it back.
//
// The three text types, and how they were numbered :-
// | Type | Can it change | Safe across threads | Use it when |
// |---|---|---|---|
// | String | No | Yes, because it never changes | the text is fixed or rarely changed |
// | StringBuilder | Yes | No | one thread is doing lots of joining |
// | StringBuffer | Yes | Yes, methods are synchronised | several threads share the same buffer |
// Note :- StringBuffer is the older type. Its methods are synchronised, which costs speed, so StringBuilder is preferred when only one thread is involved.
//
// Pitfall :- a StringBuilder is not a String, so `builder.equals("text")` is false. That method compares references, not characters. Convert first: `builder.toString().equals("text")`.

// @takeaway A `StringBuilder` is a mutable buffer: `append` changes the same object, so nothing is copied.
// @takeaway Use `StringBuilder` when text is joined in a loop; `+` builds a new String on every pass.
// @takeaway `toString()` captures the text as it is at that moment, so appending afterwards cannot change it.
// @takeaway `StringBuilder` is faster; `StringBuffer` is the older type with synchronised methods, worth it only across threads.
// @gotcha `sb.equals("text")` is always false, because a `StringBuilder` is not a String; convert with `toString()` first.
// @gotcha `new StringBuilder("Hello")` has capacity 21: 16 plus the text length, and capacity is room to grow, not length.
// @gotcha `+` inside a loop creates a new object every pass, which is exactly the cost `StringBuilder` avoids.


// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code public class S {
// @code     public static void main(String[] args) {
// @code         StringBuilder sb = new StringBuilder("A");
// @code         sb.append("B").append("C");
// @code         System.out.println(sb);
// @code     }
// @code }
// @option ABC [correct]
// @option A
// @option A B C
// @option It does not compile, because append returns void.
// @explain append changes the same builder and returns it, so calls can be chained and the buffer ends up ABC.
// @why B: the first append already changed the buffer, so it no longer holds just A.
// @why C: append joins text with no separator inserted between the parts.
// @why D: append returns the StringBuilder itself, which is what allows chaining.

// @quiz (OCJP, HARD) What is printed by this program?
// @code public class S {
// @code     public static void main(String[] args) {
// @code         StringBuilder sb = new StringBuilder("test");
// @code         System.out.println(sb.equals("test"));
// @code     }
// @code }
// @option false [correct]
// @option true
// @option It throws ClassCastException.
// @option It does not compile, because equals needs a StringBuilder.
// @explain StringBuilder does not override equals, so it compares references, and a builder can never equal a String.
// @why B: true needs the text compared, which only happens after calling toString().
// @why C: equals takes an Object, so passing a String argument is fine.
// @why D: the call is legal; it simply returns false.

// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code public class S {
// @code     public static void main(String[] args) {
// @code         StringBuilder sb = new StringBuilder("Hello");
// @code         String s = sb.toString();
// @code         sb.append(" World");
// @code         System.out.println(s);
// @code     }
// @code }
// @option Hello [correct]
// @option Hello World
// @option World
// @option It does not compile, because s is used after being created.
// @explain toString builds a new immutable String from the text held then, so later appends cannot affect it.
// @why B: that is printed only if toString is called after the append.
// @why C: append adds to the end, so the earlier Hello is still in the builder.
// @why D: taking a snapshot does not stop the builder from being changed later.

// @quiz (OCJP, HARD) What is printed by this program?
// @code public class S {
// @code     public static void main(String[] args) {
// @code         StringBuilder sb = new StringBuilder("Hello");
// @code         System.out.println(sb.capacity());
// @code     }
// @code }
// @option 21 [correct]
// @option 5
// @option 16
// @option 10
// @explain This constructor sets capacity to the text length plus the default 16, so 5 + 16 gives 21.
// @why B: 5 is the length, which is the number of characters actually stored.
// @why C: 16 is the spare room of the empty constructor, without room for Hello.
// @why D: capacity is the text length plus 16, not double the text length.

// @quiz (OCJP, HARD) Which statement about StringBuilder and StringBuffer is correct?
// @option StringBuffer methods are synchronised, so it is safe when threads share one buffer. [correct]
// @option StringBuilder methods are synchronised, so it is the thread-safe choice.
// @option The two differ only in name and behave identically in every situation.
// @option StringBuilder cannot change after creation, while StringBuffer can.
// @explain StringBuffer is the older type and its methods are synchronised, which is safe for shared threads but slower.
// @why B: StringBuilder has no locking, so it is faster but not thread-safe.
// @why C: they differ in synchronisation, which affects both safety and speed.
// @why D: both are mutable. It is String that cannot be changed.

// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code public class S {
// @code     public static void main(String[] args) {
// @code         String s = "Hello";
// @code         s.toUpperCase();
// @code         s = s + "!";
// @code         System.out.println(s);
// @code     }
// @code }
// @option Hello! [correct]
// @option HELLO!
// @option Hello
// @option !Hello
// @explain toUpperCase returns a new String and the unassigned result is discarded, so s still holds Hello.
// @why B: the upper case text was never stored, so it does not survive.
// @why C: the assignment on the next line stores the longer text in s.
// @why D: + appends to the end; it does not place the new text first.


public class StringBuilderConcepts {

    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder("Hello"); // Mutable buffer initialized with "Hello"

        sb.append(" World");        // append adds to the end and returns the same builder
        sb.insert(0, ">> ");        // insert places text at a given index, shifting the rest right
        sb.replace(3, 8, "HELLO");  // replace swaps the characters in [start, end) with new text
        sb.deleteCharAt(0);         // deleteCharAt removes the character at the given index
        sb.reverse();               // reverse flips the characters in place on the same object

        int length = sb.length();     // length is how many characters are stored
        int capacity = sb.capacity(); // capacity is the internal buffer size (grows as needed)

        String result = sb.toString(); // toString converts the mutable builder into an immutable String
        System.out.println(result + " | len=" + length + " cap=" + capacity);

        StringBuilder chained = new StringBuilder()
                .append("id=")
                .append(42)
                .append(", active=")
                .append(true); // Fluent chaining works because each append returns the same builder
        System.out.println(chained);

        // Efficient loop building: one buffer, no throwaway String objects per iteration
        StringBuilder csv = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            if (i > 1) csv.append(","); // guard avoids a trailing separator
            csv.append(i);
        }
        System.out.println(csv); // 1,2,3,4,5

        // Repeating with String.repeat(int) — added in Java 11, returns a NEW String
        String divider = "=".repeat(20);   // "====================" (20 equals signs)
        String laughing = "ha".repeat(3);  // "hahaha"
        System.out.println(divider);
        System.out.println(laughing);

        // Repeating with StringBuilder on Java 17 — append in a loop (StringBuilder has no repeat() until Java 21)
        StringBuilder repeated = new StringBuilder();
        for (int i = 0; i < 3; i++) {
            repeated.append("ab"); // each pass appends to the same buffer, no new String objects
        }
        System.out.println(repeated); // ababab

        // Capacity demonstration: default is 16; the String constructor adds 16 + text length
        StringBuilder empty = new StringBuilder();          // no argument
        StringBuilder fromText = new StringBuilder("Hello"); // String argument
        StringBuilder presized = new StringBuilder(100);     // explicit capacity
        System.out.println("empty capacity   = " + empty.capacity());    // 16
        System.out.println("fromText capacity= " + fromText.capacity()); // 21 (16 + 5)
        System.out.println("presized capacity= " + presized.capacity()); // 100

        // Growth: once capacity 16 overflows, it becomes (16 * 2) + 2 = 34
        StringBuilder growing = new StringBuilder();     // starts at 16
        for (int i = 0; i < 17; i++) {
            growing.append('x');                          // 17th char exceeds capacity 16
        }
        System.out.println("after 17 appends = " + growing.capacity()); // 34

        // append("a".repeat(17)) into a DEFAULT builder: 17 chars overflow capacity 16, so it grows to (16 * 2) + 2 = 34
        StringBuilder defaultBuilder = new StringBuilder(); // default capacity 16
        defaultBuilder.append("a".repeat(17));              // 17 chars > 16, buffer must grow
        System.out.println("default: len=" + defaultBuilder.length()
                + " cap=" + defaultBuilder.capacity());     // len=17 cap=34

        // append("a".repeat(17)) into a PRESIZED builder: 17 fits inside capacity 32, so no growth happens
        StringBuilder presizedBuilder = new StringBuilder(32); // explicit capacity 32
        presizedBuilder.append("a".repeat(17));                // 17 chars <= 32, buffer stays put
        System.out.println("presized: len=" + presizedBuilder.length()
                + " cap=" + presizedBuilder.capacity());       // len=17 cap=32

        // --- Mutation methods: insert, delete, deleteCharAt, reverse, setLength ---

        // insert(offset, x): puts text at an index, shifting the rest right; offset == length() appends
        StringBuilder ins = new StringBuilder("Hello World");
        ins.insert(5, ",");                 // "Hello, World"
        System.out.println("insert       -> " + ins);

        // delete(start, end): removes the half-open range [start, end) -- end is EXCLUSIVE
        StringBuilder del = new StringBuilder("Hello World");
        del.delete(5, 11);                  // removes " World" (indexes 5..10) -> "Hello"
        System.out.println("delete       -> " + del);

        // deleteCharAt(index): removes exactly one character
        StringBuilder delChar = new StringBuilder("Hello");
        delChar.deleteCharAt(0);            // removes 'H' -> "ello"
        System.out.println("deleteCharAt -> " + delChar);

        // reverse(): flips characters in place on the same object
        StringBuilder rev = new StringBuilder("abc");
        rev.reverse();                      // "cba"
        System.out.println("reverse      -> " + rev);

        // setLength(n): truncates if smaller, pads with '\u0000' if larger; returns void
        StringBuilder trunc = new StringBuilder("Hello World");
        trunc.setLength(5);                 // keep first 5 chars -> "Hello"
        System.out.println("setLength(5) -> " + trunc);

        // setLength(0) is the idiom to clear and reuse a StringBuilder without allocating a new one
        StringBuilder reuse = new StringBuilder("discard me");
        reuse.setLength(0);                 // now empty
        reuse.append("fresh");
        System.out.println("setLength(0) -> " + reuse); // "fresh"
    }
}
