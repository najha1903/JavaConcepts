package Chapter_2_PrimitiveTypes.Strings;
// String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.
// A String is a sequence of characters of any length — from empty "" to thousands of characters long.
// Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes ("Hello").
// String immutability: once a String object is created, its value CANNOT be changed.
// When you "modify" a String (e.g., add to it), Java actually creates a brand NEW String object in memory.
// The original String object is discarded — it becomes eligible for garbage collection.
// Example: myString = myString + ", more text";  — this does NOT change the original String; it creates a new one and assigns the reference to myString.
// The + operator is used to concatenate (join) String values. You can join any data type to a String using +:
// Example: "Score: " + 100 -> "Score: 100" (the integer 100 is automatically converted to its String representation)
// Unicode in Strings: you can embed Unicode escape sequences in String literals.
// Example: "\u00A9" = copyright symbol. Unicode lets Strings contain characters from any language.
// Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.

// @quiz (INTERVIEW) Is String a primitive type or an object in Java?
// @answer String is a class, so it is a reference type, not a primitive.
// @answer It feels special because Java supports string literals like "hello", but it is still an object.

// @quiz (INTERVIEW) Why is String immutable in Java?
// @answer An immutable String cannot change after creation, which makes it safe for sharing, caching, and use in the string pool.
// @answer Immutability also helps security and makes Strings naturally thread-safe.

// @quiz (INTERVIEW) What is the String pool, and what is the difference between == and .equals() for Strings?
// @answer The string pool stores reused string literals so identical literals can share the same object.
// @answer == compares references, while .equals() compares the actual character content.

// @quiz (INTERVIEW) Why is StringBuilder preferred over String concatenation in loops?
// @answer Repeated String concatenation creates many temporary String objects because String is immutable.
// @answer StringBuilder changes the same buffer, so it is usually faster and uses less memory in loops.

// @quiz (OCJP) What prints here: String s = "a" + "b"; String t = "ab"; System.out.println(s == t);?
// @answer It prints true because both values are compile-time constants and refer to the same pooled String object.
// @answer The concatenation is folded by the compiler into the literal "ab".

// @quiz (OCJP) What prints here: String s = new String("ab"); String t = "ab"; System.out.println(s == t); System.out.println(s.equals(t));?
// @answer It prints false and then true.
// @answer new String("ab") creates a different object, so == is false, but the contents are equal.

// @quiz What does it mean that Strings are immutable in Java?
// @answer Once a String is created, its value cannot be changed. Any modification creates a new String object.
// @answer The original String is discarded and becomes eligible for garbage collection.

// @quiz What is the difference between a char and a String in Java?
// @answer char holds exactly ONE character and uses single quotes ('A'). String holds any number of characters and uses double quotes ("Hello").

// @quiz When should you use StringBuilder instead of String concatenation?
// @answer When performing many concatenations, especially inside a loop. String + String creates a new object each time, which is wasteful. StringBuilder modifies the same object in place.

// @quiz (INTERVIEW TRAP) int a=10; int b=20; String c="Navneet"; What is the output of: System.out.println(a + b + c);
// @answer Output: 30Navneet
// @answer Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + "Navneet" triggers String concatenation giving "30Navneet".
// @answer KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression.

// @quiz (INTERVIEW TRAP) int a=10; int b=20; String c="Navneet"; What is the output of: System.out.println(c + a + b);
// @answer Output: Navneet1020
// @answer Java evaluates + left to right: c+"Navneet" + a=10 gives "Navneet10", then "Navneet10" + b=20 gives "Navneet1020".
// @answer Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it.

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println("Result: " + 1 + 2);
// @answer Output: Result: 12 (NOT Result: 3)
// @answer Because + is left-to-right: "Result: " + 1 = "Result: 1", then "Result: 1" + 2 = "Result: 12". Both additions become concatenation once a String is involved.
// @answer To get "Result: 3", use parentheses: "Result: " + (1 + 2). Parentheses force arithmetic first.

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(1 + 2 + "Result");
// @answer Output: 3Result
// @answer Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + "Result" = "3Result" (String concat).
// @answer Contrast: "Result" + 1 + 2 = "Result12". Order matters!

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println("Value: " + (10 + 20) + " done");
// @answer Output: Value: 30 done
// @answer Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then "Value: " + 30 = "Value: 30", then + " done" = "Value: 30 done".

// @quiz (INTERVIEW TRAP) What is the output of: char ch = 'A'; System.out.println(ch + 1);
// @answer Output: 66 (NOT A1)
// @answer char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String.
// @answer To get "A1", use: "" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String "" forces concatenation.

// @quiz (INTERVIEW) How do you find the length of a String WITHOUT using the built-in .length() method?
// @answer Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length.
// @answer Another approach: convert to char array and use array.length — but that internally calls length anyway.
// @answer Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally.

// @quiz (INTERVIEW) What is the output of: String s = "Java"; s.concat(" is fun"); System.out.println(s);
// @answer Output: Java
// @answer Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still "Java".
// @answer Fix: s = s.concat(" is fun"); — you must assign the result back.

// @quiz (INTERVIEW TRAP) int a=5; What is the output of: System.out.println("" + a + a);
// @answer Output: 55 (NOT 10)
// @answer "" is an empty String. "" + a = "5" (String), then "5" + a = "55". Not arithmetic because the first operand is a String.
// @answer To add them arithmetically: System.out.println(a + a + "") = "10"

// ─── WITHOUT BUILT-IN METHOD — Classic Interview Series ────────────────────

// @quiz (INTERVIEW) How do you REVERSE a String WITHOUT using StringBuilder.reverse() or any library?
// @answer Iterate from the last index to 0 and build a new String: String rev = ""; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); }
// @answer Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr).
// @answer Key insight: Strings are immutable so you can't modify in place — you must build a new result.

// @quiz (INTERVIEW) How do you check if a String is a PALINDROME without using any built-in reverse method?
// @answer Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; }
// @answer Key insight: a palindrome reads the same forwards and backwards. "madam", "racecar", "level" are palindromes.
// @answer You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n).

// @quiz (INTERVIEW) How do you count occurrences of a specific character in a String WITHOUT using regex or library?
// @answer Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; }
// @answer Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }

// @quiz (INTERVIEW) How do you check if a String CONTAINS a substring WITHOUT using contains() or indexOf()?
// @answer Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true.
// @answer Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm.

// @quiz (INTERVIEW) How do you convert a String to UPPERCASE WITHOUT using toUpperCase()?
// @answer Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32);
// @answer Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }

// @quiz (INTERVIEW) How do you COUNT VOWELS in a String WITHOUT using regex?
// @answer Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v="aeiouAEIOU"; if(v.indexOf(ch)!=-1) count++; }
// @answer Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;

// @quiz (INTERVIEW) How do you check if two Strings are ANAGRAMS WITHOUT using sort()?
// @answer Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0.
// @answer If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach.
// @answer Example: "listen" and "silent" are anagrams — same characters, different order.

// @quiz (INTERVIEW) How do you REMOVE ALL SPACES from a String WITHOUT using replace() or replaceAll()?
// @answer Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); }
// @answer This builds a new String containing only non-space characters.

// @quiz (INTERVIEW) How do you COUNT WORDS in a String WITHOUT using split()?
// @answer Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} }
// @answer Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it.

// @quiz (INTERVIEW) How do you find the FIRST NON-REPEATING CHARACTER in a String WITHOUT library methods?
// @answer Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1.
// @answer int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;

// @quiz (INTERVIEW) How do you REMOVE DUPLICATE CHARACTERS from a String WITHOUT using Set or distinct()?
// @answer Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true.
// @answer Example: "programming" → "progamin" (each character kept only on first occurrence).

// @quiz (INTERVIEW) How do you check if a String is NUMERIC (all digits) WITHOUT using parseInt() or regex?
// @answer Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} }
// @answer Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement.

// @challenge Implement a StringUtils class with methods that do NOT use any built-in String methods except charAt() and length()
// @desc Implement: reverse(String s), isPalindrome(String s), countChar(String s, char target), toUpperCase(String s), countVowels(String s), removeSpaces(String s)
// @hint For reverse: use two pointers on a char array. For palindrome: compare from both ends. For toUpperCase: use ASCII arithmetic (subtract 32 from lowercase chars).
// @testcase reverse("hello") → "olleh", isPalindrome("racecar") → true, isPalindrome("java") → false, countVowels("Hello World") → 3

// @quiz (INTERVIEW) What is the difference between == and .equals() when comparing Strings in Java?
// @answer == compares references, meaning whether both variables point to the exact same String object in memory.
// @answer .equals() compares String content, so it checks whether the characters are the same.
// @answer Example: String a = "hello"; String b = "hello"; gives a == b as true because both usually point to the same pooled literal object, but new String("hello") compared with another new String("hello") gives == as false because they are different heap objects.
// @answer Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects.

// @quiz (INTERVIEW TRAP) What is the output of: Integer a = 127; Integer b = 127; System.out.println(a == b); then Integer x = 128; Integer y = 128; System.out.println(x == y);
// @answer Output: true on the first line and false on the second line.
// @answer Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference.
// @answer 128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false.
// @answer Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality.
public class StringExample {

    public static void main(String[] args) {

        String myString = "This is a string";
        System.out.println("MyString is equal to " + myString);
        myString = myString  + ", and this is more.";
        System.out.println("myString is equal to " + myString);
        myString = myString + " \u00A9 2022";
        System.out.println("myString is equal to " + myString);



    }
}
