package Chapter_14_Strings.Sub_Chapter_3_StringBuilder;

/*
 * String, StringBuilder, and StringBuffer all represent text, but they are
 * designed for different situations.
 *
 * String is immutable. Once a String object has been created, its character
 * contents cannot be changed. An operation such as concat() creates and
 * returns a new String; it does not change the original String. If the result
 * is not assigned to a variable, the original value remains unchanged.
 *
 * StringBuilder is mutable. Its append(), insert(), delete(), and replace()
 * methods update the same character buffer and return the same builder object,
 * which makes method chaining possible. This avoids creating a new String for
 * every intermediate change and is usually the best choice for text built by
 * one thread, especially inside a loop.
 *
 * StringBuffer is also mutable and exposes nearly the same API as
 * StringBuilder. Its mutating methods are synchronized, so operations on one
 * shared buffer are coordinated between threads. That synchronization adds
 * overhead, so StringBuilder is normally faster when the buffer is confined to
 * one thread. Choose StringBuffer only when its thread-safety behavior is
 * actually required by the design.
 *
 * Practical rule:
 * - Use String for text that should not change.
 * - Use StringBuilder for frequent text changes in single-threaded code.
 * - Use StringBuffer only when multiple threads must share and update the same
 *   text buffer, and external synchronization is not being used instead.
 */

/*
 * MEMORY MODEL: Stack, Heap, and the String Pool (in simple terms)
 *
 * Java keeps running data in two main places: the STACK and the HEAP.
 *
 * THE STACK holds method frames, including local variables.
 * - Every thread has its own stack. Each method call gets a small block of
 *   space (a frame) that is thrown away when the method returns.
 * - Local variables live in that frame. A reference variable, such as a String
 *   or a StringBuilder variable, does NOT hold the object itself. It only holds
 *   a reference, which is like an address that points to the real object on the
 *   heap.
 * - Primitive local variables like int, char and boolean hold their actual
 *   value, not a reference. Primitive fields belong to objects instead.
 * - Reference fields also belong to objects; references are not always on the
 *   stack. This is a conceptual model, not a guarantee of physical JVM layout.
 *
 * THE HEAP is where the objects themselves live.
 * - Every object made with the new keyword is created on the heap. This
 *   includes every new String, new StringBuilder and new StringBuffer object.
 * - The heap is shared by all threads and cleaned up by the garbage collector.
 *   An object stays alive as long as something still points to it. Once nothing
 *   points to it, it becomes eligible for garbage collection.
 *
 * THE STRING POOL is a small cache for String literals, and it lives inside the
 * heap.
 * - It stores each unique String literal only once, so the same text is not
 *   duplicated in memory.
 * - A literal such as the text Hello is stored in the pool. If the same literal
 *   appears again, Java reuses the very same pooled object, so both variables
 *   point to one shared object.
 * - Using new String on the same text deliberately makes a brand new object on
 *   the heap, outside the pool. That is why the same text created these two
 *   different ways is not seen as equal by the == operator, since they are two
 *   separate objects, while the equals method still reports them as equal
 *   because their content is the same.
 * - Joining constant text at compile time, like the pieces Hel and lo, becomes
 *   the single literal Hello and is pooled. Joining text using a variable builds
 *   a new String on the heap at run time, and that one is not pooled unless you
 *   call intern on it.
 * - Calling intern returns the pooled copy for a String's content, so you can
 *   move a run-time String into the pool on purpose.
 *
 * HOW A REFERENCE VARIABLE BEHAVES FOR EACH TYPE
 *
 * A local reference belongs to a method frame; a reference field belongs to its
 * object. Both can refer to a heap object. The real difference is whether changing the text edits that same object
 * or quietly creates a new one.
 *
 * String is IMMUTABLE. A method like concat never changes the original text. It
 * returns a brand new String instead. If you ignore that returned value, your
 * variable still points to the old, unchanged object. Only reassigning the
 * variable makes it point to the new object, and even then the old object is
 * left untouched.
 *
 * StringBuilder and StringBuffer are MUTABLE. A method like append edits the
 * same object in place and hands the same object back to you. The variable keeps
 * pointing to that one object, but the object's contents have changed. No new
 * object is created just to change the text, unless the buffer runs out of room
 * and has to grow, which only swaps the internal array while keeping the same
 * builder object. StringBuffer works the same way, except its methods are
 * synchronized so several threads can share it safely.
 *
 * KEY TAKEAWAY:
 * - With String, changing the text really means making a new object and usually
 *   pointing the variable at it, while the old object stays as it was.
 * - With StringBuilder and StringBuffer, the variable keeps pointing to one
 *   object whose internal buffer is edited in place.
 */

public class StringVsStringBufferVsStringBuilder {

    public static void main(String[] args) {

        String helloWorld = "Hello" + " World";
        helloWorld.concat(" and GoodBye");



        StringBuilder helloWorldBuilder = new StringBuilder("Hello " + "World");
        helloWorldBuilder.append(" and GoodBye");

        StringBuffer helloWorldBuffer = new StringBuffer("Hello World");
        helloWorldBuffer.append(" and GoodBye");

        System.out.println(helloWorld);
        // Output: Hello World
        // concat() returns a new String, but the result is ignored, so
        // helloWorld still refers to the original text.

        System.out.println(helloWorldBuilder);
        // Output: Hello World and GoodBye
        // append() changes the existing StringBuilder buffer.

        System.out.println(helloWorldBuffer);
        // Output: Hello World and GoodBye
        // StringBuffer also changes its existing buffer, while its mutating
        // methods provide synchronized access for shared use across threads.

        // --- Stack, heap, and String pool: reference identity vs content ---

        String literalA = "Hello";              // pooled literal
        String literalB = "Hello";              // reuses the SAME pooled object
        String newObj   = new String("Hello");  // NEW heap object, outside the pool

        System.out.println(literalA == literalB);            // true  (same pooled object)
        System.out.println(literalA == newObj);              // false (different objects)
        System.out.println(literalA.equals(newObj));         // true  (same content)
        System.out.println(literalA == newObj.intern());     // true  (intern() returns the pooled copy)

        // String reference: mutating call makes a NEW object; original is untouched
        String s = "Hello";
        s.concat(" World");                     // result ignored -> s unchanged
        System.out.println(s);                  // Hello
        s = s.concat(" World");                 // NEW object created AND s repointed
        System.out.println(s);                  // Hello World

        // StringBuilder reference: same object edited in place, reference unchanged
        StringBuilder sb = new StringBuilder("Hello");
        StringBuilder same = sb.append(" World"); // returns the SAME object it modified
        System.out.println(sb == same);         // true  (one object, edited in place)
        System.out.println(sb);                 // Hello World
    }
}
