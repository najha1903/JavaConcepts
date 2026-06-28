// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.
const CONCEPTS_DATA = [
  {
    "name": "Chapter 1: Java Introduction",
    "topics": [
      {
        "filePath": "src/Chapter_1_Java_Introduction/HelloWorld.java",
        "fileName": "HelloWorld.java",
        "topicName": "Hello World",
        "chapter": "Chapter 1: Java Introduction",
        "subChapter": "",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.",
              "This \"write once, run anywhere\" principle is one of Java's greatest strengths.",
              "Java programs start execution from the main method — it is the entry point that the JVM looks for when running a program.",
              "Keywords are reserved words in Java with predefined meanings. They are case-sensitive — 'class' is valid, 'Class' is not.",
              "The public keyword is an access modifier — it determines who can see/use this piece of code. 'public' means unrestricted access.",
              "The class keyword defines a class (a blueprint or template). The class name immediately follows. By convention, class names start with a capital letter.",
              "The static keyword means this method belongs to the class itself, not to any specific object (instance). The main method must be static so the JVM can call it without creating an object first.",
              "The void keyword means this method does not return any value. Methods that return nothing are declared void.",
              "main is the special method name the JVM looks for to start the program. The name must be exactly 'main'.",
              "String[] args is a parameter — it allows you to pass command-line arguments into the program when it runs. args is an array of Strings.",
              "System.out.println() is a method call that prints a line of text to the console. System is a class, out is a static field (output stream), println is the method."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_1_Java_Introduction;\r\n// Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.\n// This \"write once, run anywhere\" principle is one of Java's greatest strengths.\n// Java programs start execution from the main method — it is the entry point that the JVM looks for when running a program.\n// Keywords are reserved words in Java with predefined meanings. They are case-sensitive — 'class' is valid, 'Class' is not.\n// The public keyword is an access modifier — it determines who can see/use this piece of code. 'public' means unrestricted access.\n// The class keyword defines a class (a blueprint or template). The class name immediately follows. By convention, class names start with a capital letter.\n// The static keyword means this method belongs to the class itself, not to any specific object (instance). The main method must be static so the JVM can call it without creating an object first.\n// The void keyword means this method does not return any value. Methods that return nothing are declared void.\n// main is the special method name the JVM looks for to start the program. The name must be exactly 'main'.\n// String[] args is a parameter — it allows you to pass command-line arguments into the program when it runs. args is an array of Strings.\n// System.out.println() is a method call that prints a line of text to the console. System is a class, out is a static field (output stream), println is the method.\r\npublic class HelloWorld {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(\"Hello World\");\r\n    }\r\n\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 2: Primitive Types",
    "topics": [
      {
        "filePath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java",
        "fileName": "StringExample.java",
        "topicName": "String Example",
        "chapter": "Chapter 2: Primitive Types",
        "subChapter": "Strings",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
              "A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.",
              "Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\").",
              "String immutability: once a String object is created, its value CANNOT be changed.",
              "When you \"modify\" a String (e.g., add to it), Java actually creates a brand NEW String object in memory.",
              "The original String object is discarded — it becomes eligible for garbage collection.",
              "Example: myString = myString + \", more text\";  — this does NOT change the original String; it creates a new one and assigns the reference to myString.",
              "The + operator is used to concatenate (join) String values. You can join any data type to a String using +:",
              "Example: \"Score: \" + 100 -> \"Score: 100\" (the integer 100 is automatically converted to its String representation)",
              "Unicode in Strings: you can embed Unicode escape sequences in String literals.",
              "Example: \"\\u00A9\" = copyright symbol. Unicode lets Strings contain characters from any language.",
              "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
              "@quiz What does it mean that Strings are immutable in Java?",
              "@answer Once a String is created, its value cannot be changed. Any modification creates a new String object.",
              "@answer The original String is discarded and becomes eligible for garbage collection.",
              "@quiz What is the difference between a char and a String in Java?",
              "@answer char holds exactly ONE character and uses single quotes ('A'). String holds any number of characters and uses double quotes (\"Hello\").",
              "@quiz When should you use StringBuilder instead of String concatenation?",
              "@answer When performing many concatenations, especially inside a loop. String + String creates a new object each time, which is wasteful. StringBuilder modifies the same object in place.",
              "@quiz (INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(a + b + c);",
              "@answer Output: 30Navneet",
              "@answer Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + \"Navneet\" triggers String concatenation giving \"30Navneet\".",
              "@answer KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression.",
              "@quiz (INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(c + a + b);",
              "@answer Output: Navneet1020",
              "@answer Java evaluates + left to right: c+\"Navneet\" + a=10 gives \"Navneet10\", then \"Navneet10\" + b=20 gives \"Navneet1020\".",
              "@answer Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it.",
              "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Result: \" + 1 + 2);",
              "@answer Output: Result: 12 (NOT Result: 3)",
              "@answer Because + is left-to-right: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\". Both additions become concatenation once a String is involved.",
              "@answer To get \"Result: 3\", use parentheses: \"Result: \" + (1 + 2). Parentheses force arithmetic first.",
              "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(1 + 2 + \"Result\");",
              "@answer Output: 3Result",
              "@answer Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + \"Result\" = \"3Result\" (String concat).",
              "@answer Contrast: \"Result\" + 1 + 2 = \"Result12\". Order matters!",
              "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Value: \" + (10 + 20) + \" done\");",
              "@answer Output: Value: 30 done",
              "@answer Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then \"Value: \" + 30 = \"Value: 30\", then + \" done\" = \"Value: 30 done\".",
              "@quiz (INTERVIEW TRAP) What is the output of: char ch = 'A'; System.out.println(ch + 1);",
              "@answer Output: 66 (NOT A1)",
              "@answer char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String.",
              "@answer To get \"A1\", use: \"\" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String \"\" forces concatenation.",
              "@quiz (INTERVIEW) How do you find the length of a String WITHOUT using the built-in .length() method?",
              "@answer Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length.",
              "@answer Another approach: convert to char array and use array.length — but that internally calls length anyway.",
              "@answer Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally.",
              "@quiz (INTERVIEW) What is the output of: String s = \"Java\"; s.concat(\" is fun\"); System.out.println(s);",
              "@answer Output: Java",
              "@answer Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still \"Java\".",
              "@answer Fix: s = s.concat(\" is fun\"); — you must assign the result back.",
              "@quiz (INTERVIEW TRAP) int a=5; What is the output of: System.out.println(\"\" + a + a);",
              "@answer Output: 55 (NOT 10)",
              "@answer \"\" is an empty String. \"\" + a = \"5\" (String), then \"5\" + a = \"55\". Not arithmetic because the first operand is a String.",
              "@answer To add them arithmetically: System.out.println(a + a + \"\") = \"10\"",
              "─── WITHOUT BUILT-IN METHOD — Classic Interview Series ────────────────────",
              "@quiz (INTERVIEW) How do you REVERSE a String WITHOUT using StringBuilder.reverse() or any library?",
              "@answer Iterate from the last index to 0 and build a new String: String rev = \"\"; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); }",
              "@answer Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr).",
              "@answer Key insight: Strings are immutable so you can't modify in place — you must build a new result.",
              "@quiz (INTERVIEW) How do you check if a String is a PALINDROME without using any built-in reverse method?",
              "@answer Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; }",
              "@answer Key insight: a palindrome reads the same forwards and backwards. \"madam\", \"racecar\", \"level\" are palindromes.",
              "@answer You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n).",
              "@quiz (INTERVIEW) How do you count occurrences of a specific character in a String WITHOUT using regex or library?",
              "@answer Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; }",
              "@answer Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }",
              "@quiz (INTERVIEW) How do you check if a String CONTAINS a substring WITHOUT using contains() or indexOf()?",
              "@answer Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true.",
              "@answer Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm.",
              "@quiz (INTERVIEW) How do you convert a String to UPPERCASE WITHOUT using toUpperCase()?",
              "@answer Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32);",
              "@answer Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }",
              "@quiz (INTERVIEW) How do you COUNT VOWELS in a String WITHOUT using regex?",
              "@answer Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v=\"aeiouAEIOU\"; if(v.indexOf(ch)!=-1) count++; }",
              "@answer Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;",
              "@quiz (INTERVIEW) How do you check if two Strings are ANAGRAMS WITHOUT using sort()?",
              "@answer Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0.",
              "@answer If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach.",
              "@answer Example: \"listen\" and \"silent\" are anagrams — same characters, different order.",
              "@quiz (INTERVIEW) How do you REMOVE ALL SPACES from a String WITHOUT using replace() or replaceAll()?",
              "@answer Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); }",
              "@answer This builds a new String containing only non-space characters.",
              "@quiz (INTERVIEW) How do you COUNT WORDS in a String WITHOUT using split()?",
              "@answer Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} }",
              "@answer Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it.",
              "@quiz (INTERVIEW) How do you find the FIRST NON-REPEATING CHARACTER in a String WITHOUT library methods?",
              "@answer Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1.",
              "@answer int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;",
              "@quiz (INTERVIEW) How do you REMOVE DUPLICATE CHARACTERS from a String WITHOUT using Set or distinct()?",
              "@answer Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true.",
              "@answer Example: \"programming\" → \"progamin\" (each character kept only on first occurrence).",
              "@quiz (INTERVIEW) How do you check if a String is NUMERIC (all digits) WITHOUT using parseInt() or regex?",
              "@answer Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} }",
              "@answer Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement.",
              "@challenge Implement a StringUtils class with methods that do NOT use any built-in String methods except charAt() and length()",
              "@desc Implement: reverse(String s), isPalindrome(String s), countChar(String s, char target), toUpperCase(String s), countVowels(String s), removeSpaces(String s)",
              "@hint For reverse: use two pointers on a char array. For palindrome: compare from both ends. For toUpperCase: use ASCII arithmetic (subtract 32 from lowercase chars).",
              "@testcase reverse(\"hello\") → \"olleh\", isPalindrome(\"racecar\") → true, isPalindrome(\"java\") → false, countVowels(\"Hello World\") → 3",
              "@quiz (INTERVIEW) What is the difference between == and .equals() when comparing Strings in Java?",
              "@answer == compares references, meaning whether both variables point to the exact same String object in memory.",
              "@answer .equals() compares String content, so it checks whether the characters are the same.",
              "@answer Example: String a = \"hello\"; String b = \"hello\"; gives a == b as true because both usually point to the same pooled literal object, but new String(\"hello\") compared with another new String(\"hello\") gives == as false because they are different heap objects.",
              "@answer Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects.",
              "@quiz (INTERVIEW TRAP) What is the output of: Integer a = 127; Integer b = 127; System.out.println(a == b); then Integer x = 128; Integer y = 128; System.out.println(x == y);",
              "@answer Output: true on the first line and false on the second line.",
              "@answer Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference.",
              "@answer 128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false.",
              "@answer Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [
          {
            "question": "What does it mean that Strings are immutable in Java?",
            "answers": [
              "Once a String is created, its value cannot be changed. Any modification creates a new String object.",
              "The original String is discarded and becomes eligible for garbage collection."
            ]
          },
          {
            "question": "What is the difference between a char and a String in Java?",
            "answers": [
              "char holds exactly ONE character and uses single quotes ('A'). String holds any number of characters and uses double quotes (\"Hello\")."
            ]
          },
          {
            "question": "When should you use StringBuilder instead of String concatenation?",
            "answers": [
              "When performing many concatenations, especially inside a loop. String + String creates a new object each time, which is wasteful. StringBuilder modifies the same object in place."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(a + b + c);",
            "answers": [
              "Output: 30Navneet",
              "Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + \"Navneet\" triggers String concatenation giving \"30Navneet\".",
              "KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(c + a + b);",
            "answers": [
              "Output: Navneet1020",
              "Java evaluates + left to right: c+\"Navneet\" + a=10 gives \"Navneet10\", then \"Navneet10\" + b=20 gives \"Navneet1020\".",
              "Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Result: \" + 1 + 2);",
            "answers": [
              "Output: Result: 12 (NOT Result: 3)",
              "Because + is left-to-right: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\". Both additions become concatenation once a String is involved.",
              "To get \"Result: 3\", use parentheses: \"Result: \" + (1 + 2). Parentheses force arithmetic first."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: System.out.println(1 + 2 + \"Result\");",
            "answers": [
              "Output: 3Result",
              "Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + \"Result\" = \"3Result\" (String concat).",
              "Contrast: \"Result\" + 1 + 2 = \"Result12\". Order matters!"
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Value: \" + (10 + 20) + \" done\");",
            "answers": [
              "Output: Value: 30 done",
              "Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then \"Value: \" + 30 = \"Value: 30\", then + \" done\" = \"Value: 30 done\"."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: char ch = 'A'; System.out.println(ch + 1);",
            "answers": [
              "Output: 66 (NOT A1)",
              "char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String.",
              "To get \"A1\", use: \"\" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String \"\" forces concatenation."
            ]
          },
          {
            "question": "(INTERVIEW) How do you find the length of a String WITHOUT using the built-in .length() method?",
            "answers": [
              "Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length.",
              "Another approach: convert to char array and use array.length — but that internally calls length anyway.",
              "Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally."
            ]
          },
          {
            "question": "(INTERVIEW) What is the output of: String s = \"Java\"; s.concat(\" is fun\"); System.out.println(s);",
            "answers": [
              "Output: Java",
              "Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still \"Java\".",
              "Fix: s = s.concat(\" is fun\"); — you must assign the result back."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) int a=5; What is the output of: System.out.println(\"\" + a + a);",
            "answers": [
              "Output: 55 (NOT 10)",
              "\"\" is an empty String. \"\" + a = \"5\" (String), then \"5\" + a = \"55\". Not arithmetic because the first operand is a String.",
              "To add them arithmetically: System.out.println(a + a + \"\") = \"10\""
            ]
          },
          {
            "question": "(INTERVIEW) How do you REVERSE a String WITHOUT using StringBuilder.reverse() or any library?",
            "answers": [
              "Iterate from the last index to 0 and build a new String: String rev = \"\"; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); }",
              "Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr).",
              "Key insight: Strings are immutable so you can't modify in place — you must build a new result."
            ]
          },
          {
            "question": "(INTERVIEW) How do you check if a String is a PALINDROME without using any built-in reverse method?",
            "answers": [
              "Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; }",
              "Key insight: a palindrome reads the same forwards and backwards. \"madam\", \"racecar\", \"level\" are palindromes.",
              "You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n)."
            ]
          },
          {
            "question": "(INTERVIEW) How do you count occurrences of a specific character in a String WITHOUT using regex or library?",
            "answers": [
              "Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; }",
              "Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }"
            ]
          },
          {
            "question": "(INTERVIEW) How do you check if a String CONTAINS a substring WITHOUT using contains() or indexOf()?",
            "answers": [
              "Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true.",
              "Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm."
            ]
          },
          {
            "question": "(INTERVIEW) How do you convert a String to UPPERCASE WITHOUT using toUpperCase()?",
            "answers": [
              "Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32);",
              "Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }"
            ]
          },
          {
            "question": "(INTERVIEW) How do you COUNT VOWELS in a String WITHOUT using regex?",
            "answers": [
              "Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v=\"aeiouAEIOU\"; if(v.indexOf(ch)!=-1) count++; }",
              "Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;"
            ]
          },
          {
            "question": "(INTERVIEW) How do you check if two Strings are ANAGRAMS WITHOUT using sort()?",
            "answers": [
              "Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0.",
              "If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach.",
              "Example: \"listen\" and \"silent\" are anagrams — same characters, different order."
            ]
          },
          {
            "question": "(INTERVIEW) How do you REMOVE ALL SPACES from a String WITHOUT using replace() or replaceAll()?",
            "answers": [
              "Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); }",
              "This builds a new String containing only non-space characters."
            ]
          },
          {
            "question": "(INTERVIEW) How do you COUNT WORDS in a String WITHOUT using split()?",
            "answers": [
              "Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} }",
              "Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it."
            ]
          },
          {
            "question": "(INTERVIEW) How do you find the FIRST NON-REPEATING CHARACTER in a String WITHOUT library methods?",
            "answers": [
              "Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1.",
              "int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;"
            ]
          },
          {
            "question": "(INTERVIEW) How do you REMOVE DUPLICATE CHARACTERS from a String WITHOUT using Set or distinct()?",
            "answers": [
              "Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true.",
              "Example: \"programming\" → \"progamin\" (each character kept only on first occurrence)."
            ]
          },
          {
            "question": "(INTERVIEW) How do you check if a String is NUMERIC (all digits) WITHOUT using parseInt() or regex?",
            "answers": [
              "Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} }",
              "Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between == and .equals() when comparing Strings in Java?",
            "answers": [
              "== compares references, meaning whether both variables point to the exact same String object in memory.",
              ".equals() compares String content, so it checks whether the characters are the same.",
              "Example: String a = \"hello\"; String b = \"hello\"; gives a == b as true because both usually point to the same pooled literal object, but new String(\"hello\") compared with another new String(\"hello\") gives == as false because they are different heap objects.",
              "Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: Integer a = 127; Integer b = 127; System.out.println(a == b); then Integer x = 128; Integer y = 128; System.out.println(x == y);",
            "answers": [
              "Output: true on the first line and false on the second line.",
              "Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference.",
              "128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false.",
              "Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality."
            ]
          }
        ],
        "deepChallenges": [
          {
            "title": "Implement a StringUtils class with methods that do NOT use any built-in String methods except charAt() and length()",
            "desc": [
              "Implement: reverse(String s), isPalindrome(String s), countChar(String s, char target), toUpperCase(String s), countVowels(String s), removeSpaces(String s)"
            ],
            "hints": [
              "For reverse: use two pointers on a char array. For palindrome: compare from both ends. For toUpperCase: use ASCII arithmetic (subtract 32 from lowercase chars)."
            ],
            "testcases": [
              "reverse(\"hello\") → \"olleh\", isPalindrome(\"racecar\") → true, isPalindrome(\"java\") → false, countVowels(\"Hello World\") → 3"
            ]
          }
        ],
        "code": "﻿package Chapter_2_PrimitiveTypes.Strings;\r\n// String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.\n// A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.\n// Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\").\n// String immutability: once a String object is created, its value CANNOT be changed.\n// When you \"modify\" a String (e.g., add to it), Java actually creates a brand NEW String object in memory.\n// The original String object is discarded — it becomes eligible for garbage collection.\n// Example: myString = myString + \", more text\";  — this does NOT change the original String; it creates a new one and assigns the reference to myString.\n// The + operator is used to concatenate (join) String values. You can join any data type to a String using +:\n// Example: \"Score: \" + 100 -> \"Score: 100\" (the integer 100 is automatically converted to its String representation)\n// Unicode in Strings: you can embed Unicode escape sequences in String literals.\n// Example: \"\\u00A9\" = copyright symbol. Unicode lets Strings contain characters from any language.\n// Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.\n\n// @quiz What does it mean that Strings are immutable in Java?\n// @answer Once a String is created, its value cannot be changed. Any modification creates a new String object.\n// @answer The original String is discarded and becomes eligible for garbage collection.\n\n// @quiz What is the difference between a char and a String in Java?\n// @answer char holds exactly ONE character and uses single quotes ('A'). String holds any number of characters and uses double quotes (\"Hello\").\n\n// @quiz When should you use StringBuilder instead of String concatenation?\n// @answer When performing many concatenations, especially inside a loop. String + String creates a new object each time, which is wasteful. StringBuilder modifies the same object in place.\n\n// @quiz (INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(a + b + c);\n// @answer Output: 30Navneet\n// @answer Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + \"Navneet\" triggers String concatenation giving \"30Navneet\".\n// @answer KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression.\n\n// @quiz (INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(c + a + b);\n// @answer Output: Navneet1020\n// @answer Java evaluates + left to right: c+\"Navneet\" + a=10 gives \"Navneet10\", then \"Navneet10\" + b=20 gives \"Navneet1020\".\n// @answer Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it.\n\n// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Result: \" + 1 + 2);\n// @answer Output: Result: 12 (NOT Result: 3)\n// @answer Because + is left-to-right: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\". Both additions become concatenation once a String is involved.\n// @answer To get \"Result: 3\", use parentheses: \"Result: \" + (1 + 2). Parentheses force arithmetic first.\n\n// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(1 + 2 + \"Result\");\n// @answer Output: 3Result\n// @answer Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + \"Result\" = \"3Result\" (String concat).\n// @answer Contrast: \"Result\" + 1 + 2 = \"Result12\". Order matters!\n\n// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Value: \" + (10 + 20) + \" done\");\n// @answer Output: Value: 30 done\n// @answer Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then \"Value: \" + 30 = \"Value: 30\", then + \" done\" = \"Value: 30 done\".\n\n// @quiz (INTERVIEW TRAP) What is the output of: char ch = 'A'; System.out.println(ch + 1);\n// @answer Output: 66 (NOT A1)\n// @answer char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String.\n// @answer To get \"A1\", use: \"\" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String \"\" forces concatenation.\n\n// @quiz (INTERVIEW) How do you find the length of a String WITHOUT using the built-in .length() method?\n// @answer Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length.\n// @answer Another approach: convert to char array and use array.length — but that internally calls length anyway.\n// @answer Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally.\n\n// @quiz (INTERVIEW) What is the output of: String s = \"Java\"; s.concat(\" is fun\"); System.out.println(s);\n// @answer Output: Java\n// @answer Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still \"Java\".\n// @answer Fix: s = s.concat(\" is fun\"); — you must assign the result back.\n\n// @quiz (INTERVIEW TRAP) int a=5; What is the output of: System.out.println(\"\" + a + a);\n// @answer Output: 55 (NOT 10)\n// @answer \"\" is an empty String. \"\" + a = \"5\" (String), then \"5\" + a = \"55\". Not arithmetic because the first operand is a String.\n// @answer To add them arithmetically: System.out.println(a + a + \"\") = \"10\"\n\n// ─── WITHOUT BUILT-IN METHOD — Classic Interview Series ────────────────────\n\n// @quiz (INTERVIEW) How do you REVERSE a String WITHOUT using StringBuilder.reverse() or any library?\n// @answer Iterate from the last index to 0 and build a new String: String rev = \"\"; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); }\n// @answer Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr).\n// @answer Key insight: Strings are immutable so you can't modify in place — you must build a new result.\n\n// @quiz (INTERVIEW) How do you check if a String is a PALINDROME without using any built-in reverse method?\n// @answer Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; }\n// @answer Key insight: a palindrome reads the same forwards and backwards. \"madam\", \"racecar\", \"level\" are palindromes.\n// @answer You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n).\n\n// @quiz (INTERVIEW) How do you count occurrences of a specific character in a String WITHOUT using regex or library?\n// @answer Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; }\n// @answer Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }\n\n// @quiz (INTERVIEW) How do you check if a String CONTAINS a substring WITHOUT using contains() or indexOf()?\n// @answer Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true.\n// @answer Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm.\n\n// @quiz (INTERVIEW) How do you convert a String to UPPERCASE WITHOUT using toUpperCase()?\n// @answer Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32);\n// @answer Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }\n\n// @quiz (INTERVIEW) How do you COUNT VOWELS in a String WITHOUT using regex?\n// @answer Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v=\"aeiouAEIOU\"; if(v.indexOf(ch)!=-1) count++; }\n// @answer Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;\n\n// @quiz (INTERVIEW) How do you check if two Strings are ANAGRAMS WITHOUT using sort()?\n// @answer Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0.\n// @answer If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach.\n// @answer Example: \"listen\" and \"silent\" are anagrams — same characters, different order.\n\n// @quiz (INTERVIEW) How do you REMOVE ALL SPACES from a String WITHOUT using replace() or replaceAll()?\n// @answer Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); }\n// @answer This builds a new String containing only non-space characters.\n\n// @quiz (INTERVIEW) How do you COUNT WORDS in a String WITHOUT using split()?\n// @answer Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} }\n// @answer Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it.\n\n// @quiz (INTERVIEW) How do you find the FIRST NON-REPEATING CHARACTER in a String WITHOUT library methods?\n// @answer Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1.\n// @answer int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;\n\n// @quiz (INTERVIEW) How do you REMOVE DUPLICATE CHARACTERS from a String WITHOUT using Set or distinct()?\n// @answer Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true.\n// @answer Example: \"programming\" → \"progamin\" (each character kept only on first occurrence).\n\n// @quiz (INTERVIEW) How do you check if a String is NUMERIC (all digits) WITHOUT using parseInt() or regex?\n// @answer Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} }\n// @answer Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement.\n\n// @challenge Implement a StringUtils class with methods that do NOT use any built-in String methods except charAt() and length()\n// @desc Implement: reverse(String s), isPalindrome(String s), countChar(String s, char target), toUpperCase(String s), countVowels(String s), removeSpaces(String s)\n// @hint For reverse: use two pointers on a char array. For palindrome: compare from both ends. For toUpperCase: use ASCII arithmetic (subtract 32 from lowercase chars).\n// @testcase reverse(\"hello\") → \"olleh\", isPalindrome(\"racecar\") → true, isPalindrome(\"java\") → false, countVowels(\"Hello World\") → 3\n\n// @quiz (INTERVIEW) What is the difference between == and .equals() when comparing Strings in Java?\n// @answer == compares references, meaning whether both variables point to the exact same String object in memory.\n// @answer .equals() compares String content, so it checks whether the characters are the same.\n// @answer Example: String a = \"hello\"; String b = \"hello\"; gives a == b as true because both usually point to the same pooled literal object, but new String(\"hello\") compared with another new String(\"hello\") gives == as false because they are different heap objects.\n// @answer Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects.\n\n// @quiz (INTERVIEW TRAP) What is the output of: Integer a = 127; Integer b = 127; System.out.println(a == b); then Integer x = 128; Integer y = 128; System.out.println(x == y);\n// @answer Output: true on the first line and false on the second line.\n// @answer Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference.\n// @answer 128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false.\n// @answer Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality.\npublic class StringExample {\n\r\n    public static void main(String[] args) {\r\n\r\n        String myString = \"This is a string\";\r\n        System.out.println(\"MyString is equal to \" + myString);\r\n        myString = myString  + \", and this is more.\";\r\n        System.out.println(\"myString is equal to \" + myString);\r\n        myString = myString + \" \\u00A9 2022\";\r\n        System.out.println(\"myString is equal to \" + myString);\r\n\r\n\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/LocalVariablesAndScope.java",
        "fileName": "LocalVariablesAndScope.java",
        "topicName": "Local Variables And Scope",
        "chapter": "Chapter 2: Primitive Types",
        "subChapter": "Variables",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "LOCAL VARIABLE SCOPE EXAMPLES",
              "--- FOR LOOP SCOPE ---",
              "Variables declared inside the for loop init section are local to the loop only.",
              "--- IF STATEMENT SCOPE ---",
              "Variables declared inside an if block are NOT accessible in else or outside the if.",
              "--- SWITCH SCOPE (special rule!) ---",
              "In a switch, a variable declared in one case IS accessible to later cases (cases that come after), but NOT to earlier cases, and NOT outside the switch.",
              "case 1:",
              "case 2:",
              "case 3:",
              "default:"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "A local variable is one declared inside a method, constructor, or block. It only exists (is \"in scope\") within that block.",
              "Scope describes the region of code where a variable is accessible. 'In scope' = accessible. 'Out of scope' = the variable no longer exists and cannot be used.",
              "Best practice: Declare and initialise a variable in the same place if possible. Declare variables in the narrowest scope possible.",
              "Rule: Inner (nested) blocks CAN access variables from their outer block. But outer blocks CANNOT access variables declared inside an inner block.",
              "For loop scope: the counter variable declared in 'for(int i = ...)' is LOCAL to the loop — it does not exist outside the loop.",
              "If statement scope: a variable declared inside an if block is NOT accessible in the else block or outside the if structure.",
              "Switch scope is different: a variable declared in one case IS accessible in later cases (cases further down), but NOT in cases that come before it, and NOT outside the switch."
            ]
          }
        ],
        "inlineComments": [
          "outer block (e.g., a method)",
          "OK: i is accessible inside the loop",
          "ERROR: i is out of scope here — it only existed during the loop",
          "i is in scope only inside this if block",
          "ERROR: i is out of scope here",
          "ERROR: i is out of scope here too",
          "i declared here, accessible from this point downwards in the switch",
          "ERROR: j is declared in case 3 (later), so case 2 cannot see it",
          "j declared here",
          "OK: j is accessible from this point",
          "OK: i was declared in case 1 (before default)",
          "OK: accessible",
          "OK: j was declared in case 3 (before default)",
          "ERROR: i is out of scope outside the switch",
          "ERROR: j is out of scope outside the switch",
          "Starts an outer block - method block. It is also the containing block in this instance",
          "Flow statement block starts inner block",
          "Inner block code has access to outer block's variables",
          "Compile Error :- Cannot resolve symbol 'thirdVariable'",
          "Outer code block cannot access the thirdVariable as third variable is out of scope for second code block"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_2_PrimitiveTypes.Sub_Chapter_1_Variables;\n// A local variable is one declared inside a method, constructor, or block. It only exists (is \"in scope\") within that block.\n// Scope describes the region of code where a variable is accessible. 'In scope' = accessible. 'Out of scope' = the variable no longer exists and cannot be used.\n// Best practice: Declare and initialise a variable in the same place if possible. Declare variables in the narrowest scope possible.\n// Rule: Inner (nested) blocks CAN access variables from their outer block. But outer blocks CANNOT access variables declared inside an inner block.\n// For loop scope: the counter variable declared in 'for(int i = ...)' is LOCAL to the loop — it does not exist outside the loop.\n// If statement scope: a variable declared inside an if block is NOT accessible in the else block or outside the if structure.\n// Switch scope is different: a variable declared in one case IS accessible in later cases (cases further down), but NOT in cases that come before it, and NOT outside the switch.\n\n/*\n  LOCAL VARIABLE SCOPE EXAMPLES\n\n  --- FOR LOOP SCOPE ---\n  Variables declared inside the for loop init section are local to the loop only.\n\n  {  // outer block (e.g., a method)\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(i);   // OK: i is accessible inside the loop\n    }\n    System.out.println(i);     // ERROR: i is out of scope here — it only existed during the loop\n  }\n\n  --- IF STATEMENT SCOPE ---\n  Variables declared inside an if block are NOT accessible in else or outside the if.\n\n  public static void aMethod(int counter) {\n    if (counter > 0) {\n      int i = 10;                 // i is in scope only inside this if block\n    } else {\n      System.out.println(i);     // ERROR: i is out of scope here\n    }\n    System.out.println(i);       // ERROR: i is out of scope here too\n  }\n\n  --- SWITCH SCOPE (special rule!) ---\n  In a switch, a variable declared in one case IS accessible to later cases (cases that come after),\n  but NOT to earlier cases, and NOT outside the switch.\n\n  public static void aMethod(int value) {\n    switch (value) {\n      case 1:\n        int i = 10;               // i declared here, accessible from this point downwards in the switch\n        break;\n\n      case 2:\n        System.out.println(j);   // ERROR: j is declared in case 3 (later), so case 2 cannot see it\n        break;\n\n      case 3:\n        int j = 10;               // j declared here\n        System.out.println(j);   // OK: j is accessible from this point\n        break;\n\n      default:\n        i = value;                // OK: i was declared in case 1 (before default)\n        System.out.println(i);   // OK: accessible\n        System.out.println(j);   // OK: j was declared in case 3 (before default)\n        break;\n    }\n    System.out.println(i);        // ERROR: i is out of scope outside the switch\n    System.out.println(j);        // ERROR: j is out of scope outside the switch\n  }\n*/\r\npublic class LocalVariablesAndScope {\r\n\r\n    /*\r\n    * Local variables are always in the scope in the block they are declared.\r\n    *\r\n    * They are also in scope for any nested blocks or blocks contained within the outer block\r\n    *\r\n    * Local Variables are always out of scope for outer blocks or the containing blocks they are declared in.\r\n    *\r\n    * */\r\n\r\n    public static void main(String[] args)\r\n\r\n     // Starts an outer block - method block. It is also the containing block in this instance\r\n    {\r\n\r\n        int firstVariable = 5;  // firstVariable is a local variable. It is available to use in the current outer block as well the inner block\r\n\r\n        int secondVariable = 10; // secondVariable is a local variable. It is available to use in the current outer block as well the inner block\r\n\r\n        if(firstVariable > 0)\r\n\r\n        // Flow statement block starts inner block\r\n\r\n        // Inner block code has access to outer block's variables\r\n        {\r\n            int thirdVariable = 9; // thirdVariable is only available to be used in the inner code block.\r\n\r\n\r\n            System.out.println(secondVariable);\r\n        }\r\n\r\n      //  System.out.println(thirdVariable); // Compile Error :- Cannot resolve symbol 'thirdVariable'\r\n                                           // Outer code block cannot access the thirdVariable as third variable is out of scope for second code block\r\n\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/Variables.java",
        "fileName": "Variables.java",
        "topicName": "Variables",
        "chapter": "Chapter 2: Primitive Types",
        "subChapter": "Variables",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
              "As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set.",
              "To declare a variable in Java, you must specify: (1) the data type, (2) a name (identifier), and optionally (3) an initial value.",
              "Syntax: dataType variableName = value;  Example: int myFirstNumber = 5;",
              "Java has many built-in data types (like int, double, String, boolean) — together known as primitive types and reference types.",
              "Data types are keywords in Java — they are reserved words that tell Java what kind of value the variable will store.",
              "An identifier (variable name) must start with a letter, underscore, or dollar sign. By convention, variable names use camelCase (e.g., myFirstNumber).",
              "A String literal is any sequence of characters surrounded by double quotes — e.g., \"Hello\". Unlike variables, the literal itself cannot be changed; the variable pointing to it can be reassigned.",
              "Java operators perform operations on variables and values — for example + (addition), - (subtraction), * (multiplication), / (division), % (remainder).",
              "A declaration statement defines a variable: int myFirstNumber = 5; — the type is int, name is myFirstNumber, value is 5."
            ]
          }
        ],
        "inlineComments": [
          "Datatype = int, variable name = myFirstNumber, value = 5;"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_2_PrimitiveTypes.Sub_Chapter_1_Variables;\r\n// A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.\n// As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set.\n// To declare a variable in Java, you must specify: (1) the data type, (2) a name (identifier), and optionally (3) an initial value.\n// Syntax: dataType variableName = value;  Example: int myFirstNumber = 5;\n// Java has many built-in data types (like int, double, String, boolean) — together known as primitive types and reference types.\n// Data types are keywords in Java — they are reserved words that tell Java what kind of value the variable will store.\n// An identifier (variable name) must start with a letter, underscore, or dollar sign. By convention, variable names use camelCase (e.g., myFirstNumber).\n// A String literal is any sequence of characters surrounded by double quotes — e.g., \"Hello\". Unlike variables, the literal itself cannot be changed; the variable pointing to it can be reassigned.\n// Java operators perform operations on variables and values — for example + (addition), - (subtraction), * (multiplication), / (division), % (remainder).\n// A declaration statement defines a variable: int myFirstNumber = 5; — the type is int, name is myFirstNumber, value is 5.\r\npublic class Variables {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int myFirstNumber = 5;  //declaration statement is used to define a variable by indicating the data type, and the name, and optionally to set the variable to a certain value.\r\n\r\n        // Datatype = int, variable name = myFirstNumber, value = 5;\r\n\r\n        System.out.println(myFirstNumber);\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_2_KeyWords_And_Expressions/KeyWordsAndExpressionsInJava.java",
        "fileName": "KeyWordsAndExpressionsInJava.java",
        "topicName": "Key Words And Expressions In Java",
        "chapter": "Chapter 2: Primitive Types",
        "subChapter": "Key Words And Expressions",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
              "Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.",
              "An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.",
              "The data type declaration (e.g., 'int') is NOT part of the expression. In 'int x = 5 + 3', the expression is 'x = 5 + 3'.",
              "Control flow keywords like 'if', 'for', 'while' and their surrounding parentheses are NOT part of the expression — only the content inside the parentheses forms the expression.",
              "For example: if(highScore == 50) — the keyword 'if' and the brackets are not part of the expression. The expression is 'highScore == 50'.",
              "Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value."
            ]
          }
        ],
        "inlineComments": [
          "Expression consists of variables, values and operators."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_2_PrimitiveTypes.Sub_Chapter_2_KeyWords_And_Expressions;\r\n// Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.\n// Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.\n// Reference: https://en.wikipedia.org/wiki/List_of_Java_keywords\n// An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.\n// The data type declaration (e.g., 'int') is NOT part of the expression. In 'int x = 5 + 3', the expression is 'x = 5 + 3'.\n// Control flow keywords like 'if', 'for', 'while' and their surrounding parentheses are NOT part of the expression — only the content inside the parentheses forms the expression.\n// For example: if(highScore == 50) — the keyword 'if' and the brackets are not part of the expression. The expression is 'highScore == 50'.\n// Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value.\r\npublic class KeyWordsAndExpressionsInJava {\r\n\r\n    // Link For Java Keywords :- https://en.wikipedia.org/wiki/List_of_Java_keywords\r\n\r\n    // Expression consists of variables, values and operators.\r\n\r\n    public static void main(String[] args) {\r\n\r\n        double kilometers = (100 * 1.609344); // The data type doesn't form the part of expression, but everything else on the line forms the part of expression.  kilometers = (100 * 1.609344); forms the part of expression.\r\n\r\n        int highScore = 0; // highScore = 0; is part of the expression.\r\n\r\n        if(highScore == 50){ // Keyword if, and brackets do not form the part of expression, whatever component is inside the brackets, they are part of expression. highScore == 50 forms the part of expression.\r\n            System.out.println(\"You got the high score!\"); // You got the highscore! is a part of expression.\r\n\r\n            \r\n        }\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java",
        "fileName": "PrimitiveDataTypes.java",
        "topicName": "Primitive Data Types",
        "chapter": "Chapter 2: Primitive Types",
        "subChapter": "Primitive Data Types",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.",
              "Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient.",
              "The 8 Primitive Types:",
              "Type     | Width  | Range / Notes boolean  | 1 bit  | Only two values: true or false byte     | 8 bits | -128 to 127 short    | 16 bits| -32,768 to 32,767 char     | 16 bits| A single Unicode character — written in single quotes: 'A' int      | 32 bits| -2,147,483,648 to 2,147,483,647 (default for whole numbers) long     | 64 bits| Very large whole numbers — add 'L' suffix: 100L float    | 32 bits| Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math) double   | 64 bits| Double-precision decimal — default for decimals, add 'd': 3.14d",
              "Wrapper Classes: Java provides a wrapper class for each primitive (e.g., int -> Integer, double -> Double).",
              "These wrapper classes offer utility methods and constants like Integer.MAX_VALUE and Integer.MIN_VALUE.",
              "Overflow and Underflow: If you exceed the maximum value of a type, it wraps around (overflow).",
              "If you go below the minimum, it wraps to the maximum (underflow).",
              "Example: int max = Integer.MAX_VALUE; then max + 1 = Integer.MIN_VALUE (it wraps around!)",
              "Casting: Converting from one type to another.",
              "Widening (automatic) — smaller type to larger: byte -> short -> char -> int -> long -> float -> double",
              "Narrowing (manual, requires cast) — larger type to smaller: double -> ... -> byte",
              "Example: byte b = (byte)(someIntValue / 2);  — the (byte) cast tells Java to treat the int result as a byte.",
              "Integer division: when both operands are int, the result is also int — the decimal part is DROPPED.",
              "Example: 5/2 = 2 (not 2.5). Use 5.0/2.0 or 5d/2d to get 2.5.",
              "Precision: double has more decimal places than float.",
              "5f/3f = 1.6666666 (7 significant digits)",
              "5d/3d = 1.6666666666666667 (15+ significant digits)",
              "For currency or financial calculations, use BigDecimal instead of float/double.",
              "char and Unicode: char holds a single character, uses single quotes: char c = 'D';",
              "You can also use Unicode escape sequences: char d = '\\u0044'; (both give 'D')",
              "Unicode is an international encoding standard — every character in every language has a unique code point.",
              "boolean: can only be true or false. It is the result of any comparison or logical expression.",
              "@quiz (INTERVIEW) What are the default values of Java primitive fields and object references if you do not initialize them explicitly?",
              "@answer Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\\u0000' which is the Unicode null character.",
              "@answer Reference type fields default to null because they store no object reference yet.",
              "@answer Local variables are different: Java does NOT give them default values, so you must initialize them before use.",
              "@quiz (INTERVIEW) What happens in Java when you run: int x = Integer.MAX_VALUE; x++; ?",
              "@answer Output/value: x becomes -2147483648, which is Integer.MIN_VALUE.",
              "@answer int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value.",
              "@answer Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded.",
              "@quiz (INTERVIEW) What is the difference between widening and narrowing primitive conversions in Java?",
              "@answer Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost.",
              "@answer Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost.",
              "@answer Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated.",
              "@quiz (INTERVIEW) Is this valid Java: int x = 1_000_000; and what is the purpose of the underscores?",
              "@answer Yes, it is valid in Java 7 and later, and the value is still one million.",
              "@answer Underscores in numeric literals are ignored by the compiler and exist only to improve human readability.",
              "@answer They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F."
            ]
          }
        ],
        "inlineComments": [
          "Type     | Width  | Range / Notes",
          "boolean  | 1 bit  | Only two values: true or false byte     | 8 bits | -128 to 127 short    | 16 bits| -32,768 to 32,767 char     | 16 bits| A single Unicode character — written in single quotes: 'A' int      | 32 bits| -2,147,483,648 to 2,147,483,647 (default for whole numbers) long     | 64 bits| Very large whole numbers — add 'L' suffix: 100L float    | 32 bits| Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math) double   | 64 bits| Double-precision decimal — default for decimals, add 'd': 3.14d",
          "A variable named myValue is created which is of datatype int and the value initialised = 10000;",
          "If we try and put a larger value than the maximum in Java, or a smaller value than the minimum in Java, then we will get an Overflow in the case of the maximum value and underflow in the case of minimum"
        ],
        "customQuizzes": [
          {
            "question": "(INTERVIEW) What are the default values of Java primitive fields and object references if you do not initialize them explicitly?",
            "answers": [
              "Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\\u0000' which is the Unicode null character.",
              "Reference type fields default to null because they store no object reference yet.",
              "Local variables are different: Java does NOT give them default values, so you must initialize them before use."
            ]
          },
          {
            "question": "(INTERVIEW) What happens in Java when you run: int x = Integer.MAX_VALUE; x++; ?",
            "answers": [
              "Output/value: x becomes -2147483648, which is Integer.MIN_VALUE.",
              "int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value.",
              "Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between widening and narrowing primitive conversions in Java?",
            "answers": [
              "Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost.",
              "Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost.",
              "Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated."
            ]
          },
          {
            "question": "(INTERVIEW) Is this valid Java: int x = 1_000_000; and what is the purpose of the underscores?",
            "answers": [
              "Yes, it is valid in Java 7 and later, and the value is still one million.",
              "Underscores in numeric literals are ignored by the compiler and exist only to improve human readability.",
              "They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F."
            ]
          }
        ],
        "deepChallenges": [],
        "code": "﻿package Chapter_2_PrimitiveTypes.Sub_Chapter_3_Primitive_Data_Types;\r\n// Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.\n// Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient.\n//\n// The 8 Primitive Types:\n// Type     | Width  | Range / Notes\n// ---------|--------|--------------------------------------------------------------\n// boolean  | 1 bit  | Only two values: true or false\n// byte     | 8 bits | -128 to 127\n// short    | 16 bits| -32,768 to 32,767\n// char     | 16 bits| A single Unicode character — written in single quotes: 'A'\n// int      | 32 bits| -2,147,483,648 to 2,147,483,647 (default for whole numbers)\n// long     | 64 bits| Very large whole numbers — add 'L' suffix: 100L\n// float    | 32 bits| Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math)\n// double   | 64 bits| Double-precision decimal — default for decimals, add 'd': 3.14d\n//\n// Wrapper Classes: Java provides a wrapper class for each primitive (e.g., int -> Integer, double -> Double).\n// These wrapper classes offer utility methods and constants like Integer.MAX_VALUE and Integer.MIN_VALUE.\n//\n// Overflow and Underflow: If you exceed the maximum value of a type, it wraps around (overflow).\n// If you go below the minimum, it wraps to the maximum (underflow).\n// Example: int max = Integer.MAX_VALUE; then max + 1 = Integer.MIN_VALUE (it wraps around!)\n//\n// Casting: Converting from one type to another.\n// Widening (automatic) — smaller type to larger: byte -> short -> char -> int -> long -> float -> double\n// Narrowing (manual, requires cast) — larger type to smaller: double -> ... -> byte\n// Example: byte b = (byte)(someIntValue / 2);  — the (byte) cast tells Java to treat the int result as a byte.\n//\n// Integer division: when both operands are int, the result is also int — the decimal part is DROPPED.\n// Example: 5/2 = 2 (not 2.5). Use 5.0/2.0 or 5d/2d to get 2.5.\n//\n// Precision: double has more decimal places than float.\n// 5f/3f = 1.6666666 (7 significant digits)\n// 5d/3d = 1.6666666666666667 (15+ significant digits)\n// For currency or financial calculations, use BigDecimal instead of float/double.\n//\n// char and Unicode: char holds a single character, uses single quotes: char c = 'D';\n// You can also use Unicode escape sequences: char d = '\\u0044'; (both give 'D')\n// Unicode is an international encoding standard — every character in every language has a unique code point.\n// Reference: https://unicode-table.com/en/\n//\n// boolean: can only be true or false. It is the result of any comparison or logical expression.\n\n// @quiz (INTERVIEW) What are the default values of Java primitive fields and object references if you do not initialize them explicitly?\n// @answer Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\\u0000' which is the Unicode null character.\n// @answer Reference type fields default to null because they store no object reference yet.\n// @answer Local variables are different: Java does NOT give them default values, so you must initialize them before use.\n\n// @quiz (INTERVIEW) What happens in Java when you run: int x = Integer.MAX_VALUE; x++; ?\n// @answer Output/value: x becomes -2147483648, which is Integer.MIN_VALUE.\n// @answer int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value.\n// @answer Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded.\n\n// @quiz (INTERVIEW) What is the difference between widening and narrowing primitive conversions in Java?\n// @answer Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost.\n// @answer Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost.\n// @answer Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated.\n\n// @quiz (INTERVIEW) Is this valid Java: int x = 1_000_000; and what is the purpose of the underscores?\n// @answer Yes, it is valid in Java 7 and later, and the value is still one million.\n// @answer Underscores in numeric literals are ignored by the compiler and exist only to improve human readability.\n// @answer They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F.\npublic class PrimitiveDataTypes {\n\r\n    public static void main(String[] args) {\r\n\r\n        // int myValue = 10000; // A variable named myValue is created which is of datatype int and the value initialised = 10000;\r\n\r\n        int intMaxValue = Integer.MAX_VALUE; //int is a primitive data type and Integer is its wrapper class.\r\n\r\n        int intMinValue = Integer.MIN_VALUE; //By specifying wrapper class Integer, it allows us to perform different operations on int.\r\n\r\n        System.out.println(\"The max Value of the integer is = \" + intMaxValue); //The max Value of the integer is = 2147483647\r\n        System.out.println(\"The min Value of the integer is = \" + intMinValue); //The min Value of the integer is = -2147483648\r\n\r\n        //If we try and put a larger value than the maximum in Java, or a smaller value than the minimum in Java,\r\n        // then we will get an Overflow in the case of the maximum value and underflow in the case of minimum\r\n\r\n        System.out.println(\"The overflow value of int is  = \" + (intMaxValue + 1)); //The overflow value of int is  = -2147483648\r\n        System.out.println(\"The underflow value of int is = \" + (intMinValue - 1)); //The underflow value of int is = 2147483647\r\n\r\n        byte myMaxByteValue = Byte.MAX_VALUE;\r\n        byte myMinByteValue = Byte.MIN_VALUE;\r\n\r\n        System.out.println(\"The max Value of the Byte is = \" + myMaxByteValue); //The max Value of the Byte is = 127\r\n        System.out.println(\"The min Value of the Byte is = \" + myMinByteValue); //The min Value of the Byte is = -128\r\n\r\n        short myShortMaxValue = Short.MAX_VALUE;\r\n        short myShortMinValue = Short.MIN_VALUE;\r\n\r\n        System.out.println(\"The max Value of Short is = \" + myShortMaxValue); //The max Value of Short is = 32767\r\n        System.out.println(\"The min Value of Short is = \" + myShortMinValue); //The min Value of Short is = -32768\r\n\r\n        long myLongValue = 100L; //We need to put letter L in the end to make it as long value.\r\n\r\n        long myLongMaxValue = Long.MAX_VALUE;\r\n        long myLongMinValue = Long.MIN_VALUE;\r\n\r\n        System.out.println(\"The max Value of Long is = \" + myLongMaxValue); //The max Value of Long is = 9223372036854775807\r\n        System.out.println(\"The min Value of Long is = \" + myLongMinValue); //The min Value of Long is = -9223372036854775808\r\n\r\n        byte myNewByteValue = (byte) (intMinValue / 2); //By Casting, we tell/instruct java to treat the int value as byte\r\n\r\n        float myMaxFloatValue = Float.MAX_VALUE;\r\n        float myMinFloatValue = Float.MIN_VALUE;\r\n\r\n        System.out.println(\"The max Value of Float is = \" + myMaxFloatValue); //The max Value of Float is = 3.4028235E38\r\n        System.out.println(\"The min Value of Float is = \" + myMinFloatValue); //The min Value of Float is = 1.4E-45\r\n\r\n        double myMaxDoubleValue = Double.MAX_VALUE;\r\n        double myMinDoubleValue = Double.MIN_VALUE;\r\n\r\n        System.out.println(\"The max Value of Double is = \" + myMaxDoubleValue); //The max Value of Double is = 1.7976931348623157E308\r\n        System.out.println(\"The min Value of Double is = \" + myMinDoubleValue); //The min Value of Double is = 4.9E-324\r\n\r\n        int myIntValue = 5;          // For whole numbers int is considered as default\r\n        float myFloatValue = 5.3f;   // To declare float, it is best practice adding f after declaring number at the end of expression\r\n        double myDoubleValue = 5.4d; // For floating point numbers, double is accepted as default. To declare double, it is best practice adding d after declaring number at the end of the declaration\r\n\r\n        int intValue = (5 / 2);\r\n        float floatValue = (5f / 2f);\r\n        double doubleValue = (5d / 2d);\r\n\r\n        System.out.println(\"Int value is = \" + intValue);       //Int value is = 2. Since integer is a whole number, it doesn't handle the remainder of the dividend and divisor\r\n        System.out.println(\"Float value is = \" + floatValue);   //Float value is = 2.5\r\n        System.out.println(\"Double value is = \" + doubleValue); //Double value is = 2.5\r\n\r\n        int intValuePrecision = (5 / 3);\r\n        float floatValuePrecision = (5f / 3f);\r\n\r\n        double doubleValuePrecision = (5d / 3d);\r\n\r\n        System.out.println(\"Int precision value is = \" + intValuePrecision);       //Int precision value is = 1\r\n        System.out.println(\"Float precision value is = \" + floatValuePrecision);   //Float precision value is = 1.6666666\r\n        System.out.println(\"Double precision value is = \" + doubleValuePrecision); //Double precision value is = 1.6666666666666667\r\n\r\n        char myChar = 'D';\r\n        char myUnicodeChar = '\\u0044';\r\n\r\n        System.out.println(\"myChar value is \" + myChar);\r\n        System.out.println(\"myUnicodeChar value is \" + myUnicodeChar);\r\n\r\n        boolean myTrueBooleanValue = true;\r\n       boolean myFalseBooleanValue = false;\r\n\r\n\r\n    }\r\n\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 3: Operators",
    "topics": [
      {
        "filePath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java",
        "fileName": "OperatorsOperandsExpressions.java",
        "topicName": "Operators Operands Expressions",
        "chapter": "Chapter 3: Operators",
        "subChapter": "Operators Operands And Expressions",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Summary of Operators",
              "1) Operator --> (+) plus operator",
              "For Numeric types --> Addition",
              "For char          --> Addition",
              "For boolean       --> Not Applicable",
              "For String        --> Concatenation",
              "2) Operator --> (-) Subtraction",
              "For Numeric types --> Subtraction",
              "For char          --> Subtraction",
              "For boolean       --> Not Applicable",
              "For String        --> Not Applicable",
              "3) Operator --> (*) Multiplication",
              "For Numeric Types  --> Multiplication",
              "For char           --> Multiplication",
              "For boolean        --> Not Applicable",
              "For String         --> Not Applicable",
              "4) Operator --> ( / ) Division",
              "For Numeric Types --> Division",
              "For char          --> Division",
              "For boolean       --> Not Applicable",
              "For String        --> Not Applicable",
              "5) Operator --> ( % ) Modulus (Remainder)",
              "For Numeric Types --> Remainder (Modulus)",
              "For char          --> Remainder (Modulus)",
              "For boolean       --> Not Applicable",
              "For String        --> Not Applicable"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Operators in Java are special symbols that perform specific operations on one or more values (operands) and produce a result.",
              "An operand is any value, variable, or expression that an operator acts upon. Example: in '15 + 12', 15 and 12 are operands, + is the operator.",
              "An expression is a combination of variables, literals, operators, and method calls that evaluates to a single value.",
              "Java supports arithmetic, comparison (relational), logical, bitwise, assignment, and other operators.",
              "Shorthand (compound assignment) operators combine an operation with assignment: += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign).",
              "Increment (++) adds 1 to a variable: myVar++ is equivalent to myVar = myVar + 1.",
              "Decrement (--) subtracts 1 from a variable: myVar-- is equivalent to myVar = myVar - 1.",
              "Operator precedence determines the order in which operators are evaluated in an expression (like BODMAS/PEMDAS in maths). Use parentheses to override precedence.",
              "Reference for operator precedence: cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html",
              "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");",
              "@answer Output: 30Java",
              "@answer + is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + \"Java\" = \"30Java\" (String concat).",
              "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + 10 + 20);",
              "@answer Output: Java1020 (NOT Java30)",
              "@answer \"Java\" + 10 = \"Java10\" (String concat), then \"Java10\" + 20 = \"Java1020\". Once a String is the left operand, all + after it are concatenation.",
              "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + (10 + 20));",
              "@answer Output: Java30",
              "@answer Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then \"Java\" + 30 = \"Java30\".",
              "@answer This is the FIX when you want arithmetic inside a String expression: wrap with parentheses.",
              "@quiz (INTERVIEW) What is the golden rule for the + operator in Java when Strings are involved?",
              "@answer Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression.",
              "@answer Use parentheses to control evaluation order: \"Score: \" + (a + b) gives arithmetic sum. \"Score: \" + a + b gives two separate concatenations.",
              "@quiz (INTERVIEW TRAP) What is wrong with writing if (x = 5) instead of if (x == 5)?",
              "@answer = is the assignment operator, while == is the equality comparison operator.",
              "@answer With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int.",
              "@answer The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5.",
              "@quiz (INTERVIEW TRAP) What is the output of: int x = 10; String result = (x > 5) ? \"big\" : \"small\"; System.out.println(result);",
              "@answer Output: big",
              "@answer The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is \"big\".",
              "@quiz (INTERVIEW) Why does byte b = 10; b += 5; compile, but b = b + 5; does not?",
              "@answer b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition.",
              "@answer b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast.",
              "@answer After b += 5, the value of b becomes 15.",
              "@quiz (INTERVIEW) What is the difference between & and && when used with boolean expressions?",
              "@answer && is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side.",
              "@answer & on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false.",
              "@answer This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady()."
            ]
          }
        ],
        "inlineComments": [
          "myVar = myVar + 1 is equivalent to myVar++ (increment by 1).",
          "myVar = myVar - 1 is equivalent to myVar-- (decrement by 1).",
          "myVar = myVar + 2 is equivalent to myVar += 2.",
          "myVar = myVar - 2 is equivalent to myVar -= 2.",
          "myVar = myVar * 10 is equivalent to myVar *= 10.",
          "myVar = myVar / 10 is equivalent to myVar /= 10."
        ],
        "customQuizzes": [
          {
            "question": "(INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");",
            "answers": [
              "Output: 30Java",
              "+ is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + \"Java\" = \"30Java\" (String concat)."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + 10 + 20);",
            "answers": [
              "Output: Java1020 (NOT Java30)",
              "\"Java\" + 10 = \"Java10\" (String concat), then \"Java10\" + 20 = \"Java1020\". Once a String is the left operand, all + after it are concatenation."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + (10 + 20));",
            "answers": [
              "Output: Java30",
              "Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then \"Java\" + 30 = \"Java30\".",
              "This is the FIX when you want arithmetic inside a String expression: wrap with parentheses."
            ]
          },
          {
            "question": "(INTERVIEW) What is the golden rule for the + operator in Java when Strings are involved?",
            "answers": [
              "Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression.",
              "Use parentheses to control evaluation order: \"Score: \" + (a + b) gives arithmetic sum. \"Score: \" + a + b gives two separate concatenations."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is wrong with writing if (x = 5) instead of if (x == 5)?",
            "answers": [
              "= is the assignment operator, while == is the equality comparison operator.",
              "With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int.",
              "The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5."
            ]
          },
          {
            "question": "(INTERVIEW TRAP) What is the output of: int x = 10; String result = (x > 5) ? \"big\" : \"small\"; System.out.println(result);",
            "answers": [
              "Output: big",
              "The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is \"big\"."
            ]
          },
          {
            "question": "(INTERVIEW) Why does byte b = 10; b += 5; compile, but b = b + 5; does not?",
            "answers": [
              "b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition.",
              "b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast.",
              "After b += 5, the value of b becomes 15."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between & and && when used with boolean expressions?",
            "answers": [
              "&& is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side.",
              "& on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false.",
              "This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady()."
            ]
          }
        ],
        "deepChallenges": [],
        "code": "﻿package Chapter_3_Operators.Sub_Chapter_1_Operators_Operands_And_Expressions;\n// Operators in Java are special symbols that perform specific operations on one or more values (operands) and produce a result.\n// An operand is any value, variable, or expression that an operator acts upon. Example: in '15 + 12', 15 and 12 are operands, + is the operator.\n// An expression is a combination of variables, literals, operators, and method calls that evaluates to a single value.\n// Java supports arithmetic, comparison (relational), logical, bitwise, assignment, and other operators.\n// Shorthand (compound assignment) operators combine an operation with assignment: += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign).\n// Increment (++) adds 1 to a variable: myVar++ is equivalent to myVar = myVar + 1.\n// Decrement (--) subtracts 1 from a variable: myVar-- is equivalent to myVar = myVar - 1.\n// Operator precedence determines the order in which operators are evaluated in an expression (like BODMAS/PEMDAS in maths). Use parentheses to override precedence.\n// Reference for operator precedence: cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html\n/*\r\n*  Summary of Operators\r\n*\r\n* 1) Operator --> (+) plus operator\r\n*  For Numeric types --> Addition\r\n*  For char          --> Addition\r\n*  For boolean       --> Not Applicable\r\n*  For String        --> Concatenation\r\n*\r\n* 2) Operator --> (-) Subtraction\r\n*  For Numeric types --> Subtraction\r\n*  For char          --> Subtraction\r\n*  For boolean       --> Not Applicable\r\n*  For String        --> Not Applicable\r\n*\r\n* 3) Operator --> (*) Multiplication\r\n*  For Numeric Types  --> Multiplication\r\n*  For char           --> Multiplication\r\n*  For boolean        --> Not Applicable\r\n*  For String         --> Not Applicable\r\n*\r\n* 4) Operator --> ( / ) Division\r\n*  For Numeric Types --> Division\r\n*  For char          --> Division\r\n*  For boolean       --> Not Applicable\r\n*  For String        --> Not Applicable\r\n*\r\n* 5) Operator --> ( % ) Modulus (Remainder)\r\n*  For Numeric Types --> Remainder (Modulus)\r\n*  For char          --> Remainder (Modulus)\r\n*  For boolean       --> Not Applicable\r\n*  For String        --> Not Applicable\r\n*\r\n*\r\n* */\r\n\r\n// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");\n// @answer Output: 30Java\n// @answer + is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + \"Java\" = \"30Java\" (String concat).\n\n// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + 10 + 20);\n// @answer Output: Java1020 (NOT Java30)\n// @answer \"Java\" + 10 = \"Java10\" (String concat), then \"Java10\" + 20 = \"Java1020\". Once a String is the left operand, all + after it are concatenation.\n\n// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + (10 + 20));\n// @answer Output: Java30\n// @answer Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then \"Java\" + 30 = \"Java30\".\n// @answer This is the FIX when you want arithmetic inside a String expression: wrap with parentheses.\n\n// @quiz (INTERVIEW) What is the golden rule for the + operator in Java when Strings are involved?\n// @answer Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression.\n// @answer Use parentheses to control evaluation order: \"Score: \" + (a + b) gives arithmetic sum. \"Score: \" + a + b gives two separate concatenations.\n\n// @quiz (INTERVIEW TRAP) What is wrong with writing if (x = 5) instead of if (x == 5)?\n// @answer = is the assignment operator, while == is the equality comparison operator.\n// @answer With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int.\n// @answer The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5.\n\n// @quiz (INTERVIEW TRAP) What is the output of: int x = 10; String result = (x > 5) ? \"big\" : \"small\"; System.out.println(result);\n// @answer Output: big\n// @answer The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is \"big\".\n\n// @quiz (INTERVIEW) Why does byte b = 10; b += 5; compile, but b = b + 5; does not?\n// @answer b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition.\n// @answer b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast.\n// @answer After b += 5, the value of b becomes 15.\n\n// @quiz (INTERVIEW) What is the difference between & and && when used with boolean expressions?\n// @answer && is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side.\n// @answer & on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false.\n// @answer This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady().\n\npublic class OperatorsOperandsExpressions {\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.\r\n        double hoursWorked = 9.5d;\r\n        double hourlyRate = 5d;\r\n        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.\r\n\r\n        // myVar = myVar + 1 is equivalent to myVar++ (increment by 1).\r\n        myVar++;\r\n        System.out.println(myVar);\r\n\r\n        // myVar = myVar - 1 is equivalent to myVar-- (decrement by 1).\r\n        myVar--;\r\n        System.out.println(myVar);\r\n\r\n        // myVar = myVar + 2 is equivalent to myVar += 2.\r\n        myVar += 2;\r\n        System.out.println(myVar);\r\n\r\n        // myVar = myVar - 2 is equivalent to myVar -= 2.\r\n        myVar -= 2;\r\n        System.out.println(myVar);\r\n\r\n        // myVar = myVar * 10 is equivalent to myVar *= 10.\r\n        myVar *= 10;\r\n        System.out.println(myVar);\r\n\r\n        // myVar = myVar / 10 is equivalent to myVar /= 10.\r\n        myVar /= 10;\r\n        System.out.println(myVar);\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_3_Operators/Sub_Chapter_2_OperatorsChallenge/OperatorChallenge.java",
        "fileName": "OperatorChallenge.java",
        "topicName": "Operator Challenge",
        "chapter": "Chapter 3: Operators",
        "subChapter": "Operators Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "OPERATOR CHALLENGE",
              "1. Create a double variable with a value of 20.00",
              "2. Create a second variable of type double with the value 80.00",
              "3. Add both numbers together and multiply by 100.00",
              "4. Use the remainder operator to figure out what the remainder from the result of the operation in step 3 and 40.00",
              "We used the modulus or remainder operator on int in the course, but we can also use it on a double.",
              "5. Create a boolean variable that assigns the value \"true\" if the remainder in step 4 is 0, or \"false\" , if it's not 0",
              "6. Output the boolean variable.",
              "7. Write an if-then statement that displays a message \"Got some remainder\" if the boolean in step is \"not true\"."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "CODING CHALLENGE — Operators Practice",
              "This challenge demonstrates practical use of arithmetic operators, the modulus (remainder) operator, boolean logic, and the ternary operator.",
              "Key concept: the modulus operator (%) gives the REMAINDER of division. If a % b == 0, then a is perfectly divisible by b with no remainder.",
              "The ternary operator syntax: condition ? valueIfTrue : valueIfFalse — a compact way to assign one of two values based on a condition.",
              "The NOT operator (!) inverts a boolean: if checkRemainder is true, !checkRemainder is false, and vice versa."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_3_Operators.Sub_Chapter_2_OperatorsChallenge;\n// CODING CHALLENGE — Operators Practice\n// This challenge demonstrates practical use of arithmetic operators, the modulus (remainder) operator, boolean logic, and the ternary operator.\n// Key concept: the modulus operator (%) gives the REMAINDER of division. If a % b == 0, then a is perfectly divisible by b with no remainder.\n// The ternary operator syntax: condition ? valueIfTrue : valueIfFalse — a compact way to assign one of two values based on a condition.\n// The NOT operator (!) inverts a boolean: if checkRemainder is true, !checkRemainder is false, and vice versa.\n/*\r\n\r\nOPERATOR CHALLENGE\r\n\r\n1. Create a double variable with a value of 20.00\r\n2. Create a second variable of type double with the value 80.00\r\n3. Add both numbers together and multiply by 100.00\r\n4. Use the remainder operator to figure out what the remainder from the result of the operation in step 3 and 40.00\r\n   We used the modulus or remainder operator on int in the course, but we can also use it on a double.\r\n5. Create a boolean variable that assigns the value \"true\" if the remainder in step 4 is 0, or \"false\" , if it's not 0\r\n6. Output the boolean variable.\r\n7. Write an if-then statement that displays a message \"Got some remainder\" if the boolean in step is \"not true\".\r\n\r\n*/\r\n\r\npublic class OperatorChallenge {\r\n    public static void main(String[] args) {\r\n\r\n        double myFirstValue = 20.00D;\r\n\r\n        double mySecondValue = 80.00D;\r\n\r\n        double sum = (myFirstValue + mySecondValue) * 100.00D;\r\n\r\n        double remainder = sum % 40.00D;\r\n\r\n        boolean checkRemainder = (remainder == 0) ? true : false;\r\n\r\n        System.out.println(\"Remainder check is :-  \" + checkRemainder);\r\n\r\n        if(!checkRemainder){\r\n            System.out.println(\"Got some remainder\");\r\n        }\r\n\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 5: Statements And Indentations",
    "topics": [
      {
        "filePath": "src/Chapter_5_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java",
        "fileName": "StatementsWhiteSpaceAndIndentation.java",
        "topicName": "Statements White Space And Indentation",
        "chapter": "Chapter 5: Statements And Indentations",
        "subChapter": "",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
              "Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
              "A single statement CAN span multiple lines — Java doesn't care about line breaks, only about the semicolon that ends the statement.",
              "Example: String s = \"Hello\" + \" World\" + \"!\"; — this is one statement split across multiple lines. It's still valid.",
              "Multiple statements CAN be placed on a single line, though it reduces readability.",
              "Whitespace (spaces, tabs, blank lines) between tokens is completely ignored by the Java compiler. It is for human readability only.",
              "Indentation is not required by Java — code will compile and run with any (or no) indentation. BUT proper indentation is essential for readability and shows the logical nesting of code blocks.",
              "In IntelliJ IDEA: Code -> Reformat Code (Ctrl+Alt+L) will auto-indent and format your code.",
              "Best practice: one statement per line, consistent indentation (usually 4 spaces or 1 tab per level)."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_5_Statements_And_Indentations;\r\n// A Java statement is a complete unit of execution. Most statements end with a semicolon (;).\n// Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.\n// A single statement CAN span multiple lines — Java doesn't care about line breaks, only about the semicolon that ends the statement.\n// Example: String s = \"Hello\" + \" World\" + \"!\"; — this is one statement split across multiple lines. It's still valid.\n// Multiple statements CAN be placed on a single line, though it reduces readability.\n// Whitespace (spaces, tabs, blank lines) between tokens is completely ignored by the Java compiler. It is for human readability only.\n// Indentation is not required by Java — code will compile and run with any (or no) indentation. BUT proper indentation is essential for readability and shows the logical nesting of code blocks.\n// In IntelliJ IDEA: Code -> Reformat Code (Ctrl+Alt+L) will auto-indent and format your code.\n// Best practice: one statement per line, consistent indentation (usually 4 spaces or 1 tab per level).\r\npublic class StatementsWhiteSpaceAndIndentation {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVariable = 50; // Statement represents the entire line. Adding datatype at the start of the expression and then finishing of with a semicolon we have made a valid Java Statement.\r\n        myVariable++; // This also represents complete statement\r\n        System.out.println(\"This is a test\"); // This also represents complete statement.\r\n\r\n        System.out.println(\"This is\" +\r\n                \" another\" +\r\n                \" still more.\"); // This is a valid statement, spread across multiple lines\r\n\r\n        int var = 5;\r\n        var--;\r\n        System.out.println(\"Writing in same line\");\r\n\r\n        int anotherVar\r\n                =\r\n                50; // Its a completely valid code, java compiles the code, deletes the spaces internally.\r\n\r\n\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 6: If Else Statements",
    "topics": [
      {
        "filePath": "src/Chapter_6_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java",
        "fileName": "IfExample.java",
        "topicName": "If Example",
        "chapter": "Chapter 6: If Else Statements",
        "subChapter": "If Then Else Control Statement",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Ternary Operator Example :-",
              "Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.",
              "Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.",
              "Operand three - false. is the value to be assigned to the variable isEighteenOrOver if the condition above is false."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Conditional logic (also called control flow) lets your program make decisions: execute different code depending on whether a condition is true or false.",
              "The if statement evaluates a boolean expression. If the expression is true, the code block runs. If false, it is skipped.",
              "IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.",
              "Always use curly braces { } with if — even for single-line bodies. It prevents bugs when you add more code later.",
              "Comparison operators for conditions: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater or equal), <= (less or equal).",
              "Logical AND (&&): both conditions must be true. Example: (score >= 50) && (score < 100)",
              "Logical OR (||): at least one condition must be true. Example: (score < 10) || (score > 90)",
              "The NOT operator (!): inverts a boolean. !true = false. !false = true. Example: if(!isAlien) means \"if isAlien is false\".",
              "The assignment operator (=) assigns a value. The equality operator (==) compares values. Never use = inside a condition — use == instead.",
              "Ternary Operator: a compact if-else in a single expression. Syntax: condition ? valueIfTrue : valueIfFalse",
              "Example from code below: boolean wasCar = isCar ? true : false; — if isCar is true, wasCar = true; else wasCar = false.",
              "Reference for operator precedence: cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html"
            ]
          }
        ],
        "inlineComments": [
          "If keyword, takes what inside the parenthesis,and if(and only if), the result of expression is true, next line will be executed."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_6_If_Else_Statements.Sub_Chapter_1_If_Then_Else_Control_Statement;\n// Conditional logic (also called control flow) lets your program make decisions: execute different code depending on whether a condition is true or false.\n// The if statement evaluates a boolean expression. If the expression is true, the code block runs. If false, it is skipped.\n// IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.\n// Always use curly braces { } with if — even for single-line bodies. It prevents bugs when you add more code later.\n// Comparison operators for conditions: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater or equal), <= (less or equal).\n// Logical AND (&&): both conditions must be true. Example: (score >= 50) && (score < 100)\n// Logical OR (||): at least one condition must be true. Example: (score < 10) || (score > 90)\n// The NOT operator (!): inverts a boolean. !true = false. !false = true. Example: if(!isAlien) means \"if isAlien is false\".\n// The assignment operator (=) assigns a value. The equality operator (==) compares values. Never use = inside a condition — use == instead.\n// Ternary Operator: a compact if-else in a single expression. Syntax: condition ? valueIfTrue : valueIfFalse\n// Example from code below: boolean wasCar = isCar ? true : false; — if isCar is true, wasCar = true; else wasCar = false.\n// Reference for operator precedence: cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html\n/*\r\n    Ternary Operator Example :-\r\n\r\n    int ageOfClient = 20;\r\n\r\n    boolean isEighteenOrOver = (ageOfClient == 20) ? true : false;\r\n\r\n    Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.\r\n\r\n    Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.\r\n\r\n    Operand three - false. is the value to be assigned to the variable isEighteenOrOver if the condition above is false.\r\n\r\n */\r\npublic class IfExample {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        boolean isAlien = false;\r\n\r\n        // If keyword, takes what inside the parenthesis,and if(and only if), the result of expression is true, next line will be executed.\r\n        if(isAlien == false){ // condition check\r\n            System.out.println(\"It is not an alien!\");\r\n        } // Always uses code block, with if statement, it reduces confusion. It allows more than one statement to be executed.\r\n\r\n        int topScore = 100;\r\n        if(topScore == 100){\r\n            System.out.println(\"You got the high score!\");\r\n        }\r\n        if(topScore != 100){\r\n            System.out.println(\"You didn't get the high score!\");\r\n        }\r\n        if(topScore >= 100){\r\n            System.out.println(\"You got the high score for greater than equal to!\");\r\n        }\r\n        if((topScore >= 100) && (topScore < 200)){ // && represents logical AND operator\r\n            System.out.println(\"You got the high score\");\r\n        }\r\n\r\n        if((topScore < 100) || (topScore >= 100)){ // || represents logical OR operator\r\n            System.out.println(\"You got the high score\");\r\n        }\r\n\r\n        boolean isCar = false;\r\n        if(isCar == true){ // Ideally, we should have used equalsTo(==) operator in place of assignment(=) operator. In this case,\r\n            System.out.println(\"This is not supposed to happen\");\r\n\r\n            boolean wasCar = isCar ? true : false; //Here since isCar value is false, the condition is checked first, since the condition is false, so false value gets assigned to wasCar.\r\n\r\n            if(wasCar){\r\n                System.out.println(\"wasCar is true\");\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_6_If_Else_Statements/Sub_Chapter_2_Code_Block_If_Then_Else_Challenge/CodeBlocksIfThenElse.java",
        "fileName": "CodeBlocksIfThenElse.java",
        "topicName": "Code Blocks If Then Else",
        "chapter": "Chapter 6: If Else Statements",
        "subChapter": "Code Block If Then Else Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
              "Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }",
              "The 'else' block is the fallback — it runs only when ALL preceding conditions are false.",
              "Once one branch executes, ALL other branches are skipped — even if their conditions would also be true.",
              "Code blocks (curly braces {}) create a new scope. Variables declared INSIDE an if/else block are local to that block.",
              "A variable declared inside an if block IS accessible by inner nested blocks, but NOT by the outer block or sibling else blocks.",
              "Scope example: if(gameOver) { int finalScore = ...; } — finalScore is only accessible inside the if block.",
              "Trying to use finalScore outside that if block would cause a compile error: \"Cannot resolve symbol 'finalScore'\".",
              "Once a code block ends, Java removes the variables declared inside it from memory. This is why you can re-declare finalScore in a second if(gameOver) block — Java treats it as a fresh variable.",
              "Inner blocks CAN access variables from their containing outer block (e.g., score, levelCompleted, bonus are in the outer method block and accessible inside the if block).",
              "The concept of where a variable is accessible is called its SCOPE. Narrowing scope is a best practice — declare variables as close to where they are used as possible."
            ]
          }
        ],
        "inlineComments": [
          "Since, finalScore variable is defined in the inner code block / inner scope, the outer code block cannot access inner scope variables. Hence, the error is shown."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_6_If_Else_Statements.Sub_Chapter_2_Code_Block_If_Then_Else_Challenge;\r\n// An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.\n// Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }\n// The 'else' block is the fallback — it runs only when ALL preceding conditions are false.\n// Once one branch executes, ALL other branches are skipped — even if their conditions would also be true.\n// Code blocks (curly braces {}) create a new scope. Variables declared INSIDE an if/else block are local to that block.\n// A variable declared inside an if block IS accessible by inner nested blocks, but NOT by the outer block or sibling else blocks.\n// Scope example: if(gameOver) { int finalScore = ...; } — finalScore is only accessible inside the if block.\n// Trying to use finalScore outside that if block would cause a compile error: \"Cannot resolve symbol 'finalScore'\".\n// Once a code block ends, Java removes the variables declared inside it from memory. This is why you can re-declare finalScore in a second if(gameOver) block — Java treats it as a fresh variable.\n// Inner blocks CAN access variables from their containing outer block (e.g., score, levelCompleted, bonus are in the outer method block and accessible inside the if block).\n// The concept of where a variable is accessible is called its SCOPE. Narrowing scope is a best practice — declare variables as close to where they are used as possible.\r\npublic class CodeBlocksIfThenElse {\r\n\r\n    public static void main(String[] args) {\r\n        boolean gameOver = true;\r\n        int score = 5000;\r\n        int levelCompleted = 5;\r\n        int bonus = 100;\r\n\r\n        if(score < 5000 && score > 1000){ //If the (if condition) passes, the code block inside (if condition) will execute and (else if condition) and (else condition) will be skipped, otherwise the control will shift/switch to (else if condition).\r\n            System.out.println(\"Your score was less than 5000 but greater than 1000\");\r\n        }else if(score < 1000){ //If the (else if condition) passes, the code block inside (else if condition) will execute and (else condition) will be skipped, otherwise the control will shift/switch to (else condition).\r\n            System.out.println(\"Your score was less than 1000\");\r\n        }else { // The (else condition) code block will get executed, if the (if condition) and (else if condition) both fails, the code block inside (else condition) will execute.\r\n            System.out.println(\"Got here\");\r\n        }\r\n\r\n        if(gameOver){\r\n            int finalScore = score + (levelCompleted * bonus); // Since, score, levelCompleted and bonus variable are part of outer scope(they have been defined in the outside code block), the inner scope / inner code block can access these variables\r\n            System.out.println(\"Your final score was \" + finalScore);\r\n        }\r\n\r\n       // int myFinalScore = finalScore; // Since, finalScore variable is defined in the inner code block / inner scope, the outer code block cannot access inner scope variables. Hence, the error is shown.\r\n\r\n        if(gameOver){\r\n            int finalScore = score + (levelCompleted * bonus); // As soon as the first inner scope code block finishes, the finalScore variable gets removed by Java, hence we again reuse finalScore variable inside the new code block.\r\n            System.out.println(\"Your final score was \" + finalScore);\r\n        }\r\n\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 7: Methods In Java",
    "topics": [
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java",
        "fileName": "MethodsInJava.java",
        "topicName": "Methods In Java",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods In Java",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
              "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.",
              "Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }",
              "The return type declares what type of value the method sends back to the caller. Use 'void' if the method returns nothing.",
              "If a method has a non-void return type, it MUST have a 'return statement' that returns a value of that type.",
              "Parameters are local variables automatically created when the method is called, holding the values (arguments) passed in. They are destroyed when the method returns.",
              "You can call a method with literal values: calculateScore(true, 800, 5, 100)",
              "Or with variables: calculateScore(gameOver, score, levelCompleted, bonus) — the VALUES of those variables are passed.",
              "Method overloading: you can have multiple methods with the SAME name but DIFFERENT parameter lists (different number or types of parameters). Java picks the correct version based on the arguments you pass.",
              "A negative return value (like -1) is a common programming convention to signal that something went wrong or the input was invalid.",
              "This file shows: (1) a void method with no parameters, (2) a commented-out void method with parameters (showing the evolution), and (3) the final int-returning overloaded method.",
              "@quiz (INTERVIEW) Is Java pass-by-value or pass-by-reference?",
              "@answer Java is ALWAYS pass-by-value.",
              "@answer For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable.",
              "@answer For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference.",
              "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
              "@quiz (INTERVIEW) How does Java choose between overloaded methods such as print(int x) and print(double x)?",
              "@answer Java resolves overloads at compile time and chooses the most specific applicable method.",
              "@answer Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double.",
              "@answer If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order.",
              "@quiz (INTERVIEW) What is the difference between a void method and a method with a return type?",
              "@answer A void method performs work but does not return a value to the caller.",
              "@answer A method with a return type must return a value of that declared type on every valid execution path.",
              "@answer You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use.",
              "@quiz (INTERVIEW) What is the difference between a static method and an instance method in Java?",
              "@answer A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork().",
              "@answer An instance method belongs to a specific object and is called on an object reference.",
              "@answer Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members."
            ]
          }
        ],
        "inlineComments": [
          "Calling the overloaded method with parameters",
          "The parameters should be passed in the same order as it is defined in the method.",
          "We can also pass the values to the method using variables",
          "When we define parameters,Java will automatically create variables with appropriate data types, and it gets deleted, once process goes back to the line where method is called.",
          "void means don't send any value back.If we don 't the method to return any information, we use void as a return type of method.",
          "Here, the data return type is int, which means method is returning a value of type int.",
          "If we have to return any information, and send the value(result) back to the method call, we can use the method with return type option"
        ],
        "customQuizzes": [
          {
            "question": "(INTERVIEW) Is Java pass-by-value or pass-by-reference?",
            "answers": [
              "Java is ALWAYS pass-by-value.",
              "For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable.",
              "For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference.",
              "Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
            ]
          },
          {
            "question": "(INTERVIEW) How does Java choose between overloaded methods such as print(int x) and print(double x)?",
            "answers": [
              "Java resolves overloads at compile time and chooses the most specific applicable method.",
              "Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double.",
              "If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between a void method and a method with a return type?",
            "answers": [
              "A void method performs work but does not return a value to the caller.",
              "A method with a return type must return a value of that declared type on every valid execution path.",
              "You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between a static method and an instance method in Java?",
            "answers": [
              "A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork().",
              "An instance method belongs to a specific object and is called on an object reference.",
              "Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members."
            ]
          }
        ],
        "deepChallenges": [],
        "code": "﻿package Chapter_7_Methods_In_Java.Sub_Chapter_1_Methods_In_Java;\r\n// A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.\n// Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.\n// Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }\n// The return type declares what type of value the method sends back to the caller. Use 'void' if the method returns nothing.\n// If a method has a non-void return type, it MUST have a 'return statement' that returns a value of that type.\n// Parameters are local variables automatically created when the method is called, holding the values (arguments) passed in. They are destroyed when the method returns.\n// You can call a method with literal values: calculateScore(true, 800, 5, 100)\n// Or with variables: calculateScore(gameOver, score, levelCompleted, bonus) — the VALUES of those variables are passed.\n// Method overloading: you can have multiple methods with the SAME name but DIFFERENT parameter lists (different number or types of parameters). Java picks the correct version based on the arguments you pass.\n// A negative return value (like -1) is a common programming convention to signal that something went wrong or the input was invalid.\n// This file shows: (1) a void method with no parameters, (2) a commented-out void method with parameters (showing the evolution), and (3) the final int-returning overloaded method.\n\n// @quiz (INTERVIEW) Is Java pass-by-value or pass-by-reference?\n// @answer Java is ALWAYS pass-by-value.\n// @answer For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable.\n// @answer For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference.\n// @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.\n\n// @quiz (INTERVIEW) How does Java choose between overloaded methods such as print(int x) and print(double x)?\n// @answer Java resolves overloads at compile time and chooses the most specific applicable method.\n// @answer Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double.\n// @answer If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order.\n\n// @quiz (INTERVIEW) What is the difference between a void method and a method with a return type?\n// @answer A void method performs work but does not return a value to the caller.\n// @answer A method with a return type must return a value of that declared type on every valid execution path.\n// @answer You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use.\n\n// @quiz (INTERVIEW) What is the difference between a static method and an instance method in Java?\n// @answer A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork().\n// @answer An instance method belongs to a specific object and is called on an object reference.\n// @answer Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members.\npublic class MethodsInJava {\n\r\n    public static void main(String[] args) {\r\n     calculateScore(); //method without any parameter\r\n     // calculateScore(true,800,5,100); // Calling the overloaded method with parameters\r\n        // The parameters should be passed in the same order as it is defined in the method.\r\n\r\n        int highScore = calculateScore(true,800,5,100); // The value returned by calculateScore function is now assigned to highScore variable.\r\n        System.out.println(\"Your final score was \" + highScore);\r\n\r\n        // We can also pass the values to the method using variables\r\n\r\n        boolean gameOver = true;\r\n        int score = 800;\r\n        int levelCompleted = 5;\r\n        int bonus = 100;\r\n\r\n        int highScoreValue = calculateScore(gameOver,score,levelCompleted,bonus); // Here, the value supplied to the method is in the form of variables, which is also valid input to the method.\r\n        System.out.println(\"Your final score was \" + highScoreValue);\r\n    }\r\n\r\n    public static void calculateScore(){\r\n\r\n        boolean gameOver = true;\r\n        int score = 800;\r\n        int levelCompleted = 5;\r\n        int bonus = 100;\r\n\r\n        if(gameOver){\r\n            int finalScore = score + (levelCompleted * bonus);\r\n            finalScore += 1000;\r\n            System.out.println(\"Your final score was \" + finalScore);\r\n        }\r\n\r\n    }\r\n\r\n/*\r\n//    public static void calculateScore(boolean gameOver, int score, int levelCompleted, int bonus){\r\n\r\n        // When we define parameters,Java will automatically create variables with appropriate data types, and it gets deleted, once process goes back to the line where method is called.\r\n        // void means don't send any value back.If we don 't the method to return any information, we use void as a return type of method.\r\n\r\n        if(gameOver){\r\n            int finalScore = score + (levelCompleted * bonus);\r\n            finalScore += 1000;\r\n            System.out.println(\"Your final score was \" + finalScore);\r\n        }\r\n\r\n//    }\r\n*/\r\n\r\n    public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus){\r\n\r\n        // Here, the data return type is int, which means method is returning a value of type int.\r\n        // If we have to return any information, and send the value(result) back to the method call, we can use the method with return type option\r\n\r\n        if(gameOver){\r\n            int finalScore = score + (levelCompleted * bonus);\r\n            finalScore += 1000;\r\n            return finalScore;\r\n        }\r\n      /*  else{\r\n            return -1;\r\n        }*/\r\n\r\n        return -1; // In programming terms, negative value indicates programming error.\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/AreaCalculatorCodingChallenge.java",
        "fileName": "AreaCalculatorCodingChallenge.java",
        "topicName": "Area Calculator Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method named area with one double parameter named radius.",
              "The method needs to return a double value that represents the area of a circle.",
              "If the parameter radius is negative then return -1.0 to represent an invalid value.",
              "Write another overloaded method with 2 parameters x and y (both doubles), where x and y represent the sides of a rectangle.",
              "The method needs to return an area of a rectangle.",
              "If either or both parameters is/are a negative return -1.0 to indicate an invalid value.",
              "For formulas and PI value please check the tips below.",
              "Examples of input/output:",
              "* area(5.0); should return 78.53975",
              "* area(-1);  should return -1 since the parameter is negative",
              "* area(5.0, 4.0); should return 20.0 (5 * 4 = 20)",
              "* area(-1.0, 4.0);  should return -1 since first the parameter is negative",
              "TIP: The formula for calculating the area of a rectangle is x * y.",
              "TIP: The formula for calculating 3*a circle area is radius * radius * PI.",
              "TIP: For PI use a constant from Math class e.g. Math.PI",
              "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
              "NOTE: Do not add a main method to your solution code!"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method named area with one double parameter named radius.\r\n//\r\n//        The method needs to return a double value that represents the area of a circle.\r\n//\r\n//        If the parameter radius is negative then return -1.0 to represent an invalid value.\r\n//\r\n//        Write another overloaded method with 2 parameters x and y (both doubles), where x and y represent the sides of a rectangle.\r\n//\r\n//        The method needs to return an area of a rectangle.\r\n//\r\n//        If either or both parameters is/are a negative return -1.0 to indicate an invalid value.\r\n//\r\n//        For formulas and PI value please check the tips below.\r\n//\r\n//        Examples of input/output:\r\n//\r\n//        * area(5.0); should return 78.53975\r\n//\r\n//        * area(-1);  should return -1 since the parameter is negative\r\n//\r\n//        * area(5.0, 4.0); should return 20.0 (5 * 4 = 20)\r\n//\r\n//        * area(-1.0, 4.0);  should return -1 since first the parameter is negative\r\n//\r\n//\r\n//\r\n//        TIP: The formula for calculating the area of a rectangle is x * y.\r\n//\r\n//        TIP: The formula for calculating 3*a circle area is radius * radius * PI.\r\n//\r\n//        TIP: For PI use a constant from Math class e.g. Math.PI\r\n//\r\n//        NOTE: All methods need to be defined as public static like we have been doing so far in the course.\r\n//\r\n//        NOTE: Do not add a main method to your solution code!\r\n\r\npublic class AreaCalculatorCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(area(5.0));\r\n        System.out.println(area(5.0,4.0));\r\n\r\n    }\r\n\r\n    public static double area(double radius){\r\n\r\n        double area_of_circle;\r\n\r\n        if(radius < 0){\r\n            area_of_circle = - 1;\r\n        }else{\r\n\r\n            area_of_circle = (Math.PI * Math.pow(radius,2)) ;\r\n        }\r\n\r\n        return area_of_circle;\r\n    }\r\n\r\n    public static double area(double x, double y){\r\n\r\n        double area_of_rectangle;\r\n\r\n        if(x < 0 || y < 0){\r\n            area_of_rectangle = - 1;\r\n        }else{\r\n            area_of_rectangle = x * y;\r\n        }\r\n        return area_of_rectangle;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/BarkingDogCodingChallenge.java",
        "fileName": "BarkingDogCodingChallenge.java",
        "topicName": "Barking Dog Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
              "Write a method shouldWakeUp that has 2 parameters.",
              "1st parameter should be of type boolean and be named barking it represents if our dog is currently barking.",
              "2nd parameter represents the hour of the day and is of type int with the name hourOfDay and has a valid range of 0-23.",
              "We have to wake up if the dog is barking before 8 or after 22 hours so in that case return true.",
              "In all other cases return false.",
              "If the hourOfDay parameter is less than 0 or greater than 23 return false.",
              "Examples of input/output:",
              "* shouldWakeUp (true, 1); → should return true",
              "* shouldWakeUp (false, 2); → should return false since the dog is not barking.",
              "* shouldWakeUp (true, 8); → should return false, since it's not before 8.",
              "* shouldWakeUp (true, -1); → should return false since the hourOfDay parameter needs to be in a range 0-23.",
              "TIP: Use the if else statement with multiple conditions.",
              "NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course.",
              "NOTE: Do not add a  main method to solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        We have a dog that likes to bark.  We need to wake up if the dog is barking at night!\r\n//\r\n//        Write a method shouldWakeUp that has 2 parameters.\r\n//\r\n//        1st parameter should be of type boolean and be named barking it represents if our dog is currently barking.\r\n//        2nd parameter represents the hour of the day and is of type int with the name hourOfDay and has a valid range of 0-23.\r\n//\r\n//        We have to wake up if the dog is barking before 8 or after 22 hours so in that case return true.\r\n//\r\n//        In all other cases return false.\r\n//\r\n//        If the hourOfDay parameter is less than 0 or greater than 23 return false.\r\n//\r\n//        Examples of input/output:\r\n//\r\n//        * shouldWakeUp (true, 1); → should return true\r\n//\r\n//        * shouldWakeUp (false, 2); → should return false since the dog is not barking.\r\n//\r\n//        * shouldWakeUp (true, 8); → should return false, since it's not before 8.\r\n//\r\n//        * shouldWakeUp (true, -1); → should return false since the hourOfDay parameter needs to be in a range 0-23.\r\n//\r\n//\r\n//        TIP: Use the if else statement with multiple conditions.\r\n//\r\n//        NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course.\r\n//\r\n//        NOTE: Do not add a  main method to solution code.\r\n\r\npublic class BarkingDogCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(shouldWakeUp(false,2));\r\n        System.out.println(shouldWakeUp(true,-1));\r\n        System.out.println(shouldWakeUp(true,8));\r\n        System.out.println(shouldWakeUp(true,8));\r\n        System.out.println(shouldWakeUp(true,4));\r\n        System.out.println(shouldWakeUp(true,22));\r\n        System.out.println(shouldWakeUp(true,22));\r\n    }\r\n\r\n    public static boolean shouldWakeUp(boolean barking,int hourOfDay){\r\n\r\n        boolean wakeUp = false;\r\n\r\n        if(!barking || hourOfDay < 0 || hourOfDay > 23){\r\n            wakeUp = false;\r\n        }else if(hourOfDay < 8 || hourOfDay > 22){\r\n         wakeUp = true;\r\n        }\r\n        return wakeUp;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/DecimalComparatorCodingChallenge.java",
        "fileName": "DecimalComparatorCodingChallenge.java",
        "topicName": "Decimal Comparator Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
              "The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.",
              "EXAMPLES OF INPUT/OUTPUT:",
              "* areEqualByThreeDecimalPlaces(-3.1756, -3.175); → should return true since numbers are equal up to 3 decimal places.",
              "* areEqualByThreeDecimalPlaces(3.175, 3.176); → should return false since numbers are not equal up to 3 decimal places",
              "* areEqualByThreeDecimalPlaces(3.0, 3.0); → should return true since numbers are equal up to 3 decimal places.",
              "* areEqualByThreeDecimalPlaces(-3.123, 3.123); → should return false since numbers are not equal up to 3 decimal places.",
              "TIP: Use paper and pencil.",
              "TIP: Use casting.",
              "NOTE: The areEqualByThreeDecimalPlaces method  needs to be defined as public static like we have been doing so far in the course.",
              "NOTE: Do not add a  main method to solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method areEqualByThreeDecimalPlaces with two parameters of type double.\r\n//\r\n//        The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.\r\n//\r\n//\r\n//        EXAMPLES OF INPUT/OUTPUT:\r\n//\r\n//        * areEqualByThreeDecimalPlaces(-3.1756, -3.175); → should return true since numbers are equal up to 3 decimal places.\r\n//\r\n//        * areEqualByThreeDecimalPlaces(3.175, 3.176); → should return false since numbers are not equal up to 3 decimal places\r\n//\r\n//        * areEqualByThreeDecimalPlaces(3.0, 3.0); → should return true since numbers are equal up to 3 decimal places.\r\n//\r\n//        * areEqualByThreeDecimalPlaces(-3.123, 3.123); → should return false since numbers are not equal up to 3 decimal places.\r\n//\r\n//\r\n//        TIP: Use paper and pencil.\r\n//\r\n//        TIP: Use casting.\r\n//\r\n//        NOTE: The areEqualByThreeDecimalPlaces method  needs to be defined as public static like we have been doing so far in the course.\r\n//        NOTE: Do not add a  main method to solution code.\r\n\r\npublic class DecimalComparatorCodingChallenge {\r\n\r\n    public static void main(String[] args) {//\r\n\r\n        System.out.println(areEqualByThreeDecimalPlaces(-3.1756, -3.175));\r\n        System.out.println(areEqualByThreeDecimalPlaces(3.175,3.176));\r\n        System.out.println(areEqualByThreeDecimalPlaces(3.0, 3.0));\r\n        System.out.println(areEqualByThreeDecimalPlaces(-3.123, 3.123));\r\n\r\n    }\r\n\r\n    public static boolean areEqualByThreeDecimalPlaces(double firstNumber,double secondNumber){\r\n\r\n        int firstNum = (int) (firstNumber * 1000);\r\n\r\n        int secondNum = (int) (secondNumber * 1000);\r\n\r\n        int difference = firstNum - secondNum;\r\n\r\n        if(difference == 0){\r\n            return true;\r\n        }else{\r\n            return false;\r\n        }\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java",
        "fileName": "EqualityPrinterCodingChallenge.java",
        "topicName": "Equality Printer Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method printEqual with 3 parameters of type int. The method should not return anything (void).",
              "If one of the parameters is less than 0, print text \"Invalid Value\".",
              "If all numbers are equal print text \"All numbers are equal\"",
              "If all numbers are different print text \"All numbers are different\".",
              "Otherwise, print \"Neither all are equal or different\".",
              "EXAMPLES OF INPUT/OUTPUT:",
              "* printEqual(1, 1, 1); should print text All numbers are equal",
              "* printEqual(1, 1, 2); should print text Neither all are equal or different",
              "* printEqual(-1, -1, -1); should print text Invalid Value",
              "* printEqual(1, 2, 3); should print text All numbers are different",
              "TIP: Be extremely careful about spaces in the printed message.",
              "NOTES",
              "* The solution will not be accepted if there are extra spaces.",
              "* The method printEqual needs to be defined as public static like we have been doing so far in the course.",
              "* Do not add main method to solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method printEqual with 3 parameters of type int. The method should not return anything (void).\r\n//\r\n//        If one of the parameters is less than 0, print text \"Invalid Value\".\r\n//\r\n//        If all numbers are equal print text \"All numbers are equal\"\r\n//\r\n//        If all numbers are different print text \"All numbers are different\".\r\n//\r\n//        Otherwise, print \"Neither all are equal or different\".\r\n//\r\n//\r\n//        EXAMPLES OF INPUT/OUTPUT:\r\n//\r\n//        * printEqual(1, 1, 1); should print text All numbers are equal\r\n//\r\n//        * printEqual(1, 1, 2); should print text Neither all are equal or different\r\n//\r\n//        * printEqual(-1, -1, -1); should print text Invalid Value\r\n//\r\n//        * printEqual(1, 2, 3); should print text All numbers are different\r\n//\r\n//\r\n//        TIP: Be extremely careful about spaces in the printed message.\r\n//\r\n//\r\n//        NOTES\r\n//\r\n//        * The solution will not be accepted if there are extra spaces.\r\n//\r\n//        * The method printEqual needs to be defined as public static like we have been doing so far in the course.\r\n//\r\n//        * Do not add main method to solution code.\r\n\r\npublic class EqualityPrinterCodingChallenge {\r\n\r\n\r\n\r\n    public static void main(String[] args) {\r\n\r\n        printEqual(1, 1, 1);\r\n\r\n        printEqual(1, 1, 2);\r\n\r\n        printEqual(-1, -1, -1);\r\n\r\n        printEqual(1, 2, 3);\r\n\r\n    }\r\n\r\n    public static void printEqual(int firstNumber,int secondNumber,int thirdNumber){\r\n\r\n        if(firstNumber < 0 || secondNumber < 0 || thirdNumber < 0){\r\n            System.out.println(\"Invalid Value\");\r\n        }else if((firstNumber == thirdNumber) && (secondNumber == thirdNumber)){\r\n            System.out.println(\"All numbers are equal\");\r\n        }else if((firstNumber != secondNumber) && (firstNumber != thirdNumber) && (secondNumber != thirdNumber)){\r\n            System.out.println(\"All numbers are different\");\r\n        }else{\r\n            System.out.println(\"Neither all are equal or different\");\r\n        }\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualSumCheckerCodingChallenge.java",
        "fileName": "EqualSumCheckerCodingChallenge.java",
        "topicName": "Equal Sum Checker Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method hasEqualSum with 3 parameters of type int.",
              "The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.",
              "EXAMPLES OF INPUT/OUTPUT:",
              "* hasEqualSum(1, 1, 1);  should return false since 1 + 1 is not equal to 1",
              "* hasEqualSum(1, 1, 2);  should return true since 1 + 1 is equal to 2",
              "* hasEqualSum(1, -1, 0);  should return true since 1 + (-1) is 1 - 1 and is equal to 0",
              "NOTE: The hasEqualSum method  needs to be defined as public static like we have been doing so far in the course.",
              "NOTE: Do not add a  main method to solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method hasEqualSum with 3 parameters of type int.\r\n//\r\n//        The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.\r\n//\r\n//\r\n//        EXAMPLES OF INPUT/OUTPUT:\r\n//\r\n//        * hasEqualSum(1, 1, 1);  should return false since 1 + 1 is not equal to 1\r\n//\r\n//        * hasEqualSum(1, 1, 2);  should return true since 1 + 1 is equal to 2\r\n//\r\n//        * hasEqualSum(1, -1, 0);  should return true since 1 + (-1) is 1 - 1 and is equal to 0\r\n//\r\n//\r\n//        NOTE: The hasEqualSum method  needs to be defined as public static like we have been doing so far in the course.\r\n//        NOTE: Do not add a  main method to solution code.\r\n\r\npublic class EqualSumCheckerCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(hasEqualSum(1,1,1));\r\n        System.out.println(hasEqualSum(1,1,2));\r\n        System.out.println(hasEqualSum(1,-1,0));\r\n\r\n    }\r\n\r\n    public static boolean hasEqualSum(int firstNumber,int secondNumber, int sum){\r\n\r\n        if(firstNumber + secondNumber == sum){\r\n            return true;\r\n        }else{\r\n            return false;\r\n        }\r\n\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/LeapYearCalculatorCodingChallenge.java",
        "fileName": "LeapYearCalculatorCodingChallenge.java",
        "topicName": "Leap Year Calculator Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method isLeapYear with a parameter of type int named year.",
              "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
              "If the parameter is not in that range return false.",
              "Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is a leap year, otherwise return false.",
              "To determine whether a year is a leap year, follow these steps:",
              "1. If the year is evenly divisible by 4,   go to step 2.Otherwise, go to step 5.",
              "2. If the year is evenly divisible by 100, go to step 3.Otherwise, go to step 4.",
              "3. If the year is evenly divisible by 400, go to step 4.Otherwise, go to step 5.",
              "4. The year is a leap year (it has 366 days). The method isLeapYear needs to return true.",
              "5. The year is not a leap year (it has 365 days). The method isLeapYear needs to return false.",
              "The following years are not leap years:",
              "This is because they are evenly divisible by 100 but not by 400.",
              "The following years are leap years:",
              "This is because they are evenly divisible by both 100 and 400.",
              "Examples of input/output:",
              "* isLeapYear(-1600); → should return false since the parameter is not in range (1-9999)",
              "* isLeapYear(1600); → should return true since 1600 is a leap year",
              "* isLeapYear(2017); → should return false since 2017 is not a leap year",
              "* isLeapYear(2000);  → should return true because 2000 is a leap year",
              "NOTE: The method isLeapYear needs to be defined as public static like we have been doing so far in the course.",
              "NOTE: Do not add a  main method to solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method isLeapYear with a parameter of type int named year.\r\n//\r\n//        The parameter needs to be greater than or equal to 1 and less than or equal to 9999.\r\n//\r\n//        If the parameter is not in that range return false.\r\n//\r\n//        Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is a leap year, otherwise return false.\r\n//\r\n//\r\n//        To determine whether a year is a leap year, follow these steps:\r\n//        1. If the year is evenly divisible by 4,   go to step 2.Otherwise, go to step 5.\r\n//        2. If the year is evenly divisible by 100, go to step 3.Otherwise, go to step 4.\r\n//        3. If the year is evenly divisible by 400, go to step 4.Otherwise, go to step 5.\r\n//        4. The year is a leap year (it has 366 days). The method isLeapYear needs to return true.\r\n//        5. The year is not a leap year (it has 365 days). The method isLeapYear needs to return false.\r\n//\r\n//        The following years are not leap years:\r\n//        1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600\r\n//        This is because they are evenly divisible by 100 but not by 400.\r\n//\r\n//        The following years are leap years:\r\n//        1600, 2000, 2400\r\n//        This is because they are evenly divisible by both 100 and 400.\r\n//\r\n//        Examples of input/output:\r\n//\r\n//        * isLeapYear(-1600); → should return false since the parameter is not in range (1-9999)\r\n//\r\n//        * isLeapYear(1600); → should return true since 1600 is a leap year\r\n//\r\n//        * isLeapYear(2017); → should return false since 2017 is not a leap year\r\n//\r\n//        * isLeapYear(2000);  → should return true because 2000 is a leap year\r\n//\r\n//        NOTE: The method isLeapYear needs to be defined as public static like we have been doing so far in the course.\r\n//        NOTE: Do not add a  main method to solution code.\r\n\r\npublic class LeapYearCalculatorCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(isLeapYear(1600));\r\n    }\r\n\r\n    public static boolean isLeapYear(int year) {\r\n\r\n        boolean isLeapYear = false;\r\n\r\n        if(year >=1 && year <= 9999){\r\n            if(year % 4 == 0){\r\n                if(year % 100 == 0){\r\n                  if(year % 400 == 0){\r\n                      isLeapYear = true;\r\n                  }else{\r\n                      isLeapYear = false;\r\n                  }\r\n                }\r\n            }\r\n            }\r\n        return isLeapYear;\r\n        }\r\n\r\n    }\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MegaBytesConverterCodingChallenge.java",
        "fileName": "MegaBytesConverterCodingChallenge.java",
        "topicName": "Mega Bytes Converter Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.",
              "The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.",
              "Then it needs to print a message in the format \"XX KB = YY MB and ZZ KB\".",
              "XX represents the original value kiloBytes.",
              "YY represents the calculated megabytes.",
              "ZZ represents the calculated remaining kilobytes.",
              "For example, when the parameter kiloBytes is 2500 it needs to print \"2500 KB = 2 MB and 452 KB\"",
              "If the parameter kiloBytes is less than 0 then print the text \"Invalid Value\".",
              "EXAMPLE INPUT/OUTPUT",
              "* printMegaBytesAndKiloBytes(2500); → should print the following text: \"2500 KB = 2 MB and 452 KB\"",
              "* printMegaBytesAndKiloBytes(-1024); → should print the following text: \"Invalid Value\" because parameter is less than 0.",
              "* printMegaBytesAndKiloBytes(5000); → should print the following text: \"5000 KB = 4 MB and 904 KB\"",
              "TIP: Be extremely careful about spaces in the printed message.",
              "TIP: Use the remainder operator",
              "TIP: 1 MB = 1024 KB",
              "NOTE: Do not set kilobytes parameter value inside your method.",
              "NOTE: The solution will not be accepted if there are extra spaces.",
              "NOTE: The printMegaBytesAndKiloBytes method  needs to be defined as public static like we have been doing so far in the course.NOTE: Do not add a  main method to solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.\r\n//\r\n//        The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.\r\n//\r\n//        Then it needs to print a message in the format \"XX KB = YY MB and ZZ KB\".\r\n//\r\n//        XX represents the original value kiloBytes.\r\n//        YY represents the calculated megabytes.\r\n//        ZZ represents the calculated remaining kilobytes.\r\n//\r\n//        For example, when the parameter kiloBytes is 2500 it needs to print \"2500 KB = 2 MB and 452 KB\"\r\n//\r\n//        If the parameter kiloBytes is less than 0 then print the text \"Invalid Value\".\r\n//\r\n//\r\n//        EXAMPLE INPUT/OUTPUT\r\n//\r\n//        * printMegaBytesAndKiloBytes(2500); → should print the following text: \"2500 KB = 2 MB and 452 KB\"\r\n//\r\n//        * printMegaBytesAndKiloBytes(-1024); → should print the following text: \"Invalid Value\" because parameter is less than 0.\r\n//\r\n//        * printMegaBytesAndKiloBytes(5000); → should print the following text: \"5000 KB = 4 MB and 904 KB\"\r\n//\r\n//\r\n//        TIP: Be extremely careful about spaces in the printed message.\r\n//\r\n//        TIP: Use the remainder operator\r\n//\r\n//        TIP: 1 MB = 1024 KB\r\n//\r\n//        NOTE: Do not set kilobytes parameter value inside your method.\r\n//\r\n//        NOTE: The solution will not be accepted if there are extra spaces.\r\n//        NOTE: The printMegaBytesAndKiloBytes method  needs to be defined as public static like we have been doing so far in the course.NOTE: Do not add a  main method to solution code.\r\n\r\npublic class MegaBytesConverterCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        printMegaBytesAndKiloBytes(2500);\r\n        printMegaBytesAndKiloBytes(-1024);\r\n        printMegaBytesAndKiloBytes(5000);\r\n\r\n    }\r\n\r\n    public static void printMegaBytesAndKiloBytes(int kilobytes){\r\n\r\n        int megabyte;\r\n\r\n        int remaining_kilobyte;\r\n\r\n        if(kilobytes < 1){\r\n            System.out.println(\"Invalid Value\");\r\n        }else{\r\n            megabyte = ( kilobytes / 1024);\r\n            remaining_kilobyte = (kilobytes % 1024);\r\n            System.out.println(kilobytes + \" KB \" + \" = \" + megabyte + \" MB and \" + remaining_kilobyte + \" KB \");\r\n        }\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MethodsChallengeProblem.java",
        "fileName": "MethodsChallengeProblem.java",
        "topicName": "Methods Challenge Problem",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
              "You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message",
              "\" on the high score table \".",
              "Create a 2nd method called calculateHighScorePosition.",
              "It should send one argument only, the player score",
              "It should return an int the return data should be",
              "1 if the score is >= 1000",
              "2 is the score is >= 500 and < 1000",
              "3 if the score is >= 100 and < 500",
              "4 in all other cases call both methods and display the results of the following a score of 1500, 900, 400 and 50"
            ]
          }
        ],
        "inlineComments": [
          "Alternative and much better way to return position value"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n// Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.\r\n// You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message\r\n// \" on the high score table \".\r\n\r\n// Create a 2nd method called calculateHighScorePosition.\r\n// It should send one argument only, the player score\r\n// It should return an int\r\n// the return data should be\r\n// 1 if the score is >= 1000\r\n// 2 is the score is >= 500 and < 1000\r\n// 3 if the score is >= 100 and < 500\r\n// 4 in all other cases\r\n// call both methods and display the results of the following\r\n// a score of 1500, 900, 400 and 50\r\n\r\npublic class MethodsChallengeProblem {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int position = calculateHighScorePosition(1500);\r\n        displayHighScorePosition(\"Navneet\",position);\r\n\r\n        position = calculateHighScorePosition(900);\r\n        displayHighScorePosition(\"Andrew\", position);\r\n\r\n        position= calculateHighScorePosition(400);\r\n        displayHighScorePosition(\"Harvey\",position);\r\n\r\n        position = calculateHighScorePosition(50);\r\n        displayHighScorePosition(\"Mike\",position);\r\n\r\n\r\n    }\r\n\r\n    public static void displayHighScorePosition(String name, int position){\r\n        System.out.println(name + \" managed to get into position \" + position + \" on the high score table \");\r\n    }\r\n\r\n    public static int calculateHighScorePosition(int score){\r\n\r\n        // Alternative and much better way to return position value\r\n\r\n        int position = 4;\r\n\r\n        if(score >= 1000){\r\n            position = 1;\r\n        }else if(score >= 500){\r\n            position = 2;\r\n        }else if(score >= 100){\r\n            position = 3;\r\n        }\r\n\r\n        return position;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MinutesToYearsAndDaysCalculatorCodingChallenge.java",
        "fileName": "MinutesToYearsAndDaysCalculatorCodingChallenge.java",
        "topicName": "Minutes To Years And Days Calculator Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method printYearsAndDays with parameter of type long named minutes.",
              "The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.",
              "If the parameter is less than 0, print text \"Invalid Value\".",
              "Otherwise, if the parameter is valid then it needs to print a message in the format \"XX min = YY y and ZZ d\".",
              "XX represents the original value minutes.",
              "YY represents the calculated years.",
              "ZZ represents the calculated days.",
              "EXAMPLES OF INPUT/OUTPUT:",
              "* printYearsAndDays(525600);  → should print \"525600 min = 1 y and 0 d\"",
              "* printYearsAndDays(1051200); → should print \"1051200 min = 2 y and 0 d\"",
              "* printYearsAndDays(561600);  → should print \"561600 min = 1 y and 25 d\"",
              "TIPS:",
              "* Be extra careful about spaces in the printed message.",
              "* Use the remainder operator",
              "* 1 hour = 60 minutes",
              "* 1 day = 24 hours",
              "* 1 year = 365 days",
              "NOTES",
              "* The printYearsAndDays method needs to be defined as public static like we have been doing so far in the course.",
              "* Do not add main method to solution code.",
              "* The solution will not be accepted if there are extra spaces"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method printYearsAndDays with parameter of type long named minutes.\r\n//\r\n//        The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.\r\n//\r\n//        If the parameter is less than 0, print text \"Invalid Value\".\r\n//\r\n//        Otherwise, if the parameter is valid then it needs to print a message in the format \"XX min = YY y and ZZ d\".\r\n//\r\n//        XX represents the original value minutes.\r\n//        YY represents the calculated years.\r\n//        ZZ represents the calculated days.\r\n//\r\n//\r\n//        EXAMPLES OF INPUT/OUTPUT:\r\n//\r\n//        * printYearsAndDays(525600);  → should print \"525600 min = 1 y and 0 d\"\r\n//\r\n//        * printYearsAndDays(1051200); → should print \"1051200 min = 2 y and 0 d\"\r\n//\r\n//        * printYearsAndDays(561600);  → should print \"561600 min = 1 y and 25 d\"\r\n//\r\n//\r\n//        TIPS:\r\n//\r\n//        * Be extra careful about spaces in the printed message.\r\n//\r\n//        * Use the remainder operator\r\n//\r\n//        * 1 hour = 60 minutes\r\n//\r\n//        * 1 day = 24 hours\r\n//\r\n//        * 1 year = 365 days\r\n//\r\n//        NOTES\r\n//\r\n//        * The printYearsAndDays method needs to be defined as public static like we have been doing so far in the course.\r\n//\r\n//        * Do not add main method to solution code.\r\n//\r\n//        * The solution will not be accepted if there are extra spaces\r\n\r\npublic class MinutesToYearsAndDaysCalculatorCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        printYearsAndDays(-1);\r\n    }\r\n\r\n    public static void printYearsAndDays(long minutes){\r\n\r\n        int noOfHours;\r\n\r\n        int noOfDays;\r\n\r\n        int noOfYears;\r\n\r\n        int remainingDays;\r\n\r\n        if(minutes < 0){\r\n\r\n            System.out.println(\"Invalid value\");\r\n\r\n        }else {\r\n\r\n            noOfHours = (int) (minutes / 60);\r\n\r\n            noOfDays = noOfHours / 24;\r\n\r\n            noOfYears = noOfDays / 365;\r\n\r\n            remainingDays = noOfDays % 365;\r\n\r\n            System.out.println(minutes + \" min = \" + noOfYears + \" y and \" + remainingDays + \" d\");\r\n\r\n        }\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PlayingCatCodingChallenge.java",
        "fileName": "PlayingCatCodingChallenge.java",
        "topicName": "Playing Cat Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.",
              "Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false",
              "1st parameter should be of type boolean and be named summer it represents if it is summer.",
              "2nd parameter represents the temperature and is of type int with the name temperature.",
              "EXAMPLES OF INPUT/OUTPUT:",
              "* isCatPlaying(true, 10); should return false since temperature is not in range 25 - 45",
              "* isCatPlaying(false, 36); should return false since temperature is not in range 25 - 35 (summer parameter is false)",
              "* isCatPlaying(false, 35); should return true since temperature is in range 25 - 35",
              "NOTES",
              "* The isCatPlaying method needs to be defined as public static like we have been doing so far in the course.",
              "* Do not add the main method to the solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.\r\n//\r\n//\r\n//        Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false\r\n//\r\n//        1st parameter should be of type boolean and be named summer it represents if it is summer.\r\n//        2nd parameter represents the temperature and is of type int with the name temperature.\r\n//\r\n//\r\n//        EXAMPLES OF INPUT/OUTPUT:\r\n//\r\n//        * isCatPlaying(true, 10); should return false since temperature is not in range 25 - 45\r\n//\r\n//        * isCatPlaying(false, 36); should return false since temperature is not in range 25 - 35 (summer parameter is false)\r\n//\r\n//        * isCatPlaying(false, 35); should return true since temperature is in range 25 - 35\r\n//\r\n//\r\n//        NOTES\r\n//\r\n//        * The isCatPlaying method needs to be defined as public static like we have been doing so far in the course.\r\n//\r\n//        * Do not add the main method to the solution code.\r\n\r\npublic class PlayingCatCodingChallenge {\r\n\r\n\r\n    public static void main(String[] args) {\r\n\r\n    }\r\n\r\n    public static boolean isCatPlaying(boolean isSummer,int temperature){\r\n\r\n        boolean isPlaying;\r\n\r\n        if(isSummer){\r\n\r\n            if(temperature >= 25 && temperature <= 45){\r\n                isPlaying = true;\r\n            }else{\r\n                isPlaying = false;\r\n            }\r\n\r\n        }else{\r\n\r\n            if(temperature >= 25 && temperature <= 35){\r\n                isPlaying = true;\r\n            }else{\r\n                isPlaying = false;\r\n            }\r\n        }\r\n\r\n        return isPlaying;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PositiveNegativeZeroCodingChallenge.java",
        "fileName": "PositiveNegativeZeroCodingChallenge.java",
        "topicName": "Positive Negative Zero Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Positive, Negative or Zero",
              "Write a method called checkNumber with an int parameter named number.",
              "The method should not return any value, and it needs to print out:",
              "- \"positive\" if the parameter number is > 0",
              "- \"negative\" if the parameter number is < 0",
              "- \"zero\" if the parameter number is equal to 0"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n/*\r\nPositive, Negative or Zero\r\n\r\nWrite a method called checkNumber with an int parameter named number.\r\n\r\nThe method should not return any value, and it needs to print out:\r\n\r\n    - \"positive\" if the parameter number is > 0\r\n\r\n    - \"negative\" if the parameter number is < 0\r\n\r\n    - \"zero\" if the parameter number is equal to 0\r\n */\r\n\r\n\r\n\r\npublic class PositiveNegativeZeroCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n        checkNumber(1);\r\n    }\r\n    public static void checkNumber(int number){\r\n\r\n        if(number > 0){\r\n            System.out.println(\"positive\");\r\n        }else if(number < 0){\r\n            System.out.println(\"negative\");\r\n        }else{\r\n            System.out.println(\"zero\");\r\n        }\r\n\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/SpeedConverterCodingChallenge.java",
        "fileName": "SpeedConverterCodingChallenge.java",
        "topicName": "Speed Converter Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
              "If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.",
              "Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.",
              "Examples of input/output:",
              "* toMilesPerHour(1.5); → should return value 1",
              "* toMilesPerHour(10.25); → should return value 6",
              "* toMilesPerHour(-5.6); → should return value -1",
              "* toMilesPerHour(25.42); → should return value 16",
              "* toMilesPerHour(75.114); → should return value 47",
              "2. Write another method called printConversion with 1 parameter of type double with the name kilometersPerHour.",
              "This method should not return anything (void) and it needs to calculate milesPerHour from the kilometersPerHour parameter.",
              "Then it needs to print a message in the format \"XX km/h = YY mi/h\".",
              "XX represents the original value kilometersPerHour.",
              "YY represents the rounded milesPerHour from the kilometersPerHour parameter.",
              "If the parameter kilometersPerHour is < 0 then print the text \"Invalid Value\".",
              "Examples of input/output:",
              "* printConversion(1.5); → should print the following text (into the console - System.out): 1.5 km/h = 1 mi/h",
              "* printConversion(10.25); → should print the following text (into the console - System.out): 10.25 km/h = 6 mi/h",
              "* printConversion(-5.6); → should print the following text (into the console - System.out): Invalid Value",
              "* printConversion(25.42); → should print the following text (into the console - System.out): 25.42 km/h = 16 mi/h",
              "* printConversion(75.114); → should print the following text (into the console - System.out): 75.114 km/h = 47 mi/h",
              "Use method Math.round to round the number of calculated miles per hour(double). The method round returns long.",
              "How to use the method round and how it works?",
              "The Math.round() is a built-in math method which returns the closest long to the argument. The result is rounded to an integer by adding 1/2, taking the floor of the result after adding 1/2, and typecasting the result to type long. The method returns the value of the argument rounded to the nearest int value.",
              "TIP: In the method printConversion, call the method toMilesPerHour instead of duplicating the code.",
              "NOTE: All methods should be defined as public static like we have been doing so far in the course.",
              "NOTE: 1 mile per hour is 1.609 kilometers per hour"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.\r\n//\r\n//        If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.\r\n//\r\n//        Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.\r\n//\r\n//        Examples of input/output:\r\n//        * toMilesPerHour(1.5); → should return value 1\r\n//        * toMilesPerHour(10.25); → should return value 6\r\n//        * toMilesPerHour(-5.6); → should return value -1\r\n//        * toMilesPerHour(25.42); → should return value 16\r\n//        * toMilesPerHour(75.114); → should return value 47\r\n//\r\n//\r\n//        2. Write another method called printConversion with 1 parameter of type double with the name kilometersPerHour.\r\n//\r\n//        This method should not return anything (void) and it needs to calculate milesPerHour from the kilometersPerHour parameter.\r\n//\r\n//        Then it needs to print a message in the format \"XX km/h = YY mi/h\".\r\n//\r\n//        XX represents the original value kilometersPerHour.\r\n//        YY represents the rounded milesPerHour from the kilometersPerHour parameter.\r\n//\r\n//        If the parameter kilometersPerHour is < 0 then print the text \"Invalid Value\".\r\n//\r\n//\r\n//        Examples of input/output:\r\n//        * printConversion(1.5); → should print the following text (into the console - System.out): 1.5 km/h = 1 mi/h\r\n//        * printConversion(10.25); → should print the following text (into the console - System.out): 10.25 km/h = 6 mi/h\r\n//        * printConversion(-5.6); → should print the following text (into the console - System.out): Invalid Value\r\n//        * printConversion(25.42); → should print the following text (into the console - System.out): 25.42 km/h = 16 mi/h\r\n//        * printConversion(75.114); → should print the following text (into the console - System.out): 75.114 km/h = 47 mi/h\r\n//\r\n//\r\n//        Use method Math.round to round the number of calculated miles per hour(double). The method round returns long.\r\n//\r\n//\r\n//        How to use the method round and how it works?\r\n//\r\n//        The Math.round() is a built-in math method which returns the closest long to the argument. The result is rounded to an integer by adding 1/2, taking the floor of the result after adding 1/2, and typecasting the result to type long. The method returns the value of the argument rounded to the nearest int value.\r\n//\r\n//        TIP: In the method printConversion, call the method toMilesPerHour instead of duplicating the code.\r\n//\r\n//        NOTE: All methods should be defined as public static like we have been doing so far in the course.\r\n//\r\n//        NOTE: 1 mile per hour is 1.609 kilometers per hour\r\n\r\npublic class SpeedConverterCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        printConversion(1.5);\r\n        printConversion(10.25);\r\n        printConversion(-5.6);\r\n        printConversion(25.42);\r\n        printConversion(75.114);\r\n\r\n    }\r\n\r\n    public static long toMilesPerHour(double kilometersPerHour){\r\n\r\n        long toMilesPerHour;\r\n\r\n        if(kilometersPerHour < 0){\r\n\r\n            toMilesPerHour = - 1;\r\n        }else{\r\n\r\n            toMilesPerHour = Math.round(kilometersPerHour / 1.609);\r\n        }\r\n\r\n        return toMilesPerHour;\r\n\r\n    }\r\n\r\n    public static void printConversion(double kilometersPerHour){\r\n\r\n        long toMilesPerHour = toMilesPerHour(kilometersPerHour);\r\n\r\n        if(kilometersPerHour < 0){\r\n            System.out.println(\"Invalid Value\");\r\n        }else{\r\n            System.out.println(kilometersPerHour + \" km/h\" + \" = \" + toMilesPerHour + \" mi/h \");\r\n        }\r\n\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_7_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/TeenNumberCheckerCodingChallenge.java",
        "fileName": "TeenNumberCheckerCodingChallenge.java",
        "topicName": "Teen Number Checker Coding Challenge",
        "chapter": "Chapter 7: Methods In Java",
        "subChapter": "Methods Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
              "Write a method named hasTeen with 3 parameters of type int.",
              "The method should return boolean and it needs to return true if one of the parameters is in range 13(inclusive) - 19 (inclusive). Otherwise return false.",
              "EXAMPLES OF INPUT/OUTPUT:",
              "* hasTeen(9, 99, 19);  should return true since 19 is in range 13 - 19",
              "* hasTeen(23, 15, 42);  should return true since 15 is in range 13 - 19",
              "* hasTeen(22, 23, 34);  should return false since numbers 22, 23, 34 are not in range 13-19",
              "Write another method named isTeen with 1 parameter of type int.",
              "The method should return boolean and it needs to return true if the parameter is in range 13(inclusive) - 19 (inclusive). Otherwise return false.",
              "EXAMPLES OF INPUT/OUTPUT:",
              "* isTeen(9);  should return false since 9 is in not range 13 - 19",
              "* isTeen(13);  should return true since 13 is in range 13 - 19",
              "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
              "NOTE: Do not add a  main method to solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;\r\n\r\n//        We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).\r\n//\r\n//        Write a method named hasTeen with 3 parameters of type int.\r\n//\r\n//        The method should return boolean and it needs to return true if one of the parameters is in range 13(inclusive) - 19 (inclusive). Otherwise return false.\r\n//\r\n//\r\n//        EXAMPLES OF INPUT/OUTPUT:\r\n//\r\n//        * hasTeen(9, 99, 19);  should return true since 19 is in range 13 - 19\r\n//\r\n//        * hasTeen(23, 15, 42);  should return true since 15 is in range 13 - 19\r\n//\r\n//        * hasTeen(22, 23, 34);  should return false since numbers 22, 23, 34 are not in range 13-19\r\n//\r\n//\r\n//        Write another method named isTeen with 1 parameter of type int.\r\n//\r\n//        The method should return boolean and it needs to return true if the parameter is in range 13(inclusive) - 19 (inclusive). Otherwise return false.\r\n//\r\n//        EXAMPLES OF INPUT/OUTPUT:\r\n//\r\n//        * isTeen(9);  should return false since 9 is in not range 13 - 19\r\n//\r\n//        * isTeen(13);  should return true since 13 is in range 13 - 19\r\n//\r\n//        NOTE: All methods need to be defined as public static like we have been doing so far in the course.\r\n//        NOTE: Do not add a  main method to solution code.\r\n\r\npublic class TeenNumberCheckerCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(hasTeen(9,99,19));\r\n        System.out.println(hasTeen(23,15,42));\r\n        System.out.println(hasTeen(22,23,24));\r\n    }\r\n\r\n    public static boolean hasTeen(int firstNumber, int secondNumber, int thirdNumber){\r\n       if(isTeen(firstNumber) || isTeen(secondNumber) || isTeen(thirdNumber)){\r\n           return true;\r\n       }\r\n        return false;\r\n    }\r\n\r\n    public static boolean isTeen(int number){\r\n        if(number >= 13 && number <= 19){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n}\r\n\r\n"
      }
    ]
  },
  {
    "name": "Chapter 8: Switch Statements",
    "topics": [
      {
        "filePath": "src/Chapter_8_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java",
        "fileName": "SwitchStatementInJava.java",
        "topicName": "Switch Statement In Java",
        "chapter": "Chapter 8: Switch Statements",
        "subChapter": "Switch Statement",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
              "Switch is cleaner and more readable than nested if-else when you have many possible values to test.",
              "switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.",
              "Structure: switch(variable) { case value1: code; break; case value2: code; break; default: code; }",
              "The 'break' statement is critical — without it, execution \"falls through\" to the next case and continues running (even if that case's value doesn't match).",
              "Fall-through can sometimes be useful (grouping multiple cases together), but is mostly a source of bugs if not intended.",
              "The 'default' case is like the 'else' in an if-else — it runs when no case matches. It is optional but recommended.",
              "A return statement inside a switch also acts like a break — it exits both the switch AND the method.",
              "Multiple case labels can share the same code block: case 1: case 2: case 3: System.out.println(\"1, 2 or 3\");",
              "The traditional switch uses colon (:) after each case and requires explicit break statements to stop fall-through."
            ]
          }
        ],
        "inlineComments": [
          "The same logic can be written using if-else; switch is cleaner when testing one variable against many values.",
          "The switch expression is matched against each case label. When a match is found, its code block executes. Without break, execution 'falls through' to the next case.",
          "The condition is provided as parameter to switch statement, which is then matched to the case statement.",
          "If the condition provided in the switch statement, matches the condition provided in case statement, the code mentioned in that case statement gets executed.",
          "Multiple case labels can share the same code block. If any of the listed values match, the shared code block executes.",
          "Program in switch case without any break statement",
          "We should always use break statements, after the case statements.",
          "If break statements are not used, it will result to unpredictable behaviour.",
          "For example, in below method, in the worst case scenario if value is provided as 1, the case matches with the 1, it will execute all statements mentioned in case 1.",
          "Since, there is no break statement, it will execute all statements of case 2, case 3, case 4, case 5 and the default case as neither of them have break statement.",
          "Returning a value from a switch: instead of printing inside the switch, the switch can return a String result. A return statement acts like a break — it exits both the switch and the method.",
          "The traditional switch uses colon after each case and requires an explicit break statement to stop fall-through."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_8_Switch_Statements.Sub_Chapter_1_Switch_Statement;\r\n// The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.\n// Switch is cleaner and more readable than nested if-else when you have many possible values to test.\n// switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.\n// Structure: switch(variable) { case value1: code; break; case value2: code; break; default: code; }\n// The 'break' statement is critical — without it, execution \"falls through\" to the next case and continues running (even if that case's value doesn't match).\n// Fall-through can sometimes be useful (grouping multiple cases together), but is mostly a source of bugs if not intended.\n// The 'default' case is like the 'else' in an if-else — it runs when no case matches. It is optional but recommended.\n// A return statement inside a switch also acts like a break — it exits both the switch AND the method.\n// Multiple case labels can share the same code block: case 1: case 2: case 3: System.out.println(\"1, 2 or 3\");\n// The traditional switch uses colon (:) after each case and requires explicit break statements to stop fall-through.\r\npublic class SwitchStatementInJava {\r\n\r\n    public static void main(String[] args) {\r\n\r\n//        ifElseExample(3);\r\n//        switchCase(2);\r\n\r\n//        switchCaseWithoutUsingBreak(1);\r\n\r\n        String month = \"NOVEMBER\";\r\n\r\n        String quarterValue = getQuarter(month);\r\n\r\n        if(quarterValue.equals(\"INVALID MONTH\")){\r\n            System.out.println(quarterValue);\r\n        }else {\r\n            System.out.println(month + \" is in \" + quarterValue);\r\n        }\r\n    }\r\n\r\n    // The same logic can be written using if-else; switch is cleaner when testing one variable against many values.\r\n\r\n    public static void ifElseExample(int value){\r\n        if(value == 1){\r\n            System.out.println(\"Value is 1\");\r\n        }else if(value == 2){\r\n            System.out.println(\"Value is 2\");\r\n        }else {\r\n            System.out.println(\"Is not 1 or 2\");\r\n        }\r\n\r\n    }\r\n\r\n     // The switch expression is matched against each case label. When a match is found, its code block executes. Without break, execution 'falls through' to the next case.\r\n\r\n    // The condition is provided as parameter to switch statement, which is then matched to the case statement.\r\n    // If the condition provided in the switch statement, matches the condition provided in case statement,\r\n    // the code mentioned in that case statement gets executed.\r\n\r\n    public static void switchCase(int value){\r\n        switch (value){ // Similar to if statement\r\n            case 1: // Similar to else if statement\r\n                System.out.println(\"Value is 1\");\r\n                break; // Once the condition is met, the break statement forces the program to come out of switch condition\r\n            case 2: // Similar to else if statement\r\n                System.out.println(\"Value is 2\");\r\n                break;\r\n            case 3: // Similar to else if statement\r\n                System.out.println(\"Value is 3\");\r\n                break;\r\n            default: // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.\r\n                System.out.println(\"Neither numbers are provided\"); // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.\r\n        }\r\n    }\r\n\r\n    // Multiple case labels can share the same code block. If any of the listed values match, the shared code block executes.\r\n\r\n    public static void switchCaseMultipleCasesTogether(int value){\r\n        switch (value){  // Similar to if statement\r\n            case 1: // Similar to else if statement\r\n                System.out.println(\"Value is 1\");\r\n                break; // Once the condition is met, the break statement forces the program to come out of switch condition\r\n            case 2: // Similar to else if statement\r\n                System.out.println(\"Value is 2\");\r\n                break;\r\n            case 3: case 4: case 5: // We can club multiple case statements together\r\n                System.out.println(\"Value is 3 or 4 or 5\");\r\n                break;\r\n            default: // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.\r\n                System.out.println(\"Neither numbers are provided\");\r\n        }\r\n    }\r\n\r\n    // Program in switch case without any break statement\r\n\r\n    // We should always use break statements, after the case statements.\r\n    // If break statements are not used, it will result to unpredictable behaviour.\r\n\r\n    // For example, in below method, in the worst case scenario if value is provided as 1, the case matches with the 1, it will execute all statements mentioned in case 1.\r\n    // Since, there is no break statement, it will execute all statements of case 2, case 3, case 4, case 5 and the default case as neither of them have break statement.\r\n\r\n    public static void switchCaseWithoutUsingBreak(int value){\r\n        switch (value){\r\n                case 1:\r\n                System.out.println(\"Value is 1\");\r\n                case 2:\r\n                System.out.println(\"Value is 2\");\r\n                case 3: case 4: case 5: // We can club multiple case statements together\r\n                System.out.println(\"Value is 3 or 4 or 5\");\r\n                default:\r\n                System.out.println(\"Neither numbers are provided\");\r\n        }\r\n    }\r\n\r\n    // Returning a value from a switch: instead of printing inside the switch, the switch can return a String result. A return statement acts like a break — it exits both the switch and the method.\r\n    public static String getQuarter(String month){\r\n\r\n        // The traditional switch uses colon after each case and requires an explicit break statement to stop fall-through.\r\n\r\n        switch (month){\r\n            case \"JANUARY\": case \"FEBRUARY\": case \"MARCH\":\r\n                return \"1st Quarter\"; // Return statement acts like break, since the code wil exit both out of switch statement and the method\r\n            case \"APRIL\": case \"MAY\": case \"JUNE\":\r\n                return \"2nd Quarter\";\r\n            case \"JULY\": case \"AUGUST\": case \"SEPTEMBER\":\r\n                return \"3rd Quarter\";\r\n            case \"OCTOBER\": case \"NOVEMBER\": case \"DECEMBER\":\r\n                return \"4th Quarter\";\r\n        }\r\n\r\n        return \"INVALID MONTH\"; // We also don't need the default statement, as if the value is not found, the code will fall through the last statement and this value is returned.\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_8_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java",
        "fileName": "EnhancedSwitchStatementInJava.java",
        "topicName": "Enhanced Switch Statement In Java",
        "chapter": "Chapter 8: Switch Statements",
        "subChapter": "Enhanced Switch Statement",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
              "It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.",
              "Traditional switch: case 1: ... break;   Enhanced switch: case 1 -> ...",
              "Multiple values can be grouped with comma-separated lists: case 3, 4, 5 -> ... (instead of stacking three case labels)",
              "The enhanced switch can be used as an EXPRESSION — it can return a value directly. This makes code concise and readable.",
              "Syntax for switch expression: return switch(variable) { case X -> \"value\"; default -> \"fallback\"; };",
              "When used as a switch expression, the 'default' case is mandatory to ensure all possible values are covered.",
              "The 'yield' keyword is used inside a case block { } when you need multiple statements before returning a value.",
              "yield is to a switch expression what return is to a method — it provides the value for that case.",
              "Example: default -> { String msg = \"INVALID\"; yield msg; }",
              "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
            ]
          }
        ],
        "inlineComments": [
          "Traditional switch: uses colon (:) after each case and requires break to prevent fall-through.",
          "Enhanced switch: uses arrow (->) syntax. No break needed — each case automatically ends after its expression.",
          "No Break statement is required in enhanced switch statement",
          "Enhanced switch as a return expression: the switch can directly return a value when used with the 'return' keyword before 'switch'.",
          "Each arrow case maps directly to a return value — concise and no fall-through risk.",
          "Using yield: when a case block has multiple statements, use 'yield' to return the value from inside a block body.",
          "yield is needed when the case body is a block { } rather than a simple expression."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_8_Switch_Statements.Sub_Chapter_2_Enhanced_Switch_Statement;\r\n// The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.\n// It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.\n// Traditional switch: case 1: ... break;   Enhanced switch: case 1 -> ...\n// Multiple values can be grouped with comma-separated lists: case 3, 4, 5 -> ... (instead of stacking three case labels)\n// The enhanced switch can be used as an EXPRESSION — it can return a value directly. This makes code concise and readable.\n// Syntax for switch expression: return switch(variable) { case X -> \"value\"; default -> \"fallback\"; };\n// When used as a switch expression, the 'default' case is mandatory to ensure all possible values are covered.\n// The 'yield' keyword is used inside a case block { } when you need multiple statements before returning a value.\n// yield is to a switch expression what return is to a method — it provides the value for that case.\n// Example: default -> { String msg = \"INVALID\"; yield msg; }\n// Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.\r\npublic class EnhancedSwitchStatementInJava {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int value = 3;\r\n\r\n        // Traditional switch: uses colon (:) after each case and requires break to prevent fall-through.\r\n        switch (value) {  // Similar to if statement\r\n            case 1: // Similar to else if statement\r\n                System.out.println(\"Value is 1\");\r\n                break; // Once the condition is met, the break statement forces the program to come out of switch condition\r\n            case 2: // Similar to else if statement\r\n                System.out.println(\"Value is 2\");\r\n                break;\r\n            case 3:\r\n            case 4:\r\n            case 5: // We can club multiple case statements together\r\n                System.out.println(\"Value is 3 or 4 or 5\");\r\n                break;\r\n            default: // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.\r\n                System.out.println(\"Neither numbers are provided\");\r\n        }\r\n\r\n        // Enhanced switch: uses arrow (->) syntax. No break needed — each case automatically ends after its expression.\r\n        switch (value) {\r\n            case 1 -> // Double colon(:) which was part of traditional switch statement is replaced by arrow(->) in the enhanced switch statement\r\n                    System.out.println(\"Value is 1\");\r\n            // No Break statement is required in enhanced switch statement\r\n            case 2 ->\r\n                    System.out.println(\"Value is 2\");\r\n            case 3, 4, 5 -> // Multiple cases are separated by comma delimited list of values\r\n                    System.out.println(\"Value is 3 or 4 or 5\");\r\n            default ->\r\n                    System.out.println(\"Neither numbers are provided\");\r\n        }\r\n\r\n        String month = \"NOVEMBER\";\r\n\r\n        String quarterValue = getQuarterUsingYieldKeyword(month);\r\n\r\n        if(quarterValue.equals(\"INVALID MONTH\")){\r\n            System.out.println(quarterValue);\r\n        }else {\r\n            System.out.println(month + \" is in \" + quarterValue);\r\n        }\r\n    }\r\n\r\n    // Enhanced switch as a return expression: the switch can directly return a value when used with the 'return' keyword before 'switch'.\r\n    public static String getQuarter(String month){\r\n\r\n        // Each arrow case maps directly to a return value — concise and no fall-through risk.\r\n\r\n        return switch (month) { // return keyword is used before the switch keyword\r\n            case \"JANUARY\", \"FEBRUARY\", \"MARCH\" -> \"1st Quarter\";\r\n            case \"JULY\", \"AUGUST\", \"SEPTEMBER\" -> \"3rd Quarter\";\r\n            case \"OCTOBER\", \"NOVEMBER\", \"DECEMBER\" -> \"4th Quarter\";\r\n            default -> \"INVALID MONTH\"; // When switch statement is used as an expression, meaning it returns a value, then a default label is required under most conditions.\r\n        };\r\n    }\r\n\r\n    // Using yield: when a case block has multiple statements, use 'yield' to return the value from inside a block body.\r\n    public static String getQuarterUsingYieldKeyword(String month){\r\n\r\n        // yield is needed when the case body is a block { } rather than a simple expression.\r\n\r\n        return switch (month) { // return keyword is used before the switch keyword\r\n            case \"JANUARY\", \"FEBRUARY\", \"MARCH\" -> \"1st Quarter\";\r\n            case \"JULY\", \"AUGUST\", \"SEPTEMBER\" -> \"3rd Quarter\";\r\n            case \"OCTOBER\", \"NOVEMBER\", \"DECEMBER\" -> \"4th Quarter\";\r\n            default -> {\r\n                String defaultResponse = \"INVALID MONTH\"; // When switch statement is used as an expression, meaning it returns a value, then a default label is required under most conditions.\r\n                yield defaultResponse;\r\n            }\r\n        };\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_8_Switch_Statements/Sub_Chapter_3_CodingChallenge/NumberOfDaysInAMonthCodingChallenge.java",
        "fileName": "NumberOfDaysInAMonthCodingChallenge.java",
        "topicName": "Number Of Days In A Month Coding Challenge",
        "chapter": "Chapter 8: Switch Statements",
        "subChapter": "Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Write a method isLeapYear with a parameter of type int named year.",
              "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
              "If the parameter is not in that range return false.",
              "Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is, otherwise return false.",
              "A year is a leap year if it is divisible by 4 but not by 100, or it is divisible by 400.",
              "Examples of input/output:",
              "isLeapYear(-1600); →  should return false since the parameter is not in the range (1-9999) isLeapYear(1600); → should return true since 1600 is a leap year isLeapYear(2017); → should return false since 2017 is not a leap year isLeapYear(2000); → should return true because 2000 is a leap year",
              "NOTE:  The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.",
              "Write another method getDaysInMonth with two parameters month and year. Both of type int.",
              "If parameter month is < 1 or > 12 return -1.",
              "If parameter year is < 1 or > 9999 then return -1.",
              "This method needs to return the number of days in the month. Be careful about leap years they have 29 days in month 2 (February).",
              "You should check if the year is a leap year using the method isLeapYear described above.",
              "Examples of input/output:",
              "getDaysInMonth(1, 2020); → should return 31 since January has 31 days.",
              "getDaysInMonth(2, 2020); → should return 29 since February has 29 days in a leap year and 2020 is a leap year.",
              "getDaysInMonth(2, 2018); → should return 28 since February has 28 days if it's not a leap year and 2018 is not a leap year.",
              "getDaysInMonth(-1, 2020); → should return -1 since the parameter month is invalid.",
              "getDaysInMonth(1, -2020); → should return -1 since the parameter year is outside the range of 1 to 9999."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_8_Switch_Statements.Sub_Chapter_3_CodingChallenge;\r\n\r\n     /*   Write a method isLeapYear with a parameter of type int named year.\r\n\r\n        The parameter needs to be greater than or equal to 1 and less than or equal to 9999.\r\n\r\n        If the parameter is not in that range return false.\r\n\r\n        Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is, otherwise return false.\r\n\r\n        A year is a leap year if it is divisible by 4 but not by 100, or it is divisible by 400.\r\n\r\n        Examples of input/output:\r\n\r\n        isLeapYear(-1600); →  should return false since the parameter is not in the range (1-9999)\r\n\r\n        isLeapYear(1600); → should return true since 1600 is a leap year\r\n\r\n        isLeapYear(2017); → should return false since 2017 is not a leap year\r\n\r\n        isLeapYear(2000); → should return true because 2000 is a leap year\r\n\r\n        NOTE:  The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.\r\n\r\n        Write another method getDaysInMonth with two parameters month and year. Both of type int.\r\n\r\n        If parameter month is < 1 or > 12 return -1.\r\n\r\n        If parameter year is < 1 or > 9999 then return -1.\r\n\r\n        This method needs to return the number of days in the month. Be careful about leap years they have 29 days in month 2 (February).\r\n\r\n        You should check if the year is a leap year using the method isLeapYear described above.\r\n\r\n        Examples of input/output:\r\n\r\n        getDaysInMonth(1, 2020); → should return 31 since January has 31 days.\r\n\r\n        getDaysInMonth(2, 2020); → should return 29 since February has 29 days in a leap year and 2020 is a leap year.\r\n\r\n        getDaysInMonth(2, 2018); → should return 28 since February has 28 days if it's not a leap year and 2018 is not a leap year.\r\n\r\n        getDaysInMonth(-1, 2020); → should return -1 since the parameter month is invalid.\r\n\r\n        getDaysInMonth(1, -2020); → should return -1 since the parameter year is outside the range of 1 to 9999.\r\n\r\n*/\r\n\r\npublic class NumberOfDaysInAMonthCodingChallenge {\r\n    public static void main(String[] args) {\r\n\r\n        int year = 2020;\r\n        System.out.println(isLeapYear(year));\r\n        System.out.println(getDaysInMonth(2, 2018));\r\n\r\n    }\r\n\r\n    public static boolean isLeapYear(int year){\r\n\r\n        boolean isLeapYear;\r\n\r\n        if(year >= 1  && year <= 9999){\r\n\r\n\r\n            if((year % 4 == 0 && (year % 100!= 0)) || (year % 400 == 0)){\r\n                isLeapYear = true;\r\n            }else{\r\n                isLeapYear = false;\r\n            }\r\n\r\n        }else{\r\n            return false;\r\n        }\r\n\r\n        return isLeapYear;\r\n    }\r\n\r\n    public static int getDaysInMonth(int month, int year){\r\n\r\n        int daysOfMonth = 0;\r\n\r\n        if(year >= 1 && year <= 9999){\r\n            if(month >= 1 && month <= 12){\r\n                switch (month){\r\n                    case 1: case 3: case 5: case 7: case 8: case 10: case 12:\r\n                        daysOfMonth = 31;\r\n                        break;\r\n                    case 2:\r\n                        if (isLeapYear(year)) {\r\n                          daysOfMonth = 29;\r\n                        }else{\r\n                            daysOfMonth = 28;\r\n                        }\r\n                        break;\r\n                    case 4: case 6: case 9: case 11:\r\n                        daysOfMonth = 30;\r\n                }\r\n            }else{\r\n                return -1;\r\n            }\r\n        }else{\r\n            return -1;\r\n        }\r\n\r\n\r\n        return daysOfMonth;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_8_Switch_Statements/Sub_Chapter_3_CodingChallenge/PrintNumberInAWorldCodingChallenge.java",
        "fileName": "PrintNumberInAWorldCodingChallenge.java",
        "topicName": "Print Number In A World Coding Challenge",
        "chapter": "Chapter 8: Switch Statements",
        "subChapter": "Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Write a method called printNumberInWord.",
              "The method has one parameter number which is the whole number.",
              "The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_8_Switch_Statements.Sub_Chapter_3_CodingChallenge;\r\n\r\n/*\r\nWrite a method called printNumberInWord.\r\nThe method has one parameter number which is the whole number.\r\nThe method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers.\r\n*/\r\n\r\npublic class PrintNumberInAWorldCodingChallenge {\r\n    public static void main(String[] args) {\r\n        System.out.println(returnNumberInAWordUsingTraditionalSwitch(10));\r\n         System.out.println(returnNumberInAWordUsingEnhancedSwitch(6));\r\n        printNumberInAWordUsingTraditionalSwitch(4);\r\n         printNumberInAWordUsingEnhancedSwitch(7);\r\n    }\r\n\r\n    public static String returnNumberInAWordUsingTraditionalSwitch(int number) {\r\n        switch (number) {\r\n            case 0:\r\n                return \"ZERO\";\r\n            case 1:\r\n                return \"ONE\";\r\n            case 2:\r\n                return \"TWO\";\r\n            case 3:\r\n                return \"THREE\";\r\n            case 4:\r\n                return \"FOUR\";\r\n            case 5:\r\n                return \"FIVE\";\r\n            case 6:\r\n                return \"SIX\";\r\n            case 7:\r\n                return \"SEVEN\";\r\n            case 8:\r\n                return \"EIGHT\";\r\n            case 9:\r\n                return \"NINE\";\r\n        }\r\n        return \"other\";\r\n    }\r\n\r\n\r\n    public static String returnNumberInAWordUsingEnhancedSwitch(int number){\r\n        return switch (number){\r\n            case 0 -> \"ZERO\";\r\n            case 1 -> \"ONE\";\r\n            case 2 -> \"TWO\";\r\n            case 3 -> \"THREE\";\r\n            case 4 -> \"FOUR\";\r\n            case 5 -> \"FIVE\";\r\n            case 6 -> \"SIX\";\r\n            case 7 -> \"SEVEN\";\r\n            case 8 -> \"EIGHT\";\r\n            case 9 -> \"NINE\";\r\n            default -> \"other\";\r\n        };\r\n    }\r\n\r\n    public static void printNumberInAWordUsingTraditionalSwitch(int number){\r\n        switch (number){\r\n            case 0: System.out.println(\"ZERO\");\r\n            break;\r\n            case 1: System.out.println(\"ONE\");\r\n            break;\r\n            case 2: System.out.println(\"TWO\");\r\n            break;\r\n            case 3: System.out.println(\"THREE\");\r\n            break;\r\n            case 4: System.out.println(\"FOUR\");\r\n            break;\r\n            case 5: System.out.println(\"FIVE\");\r\n            break;\r\n            case 6: System.out.println(\"SIX\");\r\n            break;\r\n            case 7: System.out.println(\"SEVEN\");\r\n            break;\r\n            case 8: System.out.println(\"EIGHT\");\r\n            break;\r\n            case 9: System.out.println(\"NINE\");\r\n            break;\r\n            default: System.out.println(\"other\");\r\n        }\r\n    }\r\n\r\n    public static void printNumberInAWordUsingEnhancedSwitch(int number){\r\n        switch (number){\r\n            case 0 -> System.out.println(\"ZERO\");\r\n            case 1 -> System.out.println(\"ONE\");\r\n            case 2 -> System.out.println(\"TWO\");\r\n            case 3 -> System.out.println(\"THREE\");\r\n            case 4 -> System.out.println(\"FOUR\");\r\n            case 5 -> System.out.println(\"FIVE\");\r\n            case 6 -> System.out.println(\"SIX\");\r\n            case 7 -> System.out.println(\"SEVEN\");\r\n            case 8 -> System.out.println(\"EIGHT\");\r\n            case 9 -> System.out.println(\"NINE\");\r\n            default-> System.out.println(\"other\");\r\n        }\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_8_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementChallenge.java",
        "fileName": "SwitchStatementChallenge.java",
        "topicName": "Switch Statement Challenge",
        "chapter": "Chapter 8: Switch Statements",
        "subChapter": "Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Create a new switch statement using char instead of int.",
              "Create a new char variable",
              "Create a switch statement testing for",
              "A,B,C,D or E display a message if any of these are found and then break",
              "Add a default which displays a message saying not found"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_8_Switch_Statements.Sub_Chapter_3_CodingChallenge;\r\n\r\n// Create a new switch statement using char instead of int.\r\n// Create a new char variable\r\n// Create a switch statement testing for\r\n// A,B,C,D or E\r\n// display a message if any of these are found and then break\r\n// Add a default which displays a message saying not found\r\n\r\npublic class SwitchStatementChallenge {\r\n\r\n    public static void main(String[] args) {\r\n        switchStatementUsingChar('F');\r\n    }\r\n\r\n    public static void switchStatementUsingChar(char ch){\r\n        switch (ch){\r\n            case 'A' :\r\n                System.out.println(\"A is found\");\r\n                break;\r\n            case 'B' :\r\n                System.out.println(\"B is found\");\r\n                break;\r\n            case 'C' : case 'D' : case 'E' :\r\n                System.out.println(ch + \" is found\");\r\n                break;\r\n            default:\r\n                System.out.println(\"Could not find A, B, C, D or E\");\r\n        }\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_8_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementChallengeReturnDayOfTheWeek.java",
        "fileName": "SwitchStatementChallengeReturnDayOfTheWeek.java",
        "topicName": "Switch Statement Challenge Return Day Of The Week",
        "chapter": "Chapter 8: Switch Statements",
        "subChapter": "Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Challenge",
              "1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_8_Switch_Statements.Sub_Chapter_3_CodingChallenge;\r\n\r\n//Challenge\r\n\r\n// 1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value\r\n\r\n/* Use the enhanced switch statement as an expression, returning the result to a String\r\n   named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method,\r\n   call this method for the values 0 through 7.\r\n */\r\n\r\npublic class SwitchStatementChallengeReturnDayOfTheWeek {\r\n\r\n    public static void main(String[] args) {\r\n        printDayOfWeek(1);\r\n        System.out.println(returnDayOfWeek(5));\r\n    }\r\n\r\n    public static void printDayOfWeek(int day) {\r\n        switch (day) {\r\n            case 0 -> System.out.println(\"Sunday\");\r\n            case 1 -> System.out.println(\"Monday\");\r\n            case 2 -> System.out.println(\"Tuesday\");\r\n            case 3 -> System.out.println(\"Wednesday\");\r\n            case 4 -> System.out.println(\"Thursday\");\r\n            case 5 -> System.out.println(\"Friday\");\r\n            case 6 -> System.out.println(\"Saturday\");\r\n            default -> System.out.println(\"Invalid day\");\r\n        }\r\n    }\r\n\r\n    public static String returnDayOfWeek(int day) {\r\n        return switch (day) {\r\n            case 0 -> \"Sunday\";\r\n            case 1 -> \"Monday\";\r\n            case 2 -> \"Tuesday\";\r\n            case 3 -> \"Wednesday\";\r\n            case 4 -> \"Thursday\";\r\n            case 5 -> \"Friday\";\r\n            case 6 -> \"Saturday\";\r\n            default -> \"Invalid Month\";\r\n        };\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_8_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementNATOChallenge.java",
        "fileName": "SwitchStatementNATOChallenge.java",
        "topicName": "Switch Statement N A T O Challenge",
        "chapter": "Chapter 8: Switch Statements",
        "subChapter": "Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.",
              "1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.",
              "2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.",
              "3) Add a default block, which displays the letter with a message saying not found."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_8_Switch_Statements.Sub_Chapter_3_CodingChallenge;\r\n\r\n// In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.\r\n\r\n// 1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.\r\n\r\n// 2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.\r\n\r\n// 3) Add a default block, which displays the letter with a message saying not found.\r\n\r\npublic class SwitchStatementNATOChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        char ch = 'D';\r\n\r\n        returnNatoStringForGivenCharacter(ch);\r\n\r\n    }\r\n\r\n    public static void returnNatoStringForGivenCharacter(char ch){\r\n\r\n        switch (ch){\r\n            case 'A':\r\n                System.out.println(\"A is Able\");\r\n                break;\r\n            case 'B':\r\n                System.out.println(\"B is Baker\");\r\n                break;\r\n            case 'C':\r\n                System.out.println(\"C is Charlie\");\r\n                break;\r\n            case 'D':\r\n                System.out.println(\"D is Dog\");\r\n                break;\r\n            case 'E':\r\n                System.out.println(\"E is Easy\");\r\n                break;\r\n            default:\r\n                System.out.println(\"Not Found\");\r\n        }\r\n    }\r\n\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 9: Java Looping Concepts",
    "topics": [
      {
        "filePath": "src/Chapter_9_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java",
        "fileName": "ForStatement.java",
        "topicName": "For Statement",
        "chapter": "Chapter 9: Java Looping Concepts",
        "subChapter": "For Statement",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Looping :- Looping let us execute the code multiple number of times",
              "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
              "The for statement is often referred to as the for loop",
              "It repeatedly loops until a condition is satisfied",
              "The initialisation section declares or sets state, usually declaring and initialising a loop variable, before the loop begins processing.",
              "The expression section, once it becomes false, will end the loop processing.",
              "The increment section is executed after the expression is tested, and is generally the place where the loop variable is incremented.",
              "Break Statement :- A break statement transfers control out of an enclosing statement",
              "Break Statement can also be used in a loop.",
              "Continue Statement :- The continue statement, in its simplest form, will stop executing the current iteration of a block of code in a loop, and start a new iteration. A continue statement is a good way to continue to execute iterations of your code, but perhaps skip code for certain elements, or only partially execute code in certain cases.",
              "Output :- 5 10 15 20 30 35 40 45 [Numbers 25 and 50 are not printed]"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Loops let your program execute a block of code multiple times, without writing it multiple times.",
              "Java supports three main loops: for (best when you know the count), while (condition-based), and do-while (always runs at least once).",
              "The for loop is the most common when iterating over a range or a fixed number of times.",
              "For loop syntax: for(initialisation; condition; update) { body }",
              "Initialisation: runs once before the loop starts. Usually declares a loop counter variable.",
              "Condition: checked BEFORE each iteration. If false, the loop ends. If never false, it loops forever (infinite loop).",
              "Update: runs AFTER each iteration body. Usually increments or decrements the counter.",
              "The counter variable declared in 'for(int i = ...)' is LOCAL to the loop — it does not exist outside the loop.",
              "The 'break' statement immediately exits the loop, regardless of the condition.",
              "The 'continue' statement skips the rest of the current iteration and moves to the update step, then checks the condition again."
            ]
          }
        ],
        "inlineComments": [
          "For Statement with break keyword"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_9_Java_Looping_Concepts.Sub_Chapter_1_For_Statement;\n// Loops let your program execute a block of code multiple times, without writing it multiple times.\n// Java supports three main loops: for (best when you know the count), while (condition-based), and do-while (always runs at least once).\n// The for loop is the most common when iterating over a range or a fixed number of times.\n// For loop syntax: for(initialisation; condition; update) { body }\n// Initialisation: runs once before the loop starts. Usually declares a loop counter variable.\n// Condition: checked BEFORE each iteration. If false, the loop ends. If never false, it loops forever (infinite loop).\n// Update: runs AFTER each iteration body. Usually increments or decrements the counter.\n// The counter variable declared in 'for(int i = ...)' is LOCAL to the loop — it does not exist outside the loop.\n// The 'break' statement immediately exits the loop, regardless of the condition.\n// The 'continue' statement skips the rest of the current iteration and moves to the update step, then checks the condition again.\n/* Looping :- Looping let us execute the code multiple number of times\r\n* Java supports several statements for looping, or executing code repetitively\r\n*\r\n* for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values\r\n* while --> The while loop executes until a specified condition becomes false\r\n* do while --> The do while loop always executes at least one and continues until specified condition becomes false\r\n*\r\n*  The for statement is often referred to as the for loop\r\n*  It repeatedly loops until a condition is satisfied\r\n*\r\n* for(initialisation; expression; increment){ // Initialisation, condition and expression happens in the same line\r\n* // block of statements\r\n* }\r\n*\r\n*  The initialisation section declares or sets state, usually declaring and initialising a loop variable, before the loop begins processing.\r\n*\r\n*  The expression section, once it becomes false, will end the loop processing.\r\n*\r\n*  The increment section is executed after the expression is tested, and is generally the place where the loop variable is incremented.\r\n*\r\n*  Break Statement :- A break statement transfers control out of an enclosing statement\r\n*\r\n*  Break Statement can also be used in a loop.\r\n*\r\n*  Continue Statement :- The continue statement, in its simplest form, will stop executing the current iteration of a block of\r\n   code in a loop, and start a new iteration. A continue statement is a good way to continue to execute iterations of your code, but perhaps skip code for certain elements,\r\n   or only partially execute code in certain cases.\r\n\r\n   Example of Continue statement :-    public static void main(String[] args) {\r\n        int number = 0;\r\n\r\n        while (number < 50){\r\n\r\n            number = number + 5;\r\n\r\n            if(number % 25 == 0){  // Number 25 and 50 will get skipped and loop will start a new iteration\r\n                continue;\r\n            }\r\n            if(number < 50){\r\n                System.out.print(number + \" \");\r\n            }else{\r\n                System.out.print(number);\r\n            }\r\n        }\r\n    }\r\n\r\n    Output :- 5 10 15 20 30 35 40 45 [Numbers 25 and 50 are not printed]\r\n\r\n*/\r\n\r\n\r\npublic class ForStatement {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        for(int counter = 1; counter <=5; counter++){ // counter is the variable that got initialised. It is then compared with the value less than equal to 5. If the counter is greater than 5, the loop will terminate. Lastly the loop is incremented, after the expression is tested.\r\n           // System.out.println(counter);\r\n        }\r\n\r\n        for(double rate = 2.0; rate<=5.0; rate++){\r\n           // System.out.println(calculateInterest(10000,rate));\r\n        }\r\n\r\n       // System.out.println(calculateInterest(10000, 2));\r\n\r\n        /* Using a new for statement, call the calculateInterest method with the dollar amount of 100\r\n\r\n            Use the interest rate between 7.5 to 10, but increment by a quarter of percent each time, meaning 0.25 percent\r\n        */\r\n        for(double rate = 7.5; rate<=10; rate+=0.25){\r\n           // System.out.println(calculateInterest(100,rate));\r\n        }\r\n\r\n\r\n    // For Statement with break keyword\r\n        for(double rate = 7.5; rate<=10; rate+=0.25){\r\n            double interestAmount = calculateInterest(100.00,rate);\r\n            if(interestAmount > 8.5){\r\n                break;\r\n            }\r\n            System.out.println(calculateInterest(100.00,rate));\r\n        }\r\n    }\r\n\r\n    public static double calculateInterest(double amount, double interestRate){\r\n\r\n        return (amount * (interestRate / 100));\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_9_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/ForLoopPrimeNumberChallenge.java",
        "fileName": "ForLoopPrimeNumberChallenge.java",
        "topicName": "For Loop Prime Number Challenge",
        "chapter": "Chapter 9: Java Looping Concepts",
        "subChapter": "For Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
              "Create a for statement, using any range of numbers, where the maximum number is <= 1000.",
              "For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers.",
              "If it's a prime number, print it out, and increment a count of the number of prime numbers found. if you get to the stage where 3 or more prime numbers are found, end the loop. In other words, you'll be iterating through the loop, but you've found three prime numbers before the range is fully processed."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "CODING CHALLENGE — For Loop with Break",
              "This challenge practices: for loops, a helper method (isPrime), the break statement, and prime number logic.",
              "A prime number is only divisible by 1 and itself. The isPrime method checks divisibility up to number/2 (any factor beyond that would have a corresponding factor below it).",
              "The challenge: find 3 prime numbers in range 10-20 using a for loop, then break once 3 are found."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_9_Java_Looping_Concepts.Sub_Chapter_2_For_Loop_Coding_Challenge;\r\n// CODING CHALLENGE — For Loop with Break\n// This challenge practices: for loops, a helper method (isPrime), the break statement, and prime number logic.\n// A prime number is only divisible by 1 and itself. The isPrime method checks divisibility up to number/2 (any factor beyond that would have a corresponding factor below it).\n// The challenge: find 3 prime numbers in range 10-20 using a for loop, then break once 3 are found.\r\n/*\r\nCreate a prime number counter variable, that will keep count of how many prime numbers were found.\r\n\r\nCreate a for statement, using any range of numbers, where the maximum number is <= 1000.\r\n\r\nFor each number in the range: Check to see if it's a prime\r\n\r\nnumber using the isPrime method. If the number is prime, print it out and increment the prime\r\n\r\nnumber counter variable. Once the prime number counter equals three, exit the loop (Hint,\r\n\r\nuse the break statement to exit). Your challenge is to create a for\r\n\r\nstatement, using any range of numbers, to determine if the numbers, are prime numbers.\r\n\r\nIf it's a prime number, print it out, and increment a count\r\n\r\nof the number of prime numbers found. if you get to the stage where 3 or more\r\n\r\nprime numbers are found, end the loop. In other words, you'll be iterating\r\n\r\nthrough the loop, but you've found three prime numbers before the range is fully processed.\r\n\r\n */\r\n\r\npublic class ForLoopPrimeNumberChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int count = 0;\r\n                for(int i = 10; i <= 20;i++){\r\n            if(isPrime(i)){\r\n             count++;\r\n             if(count == 3){\r\n                 break;\r\n             }\r\n            }\r\n        }\r\n\r\n        System.out.println(count);\r\n    }\r\n\r\n    public static boolean isPrime(int number){\r\n\r\n        if(number == 2){\r\n            return true;\r\n        }\r\n\r\n        for(int i = 2; i <= number / 2; i++){\r\n            if( number % i == 0){\r\n                return false;\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_9_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/ForLoopSum3and5Challenge.java",
        "fileName": "ForLoopSum3and5Challenge.java",
        "topicName": "For Loop Sum3and5 Challenge",
        "chapter": "Chapter 9: Java Looping Concepts",
        "subChapter": "For Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
              "And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.",
              "You also want to break out of the loop, once you find five numbers, that meet those above conditions.",
              "And then finally, after breaking out of the loop, print the sum of the numbers you found, that have met those above conditions."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "CODING CHALLENGE — For Loop Accumulator Pattern",
              "This challenge practices: for loops, the modulus operator (%), accumulating a running sum, and breaking early.",
              "The modulus operator: if i % 3 == 0, then i is divisible by 3 with no remainder.",
              "Combined condition: (i % 3 == 0) && (i % 5 == 0) means the number must be divisible by BOTH 3 and 5 (i.e., divisible by 15)."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_9_Java_Looping_Concepts.Sub_Chapter_2_For_Loop_Coding_Challenge;\r\n// CODING CHALLENGE — For Loop Accumulator Pattern\n// This challenge practices: for loops, the modulus operator (%), accumulating a running sum, and breaking early.\n// The modulus operator: if i % 3 == 0, then i is divisible by 3 with no remainder.\n// Combined condition: (i % 3 == 0) && (i % 5 == 0) means the number must be divisible by BOTH 3 and 5 (i.e., divisible by 15).\r\n/* * This is the sum 3 and 5 challenge. So the challenge is to create a for statement,\r\n\r\n    using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers,\r\n\r\n    when you're looping through, that can be divided with both the number 3, and also with 5.\r\n\r\n    And for those numbers, that meet the above conditions, in other words,\r\n\r\n    that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.\r\n\r\n    You also want to break out of the loop, once you find five numbers, that meet those above conditions.\r\n\r\n    And then finally, after breaking out of the loop, print the sum of the numbers you found,\r\n    that have met those above conditions.\r\n\r\n    * */\r\n\r\n\r\npublic class ForLoopSum3and5Challenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int sum = 0;\r\n        int matches = 0;\r\n\r\n        for(int i = 1; i <= 1000; i++){\r\n            if((i % 3 == 0) && (i % 5 == 0)){\r\n                matches++;\r\n                sum = sum + i;\r\n            }\r\n            if(matches == 5){\r\n                break;\r\n            }\r\n        }\r\n\r\n\r\n        System.out.println(sum);\r\n    }\r\n\r\n\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_9_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/SumOddChallenge.java",
        "fileName": "SumOddChallenge.java",
        "topicName": "Sum Odd Challenge",
        "chapter": "Chapter 9: Java Looping Concepts",
        "subChapter": "For Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
              "Check that number is > 0, if it is not return false.",
              "If number is odd return true, otherwise return false.",
              "Write a second method called sumOdd that has 2 int parameters start and end, which represent a range of numbers.",
              "The method should use a for loop to sum all odd numbers in that range including the end and return the sum.",
              "It should call the method isOdd to check if each number is odd.",
              "The parameter end needs to be greater than or equal to start and both start and end parameters have to be greater than 0.",
              "If those conditions are not satisfied return -1 from the method to indicate invalid input.",
              "Example input/output:",
              "sumOdd(1, 100); → should return 2500 sumOdd(-1, 100); → should return -1 sumOdd(100, 100); → should return 0 sumOdd(13, 13); → should return 13 (This set contains one number, 13, and it is odd) sumOdd(100, -100); → should return -1 sumOdd(100, 1000); → should return 247500"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "CODING CHALLENGE — For Loop with Method Decomposition",
              "This challenge decomposes the problem into two methods: isOdd() checks a single number, sumOdd() uses a for loop to accumulate the sum.",
              "Method decomposition: breaking a complex problem into smaller, single-purpose methods is a fundamental good programming practice.",
              "Guard clauses: checking invalid input at the start of a method and returning early (-1) to signal invalid input."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_9_Java_Looping_Concepts.Sub_Chapter_2_For_Loop_Coding_Challenge;\r\n// CODING CHALLENGE — For Loop with Method Decomposition\n// This challenge decomposes the problem into two methods: isOdd() checks a single number, sumOdd() uses a for loop to accumulate the sum.\n// Method decomposition: breaking a complex problem into smaller, single-purpose methods is a fundamental good programming practice.\n// Guard clauses: checking invalid input at the start of a method and returning early (-1) to signal invalid input.\r\n/*\r\n\r\nWrite a method called isOdd with an int parameter and call it number. The method needs to return a boolean.\r\n\r\nCheck that number is > 0, if it is not return false.\r\n\r\nIf number is odd return true, otherwise return false.\r\n\r\nWrite a second method called sumOdd that has 2 int parameters start and end, which represent a range of numbers.\r\n\r\nThe method should use a for loop to sum all odd numbers in that range including the end and return the sum.\r\n\r\nIt should call the method isOdd to check if each number is odd.\r\n\r\nThe parameter end needs to be greater than or equal to start and both start and end parameters have to be greater than 0.\r\n\r\nIf those conditions are not satisfied return -1 from the method to indicate invalid input.\r\n\r\nExample input/output:\r\n\r\nsumOdd(1, 100); → should return 2500\r\n\r\nsumOdd(-1, 100); → should return -1\r\n\r\nsumOdd(100, 100); → should return 0\r\n\r\nsumOdd(13, 13); → should return 13 (This set contains one number, 13, and it is odd)\r\n\r\nsumOdd(100, -100); → should return -1\r\n\r\nsumOdd(100, 1000); → should return 247500\r\n*\r\n*/\r\n\r\npublic class SumOddChallenge {\r\n\r\n    public static void main(String[] args) {\r\n       int sum = sumOdd(10, 5);\r\n        System.out.println(sum);\r\n    }\r\n\r\n    public static boolean isOdd(int number){\r\n        if (number >= 0){\r\n            if(number % 2 == 0){\r\n                return false;\r\n            }\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    public static int sumOdd(int start,int end){\r\n\r\n        int sum = 0;\r\n\r\n        if(start > 0 && end > 0 && start <= end){\r\n            for(int i = start; i<=end ;i++){\r\n                if(isOdd(i)){\r\n                    sum = sum + i;\r\n                }\r\n            }\r\n        }else{\r\n            return -1;\r\n        }\r\n\r\n        return sum;\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 10: While And Do While Looping Concepts",
    "topics": [
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java",
        "fileName": "WhileLoops.java",
        "topicName": "While Loops",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Loop",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "WHILE LOOPS",
              "The while loop repeatedly executes its body as long as a condition remains true.",
              "Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.",
              "You must declare and initialise any counter variables BEFORE the loop, and update them INSIDE the loop body.",
              "Syntax:",
              "Key difference from for loop:",
              "- for loop: initialisation, condition, and update are all in one line — ideal when you know the count upfront.",
              "- while loop: only the condition is in the declaration — ideal when you don't know upfront how many times to loop.",
              "EXAMPLE 1 — Basic counting with while:",
              "EXAMPLE 2 — while(true) with break (common pattern for \"loop until done\"):",
              "CONTINUE and BREAK:",
              "- continue: skips the REMAINING code in the current iteration and starts the next iteration immediately.",
              "- break: exits the loop entirely at the point it is executed. No further iterations run.",
              "IMPORTANT: Always check your loop condition carefully.",
              "- An infinite loop (condition never becomes false, no break) will freeze or crash your program.",
              "- A never-executing loop (condition is false from the start) will silently skip all the loop code."
            ]
          }
        ],
        "inlineComments": [
          "body must update loop variable here, or you get an infinite loop!",
          "initialisation happens OUTSIDE the while",
          "condition",
          "update happens INSIDE the while",
          "infinite loop — will loop forever unless break is used",
          "exits the loop when j exceeds 5",
          "block of statements",
          "Another common way to program while loop is :-",
          "while statement with continue and break: 'continue' skips to the next iteration, 'break' exits the loop entirely."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_1_While_Loop;\n/*\n  WHILE LOOPS\n\n  The while loop repeatedly executes its body as long as a condition remains true.\n  Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.\n  You must declare and initialise any counter variables BEFORE the loop, and update them INSIDE the loop body.\n\n  Syntax:\n    while (condition) {\n        // body\n        // must update loop variable here, or you get an infinite loop!\n    }\n\n  Key difference from for loop:\n  - for loop: initialisation, condition, and update are all in one line — ideal when you know the count upfront.\n  - while loop: only the condition is in the declaration — ideal when you don't know upfront how many times to loop.\n\n  EXAMPLE 1 — Basic counting with while:\n    int j = 1;           // initialisation happens OUTSIDE the while\n    while (j <= 5) {     // condition\n        System.out.println(j);\n        j++;             // update happens INSIDE the while\n    }\n\n  EXAMPLE 2 — while(true) with break (common pattern for \"loop until done\"):\n    while (true) {       // infinite loop — will loop forever unless break is used\n        if (j > 5) {\n            break;       // exits the loop when j exceeds 5\n        }\n    }\n\n  CONTINUE and BREAK:\n  - continue: skips the REMAINING code in the current iteration and starts the next iteration immediately.\n  - break: exits the loop entirely at the point it is executed. No further iterations run.\n\n  IMPORTANT: Always check your loop condition carefully.\n  - An infinite loop (condition never becomes false, no break) will freeze or crash your program.\n  - A never-executing loop (condition is false from the start) will silently skip all the loop code.\n*/\r\n\r\npublic class WhileLoops {\r\n\r\n    /* while loop simply has expression\r\n\r\n    While loop code format :-\r\n\r\n    while(expression)  {\r\n    // block of statements\r\n\r\n    } */\r\n\r\n    /*\r\nUnlike the for loop, there is no place for the declaration of a temporary variable, in\r\n    the declaration of the while statement.\r\n    So we have to declare any iteration variables, outside the loop.\r\n */\r\n\r\n    public static void main(String[] args) {\r\n/*        int j = 1; // In while loop the initialisation of the variable happens outside the while loop\r\n\r\n        while (j <= 5) { // condition\r\n            System.out.println(j);\r\n            j++;   // Iteration\r\n        }\r\n\r\n        // Another common way to program while loop is :-\r\n\r\n        while(true){ // If break condition is not put, it will lead to infinite loop condition\r\n            if(j > 5){ // Here in this code, we are breaking the loop, as soon as the condition is met.\r\n                break;\r\n            }\r\n        }*/\r\n\r\n        int number = 0;\r\n\r\n        while(number < 15){\r\n            number++;\r\n\r\n            if(number <= 5){\r\n                System.out.println(\"Skipping number \" + number);\r\n                continue;\r\n            }\r\n\r\n            if(number >= 10){\r\n                System.out.println(\"Skipping number \" + number);\r\n                break;\r\n            }\r\n\r\n            System.out.println(number);\r\n        }\r\n\r\n    }\r\n\r\n// while statement with continue and break: 'continue' skips to the next iteration, 'break' exits the loop entirely.\r\n\r\n\r\n\r\n\r\n\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_2_Do_While_Loop/DoWhileLoops.java",
        "fileName": "DoWhileLoops.java",
        "topicName": "Do While Loops",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "Do While Loop",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
              "In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.",
              "This makes do-while ideal for situations like \"ask the user for input at least once, then keep asking if the input is invalid.\"",
              "Syntax:",
              "body — executes first, at least once",
              "} while (condition);  // NOTE: semicolon required after the closing parenthesis!",
              "The semicolon after while(condition); is MANDATORY — forgetting it is a syntax error.",
              "continue and break work the same way in do-while: continue jumps to the condition check; break exits the loop.",
              "When using loops: always check for infinite loops (condition never becomes false) and never-executing loops (condition false from the very start — can't happen in do-while, but watch for it in while and for loops)."
            ]
          }
        ],
        "inlineComments": [
          "NOTE: semicolon required after the closing parenthesis!",
          "do while statement format: the do block runs first, then the while condition is evaluated. A semicolon is required after the while condition.",
          "Code to execute at least once, and again if the while condition is true.",
          "do while example: demonstrates that the loop body always executes at least once, even when the exit condition is already set up.",
          "do while with break and continue: 'continue' skips remaining code in the current iteration and rechecks the while condition. 'break' exits the loop immediately."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_2_Do_While_Loop;\n// The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.\n// In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.\n// This makes do-while ideal for situations like \"ask the user for input at least once, then keep asking if the input is invalid.\"\n// Syntax:\n//   do {\n//       // body — executes first, at least once\n//   } while (condition);  // NOTE: semicolon required after the closing parenthesis!\n// The semicolon after while(condition); is MANDATORY — forgetting it is a syntax error.\n// continue and break work the same way in do-while: continue jumps to the condition check; break exits the loop.\n// When using loops: always check for infinite loops (condition never becomes false) and never-executing loops (condition false from the very start — can't happen in do-while, but watch for it in while and for loops).\npublic class DoWhileLoops {\r\n\r\n        /*   do while always executes at least once, and then the condition is checked.\r\n         If the expression is evaluated to true, the execution continues, otherwise the loop will not iterate\r\n\r\n         It will first enter the do block and execute it at least once, and then check for while condition,\r\n         if the while condition expression evaluates to false, it won't iterate,\r\n         but if it's true, the loop will continue to execute.\r\n\r\n\r\n      When using loops, you want to carefully examine the conditions\r\n\r\n      for terminating or continuing a loop. Check for endless or infinite loops.\r\n\r\n      Check for conditions where a loop will never execute.\r\n\r\n      So, be careful with conditions because it's very easy to end up with an endless loop,\r\n\r\n    */\r\n\r\n    // do while statement format: the do block runs first, then the while condition is evaluated. A semicolon is required after the while condition.\r\n        /*\r\n        do {\r\n            // Code to execute at least once, and again if the while condition is true.\r\n        } while(expression); // semicolon required\r\n         */\r\n\r\n\r\n    public static void main(String[] args) {\r\n\r\n        // do while example: demonstrates that the loop body always executes at least once, even when the exit condition is already set up.\r\n\r\n        int j = 1;\r\n        boolean isReady = true;\r\n        do{\r\n            if (j > 5){\r\n                break;\r\n            }\r\n            System.out.println(j);\r\n            j++;\r\n        }\r\n        while (isReady);\r\n\r\n\r\n // do while with break and continue: 'continue' skips remaining code in the current iteration and rechecks the while condition. 'break' exits the loop immediately.\r\n\r\n /*       int number = 0; // Variable is initialised\r\n\r\n          do{ // do code block gets executed first regardless of the while condition. At least one time the do block will get executed\r\n\r\n            number++; // Number is incremented\r\n\r\n            if(number <=5){\r\n                System.out.println(\"Skipping number \" + number);\r\n                continue; // The continue statement will skip the remaining code, and continue with the condition of the while loop.\r\n                }\r\n\r\n            if(number >=10){\r\n                System.out.println(\"Breaking at \" + number);\r\n                break; // The break statement will exit the loop\r\n            }\r\n\r\n            System.out.println(number);\r\n\r\n        }\r\n        while(number < 15);\r\n\r\n*/\r\n\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/CheckNumberPalindromeCodingChallenge.java",
        "fileName": "CheckNumberPalindromeCodingChallenge.java",
        "topicName": "Check Number Palindrome Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Number Palindrome",
              "Write a method called isPalindrome with one int parameter called number.",
              "The method needs to return a boolean.",
              "It should return true if the number is a palindrome number otherwise it should return false.",
              "Check the tips below for more info about palindromes.",
              "Example Input/Output isPalindrome(-1221); → should return true isPalindrome(707); → should return true isPalindrome(11212); → should return false because reverse is 21211 and that is not equal to 11212.",
              "Tip: What is a Palindrome number?  A palindrome number is a number which when reversed is equal to the original number. For example: 121, 12321, 1001 etc.",
              "Tip: Logic to check a palindrome number",
              "Find the the reverse of the given number. Store it in some variable say reverse. Compare the number with reverse.",
              "If both are the the same then the number is a palindrome otherwise it is not.",
              "Tip: Logic to reverse a number",
              "Declare and initialize another variable to store the reverse of a number, for example reverse = 0.",
              "Extract the last digit of the given number by performing the modulo division (remainder).",
              "Store the last digit to some variable say lastDigit = num % 10.",
              "Increase the place value of reverse by one.",
              "To increase place value multiply the reverse variable by 10 e.g. reverse = reverse * 10.",
              "Add lastDigit to reverse.",
              "Since the last digit of the number is processed, remove the last digit of num. To remove the last digit divide number by 10.",
              "Repeat steps until number is not equal to (or greater than) zero.",
              "A while loop would be good for this coding exercise."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "CODING CHALLENGE — While Loop with Number Reversal",
              "A palindrome number reads the same forwards and backwards: 121, 1001, 707.",
              "Technique: reverse the number using arithmetic. Extract the last digit with (number % 10), add it to the reversed number (reversed * 10 + digit), then remove the last digit (number / 10). Compare reversed == original."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n// CODING CHALLENGE — While Loop with Number Reversal\n// A palindrome number reads the same forwards and backwards: 121, 1001, 707.\n// Technique: reverse the number using arithmetic. Extract the last digit with (number % 10), add it to the reversed number (reversed * 10 + digit), then remove the last digit (number / 10). Compare reversed == original.\r\n/*\r\n\r\nNumber Palindrome\r\n\r\nWrite a method called isPalindrome with one int parameter called number.\r\n\r\nThe method needs to return a boolean.\r\n\r\nIt should return true if the number is a palindrome number otherwise it should return false.\r\n\r\nCheck the tips below for more info about palindromes.\r\n\r\nExample Input/Output\r\n\r\nisPalindrome(-1221); → should return true\r\n\r\nisPalindrome(707); → should return true\r\n\r\nisPalindrome(11212); → should return false because reverse is 21211 and that is not equal to 11212.\r\n\r\nTip: What is a Palindrome number?  A palindrome number is a number which when reversed is equal to the original number. For example: 121, 12321, 1001 etc.\r\n\r\nTip: Logic to check a palindrome number\r\n\r\nFind the the reverse of the given number. Store it in some variable say reverse. Compare the number with reverse.\r\n\r\nIf both are the the same then the number is a palindrome otherwise it is not.\r\n\r\nTip: Logic to reverse a number\r\n\r\nDeclare and initialize another variable to store the reverse of a number, for example reverse = 0.\r\n\r\nExtract the last digit of the given number by performing the modulo division (remainder).\r\nStore the last digit to some variable say lastDigit = num % 10.\r\nIncrease the place value of reverse by one.\r\nTo increase place value multiply the reverse variable by 10 e.g. reverse = reverse * 10.\r\nAdd lastDigit to reverse.\r\nSince the last digit of the number is processed, remove the last digit of num. To remove the last digit divide number by 10.\r\nRepeat steps until number is not equal to (or greater than) zero.\r\n\r\nA while loop would be good for this coding exercise.\r\n\r\n* */\r\n\r\npublic class CheckNumberPalindromeCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(checkIfNumberIsPalindrome(111));\r\n    }\r\n\r\n    public static boolean checkIfNumberIsPalindrome(int number){\r\n\r\n        int originalNumber = number;\r\n\r\n        int reverseNumber = 0;\r\n\r\n        int remainder;\r\n\r\n        while(number != 0){\r\n\r\n            remainder = number % 10;\r\n\r\n            number = number / 10;\r\n\r\n            reverseNumber = (reverseNumber * 10) + remainder;\r\n        }\r\n\r\n        System.out.println(reverseNumber);\r\n\r\n        if(originalNumber == reverseNumber){\r\n            return true;\r\n        }else {\r\n            return false;\r\n        }\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/DigitSumCodingChallenge.java",
        "fileName": "DigitSumCodingChallenge.java",
        "topicName": "Digit Sum Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
              "The method should only take a number that is a positive number.",
              "If a negative number is passed, it should return -1, meaning, an invalid value was passed.",
              "The method should parse out each digit from the number and sum the digits up.",
              "So, if 125 is the value passed to the method, the code should sum each digit, in this case, 1 + 2 + 5, and return 8, as a value. And another example, if the value is 1000, the code should sum each digit, 1 + 0 + 0 + 0, and return 1 as a value.",
              "If the number is a single digit number, simply return the number itself as the result."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n*   In this challenge, your task is to write a method with the name sumDigits that\r\n\r\nhas a single parameter named number, of type int, and it should return an int.\r\n\r\nThe method should only take a number that is a positive number.\r\n\r\nIf a negative number is passed, it should return -1, meaning, an invalid value was passed.\r\n\r\nThe method should parse out each digit from the number and sum the digits up.\r\n\r\nSo, if 125 is the value passed to the method, the code should sum each digit, in this case,\r\n\r\n1 + 2 + 5, and return 8, as a value. And another example, if the value is 1000,\r\n\r\nthe code should sum each digit, 1 + 0 + 0 + 0, and return 1 as a value.\r\n\r\nIf the number is a single digit number, simply return the number itself as the result.\r\n*\r\n*\r\n* */\r\n\r\n\r\n\r\npublic class DigitSumCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(sumDigits(123));\r\n    }\r\n\r\n    public static int sumDigits(int number){\r\n\r\n        int sum = 0;\r\n\r\n        if(number < 0){\r\n            sum = -1;\r\n        }\r\n\r\n\r\n        int remainder;\r\n\r\n        while(number > 0){\r\n\r\n            remainder = number % 10;\r\n\r\n            number = number / 10;\r\n\r\n            sum = sum + remainder;\r\n        }\r\n\r\n\r\n            return sum;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/EvenDigitSumCodingChallenge.java",
        "fileName": "EvenDigitSumCodingChallenge.java",
        "topicName": "Even Digit Sum Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Even Digit Sum",
              "Write a method named getEvenDigitSum with one parameter of type int called number.",
              "The method should return the sum of the even digits within the number.",
              "If the number is negative, the method should return -1 to indicate an invalid value.",
              "EXAMPLE INPUT/OUTPUT:",
              "getEvenDigitSum(123456789); → should return 20 since 2 + 4 + 6 + 8 = 20 getEvenDigitSum(252); → should return 4 since 2 + 2 = 4 getEvenDigitSum(-22); → should return -1 since the number is negative"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n* Even Digit Sum\r\nWrite a method named getEvenDigitSum with one parameter of type int called number.\r\n\r\nThe method should return the sum of the even digits within the number.\r\n\r\nIf the number is negative, the method should return -1 to indicate an invalid value.\r\n\r\n\r\n\r\nEXAMPLE INPUT/OUTPUT:\r\n\r\ngetEvenDigitSum(123456789); → should return 20 since 2 + 4 + 6 + 8 = 20\r\n\r\ngetEvenDigitSum(252); → should return 4 since 2 + 2 = 4\r\n\r\ngetEvenDigitSum(-22); → should return -1 since the number is negative\r\n*\r\n*\r\n*\r\n*\r\n* */\r\n\r\npublic class EvenDigitSumCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(getEvenDigitSum(1234567));\r\n    }\r\n\r\n    public static int getEvenDigitSum(int number){\r\n\r\n        int evenDigitSum = 0;\r\n\r\n        if(number < 0){\r\n            return -1;\r\n        }\r\n\r\n        while(number != 0){\r\n\r\n            int remainder = number % 10;\r\n\r\n            if(number % 2 == 0){\r\n                evenDigitSum = evenDigitSum + remainder;\r\n            }\r\n\r\n            number = number / 10;\r\n        }\r\n\r\n        return evenDigitSum;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FactorPrinterCodingChallenge.java",
        "fileName": "FactorPrinterCodingChallenge.java",
        "topicName": "Factor Printer Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.",
              "For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.",
              "The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).",
              "If the number is less than 1, the method returns -1 to indicate invalid input."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n// Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.\r\n// For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.\r\n// The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).\r\n// If the number is less than 1, the method returns -1 to indicate invalid input.\r\n\r\npublic class  FactorPrinterCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        printFactors(32);\r\n    }\r\n\r\n    public static void printFactors(int number){\r\n\r\n        int counter = 1;\r\n\r\n        if(number < 1){\r\n            System.out.println(-1);\r\n\r\n        }else{\r\n\r\n            while(counter <= number){\r\n\r\n\r\n                if(number % counter == 0){\r\n                    System.out.println(counter + \" \");\r\n                }\r\n\r\n                counter++;\r\n\r\n\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FirstAndLastDigitSumCodingChallenge.java",
        "fileName": "FirstAndLastDigitSumCodingChallenge.java",
        "topicName": "First And Last Digit Sum Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "First And Last Digit Sum",
              "Write a method named sumFirstAndLastDigit with one parameter of type int called number.",
              "The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.",
              "If the number is negative then the method needs to return -1 to indicate an invalid value.",
              "Example input/output sumFirstAndLastDigit(252); → should return 4, the first digit is 2 and the last is 2 which gives us 2+2 and the sum is 4.",
              "sumFirstAndLastDigit(257); → should return 9, the first digit is 2 and the last is 7 which gives us 2+7 and the sum is 9.",
              "sumFirstAndLastDigit(0); → should return 0, the first digit and the last digit is 0 since we only have 1 digit, which gives us 0+0 and the sum is 0.",
              "sumFirstAndLastDigit(5); → should return 10, the first digit and the last digit is 5 since we only have 1 digit, which gives us 5+5 and the sum is 10.",
              "sumFirstAndLastDigit(-10); → should return -1, since the parameter is negative and needs to be positive."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n*  First And Last Digit Sum\r\n*\r\nWrite a method named sumFirstAndLastDigit with one parameter of type int called number.\r\n\r\nThe method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.\r\n\r\nIf the number is negative then the method needs to return -1 to indicate an invalid value.\r\n\r\nExample input/output\r\n\r\nsumFirstAndLastDigit(252); → should return 4, the first digit is 2 and the last is 2 which gives us 2+2 and the sum is 4.\r\n\r\nsumFirstAndLastDigit(257); → should return 9, the first digit is 2 and the last is 7 which gives us 2+7 and the sum is 9.\r\n\r\nsumFirstAndLastDigit(0); → should return 0, the first digit and the last digit is 0 since we only have 1 digit, which gives us 0+0 and the sum is 0.\r\n\r\nsumFirstAndLastDigit(5); → should return 10, the first digit and the last digit is 5 since we only have 1 digit, which gives us 5+5 and the sum is 10.\r\n\r\nsumFirstAndLastDigit(-10); → should return -1, since the parameter is negative and needs to be positive.\r\n*\r\n*\r\n*\r\n* */\r\n\r\npublic class FirstAndLastDigitSumCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(sumFirstAndLastDigit(30043534));\r\n    }\r\n\r\n    public static int sumFirstAndLastDigit(int number){\r\n\r\n        if(number < 0){\r\n            return -1;\r\n        }\r\n\r\n        int lastNumber = number % 10;\r\n\r\n        int firstNumber = 0;\r\n\r\n        while (number != 0){\r\n\r\n            if(number < 10){\r\n                firstNumber = number;\r\n            }\r\n\r\n\r\n            number = number / 10;\r\n\r\n        }\r\n\r\n        return lastNumber + firstNumber;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FloorPackProblemCodingChallenge.java",
        "fileName": "FloorPackProblemCodingChallenge.java",
        "topicName": "Floor Pack Problem Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.",
              "The parameter bigCount represents the count of big flour bags (5 kilos each).",
              "The parameter smallCount represents the count of small flour bags (1 kilo each).",
              "The parameter goal represents the goal amount of kilos of flour needed to assemble a package.",
              "Therefore, the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal. The method should return true if it is possible to make a package with goal kilos of flour.",
              "If the sum is greater than goal, ensure that only full bags are used towards the goal amount. For example, if goal = 9, bigCount = 2, and smallCount = 0, the method should return false since each big bag is 5 kilos and cannot be divided. However, if goal = 9, bigCount = 1, and smallCount = 5, the method should return true because of 1 full bigCount bag and 4 full smallCount bags equal goal, and it's okay if there are additional bags left over.",
              "If any of the parameters are negative, return false.",
              "EXAMPLE INPUT/OUTPUT:",
              "canPack (1, 0, 4); should return false since bigCount is 1 (big bag of 5 kilos) and goal is 4 kilos.",
              "canPack (1, 0, 5); should return true since bigCount is 1 (big bag of 5 kilos) and goal is 5 kilos.",
              "canPack (0, 5, 4); should return true since smallCount is 5 (small bags of 1 kilo) and goal is 4 kilos, and we have 1 bag left which is ok as mentioned above.",
              "canPack (2, 2, 11); should return true since bigCount is 2 (big bags 5 kilos each) and smallCount is 2 (small bags of 1 kilo), makes in total 12 kilos and goal is 11 kilos.",
              "canPack (-3, 2, 12); should return false since bigCount is negative."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n*   Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.\r\n\r\nThe parameter bigCount represents the count of big flour bags (5 kilos each).\r\n\r\nThe parameter smallCount represents the count of small flour bags (1 kilo each).\r\n\r\nThe parameter goal represents the goal amount of kilos of flour needed to assemble a package.\r\n\r\nTherefore, the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal. The method should return true if it is possible to make a package with goal kilos of flour.\r\n\r\nIf the sum is greater than goal, ensure that only full bags are used towards the goal amount. For example, if goal = 9, bigCount = 2, and smallCount = 0, the method should return false since each big bag is 5 kilos and cannot be divided. However, if goal = 9, bigCount = 1, and smallCount = 5, the method should return true because of 1 full bigCount bag and 4 full smallCount bags equal goal, and it's okay if there are additional bags left over.\r\n\r\nIf any of the parameters are negative, return false.\r\n\r\n\r\n\r\nEXAMPLE INPUT/OUTPUT:\r\n\r\ncanPack (1, 0, 4); should return false since bigCount is 1 (big bag of 5 kilos) and goal is 4 kilos.\r\n\r\ncanPack (1, 0, 5); should return true since bigCount is 1 (big bag of 5 kilos) and goal is 5 kilos.\r\n\r\ncanPack (0, 5, 4); should return true since smallCount is 5 (small bags of 1 kilo) and goal is 4 kilos, and we have 1 bag left which is ok as mentioned above.\r\n\r\ncanPack (2, 2, 11); should return true since bigCount is 2 (big bags 5 kilos each) and smallCount is 2 (small bags of 1 kilo), makes in total 12 kilos and goal is 11 kilos.\r\n\r\ncanPack (-3, 2, 12); should return false since bigCount is negative.\r\n*\r\n* */\r\n\r\npublic class FloorPackProblemCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n       System.out.println(canPack(2,1,5));\r\n    }\r\n\r\n    public static boolean canPack(int bigCount, int smallCount, int goal){\r\n\r\n        if(bigCount < 0 || smallCount < 0){\r\n            return false;\r\n        }\r\n\r\n        int totalRemainingWeight = goal;\r\n\r\n        int bigSumCounter = 0;\r\n\r\n        int smallSumCounter = 0;\r\n\r\n        if(goal < (bigCount * 5) && smallCount == 0){\r\n            return false;\r\n        }\r\n\r\n        while(bigSumCounter < bigCount){\r\n\r\n\r\n            totalRemainingWeight = totalRemainingWeight - 5;\r\n\r\n\r\n            if(totalRemainingWeight == 0) {\r\n                return true;\r\n\r\n            }\r\n             if(totalRemainingWeight < 0){\r\n                totalRemainingWeight = totalRemainingWeight + 5;\r\n                break;\r\n            }\r\n\r\n            bigSumCounter++;\r\n\r\n        }\r\n\r\n        while(smallSumCounter < smallCount){\r\n\r\n            totalRemainingWeight = totalRemainingWeight - 1;\r\n\r\n            if(totalRemainingWeight == 0){\r\n                return true;\r\n            }\r\n            smallSumCounter++;\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/GreatestCommonDivisorCodingChallenge.java",
        "fileName": "GreatestCommonDivisorCodingChallenge.java",
        "topicName": "Greatest Common Divisor Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.",
              "For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.",
              "The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.",
              "Both numbers must be >= 10; otherwise -1 is returned to indicate invalid input.",
              "The approach uses nested while loops to compare factors of both numbers, tracking the largest common one found."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n// Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.\r\n// For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.\r\n// The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.\r\n// Both numbers must be >= 10; otherwise -1 is returned to indicate invalid input.\r\n// The approach uses nested while loops to compare factors of both numbers, tracking the largest common one found.\r\n\r\npublic class GreatestCommonDivisorCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(getGreatestCommonDivisor(81,153));\r\n    }\r\n\r\n    public static int getGreatestCommonDivisor(int number1, int number2){\r\n\r\n        int greatestCommonDivisor = 0;\r\n\r\n        int counter1 = 1;\r\n\r\n        int counter2 = 1;\r\n\r\n        if((number1 >=10) && (number2 >=10)){\r\n\r\n            int minValue = Math.min(number1,number2);\r\n\r\n            int maxValue = Math.max(number1,number2);\r\n\r\n            while (counter1 <= minValue){\r\n\r\n                if(minValue % counter1 == 0){\r\n\r\n                    counter2 = 1;\r\n\r\n                    while ((counter2 <= maxValue)){\r\n\r\n                        if(maxValue % counter2 == 0){\r\n\r\n                            if(counter1 == counter2){\r\n\r\n                                greatestCommonDivisor = counter1;\r\n                            }\r\n\r\n                        }\r\n                        counter2++;\r\n                    }\r\n                }\r\n\r\n                counter1++;\r\n            }\r\n\r\n\r\n\r\n        }else{\r\n            return -1;\r\n        }\r\n\r\n        return greatestCommonDivisor;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LargestPrimeFactorCodingChallenge.java",
        "fileName": "LargestPrimeFactorCodingChallenge.java",
        "topicName": "Largest Prime Factor Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Write a method named getLargestPrime with one parameter of type int named number.",
              "If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.",
              "The method should calculate the largest prime factor of a given number and return it.",
              "EXAMPLE INPUT/OUTPUT:",
              "getLargestPrime (21); should return 7 since 7 is the largest prime (3 * 7 = 21) getLargestPrime (217); should return 31 since 31 is the largest prime (7 * 31 = 217) getLargestPrime (0); should return -1 since 0 does not have any prime numbers getLargestPrime (45); should return 5 since 5 is the largest prime (3 * 3 * 5 = 45) getLargestPrime (-1); should return -1 since the parameter is negative"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n* Write a method named getLargestPrime with one parameter of type int named number.\r\n\r\nIf the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.\r\n\r\n\r\n\r\nThe method should calculate the largest prime factor of a given number and return it.\r\n\r\n\r\n\r\nEXAMPLE INPUT/OUTPUT:\r\n\r\ngetLargestPrime (21); should return 7 since 7 is the largest prime (3 * 7 = 21)\r\n\r\ngetLargestPrime (217); should return 31 since 31 is the largest prime (7 * 31 = 217)\r\n\r\ngetLargestPrime (0); should return -1 since 0 does not have any prime numbers\r\n\r\ngetLargestPrime (45); should return 5 since 5 is the largest prime (3 * 3 * 5 = 45)\r\n\r\ngetLargestPrime (-1); should return -1 since the parameter is negative\r\n* */\r\n\r\npublic class LargestPrimeFactorCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(getLargestPrime(21));\r\n    }\r\n\r\n    public static int getLargestPrime(int number){\r\n\r\n        if(number == 0 || number == 1 || (number < 0 )){\r\n\r\n            return -1;\r\n        }\r\n\r\n        int largestPrime = 2;\r\n\r\n        int counter = 2;\r\n\r\n        int factor = 0;\r\n\r\n        boolean flag = true;\r\n\r\n        while(counter <= number){\r\n\r\n            if(number % counter == 0){\r\n                factor = counter;\r\n\r\n                int counter2 = 2;\r\n                while(counter2 < factor){\r\n\r\n                    if(factor % counter2 == 0){\r\n                        flag = false;\r\n                  break;\r\n                    }\r\n                    counter2++;\r\n                }\r\n\r\n            }\r\n\r\n            if(flag){\r\n                largestPrime = factor;\r\n            }\r\n\r\n            counter++;\r\n        }\r\n\r\n        return largestPrime;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LastDigitCheckerCodingChallenge.java",
        "fileName": "LastDigitCheckerCodingChallenge.java",
        "topicName": "Last Digit Checker Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Last Digit Checker",
              "Write a method named hasSameLastDigit with three parameters of type int.",
              "Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.",
              "The method should return true if at least two of the numbers share the same rightmost digit; otherwise, it should return false.",
              "EXAMPLE INPUT/OUTPUT:",
              "hasSameLastDigit (41, 22, 71); → should return true since 1 is the rightmost digit in numbers 41 and 71 hasSameLastDigit (23, 32, 42); → should return true since 2 is the rightmost digit in numbers 32 and 42 hasSameLastDigit (9, 99, 999); → should return false since 9 is not within the range of 10-1000",
              "Write another method named isValid with one parameter of type int.",
              "The method needs to return true if the number parameter is in range of 10(inclusive) - 1000(inclusive), otherwise return false.",
              "EXAMPLE INPUT/OUTPUT isValid(10); → should return true since 10 is within the range of 10-1000 isValid(468); → should return true since 468 is within the range of 10-1000 isValid(1051); → should return false since 1051 is not within the range of 10-1000"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n* Last Digit Checker\r\nWrite a method named hasSameLastDigit with three parameters of type int.\r\n\r\nEach number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.\r\n\r\nThe method should return true if at least two of the numbers share the same rightmost digit; otherwise, it should return false.\r\n\r\n\r\n\r\nEXAMPLE INPUT/OUTPUT:\r\n\r\nhasSameLastDigit (41, 22, 71); → should return true since 1 is the rightmost digit in numbers 41 and 71\r\n\r\nhasSameLastDigit (23, 32, 42); → should return true since 2 is the rightmost digit in numbers 32 and 42\r\n\r\nhasSameLastDigit (9, 99, 999); → should return false since 9 is not within the range of 10-1000\r\n\r\n\r\n\r\nWrite another method named isValid with one parameter of type int.\r\n\r\nThe method needs to return true if the number parameter is in range of 10(inclusive) - 1000(inclusive), otherwise return false.\r\n\r\nEXAMPLE INPUT/OUTPUT\r\n\r\nisValid(10); → should return true since 10 is within the range of 10-1000\r\n\r\nisValid(468); → should return true since 468 is within the range of 10-1000\r\n\r\nisValid(1051); → should return false since 1051 is not within the range of 10-1000\r\n\r\n\r\n* */\r\n\r\npublic class LastDigitCheckerCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n\r\n        System.out.println(hasSameLastDigit (9, 99, 999));\r\n    }\r\n\r\n\r\n    public static boolean isValid(int number){\r\n\r\n        if((number >= 10) && (number <= 1000)){\r\n            return true;\r\n        }else{\r\n            return false;\r\n        }\r\n    }\r\n\r\n    public static boolean hasSameLastDigit(int number1, int number2, int number3){\r\n\r\n        boolean checkIfSameLastDigit = false;\r\n\r\n        if(isValid(number1) && isValid(number2) && isValid(number3)){\r\n\r\n            while(number1 != 0){\r\n\r\n                int remainder = number1 % 10;\r\n\r\n                if((remainder == (number2 % 10)) || (remainder == (number3 % 10))){\r\n                    checkIfSameLastDigit =  true;\r\n                    break;\r\n                }else{\r\n\r\n                    number1 = number1 / 10;\r\n                }\r\n\r\n            }\r\n\r\n        }\r\n\r\n        return checkIfSameLastDigit;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/NumberToWordsCodingChallenge.java",
        "fileName": "NumberToWordsCodingChallenge.java",
        "topicName": "Number To Words Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "generated",
            "lines": [
              "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
              "Review the class NumberToWordsCodingChallenge and understand its key responsibilities.",
              "This example defines 3 methods; trace method behavior step by step."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\npublic class NumberToWordsCodingChallenge {\r\n\r\n\r\n    public static int getDigitCount(int number){\r\n\r\n        int counter = 0;\r\n\r\n        if(number < 0) {\r\n            counter = -1;\r\n        }else if(number == 0){\r\n            counter = 1;\r\n        }else{\r\n\r\n            while(number != 0){\r\n                number = number / 10;\r\n                counter++;\r\n            }\r\n\r\n        }\r\n\r\n        return counter;\r\n    }\r\n\r\n    public static int reverse(int number){\r\n\r\n        int reverseNumber = 0;\r\n\r\n        while(number != 0){\r\n\r\n            int remainder = number % 10;\r\n\r\n            reverseNumber = (reverseNumber * 10) + remainder;\r\n\r\n            number = number / 10;\r\n        }\r\n\r\n        return reverseNumber;\r\n    }\r\n\r\n    public static void numberToWords(int number){\r\n\r\n        String word = \"\";\r\n\r\n        if(number < 0){\r\n            System.out.println(\"Invalid Value\");\r\n        }else {\r\n\r\n            int originalNumberDigitCount = getDigitCount(number);\r\n\r\n            int reverseNumber = reverse(number);\r\n\r\n            int reverseNumberDigitCount = getDigitCount(reverseNumber);\r\n\r\n            int differenceOfDigitCount = originalNumberDigitCount - reverseNumberDigitCount;\r\n\r\n            if (getDigitCount(reverseNumber) == 0 || reverseNumber == 0) {\r\n\r\n                switch (reverseNumber) {\r\n                    case 0 -> word = word + \"Zero\";\r\n                    case 1 -> word = word + \"One\";\r\n                    case 2 -> word = word + \"Two\";\r\n                    case 3 -> word = word + \"Three\";\r\n                    case 4 -> word = word + \"Four\";\r\n                    case 5 -> word = word + \"Five\";\r\n                    case 6 -> word = word + \"Six\";\r\n                    case 7 -> word = word + \"Seven\";\r\n                    case 8 -> word = word + \"Eight\";\r\n                    case 9 -> word = word + \"Nine\";\r\n                }\r\n\r\n            } else {\r\n\r\n\r\n                while (reverseNumber != 0) {\r\n\r\n                    int remainder = reverseNumber % 10;\r\n\r\n                    switch (remainder) {\r\n                        case 0 -> word = word + \" Zero\";\r\n                        case 1 -> word = word + \" One\";\r\n                        case 2 -> word = word + \" Two\";\r\n                        case 3 -> word = word + \" Three\";\r\n                        case 4 -> word = word + \" Four\";\r\n                        case 5 -> word = word + \" Five\";\r\n                        case 6 -> word = word + \" Six\";\r\n                        case 7 -> word = word + \" Seven\";\r\n                        case 8 -> word = word + \" Eight\";\r\n                        case 9 -> word = word + \" Nine\";\r\n                    }\r\n\r\n                    reverseNumber = reverseNumber / 10;\r\n\r\n\r\n                }\r\n\r\n                while (differenceOfDigitCount != 0) {\r\n                    word = word + \" Zero\";\r\n                    differenceOfDigitCount--;\r\n                }\r\n\r\n\r\n            }\r\n\r\n            System.out.println(word);\r\n        }\r\n    }\r\n\r\n}"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/PerfectNumberCodingChallenge.java",
        "fileName": "PerfectNumberCodingChallenge.java",
        "topicName": "Perfect Number Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "generated",
            "lines": [
              "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
              "Review the class PerfectNumberCodingChallenge and understand its key responsibilities.",
              "This example defines 2 methods; trace method behavior step by step.",
              "Run through the main method flow to understand execution order and output."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\npublic class PerfectNumberCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(isPerfectNumber(6));\r\n    }\r\n\r\n    public static boolean isPerfectNumber(int number){\r\n\r\n        if(number <= 0){\r\n            return false;\r\n        }\r\n\r\n        int sum = 0;\r\n\r\n        int i = 1;\r\n\r\n        while (i < number){\r\n\r\n            if(number % i == 0){\r\n                sum = sum + i;\r\n            }\r\n\r\n            i++;\r\n\r\n        }\r\n\r\n        if(sum == number){\r\n            return true;\r\n        }else\r\n        return false;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/SharedDigitCodingChallenge.java",
        "fileName": "SharedDigitCodingChallenge.java",
        "topicName": "Shared Digit Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Shared Digit",
              "Write a method named hasSharedDigit with two parameters of type int.",
              "Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.",
              "The method should return true if there is a digit that appears in both numbers, such as 2 in 12 and 23; otherwise, the method should return false.",
              "EXAMPLE INPUT/OUTPUT:",
              "hasSharedDigit(12, 23); → should return true since the digit 2 appears in both numbers hasSharedDigit(9, 99); → should return false since 9 is not within the range of 10-99 hasSharedDigit(15, 55); → should return true since the digit 5 appears in both numbers"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n*\r\n* Shared Digit\r\n*\r\n*\r\nWrite a method named hasSharedDigit with two parameters of type int.\r\n\r\nEach number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.\r\n\r\nThe method should return true if there is a digit that appears in both numbers, such as 2 in 12 and 23; otherwise, the method should return false.\r\n\r\n\r\n\r\nEXAMPLE INPUT/OUTPUT:\r\n\r\nhasSharedDigit(12, 23); → should return true since the digit 2 appears in both numbers\r\n\r\nhasSharedDigit(9, 99); → should return false since 9 is not within the range of 10-99\r\n\r\nhasSharedDigit(15, 55); → should return true since the digit 5 appears in both numbers\r\n*\r\n*\r\n*\r\n* */\r\n\r\npublic class SharedDigitCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(hasSharedDigit(12,23));\r\n\r\n\r\n    }\r\n\r\n    public static boolean hasSharedDigit(int number1, int number2){\r\n\r\n        boolean checkIfHasSharedDigit = false;\r\n\r\n        if(((number1 >= 10) && (number1 <= 99)) && ((number2 >= 10) && (number2 <= 99))){\r\n\r\n            while(number1 !=0 ){\r\n\r\n                int numberToBeCompared = number2;\r\n\r\n                int remainder1 = number1 % 10;\r\n\r\n                while (numberToBeCompared !=0){\r\n\r\n                    int remainder2 = numberToBeCompared % 10;\r\n\r\n                    if(remainder1 == remainder2){\r\n                        checkIfHasSharedDigit = true;\r\n                        break;\r\n                    }else{\r\n\r\n                        numberToBeCompared = numberToBeCompared / 10;\r\n                    }\r\n                }\r\n\r\n                if(checkIfHasSharedDigit){\r\n                    break;\r\n                }else{\r\n                    number1 = number1 / 10;\r\n                }\r\n\r\n            }\r\n\r\n        }\r\n\r\n        return checkIfHasSharedDigit;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/WhileLoopCodingChallenge.java",
        "fileName": "WhileLoopCodingChallenge.java",
        "topicName": "While Loop Coding Challenge",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
              "The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not.",
              "If it's an even number, return true, otherwise, return false."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "CODING CHALLENGE — While Loop Basics",
              "This challenge practices: writing a boolean-returning helper method, using a while loop with a counter, and using continue to skip iterations."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n// CODING CHALLENGE — While Loop Basics\n// This challenge practices: writing a boolean-returning helper method, using a while loop with a counter, and using continue to skip iterations.\r\n/*\r\n* Create a method called\r\n\r\n  isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed\r\n\r\n  to the method is an even number or not. Return true from the method if it's an\r\n\r\n  even number; otherwise, return false. Next, use a while loop to test a range\r\n\r\n  of numbers from 5 up to and including 20, but printing out only the even numbers determined\r\n\r\n  by the call to the isEvenNumber method. Okay, so the challenge is to create a\r\n\r\n  method called isEvenNumber, and it takes a parameter of type int.\r\n\r\n The purpose of the method is to determine whether the argument that's been\r\n\r\n passed to the method, the int, in other words, is an even number or not.\r\n\r\n If it's an even number, return true, otherwise, return false.\r\n*\r\n*\r\n* */\r\n\r\n\r\n\r\npublic class WhileLoopCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int startingNumberRange = 5;\r\n\r\n        int endNumberRange = 20;\r\n        \r\n        int countOfEvenNumbers = 0;\r\n\r\n\r\n        while(startingNumberRange  <= endNumberRange) {\r\n            startingNumberRange++;\r\n            if(!isEvenNumber(startingNumberRange)){\r\n               continue;\r\n            }\r\n            System.out.print(startingNumberRange + \" \");\r\n            countOfEvenNumbers++;\r\n            if(countOfEvenNumbers >= 5){\r\n                break;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    public static boolean isEvenNumber(int number){\r\n\r\n        boolean isNumberEven;\r\n\r\n       if(number > 0 && number % 2 == 0){\r\n           isNumberEven = true;\r\n       }else {\r\n           isNumberEven = false;\r\n       }\r\n\r\n       return isNumberEven;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_10_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/WhileLoopCodingChallengePart2.java",
        "fileName": "WhileLoopCodingChallengePart2.java",
        "topicName": "While Loop Coding Challenge Part2",
        "chapter": "Chapter 10: While And Do While Looping Concepts",
        "subChapter": "While Do While Loop Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;\r\n\r\n/*\r\n* Step 2 is to modify the while code. Make it also record the total number of\r\n\r\neven numbers it has found. Break out of the loop\r\n\r\nonce 5 even numbers are found. Finally, display the total number\r\n\r\nof odd and even numbers found. Alright, so the challenge is\r\n\r\nto modify the while code above. So, you want to leave the existing\r\n\r\nfunctionality as it is, but make it so it also records the total number of even numbers,\r\n\r\nas well as odd numbers that it's found. And once five even numbers have been found,\r\n\r\nbreak out of the code and display the total number of even numbers,\r\n*\r\n*\r\n* */\r\n\r\npublic class WhileLoopCodingChallengePart2 {\r\n\r\n    public static void main(String[] args) {\r\n\r\n\r\n        int startingNumberRange = 5;\r\n\r\n        int endNumberRange = 20;\r\n\r\n        int totalEvenNumbersFound = 0;\r\n\r\n        while(startingNumberRange <= endNumberRange){\r\n\r\n            if (totalEvenNumbersFound >= 5){\r\n                break;\r\n            }\r\n\r\n            if(isEvenNumber(startingNumberRange)){\r\n               totalEvenNumbersFound++;\r\n                System.out.print(startingNumberRange + \" \");\r\n\r\n            }\r\n            startingNumberRange++;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    public static boolean isEvenNumber(int number){\r\n\r\n        boolean isNumberEven;\r\n\r\n        if(number > 0 && number % 2 == 0){\r\n            isNumberEven = true;\r\n        }else {\r\n            isNumberEven = false;\r\n        }\r\n\r\n        return isNumberEven;\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 11: Class Object Static And Instance Fields",
    "topics": [
      {
        "filePath": "src/Chapter_11_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java",
        "fileName": "ClassExample.java",
        "topicName": "Class Example",
        "chapter": "Chapter 11: Class Object Static And Instance Fields",
        "subChapter": "Class",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "A class can be described as :-",
              "1) A custom data type --> For Ex :- String",
              "2) A special code block that contains methods",
              "A class is like an empty form that gets copied and handed out.",
              "For Example :- A form containing fields like Name and Address can be considered as an example of Class",
              "A class is like an empty form. It describes information or placeholders for data that'll be filled in, when that form is given to a unique individual.",
              "The empty form, the class is the template for the data to be collected",
              "The class provides a shape or framework that describes the object being created",
              "The process of copying that empty form and then delivering it to some process or person to fill in the blanks is a loose analogy to what happens when you create an object.",
              "Multiple copies of form can be considered as an example of object creation from the class.",
              "An object, is like the form, once it's been handed out and filled in.",
              "If the class has a field for name, then the object will have a value in the name field, which will be unique to the object. If the class has a field for address, then the object will have a value for the address field, and so on.",
              "The populated form, the object may be completely different each time because of the values used to fill in the data.",
              "The data being collected each time is determined by the class or the form, in this analogy.",
              "An object is called an instance of a particular class.",
              "Creation of the object can be called as instantiation or instantiating a class",
              "Object and instance can be used interchangeably",
              "There is no limit on number of object one can create from a class",
              "The most common way to create an object is to use the new keyword.",
              "The new keyword creates an instance of a class, and you can optionally pass data when creating that instance to set up data on that object.",
              "The new keyword is used in what Java calls a Class Instance Creation Expression.",
              "In its simplest form, it's the word new, followed by class name, and empty parenthesis",
              "We can optionally pass arguments in those parentheses, as we saw with methods."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "A CLASS is the most fundamental building block of Object-Oriented Programming (OOP) in Java.",
              "A class is a blueprint or template that defines: (1) what data (fields/attributes) an object will hold, and (2) what behaviour (methods) it will have.",
              "Think of a class like a blank form template — it defines what fields exist. An OBJECT is a filled-in copy of that form.",
              "Creating an object from a class is called instantiation. Each object is an instance of its class.",
              "A class can describe a real-world concept: a Car class has fields like colour, make, model; a Person class has name, age, etc.",
              "Objects are created using the 'new' keyword: ClassName obj = new ClassName();",
              "Each object has its own copy of the class's instance fields, so different objects can have different values.",
              "There is no limit on how many objects you can create from a single class."
            ]
          }
        ],
        "inlineComments": [
          "We can create String using 2 ways",
          "1) Literal form",
          "2) Using new keyword"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_11_Class_Object_Static_And_Instance_Fields.Sub_Chapter_1_Class;\r\n// A CLASS is the most fundamental building block of Object-Oriented Programming (OOP) in Java.\n// A class is a blueprint or template that defines: (1) what data (fields/attributes) an object will hold, and (2) what behaviour (methods) it will have.\n// Think of a class like a blank form template — it defines what fields exist. An OBJECT is a filled-in copy of that form.\n// Creating an object from a class is called instantiation. Each object is an instance of its class.\n// A class can describe a real-world concept: a Car class has fields like colour, make, model; a Person class has name, age, etc.\n// Objects are created using the 'new' keyword: ClassName obj = new ClassName();\n// Each object has its own copy of the class's instance fields, so different objects can have different values.\n// There is no limit on how many objects you can create from a single class.\r\n/*\r\n*   A class can be described as :-\r\n*\r\n*   1) A custom data type --> For Ex :- String\r\n*   2) A special code block that contains methods\r\n*\r\n*\r\n*    A class is like an empty form that gets copied and handed out.\r\n*    For Example :- A form containing fields like Name and Address can be considered as an example of Class\r\n*\r\n*    A class is like an empty form. It describes information or placeholders for data that'll be filled in,\r\n*    when that form is given to a unique individual.\r\n*    The empty form, the class is the template for the data to be collected\r\n*    The class provides a shape or framework that describes the object being created\r\n*\r\n*    The process of copying that empty form and then delivering it to some process or person\r\n*    to fill in the blanks is a loose analogy to what happens when you create an object.\r\n*    Multiple copies of form can be considered as an example of object creation from the class.\r\n*\r\n*    An object, is like the form, once it's been handed out and filled in.\r\n*    If the class has a field for name, then the object will have a value in the name field,\r\n*    which will be unique to the object. If the class has a field for address,\r\n*    then the object will have a value for the address field, and so on.\r\n*\r\n*    The populated form, the object may be completely different each time\r\n*    because of the values used to fill in the data.\r\n*    The data being collected each time is determined by the class or the form, in this analogy.\r\n*\r\n*    An object is called an instance of a particular class.\r\n*    Creation of the object can be called as instantiation or instantiating a class\r\n*    Object and instance can be used interchangeably\r\n*    There is no limit on number of object one can create from a class\r\n*\r\n*    The most common way to create an object is to use the new keyword.\r\n*    The new keyword creates an instance of a class,\r\n*    and you can optionally pass data when creating that instance to set up data on that object.\r\n*\r\n*    The new keyword is used in what Java calls a Class Instance Creation Expression.\r\n*    In its simplest form, it's the word new, followed by class name, and empty parenthesis\r\n*\r\n*    ClassName variableName = new ClassName();\r\n*\r\n*    We can optionally pass arguments in those parentheses, as we saw with methods.\r\n*\r\n*    ClassName variableName = new ClassName(argument1, argument2);\r\n*\r\n*\r\n*\r\n* */\r\n\r\n\r\n\r\n\r\npublic class ClassExample {\r\n\r\n    public static void main(String[] args) {\r\n        //  We can create String using 2 ways\r\n\r\n         // 1) Literal form\r\n\r\n           String s = \"Hello\";  // s is a local variable on which the objects memory location also known as reference is assigned.\r\n\r\n        //  2) Using new keyword\r\n\r\n        String value = new String(\"Hello\"); // When we create an object, we can pass initial data to be associated with it in parentheses.\r\n\r\n\r\n\r\n\r\n\r\n    }\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_11_Class_Object_Static_And_Instance_Fields/Sub_Chapter_2_Create_Field_On_Classes/CreateFieldOnClasses.java",
        "fileName": "CreateFieldOnClasses.java",
        "topicName": "Create Field On Classes",
        "chapter": "Chapter 11: Class Object Static And Instance Fields",
        "subChapter": "Create Field On Classes",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "There are 2 ways to create fields on classes.",
              "1) With static keyword",
              "2) Without static keyword",
              "Static  Field :-",
              "i) Requires 'static' keyword when declared on the class ii) It is used for value of the field that aren't changing constantly and remains constant.",
              "It is stored in special memory location and only in one place.",
              "Value of the field always stays with the class iii) Value is accessed by ClassName.fieldname",
              "Ex :- Integer.MAX_VALUE",
              "Instance Field :-",
              "i) Omits 'static' keyword when declared on the class ii) Value of the field is not allocated any memory and has no value until the object is created.",
              "The instance fields can have different values for every instance created.",
              "iii) Value is accessed by ObjectVariable.fieldname",
              "Ex :- myObject.myFieldName",
              "(myObject is a variable name for the object created and myFieldName is an attribute on the class)",
              "Static Method :-",
              "i) Requires 'static' keyword when declared on the class ii) Method is accessible by ClassName.methodName",
              "Instance Method i) Omits 'static' keyword when declared on the class ii) Method is accessed by ObjectVariable.methodName"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Java classes have two types of fields (variables declared at the class level, outside any method):",
              "STATIC FIELDS: declared with 'static'. There is exactly ONE copy in memory, shared by ALL objects of that class. Accessed via ClassName.fieldName.",
              "INSTANCE FIELDS: declared without 'static'. Each object gets its OWN separate copy. Accessed via objectVariable.fieldName.",
              "The same distinction applies to methods: static methods belong to the class; instance methods belong to individual objects.",
              "Static field example: Integer.MAX_VALUE — you access this without creating an Integer object.",
              "Instance field example: String greet = \"hello\"; greet.toUpperCase() — you call toUpperCase() on the specific greet object.",
              "Rule: a static method CANNOT directly access instance (non-static) fields or call instance methods — because static methods run without an object, so there is no 'this' to refer to.",
              "Instance methods CAN access both static and instance fields/methods freely."
            ]
          }
        ],
        "inlineComments": [
          "createFieldOnClass.hello is an example of instance field",
          "CreateFieldOnClasses.name is an example of static field"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_11_Class_Object_Static_And_Instance_Fields.Sub_Chapter_2_Create_Field_On_Classes;\r\n// Java classes have two types of fields (variables declared at the class level, outside any method):\n// STATIC FIELDS: declared with 'static'. There is exactly ONE copy in memory, shared by ALL objects of that class. Accessed via ClassName.fieldName.\n// INSTANCE FIELDS: declared without 'static'. Each object gets its OWN separate copy. Accessed via objectVariable.fieldName.\n// The same distinction applies to methods: static methods belong to the class; instance methods belong to individual objects.\n// Static field example: Integer.MAX_VALUE — you access this without creating an Integer object.\n// Instance field example: String greet = \"hello\"; greet.toUpperCase() — you call toUpperCase() on the specific greet object.\n// Rule: a static method CANNOT directly access instance (non-static) fields or call instance methods — because static methods run without an object, so there is no 'this' to refer to.\n// Instance methods CAN access both static and instance fields/methods freely.\r\n/*\r\n*   There are 2 ways to create fields on classes.\r\n*\r\n*   1) With static keyword\r\n*\r\n*   2) Without static keyword\r\n*\r\n*   Static  Field :-\r\n*\r\n*  i) Requires 'static' keyword when declared on the class\r\n*\r\n*  ii) It is used for value of the field that aren't changing constantly and remains constant.\r\n*      It is stored in special memory location and only in one place.\r\n*      Value of the field always stays with the class\r\n*\r\n*\r\n*  iii) Value is accessed by ClassName.fieldname\r\n*     Ex :- Integer.MAX_VALUE\r\n*\r\n*  Instance Field :-\r\n*\r\n*   i) Omits 'static' keyword when declared on the class\r\n*\r\n*   ii) Value of the field is not allocated any memory and has no value until the object is created.\r\n*       The instance fields can have different values for every instance created.\r\n*\r\n*   iii) Value is accessed by ObjectVariable.fieldname\r\n*     Ex :- myObject.myFieldName\r\n*     (myObject is a variable name for the object created and myFieldName is an attribute on the class)\r\n*\r\n*   Static Method :-\r\n*\r\n*    i) Requires 'static' keyword when declared on the class\r\n*\r\n*    ii) Method is accessible by ClassName.methodName\r\n*\r\n*    Example :- Integer.parseInt(\"123\"); // A method called parseInt is called directly from the Class, Integer\r\n*\r\n*     Instance Method\r\n*\r\n*     i) Omits 'static' keyword when declared on the class\r\n*\r\n*     ii) Method is accessed by ObjectVariable.methodName\r\n*\r\n*     Example :- String greet = \"hello\";\r\n*\r\n*     System.out.println(greet.toUpperCase()); // A method called toUpperCase is called on the instance of String with value \"hello\"\r\n*\r\n*\r\n* */\r\n\r\npublic class CreateFieldOnClasses {\r\n\r\n    static String name = \"Navneet\" ;\r\n\r\n    String hello = \"Hello\";\r\n\r\n    public static void main(String[] args) {\r\n\r\n        CreateFieldOnClasses createFieldOnClasses = new CreateFieldOnClasses();\r\n\r\n        // createFieldOnClass.hello is an example of instance field\r\n\r\n        // CreateFieldOnClasses.name is an example of static field\r\n        System.out.println(createFieldOnClasses.hello + \" \" + CreateFieldOnClasses.name);\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 12: Parsing Values Reading Input",
    "topics": [
      {
        "filePath": "src/Chapter_12_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java",
        "fileName": "ParsingValuesReadingInput.java",
        "topicName": "Parsing Values Reading Input",
        "chapter": "Chapter 12: Parsing Values Reading Input",
        "subChapter": "Parsing Values And Reading Input",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
              "Reading Data From Console",
              "Technique              | Description",
              "System.in              | Like System.out, Java provides System.in which can read input from the console or terminal.",
              "System.console         | This is Java's solution for easier support for reading a single line and prompting user for information",
              "Command Line Arguments | This is calling the Java program and specifying data in the call",
              "Scanner                | The scanner class was built to be a common way to read input either using System.in or a file."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "When you read data from the user (keyboard input) or from a file, it arrives as a String. But you often need to use it as a number.",
              "You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.",
              "You also cannot use + for addition on Strings — \"100\" + \"50\" = \"10050\" (concatenation, not addition).",
              "To convert a String to a number, use the wrapper class's parse method:",
              "Integer.parseInt(\"42\")  -> int 42",
              "Double.parseDouble(\"3.14\") -> double 3.14",
              "Long.parseLong(\"1000000\") -> long 1000000",
              "If the String cannot be parsed (e.g., \"abc\"), a NumberFormatException is thrown at runtime.",
              "The Scanner class (java.util.Scanner) is the standard way to read keyboard input in Java.",
              "To use Scanner: import java.util.Scanner;   Scanner sc = new Scanner(System.in);",
              "Then call sc.nextLine() to read a whole line, sc.nextInt() for an int, sc.nextDouble() for a double, etc.",
              "Always close the Scanner when done: sc.close(); (or use try-with-resources).",
              "The import statement lets you use classes defined in Java's standard library or other packages.",
              "In this case, Java provides a library of code, which includes the Scanner class in a library called java.util."
            ]
          }
        ],
        "inlineComments": [
          "The above code will give error as both the data type is in String java: bad operand types for binary operator '-' first type:  java.lang.String second type: java.lang.String",
          "Integer is a class. It has a static method called parseInt that takes a String, and return a value of dataType int.",
          "To access static method, we use the className.static method name. Integer = classMame & parseInt is the static method",
          "Double is a class. It has a static method called parseDouble that takes a String, and return a value of dataType",
          "To access static method. we use the className.static method name. Double = className & parseDouble is the static method",
          "This function checks if the date of birth entered through user input is valid or not.",
          "It returns a boolean value of false, if the date of birth entered is not within the range mentioned in the if condition logic and vice versa",
          "If the birth year is not within the required condition the code returns a boolean value of false and vice versa",
          "and if the user input is not within the proper range, the code continues to execute till the time the correct year of birth within the prescribed year range is entered by the user.",
          "they might enter characters in place of numbers which might lead to NumberFormat Exception hence, the code is wrapped around a try catch block, where the code logic that might create problem is written inside try code block.",
          "so the do while loop continues to execute until the user enters the correct year of birth value within the desired year range",
          "If the user enters the correct date of birth as per the format and range, the checkDOBValidity boolean value is evaluated to true, and the while loop will terminate as while condition will evaluate to false as we have used not check",
          "Similarly,if the checkDOBValidity boolean value is evaluated to false,the loop will continue to execute, as the while condition will evaluate to true because of not condition"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_1_Parsing_Values_And_Reading_input;\r\n// When you read data from the user (keyboard input) or from a file, it arrives as a String. But you often need to use it as a number.\n// You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.\n// You also cannot use + for addition on Strings — \"100\" + \"50\" = \"10050\" (concatenation, not addition).\n// To convert a String to a number, use the wrapper class's parse method:\n//   Integer.parseInt(\"42\")  -> int 42\n//   Double.parseDouble(\"3.14\") -> double 3.14\n//   Long.parseLong(\"1000000\") -> long 1000000\n// If the String cannot be parsed (e.g., \"abc\"), a NumberFormatException is thrown at runtime.\n// The Scanner class (java.util.Scanner) is the standard way to read keyboard input in Java.\n// To use Scanner: import java.util.Scanner;   Scanner sc = new Scanner(System.in);\n// Then call sc.nextLine() to read a whole line, sc.nextInt() for an int, sc.nextDouble() for a double, etc.\n// Always close the Scanner when done: sc.close(); (or use try-with-resources).\n// The import statement lets you use classes defined in Java's standard library or other packages.\r\n/*\r\n*  When we read data in from either a file or from user input, it's common for the data\r\n*  to be initially stored as a String, which we'll need to convert to a numeric value.\r\n*\r\n*  Reading Data From Console\r\n*\r\n*  Technique              | Description\r\n*\r\n*  System.in              | Like System.out, Java provides System.in which can read input from the console or terminal.\r\n*  System.console         | This is Java's solution for easier support for reading a single line and prompting user for information\r\n*  Command Line Arguments | This is calling the Java program and specifying data in the call\r\n*  Scanner                | The scanner class was built to be a common way to read input either using System.in or a file.\r\n*\r\n* */\r\n\r\nimport java.util.Scanner; // the import statement lets us use classes from other people's code.\r\n                           // In this case, Java provides a library of code,\r\n                           // which includes the Scanner class in a library called java.util.\r\n\r\n\r\npublic class ParsingValuesReadingInput {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        String currentYear = \"2024\";\r\n\r\n        String userDateOfBirth = \"1999\";\r\n\r\n        // System.out.println(\"Age = \" + (currentYear - userDateOfBirth));\r\n\r\n        // The above code will give error as both the data type is in String\r\n        // java: bad operand types for binary operator '-'\r\n        //  first type:  java.lang.String\r\n        //  second type: java.lang.String\r\n\r\n        // System.out.println(\"Age = \" + (currentYear + userDateOfBirth));\r\n\r\n        /* The above code will compile, and since currentYear and userDateOfBirth\r\n            is of type String, both the strings will be concatenated together.\r\n        */\r\n\r\n\r\n        /*  To pass and transform Strings into numeric values. we have to convert String into Wrapper method\r\n\r\n            Wrapper |  Wrapper Method\r\n            Integer |  parseInt(String)\r\n            Double  |  parseDouble(String)\r\n        *\r\n        * */\r\n\r\n        int currentYearOfBirth = Integer.parseInt(currentYear);\r\n        int dateOfBirth = Integer.parseInt(userDateOfBirth);\r\n\r\n      //  System.out.println(\"The age is \" + (currentYearOfBirth - dateOfBirth));\r\n\r\n        // Integer is a class. It has a static method called parseInt that takes a String, and return a value of dataType int.\r\n        // To access static method, we use the className.static method name. Integer = classMame & parseInt is the static method\r\n\r\n        String userAgeWithPartialYear = \"22.5\";\r\n        double ageWithPartialYear = Double.parseDouble(userAgeWithPartialYear);\r\n\r\n        // Double is a class. It has a static method called parseDouble that takes a String, and return a value of dataType\r\n        // To access static method. we use the className.static method name. Double = className & parseDouble is the static method\r\n\r\n      //  System.out.println(\"The partial age is \" + ageWithPartialYear);\r\n\r\n    //    System.out.println(getInputFromConsole(currentYearOfBirth));\r\n\r\n        System.out.println(getInputFromScanner(2024));\r\n\r\n\r\n    }\r\n\r\n    public static String getInputFromConsole(int currentYear) {\r\n\r\n        /*\r\n        * To run java code from console in Intellij, we need to go to terminal, then\r\n        * change directory using cd to the java class\r\n        * cd src\r\n        * cd Chapter_12_Parsing_Values_Reading_Input\r\n        *\r\n        * and then run Java program using\r\n        * java ParsingValuesReadingInput.java\r\n        *\r\n        * */\r\n\r\n        String name = System.console().readLine(\"Hi, What's your name? \");\r\n        System.out.println(\"Hi \" + name + \", Nice to meet you!\");\r\n\r\n        String yearOfBirth = System.console().readLine(\"What's your year of birth? \");\r\n\r\n        int age = currentYear - Integer.parseInt(yearOfBirth);\r\n\r\n        return name + \"'s\" + \" age is \" + age;\r\n    }\r\n\r\n\r\n    /*\r\n    *\r\n    * The scanner class is described as a simple text scanner which can parse primitive types and strings\r\n    *  To use the Scanner class, we have to create an instance / object of type Scanner using keyword new\r\n    *\r\n    * Reading input from console -->\r\n    *\r\n    * For reading input from the console or terminal, we instantiate a scanner object using new,\r\n    * followed by the Scanner class name, and passing System.in, as an argument, in the parentheses\r\n    *\r\n    * Scanner sc = new Scanner(System.in);\r\n    *\r\n    * For reading input from a file, we instantiate a scanner object using new,\r\n    * again with the Scanner class name, but pass a File object, as an argument, in the parentheses.\r\n    *\r\n    * File is another class provided by Java, for reading and writing files.\r\n    *\r\n    * Scanner sc = new Scanner(new File(\"nameOfFileOnFileSystem\")); // Since, we want to read file we create object of file using new keyword\r\n    * */\r\n\r\n\r\n\r\n/*    public static String getInputFromScanner(int currentYear){\r\n\r\n        Scanner sc = new Scanner(System.in);\r\n\r\n        System.out.println(\"Hi, What's your name? \");\r\n\r\n        String name = sc.nextLine(); // sc is the local variable of type Scanner class on which the instance methods can be executed\r\n\r\n        System.out.println(\"Hi \" + name + \", Nice to meet you!\");\r\n\r\n        System.out.println(\"What is your year of Birth ?\");\r\n\r\n        String yearOfBirth = sc.nextLine();\r\n\r\n        int age = currentYear - Integer.parseInt(yearOfBirth);\r\n\r\n        return name + \"'s\" + \" Age is \" + age;\r\n    }*/\r\n\r\n\r\n    // This function checks if the date of birth entered through user input is valid or not.\r\n    // It returns a boolean value of false, if the date of birth entered is not within the range mentioned in the if condition logic and vice versa\r\n\r\n    public static boolean checkValidDOB(int currentYear, String yearOfBirth){\r\n\r\n        int birthYear = Integer.parseInt(yearOfBirth); // The yearOfBirth entered in the form of String is converted into int usingInteger.parseInt method\r\n\r\n        if((birthYear < 1895) || (birthYear > currentYear)){ // The if condition checks for the condition that the year of Birth entered is well within the range of required parameters\r\n                                                             //  If the birth year is not within the required condition the code returns a boolean value of false and vice versa\r\n\r\n            System.out.println(\"Enter the year of birth greater than 1895 and less than or equal to current year\");\r\n\r\n            return false;\r\n\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    public static String getInputFromScanner(int currentYear){\r\n\r\n        Scanner sc = new Scanner(System.in);\r\n\r\n        System.out.println(\"Hi, What's your name? \");\r\n\r\n        String name = sc.nextLine(); // sc is the local variable of type Scanner class on which the instance methods can be executed\r\n\r\n        System.out.println(\"Hi \" + name + \", Nice to meet you!\");\r\n\r\n        boolean checkDOBValidity; // A boolean variable checkDOBValidity is created on which the value returned from checkValidDOB(currentYear, yearOfBirth)\r\n\r\n        String yearOfBirth = \"\";\r\n\r\n        do { // The idea of putting the logic to get the user input of year of birth inside do while block is to make sure that the code executes at least one time,\r\n             // and if the user input is not within the proper range, the code continues to execute till the time the correct year of birth\r\n             // within the prescribed year range is entered by the user.\r\n\r\n\r\n            System.out.println(\"What is your year of Birth ?\");\r\n\r\n            try {  // There could be a possibility that the user might not enter the correct year of Birth,\r\n                   // they might enter characters in place of numbers which might lead to NumberFormat Exception\r\n                   // hence, the code is wrapped around a try catch block, where the code logic that might create problem\r\n                   // is written inside try code block.\r\n                yearOfBirth = sc.nextLine();\r\n\r\n                checkDOBValidity = checkValidDOB(currentYear, yearOfBirth); // The boolean return value of checkValidDOB(currentYear, yearOfBirth) is assigned to checkDOBValidity variable of type boolean\r\n            }catch (NumberFormatException e){ // The catch block accepts the parameter of the type exception, which the code might throw, in this case, it's NumberFormatException\r\n                System.out.println(\"You have entered characters in year of birth, please enter the correct details\");\r\n                checkDOBValidity = false; // Since, the user definitely have entered the wrong year of birth, that's why the exception got caught, we are setting the checkDOBValidity value back to false,\r\n                                          // so the do while loop continues to execute until the user enters the correct year of birth value within the desired year range\r\n            }\r\n\r\n        }while(!checkDOBValidity); // On the basis of boolean value of checkDOBValidity, the do while loop might continue to execute or terminate\r\n                                   // If the user enters the correct date of birth as per the format and range, the checkDOBValidity boolean value\r\n                                   // is evaluated to true, and the while loop will terminate as while condition will evaluate to false as we have used not check\r\n                                   // Similarly,if the checkDOBValidity boolean value is evaluated to false,the loop will continue to execute, as the while condition\r\n                                   // will evaluate to true because of not condition\r\n\r\n        int age = currentYear - Integer.parseInt(yearOfBirth); \r\n\r\n        return name + \"'s\" + \" Age is \" + age;\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_12_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/InputCalculatorChallenge.java",
        "fileName": "InputCalculatorChallenge.java",
        "topicName": "Input Calculator Challenge",
        "chapter": "Chapter 12: Parsing Values Reading Input",
        "subChapter": "Parsing Values Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Input Calculator",
              "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
              "The method should not return anything (void) and it needs to keep reading int numbers from the keyboard.",
              "When the user enters something that is not an int then it needs to print a message in the format \"SUM = XX AVG = YY\".",
              "XX represents the sum of all entered numbers of type int.",
              "YY represents the calculated average of all numbers of type long.",
              "EXAMPLES OF INPUT/OUTPUT:",
              "EXAMPLE 1:",
              "INPUT:",
              "OUTPUT",
              "SUM = 15 AVG = 3",
              "EXAMPLE 2:",
              "INPUT:",
              "hello",
              "OUTPUT:",
              "SUM = 0 AVG = 0",
              "TIP: Use Scanner to read an input from the user.",
              "TIP: Use casting when calling the round method since it needs double as a parameter.",
              "NOTE: Use the method Math.round to round the calculated average (double). The method round returns long.",
              "NOTE: Be mindful of spaces in the printed message.",
              "NOTE: Be mindful of users who may type an invalid input right away (see example above).",
              "NOTE: The method inputThenPrintSumAndAverage should be defined as public static like we have been doing so far in the course."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;\r\n\r\n/*\r\n* Input Calculator\r\nWrite a method called inputThenPrintSumAndAverage that does not have any parameters.\r\n\r\nThe method should not return anything (void) and it needs to keep reading int numbers from the keyboard.\r\n\r\nWhen the user enters something that is not an int then it needs to print a message in the format \"SUM = XX AVG = YY\".\r\n\r\nXX represents the sum of all entered numbers of type int.\r\nYY represents the calculated average of all numbers of type long.\r\n\r\nEXAMPLES OF INPUT/OUTPUT:\r\n\r\nEXAMPLE 1:\r\n\r\nINPUT:\r\n\r\n1\r\n2\r\n3\r\n4\r\n5\r\na\r\nOUTPUT\r\n\r\nSUM = 15 AVG = 3\r\n\r\n\r\n\r\nEXAMPLE 2:\r\n\r\nINPUT:\r\n\r\nhello\r\n\r\nOUTPUT:\r\n\r\nSUM = 0 AVG = 0\r\n\r\nTIP: Use Scanner to read an input from the user.\r\n\r\nTIP: Use casting when calling the round method since it needs double as a parameter.\r\n\r\nNOTE: Use the method Math.round to round the calculated average (double). The method round returns long.\r\n\r\nNOTE: Be mindful of spaces in the printed message.\r\n\r\nNOTE: Be mindful of users who may type an invalid input right away (see example above).\r\n\r\nNOTE: The method inputThenPrintSumAndAverage should be defined as public static like we have been doing so far in the course.\r\n*\r\n*\r\n*\r\n*\r\n* */\r\n\r\nimport java.util.*;\r\n\r\npublic class InputCalculatorChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n\r\n        inputThenPrintSumAndAverage();\r\n    }\r\n        public static void inputThenPrintSumAndAverage(){\r\n\r\n            Scanner sc = new Scanner(System.in);\r\n\r\n            int counter = 0;\r\n\r\n            int sum = 0;\r\n\r\n            long average = 0;\r\n\r\n            String userInput;\r\n\r\n            int userEnteredNumber = 0;\r\n\r\n            while(true){\r\n\r\n                try{\r\n\r\n                    userInput = sc.nextLine();\r\n\r\n                    userEnteredNumber = Integer.parseInt(userInput);\r\n\r\n                }catch(NumberFormatException e){\r\n\r\n                    if(counter == 0){\r\n                        sum = 0;\r\n                        average = 0;\r\n\r\n                    }\r\n                    break;\r\n\r\n                }\r\n\r\n                counter++;\r\n\r\n                sum = sum + userEnteredNumber;\r\n\r\n                average = Math.round((double) sum / counter);\r\n\r\n\r\n\r\n            }\r\n\r\n            System.out.println(\"SUM = \" + sum + \" AVG = \" + average);\r\n\r\n    }\r\n}\r\n\r\n"
      },
      {
        "filePath": "src/Chapter_12_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/MinMaxCodingChallenge.java",
        "fileName": "MinMaxCodingChallenge.java",
        "topicName": "Min Max Coding Challenge",
        "chapter": "Chapter 12: Parsing Values Reading Input",
        "subChapter": "Parsing Values Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
              "If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number.",
              "You can decide if you want the user to enter integers or decimal numbers.",
              "If the user entered a valid number, you'll want to see if it is less than what you have for a minimum number, and if it is, you'll set that to the current number.",
              "You'll do the same check for maximum number. For example, after one valid numeric entry, minimum and maximum numbers should be the same number."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;\r\n\r\n/*\r\n* You'll be using an endless loop which: Prompts the user to enter a number or any\r\n\r\ncharacter to quit. Validates if the user-entered data really is a number. You can choose either\r\n\r\nan integer or double validation method. If the user-entered data is not a number,\r\n\r\nquit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.\r\n\r\nIf the user has previously entered a set of numbers (or even just one), display the\r\n\r\nminimum and maximum number that the user entered. So, you'll want to create a loop that continues to\r\n\r\nprocess until the user enters non-numeric data. You'll prompt the user to enter a number or type\r\n\r\na character to quit each iteration. After the user enters some data,\r\n\r\nyou'll read the input as a string, and then test if it can be parsed to a number.\r\n\r\nYou can decide if you want the user to enter integers or decimal numbers.\r\n\r\nIf the user entered a valid number, you'll want to see if it is less than what you\r\n\r\nhave for a minimum number, and if it is, you'll set that to the current number.\r\n\r\nYou'll do the same check for maximum number. For example, after one valid numeric entry,\r\n\r\nminimum and maximum numbers should be the same number.\r\n*\r\n*\r\n* */\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class MinMaxCodingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        printMinAndMaxFromUserInputs();\r\n    }\r\n\r\n    public static void printMinAndMaxFromUserInputs(){\r\n\r\n        Scanner sc = new Scanner(System.in);\r\n\r\n        int minNumber = 0;\r\n\r\n        int maxNumber = 0;\r\n\r\n        int counter = 0;\r\n\r\n        while (true){\r\n\r\n            System.out.println(\"Enter any number of your choice. To quit, press any character\");\r\n\r\n            String userInput = sc.nextLine();\r\n\r\n            if(!checkIfUserInputIsNumber(userInput)){\r\n                break;\r\n            }\r\n\r\n            int userDefinedNumber = Integer.parseInt(userInput);\r\n\r\n            if((userDefinedNumber < minNumber) || (counter == 0)){\r\n                minNumber = userDefinedNumber;\r\n            }\r\n\r\n             if(userDefinedNumber > maxNumber || (counter == 0)){\r\n                 maxNumber = userDefinedNumber;\r\n             }\r\n\r\n             counter++;\r\n        }\r\n\r\n        System.out.println(\"Min number is \" + minNumber + \" and Max number is \" + maxNumber);\r\n\r\n    }\r\n\r\n    public static boolean checkIfUserInputIsNumber(String userInput){\r\n\r\n        boolean isNumber = true;\r\n\r\n        try{\r\n            Integer.parseInt(userInput);\r\n        }catch (NumberFormatException e){\r\n            isNumber = false;\r\n        }\r\n        return isNumber;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_12_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/PaintJobChallenge.java",
        "fileName": "PaintJobChallenge.java",
        "topicName": "Paint Job Challenge",
        "chapter": "Chapter 12: Parsing Values Reading Input",
        "subChapter": "Parsing Values Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
              "The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).",
              "Math.ceil() is used to round up — you always need whole buckets, never a fraction.",
              "The method is overloaded with 3 versions: (area, areaPerBucket), (width, height, areaPerBucket), and (width, height, areaPerBucket, extraBuckets) to handle different input scenarios.",
              "If any parameter is invalid (negative or zero), the method returns -1."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;\r\n\r\n// Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.\r\n// The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).\r\n// Math.ceil() is used to round up — you always need whole buckets, never a fraction.\r\n// The method is overloaded with 3 versions: (area, areaPerBucket), (width, height, areaPerBucket), and (width, height, areaPerBucket, extraBuckets) to handle different input scenarios.\r\n// If any parameter is invalid (negative or zero), the method returns -1.\r\n\r\npublic class PaintJobChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int totalNofBucketsRequired =   getBucketCount(3.26, 0.75);\r\n       \r\n\r\n        System.out.println(totalNofBucketsRequired);\r\n    }\r\n\r\n    public static int getBucketCount(double width, double height, double areaOfBucket, int extraBuckets){\r\n\r\n        int totalNofBucketsRequired = 0;\r\n\r\n        if(width <= 0 || height <= 0 || areaOfBucket <= 0 || extraBuckets < 0 ){\r\n\r\n            totalNofBucketsRequired = -1;\r\n        }else{\r\n\r\n            double areaOfWall = (width * height);\r\n\r\n            int totalBucketCount = (int) Math.ceil(areaOfWall / areaOfBucket);\r\n\r\n            totalNofBucketsRequired = totalBucketCount - extraBuckets;\r\n\r\n        }\r\n\r\n\r\n\r\n        return totalNofBucketsRequired;\r\n    }\r\n\r\n    public static int getBucketCount(double width, double height, double areaOfBucket){\r\n\r\n        int totalNofBucketsRequired = 0;\r\n\r\n        if(width <= 0 || height <= 0 || areaOfBucket <= 0 ){\r\n\r\n            totalNofBucketsRequired = -1;\r\n        }else{\r\n\r\n            double areaOfWall = (width * height);\r\n\r\n            totalNofBucketsRequired = (int) Math.ceil(areaOfWall / areaOfBucket);\r\n\r\n        }\r\n\r\n\r\n\r\n        return totalNofBucketsRequired;\r\n    }\r\n\r\n    public static int getBucketCount(double area, double areaPerBucket){\r\n\r\n        int totalNofBucketsRequired = 0;\r\n\r\n        if(area <= 0 || areaPerBucket <= 0 ){\r\n\r\n            totalNofBucketsRequired = -1;\r\n        }else{\r\n\r\n            totalNofBucketsRequired = (int) Math.ceil(area / areaPerBucket);\r\n\r\n        }\r\n\r\n\r\n\r\n        return totalNofBucketsRequired;\r\n    }\r\n}"
      },
      {
        "filePath": "src/Chapter_12_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/ReadingUserInputChallenge.java",
        "fileName": "ReadingUserInputChallenge.java",
        "topicName": "Reading User Input Challenge",
        "chapter": "Chapter 12: Parsing Values Reading Input",
        "subChapter": "Parsing Values Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Reading User Input Challenge.",
              "In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message",
              "\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers.",
              "Before the user enters each number, prompt them with the message, \"Enter number #x:\", where x represents the count 1, 2, 3, etc. As an example, the first message would look something like, \"Enter number #1:\", the next, \"Enter number #2:\", and so on.",
              "Some hints for completing this are, firstly, use a while loop or a do while loop.",
              "Use a scanner object and the next line method to read input as a string.",
              "Use integer dot parse int, as we did in the previous videos.",
              "You'll need some local variables to keep track of the count of valid integers, as well as the sum of the integers."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;\r\n\r\n/*\r\n*\r\nReading User Input Challenge.\r\n\r\nIn this challenge, you'll read 5 valid numbers from the console entered by the\r\n\r\nuser and print the sum of those ten numbers. By valid numbers, I mean you need to check that\r\n\r\nthe numbers entered are valid integers. If they are not, print out the message\r\n\r\n\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers.\r\n\r\nBefore the user enters each number, prompt them with the message, \"Enter number #x:\",\r\n\r\nwhere x represents the count 1, 2, 3, etc. As an example, the first message would\r\n\r\nlook something like, \"Enter number #1:\", the next, \"Enter number #2:\", and so on.\r\n\r\nSome hints for completing this are, firstly, use a while loop or a do while loop.\r\n\r\nUse a scanner object and the next line method to read input as a string.\r\n\r\nUse integer dot parse int, as we did in the previous videos.\r\n\r\nYou'll need some local variables to keep track of the count of valid integers, as well as the\r\n\r\nsum of the integers.\r\n*\r\n* */\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class ReadingUserInputChallenge {\r\n    public static void main(String[] args) {\r\n\r\n        int sum = printSumOfNumbersEnteredByUserUsingDoWhileLoop();\r\n\r\n        System.out.println(sum);\r\n\r\n    }\r\n\r\n    public static int printSumOfNumbersEnteredByUserUsingWhileLoop(){\r\n\r\n        int sum = 0;\r\n\r\n        int counter = 1;\r\n\r\n        Scanner sc= new Scanner(System.in);\r\n\r\n        while(counter <= 5 ){\r\n\r\n            System.out.println(\"Enter number #\" + counter);\r\n\r\n           String userNumberInput = sc.nextLine();\r\n\r\n           if(checkIfNumberIsValid(userNumberInput)){\r\n               sum = sum + Integer.parseInt(userNumberInput);\r\n               counter++;\r\n           }\r\n\r\n\r\n        }\r\n\r\n        return sum;\r\n    }\r\n\r\n    public static int printSumOfNumbersEnteredByUserUsingDoWhileLoop(){\r\n\r\n        int sum = 0;\r\n\r\n        int counter = 1;\r\n\r\n        Scanner sc= new Scanner(System.in);\r\n\r\n        do{\r\n            System.out.println(\"Enter number #\" + counter);\r\n\r\n            String userNumberInput = sc.nextLine();\r\n\r\n            if(checkIfNumberIsValid(userNumberInput)){\r\n                sum = sum + Integer.parseInt(userNumberInput);\r\n                counter++;\r\n            }\r\n        }while(counter <= 5);\r\n\r\n\r\n        return sum;\r\n    }\r\n\r\n\r\n    public static boolean checkIfNumberIsValid(String userNumberInput){\r\n\r\n        boolean isValid = true;\r\n\r\n        try{\r\n           Integer.parseInt(userNumberInput);\r\n           return isValid;\r\n        }catch (NumberFormatException e){\r\n            System.out.println(\"Invalid number\");\r\n            isValid = false;\r\n        }\r\n        return isValid;\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 13: Exception Handling",
    "topics": [
      {
        "filePath": "src/Chapter_13_Exception_Handling/ExceptionHandlingInJava.java",
        "fileName": "ExceptionHandlingInJava.java",
        "topicName": "Exception Handling In Java",
        "chapter": "Chapter 13: Exception Handling",
        "subChapter": "",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Exception",
              "An exception is an abnormal condition that disrupts the normal flow of the program.",
              "Exceptions can occur due to invalid input, null references, division by zero, file not found, etc.",
              "Catching an exception",
              "An exception is caught by wrapping the risky code inside a try-catch block.",
              "The code that might throw an exception goes inside the 'try' block.",
              "The try statement has 2 code blocks.",
              "The first block is declared directly after the try keyword and contains the risky code.",
              "The catch keyword follows the try block and includes a parameter that specifies the type of exception to catch.",
              "The catch block contains the code that runs when an exception of the specified type is thrown.",
              "You can access the exception message with e.getMessage() or print the full trace with e.printStackTrace()."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "An exception is a runtime error — an abnormal condition that occurs while the program is running and disrupts normal execution.",
              "Common causes: null references (NullPointerException), dividing by zero (ArithmeticException), invalid array index (ArrayIndexOutOfBoundsException), invalid string-to-number parsing (NumberFormatException).",
              "Without exception handling, an unhandled exception crashes your program and prints a stack trace.",
              "Java uses try-catch blocks to handle exceptions gracefully, keeping the program running even when errors occur.",
              "The try block contains the \"risky\" code — code that might throw an exception.",
              "The catch block catches the exception and lets you handle it (log it, show a user-friendly message, recover, etc.).",
              "Keep try blocks small — only put the specific risky statements inside try, not your entire method.",
              "The catch parameter specifies WHICH type of exception to catch. 'Exception' is the most general (catches anything).",
              "Useful methods on the exception object: e.getMessage() -> the error message, e.printStackTrace() -> full call stack.",
              "You can have multiple catch blocks for different exception types, ordered from most specific to most general.",
              "The NullPointerException (NPE) occurs when you try to call a method or access a field on a variable that is null (has no object).",
              "@quiz (INTERVIEW TRAP) Does a finally block always execute in Java, even if there is a return in try or catch?",
              "@answer Yes. The finally block runs even when try or catch executes a return statement.",
              "@answer Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1.",
              "@answer The main practical exception is System.exit(), which terminates the JVM before finally can run.",
              "@quiz (INTERVIEW) What is the difference between checked and unchecked exceptions in Java?",
              "@answer Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException.",
              "@answer Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them.",
              "@answer Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state.",
              "@quiz (INTERVIEW) What is the basic exception hierarchy in Java?",
              "@answer At the top is Throwable.",
              "@answer Throwable has two major branches: Error and Exception.",
              "@answer Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from.",
              "@answer Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions.",
              "@quiz (INTERVIEW) What is multi-catch in Java?",
              "@answer Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e).",
              "@answer It was added in Java 7 and is useful when the handling logic is the same for several exception types.",
              "@answer The caught exception variable is effectively final, so you cannot reassign e inside that catch block.",
              "@quiz (INTERVIEW) What is the difference between throw and throws in Java?",
              "@answer throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException(\"bad input\").",
              "@answer throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller.",
              "@answer Think of throw as the action and throws as the declaration.",
              "@quiz (INTERVIEW) What is a NullPointerException and when does it occur?",
              "@answer A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null.",
              "@answer Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object.",
              "@answer It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization."
            ]
          }
        ],
        "inlineComments": [
          "Place only the risky code here — keep try blocks as small as possible.",
          "The variable 'e' holds information about the exception, including its message and stack trace.",
          "The catch block contains your error handling logic — log the error, show a message, or recover gracefully.",
          "The String 'value' is intentionally set to null below to demonstrate a NullPointerException being caught.",
          "Uncomment the next line if you want to see the stack trace",
          "and we are trying to access the null value and trying to convert the null value(which doesn't exist) into uppercase the program will throw a null pointer exception.",
          "But, since the code is wrapped around a try catch block, the exception will be handled.",
          "The code, which may create problem is to be written inside the try block.",
          "the catch block, will catch that exception and handle it.",
          "Since, the code inside the try block will throw null pointer, in the catch parameter, we need to pass the parameter of the exception type, in this case we have passed NullPointerException"
        ],
        "customQuizzes": [
          {
            "question": "(INTERVIEW TRAP) Does a finally block always execute in Java, even if there is a return in try or catch?",
            "answers": [
              "Yes. The finally block runs even when try or catch executes a return statement.",
              "Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1.",
              "The main practical exception is System.exit(), which terminates the JVM before finally can run."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between checked and unchecked exceptions in Java?",
            "answers": [
              "Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException.",
              "Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them.",
              "Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state."
            ]
          },
          {
            "question": "(INTERVIEW) What is the basic exception hierarchy in Java?",
            "answers": [
              "At the top is Throwable.",
              "Throwable has two major branches: Error and Exception.",
              "Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from.",
              "Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions."
            ]
          },
          {
            "question": "(INTERVIEW) What is multi-catch in Java?",
            "answers": [
              "Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e).",
              "It was added in Java 7 and is useful when the handling logic is the same for several exception types.",
              "The caught exception variable is effectively final, so you cannot reassign e inside that catch block."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between throw and throws in Java?",
            "answers": [
              "throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException(\"bad input\").",
              "throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller.",
              "Think of throw as the action and throws as the declaration."
            ]
          },
          {
            "question": "(INTERVIEW) What is a NullPointerException and when does it occur?",
            "answers": [
              "A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null.",
              "Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object.",
              "It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization."
            ]
          }
        ],
        "deepChallenges": [],
        "code": "﻿package Chapter_13_Exception_Handling;\r\n// An exception is a runtime error — an abnormal condition that occurs while the program is running and disrupts normal execution.\n// Common causes: null references (NullPointerException), dividing by zero (ArithmeticException), invalid array index (ArrayIndexOutOfBoundsException), invalid string-to-number parsing (NumberFormatException).\n// Without exception handling, an unhandled exception crashes your program and prints a stack trace.\n// Java uses try-catch blocks to handle exceptions gracefully, keeping the program running even when errors occur.\n// The try block contains the \"risky\" code — code that might throw an exception.\n// The catch block catches the exception and lets you handle it (log it, show a user-friendly message, recover, etc.).\n// Keep try blocks small — only put the specific risky statements inside try, not your entire method.\n// The catch parameter specifies WHICH type of exception to catch. 'Exception' is the most general (catches anything).\n// Useful methods on the exception object: e.getMessage() -> the error message, e.printStackTrace() -> full call stack.\n// You can have multiple catch blocks for different exception types, ordered from most specific to most general.\n// The NullPointerException (NPE) occurs when you try to call a method or access a field on a variable that is null (has no object).\r\n/*\n   Exception\n\n*  An exception is an abnormal condition that disrupts the normal flow of the program.\n*  Exceptions can occur due to invalid input, null references, division by zero, file not found, etc.\n*\n   Catching an exception\n\n   An exception is caught by wrapping the risky code inside a try-catch block.\n   The code that might throw an exception goes inside the 'try' block.\n\n   The try statement has 2 code blocks.\n\n   The first block is declared directly after the try keyword and contains the risky code.\n   The catch keyword follows the try block and includes a parameter that specifies the type of exception to catch.\n\n   The catch block contains the code that runs when an exception of the specified type is thrown.\n   You can access the exception message with e.getMessage() or print the full trace with e.printStackTrace().\n*\n*\n* */\n\n// @quiz (INTERVIEW TRAP) Does a finally block always execute in Java, even if there is a return in try or catch?\n// @answer Yes. The finally block runs even when try or catch executes a return statement.\n// @answer Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1.\n// @answer The main practical exception is System.exit(), which terminates the JVM before finally can run.\n\n// @quiz (INTERVIEW) What is the difference between checked and unchecked exceptions in Java?\n// @answer Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException.\n// @answer Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them.\n// @answer Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state.\n\n// @quiz (INTERVIEW) What is the basic exception hierarchy in Java?\n// @answer At the top is Throwable.\n// @answer Throwable has two major branches: Error and Exception.\n// @answer Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from.\n// @answer Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions.\n\n// @quiz (INTERVIEW) What is multi-catch in Java?\n// @answer Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e).\n// @answer It was added in Java 7 and is useful when the handling logic is the same for several exception types.\n// @answer The caught exception variable is effectively final, so you cannot reassign e inside that catch block.\n\n// @quiz (INTERVIEW) What is the difference between throw and throws in Java?\n// @answer throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException(\"bad input\").\n// @answer throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller.\n// @answer Think of throw as the action and throws as the declaration.\n\n// @quiz (INTERVIEW) What is a NullPointerException and when does it occur?\n// @answer A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null.\n// @answer Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object.\n// @answer It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization.\n\npublic class ExceptionHandlingInJava {\n    public static void main(String[] args) {\r\n\r\n        try{ // The try block wraps any code that might throw an exception at runtime.\r\n            // Place only the risky code here — keep try blocks as small as possible.\r\n        } // The try block ends here; the catch block immediately follows.\r\n        catch (Exception e){  // The catch parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.\r\n                              // The variable 'e' holds information about the exception, including its message and stack trace.\r\n                              // The catch block contains your error handling logic — log the error, show a message, or recover gracefully.\r\n        }\r\n\r\n       // The String 'value' is intentionally set to null below to demonstrate a NullPointerException being caught.\r\n\r\n    /*    try {\r\n            if (value != null) {\r\n                System.out.println(value.toUpperCase());\r\n            } else {\r\n                throw new NullPointerException(\"Value is null\");\r\n            }\r\n        } catch (NullPointerException e) {\r\n            System.out.println(e.getMessage());\r\n            // Uncomment the next line if you want to see the stack trace\r\n            // e.printStackTrace();\r\n        }\r\n\r\n*/\r\n        String value = null;\r\n\r\n        try {\r\n            System.out.println(value.toUpperCase()); // Since String value is null,\r\n                                                     // and we are trying to access the null value\r\n                                                     // and trying to convert the null value(which doesn't exist) into uppercase\r\n                                                     // the program will throw a null pointer exception.\r\n                                                     // But, since the code is wrapped around a try catch block,\r\n                                                     // the exception will be handled.\r\n                                                     // The code, which may create problem is to be written inside the try block.\r\n\r\n            }catch (NullPointerException e){         // Since, the code written inside the try block will lead to null pointer exception,\r\n                                                     // the catch block, will catch that exception and handle it.\r\n                                                     // Since, the code inside the try block will throw null pointer, in the catch parameter,\r\n                                                     // we need to pass the parameter of the exception type, in this case we have passed NullPointerException\r\n\r\n            System.out.println(\"You are trying to access a null value\");\r\n        }\r\n\r\n    }\r\n}\r\n"
      }
    ]
  },
  {
    "name": "Chapter 14: OOP Concepts",
    "topics": [
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java",
        "fileName": "ClassesAndInheritance.java",
        "topicName": "Classes And Inheritance",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes And Inheritance",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
              "OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects",
              "Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming.",
              "A software object stores its state in fields, which can also be called variables or attributes.",
              "Objects expose their behavior with methods.",
              "Class is basically a template or a blueprint for creating objects.",
              "The class describes the data (fields), and the behavior (methods), that are relevant to the real-world object we want to describe. These are called class members.",
              "A class member can be a field or a method, or some other type of dependent element.",
              "If a field is static, there is only one copy in memory, and this value is associated with the class or template itself.",
              "If a field is not static, it's called an instance field, and each object may have a different value stored for this field.",
              "A static method can't be dependent on any one object's state, so it can't reference any instance members.",
              "Any method that operates on instance fields needs to be non-static. These class or member fields can be thought of as variables, though it's more common to call them fields or attributes."
            ]
          },
          {
            "type": "block",
            "lines": [
              "The public keyword is an access modifier. This lets us determine what access others will have to this new class that we're creating.",
              "Classes can be organized into logical groupings which are called packages.",
              "You declare a package name in the class using the package statement.",
              "If you don't declare a package, the class implicitly belongs to the default package.",
              "A class is said to be a top-level class if it is defined in the source code file and not enclosed in the code block of another class, type, or method.",
              "A top-level class has only two valid access modifier options: public or none.",
              "The word public gives unrestricted access to a class.",
              "When there is no modifier specified at all, Java, by default, implicitly allows package-private access.",
              "This means that classes grouped into the same package can access the class."
            ]
          },
          {
            "type": "block",
            "lines": [
              "An access modifier at the member level allows granular control over class members.",
              "Access Keyword :- public",
              "Description :- public means any other class in any package can access this class.",
              "Access Keyword :- protected",
              "Description :- protected allows classes in the same package, and any subclass in other packages to have access to the member",
              "Access Keyword :- None ( No access keyword specified)",
              "Description :- When the modifier is omitted, this has special meaning, called package access, meaning the member is accessible only to classes in the same package",
              "Access Keyword :- private",
              "Description :- private means that no other class can access this member"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Object-Oriented Programming (OOP) is a programming paradigm that models real-world entities as software objects.",
              "In OOP, everything revolves around CLASSES (blueprints) and OBJECTS (instances of those blueprints).",
              "OOP is built on four pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
              "A class defines FIELDS (data/state) and METHODS (behaviour). Together these are called class members.",
              "A static field has one copy shared by all instances. An instance field has one copy per object.",
              "A static method cannot use instance data. An instance method can use both static and instance data.",
              "@quiz (INTERVIEW) What is the difference between an abstract class and an interface in Java?",
              "@answer An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class.",
              "@answer An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods.",
              "@answer A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces.",
              "@answer Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable.",
              "@quiz (INTERVIEW) What are the three common uses of the final keyword in Java?",
              "@answer A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned.",
              "@answer A final method cannot be overridden by subclasses.",
              "@answer A final class cannot be extended, which is why classes like String and Integer cannot be subclassed.",
              "@quiz (INTERVIEW) What is the order of Java access modifiers from most restrictive to least restrictive?",
              "@answer Order: private, default (package-private), protected, public.",
              "@answer private means only inside the same class.",
              "@answer default means only classes in the same package.",
              "@answer protected means same package plus subclasses in other packages.",
              "@answer public means accessible from everywhere.",
              "@quiz (INTERVIEW) What is the difference between this and super in Java?",
              "@answer this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this().",
              "@answer super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields.",
              "@answer this resolves current-object context, while super explicitly moves one level up the inheritance chain.",
              "@quiz (INTERVIEW) What is polymorphism in Java, and what is the difference between compile-time and runtime polymorphism?",
              "@answer Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments.",
              "@answer Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type.",
              "@answer Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [
          {
            "question": "(INTERVIEW) What is the difference between an abstract class and an interface in Java?",
            "answers": [
              "An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class.",
              "An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods.",
              "A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces.",
              "Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable."
            ]
          },
          {
            "question": "(INTERVIEW) What are the three common uses of the final keyword in Java?",
            "answers": [
              "A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned.",
              "A final method cannot be overridden by subclasses.",
              "A final class cannot be extended, which is why classes like String and Integer cannot be subclassed."
            ]
          },
          {
            "question": "(INTERVIEW) What is the order of Java access modifiers from most restrictive to least restrictive?",
            "answers": [
              "Order: private, default (package-private), protected, public.",
              "private means only inside the same class.",
              "default means only classes in the same package.",
              "protected means same package plus subclasses in other packages.",
              "public means accessible from everywhere."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between this and super in Java?",
            "answers": [
              "this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this().",
              "super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields.",
              "this resolves current-object context, while super explicitly moves one level up the inheritance chain."
            ]
          },
          {
            "question": "(INTERVIEW) What is polymorphism in Java, and what is the difference between compile-time and runtime polymorphism?",
            "answers": [
              "Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments.",
              "Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type.",
              "Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch."
            ]
          }
        ],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_1_Classes_And_Inheritance;\r\n// Object-Oriented Programming (OOP) is a programming paradigm that models real-world entities as software objects.\n// In OOP, everything revolves around CLASSES (blueprints) and OBJECTS (instances of those blueprints).\n// OOP is built on four pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.\n// A class defines FIELDS (data/state) and METHODS (behaviour). Together these are called class members.\n// A static field has one copy shared by all instances. An instance field has one copy per object.\n// A static method cannot use instance data. An instance method can use both static and instance data.\r\n/*\r\n*  Object-oriented programming is a way to model real world objects as software objects which contain both data and code\r\n*\r\n*  OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects\r\n*\r\n*  Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming.\r\n*\r\n* A software object stores its state in fields, which can also be called variables or attributes.\r\n*\r\n* Objects expose their behavior with methods.\r\n*\r\n* Class is basically a template or a blueprint for creating objects.\r\n*\r\n* The class describes the data (fields), and the behavior (methods), that are relevant to the real-world object we want to describe. These are called class members.\r\n*\r\n* A class member can be a field or a method, or some other type of dependent element.\r\n*\r\n* If a field is static, there is only one copy in memory, and this value is associated with the class or template itself.\r\n*\r\n* If a field is not static, it's called an instance field, and each object may have a different value stored for this field.\r\n*\r\n* A static method can't be dependent on any one object's state, so it can't reference any instance members.\r\n*\r\n* Any method that operates on instance fields needs to be non-static. These class or member fields can be thought of as variables, though it's more common to call them fields or attributes.\r\n*\r\n*/\r\n\r\n\r\n/*\r\n* The public keyword is an access modifier. This lets us determine what access others will have to this new class that we're creating.\r\n*\r\n* Classes can be organized into logical groupings which are called packages.\r\n*\r\n* You declare a package name in the class using the package statement.\r\n*\r\n* If you don't declare a package, the class implicitly belongs to the default package.\r\n*\r\n* A class is said to be a top-level class if it is defined in the source code file\r\n*\r\n* and not enclosed in the code block of another class, type, or method.\r\n*\r\n* A top-level class has only two valid access modifier options: public or none.\r\n*\r\n* The word public gives unrestricted access to a class.\r\n*\r\n* When there is no modifier specified at all, Java, by default, implicitly allows package-private access.\r\n*\r\n* This means that classes grouped into the same package can access the class.\r\n* */\r\n\r\n\r\n/*\n* An access modifier at the member level allows granular control over class members.\n*\n* Access Keyword :- public\n* Description :- public means any other class in any package can access this class.\n*\n* Access Keyword :- protected\n* Description :- protected allows classes in the same package, and any subclass in other packages to have access to the member\n*\n* Access Keyword :- None ( No access keyword specified)\n* Description :- When the modifier is omitted, this has special meaning, called package access, meaning the member is accessible only to classes in the same package\n*\n* Access Keyword :- private\n* Description :- private means that no other class can access this member\n*\n* */\n\n// @quiz (INTERVIEW) What is the difference between an abstract class and an interface in Java?\n// @answer An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class.\n// @answer An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods.\n// @answer A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces.\n// @answer Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable.\n\n// @quiz (INTERVIEW) What are the three common uses of the final keyword in Java?\n// @answer A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned.\n// @answer A final method cannot be overridden by subclasses.\n// @answer A final class cannot be extended, which is why classes like String and Integer cannot be subclassed.\n\n// @quiz (INTERVIEW) What is the order of Java access modifiers from most restrictive to least restrictive?\n// @answer Order: private, default (package-private), protected, public.\n// @answer private means only inside the same class.\n// @answer default means only classes in the same package.\n// @answer protected means same package plus subclasses in other packages.\n// @answer public means accessible from everywhere.\n\n// @quiz (INTERVIEW) What is the difference between this and super in Java?\n// @answer this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this().\n// @answer super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields.\n// @answer this resolves current-object context, while super explicitly moves one level up the inheritance chain.\n\n// @quiz (INTERVIEW) What is polymorphism in Java, and what is the difference between compile-time and runtime polymorphism?\n// @answer Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments.\n// @answer Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type.\n// @answer Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch.\n\npublic class ClassesAndInheritance {\n\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Car.java",
        "fileName": "Car.java",
        "topicName": "Car",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Getters Encapsulation Object Access",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Unlike local variables, class variables should have some type of access modifier declared for it.",
              "If no access modifier is declared explicitly, Java declares the default one (package private), implicitly.",
              "When writing methods that use non-static fields, your method can't be declared static."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Encapsulation is one of the four pillars of OOP. It means hiding the internal state of an object and only allowing access through controlled methods (getters and setters).",
              "All instance fields in this class are declared 'private' — they cannot be accessed directly from outside the class.",
              "Getters and setters provide controlled access: a getter READS a field value; a setter WRITES (updates) a field value.",
              "Naming convention: getter = getFieldName() or isFieldName() for booleans. Setter = setFieldName(value).",
              "Setters can VALIDATE data before assigning it. Example: setMake() only accepts \"holden\", \"porsche\", or \"tesla\" — anything else becomes \"Unsupported\".",
              "This is the power of encapsulation — the Car class enforces its own rules about valid data. Outside code cannot bypass these rules.",
              "The 'this' keyword inside a method or constructor refers to the CURRENT object (the instance the method is being called on).",
              "'this.make = make' — the left side is the instance field; the right side is the parameter. Without 'this.', both sides refer to the local parameter (self-assignment, no effect).",
              "'null' is a special keyword meaning \"no object\". A reference variable set to null points to nothing. Calling any method on null causes a NullPointerException at runtime.",
              "Default field values: Java auto-assigns defaults when a field is not explicitly initialised. Strings -> null, int -> 0, boolean -> false, double -> 0.0."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_2_Getters_Encapsulation_Object_Access;\r\n// Encapsulation is one of the four pillars of OOP. It means hiding the internal state of an object and only allowing access through controlled methods (getters and setters).\n// All instance fields in this class are declared 'private' — they cannot be accessed directly from outside the class.\n// Getters and setters provide controlled access: a getter READS a field value; a setter WRITES (updates) a field value.\n// Naming convention: getter = getFieldName() or isFieldName() for booleans. Setter = setFieldName(value).\n// Setters can VALIDATE data before assigning it. Example: setMake() only accepts \"holden\", \"porsche\", or \"tesla\" — anything else becomes \"Unsupported\".\n// This is the power of encapsulation — the Car class enforces its own rules about valid data. Outside code cannot bypass these rules.\n// The 'this' keyword inside a method or constructor refers to the CURRENT object (the instance the method is being called on).\n// 'this.make = make' — the left side is the instance field; the right side is the parameter. Without 'this.', both sides refer to the local parameter (self-assignment, no effect).\n// 'null' is a special keyword meaning \"no object\". A reference variable set to null points to nothing. Calling any method on null causes a NullPointerException at runtime.\n// Default field values: Java auto-assigns defaults when a field is not explicitly initialised. Strings -> null, int -> 0, boolean -> false, double -> 0.0.\r\n/*\r\n*\r\n\r\nUnlike local variables, class variables should have some type of access modifier declared for it.\r\n\r\nIf no access modifier is declared explicitly, Java declares the default one (package private), implicitly.\r\n*\r\n*\r\nWhen writing methods that use non-static fields, your method can't be declared static.\r\n*\r\n*\r\n* */\r\n\r\npublic class Car {\r\n\r\n\r\n\r\n\r\n    public boolean isConvertible() {\r\n        return convertible;\r\n    }\r\n\r\n    public void setConvertible(boolean convertible) {\r\n        this.convertible = convertible;\r\n    }\r\n\r\n    public int getDoors() {\r\n        return doors;\r\n    }\r\n\r\n    public void setDoors(int doors) {\r\n        this.doors = doors;\r\n    }\r\n\r\n    public String getColor() {\r\n        return color;\r\n    }\r\n\r\n    public void setColor(String color) {\r\n        this.color = color;\r\n    }\r\n\r\n    public String getModel() {\r\n        return model;\r\n    }\r\n\r\n    public void setModel(String model) {\r\n        this.model = model;\r\n    }\r\n\r\n    public String getMake() {\r\n        return make;\r\n    }\r\n\r\n\r\n    /* \"this\" is a special keyword in Java. What it really refers to is the instance\r\n            that was created when the object was instantiated.\r\n            \"this\" is a special reference name for the\r\n            object or instance, which it can use to describe itself.\r\n            \"this\" is used to access fields on the class.     */\r\n\r\n    public void setMake(String make) {\r\n\r\n        if(make == null){\r\n            make = \"Unknown\";\r\n        }\r\n        String lowercaseMake = make.toLowerCase();\r\n        switch (lowercaseMake){\r\n            case \"holden\": case \"porsche\": case \"tesla\":\r\n                this.make = make;\r\n                break;\r\n            default:\r\n             this.make = \"Unsupported\";\r\n        }\r\n       // this.make = make;\r\n    }\r\n\r\n/*    public void setMake(String make) {\r\n      make = make; // Here we are assigning the parameter named make to itself\r\n    }\r\n */\r\n\r\n        private String make = \"Tesla\";\r\n        private String model = \"Model X\";\r\n        private String color = \"Gray\";\r\n        private int doors = 2;\r\n        private boolean convertible = true;\r\n\r\n    public void describeCar(){\r\n\r\n        System.out.println(doors + \"-Door \" + color + \" \" + make + \" \" + model + \" \" + (convertible ? \"Convertible\" : \"\"));\r\n    }\r\n\r\n    /*\r\n    * If values are assigned to the fields then the output is :- 2-Door Gray Tesla Model X Convertible\r\n    *\r\n    * */\r\n\r\n\r\n    /* Getters and Setters in Java\r\n    \r\n    A getter is a method on a class that retrieves the value of a private field and returns it.\r\n    A setter is a method on a class that sets the value of a private field.\r\n    The purpose of these methods is to control and protect access to private fields.\r\n\r\n    A getter method usually just returns the value of a private field.\r\n    It's usual to name a getter method with the get prefix, followed by the field name in\r\n    lower camel case\r\n\r\n    There could be getter methods for fields that are not really declared on your class but that are derived in some way.\r\n\r\n    A setter method may simply just assign the argument passed to the method, to the field,\r\n    but it can contain code to validate data, check additional security requirements,\r\n    ensure immutability of the field value, or any other code required\r\n    to protect and validate an object's state.\r\n\r\n    It's usual to name a setter method with the set prefix, followed by the field name, in lower camel case\r\n\r\n    There may be many cases where we won't have a setter method for a particular private field.\r\n    The class may contain data only needed within the class itself and doesn't need\r\n    to be exposed to the outside world.\r\n\r\n\r\n    In the setter methods we can set up all the rules related to that class,\r\n    what is valid, and what is not valid. We cna have all the functionalities set\r\n    up within the car class itself, so that these rules are in place as we're creating the object.\r\n\r\n    In this way, we can make sure that, the code that's creating objects can't make invalid objects.\r\n\r\n\r\n    This is the whole concept of encapsulation. Not allowing\r\n    people to access the field directly. We force them to go through a controlled\r\n    way of setting up the data on the object. Using a setter method, we can really make\r\n    sure that the data in our objects is valid data.\r\n    *\r\n    * */\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Main.java",
        "fileName": "Main.java",
        "topicName": "Main",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Getters Encapsulation Object Access",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
              "Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.",
              "When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false.",
              "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
              "To read field values, use the getter: car.getMake(). To update, use the setter: car.setMake(\"Porsche\").",
              "The setMake() method in Car validates the input — only \"holden\", \"porsche\", or \"tesla\" are accepted. Passing \"Maserati\" results in \"Unsupported\".",
              "This demonstrates encapsulation at work — the class controls what data is valid, and outside code cannot bypass those rules."
            ]
          }
        ],
        "inlineComments": [
          "This will give compile time error as the car variable is not initialised",
          "Car car = new Car();",
          "car.make = \"Porsche\";",
          "Since this field has private access, the main class is not allowed to access them",
          "The best practice is to allow access to this data, either through getters and setters",
          "Output :- make = Porsche model = Model X"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_2_Getters_Encapsulation_Object_Access;\r\n// This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.\n// Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.\n// When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false.\n// Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).\n// To read field values, use the getter: car.getMake(). To update, use the setter: car.setMake(\"Porsche\").\n// The setMake() method in Car validates the input — only \"holden\", \"porsche\", or \"tesla\" are accepted. Passing \"Maserati\" results in \"Unsupported\".\n// This demonstrates encapsulation at work — the class controls what data is valid, and outside code cannot bypass those rules.\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n\r\n     //  Car car; // This will give compile time error as the car variable is not initialised\r\n\r\n        Car car = null; // This will give run time error as the variable car is pointing to a null reference\r\n\r\n      // Car car = new Car();\r\n        car.describeCar();\r\n\r\n        /* Output :- 0-Door null null null\r\n         *\r\n         * Null :- null is a special keyword in Java, meaning, the variable or attribute has a type but no reference to an object.\r\n         *\r\n         * This means that no instance or object is assigned to the variable or field.\r\n         *\r\n         * Strings are really objects, not primitive data types, so Java assigned each a null reference.\r\n         *\r\n         * Fields with primitive data types are never null.\r\n         *\r\n         * Fields with a primitive data type will get assigned a default value by Java.\r\n         *\r\n         * Fields on classes are assigned default values automatically by Java, if you don't assign values yourself.\r\n         *\r\n         * Data type :- boolean\r\n         * Default Value Assigned :- false\r\n         *\r\n         * Data type :- byte,short,int,long,char\r\n         * Default value Assigned :- 0\r\n         *\r\n         * Data type :- double,float\r\n         * Default value assigned :- 0.0\r\n         *\r\n         *\r\n        * */\r\n\r\n         // car.make = \"Porsche\";\r\n        // Since this field has private access, the main class is not allowed to access them\r\n\r\n        // The best practice is to allow access to this data, either through getters and setters\r\n\r\n      //  car.setMake(\"Porsche\");\r\n        car.setModel(\"Carrera\");\r\n        car.setMake(\"Maserati\"); // As per the validations conditions mentioned in the setter, the output of this line of code will be \"Unsupported\"\r\n        car.setDoors(2);\r\n        car.setConvertible(true);\r\n        car.setColor(\"black\");\r\n\r\n        System.out.println(\"make = \" + car.getMake());\r\n        System.out.println(\"model = \" + car.getModel());\r\n\r\n        // Output :- make = Porsche\r\n        // model = Model X\r\n        \r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/BankAccount.java",
        "fileName": "BankAccount.java",
        "topicName": "Bank Account",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Create a new class for a bank account.",
              "Create fields for account characteristics like:",
              "account number. account balance. customer name. email. and phone number.",
              "Create getters and setters for each field. Create two additional methods:",
              "one for depositing funds into the account. and one for withdrawing funds from the account.",
              "A customer should not be allowed to withdraw funds if that withdrawal takes their balance negative.",
              "Create a new project called ClassesChallenge with the usual Main class with the usual main method.",
              "You'll create an instance of an Account class and then test your withdrawal and deposit methods.",
              "You'll print information to the console that confirms the account balance after the methods are called."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge.BankAccountChallenge;\r\n\r\n//Create a new class for a bank account.\r\n//\r\n//Create fields for account characteristics like:\r\n//\r\n//account number. account balance. customer name. email. and phone number.\r\n//\r\n//Create getters and setters for each field. Create two additional methods:\r\n//\r\n//one for depositing funds into the account. and one for withdrawing funds from the account.\r\n//\r\n//A customer should not be allowed to withdraw funds if that withdrawal takes their balance negative.\r\n//\r\n//Create a new project called ClassesChallenge with the usual Main class with the usual main method.\r\n//\r\n//You'll create an instance of an Account class and then test your withdrawal and deposit methods.\r\n//\r\n//You'll print information to the console that confirms the account balance after the methods are called.\r\n\r\npublic class BankAccount {\r\n\r\n    private String accountNumber;\r\n    private double accountBalance;\r\n    private String customerName;\r\n    private String email;\r\n    private String  phoneNumber;\r\n\r\n    public String getAccountNumber() {\r\n        return accountNumber;\r\n    }\r\n\r\n    public void setAccountNumber(String accountNumber) {\r\n        this.accountNumber = accountNumber;\r\n    }\r\n\r\n    public double getAccountBalance() {\r\n        return accountBalance;\r\n    }\r\n\r\n    public void setAccountBalance(double accountBalance) {\r\n        this.accountBalance = accountBalance;\r\n    }\r\n\r\n    public String getCustomerName() {\r\n        return customerName;\r\n    }\r\n\r\n    public void setCustomerName(String customerName) {\r\n        this.customerName = customerName;\r\n    }\r\n\r\n    public String getEmail() {\r\n        return email;\r\n    }\r\n\r\n    public void setEmail(String email) {\r\n        this.email = email;\r\n    }\r\n\r\n    public String getPhoneNumber() {\r\n        return phoneNumber;\r\n    }\r\n\r\n    public void setPhoneNumber(String phoneNumber) {\r\n        this.phoneNumber = phoneNumber;\r\n    }\r\n\r\n    public void depositFunds(double depositAmount){\r\n       accountBalance = accountBalance + depositAmount;\r\n        System.out.println(\"Deposit of $\" + depositAmount + \" made. New balance is $\" + accountBalance);\r\n    }\r\n\r\n    public void withdrawFunds(double withdrawalAmount){\r\n        if(withdrawalAmount > accountBalance){\r\n            System.out.println(\"Insufficient funds in your account. You have only $\" + accountBalance + \" in your account\");\r\n        }else if(withdrawalAmount <= accountBalance){\r\n            accountBalance = accountBalance - withdrawalAmount;\r\n            System.out.println(\"Withdrawal of $\" + withdrawalAmount + \" processed, Remaining balance = $\" + accountBalance);\r\n        }\r\n    }\r\n\r\n    public void printBankAccountHolderDetails(){\r\n        System.out.println(\"Name :- \" + getCustomerName());\r\n        System.out.println(\"Balance :- \" + getAccountBalance());\r\n        System.out.println(\"Account Number :- \" + getAccountNumber());\r\n        System.out.println(\"Email :- \" + getEmail());\r\n        System.out.println(\"Phone Number :- \" + getPhoneNumber());\r\n    }\r\n\r\n\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/Main.java",
        "fileName": "Main.java",
        "topicName": "Main",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes Challenge",
        "headerComments": [
          {
            "type": "generated",
            "lines": [
              "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
              "Review the class Main and understand its key responsibilities.",
              "This example defines 1 method; trace method behavior step by step.",
              "Run through the main method flow to understand execution order and output."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge.BankAccountChallenge;\r\n\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        BankAccount bankAccount = new BankAccount();\r\n\r\n        bankAccount.setAccountNumber(\"123456789\");\r\n        bankAccount.setAccountBalance(1000.0);\r\n        bankAccount.setCustomerName(\"Navneet Jha\");\r\n        bankAccount.setEmail(\"navneet.jha500@gmail.com\");\r\n        bankAccount.setPhoneNumber(\"(+91) 8093958396\");\r\n\r\n        bankAccount.printBankAccountHolderDetails();\r\n\r\n        bankAccount.withdrawFunds(100.0);\r\n        bankAccount.depositFunds(250.00);\r\n        bankAccount.withdrawFunds(50.00);\r\n\r\n        bankAccount.withdrawFunds(200.00);\r\n\r\n        bankAccount.depositFunds(100.00);\r\n        bankAccount.withdrawFunds(45.55);\r\n        bankAccount.withdrawFunds(54.46);\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverLoadingChallenge.java",
        "fileName": "MethodOverLoadingChallenge.java",
        "topicName": "Method Over Loading Challenge",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Create two methods with the  same name: convertToCentimeters",
              "The first method has one parameter of type int,  which represents the entire height in inches.",
              "You'll convert inches to centimeters, in this  method, and pass back the number of centimeters, as a double. The second method has two parameters  of type int, one to represent height in feet, and one to represent the remaining height  in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for  inches would be passed to this method.",
              "This method will convert feet and inches to just  inches, then call the first method, to get the number of centimeters, also returning the value as  a double. Both methods should return a real number or decimal value for total height in centimeters.  Call both methods, and print out the results."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge;\r\n\r\n/*\r\n\r\nCreate two methods with the  same name: convertToCentimeters\r\n\r\nThe first method has one parameter of type int,  which represents the entire height in inches.\r\n\r\nYou'll convert inches to centimeters, in this  method, and pass back the number of centimeters,\r\n\r\nas a double. The second method has two parameters  of type int, one to represent height in feet,\r\n\r\nand one to represent the remaining height  in inches. So if a person is 5 foot,\r\n\r\n8 inches, the values 5 for feet and 8 for  inches would be passed to this method.\r\n\r\nThis method will convert feet and inches to just  inches, then call the first method, to get the\r\n\r\nnumber of centimeters, also returning the value as  a double. Both methods should return a real number\r\n\r\nor decimal value for total height in centimeters.  Call both methods, and print out the results.\r\n\r\n */\r\n\r\npublic class MethodOverLoadingChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        calcFeetAndInchesToCentimeters(5,7);\r\n\r\n       // calcFeetAndInchesToCentimeters(67);\r\n\r\n        calcFeetAndInchesToCentimeters(171);\r\n\r\n\r\n    }\r\n\r\n    public static void calcFeetAndInchesToCentimeters(double feet, double inches){\r\n\r\n        double centimetersValue;\r\n\r\n        if(feet >=0 && (inches >=0 && inches <= 12)){\r\n\r\n            double feetIntoInches = feet * 12;\r\n\r\n            double totalInches = feetIntoInches + inches;\r\n\r\n            centimetersValue = Math.round(totalInches * 2.54);\r\n\r\n            System.out.println(feet + \" ft \" + inches + \" inch = \" + centimetersValue + \" cm \");\r\n\r\n        }else {\r\n\r\n            System.out.println(\"Invalid value, please enter correct value\");\r\n        }\r\n\r\n\r\n    }\r\n\r\n    public static void calcFeetAndInchesToCentimeters(double centimeters){\r\n\r\n        int feet;\r\n\r\n        double inches;\r\n\r\n        if(centimeters < 0){\r\n\r\n            System.out.println(\"Invalid value\");\r\n        }else{\r\n\r\n            double totalInches = centimeters / 2.54;\r\n\r\n            feet = (int) (totalInches / 12);\r\n\r\n            inches = Math.round(totalInches % 12);\r\n\r\n            System.out.println(centimeters + \" cm = \" + feet + \" ft \" + inches + \" inch \");\r\n\r\n\r\n        }\r\n    }\r\n\r\n/*\r\n        public static void calcFeetAndInchesToCentimeters(double inches){\r\n\r\n        int feet;\r\n        double remaining_inches;\r\n\r\n        if(inches < 0){\r\n\r\n            System.out.println(\"Invalid value\");\r\n\r\n        }else{\r\n\r\n             feet = (int) (inches / 12);\r\n\r\n             remaining_inches = inches % 12;\r\n\r\n             calcFeetAndInchesToCentimeters(feet,remaining_inches);\r\n\r\n\r\n        }\r\n    }\r\n*/\r\n\r\n}\r\n\r\n\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverloadingInJava.java",
        "fileName": "MethodOverloadingInJava.java",
        "topicName": "Method Overloading In Java",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.",
              "Java developers often refer to method overloading, as compile-time polymorphism.",
              "This means the compiler is determining the right method to call, based on the method name and argument list. Usually overloading happens within a single class.",
              "But methods can also be overloaded by subclasses. That's because a subclass inherits one version of the method from the parent class, and then the subclass can have another overloaded version of that method."
            ]
          }
        ],
        "inlineComments": [
          "If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.",
          "Method return type may or may not be different, and that allows us to reuse the same method name",
          "Overriding is very handy, it reduces duplicated code, and we don't have to remember multiple method names.",
          "We can overload, static or instance methods",
          "There are two ways to overload the method in java",
          "By changing number of arguments",
          "By changing the data type",
          "Method Overloading and Type Promotion*",
          "One type is promoted to another implicitly if no matching datatype is found.",
          "byte can be promoted to short, int, long, float or double. The short datatype can be promoted to int, long, float or double.",
          "The char datatype can be promoted to int,long,float or double and so on.",
          "If there are matching type arguments in the method, type promotion is not performed.",
          "If there are no matching type arguments in the method, and each method promotes similar number of arguments, there will be ambiguity.",
          "Since there are no matching type arguments, and each method promotes similar number of arguments, there will be ambiguity.",
          "Just by changing the return type of the method is not sufficient, as it may lead to ambiguity.",
          "Example of Method Overloading with TypePromotion",
          "Example of Method Overloading with Type Promotion in case of ambiguity",
          "Example of Method Overloading with Type Promotion if matching found"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge;\r\n\r\npublic class MethodOverloadingInJava {\r\n\r\n//    If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.\r\n\r\n//    Method return type may or may not be different, and that allows us to reuse the same method name\r\n\r\n//    Overriding is very handy, it reduces duplicated code, and we don't have to remember multiple method names.\r\n\r\n//    We can overload, static or instance methods\r\n\r\n/*    To the code calling an overloaded method, it looks like a single method can be\r\n      called with different sets of arguments. In actuality, each call that's made with\r\n      a different set of arguments is calling a separate method.\r\n\r\n      Java developers often refer to method overloading, as compile-time polymorphism.\r\n\r\n      This means the compiler is determining the right method to call, based on the method name and argument list. Usually overloading happens within a single class.\r\n\r\n      But methods can also be overloaded by subclasses. That's because a subclass inherits one version of the method from the parent class, and then the subclass can have\r\n      another overloaded version of that method. */\r\n\r\n//    There are two ways to overload the method in java\r\n\r\n//    By changing number of arguments\r\n//    By changing the data type\r\n\r\n\r\n//    Method Overloading and Type Promotion*\r\n\r\n//    One type is promoted to another implicitly if no matching datatype is found.\r\n//    byte can be promoted to short, int, long, float or double. The short datatype can be promoted to int, long, float or double.\r\n//    The char datatype can be promoted to int,long,float or double and so on.\r\n\r\n//    If there are matching type arguments in the method, type promotion is not performed.\r\n\r\n//    If there are no matching type arguments in the method, and each method promotes similar number of arguments, there will be ambiguity.\r\n\r\n    public static void main(String[] args) {\r\n        int score = calculateScore(\"Navneet\", 1000);\r\n        System.out.println(\"New Score is \" + score);\r\n        score = calculateScore(75);\r\n        System.out.println(\"Second new Score is \" + score);\r\n        score = calculateScore(\"Navneet\",1000);\r\n        System.out.println(\"Second new Score is \" + score);\r\n\r\n        sum(1,2); //The b parameter is promoted to long\r\n        sum(1,2,4);\r\n\r\n        performingSumAgain(20,20); // Type promotion will not happen since there are matching arguments\r\n\r\n       // performingSum(1,3); // Since there are no matching type arguments, and each method promotes similar number of arguments, there will be ambiguity.\r\n\r\n    }\r\n\r\n    public static int calculateScore(String playerName, int score){\r\n        System.out.println(\"Player \" + playerName + \" scored \" + score + \" points \");\r\n        return score * 1000;\r\n    }\r\n\r\n    public static int calculateScore(int score){ // Example of method overloading. Number of arguments are changed\r\n        System.out.println(\"Unnamed player scored \" + score + \" points\");\r\n        return score * 1000;\r\n    }\r\n\r\n//        public static long calculateScore(String playerName, int score){ // Just by changing the return type of the method is not sufficient, as it may lead to ambiguity.\r\n//        System.out.println(\"Player \" + playerName + \" scored \" + score + \" points \");\r\n//        return score * 1000L;\r\n//    }\r\n\r\n    // Example of Method Overloading with TypePromotion\r\n\r\n    public static void sum(int a, long b){\r\n        System.out.println(a + b);\r\n    }\r\n\r\n    public static void sum(int a,int b,int c){\r\n        System.out.println(a+b+c);\r\n    }\r\n\r\n    // Example of Method Overloading with Type Promotion in case of ambiguity\r\n\r\n    public static void performingSum(int a,long b){\r\n        System.out.println(\"a method invoked\");\r\n    }\r\n\r\n    public static void performingSum(long a,int b){\r\n        System.out.println(\"b method invoked\");\r\n    }\r\n\r\n\r\n    // Example of Method Overloading with Type Promotion if matching found\r\n\r\n    public static void performingSumAgain(int a, int b){\r\n        System.out.println(\"Int argument is invoked\");\r\n    }\r\n\r\n    public static void performingSumAgain(long a,long b){\r\n        System.out.println(\"Long Argument is invoked\");\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverloadingSecondAndMinutesChallenge.java",
        "fileName": "MethodOverloadingSecondAndMinutesChallenge.java",
        "topicName": "Method Overloading Second And Minutes Challenge",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
              "You should validate that the first parameter minutes is >= 0.",
              "You should validate that the 2nd parameter seconds is >= 0 and <= 59.",
              "The method should return Invalid value in the method if either of the above are not true.",
              "If the parameters are valid then calculate how many hours minutes and seconds equal the minutes and seconds passed to this method and return that value as string in format gXXh YYm ZZsh where XX represents a number of hours, YY the minutes and ZZ the seconds.",
              "Create a 2nd method of the same name but with only one parameter seconds.",
              "Validate that it is >= 0, and return Invalid value ife it is not true.",
              "If it is valid, then calculate how many minutes are in the seconds value and then call the other overloaded method passing the correct minutes and seconds calculated so that it can calculate correctly.",
              "Call both methods to print values to the console.",
              "Tips:",
              "Use int or long for your number data types is probably a good idea.",
              "1 minute = 60 seconds and 1 hour = 60 minutes or 3600 seconds.",
              "Methods should be static as we have used previously.",
              "Bonus:",
              "For the input 61 minutes output should be 01h 01m 00s, but it is ok if it is 1h 1m 0s (Tip: use if-else)",
              "Create a new console project and call it SecondsAndMinutesChallenge"
            ]
          }
        ],
        "inlineComments": [
          "int remainingMinutes = minutes - (hours * 60);"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge;\r\n\r\n//        Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.\r\n//\r\n//        You should validate that the first parameter minutes is >= 0.\r\n//\r\n//        You should validate that the 2nd parameter seconds is >= 0 and <= 59.\r\n//\r\n//        The method should return Invalid value in the method if either of the above are not true.\r\n//\r\n//        If the parameters are valid then calculate how many hours minutes and seconds equal the minutes and seconds passed to this method and return that value as string in format gXXh YYm ZZsh where XX represents a number of hours, YY the minutes and ZZ the seconds.\r\n//\r\n//        Create a 2nd method of the same name but with only one parameter seconds.\r\n//\r\n//        Validate that it is >= 0, and return Invalid value ife it is not true.\r\n//\r\n//        If it is valid, then calculate how many minutes are in the seconds value and then call the other overloaded method passing the correct minutes and seconds calculated so that it can calculate correctly.\r\n//\r\n//        Call both methods to print values to the console.\r\n//\r\n//        Tips:\r\n//        Use int or long for your number data types is probably a good idea.\r\n//        1 minute = 60 seconds and 1 hour = 60 minutes or 3600 seconds.\r\n//        Methods should be static as we have used previously.\r\n//\r\n//        Bonus:\r\n//        For the input 61 minutes output should be 01h 01m 00s, but it is ok if it is 1h 1m 0s (Tip: use if-else)\r\n//        Create a new console project and call it SecondsAndMinutesChallenge\r\n//\r\n\r\npublic class MethodOverloadingSecondAndMinutesChallenge {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(getDurationString(65, 30));\r\n\r\n        System.out.println(getDurationString(3990));\r\n    }\r\n\r\n    public static String getDurationString(int minutes, int seconds){\r\n\r\n        String duration;\r\n\r\n        if(minutes >=0 && (seconds >=0 && seconds <=59)){\r\n\r\n           int hours = minutes / 60;\r\n\r\n         //   int remainingMinutes = minutes - (hours * 60);\r\n\r\n            int remainingMinutes = minutes % 60;\r\n\r\n           duration = (hours + \" hh \" + remainingMinutes + \" mm \" + seconds + \" ss \");\r\n        }else {\r\n            duration = \"Invalid Value\";\r\n        }\r\n\r\n        return duration;\r\n    }\r\n\r\n    public static String getDurationString(int seconds){\r\n\r\n        String duration;\r\n\r\n        if(seconds >= 0){\r\n\r\n            int minutes = seconds / 60;\r\n\r\n            int remainingSeconds = seconds % 60;\r\n\r\n            duration = getDurationString(minutes,remainingSeconds);\r\n\r\n        }else{\r\n            duration = \"Invalid Value\";\r\n        }\r\n\r\n        return duration;\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/PersonAgeValidation.java",
        "fileName": "PersonAgeValidation.java",
        "topicName": "Person Age Validation",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Person Class and Age Validation",
              "Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.",
              "Write the following methods (instance methods):",
              "Method named getFirstName without any parameters, it needs to return the value of the firstName field.",
              "Method named getLastName without any parameters, it needs to return the value of the lastName field.",
              "Method named getAge without any parameters, it needs to return the value of the age field.",
              "Method named setFirstName with one parameter of type String, it needs to set the value of the firstName field.",
              "Method named setLastName with one parameter of type String, it needs to set the value of the lastName field.",
              "Method named setAge with one parameter of type int, it needs to set the value of the age field. If the parameter is less than 0 or greater than 100, it needs to set the age field value to 0.",
              "Method named isTeen without any parameters, it needs to return true if the value of the age field is greater than 12 and less than 20, otherwise, return false.",
              "Method named getFullName without any parameters, it needs to return the full name of the person.",
              "In case both firstName and lastName fields are empty, Strings return an empty String.",
              "In case lastName is an empty String, return firstName.",
              "In case firstName is an empty String, return lastName.",
              "To check if s String is empty, use the method isEmpty from the String class. For example, firstName.isEmpty() returns true if the String is empty or in other words, when the String does not contain any characters.",
              "TEST EXAMPLE",
              "TEST CODE:",
              "OUTPUT fullName= teen= false fullName= John teen= true fullName= John Smith",
              "NOTE: All methods should be defined as public NOT public static.",
              "NOTE: In total, you have to write 8 methods.",
              "NOTE: Do not add the main method to the solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge;\r\n\r\n/*\r\n\r\n* Person Class and Age Validation\r\nWrite a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.\r\n\r\nWrite the following methods (instance methods):\r\n\r\nMethod named getFirstName without any parameters, it needs to return the value of the firstName field.\r\n\r\nMethod named getLastName without any parameters, it needs to return the value of the lastName field.\r\n\r\nMethod named getAge without any parameters, it needs to return the value of the age field.\r\n\r\nMethod named setFirstName with one parameter of type String, it needs to set the value of the firstName field.\r\n\r\nMethod named setLastName with one parameter of type String, it needs to set the value of the lastName field.\r\n\r\nMethod named setAge with one parameter of type int, it needs to set the value of the age field. If the parameter is less than 0 or greater than 100, it needs to set the age field value to 0.\r\n\r\nMethod named isTeen without any parameters, it needs to return true if the value of the age field is greater than 12 and less than 20, otherwise, return false.\r\n\r\nMethod named getFullName without any parameters, it needs to return the full name of the person.\r\n\r\nIn case both firstName and lastName fields are empty, Strings return an empty String.\r\n\r\nIn case lastName is an empty String, return firstName.\r\n\r\nIn case firstName is an empty String, return lastName.\r\n\r\nTo check if s String is empty, use the method isEmpty from the String class. For example, firstName.isEmpty() returns true if the String is empty or in other words, when the String does not contain any characters.\r\n\r\n\r\n\r\nTEST EXAMPLE\r\n\r\nTEST CODE:\r\n\r\nPerson person = new Person();\r\nperson.setFirstName(\"\");   // firstName is set to empty string\r\nperson.setLastName(\"\");    // lastName is set to empty string\r\nperson.setAge(10);\r\nSystem.out.println(\"fullName= \" + person.getFullName());\r\nSystem.out.println(\"teen= \" + person.isTeen());\r\nperson.setFirstName(\"John\");    // firstName is set to John\r\nperson.setAge(18);\r\nSystem.out.println(\"fullName= \" + person.getFullName());\r\nSystem.out.println(\"teen= \" + person.isTeen());\r\nperson.setLastName(\"Smith\");    // lastName is set to Smith\r\nSystem.out.println(\"fullName= \" + person.getFullName());\r\nOUTPUT\r\n\r\nfullName=\r\nteen= false\r\nfullName= John\r\nteen= true\r\nfullName= John Smith\r\n\r\n\r\nNOTE: All methods should be defined as public NOT public static.\r\n\r\nNOTE: In total, you have to write 8 methods.\r\n\r\nNOTE: Do not add the main method to the solution code.\r\n*\r\n*\r\n*\r\n* */\r\n\r\npublic class PersonAgeValidation {\r\n\r\n    private String firstName;\r\n\r\n    private String lastName;\r\n\r\n    private int age;\r\n\r\n    public String getFirstName(){\r\n        return firstName;\r\n    }\r\n\r\n    public String getLastName(){\r\n        return lastName;\r\n    }\r\n\r\n    public int getAge(){\r\n        return age;\r\n    }\r\n\r\n    public void setFirstName(String firstName){\r\n        this.firstName = firstName;\r\n    }\r\n\r\n    public void setLastName(String lastName){\r\n        this.lastName = lastName;\r\n    }\r\n\r\n    public void setAge(int age){\r\n        if(age < 0 || age > 100){\r\n            this.age = 0;\r\n        }else{\r\n            this.age = age;\r\n        }\r\n    }\r\n\r\n    public boolean isTeen(){\r\n\r\n        boolean checkIfIsTeen = false;\r\n\r\n        if(getAge() > 12 && getAge() < 20){\r\n            checkIfIsTeen = true;\r\n        }\r\n\r\n        return checkIfIsTeen;\r\n    }\r\n\r\n    public String getFullName(){\r\n        String fullName = null;\r\n\r\n        if(getFirstName().isEmpty() && getLastName().isEmpty()){\r\n            fullName = \"\";\r\n        }else if(getFirstName().isEmpty()){\r\n            fullName = getLastName();\r\n        }else if(getLastName().isEmpty()){\r\n            fullName = getFirstName();\r\n        }else{\r\n            fullName = getFirstName() + \" \" + getLastName();\r\n        }\r\n\r\n        return fullName;\r\n    }\r\n}\r\n\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/SumCalculatorImplementationChallenge.java",
        "fileName": "SumCalculatorImplementationChallenge.java",
        "topicName": "Sum Calculator Implementation Challenge",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Classes Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Sum Calculator Implementation",
              "Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double.",
              "Write the following methods (instance methods):",
              "Method named getFirstNumber without any parameters, it needs to return the value of firstNumber field.",
              "Method named getSecondNumber without any parameters, it needs to return the value of secondNumber field.",
              "Method named setFirstNumber with one parameter of type double, it needs to set the value of the firstNumber field.",
              "Method named setSecondNumber with one parameter of type double, it needs to set the value of the secondNumberfield.",
              "Method named getAdditionResult without any parameters, it needs to return the result of adding the field values of firstNumber and secondNumber.",
              "Method named getSubtractionResult without any parameters, it needs to return the result of subtracting the field values of secondNumber from the firstNumber.",
              "Method named getMultiplicationResult without any parameters, it needs to return the result of multiplying the field values of firstNumber and secondNumber.",
              "Method named getDivisionResult without any parameters it needs to return the result of dividing the field values of firstNumber by the secondNumber. In case the value of secondNumber is 0 then return 0.",
              "TEST EXAMPLE",
              "TEST CODE:",
              "OUTPUT add= 9.0 subtract= 1.0 multiply= 0.0 divide= 0.0",
              "TIPS:",
              "add= 9.0 is printed because 5.0 + 4 is 9.0 subtract= 1.0 is printed because 5.0 - 4 is 1.0 multiply= 0.0 is printed because 5.25 * 0 is 0.0 divide= 0.0 is printed because secondNumber is set to 0",
              "NOTE: All methods should be defined as public NOT public static.",
              "NOTE: In total, you have to write 8 methods.",
              "NOTE: Do not add the main method to the solution code."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge;\r\n\r\n/*\r\n* Sum Calculator Implementation\r\nWrite a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double.\r\n\r\nWrite the following methods (instance methods):\r\n\r\nMethod named getFirstNumber without any parameters, it needs to return the value of firstNumber field.\r\n\r\nMethod named getSecondNumber without any parameters, it needs to return the value of secondNumber field.\r\n\r\nMethod named setFirstNumber with one parameter of type double, it needs to set the value of the firstNumber field.\r\n\r\nMethod named setSecondNumber with one parameter of type double, it needs to set the value of the secondNumberfield.\r\n\r\nMethod named getAdditionResult without any parameters, it needs to return the result of adding the field values of firstNumber and secondNumber.\r\n\r\nMethod named getSubtractionResult without any parameters, it needs to return the result of subtracting the field values of secondNumber from the firstNumber.\r\n\r\nMethod named getMultiplicationResult without any parameters, it needs to return the result of multiplying the field values of firstNumber and secondNumber.\r\n\r\nMethod named getDivisionResult without any parameters it needs to return the result of dividing the field values of firstNumber by the secondNumber. In case the value of secondNumber is 0 then return 0.\r\n\r\n\r\n\r\nTEST EXAMPLE\r\n\r\nTEST CODE:\r\n\r\nSimpleCalculator calculator = new SimpleCalculator();\r\ncalculator.setFirstNumber(5.0);\r\ncalculator.setSecondNumber(4);\r\nSystem.out.println(\"add= \" + calculator.getAdditionResult());\r\nSystem.out.println(\"subtract= \" + calculator.getSubtractionResult());\r\ncalculator.setFirstNumber(5.25);\r\ncalculator.setSecondNumber(0);\r\nSystem.out.println(\"multiply= \" + calculator.getMultiplicationResult());\r\nSystem.out.println(\"divide= \" + calculator.getDivisionResult());\r\nOUTPUT\r\n\r\nadd= 9.0\r\nsubtract= 1.0\r\nmultiply= 0.0\r\ndivide= 0.0\r\nTIPS:\r\n\r\nadd= 9.0 is printed because 5.0 + 4 is 9.0\r\n\r\nsubtract= 1.0 is printed because 5.0 - 4 is 1.0\r\n\r\nmultiply= 0.0 is printed because 5.25 * 0 is 0.0\r\n\r\ndivide= 0.0 is printed because secondNumber is set to 0\r\n\r\n\r\n\r\nNOTE: All methods should be defined as public NOT public static.\r\n\r\nNOTE: In total, you have to write 8 methods.\r\n\r\nNOTE: Do not add the main method to the solution code.\r\n* */\r\n\r\npublic class SumCalculatorImplementationChallenge {\r\n\r\n    private double firstNumber;\r\n    private double secondNumber;\r\n\r\n    public double getFirstNumber(){\r\n        return firstNumber;\r\n    }\r\n\r\n    public double getSecondNumber(){\r\n        return secondNumber;\r\n    }\r\n\r\n    public void setFirstNumber(double firstNumber){\r\n        this.firstNumber = firstNumber;\r\n    }\r\n\r\n    public void setSecondNumber(double secondNumber){\r\n        this.secondNumber = secondNumber;\r\n    }\r\n\r\n    public double getAdditionResult(){\r\n        double additionResult = getFirstNumber() + getSecondNumber();\r\n        return additionResult;\r\n    }\r\n\r\n    public double getSubtractionResult(){\r\n        double subtractionResult = getFirstNumber() - getSecondNumber();\r\n        return subtractionResult;\r\n    }\r\n\r\n\r\n    public double getMultiplicationResult(){\r\n        double multiplicationResult = getFirstNumber() * getSecondNumber();\r\n        return multiplicationResult;\r\n    }\r\n\r\n    public double getDivisionResult (){\r\n        double divisionResult = 0.0;\r\n\r\n        if(getSecondNumber() == 0){\r\n            divisionResult = 0.0;\r\n        }else{\r\n            divisionResult =  getFirstNumber() / getSecondNumber();\r\n        }\r\n\r\n        return divisionResult;\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_1_ConstructorConcept/ConstructorConcept.java",
        "fileName": "ConstructorConcept.java",
        "topicName": "Constructor Concept",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "A constructor is used in the creation of an object.",
              "It is a special type of code block that has a specific name and parameters, much like a method.",
              "It has the same name as the class itself, and it doesn't return any values.",
              "It should never include a return type from a constructor, not even void.",
              "It should have an appropriate access modifier to control the creation of new instances of the class, using this constructor.",
              "Constructor should essentially be used to set the values of the fields in the instance of a class.",
              "In addition, add other initialization code you want to perform, in the constructor.",
              "A constructor is created for us, implicitly, by Java.",
              "Implicitly called in Java means we can't see the code in the source, but it's in the byte code, generated during the compilation process.",
              "If a class contains no constructor declarations, then a default constructor is implicitly declared.",
              "This constructor has no parameters and is often called the no-args (no arguments) constructor.",
              "If a class contains any other constructor declarations, then a default constructor is NOT implicitly declared.",
              "The purpose of the constructor is to essentially initialize the object",
              "It's only ever called once, at the start, when the object is created.",
              "A class can have one or many constructors, one of which can be a no args constructor.",
              "Constructor Overloading",
              "Constructor overloading is declaring multiple constructors with different parameters.",
              "The number of parameters can be different between constructors.",
              "If the number of parameters is the same between two constructors, their types, or order of the types must differ.",
              "Constructor chaining is when one constructor explicitly calls another overloaded constructor.",
              "Constructor chaining can be used within constructors and it is completely optional",
              "The special statement this() is used to execute another constructor, passing it arguments if required. And this() must be the first executable statement if it's used from another constructor.",
              "The this() keyword can be parameterised or non - parameterised.",
              "The this()keyword calls which constructor, is determined by the arguments passed inside this().",
              "The type and number of arguments passed inside the this() keyword must match one of the defined constructors.",
              "Once we start adding more complex code, it's good to create multiple constructors",
              "And in that situation, initialization of the instance variables can happen in the one constructor.",
              "All other constructors can call that major constructor, passing default values or null references as arguments.",
              "That's a good way of doing things, and it often leads to good coding because it avoids having to duplicate code by duplicating initialization in more than one place."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "A constructor is a special method used to initialise a new object. It runs ONCE when the object is created with 'new'.",
              "Constructors have the SAME name as the class and NO return type (not even void).",
              "If you don't define any constructors, Java provides a default no-args constructor implicitly.",
              "If you define ANY constructor explicitly, Java does NOT provide the default constructor — you must define it yourself if needed.",
              "Constructor overloading: you can define multiple constructors with different parameter lists — Java picks the right one based on arguments passed.",
              "Constructor chaining: one constructor calls another using 'this(args...)'. The this() call MUST be the FIRST statement in the constructor.",
              "A class can have both 'this()' chaining (calls another constructor in same class) and 'super()' chaining (calls parent constructor), but never BOTH in the same constructor.",
              "Best practice: do all initialisation in ONE \"master\" constructor and have other constructors chain to it using this(). This avoids duplicating initialisation code.",
              "Best practice: don't call setter methods from constructors — assign field values directly to guarantee correctness."
            ]
          }
        ],
        "inlineComments": [
          "this() cannot be the last statement of the body, if this() is put at last, then the compiler will throw an error \"Call to 'this()' must be first statement in constructor body\"",
          "Explicit constructor with parameters is called",
          "ConstructorConcept constructorConcept1 = new ConstructorConcept(\"123456789\",1000.0,\"Navneet Jha\",\"navneet.jha500@gmail.com\",\"(+91) 8093958396\");",
          "Constructor chaining example, where a no-args constructor will call the other args constructor using this keyword, where all the parameters required by the second constructor will be passed to this() keyword",
          "As per the below code. the behaviour will be :-",
          "As this() should always be the first line in the constructor, when the no - args constructor is called, then as per the flow, it then calls, the args constructor using this() and once the args constructor code block is executed, the controls then comes back to the no-args constructor",
          "As this() should always be the first line in the constructor, when the parameterised constructor with 4 arguments is called, then as per the flow, it then calls, the args constructor which has 5 arguments using this() and once the args constructor code block is executed, the controls then comes back to the parameterised constructor with 4 arguments"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_1_ConstructorConcept;\r\n// A constructor is a special method used to initialise a new object. It runs ONCE when the object is created with 'new'.\n// Constructors have the SAME name as the class and NO return type (not even void).\n// If you don't define any constructors, Java provides a default no-args constructor implicitly.\n// If you define ANY constructor explicitly, Java does NOT provide the default constructor — you must define it yourself if needed.\n// Constructor overloading: you can define multiple constructors with different parameter lists — Java picks the right one based on arguments passed.\n// Constructor chaining: one constructor calls another using 'this(args...)'. The this() call MUST be the FIRST statement in the constructor.\n// A class can have both 'this()' chaining (calls another constructor in same class) and 'super()' chaining (calls parent constructor), but never BOTH in the same constructor.\n// Best practice: do all initialisation in ONE \"master\" constructor and have other constructors chain to it using this(). This avoids duplicating initialisation code.\n// Best practice: don't call setter methods from constructors — assign field values directly to guarantee correctness.\r\n/*\r\n* A constructor is used in the creation of an object.\r\n\r\nIt is a special type of code block that has a specific name and parameters, much like a method.\r\n\r\nIt has the same name as the class itself, and it doesn't return any values.\r\n\r\nIt should never include a return type from a constructor, not even void.\r\n\r\nIt should have an appropriate access modifier to control the creation of\r\nnew instances of the class, using this constructor.\r\n\r\nConstructor should essentially be used to set the values\r\nof the fields in the instance of a class.\r\n\r\nIn addition, add other initialization code you want to perform, in the constructor.\r\n\r\nA constructor is created for us, implicitly, by Java.\r\n\r\nImplicitly called in Java means we can't see the code in the source,\r\nbut it's in the byte code, generated during the compilation process.\r\n\r\nIf a class contains no constructor declarations, then a default constructor is implicitly declared.\r\n\r\nThis constructor has no parameters and is often called the no-args (no arguments) constructor.\r\nIf a class contains any other constructor declarations, then a default constructor\r\nis NOT implicitly declared.\r\n\r\nThe purpose of the constructor is to essentially initialize the object\r\nIt's only ever called once, at the start, when the object is created.\r\nA class can have one or many constructors, one of which can be a no args constructor.\r\n\r\nConstructor Overloading\r\n\r\nConstructor overloading is declaring multiple constructors with different parameters.\r\nThe number of parameters can be different between constructors.\r\n\r\nIf the number of parameters is the same between two constructors, their types, or order of the types must differ.\r\n\r\n\r\nConstructor chaining is when one constructor explicitly calls another overloaded constructor.\r\n\r\nConstructor chaining can be used within constructors and it is completely optional\r\n\r\nThe special statement this() is used to execute another constructor,\r\npassing it arguments if required. And this() must be the first executable\r\nstatement if it's used from another constructor.\r\n\r\nThe this() keyword can be parameterised or non - parameterised.\r\nThe this()keyword calls which constructor, is determined\r\nby the arguments passed inside this().\r\n\r\nThe type and number of arguments passed inside the this() keyword must match one of the defined constructors.\r\n\r\nOnce we start adding more complex code, it's good to create multiple constructors\r\n\r\nAnd in that situation, initialization of the instance variables can happen in the one\r\nconstructor.\r\nAll other constructors can call that major constructor, passing default values or null references as arguments.\r\n\r\nThat's a good way of doing things, and it often leads to good coding because it avoids\r\nhaving to duplicate code by duplicating initialization in more than one place.\r\n\r\n*/\r\n\r\npublic class ConstructorConcept {\r\n\r\n    private String accountNumber;\r\n    private double accountBalance;\r\n    private String customerName;\r\n    private String email;\r\n    private String  phoneNumber;\r\n\r\n    /*\r\n    * Creation of constructor\r\n    *\r\n    * Rules for creating a constructor :-\r\n    *\r\n    * It's name has to be the same as the class\r\n    * Two, it has no return type, not even void.\r\n    *\r\n    *  The general rule of thumb is, it's always better to assign the values directly to the field,\r\n    * rather than calling the setter in a constructor.\r\n    * This will guarantee that the instance variable values are set properly\r\n    * The general rule of thumb with constructors is, don't call setters or any other method other than\r\n    * another constructor, within those constructors.\r\n    * */\r\n\r\n    /*\r\n    Access modifier :- public has also been defined for the constructor\r\n    * Explicit constructor without any parameters or arguments\r\n    * */\r\n    public ConstructorConcept(String accountNumber,double accountBalance, String customerName, String email, String phoneNumber){\r\n        System.out.println(\"Constructor with 5 arguments is called\");\r\n        this.accountNumber = accountNumber;\r\n        this.accountBalance = accountBalance;\r\n        this.customerName = customerName;\r\n        this.email = email;\r\n        this.phoneNumber = phoneNumber;\r\n    }\r\n\r\n    public ConstructorConcept(String accountNumber, String customerName, String email, String phoneNumber){\r\n        this(accountNumber,100.00,customerName,email,phoneNumber);\r\n        System.out.println(\"Constructor with 4 Arguments called\");\r\n    }\r\n\r\n\r\n    public ConstructorConcept(){\r\n        this(\"1234567890\",5000.0,\"Navneet Jha\",\"puttu.jha500@gmail.com\",\"(+91) 8093958396\");\r\n        System.out.println(\"Empty Constructor Called\");\r\n        // this() cannot be the last statement of the body, if this() is put at last, then the compiler will throw an error \"Call to 'this()' must be first statement in constructor body\"\r\n      //  this(\"123456789\",1000.0,\"Navneet Jha\",\"navneet.jha500@gmail.com\",\"(+91) 8093958396\");\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n    public String getAccountNumber() {\r\n        return accountNumber;\r\n    }\r\n\r\n    public void setAccountNumber(String accountNumber) {\r\n        this.accountNumber = accountNumber;\r\n    }\r\n\r\n    public double getAccountBalance() {\r\n        return accountBalance;\r\n    }\r\n\r\n    public void setAccountBalance(double accountBalance) {\r\n        this.accountBalance = accountBalance;\r\n    }\r\n\r\n    public String getCustomerName() {\r\n        return customerName;\r\n    }\r\n\r\n    public void setCustomerName(String customerName) {\r\n        this.customerName = customerName;\r\n    }\r\n\r\n    public String getEmail() {\r\n        return email;\r\n    }\r\n\r\n    public void setEmail(String email) {\r\n        this.email = email;\r\n    }\r\n\r\n    public String getPhoneNumber() {\r\n        return phoneNumber;\r\n    }\r\n\r\n    public void setPhoneNumber(String phoneNumber) {\r\n        this.phoneNumber = phoneNumber;\r\n    }\r\n\r\n    public void depositFunds(double depositAmount){\r\n        accountBalance = accountBalance + depositAmount;\r\n        System.out.println(\"Deposit of $\" + depositAmount + \" made. New balance is $\" + accountBalance);\r\n    }\r\n\r\n    public void withdrawFunds(double withdrawalAmount){\r\n        if(withdrawalAmount > accountBalance){\r\n            System.out.println(\"Insufficient funds in your account. You have only $\" + accountBalance + \" in your account\");\r\n        }else if(withdrawalAmount <= accountBalance){\r\n            accountBalance = accountBalance - withdrawalAmount;\r\n            System.out.println(\"Withdrawal of $\" + withdrawalAmount + \" processed, Remaining balance = $\" + accountBalance);\r\n        }\r\n    }\r\n\r\n    public void printBankAccountHolderDetails(){\r\n        System.out.println(\"Name :- \" + getCustomerName());\r\n        System.out.println(\"Balance :- \" + getAccountBalance());\r\n        System.out.println(\"Account Number :- \" + getAccountNumber());\r\n        System.out.println(\"Email :- \" + getEmail());\r\n        System.out.println(\"Phone Number :- \" + getPhoneNumber());\r\n    }\r\n\r\n\r\n    public static void main(String[] args) {\r\n\r\n   /* So, when the keyword new is typed, and the name of the class, and then parentheses, this is actually calling that implicit constructor, if no explicit constructor is defined.\r\n      If no constructor is explicitly created in the account class, Java creates one which is called the default constructor. */\r\n\r\n   /* This code is actually calling that special constructor that creates the class. Its purpose is to create the object from the class.*/\r\n\r\n\r\n/*\r\n        ConstructorConcept constructorConcept = new ConstructorConcept();\r\n\r\n        constructorConcept.setAccountNumber(\"123456789\");\r\n        constructorConcept.setAccountBalance(1000.0);\r\n        constructorConcept.setCustomerName(\"Navneet Jha\");\r\n        constructorConcept.setEmail(\"navneet.jha500@gmail.com\");\r\n        constructorConcept.setPhoneNumber(\"(+91) 8093958396\");\r\n\r\n        constructorConcept.printBankAccountHolderDetails();\r\n\r\n        constructorConcept.withdrawFunds(100.0);\r\n        constructorConcept.depositFunds(250.00);\r\n        constructorConcept.withdrawFunds(50.00);\r\n\r\n        constructorConcept.withdrawFunds(200.00);\r\n\r\n        constructorConcept.depositFunds(100.00);\r\n        constructorConcept.withdrawFunds(45.55);\r\n        constructorConcept.withdrawFunds(54.46);\r\n*/\r\n\r\n        // Explicit constructor with parameters is called\r\n     //   ConstructorConcept constructorConcept1 = new ConstructorConcept(\"123456789\",1000.0,\"Navneet Jha\",\"navneet.jha500@gmail.com\",\"(+91) 8093958396\");\r\n\r\n        // Constructor chaining example, where a no-args constructor will call the other args constructor using this keyword, where all the parameters required by the second constructor will be passed to this() keyword\r\n\r\n\r\n        // As per the below code. the behaviour will be :-\r\n        // As this() should always be the first line in the constructor, when the no - args constructor is called, then as per the flow, it then calls, the args constructor using this() and once the args constructor code block is executed, the controls then comes back to the no-args constructor\r\n\r\n/*\r\n        ConstructorConcept constructorConcept1 = new ConstructorConcept();\r\n\r\n        constructorConcept1.printBankAccountHolderDetails();\r\n\r\n        constructorConcept1.withdrawFunds(100.0);\r\n        constructorConcept1.depositFunds(250.00);\r\n        constructorConcept1.withdrawFunds(50.00);\r\n\r\n        constructorConcept1.withdrawFunds(200.00);\r\n\r\n        constructorConcept1.depositFunds(100.00);\r\n        constructorConcept1.withdrawFunds(45.55);\r\n        constructorConcept1.withdrawFunds(54.46);\r\n*/\r\n\r\n\r\n        // As per the below code. the behaviour will be :-\r\n        // As this() should always be the first line in the constructor, when the parameterised constructor with 4 arguments is called, then as per the flow, it then calls, the args constructor which has 5 arguments using this() and once the args constructor code block is executed, the controls then comes back to the parameterised constructor with 4 arguments\r\n\r\n        ConstructorConcept constructorConcept2 = new ConstructorConcept(\"123456789001\",\"Navneet Puttu\",\"puttu.jha@gmail.com\",\"(+91) 9834876330\");\r\n\r\n        constructorConcept2.printBankAccountHolderDetails();\r\n\r\n        constructorConcept2.withdrawFunds(100.0);\r\n        constructorConcept2.depositFunds(250.00);\r\n        constructorConcept2.withdrawFunds(50.00);\r\n\r\n        constructorConcept2.withdrawFunds(200.00);\r\n\r\n        constructorConcept2.depositFunds(100.00);\r\n        constructorConcept2.withdrawFunds(45.55);\r\n        constructorConcept2.withdrawFunds(54.46);\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/SuperKeywordUseExample.java",
        "fileName": "SuperKeywordUseExample.java",
        "topicName": "Super Keyword Use Example",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class."
            ]
          }
        ],
        "inlineComments": [
          "overrides methods from the parent class",
          "Without adding the keyword super in this case, it would end up being a recursive call.",
          "What that means is that the method would call itself forever, or until memory is fully used, crashing the program. That's why we need the super keyword - so that we can call a method with the same name from a parent class."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;\r\n\r\n/*\r\n* The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.\r\n*\r\n*  */\r\npublic class SuperKeywordUseExample { // parent class also known as super class\r\n\r\n    public void printMethod() {\r\n        System.out.println(\"Printed in SuperClass.\");\r\n    }\r\n}\r\n\r\n    class SubClass extends SuperKeywordUseExample{ // subclass also known as child class\r\n\r\n    // overrides methods from the parent class\r\n        @Override\r\n        public void printMethod() {\r\n            super.printMethod(); // calls the method in the SuperClass (parent)\r\n            // Without adding the keyword super in this case, it would end up being a recursive call.\r\n            // What that means is that the method would call itself forever, or until memory is fully used, crashing the program. That's why we need the super keyword - so that we can call a method with the same name from a parent class.\r\n            System.out.println(\"Printed in SubClass.\");\r\n        }\r\n    }\r\n\r\n    class MainClass {\r\n\r\n        public static void main(String[] args) {\r\n            SubClass s = new SubClass();\r\n            s.printMethod();\r\n        }\r\n    }\r\n\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisAndSuper.java",
        "fileName": "ThisAndSuper.java",
        "topicName": "This And Super",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "super keyword :-",
              "1) The keyword super is used to access or call the parent class members (both variables and methods).",
              "this keyword :-",
              "1) The keyword this, is used to call the current class members (both variables and methods).",
              "2) this keyword is required when we have a parameter with the same name as an instance variable or field.",
              "NOTE: Both the keywords can be used anywhere in a class except for static elements such as a static method.",
              "Any attempt to do so will lead to compile time errors.",
              "this() method call :-",
              "1) this() parentheses is used to call a constructor from another overloaded constructor in the same class.",
              "2) The call to this() parentheses can only be used in a constructor, and it must be the first statement in a constructor.",
              "3) It's used with constructor chaining, in other words, when one constructor calls another constructor, and it helps to reduce duplicated code.",
              "super() method call :-",
              "1) The only way to call a parent constructor is by calling super() parentheses, which calls the parent constructor.",
              "2) The Java compiler puts a default call to super() parentheses if we don't add it, and it's always a call to the no argument constructor, which is inserted by the compiler.",
              "In other words, a call to the constructor that hasn't got any arguments.",
              "3) The call to super() parentheses must be the first statement in each constructor.",
              "Note :- 1) this() and super() keyword are known as calls, since they look like regular method calls, although they are used to call constructors",
              "2) A constructor can have a call to super() or this(), but never both"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "'this' and 'super' are two special Java keywords that refer to objects in the class hierarchy.",
              "'this' refers to the CURRENT object — the instance the method/constructor is currently executing in.",
              "'super' refers to the PARENT class (superclass) of the current class.",
              "'this.fieldName' — accesses an instance field on the current object. Needed when a parameter shadows a field (same name).",
              "'super.methodName()' — calls the parent class's version of a method (used in method overriding).",
              "'this()' — calls another constructor in the SAME class. Must be the FIRST statement in the constructor. Used for constructor chaining.",
              "'super()' — calls the parent class constructor. Must be the FIRST statement in the constructor. Java inserts a no-arg super() call automatically if you don't write one.",
              "You can use EITHER this() OR super() in a constructor, but NEVER BOTH — each must be the first statement, and there can only be one first statement.",
              "Neither this() nor super() can be used inside static methods — they require an object instance."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;\r\n// 'this' and 'super' are two special Java keywords that refer to objects in the class hierarchy.\n// 'this' refers to the CURRENT object — the instance the method/constructor is currently executing in.\n// 'super' refers to the PARENT class (superclass) of the current class.\n// 'this.fieldName' — accesses an instance field on the current object. Needed when a parameter shadows a field (same name).\n// 'super.methodName()' — calls the parent class's version of a method (used in method overriding).\n// 'this()' — calls another constructor in the SAME class. Must be the FIRST statement in the constructor. Used for constructor chaining.\n// 'super()' — calls the parent class constructor. Must be the FIRST statement in the constructor. Java inserts a no-arg super() call automatically if you don't write one.\n// You can use EITHER this() OR super() in a constructor, but NEVER BOTH — each must be the first statement, and there can only be one first statement.\n// Neither this() nor super() can be used inside static methods — they require an object instance.\r\n/*\r\n* super keyword :-\r\n*\r\n* 1) The keyword super is used to access or call the parent class members (both variables and methods).\r\n*\r\n* this keyword :-\r\n*\r\n* 1) The keyword this, is used to call the current class members (both variables and methods).\r\n* 2) this keyword is required when we have a parameter with the same name as an instance variable or field.\r\n*\r\n* NOTE: Both the keywords can be used anywhere in a class except for static elements such as a static method.\r\n* Any attempt to do so will lead to compile time errors.\r\n*\r\n* this() method call :-\r\n*\r\n* 1) this() parentheses is used to call a constructor from another overloaded constructor in the same class.\r\n* 2) The call to this() parentheses can only be used in a constructor, and it must be the first statement in a constructor.\r\n* 3) It's used with constructor chaining, in other words, when one constructor calls another constructor, and it helps to reduce duplicated code.\r\n*\r\n* super() method call :-\r\n*\r\n* 1) The only way to call a parent constructor is by calling super() parentheses, which calls the parent constructor.\r\n* 2) The Java compiler puts a default call to super() parentheses if we don't add it, and it's always a call to the no argument constructor, which is inserted by the compiler.\r\n*    In other words, a call to the constructor that hasn't got any arguments.\r\n* 3) The call to super() parentheses must be the first statement in each constructor.\r\n*\r\n* Note :- 1) this() and super() keyword are known as calls, since they look like regular method calls, although they are used to call constructors\r\n*         2) A constructor can have a call to super() or this(), but never both\r\n* */\r\npublic class ThisAndSuper {\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisKeyWordUseExample.java",
        "fileName": "ThisKeyWordUseExample.java",
        "topicName": "This Key Word Use Example",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "The keyword this is commonly used within constructors and setters and is optionally used within getters.",
              "In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there."
            ]
          }
        ],
        "inlineComments": [
          "this keyword is required, same parameter name as the field",
          "this is optional"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;\r\n\r\n\r\n/*\r\n* The keyword this is commonly used within constructors and setters and is optionally used within getters.\r\n*\r\n* In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there.\r\n* */\r\n\r\npublic class ThisKeyWordUseExample {\r\n\r\n    private String color;\r\n\r\n    public ThisKeyWordUseExample(String color){\r\n        // this keyword is required, same parameter name as the field\r\n        this.color = color;\r\n    }\r\n\r\n    public String getColor(){\r\n        // this is optional\r\n        return color;\r\n    }\r\n\r\n    public void setColor(String color){\r\n        // this keyword is required, same parameter name as the field\r\n        this.color = color;\r\n    }\r\n}\r\n\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/Super_Call_Example/GoodConstructorSuperCallExample.java",
        "fileName": "GoodConstructorSuperCallExample.java",
        "topicName": "Good Constructor Super Call Example",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "The 1st constructor is calling the 2nd constructor.",
              "The 2nd constructor calls the parent constructor with parameters x and y.",
              "The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor will initialize the width and height variables. Here, as you can see in this code, Both the super() and this() calls are made, but in different constructors."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.Super_Call_Example;\r\n\r\n/*\r\n* The 1st constructor is calling the 2nd constructor.\r\n* The 2nd constructor calls the parent constructor with parameters x and y.\r\n* The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor\r\n* will initialize the width and height variables. Here, as you can see in this code,\r\n* Both the super() and this() calls are made, but in different constructors.\r\n*\r\n* */\r\n\r\npublic class GoodConstructorSuperCallExample {\r\n\r\n    private int x;\r\n    private int y;\r\n\r\n    public GoodConstructorSuperCallExample(int x, int y){\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n\r\n}\r\n\r\nclass AnotherGoodConstructorSuperCallExample extends GoodConstructorSuperCallExample {\r\n\r\n    private int width;\r\n    private int height;\r\n\r\n    public AnotherGoodConstructorSuperCallExample(int x, int y){\r\n        this(x,y,0,0);\r\n    }\r\n\r\n    public AnotherGoodConstructorSuperCallExample(int x, int y, int width, int height){\r\n        super(x,y);\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/BadConstructorThisCallExample.java",
        "fileName": "BadConstructorThisCallExample.java",
        "topicName": "Bad Constructor This Call Example",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Here, there are three constructors.",
              "All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values.",
              "This is a bad way to write constructors like this."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "BAD PRACTICE — Repeated initialisation in every constructor:",
              "When each constructor separately initialises all fields, the same initialisation code is duplicated.",
              "If you ever need to change the default value or add validation, you must update EVERY constructor separately — error-prone.",
              "This is why constructor chaining with this() is preferred — it centralises initialisation in one place."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.This_Call_Example;\r\n// BAD PRACTICE — Repeated initialisation in every constructor:\n// When each constructor separately initialises all fields, the same initialisation code is duplicated.\n// If you ever need to change the default value or add validation, you must update EVERY constructor separately — error-prone.\n// This is why constructor chaining with this() is preferred — it centralises initialisation in one place.\r\n/*\r\n* Here, there are three constructors.\r\n* All three constructors initialize variables. But There's repeated code in each constructor,\r\n* The variables are initialized in each constructor with some default values.\r\n* This is a bad way to write constructors like this.\r\n* */\r\n\r\npublic class BadConstructorThisCallExample {\r\n\r\n    private int x;\r\n    private int y;\r\n    private int width;\r\n    private int height;\r\n\r\n    public BadConstructorThisCallExample() {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.width = 0;\r\n        this.height = 0;\r\n    }\r\n\r\n    public BadConstructorThisCallExample(int width, int height) {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n\r\n    public BadConstructorThisCallExample(int x, int y, int width, int height) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/GoodConstructorThisCallExample.java",
        "fileName": "GoodConstructorThisCallExample.java",
        "topicName": "Good Constructor This Call Example",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
              "In other words, The 3rd constructor does all the work.",
              "The variables will always be initialized in the 3rd constructor, and only there.",
              "The last constructor has the responsibility to initialize the variables.",
              "This is known as constructor chaining."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "GOOD PRACTICE — Constructor chaining with this():",
              "The no-arg constructor calls the 2-arg constructor. The 2-arg constructor calls the 4-arg constructor.",
              "The \"master\" constructor (4-arg) does all the actual field assignment.",
              "Only ONE place in the code initialises the fields — changes are made once, not everywhere.",
              "This is the \"constructor chain\" pattern — a clean, DRY (Don't Repeat Yourself) approach to constructors."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.This_Call_Example;\r\n// GOOD PRACTICE — Constructor chaining with this():\n// The no-arg constructor calls the 2-arg constructor. The 2-arg constructor calls the 4-arg constructor.\n// The \"master\" constructor (4-arg) does all the actual field assignment.\n// Only ONE place in the code initialises the fields — changes are made once, not everywhere.\n// This is the \"constructor chain\" pattern — a clean, DRY (Don't Repeat Yourself) approach to constructors.\r\n/*\r\n* Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor,\r\n* and then the 3rd constructor actually initializes the instance variables.\r\n* In other words, The 3rd constructor does all the work.\r\n* The variables will always be initialized in the 3rd constructor, and only there.\r\n* The last constructor has the responsibility to initialize the variables.\r\n* This is known as constructor chaining.\r\n* */\r\n\r\npublic class GoodConstructorThisCallExample {\r\n\r\n    private int x;\r\n    private int y;\r\n    private int width;\r\n    private int height;\r\n\r\n    public GoodConstructorThisCallExample() {\r\n        this(0,0);\r\n    }\r\n\r\n    public GoodConstructorThisCallExample(int width, int height) {\r\n       this(0,0,width,height);\r\n    }\r\n\r\n\r\n    public GoodConstructorThisCallExample(int x, int y, int width, int height) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_5_Constructors_Challenge/Customer.java",
        "fileName": "Customer.java",
        "topicName": "Customer",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Create a new class, called Customer, with three fields: name. credit limit. and email address.",
              "Create the getter methods only for each field. You don't need to create the setters.",
              "Create three constructors for this class: First, create a constructor for all three fields which should assign the arguments directly to the instance fields. Second, create a no-args constructor that calls another constructor, passing some literal values for each argument. And lastly, create a constructor with just the name and email parameters, which also calls another constructor."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_5_Constructors_Challenge;\r\n\r\n\r\n/*\r\n\r\nCreate a new class, called Customer, with three fields: name. credit limit. and email address.\r\n\r\nCreate the getter methods only for each field. You don't need to create the setters.\r\n\r\nCreate three constructors for this class: First, create a constructor for all three fields which should\r\n\r\nassign the arguments directly to the instance fields. Second, create a no-args constructor\r\n\r\nthat calls another constructor, passing some literal values for each argument. And lastly,\r\n\r\ncreate a constructor with just the name and email parameters, which also calls another constructor.\r\n\r\n */\r\n\r\npublic class Customer {\r\n\r\n    private String name;\r\n    private double creditLimit;\r\n    private String emailAddress;\r\n\r\n    public Customer() {\r\n        this(\"Navneet\", \"navneet.jha@gmail.com\");\r\n    }\r\n\r\n    public Customer(String name, String emailAddress) {\r\n       this(name,1200000.00,emailAddress);\r\n    }\r\n\r\n    public Customer(String name, double creditLimit, String emailAddress) {\r\n        this.name = name;\r\n        this.creditLimit = creditLimit;\r\n        this.emailAddress = emailAddress;\r\n    }\r\n\r\n    public String getName() {\r\n        return name;\r\n    }\r\n\r\n    public double getCreditLimit() {\r\n        return creditLimit;\r\n    }\r\n\r\n    public String getEmailAddress() {\r\n        return emailAddress;\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Customer customer = new Customer();\r\n\r\n        System.out.println(customer.getName());\r\n        System.out.println(customer.getCreditLimit());\r\n        System.out.println(customer.getEmailAddress());\r\n\r\n        Customer customer1 = new Customer(\"Puttu\",\"puttujha500@gmail.com\");\r\n\r\n        System.out.println(customer1.getName());\r\n        System.out.println(customer1.getCreditLimit());\r\n        System.out.println(customer1.getEmailAddress());\r\n\r\n        Customer customer2 = new Customer(\"NaviPut\",1000000.00,\"naviput_gmail.com\");\r\n\r\n\r\n        System.out.println(customer2.getName());\r\n        System.out.println(customer2.getCreditLimit());\r\n        System.out.println(customer2.getEmailAddress());\r\n\r\n\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/House.java",
        "fileName": "House.java",
        "topicName": "House",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Reference Object Instance",
        "headerComments": [
          {
            "type": "generated",
            "lines": [
              "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance.",
              "Review the class House and understand its key responsibilities.",
              "This example defines 2 methods; trace method behavior step by step."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance.Example;\r\n\r\npublic class House {\r\n\r\n    private String color;\r\n\r\n    public String getColor() {\r\n        return color;\r\n    }\r\n\r\n    public void setColor(String color) {\r\n        this.color = color;\r\n    }\r\n\r\n    public House(String color) {\r\n        this.color = color;\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/Main.java",
        "fileName": "Main.java",
        "topicName": "Main",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Reference Object Instance",
        "headerComments": [],
        "inlineComments": [
          "A reference named \"blueHouse\" of type House is created which is pointing to an object(which got created by new keyword, which in turns calls a parameterised constructor) of type House",
          "In this object, the instance variable color of Class House is set to \"blue\" using parameterised constructor called while creating new object using new keyword",
          "This line will print blue, as the reference blueHouse is pointing to the house object, which contains the instance variable color value as \"blue\"",
          "This line will also print blue, as anotherHouse reference is a copy of blueHouse reference, and both of them are still pointing to the house object, which contains the instance variable color value as \"blue\"",
          "Here, anotherHouse reference is pointing to the same object (which was created earlier). With the help of the reference, the instance variable color value of the House object has been changed to \"red\"",
          "As anotherHouse reference has changed the value of the instance variable of the object (which was created earlier), and blueHouse reference is also pointing to the same object, hence the output of the below line of code would be \"red\"",
          "Output of the below line of code would also be \"red\" as anotherHouse reference is pointing to the object (which was created earlier), and value of the instance variable color of the House object is \"red\"",
          "A new object gets created using the new keyword which calls the parameterised constructor which in turn sets the value of the instance variable color of the newly created object as \"green\"",
          "A new reference named greenhouse of type House gets created which is pointing to the newly created object which has instance value of color field set to \"green\".",
          "Here anotherHouse reference refers to the greenHouse reference, latter of which is pointing to the newly created object which has instance value of color field set to \"green\".",
          "The output of the below line will be \"red\", as the reference blueHouse is still referring to the old object, whose instance variable color value is set to \"red\"",
          "The output of the below line will be \"green\", as the reference greenHouse is pointing towards the newly created object, whose instance variable color value is set to \"green\"",
          "Since, the anotherHouse reference is pointing towards the greenHouse reference,  pointing towards the newly created object, whose instance variable color value is set to \"green\" the output of the below line of code would be \"green\""
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance.Example;\r\n\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        // A reference named \"blueHouse\" of type House is created which is pointing to an object(which got created by new keyword, which in turns calls a parameterised constructor) of type House\r\n        // In this object, the instance variable color of Class House is set to \"blue\" using parameterised constructor called while creating new object using new keyword\r\n        House blueHouse = new House(\"blue\");\r\n        House anotherHouse = blueHouse;\r\n\r\n        // This line will print blue, as the reference blueHouse is pointing to the house object, which contains the instance variable color value as \"blue\"\r\n        System.out.println(blueHouse.getColor());\r\n        // This line will also print blue, as anotherHouse reference is a copy of blueHouse reference, and both of them are still pointing to the house object, which contains the instance variable color value as \"blue\"\r\n        System.out.println(anotherHouse.getColor());\r\n\r\n        // Here, anotherHouse reference is pointing to the same object (which was created earlier). With the help of the reference, the instance variable color value of the House object has been changed to \"red\"\r\n        anotherHouse.setColor(\"red\");\r\n        // As anotherHouse reference has changed the value of the instance variable of the object (which was created earlier), and blueHouse reference is also pointing to the same object, hence the output of the below line of code would be \"red\"\r\n        System.out.println(blueHouse.getColor());\r\n        // Output of the below line of code would also be \"red\" as anotherHouse reference is pointing to the object (which was created earlier), and value of the instance variable color of the House object is \"red\"\r\n        System.out.println(anotherHouse.getColor());\r\n\r\n\r\n        // A new object gets created using the new keyword which calls the parameterised constructor which in turn sets the value of the instance variable color of the newly created object as \"green\"\r\n        // A new reference named greenhouse of type House gets created which is pointing to the newly created object which has instance value of color field set to \"green\".\r\n        House greenHouse = new House(\"green\");\r\n        // Here anotherHouse reference refers to the greenHouse reference, latter of which is pointing to the newly created object which has instance value of color field set to \"green\".\r\n        anotherHouse = greenHouse;\r\n\r\n        // The output of the below line will be \"red\", as the reference blueHouse is still referring to the old object, whose instance variable color value is set to \"red\"\r\n        System.out.println(blueHouse.getColor());\r\n        // The output of the below line will be \"green\", as the reference greenHouse is pointing towards the newly created object, whose instance variable color value is set to \"green\"\r\n        System.out.println(greenHouse.getColor());\r\n        //Since, the anotherHouse reference is pointing towards the greenHouse reference,  pointing towards the newly created object, whose instance variable color value is set to \"green\"\r\n        // the output of the below line of code would be \"green\"\r\n        System.out.println(anotherHouse.getColor());\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/ReferenceObjectsInstanceClass.java",
        "fileName": "ReferenceObjectsInstanceClass.java",
        "topicName": "Reference Objects Instance Class",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Reference Object Instance",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "A Class is like a blueprint",
              "Using blueprint, we can create as many objects that we want",
              "This object can also be known as an instance.",
              "For the majority of created objects, we require a reference that points to the object.",
              "We can copy that reference, as many times as we like, but there is still just one object that it might point / refer to.",
              "In other words, we are just making the copy of the reference, not the object.",
              "We can pass references as parameters to constructors and methods."
            ]
          }
        ],
        "inlineComments": [
          "The object is created in the memory, but after the statement completes, the code has no way to access it",
          "The object exist in memory, but the code, can't communicate with it, after the statement is executed",
          "The first object is said to be eligible for garbage collection immediately",
          "After that first statement execution, It's useless to the code because It's no longer accessible",
          "There are times we might want to instantiate an object and immediately call a method on it, and not assign the object to a variable reference, but the chances of them happening is very low",
          "myHouse reference variable, can access to the beige house, as long as myHouse variable stays in scope, or until it gets reassigned to reference a different object",
          "This has no relationship to the object which got created in line no 29"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance;\r\n\r\n\r\nimport Chapter_14_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance.Example.House;\r\n\r\n/*\r\n\r\nA Class is like a blueprint\r\nUsing blueprint, we can create as many objects that we want\r\n\r\nThis object can also be known as an instance.\r\n\r\nFor the majority of created objects, we require a reference that points to the object.\r\n\r\nWe can copy that reference, as many times as we like, but there is still just one object that it might point / refer to.\r\nIn other words, we are just making the copy of the reference, not the object.\r\n\r\nWe can pass references as parameters to constructors and methods.\r\n\r\n*/\r\npublic class ReferenceObjectsInstanceClass {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        /*\r\n        * No of objects created = 3\r\n        * No of instance (reference) variable created = 2\r\n        *\r\n        * */\r\n\r\n        new House(\"red\"); // house object gets created in the memory\r\n        // The object is created in the memory, but after the statement completes, the code has no way to access it\r\n        // The object exist in memory, but the code, can't communicate with it, after the statement is executed\r\n        // The first object is said to be eligible for garbage collection immediately\r\n        // After that first statement execution, It's useless to the code because It's no longer accessible\r\n        // There are times we might want to instantiate an object and immediately call a method on it, and not assign the object to a variable reference, but the chances of them happening is very low\r\n\r\n        House myHouse = new House(\"beige\"); // house object gets created in the memory and it's location(reference) is assigned to myHouse;\r\n        // myHouse reference variable, can access to the beige house, as long as myHouse variable stays in scope, or until it gets reassigned to reference a different object\r\n\r\n        House redHouse = new House(\"red\");   // house object gets created in the memory and it's location(reference) is assigned to the redHouse;\r\n        // This has no relationship to the object which got created in line no 29\r\n\r\n\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_7_Static_And_Instance_Methods/StaticAndInstanceMethods.java",
        "fileName": "StaticAndInstanceMethods.java",
        "topicName": "Static And Instance Methods",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Static And Instance Methods",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Static Methods",
              "1) Static methods are declared using a static modifier and they belong to Class",
              "2) Static methods can't access instance methods and instance variables directly.",
              "3) They're usually used for operations that don't require any data from an instance of the class (from this)",
              "4) Inside a static method, we can't use this keyword",
              "5)  Whenever a method that doesn't use instance variables is declared, that method should probably be declared as a static method.",
              "6)  For Ex :- main is a static method. It is called by the Java virtual machine when it starts the Java application.",
              "8) Static methods are called directly as methodName(); only if the static method is defined in the same class from which it is called",
              "Instance Methods",
              "1) Instance methods belong to an instance of a Class",
              "2) To use an instance method, the class needs to be instantiated first, usually by using the new keyword.",
              "3) Instance methods can access instance methods and instance variables directly",
              "4) Instance methods can also access static methods and static variables directly.",
              "Decision on when to use Static or Instance method",
              "Should a method be static?",
              "Does it use any fields (instance) variables or instance methods?",
              "If yes, then the method should be an instance method",
              "If no, then the method should be a static method"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Java methods are either STATIC (belong to the class) or INSTANCE (belong to individual objects).",
              "Deciding which to use: does the method need to access any instance fields or instance methods? If YES -> instance method. If NO -> static method.",
              "Static methods are called on the class: ClassName.methodName() or just methodName() if called from within the same class.",
              "Instance methods require an object: first create the object, then call the method on it.",
              "Static methods CANNOT access instance fields or call instance methods directly (no 'this' in static context).",
              "Instance methods CAN freely access both static and instance fields/methods.",
              "The main() method is static — it runs without any object being created. That's why you can't use 'this' in main."
            ]
          }
        ],
        "inlineComments": [
          "Static method called using ClassName.methodName();",
          "Static method called directly using methodName() as printHello() method was declared within the StaticAndInstanceMethods class, and also called in the same class",
          "In order to access the instance method, first an instance of the class needs to be created",
          "Then with the help of reference variable which is referencing the object, the instance method named printName() is called"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_7_Static_And_Instance_Methods;\r\n// Java methods are either STATIC (belong to the class) or INSTANCE (belong to individual objects).\n// Deciding which to use: does the method need to access any instance fields or instance methods? If YES -> instance method. If NO -> static method.\n// Static methods are called on the class: ClassName.methodName() or just methodName() if called from within the same class.\n// Instance methods require an object: first create the object, then call the method on it.\n// Static methods CANNOT access instance fields or call instance methods directly (no 'this' in static context).\n// Instance methods CAN freely access both static and instance fields/methods.\n// The main() method is static — it runs without any object being created. That's why you can't use 'this' in main.\r\n/*\r\n*    Static Methods\r\n*    1) Static methods are declared using a static modifier and they belong to Class\r\n*    2) Static methods can't access instance methods and instance variables directly.\r\n*    3) They're usually used for operations that don't require any data from an instance of the class (from this)\r\n*    4) Inside a static method, we can't use this keyword\r\n*    5)  Whenever a method that doesn't use instance variables is declared, that method should probably be declared as a static method.\r\n*    6)  For Ex :- main is a static method. It is called by the Java virtual machine when it starts the Java application.\r\n*    7) Static methods are called as ClassName.methodName();\r\n*    8) Static methods are called directly as methodName(); only if the static method is defined in the same class from which it is called\r\n*\r\n*    Instance Methods\r\n*    1) Instance methods belong to an instance of a Class\r\n*    2) To use an instance method, the class needs to be instantiated first, usually by using the new keyword.\r\n*    3) Instance methods can access instance methods and instance variables directly\r\n*    4) Instance methods can also access static methods and static variables directly.\r\n*\r\n*    Decision on when to use Static or Instance method\r\n*\r\n*    Should a method be static?\r\n*    Does it use any fields (instance) variables or instance methods?\r\n*    If yes, then the method should be an instance method\r\n*    If no, then the method should be a static method\r\n*\r\n* */\r\n\r\npublic class StaticAndInstanceMethods {\r\n\r\n    public static void main(String[] args) {\r\n        // Static method called using ClassName.methodName();\r\n        StaticAndInstanceMethods.printSum(2,3);\r\n        // Static method called directly using methodName() as printHello() method was declared within the StaticAndInstanceMethods class, and also called in the same class\r\n        printHello();\r\n\r\n        // In order to access the instance method, first an instance of the class needs to be created\r\n        StaticAndInstanceMethods staticAndInstanceMethods = new StaticAndInstanceMethods();\r\n        // Then with the help of reference variable which is referencing the object, the instance method named printName() is called\r\n        staticAndInstanceMethods.printName(\"Navneet\");\r\n    }\r\n\r\n    public static void printHello(){\r\n        System.out.println(\"Hello\");\r\n    }\r\n\r\n    public static void printSum(int a, int b){\r\n        System.out.println(\"sum = \" + (a + b));\r\n    }\r\n\r\n    public void printName(String name){\r\n        System.out.println(\"My Name is :- \" + name);\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/PlainOldJavaObject.java",
        "fileName": "PlainOldJavaObject.java",
        "topicName": "Plain Old Java Object",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Plain Old Java Objects",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
              "iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.",
              "iv)  Many database frameworks use POJO's to read data from, or to write data to databases,files or streams.",
              "v)   Examples :- i)   A POJO also might be called a bean or a JavaBean.",
              "ii)  A JavaBean is just a POJO with some extra rules applied to it.",
              "iii) These rules are in place so that Java frameworks have a standard way to manipulate and manage these objects.",
              "iv)  A POJO is sometimes called an Entity because it mirrors database entities.",
              "v)   Another acronym is DTO for Data Transfer Object. It's a description of an object that can be modeled as just data."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "A POJO (Plain Old Java Object) is a simple class whose primary purpose is to hold data.",
              "POJOs are the workhorses of Java data modelling — databases, APIs, and frameworks use them extensively.",
              "A POJO typically has: private fields, a constructor, getters, setters, and often a toString() method.",
              "The toString() method is overridden to return a human-readable representation of the object's state — useful for debugging and logging.",
              "The @Override annotation tells the compiler this method intentionally overrides a parent class method. The compiler checks the signature matches.",
              "Annotations (@Override, @SuppressWarnings, etc.) are metadata — they provide information to the compiler or tools. They do not change runtime behaviour.",
              "POJOs are sometimes called: JavaBeans (with stricter rules), Entity (matching a database table), or DTO (Data Transfer Object for passing data between layers).",
              "Compare POJO with Record (Java 16+): POJO is mutable (you can change its fields via setters). A Record is immutable (no setters, fields are final)."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_8_Plain_Old_Java_Objects;\r\n// A POJO (Plain Old Java Object) is a simple class whose primary purpose is to hold data.\n// POJOs are the workhorses of Java data modelling — databases, APIs, and frameworks use them extensively.\n// A POJO typically has: private fields, a constructor, getters, setters, and often a toString() method.\n// The toString() method is overridden to return a human-readable representation of the object's state — useful for debugging and logging.\n// The @Override annotation tells the compiler this method intentionally overrides a parent class method. The compiler checks the signature matches.\n// Annotations (@Override, @SuppressWarnings, etc.) are metadata — they provide information to the compiler or tools. They do not change runtime behaviour.\n// POJOs are sometimes called: JavaBeans (with stricter rules), Entity (matching a database table), or DTO (Data Transfer Object for passing data between layers).\n// Compare POJO with Record (Java 16+): POJO is mutable (you can change its fields via setters). A Record is immutable (no setters, fields are final).\r\n/*\r\n   POJO CONCEPTS\r\n\r\n   i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data\r\n   ii)  It's used to house data and pass data between functional classes.\r\n   iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.\r\n   iv)  Many database frameworks use POJO's to read data from, or to write data to databases,files or streams.\r\n   v)   Examples :- i)   A POJO also might be called a bean or a JavaBean.\r\n                  ii)  A JavaBean is just a POJO with some extra rules applied to it.\r\n                  iii) These rules are in place so that Java frameworks have a standard way to manipulate and manage these objects.\r\n                  iv)  A POJO is sometimes called an Entity because it mirrors database entities.\r\n                  v)   Another acronym is DTO for Data Transfer Object. It's a description of an object that can be modeled as just data.\r\n\r\n\r\n\r\n\r\n* */\r\n\r\npublic class PlainOldJavaObject {\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Main.java",
        "fileName": "Main.java",
        "topicName": "Main",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Plain Old Java Objects",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]",
              "StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass]",
              "StudentRecord[id=1, name=Navi, dateOfBirth=21/05/1996, classList=Python MasterClass]",
              "StudentRecord[id=1, name=NaviPuttu, dateOfBirth=22/06/1997, classList=Kotlin MasterClass]",
              "StudentRecord[id=1, name=PuttuNavi, dateOfBirth=23/07/1998, classList=Golang MasterClass]"
            ]
          }
        ],
        "inlineComments": [
          "Objects are created using POJO",
          "Getter methods that are defined explicitly in the Student POJO class are called below",
          "The pre-defined best practice to define an explicit getter method name is that the getter method name to access any instance field will have a prefix like (get or is) before the instance variable name for which the value is retrieved(get) which together will form the getter method name",
          "Ex :- getName() & getClassName() are explicitly defined getter methods for name and className instance variables",
          "The values of the instance variables in POJO based approach can be set using the explicitly defined setter methods.",
          "For ex :-  s1.setClassList(s1.getClassList() + \", Java OCJP Exam 829\") will work as expected as the setClassList setter method has been defined explicitly and the value of classList instance of the s1 object will get set to \"Java MasterClass\", Java OCJP Exam 829\"",
          "Output of the code",
          "Difference between the outputs :- i) toString() method should be there in the pojo ii) It starts with curly bracket iii) Single quotes around Strings are there",
          "Objects are created using Record Class",
          "Getter methods are implicitly handled in the Record Type StudentRecord class. There is no need to explicitly define the getter methods in the Record Type Class",
          "The implicit defined getter method name to retrieve(get) the value of the specific instance field will only have the instance variable name for which the value is retrieved(get) as the getter method name to access that instance variable value",
          "Ex :- name() & className() are implicitly defined getter methods for name and className instance variables",
          "1) The values of the instance variables in Record Type based approach cannot be set ever and the Record Type class do not have implicitly defined setter methods",
          "2) For ex :- s1.setClassList(s1.classList() + \", Java OCJP Exam 829\") will not work as there is no implicitly defined setter method for any of the instance field in the Record Type Class",
          "3) This is by design because the Record type class goal is to be immutable and they are built like that specifically",
          "4) The objective of the record type Class suits well for the use cases of immutable data transfer objects and keeping them well encapsulated. The data needs to be well protected from unintended mutations",
          "Difference between the outputs :- i) toString() method is not required. It is handled implicitly by the Record type class ii) It starts with square bracket iii) Single quotes around Strings are not there"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_8_Plain_Old_Java_Objects.POJOExample;\r\n\r\nimport Chapter_14_OOPSConcepts.Sub_Chapter_9_JavaRecords.StudentRecord;\r\n\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(\"*****************************************\");\r\n\r\n        Main.createStudentObjectsUsingPojo();\r\n\r\n        System.out.println(\"*****************************************\");\r\n\r\n        Main.createStudentObjectsUsingRecordClass();\r\n\r\n        System.out.println(\"*****************************************\");\r\n\r\n    }\r\n\r\n    public static void createStudentObjectsUsingPojo() {\r\n\r\n        // Objects are created using POJO\r\n        Student s1 = new Student(\"1\", \"Navneet\", \"19/03/1994\", \"Java MasterClass\");\r\n        Student s2 = new Student(\"2\", \"Puttu\", \"20/04/1995\", \"Javascript MasterClass\");\r\n        Student s3 = new Student(\"1\", \"Navi\", \"21/05/1996\", \"Python MasterClass\");\r\n        Student s4 = new Student(\"1\", \"NaviPuttu\", \"22/06/1997\", \"Kotlin MasterClass\");\r\n        Student s5 = new Student(\"1\", \"PuttuNavi\", \"23/07/1998\", \"Golang MasterClass\");\r\n\r\n        System.out.println();\r\n        System.out.println(\"Student Objects using POJO is created below :- \");\r\n        System.out.println();\r\n        System.out.println(s1);\r\n        System.out.println(s2);\r\n        System.out.println(s3);\r\n        System.out.println(s4);\r\n        System.out.println(s5);\r\n        System.out.println();\r\n\r\n        // Getter methods that are defined explicitly in the Student POJO class are called below\r\n        // The pre-defined best practice to define an explicit getter method name is that the getter method name to access any instance field will have a prefix like (get or is) before the instance variable name for which the value is retrieved(get) which together will form the getter method name\r\n        // Ex :- getName() & getClassName() are explicitly defined getter methods for name and className instance variables\r\n        System.out.println(s1.getName() + \" is taking \" + s1.getClassList());\r\n        System.out.println(s2.getName() + \" is taking \" + s2.getClassList());\r\n        System.out.println(s3.getName() + \" is taking \" + s3.getClassList());\r\n        System.out.println(s4.getName() + \" is taking \" + s4.getClassList());\r\n        System.out.println(s5.getName() + \" is taking \" + s5.getClassList());\r\n        System.out.println();\r\n\r\n        // The values of the instance variables in POJO based approach can be set using the explicitly defined setter methods.\r\n        // For ex :-  s1.setClassList(s1.getClassList() + \", Java OCJP Exam 829\") will work as expected as the setClassList setter method has been defined explicitly and the value of classList instance of the s1 object will get set to \"Java MasterClass\", Java OCJP Exam 829\"\r\n\r\n        // Output of the code\r\n        // Difference between the outputs :- i) toString() method should be there in the pojo\r\n        //                                   ii) It starts with curly bracket\r\n        //                                   iii) Single quotes around Strings are there\r\n\r\n        /*\r\n        * Student{id='1', name='Navneet', dateOfBirth='19/03/1994', classList='Java MasterClass'}\r\n          Student{id='2', name='Puttu', dateOfBirth='20/04/1995', classList='Javascript MasterClass'}\r\n          Student{id='1', name='Navi', dateOfBirth='21/05/1996', classList='Python MasterClass'}\r\n          Student{id='1', name='NaviPuttu', dateOfBirth='22/06/1997', classList='Kotlin MasterClass'}\r\n          Student{id='1', name='PuttuNavi', dateOfBirth='23/07/1998', classList='Golang MasterClass'}\r\n        *\r\n        * */\r\n\r\n\r\n    }\r\n\r\n    public static void createStudentObjectsUsingRecordClass() {\r\n\r\n        // Objects are created using Record Class\r\n        StudentRecord s1 = new StudentRecord(\"1\", \"Navneet\", \"19/03/1994\", \"Java MasterClass\");\r\n        StudentRecord s2 = new StudentRecord(\"2\", \"Puttu\", \"20/04/1995\", \"Javascript MasterClass\");\r\n        StudentRecord s3 = new StudentRecord(\"1\", \"Navi\", \"21/05/1996\", \"Python MasterClass\");\r\n        StudentRecord s4 = new StudentRecord(\"1\", \"NaviPuttu\", \"22/06/1997\", \"Kotlin MasterClass\");\r\n        StudentRecord s5 = new StudentRecord(\"1\", \"PuttuNavi\", \"23/07/1998\", \"Golang MasterClass\");\r\n\r\n        System.out.println();\r\n        System.out.println(\"Student Records using Record Type is created below :- \");\r\n        System.out.println();\r\n        System.out.println(s1);\r\n        System.out.println(s2);\r\n        System.out.println(s3);\r\n        System.out.println(s4);\r\n        System.out.println(s5);\r\n        System.out.println();\r\n\r\n        // Getter methods are implicitly handled in the Record Type StudentRecord class. There is no need to explicitly define the getter methods in the Record Type Class\r\n        // The implicit defined getter method name to retrieve(get) the value of the specific instance field will only have the instance variable name for which the value is retrieved(get) as the getter method name to access that instance variable value\r\n        // Ex :- name() & className() are implicitly defined getter methods for name and className instance variables\r\n        System.out.println(s1.name() + \" is taking \" + s1.classList());\r\n        System.out.println(s2.name() + \" is taking \" + s2.classList());\r\n        System.out.println(s3.name() + \" is taking \" + s3.classList());\r\n        System.out.println(s4.name() + \" is taking \" + s4.classList());\r\n        System.out.println(s5.name() + \" is taking \" + s5.classList());\r\n        System.out.println();\r\n\r\n        // 1) The values of the instance variables in Record Type based approach cannot be set ever and the Record Type class do not have implicitly defined setter methods\r\n        // 2) For ex :- s1.setClassList(s1.classList() + \", Java OCJP Exam 829\") will not work as there is no implicitly defined setter method for any of the instance field in the Record Type Class\r\n        // 3) This is by design because the Record type class goal is to be immutable and they are built like that specifically\r\n        // 4) The objective of the record type Class suits well for the use cases of immutable\r\n        //    data transfer objects and keeping them well encapsulated. The data needs to be\r\n        //    well protected from unintended mutations\r\n\r\n        // Output of the code\r\n        // Difference between the outputs :- i) toString() method is not required. It is handled implicitly by the Record type class\r\n        //                                   ii) It starts with square bracket\r\n        //                                   iii) Single quotes around Strings are not there\r\n\r\n        /*\r\n        * StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]\r\n          StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass]\r\n          StudentRecord[id=1, name=Navi, dateOfBirth=21/05/1996, classList=Python MasterClass]\r\n          StudentRecord[id=1, name=NaviPuttu, dateOfBirth=22/06/1997, classList=Kotlin MasterClass]\r\n          StudentRecord[id=1, name=PuttuNavi, dateOfBirth=23/07/1998, classList=Golang MasterClass]\r\n        *\r\n        * */\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n/*\r\n* Student s = null;\r\n        for(int i = 1; i <=5; i++){\r\n             s = new Student(switch(i){\r\n                case 1 -> \"1\";\r\n                case 2 -> \"2\";\r\n                case 3 -> \"3\";\r\n                case 4 -> \"4\";\r\n                case 5 -> \"5\";\r\n                default -> \"0\";\r\n            },switch(i){\r\n                case 1 -> \"Navneet\";\r\n                case 2 -> \"Puttu\";\r\n                case 3 -> \"Navi\";\r\n                case 4 -> \"NaviPuttu\";\r\n                case 5 -> \"PuttuNavi\";\r\n                default -> \"Random\";\r\n            },switch(i){\r\n                case 1 -> \"19/03/1994\";\r\n                case 2 -> \"20/04/1995\";\r\n                case 3 -> \"21/05/1996\";\r\n                case 4 -> \"22/06/1997\";\r\n                case 5 -> \"23/07/1998\";\r\n                default -> \"01/01/2001\";\r\n            },switch (i){\r\n                case 1 -> \"Java MasterClass\";\r\n                case 2 -> \"Javascript MasterClass\";\r\n                case 3 -> \"21/05/1996\";\r\n                case 4 -> \"22/06/1997\";\r\n                case 5 -> \"23/07/1998\";\r\n                default -> \"01/01/2001\";\r\n            });\r\n            System.out.println(s);\r\n        }\r\n        return s;\r\n        *\r\n        *\r\n        *      List<Student> s = new LinkedList<>();\r\n        s.add(s1);\r\n        s.add(s2);\r\n        s.add(s3);\r\n        s.add(s4);\r\n        s.add(s5);\r\n//\r\n        for(int i = 0; i <= 4; i++){\r\n            System.out.println(s.get(i));\r\n        }\r\n*\r\n*\r\n* */"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Student.java",
        "fileName": "Student.java",
        "topicName": "Student",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Plain Old Java Objects",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "The toString() method is a special method in Java.",
              "The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way.",
              "The toString() method can be implemented in any class, and doing this helps to print out the current state of the object."
            ]
          },
          {
            "type": "block",
            "lines": [
              "1) Anytime a statement starts with an at symbol, this is called an annotation.",
              "2) Annotations are a type of metadata.",
              "3) Metadata is a way to formally describe additional information about the code.",
              "4) Annotations are more structured and have more meaning than comments.",
              "5) This is because they can be used by the compiler or other types of pre-processing functions, to get information about the code.",
              "6) Metadata doesn't affect how the code runs so this code will still run with or without the annotation."
            ]
          }
        ],
        "inlineComments": [
          "All the instance fields related to Student class have been mentioned here",
          "Argument constructor explicitly mentioned to create instance(object) and assign values to the instance fields(variables) of the objects(instances)",
          "Getters and setters created, to set / update and retrieve instance variables data",
          "The most common annotation in Java, commonly used",
          "It tells the compiler that this a special type of method in Java, an overridden method"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_8_Plain_Old_Java_Objects.POJOExample;\r\n\r\npublic class Student {\r\n\r\n// All the instance fields related to Student class have been mentioned here\r\n    private String id;\r\n    private String name;\r\n    private String dateOfBirth;\r\n    private String classList;\r\n\r\n\r\n // Argument constructor explicitly mentioned to create instance(object) and assign values to the instance fields(variables) of the objects(instances)\r\n    public Student(String id, String name, String dateOfBirth, String classList) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.dateOfBirth = dateOfBirth;\r\n        this.classList = classList;\r\n    }\r\n\r\n  // Getters and setters created, to set / update and retrieve instance variables data\r\n\r\n    public String getId() {\r\n        return id;\r\n    }\r\n\r\n    public void setId(String id) {\r\n        this.id = id;\r\n    }\r\n\r\n    public String getName() {\r\n        return name;\r\n    }\r\n\r\n    public void setName(String name) {\r\n        this.name = name;\r\n    }\r\n\r\n    public String getDateOfBirth() {\r\n        return dateOfBirth;\r\n    }\r\n\r\n    public void setDateOfBirth(String dateOfBirth) {\r\n        this.dateOfBirth = dateOfBirth;\r\n    }\r\n\r\n    public String getClassList() {\r\n        return classList;\r\n    }\r\n\r\n    public void setClassList(String classList) {\r\n        this.classList = classList;\r\n    }\r\n\r\n\r\n\r\n    /* The toString() method is a special method in Java.\r\n    The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way.\r\n    The toString() method can be implemented in any class, and doing this helps to print out the current state of the object.\r\n * */\r\n\r\n\r\n    /* 1) Anytime a statement starts with an at symbol, this is called an annotation.\r\n       2) Annotations are a type of metadata.\r\n       3) Metadata is a way to formally describe additional information about the code.\r\n       4) Annotations are more structured and have more meaning than comments.\r\n       5) This is because they can be used by the compiler or other types of pre-processing functions,\r\n          to get information about the code.\r\n       6) Metadata doesn't affect how the code runs so this code will still run with or without the annotation.\r\n     */\r\n\r\n\r\n    // The most common annotation in Java, commonly used\r\n    // It tells the compiler that this a special type of method in Java, an overridden method\r\n\r\n    @Override\r\n    public String toString() {\r\n        return \"Student{\" +\r\n                \"id='\" + id + '\\'' +\r\n                \", name='\" + name + '\\'' +\r\n                \", dateOfBirth='\" + dateOfBirth + '\\'' +\r\n                \", classList='\" + classList + '\\'' +\r\n                '}';\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_8_Static_And_Instance_Variables/StaticAndInstanceVariables.java",
        "fileName": "StaticAndInstanceVariables.java",
        "topicName": "Static And Instance Variables",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Static And Instance Variables",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Static Variables",
              "1) A static variable is Declared by using the keyword static.",
              "2) Static variables are also known as static member variables. They belong to the class, not the instance",
              "3) Every instance of the class shares the same static variable.",
              "4) If changes are made to that variable, all other instances of that class will see the effect of that change.",
              "5) Static variables can be used to :-",
              "i)   Storing counters ii)  Generating unique IDs iii) Storing constant value that doesn't change. For Ex :- value of pi iv)  Creating and controlling access to a shared resource. For ex :- log file, a database, input stream, output stream etc",
              "Instance Variables",
              "1) Static keyword is not used",
              "2) They're also known as fields or member variables.",
              "3) Unlike a static variable, Instance variables belong to a specific instance of a class.",
              "4) Each instance(object) has its own copy of an instance variable.",
              "5) Every instance(object) can have a different value. Instance variables represent the state of a specific instance(object) of a class."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Understanding the difference between static and instance variables is crucial in OOP.",
              "STATIC variable: one shared copy for the ENTIRE class. If any object changes it, ALL objects see the new value.",
              "INSTANCE variable: each object has its OWN private copy. Changes to one object's instance variable don't affect other objects.",
              "Typical uses for static variables: counters (counting how many objects were created), constants (Math.PI), shared resources.",
              "Best practice: access static variables via the CLASS name, not via an object reference. Clarity: StaticAndInstanceVariables.name not obj.name.",
              "This file demonstrates: two instances share the same static 'name' field — when the last one sets it to \"Fluffy\", BOTH print \"Fluffy\".",
              "By contrast, instance variables 'instanceName' and 'age' are unique per object — obj1 can be \"Rex/4\" and obj2 can be \"Fluffy/2\" simultaneously."
            ]
          }
        ],
        "inlineComments": [
          "Static variable example",
          "Although this line will compile and run successfully, it is not considered best practice to call static method with an instance(reference) variable",
          "This is the correct way of calling a static variable",
          "This makes it clearer that the variable is associated with the class and therefore not stored with the instance",
          "An instance isn't required to exist to access the value of a static variable.",
          "When the first parameterised constructor is called, the value of static String name is set to \"Rex\"",
          "When the second parameterised constructor is called, the value of static String name is now set to \"Fluffy\"",
          "Since, the static members are shared between the instances,once the changes are made to the static variable all instances will see the change that has been made.",
          "Both the instances are sharing the same variable \"name\", hence the last modified value of static variable \"name\" which is set to \"Fluffy\" will be printed when the printName method is called by both the instances",
          "Each instance of the class has its own state or its own values for any variables that have been defined.",
          "Because instance variables are used, every object instance variables has its own value for the name field.",
          "It's not shared like it was before, when a static variable was used."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_8_Static_And_Instance_Variables;\r\n// Understanding the difference between static and instance variables is crucial in OOP.\n// STATIC variable: one shared copy for the ENTIRE class. If any object changes it, ALL objects see the new value.\n// INSTANCE variable: each object has its OWN private copy. Changes to one object's instance variable don't affect other objects.\n// Typical uses for static variables: counters (counting how many objects were created), constants (Math.PI), shared resources.\n// Best practice: access static variables via the CLASS name, not via an object reference. Clarity: StaticAndInstanceVariables.name not obj.name.\n// This file demonstrates: two instances share the same static 'name' field — when the last one sets it to \"Fluffy\", BOTH print \"Fluffy\".\n// By contrast, instance variables 'instanceName' and 'age' are unique per object — obj1 can be \"Rex/4\" and obj2 can be \"Fluffy/2\" simultaneously.\r\n/*\r\nStatic Variables\r\n\r\n1) A static variable is Declared by using the keyword static.\r\n\r\n2) Static variables are also known as static member variables. They belong to the class, not the instance\r\n\r\n3) Every instance of the class shares the same static variable.\r\n\r\n4) If changes are made to that variable, all other instances of that class will see the effect of that change.\r\n\r\n5) Static variables can be used to :-\r\n  i)   Storing counters\r\n  ii)  Generating unique IDs\r\n  iii) Storing constant value that doesn't change. For Ex :- value of pi\r\n  iv)  Creating and controlling access to a shared resource. For ex :- log file, a database, input stream, output stream etc\r\n\r\nInstance Variables\r\n\r\n1) Static keyword is not used\r\n2) They're also known as fields or member variables.\r\n3) Unlike a static variable, Instance variables belong to a specific instance of a class.\r\n4) Each instance(object) has its own copy of an instance variable.\r\n5) Every instance(object) can have a different value. Instance variables represent the state\r\n   of a specific instance(object) of a class.\r\n\r\n* */\r\n\r\npublic class StaticAndInstanceVariables {\r\n\r\n    // Static variable example\r\n    static String name = \"Bravo\";\r\n\r\n    private String instanceName;\r\n\r\n    private int age;\r\n\r\n    public StaticAndInstanceVariables(String instanceName, int age) {\r\n        this.instanceName = instanceName;\r\n        this.age = age;\r\n    }\r\n\r\n    public StaticAndInstanceVariables(String name) {\r\n        StaticAndInstanceVariables.name = name;\r\n    }\r\n\r\n    public StaticAndInstanceVariables() {\r\n    }\r\n\r\n    public void printName(){\r\n        System.out.println(\"name = \" + name);\r\n    }\r\n\r\n    public void printDogNameAndAge(){\r\n        System.out.println(\"name = \" + instanceName);\r\n        System.out.println(\"age = \" + age);\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n\r\n        StaticAndInstanceVariables staticAndInstanceVariables = new StaticAndInstanceVariables();\r\n\r\n        /*\r\n        * It is considered best practice to use the Class name and not a reference variable\r\n        * to access a static variable. This makes it clearer that the\r\n        * variable is associated with the class and therefore not stored with the instance.\r\n        * An instance isn't required to exist to access the value of a static variable.\r\n        * */\r\n\r\n        // Although this line will compile and run successfully, it is not considered best practice to call static method with an instance(reference) variable\r\n        System.out.println(staticAndInstanceVariables.name);\r\n\r\n        // This is the correct way of calling a static variable\r\n        // This makes it clearer that the variable is associated with the class and therefore not stored with the instance\r\n        // An instance isn't required to exist to access the value of a static variable.\r\n        System.out.println(StaticAndInstanceVariables.name);\r\n\r\n\r\n        // When the first parameterised constructor is called, the value of static String name is set to \"Rex\"\r\n        StaticAndInstanceVariables staticAndInstanceVariables1 = new StaticAndInstanceVariables(\"Rex\");\r\n        // When the second parameterised constructor is called, the value of static String name is now set to \"Fluffy\"\r\n\r\n        // Since, the static members are shared between the instances,once the changes are made to the static variable all instances will see the change that has been made.\r\n        StaticAndInstanceVariables staticAndInstanceVariables2 = new StaticAndInstanceVariables(\"Fluffy\");\r\n\r\n        // Both the instances are sharing the same variable \"name\", hence the last modified value of static variable \"name\" which is set to \"Fluffy\" will be printed when the printName method is called by both the instances\r\n        staticAndInstanceVariables1.printName(); // Output :- name = Fluffy\r\n        staticAndInstanceVariables2.printName(); // Output :- name = Fluffy\r\n\r\n\r\n        // Each instance of the class has its own state or its own values for any variables that have been defined.\r\n        // Because instance variables are used, every object instance variables has its own value for the name field.\r\n        // It's not shared like it was before, when a static variable was used.\r\n        StaticAndInstanceVariables staticAndInstanceVariables3 = new StaticAndInstanceVariables(\"Rex\",4); // Creates a new object, and update the instance variables values of that object [instanceName = \"Rex\" , age = 4]\r\n        StaticAndInstanceVariables staticAndInstanceVariables4 = new StaticAndInstanceVariables(\"Fluffy\", 2); // Creates a new object, and update the instance variables values of that object [instanceName = \"Fluffy\" , age = 2]        staticAndInstanceVariables3.printDogNameAndAge(); // Output :- name = Rex, age = 4        staticAndInstanceVariables4.printDogNameAndAge(); // Output :- name = Fluffy, age = 2\r\n\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_9_JavaRecords/StudentRecord.java",
        "fileName": "StudentRecord.java",
        "topicName": "Student Record",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Java Records",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "The Record Type",
              "1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.",
              "2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive.",
              "Java calls them \"plain data carriers\".",
              "3) The record is a special class that contains data that's not meant to be altered.",
              "4) In other words, it seeks to achieve immutability for the data in its members.",
              "5) It contains only the most fundamental methods, such as constructors and accessors (or getters).",
              "The developers don't have to write or generate any of this code.",
              "6) The record Class doesn't have or support setter methods, but the other functionality, calling the constructor with four parameters and printing the data out, is implicitly part of the record."
            ]
          },
          {
            "type": "block",
            "lines": [
              "1) A Record Class looks a lot like a normal Class, it also starts with a public access modifier, but instead of the class keyword, it's using the record keyword.",
              "2) But different to a class, in the below code, there are a set of parentheses after the name of Record class Name.",
              "3) The part that's in parentheses, is called the record header.",
              "4) Similar to a constructor, we can set up some parameters within those parentheses.",
              "5) After setting up the required necessary parameters within the parentheses of the Record type class, we don't have to do anything.",
              "Everything else is handled internally.",
              "6) The part that's in parentheses, is called the record header.",
              "i)   The record header consists of record components, a comma-delimited list of components.",
              "ii)  For each component in the header, Java generates: A field with the same name and declared type as the record component. It sets up fields for us as we have them in the parentheses.",
              "iii) These become the fields of the record. The field is declared private and final.",
              "iv)  Simply put, it means the field can't be modified.",
              "v)   The field is sometimes referred to as a component field. Java generates a toString method that prints out each attribute in a formatted String.",
              "vi)  In addition to creating a private final field for each component, Java generates a public accessor method for each component.",
              "This method has the same name and type of the component, but it doesn't have any kind of special prefix like get or is."
            ]
          },
          {
            "type": "block",
            "lines": [
              "POJO vs Record i) If the objective is to modify data on the class, record is not intended and suited for this purpose.",
              "The code generation options for the POJO works well for the above mentioned objective.",
              "ii) But if the objective is reading a whole lot of records from a database or file source and simply passing this data around, then the record type Class serves the objective."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Java Records (introduced in Java 14 as preview, standard in Java 16) are a concise way to create immutable data carrier classes.",
              "Instead of writing a class with fields, constructor, getters, and toString — a record generates ALL of that automatically.",
              "'record' keyword replaces 'class'. The fields are declared in the record header (parentheses after the name).",
              "ALL fields in a record are automatically: private and final (cannot be changed after construction).",
              "Java auto-generates for every record: a canonical constructor, accessor methods (field name only, no 'get' prefix), equals(), hashCode(), and toString().",
              "Accessor method naming: for a field 'name', the accessor is name() NOT getName() — this differs from POJO convention.",
              "Records have NO setter methods — they are immutable by design. You cannot change a record's data after creation.",
              "Use records when you need a simple, immutable data container. Use a POJO/class when you need to modify the data later."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_9_JavaRecords;\r\n// Java Records (introduced in Java 14 as preview, standard in Java 16) are a concise way to create immutable data carrier classes.\n// Instead of writing a class with fields, constructor, getters, and toString — a record generates ALL of that automatically.\n// 'record' keyword replaces 'class'. The fields are declared in the record header (parentheses after the name).\n// ALL fields in a record are automatically: private and final (cannot be changed after construction).\n// Java auto-generates for every record: a canonical constructor, accessor methods (field name only, no 'get' prefix), equals(), hashCode(), and toString().\n// Accessor method naming: for a field 'name', the accessor is name() NOT getName() — this differs from POJO convention.\n// Records have NO setter methods — they are immutable by design. You cannot change a record's data after creation.\n// Use records when you need a simple, immutable data container. Use a POJO/class when you need to modify the data later.\r\n/*\r\n    The Record Type\r\n\r\n  1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.\r\n  2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive.\r\n     Java calls them \"plain data carriers\".\r\n  3) The record is a special class that contains data that's not meant to be altered.\r\n  4) In other words, it seeks to achieve immutability for the data in its members.\r\n  5) It contains only the most fundamental methods, such as constructors and accessors (or getters).\r\n     The developers don't have to write or generate any of this code.\r\n  6) The record Class doesn't have or support setter methods, but the other functionality,\r\n     calling the constructor with four parameters and printing the data out,\r\n     is implicitly part of the record.\r\n\r\n*/\r\n\r\n\r\n\r\n/*\r\n  1) A Record Class looks a lot like a normal Class, it also starts with a public access modifier,\r\n     but instead of the class keyword, it's using the record keyword.\r\n  2) But different to a class, in the below code, there are a set of parentheses\r\n     after the name of Record class Name.\r\n  3) The part that's in parentheses, is called the record header.\r\n  4) Similar to a constructor, we can set up some parameters within those parentheses.\r\n  5) After setting up the required necessary parameters within the parentheses of the Record type class, we don't have to do anything.\r\n     Everything else is handled internally.\r\n  6) The part that's in parentheses, is called the record header.\r\n     i)   The record header consists of record components, a comma-delimited list of components.\r\n     ii)  For each component in the header, Java generates: A field with the same name and declared type\r\n          as the record component. It sets up fields for us as we have them in the parentheses.\r\n     iii) These become the fields of the record. The field is declared private and final.\r\n     iv)  Simply put, it means the field can't be modified.\r\n     v)   The field is sometimes referred to as a component field. Java generates a toString method that prints\r\n          out each attribute in a formatted String.\r\n     vi)  In addition to creating a private final field for each component, Java generates a public accessor method for each component.\r\n          This method has the same name and type of the component, but it doesn't have any kind of special\r\n          prefix like get or is.\r\n\r\n */\r\n\r\n\r\n/*  POJO vs Record\r\n\r\n    i) If the objective is to modify data on the class, record is not intended and suited for this purpose.\r\n       The code generation options for the POJO works well for the above mentioned objective.\r\n    ii) But if the objective is reading a whole lot of records from a database or file source and simply passing this\r\n        data around, then the record type Class serves the objective.\r\n\r\n\r\n\r\n\r\n*/\r\n\r\npublic record StudentRecord(String id, String name, String dateOfBirth, String classList) {\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/PointClassDistanceCalculation.java",
        "fileName": "PointClassDistanceCalculation.java",
        "topicName": "Point Class Distance Calculation",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Point Class and Distance Calculation",
              "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
              "The class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields.",
              "Write the following methods (instance methods):",
              "Method named getX without any parameters, it needs to return the value of x field.",
              "Method named getY without any parameters, it needs to return the value of y field.",
              "Method named setX with one parameter of type int, it needs to set the value of the x field.",
              "Method named setY with one parameter of type int, it needs to set the value of the y field.",
              "Method named distance without any parameters, it needs to return the distance between this Point and Point (0, 0) as a double.",
              "Method named distance with parameter of type Point, it needs to return the distance between this Point and the parameter Point as a double.",
              "Method named distance with two parameters x, y both of type int, it needs to return the distance between this Point and Point x, y as a double.",
              "How to find the distance between two points?",
              "To find a distance between points A(xA,yA) and B(xB,yB), we use the formula:",
              "d(A,B)=√ (xB − xA) * (xB - xA) + (yB − yA) * (yB - yA)",
              "Where √ represents square root."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_10_Constructors_Coding_Challenge;\r\n\r\n\r\n/*\r\n* Point Class and Distance Calculation\r\nYou have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.\r\n\r\nThe class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields.\r\n\r\nWrite the following methods (instance methods):\r\n\r\nMethod named getX without any parameters, it needs to return the value of x field.\r\n\r\nMethod named getY without any parameters, it needs to return the value of y field.\r\n\r\nMethod named setX with one parameter of type int, it needs to set the value of the x field.\r\n\r\nMethod named setY with one parameter of type int, it needs to set the value of the y field.\r\n\r\nMethod named distance without any parameters, it needs to return the distance between this Point and Point (0, 0) as a double.\r\n\r\nMethod named distance with parameter of type Point, it needs to return the distance between this Point and the parameter Point as a double.\r\n\r\nMethod named distance with two parameters x, y both of type int, it needs to return the distance between this Point and Point x, y as a double.\r\n\r\n\r\n\r\nHow to find the distance between two points?\r\nTo find a distance between points A(xA,yA) and B(xB,yB), we use the formula:\r\n\r\nd(A,B)=√ (xB − xA) * (xB - xA) + (yB − yA) * (yB - yA)\r\n\r\nWhere √ represents square root.\r\n*\r\n* */\r\n\r\nimport java.awt.*;\r\n\r\npublic class PointClassDistanceCalculation {\r\n\r\n    private int x;\r\n\r\n    private int y;\r\n\r\n    public PointClassDistanceCalculation(){\r\n\r\n    }\r\n\r\n    public PointClassDistanceCalculation(int x, int y){\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n\r\n    public int getX(){\r\n        return x;\r\n    }\r\n\r\n    public int getY(){\r\n        return y;\r\n    }\r\n\r\n    public void setX(int x){\r\n        this.x = x;\r\n    }\r\n\r\n    public void setY(int y){\r\n        this.y = y;\r\n    }\r\n\r\n    public double distance(){\r\n        double distance = Math.sqrt(((getX() - 0) * (getX() - 0)) + ((getY() - 0) * (getY() - 0)));\r\n        return distance;\r\n    }\r\n\r\n    public double distance(int a, int b){\r\n        double distance = Math.sqrt(((getX() - a) * (getX() - a)) + ((getY() - b) * (getY() - b)));\r\n        return distance;\r\n    }\r\n\r\n    public double distance(Point a){\r\n        double distance =  Math.sqrt(((getX() - a.getX()) * (getX() - a.getX())) + ((getY() - a.getY()) * (getY() - a.getY())));;\r\n        return distance;\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/WallAreaComputation.java",
        "fileName": "WallAreaComputation.java",
        "topicName": "Wall Area Computation",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Constructors Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Wall Area Computation",
              "Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.",
              "The class needs to have two constructors:",
              "The first constructor does not have any parameters (no-args constructor).",
              "The second constructor has parameters width and height of type double and it needs to initialize the fields.",
              "In case the width parameter is less than 0 it needs to set the width field value to 0.",
              "In case the height parameter is less than 0 it needs to set the height field value to 0.",
              "Write the following methods (instance methods):",
              "Method named getWidth without any parameters, it needs to return the value of width field.",
              "Method named getHeight without any parameters, it needs to return the value of height field.",
              "Method named setWidth with one parameter of type double, it needs to set the value of the width field. If the parameter is less than 0 it needs to set the width field value to 0.",
              "Method named setHeight with one parameter of type double, it needs to set the value of the height field. If the parameter is less than 0 it needs to set the height field value to 0.",
              "Method named getArea without any parameters, it needs to return the area of the wall."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_10_Constructors_Coding_Challenge;\r\n\r\n\r\n/*\r\n* Wall Area Computation\r\nWrite a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.\r\n\r\n\r\n\r\nThe class needs to have two constructors:\r\n\r\nThe first constructor does not have any parameters (no-args constructor).\r\n\r\nThe second constructor has parameters width and height of type double and it needs to initialize the fields.\r\n\r\nIn case the width parameter is less than 0 it needs to set the width field value to 0.\r\n\r\nIn case the height parameter is less than 0 it needs to set the height field value to 0.\r\n\r\n\r\n\r\nWrite the following methods (instance methods):\r\n\r\nMethod named getWidth without any parameters, it needs to return the value of width field.\r\n\r\nMethod named getHeight without any parameters, it needs to return the value of height field.\r\n\r\nMethod named setWidth with one parameter of type double, it needs to set the value of the width field. If the parameter is less than 0 it needs to set the width field value to 0.\r\n\r\nMethod named setHeight with one parameter of type double, it needs to set the value of the height field. If the parameter is less than 0 it needs to set the height field value to 0.\r\n\r\nMethod named getArea without any parameters, it needs to return the area of the wall.\r\n\r\n\r\n*\r\n* */\r\n\r\npublic class WallAreaComputation {\r\n\r\n    private double width;\r\n\r\n    private double height;\r\n\r\n    public WallAreaComputation(){\r\n\r\n    }\r\n\r\n    public WallAreaComputation(double width, double height){\r\n        if(height < 0){\r\n            this.height = 0;\r\n        }else{\r\n            this.height = height;\r\n        }\r\n        if(width < 0){\r\n            this.width = 0;\r\n        }else{\r\n            this.width = width;\r\n        }\r\n    }\r\n\r\n    public double getWidth(){\r\n        return width;\r\n    }\r\n\r\n    public double getHeight(){\r\n        return height;\r\n    }\r\n\r\n    public void setWidth(double width){\r\n        if(width < 0){\r\n            this.width = 0;\r\n        }else if(width >=0){\r\n            this.width = width;\r\n        }\r\n    }\r\n\r\n    public void setHeight(double height){\r\n        if(height < 0){\r\n            this.height = 0;\r\n        }else if(height >=0){\r\n            this.height = height;\r\n        }\r\n    }\r\n\r\n\r\n    public double getArea(){\r\n        double area = getWidth() * getHeight();\r\n        return area;\r\n    }\r\n\r\n}\r\n\r\n\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Animal.java",
        "fileName": "Animal.java",
        "topicName": "Animal",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
              "Also, the super class will have all the behaviour that animals have in common.",
              "Method Overriding",
              "Overriding a method is when you create a method on a subclass, which has the same signature as a method on a super class.",
              "A method signature consists of the method name and the number and types of parameters.",
              "A parent class method is overridden when we want the child class to show different behavior for that method.",
              "The overridden method can do one of three things: It can implement completely different behavior, overriding the behavior of the parent. It can simply call the parent class's method, which is somewhat redundant to do. This is the default behavior of an inherited method.",
              "Or the method can call the parent class's method and include other code to run so it can extend the functionality for the Dog",
              "Polymorphism",
              "Polymorphism simply means \"many forms\"",
              "Advantages :-",
              "1) It makes code simpler",
              "2) It encourages code extensibility"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "This is the superclass (parent class) of the Animal inheritance hierarchy.",
              "Inheritance allows a child class to reuse (inherit) fields and methods from a parent class, adding or customising as needed.",
              "Method Overriding: a subclass can provide its own implementation of a method defined in the superclass.",
              "The method signature (name + parameter types) must match exactly for overriding to work.",
              "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
              "Polymorphism (\"many forms\"): an Animal reference can point to a Dog or Fish object. When you call animal.makeNoise(), Java calls the Dog's or Fish's version — not Animal's. This is runtime (dynamic) dispatch.",
              "Three things an overriding method can do: (1) completely replace the parent's behaviour, (2) call the parent's method and do nothing else (redundant), or (3) call the parent's method AND add extra logic (extension).",
              "The super.methodName() syntax calls the PARENT class's version of the method from within the overriding method."
            ]
          }
        ],
        "inlineComments": [
          "This method has overridden the Object toString method",
          "It got override by the toString method of Dog Class and Fish Class",
          "This method got override by the Fish Class and the Animal Class",
          "This method got override by the Animal Class"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;\r\n// This is the superclass (parent class) of the Animal inheritance hierarchy.\n// Inheritance allows a child class to reuse (inherit) fields and methods from a parent class, adding or customising as needed.\n// Method Overriding: a subclass can provide its own implementation of a method defined in the superclass.\n// The method signature (name + parameter types) must match exactly for overriding to work.\n// Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.\n// Polymorphism (\"many forms\"): an Animal reference can point to a Dog or Fish object. When you call animal.makeNoise(), Java calls the Dog's or Fish's version — not Animal's. This is runtime (dynamic) dispatch.\n// Three things an overriding method can do: (1) completely replace the parent's behaviour, (2) call the parent's method and do nothing else (redundant), or (3) call the parent's method AND add extra logic (extension).\n// The super.methodName() syntax calls the PARENT class's version of the method from within the overriding method.\r\n/*\r\n* This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.\r\n*\r\n* Also, the super class will have all the behaviour that animals have in common.\r\n*\r\n* Method Overriding\r\n*\r\n* Overriding a method is when you create a method on a subclass, which has the same\r\n* signature as a method on a super class.\r\n*\r\n* A method signature consists\r\n* of the method name and the number and types of parameters.\r\n*\r\n* A parent class method is overridden when we want the child class to show different\r\n* behavior for that method.\r\n*\r\n* The overridden method can do one of three things: It can implement completely different behavior,\r\n* overriding the behavior of the parent. It can simply call the parent class's method,\r\n* which is somewhat redundant to do. This is the default behavior of an inherited method.\r\n* Or the method can call the parent class's method and include other code to run so it can extend the\r\n* functionality for the Dog\r\n*\r\n* Polymorphism\r\n*\r\n* Polymorphism simply means \"many forms\"\r\n*\r\n* Advantages :-\r\n*\r\n* 1) It makes code simpler\r\n*\r\n* 2) It encourages code extensibility\r\n* */\r\n\r\npublic class Animal {\r\n\r\n    private String type;\r\n    private String size;\r\n    private double weight;\r\n\r\n    public Animal(){\r\n\r\n    }\r\n\r\n    public Animal(String type, String size, double weight) {\r\n        this.type = type;\r\n        this.size = size;\r\n        this.weight = weight;\r\n    }\r\n\r\n    public Animal(String type, double weight){\r\n        String size = (weight < 15 ? \"small\" : (weight < 35 ? \"medium\" : \"large\"));\r\n        this.size = size;\r\n        this.type = type;\r\n    }\r\n\r\n\r\n    // This method has overridden the Object toString method\r\n    // It got override by the toString method of Dog Class and Fish Class\r\n    @Override\r\n    public String toString() {\r\n        return \"Animal{\" +\r\n                \"type='\" + type + '\\'' +\r\n                \", size='\" + size + '\\'' +\r\n                \", weight=\" + weight +\r\n                '}';\r\n    }\r\n\r\n    // This method got override by the Fish Class and the Animal Class\r\n    public void move(String speed){\r\n        System.out.println(type + \" moves \" + speed);\r\n    }\r\n\r\n   // This method got override by the Animal Class\r\n    public void makeNoise(){\r\n        System.out.println(type + \" makes noise\");\r\n    }\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Dog.java",
        "fileName": "Dog.java",
        "topicName": "Dog",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Dog inherits from Animal",
              "Dog \"IS A\" a type of Animal",
              "Dog is a subclass or child class of Animal",
              "Animal is a parent or super class of Dog",
              "When a Dog object gets created, it will inherit Animal's attributes (type, size and weight).",
              "This is also true for Animal's methods. Dog will inherit these as well.",
              "Dog class can be specialised with its own fields and behaviour."
            ]
          }
        ],
        "inlineComments": [
          "Most Important Point :- A class can specify one and only one class in it's extends clause.",
          "Java creates a default constructor implicitly, if we don't explicitly declare 1",
          "Since we created a 2 parameter constructor in the parent class, the default constructor was not created automatically for the parent class by Java.",
          "This will call the no argument constructor of the parent class, if no constructors are defined in the parent's class, java will implicitly create one.",
          "Similarly, if no constructors are defined in the child class, java will implicitly create one for parent class too, and super() will also be implicitly defined (called) in the child class constructor, which in turn will call the implicitly defined constructor of parent class.",
          "But, let us suppose, an argument constructor is explicitly defined in the parent class, the child class will throw an error, as the implicitly defined super call to the parent constructor will fail as the implicitly defined super() call in the implicitly defined child constructor doesn't have any arguments.",
          "To resolve this, either the parent class should have an explicit no argument constructor defined, or the child class should explicitly call the parent class constructor using super(args1,args2) with arguments.",
          "This method overrides the toString method of the parent Animal Class",
          "This method overrides the makeNoise method of the parent Animal class",
          "This method overrides the move method of the parent Animal Class",
          "the parent class's method is called and include other code to run so it can extend the functionality for the Dog"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;\r\n\r\n/*\r\n* Dog inherits from Animal\r\n*\r\n* Dog \"IS A\" a type of Animal\r\n*\r\n* Dog is a subclass or child class of Animal\r\n*\r\n* Animal is a parent or super class of Dog\r\n*\r\n*\r\n* When a Dog object gets created, it will inherit Animal's attributes (type, size and weight).\r\n*\r\n* This is also true for Animal's methods. Dog will inherit these as well.\r\n*\r\n* Dog class can be specialised with its own fields and behaviour.\r\n*\r\n*\r\n*/\r\n\r\npublic class Dog extends Animal { // Using extends specifies the superclass ( or the parent class ) of the class that has been declatred\r\n\r\n    private String earShape;\r\n\r\n    private String tailShape;\r\n\r\n    private String type;\r\n\r\n// Most Important Point :- A class can specify one and only one class in it's extends clause.\r\n\r\n// Java creates a default constructor implicitly, if we don't explicitly declare 1\r\n   public Dog(){\r\n    // Since we created a 2 parameter constructor in the parent class, the default constructor was not created automatically for the parent class by Java.\r\n\r\n //   super(); // This will call the no argument constructor of the parent class, if no constructors are defined in the parent's class, java will implicitly create one.\r\n    // Similarly, if no constructors are defined in the child class, java will implicitly create one for parent class too, and super() will also be implicitly defined (called) in the child class constructor, which in turn will call the implicitly defined constructor of parent class.\r\n\r\n    // But, let us suppose, an argument constructor is explicitly defined in the parent class, the child class will throw an error, as the implicitly defined super call to the parent constructor will fail as the implicitly defined super() call in the implicitly defined child constructor doesn't have any arguments.\r\n\r\n    // To resolve this, either the parent class should have an explicit no argument constructor defined, or the child class should explicitly call the parent class constructor using super(args1,args2) with arguments.\r\n\r\n    \r\n/* super() is a lot like this()\r\n\r\nIt's a way to call a constructor on the super class directly from the sub class's constructor.\r\n\r\nLike this(), it has to be the first statement of the constructor.\r\n\r\nBecause of that rule, this() and super() can never be called from the same constructor.\r\n\r\nIf no explicit call is made to the super(),\r\nthen Java handles it using super's default constructor.\r\n\r\nIf the super class doesn't have a default constructor, then explicitly call to\r\nsuper() should be made in all child constructors, passing the right arguments to that constructor.\r\n*/\r\n\r\n    super(\"Mutt\",\"Big\", 50);\r\n    this.type = \"Mutt\";\r\n\r\n    }\r\n\r\n    public Dog(String type, double weight, String earShape, String tailShape) {\r\n        super(type, weight); // It calls the Animal Constructor that accepts two parameter :- type and weight\r\n        this.earShape = earShape;\r\n        this.tailShape = tailShape;\r\n        this.type = type;\r\n\r\n    }\r\n\r\n    public Dog(String type, double weight){\r\n       this(type,weight,\"Perky\",\"Curled\"); // It calls the Dog constructor that accepts 4 parameters :- type, weight, earShape, tailShape\r\n\r\n    }\r\n\r\n    // This method overrides the toString method of the parent Animal Class\r\n    @Override\r\n    public String toString() {\r\n        return \"Dog{\" +\r\n                \"earShape='\" + earShape + '\\'' +\r\n                \", tailShape='\" + tailShape + '\\'' +\r\n                '}' + super.toString();\r\n\r\n        /*\r\n        * The super keyword used above is different than the super parentheses call.\r\n        * It's a lot like using the this keyword with the dot notation to access a field on the current instance. This code lets us call a super class's method.\r\n        *\r\n        * If we want to call a method of a superclass we need to call super.methodName();\r\n        *\r\n        * */\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Here, below, the makeNoise method is overridden method of the parent Animal Class makeNoise method\r\n     * For all the dog objects(instances) the overridden method will be called, and since nothing is implemented,\r\n     * the makeNoise will not do anything\r\n     *\r\n     * */\r\n\r\n\r\n    // This method overrides the makeNoise method of the parent Animal class\r\n    public void makeNoise(){\r\n      //  System.out.println(type + \" makes some noise\");\r\n      //  super.makeNoise();\r\n        bark();\r\n    }\r\n\r\n\r\n    // This method overrides the move method of the parent Animal Class\r\n    public void move(String speed){\r\n     //   System.out.println(type + \" moves fast\");\r\n        // super.move(speed);\r\n        // System.out.println(\"Animals move very quickly\");\r\n\r\n        // the parent class's method is called and include other code to run so it can extend the functionality for the Dog\r\n        if(speed == \"slow\"){\r\n            walk();\r\n            wagTail();\r\n        } else{\r\n            run();\r\n          //  bark();\r\n        }\r\n    }\r\n\r\n    private void bark() {\r\n        System.out.println(\"Woof! \");\r\n    }\r\n\r\n    private void run() {\r\n        System.out.println(type + \" Running\");\r\n    }\r\n\r\n    private void walk(){\r\n        System.out.println(type + \" Walking\");\r\n    }\r\n\r\n    private void wagTail(){\r\n        System.out.println(\"Tail Wagging\");\r\n    }\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Fish.java",
        "fileName": "Fish.java",
        "topicName": "Fish",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance",
        "headerComments": [],
        "inlineComments": [
          "This method overrides the toString method of the parent Animal Class",
          "This method overrides the move method of the parent Animal Class"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;\r\n\r\npublic class Fish extends Animal{\r\n\r\n    private int gills;\r\n    private int fins;\r\n\r\n    public Fish(String type,double weight,int gills, int fins){\r\n        super(type,\"small\",weight); // The constructor of animal class is called, using constructor chaining\r\n        this.gills = gills;\r\n        this.fins = fins;\r\n    }\r\n\r\n    // This method overrides the toString method of the parent Animal Class\r\n    @Override\r\n    public String toString() { // The toString() method of Fish class is called, as it overrides the animal class toString() method\r\n        return \"Fish{\" +\r\n                \"gills=\" + gills +\r\n                \", fins=\" + fins +\r\n                \"} \" + super.toString(); // With the help of super.toString() the animal class toString() method is called\r\n    }\r\n\r\n    private void moveMuscles(){\r\n        System.out.println(\"muscle moving \");\r\n    }\r\n\r\n    private void moveBackFin(){\r\n        System.out.println(\"backfin moving \");\r\n    }\r\n\r\n    // This method overrides the move method of the parent Animal Class\r\n    public void move(String speed){\r\n        super.move(speed);\r\n        moveMuscles();\r\n        if(speed == \"fast\"){\r\n            moveBackFin();\r\n        }\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Inheritance.java",
        "fileName": "Inheritance.java",
        "topicName": "Inheritance",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent."
            ]
          },
          {
            "type": "block",
            "lines": [
              "Animal (Base Class)",
              "Vertebrates (Sub Class of Animal)",
              "Warm Blooded                   Cold Blooded",
              "Mammal              Bird       Fish             Reptiles",
              "Dog                  Cat      Salmon              GoldFish",
              "Each box on this diagram represents a Class",
              "The most generic, or base class, starts at the top of the hierarchy.",
              "Every class below it is a subclass.",
              "A baseclass or parent class can have multiple children.",
              "A child can only have one direct parent in Java, but it will inherit from its parents class's parents and so on.",
              "All subclasses can execute methods even though the code is declared on the parent class.",
              "The code doesn't have to be duplicated in each subclass.",
              "We can use code from the parent. Or we can change that code for the subclass."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Inheritance is a mechanism for code reuse — a child class inherits all accessible fields and methods from its parent.",
              "In Java, a class can only extend ONE direct parent (single inheritance), but inherits all the way up the hierarchy.",
              "The 'extends' keyword establishes the parent-child relationship: class Dog extends Animal",
              "\"IS-A\" relationship: Dog IS-A Animal. This means a Dog object can be used ANYWHERE an Animal is expected.",
              "When a Dog object is passed to a method expecting an Animal, Java accepts it — because Dog is a type of Animal.",
              "Java uses DYNAMIC DISPATCH (polymorphism at runtime) to call the correct overridden method.",
              "Example: doAnimalStuff(dog, \"fast\") — even though the parameter type is Animal, Java calls Dog's makeNoise() and move() methods.",
              "Every class in Java implicitly extends Object if no other class is specified. Object is the root of the class hierarchy.",
              "Inheritance hierarchy example:",
              "Object (root of all classes)",
              "+-- Animal",
              "+-- Dog",
              "+-- Fish"
            ]
          }
        ],
        "inlineComments": [
          "Since Dog inherits from animal.",
          "A dog object can be used as the method argument even though the type was declared as an animal.",
          "It works because dog inherits from animal, it's a type of animal",
          "A dog instance can be passed to any method that takes an animal",
          "Java checks the actual object type and uses its toString() method. If that class doesn't have toString(), it uses the parent class's version."
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "﻿package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;\r\n// Inheritance is a mechanism for code reuse — a child class inherits all accessible fields and methods from its parent.\n// In Java, a class can only extend ONE direct parent (single inheritance), but inherits all the way up the hierarchy.\n// The 'extends' keyword establishes the parent-child relationship: class Dog extends Animal\n// \"IS-A\" relationship: Dog IS-A Animal. This means a Dog object can be used ANYWHERE an Animal is expected.\n// When a Dog object is passed to a method expecting an Animal, Java accepts it — because Dog is a type of Animal.\n// Java uses DYNAMIC DISPATCH (polymorphism at runtime) to call the correct overridden method.\n//   Example: doAnimalStuff(dog, \"fast\") — even though the parameter type is Animal, Java calls Dog's makeNoise() and move() methods.\n// Every class in Java implicitly extends Object if no other class is specified. Object is the root of the class hierarchy.\n// Inheritance hierarchy example:\n//   Object (root of all classes)\n//     +-- Animal\n//           +-- Dog\n//           +-- Fish\r\n/*\r\n  Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child\r\n  hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.\r\n*\r\n*\r\n* */\r\n\r\n/*\r\n*                                      Animal (Base Class)\r\n*                                        |\r\n*                                        |\r\n*                                    Vertebrates (Sub Class of Animal)\r\n*                                        |\r\n*                         _______________|_______________\r\n*                         |                             |\r\n*                         |                             |\r\n*                    Warm Blooded                   Cold Blooded\r\n*                         |                             |\r\n*                _________|__________          _________|__________\r\n*                |                  |          |                  |\r\n*                |                  |          |                  |\r\n*              Mammal              Bird       Fish             Reptiles\r\n*                |                             |\r\n*     ___________|__________         __________|__________\r\n*     |                    |         |                   |\r\n*     |                    |         |                   |\r\n*    Dog                  Cat      Salmon              GoldFish\r\n*\r\n* Each box on this diagram represents a Class\r\n*\r\n* The most generic, or base class, starts at the top of the hierarchy.\r\n*\r\n* Every class below it is a subclass.\r\n*\r\n* A baseclass or parent class can have multiple children.\r\n*\r\n* A child can only have one direct parent in Java, but it will inherit from its parents class's parents and so on.\r\n*\r\n* All subclasses can execute methods even though the code is declared on the parent class.\r\n*\r\n* The code doesn't have to be duplicated in each subclass.\r\n*\r\n* We can use code from the parent. Or we can change that code for the subclass.\r\n*\r\n*\r\n */\r\n\r\n\r\npublic class Inheritance {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Animal animal = new Animal(\"Generic Animal\", \"Huge\", 400);\r\n       doAnimalStuff(animal,\"slow\");\r\n\r\n\r\n       Dog dog = new Dog();\r\n       // Since Dog inherits from animal,\r\n\r\n        // A dog object can be used as the method argument even though the type was declared as an animal.\r\n        // It works because dog inherits from animal, it's a type of animal\r\n        // A dog instance can be passed to any method that takes an animal\r\n\r\n       doAnimalStuff(dog,\"fast\");\r\n\r\n\r\n       /*\r\n\r\n       If only super() is called from the Dog() constructor then :-\r\n\r\n          Output :-\r\n       *  null makes some kind of noise\r\n       *  null moves fast\r\n       *  Since Dog() constructor called the super() with no arguments passed,\r\n       *  so nothing got set on the Animal Class\r\n       *  but dog has inherited all of animal's attributes.\r\n       *  The values have the default values for their type because there is no way,\r\n       *  to pass any data to these fields on dog\r\n       *\r\n       * */\r\n\r\n/*        If super(\"Mutt\",\"Big\", 50) is called from the Dog() constructor then :-\r\n\r\n          Output :-\r\n       *  Mutt makes some kind of noise\r\n       *  Mutt moves fast\r\n       *  Since the Dog constructor calls the parameterized Animal constructor,\r\n          all values are stored in the Animal class fields.\r\n       *\r\n*/\r\n\r\n        Dog dog1 = new Dog(\"Yorkie\",15);  // Constructor chaining is used in this object creation\r\n        doAnimalStuff(dog1,\"Fast\");\r\n\r\n        Fish goldie = new Fish(\"GoldFish\",0.25,2,5);\r\n        doAnimalStuff(goldie,\"fast\");\r\n\r\n\r\n    }\r\n\r\n    public static void doAnimalStuff(Animal animal, String speed){\r\n        animal.makeNoise();\r\n        animal.move(speed);\r\n        System.out.println(animal);\r\n        System.out.println(\"*************************************************************************************\");\r\n        // Java checks the actual object type and uses its toString() method. If that class doesn't have toString(), it uses the parent class's version.\r\n\r\n\r\n    }\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/ObjectClass/Main.java",
        "fileName": "Main.java",
        "topicName": "Main",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Every class created in Java extends a special Java class.",
              "That class is named Object, and it's in the java.lang package.",
              "Class Object is the root of the class hierarchy.",
              "All classes, which do not explicitly extend another class will implicitly extend a class named object",
              "Every class has Object as a superclass. All objects, including arrays, implement the methods of this class.",
              "Java only supports 1 class in the extends class"
            ]
          },
          {
            "type": "lines",
            "lines": [
              "Since, every class in java, implicitly extend object, there is no need to explicitly extend the Object class"
            ]
          }
        ],
        "inlineComments": [
          "Since the toString method, is explicitly called by an object, there is no need to make an explicit call to toString method from an object",
          "Output :- Here, the toString method is actually the parent class toString method, which in this case is Object Class",
          "This override is redundant, as it is simply calling the parent class toString() method, and hence, will give the same output, when the toString() method was called without overriding",
          "The parent class toString() method is implicitly called, when super.toString() is explicitly called"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample.ObjectClass;\r\n\r\n/*\r\n* Every class created in Java extends a special Java class.\r\n*\r\n* That class is named Object, and it's in the java.lang package.\r\n*\r\n* Class Object is the root of the class hierarchy.\r\n*\r\n* All classes, which do not explicitly extend another class will implicitly extend a class named object\r\n*\r\n* Every class has Object as a superclass. All objects, including arrays,\r\n  implement the methods of this class.\r\n*\r\n* Java only supports 1 class in the extends class\r\n*\r\n*\r\n* */\r\n\r\n\r\n// Since, every class in java, implicitly extend object, there is no need to explicitly extend the Object class\r\npublic class Main extends Object{\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Student s = new Student(\"Navneet\", 21);\r\n      //  System.out.println(s.toString());\r\n        // Since the toString method, is explicitly called by an object,\r\n        // there is no need to make an explicit call to toString method from an object\r\n        System.out.println(s);\r\n        // Output :- Here, the toString method is actually the parent class toString method, which in this case is Object Class\r\n\r\n        PrimarySchoolStudent primarySchoolStudent = new PrimarySchoolStudent(\"Navneet\", 21,\"Puttu\");\r\n        System.out.println(primarySchoolStudent.toString());\r\n    }\r\n\r\n}\r\n\r\nclass Student {\r\n\r\n    private String name;\r\n    private int age;\r\n\r\n    Student(String name, int age){\r\n        this.name = name;\r\n        this.age = age;\r\n    }\r\n\r\n//    @Override\r\n//    public String toString() {\r\n//        return super.toString(); // This override is redundant, as it is simply calling the parent class toString() method, and hence, will give the same output, when the toString() method was called without overriding\r\n//        // The parent class toString() method is implicitly called, when super.toString() is explicitly called\r\n//    }\r\n\r\n\r\n        @Override\r\n    public String toString() {\r\n        return \"Student{\" +\r\n                \"name='\" + name + '\\'' +\r\n                \", age=\" + age +\r\n                '}';\r\n    }\r\n\r\n}\r\n\r\nclass PrimarySchoolStudent extends Student { //,Object // Class cannot extend multiple class {\r\n\r\n    private String parentName;\r\n\r\n    PrimarySchoolStudent(String name, int age, String parentName){\r\n        super(name,age); // Call to parent constructor is been made\r\n        this.parentName = parentName;\r\n    }\r\n\r\n    @Override\r\n    public String toString() {\r\n        return \"PrimarySchoolStudent{\" +\r\n                \"parentName='\" + parentName + '\\'' +\r\n                \"} \" + super.toString();\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Employee.java",
        "fileName": "Employee.java",
        "topicName": "Employee",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Employee Class Extends the Worker Class"
            ]
          }
        ],
        "inlineComments": [
          "Here the employeeNumber is taken as static, hence, whenever a new employee gets created, the employeeId gets incremented by 1",
          "An Employee constructor is created, that accepts name, birthDate and hireDate as the parameters",
          "The name and birthDate information gets set in the worker class using constructor chaining using super keyword, whenever the Employee constructor is called"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;\r\n\r\n/* Employee Class Extends the Worker Class */\r\npublic class Employee extends Worker {\r\n\r\n    /*\r\n    * Two new fields are introduced for Employee class, employeeId, hireDate\r\n    * */\r\n    private int employeeId;\r\n    private String hireDate;\r\n\r\n    // Here the employeeNumber is taken as static, hence, whenever a new employee gets created, the employeeId gets incremented by 1\r\n    private static int employeeNumber = 1;\r\n\r\n\r\n    // An Employee constructor is created, that accepts name, birthDate and hireDate as the parameters\r\n    public Employee(String name, String birthDate,  String hireDate) {\r\n        super(name, birthDate); // With the help of super keyword, the Worker constructor is called, through constructor chaining\r\n        // The name and birthDate information gets set in the worker class using constructor chaining using super keyword, whenever the Employee constructor is called\r\n        this.employeeId = Employee.employeeNumber++;\r\n        this.hireDate = hireDate;\r\n    }\r\n\r\n    /* Here, the toString() method of the Worker Class is overridden, and with the help of super.toString(),\r\n       the toString() method of Worker class is called   */\r\n    @Override\r\n    public String toString() {\r\n        return \"Employee{\" +\r\n                \"employeeId=\" + employeeId +\r\n                \", hireDate='\" + hireDate + '\\'' +\r\n                \"} \" + super.toString(); // Worker class toString() method is called\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/HourlyEmployee.java",
        "fileName": "HourlyEmployee.java",
        "topicName": "Hourly Employee",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "The HourlyEmployee Class extends the Employee Class"
            ]
          }
        ],
        "inlineComments": [
          "The name and birthDate information gets set in the Worker class using constructor chaining using super keyword, whenever the Employee constructor is called as the Employee constructor then calls Worker constructor using super keyword (constructor chaining)",
          "The hireDate information gets set in the Employee Class, using constructor chaining using super keyword, whenever the SalariedEmployee constructor is called"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;\r\n\r\n// The HourlyEmployee Class extends the Employee Class\r\npublic class HourlyEmployee extends Employee {\r\n\r\n    /*\r\n     * Here, 1 new field is introduced for HourlyEmployee Class, namely hourlyRate\r\n     * */\r\n    private double hourlyRate;\r\n\r\n    /*\r\n     * An Hourly employee constructor is created, that accepts name, birthDate, hireDate and hourlyRate as the parameters\r\n     * */\r\n\r\n    public HourlyEmployee(String name, String birthDate, String hireDate, double hourlyRate) {\r\n        super(name, birthDate, hireDate); // With the help of super keyword, the Employee constructor is called, through constructor chaining\r\n        // The name and birthDate information gets set in the Worker class using constructor chaining using super keyword, whenever the Employee constructor is called as the Employee constructor then calls Worker constructor using super keyword (constructor chaining)\r\n        // The hireDate information gets set in the Employee Class, using constructor chaining using super keyword, whenever the SalariedEmployee constructor is called\r\n        this.hourlyRate = hourlyRate;\r\n    }\r\n\r\n    /*\r\n     * The Worker class collectPay() method is being overridden in the SalariedEmployeeClass\r\n     * */\r\n    @Override\r\n    public double collectPay() {\r\n        return 40 * hourlyRate;\r\n    }\r\n\r\n    public double getDoublePay(){\r\n        return 2 * collectPay();\r\n    }\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Main.java",
        "fileName": "Main.java",
        "topicName": "Main",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
              "Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.",
              "Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours.",
              "Constructor chaining (super()) passes data up through the hierarchy — HourlyEmployee → Employee → Worker.",
              "This demonstrates polymorphism: calling collectPay() on an Employee reference calls the correct subclass implementation."
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;\r\n\r\n// This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.\r\n// Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.\r\n// Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours.\r\n// Constructor chaining (super()) passes data up through the hierarchy — HourlyEmployee → Employee → Worker.\r\n// This demonstrates polymorphism: calling collectPay() on an Employee reference calls the correct subclass implementation.\r\n\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n        Employee tim = new Employee(\"Tim\",\"11/11/1985\",\"01/01/2010\");\r\n        System.out.println(tim);\r\n        System.out.println(\"Age = \" + tim.getAge());\r\n        System.out.println(\"Pay = \" + tim.collectPay());\r\n\r\n        SalariedEmployee joe = new SalariedEmployee(\"Joe\",\"11/11/1990\",\"03/03/2020\",35000);\r\n        System.out.println(joe);\r\n        System.out.println(\"Joe's paycheck = $\" + (int)joe.collectPay());\r\n        joe.retire();\r\n        System.out.println(\"Joe's retirement pension paycheck = $\" + (int)joe.collectPay());\r\n\r\n\r\n        HourlyEmployee mary = new HourlyEmployee(\"Mary\",\"05/05/1984\",\"05/06/2009\",20);\r\n        System.out.println(mary);\r\n        System.out.println(\"Mary's paycheck = $\" + (int)mary.collectPay());\r\n        System.out.println(\"Mary's Holiday Pay = $\" + (int)mary.getDoublePay());\r\n\r\n    }\r\n\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/SalariedEmployee.java",
        "fileName": "SalariedEmployee.java",
        "topicName": "Salaried Employee",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance Coding Challenge",
        "headerComments": [
          {
            "type": "lines",
            "lines": [
              "The salaried employee class, extends the Employee Class"
            ]
          }
        ],
        "inlineComments": [
          "The name and birthDate information gets set in the Worker class using constructor chaining using super keyword, whenever the Employee constructor is called as the Employee constructor then calls Worker constructor using super keyword (constructor chaining)",
          "The hireDate information gets set in the Employee Class, using constructor chaining using super keyword, whenever the SalariedEmployee constructor is called",
          "The terminate(String endDate parameter) method of the Worker Class is called"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;\r\n\r\n// The salaried employee class, extends the Employee Class\r\npublic class SalariedEmployee extends Employee {\r\n\r\n    /*\r\n    * Here, 2 new fields are introduced for SalariedEmployee Class, namely annualSalary, isRetired\r\n    * */\r\n    private double annualSalary;\r\n    private boolean isRetired;\r\n\r\n\r\n    /*\r\n    * A Salaried employee constructor is created, that accepts name, birthDate, hireDate and annualSalary as the parameters\r\n    * */\r\n\r\n    public SalariedEmployee(String name, String birthDate, String hireDate, double annualSalary) {\r\n        super(name, birthDate, hireDate); // With the help of super keyword, the Employee constructor is called, through constructor chaining\r\n        // The name and birthDate information gets set in the Worker class using constructor chaining using super keyword, whenever the Employee constructor is called as the Employee constructor then calls Worker constructor using super keyword (constructor chaining)\r\n        // The hireDate information gets set in the Employee Class, using constructor chaining using super keyword, whenever the SalariedEmployee constructor is called\r\n        this.annualSalary = annualSalary;\r\n    }\r\n\r\n\r\n    public void retire(){\r\n        // The terminate(String endDate parameter) method of the Worker Class is called\r\n       terminate(\"12/12/2025\");\r\n       isRetired = true;\r\n    }\r\n\r\n\r\n    /*\r\n     * The Worker class collectPay() method is being overridden in the SalariedEmployeeClass\r\n     * */\r\n\r\n    @Override\r\n    public double collectPay() {\r\n\r\n        double salary = annualSalary / 26;\r\n\r\n        double adjustedPay = (isRetired) ? 0.9 * salary : salary;\r\n\r\n        return adjustedPay;\r\n    }\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Worker.java",
        "fileName": "Worker.java",
        "topicName": "Worker",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Inheritance Coding Challenge",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Inheritance Challenge Problem",
              "Create Worker Class -> This should be on top of the Hierarchy",
              "Create attributes :-",
              "name      : String birthDate : String endDate   : String intGetAge() double collectPay() terminate(String endDate)",
              "Below the Worker Class, introduce another Class named Employee which extends the Worker Class",
              "Create Attributes :-",
              "employeeId : long hireDate   : String",
              "Create Two more classes, SalariedEmployee Class and HourlyEmployee Class, both of them extends Employee",
              "For SalariedEmployee, Create Attributes :-",
              "annualSalary : double isRetired    : boolean retire()",
              "For HourlyEmployee, Create Attributes :-",
              "hourlyPayRate : double getDoublePay()"
            ]
          }
        ],
        "inlineComments": [
          "Since name and birthDate are supposed to be used only by the worker class, it makes sense to make it private",
          "Since, endDate value might get set either by this class, or subclass, it would make sense to make it protected",
          "In real world scenario, it would be highly unlikely that we would be knowing a worker's end date, hence in the arg constructor, it would make sense, that we should only include two variables namely name and birthDate",
          "Adding a no argument constructor can also provide more flexibility, hence adding 1 no arg constructor to this class"
        ],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;\r\n\r\n\r\n/*  Inheritance Challenge Problem\r\n\r\nCreate Worker Class -> This should be on top of the Hierarchy\r\n\r\nCreate attributes :-\r\nname      : String\r\nbirthDate : String\r\nendDate   : String\r\nintGetAge()\r\ndouble collectPay()\r\nterminate(String endDate)\r\n\r\nBelow the Worker Class, introduce another Class named Employee which extends the Worker Class\r\n\r\nCreate Attributes :-\r\nemployeeId : long\r\nhireDate   : String\r\n\r\nCreate Two more classes, SalariedEmployee Class and HourlyEmployee Class, both of them extends Employee\r\n\r\nFor SalariedEmployee, Create Attributes :-\r\nannualSalary : double\r\nisRetired    : boolean\r\nretire()\r\n\r\nFor HourlyEmployee, Create Attributes :-\r\nhourlyPayRate : double\r\ngetDoublePay()\r\n\r\n*\r\n* */\r\npublic class Worker {\r\n\r\n// Since name and birthDate are supposed to be used only by the worker class, it makes sense to make it private\r\n\r\n// Since, endDate value might get set either by this class, or subclass, it would make sense to make it protected\r\n    private String name;\r\n    private String birthDate;\r\n    protected String endDate;\r\n\r\n// In real world scenario, it would be highly unlikely that we would be knowing a worker's end date, hence in the arg constructor,\r\n// it would make sense, that we should only include two variables namely name and birthDate\r\n\r\n    public Worker(String name, String birthDate) {\r\n        this.name = name;\r\n        this.birthDate = birthDate;\r\n    }\r\n\r\n// Adding a no argument constructor can also provide more flexibility, hence adding 1 no arg constructor to this class\r\n\r\n    public Worker(){\r\n\r\n    }\r\n\r\n\r\n\r\n    public int getAge(){\r\n        int currentYear = 2025;\r\n        int birthYear = Integer.parseInt(birthDate.substring(6));\r\n\r\n        return (currentYear - birthYear);\r\n    }\r\n\r\n\r\n/* The idea is to override the collectPay and terminate method by the subclasses so that specific implementation\r\n   can be processed by the sub class */\r\n\r\n    public double collectPay(){\r\n        return 0.0;\r\n    }\r\n\r\n    public void terminate(String endDate){\r\n        this.endDate = endDate;\r\n    }\r\n\r\n/*\r\n* Here, the toString method is overridden, which overrides the toString method of the Object Class\r\n* */\r\n\r\n    @Override\r\n    public String toString() {\r\n        return \"Worker{\" +\r\n                \"name='\" + name + '\\'' +\r\n                \", birthDate='\" + birthDate + '\\'' +\r\n                \", endDate='\" + endDate + '\\'' +\r\n                '}';\r\n    }\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_13_Method_Overloading_Vs_Method_Overriding/MethodOverLoadingVsMethodOverridingDifference.java",
        "fileName": "MethodOverLoadingVsMethodOverridingDifference.java",
        "topicName": "Method Over Loading Vs Method Overriding Difference",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Method Overloading Vs Method Overriding",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Method OverLoading",
              "1) Provides functionality to reuse a method name with different parameters.",
              "2) Usually in a single class but also can be used in a child class",
              "3) Must have different return types",
              "4) Must have different access modifiers ( private, protected, public )",
              "5) May throw different exceptions",
              "Method Overriding",
              "1) Used to override a behavior which the class has inherited from the parent Class",
              "2) Always in two classes that have a child parent or IS-A relationship",
              "3) Must have the same parameters and same name",
              "4) Must have the same return type or covariant return type ( child class )",
              "5) Must not have a lower modifier bur may have a higher modifier",
              "6) Must not throw a new or broader checked exception"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [],
        "deepChallenges": [],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_13_Method_Overloading_Vs_Method_Overriding;\r\n\r\npublic class MethodOverLoadingVsMethodOverridingDifference {\r\n\r\n\r\n    /*\r\n    * Method OverLoading\r\n    *\r\n    * 1) Provides functionality to reuse a method name with different parameters.\r\n    *\r\n    * 2) Usually in a single class but also can be used in a child class\r\n    *\r\n    * 3) Must have different return types\r\n    *\r\n    * 4) Must have different access modifiers ( private, protected, public )\r\n    *\r\n    * 5) May throw different exceptions\r\n    *\r\n    * Method Overriding\r\n    *\r\n    * 1) Used to override a behavior which the class has inherited from the parent Class\r\n    *\r\n    * 2) Always in two classes that have a child parent or IS-A relationship\r\n    *\r\n    * 3) Must have the same parameters and same name\r\n    *\r\n    * 4) Must have the same return type or covariant return type ( child class )\r\n    *\r\n    * 5) Must not have a lower modifier bur may have a higher modifier\r\n    *\r\n    * 6) Must not throw a new or broader checked exception\r\n    *\r\n    * */\r\n\r\n\r\n}\r\n"
      },
      {
        "filePath": "src/Chapter_14_OOPSConcepts/Sub_Chapter_13_Method_Overloading_Vs_Method_Overriding/MethodOverridingInJava.java",
        "fileName": "MethodOverridingInJava.java",
        "topicName": "Method Overriding In Java",
        "chapter": "Chapter 14: OOP Concepts",
        "subChapter": "Method Overloading Vs Method Overriding",
        "headerComments": [
          {
            "type": "block",
            "lines": [
              "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters).",
              "By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods.",
              "Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine.",
              "When we override a method, it's recommended to put @Override immediately above the method definition.",
              "The @Override statement is not required, but it's a way to get the compiler to flag an error if you don't actually properly override this method.",
              "We'll get an error if we don't follow the overriding rules correctly for that method.",
              "We can't override static methods,only instance methods can be overridden.",
              "Method overriding rules",
              "A method will be considered overridden if we follow these rules.",
              "1) Firstly, It must have the same name and same arguments.",
              "2) The return type can be a subclass of the return type in the parent class.",
              "3) It can't have a lower access modifier. In other words, it can't have more restrictive access privileges. For example, if the parent's method is protected, then using private in the child's overridden method is not allowed. However, using public for the child's method would be allowed, in this example.",
              "4) Only inherited methods can be overridden, in other words, methods can be overridden only in child classes.",
              "5) Constructors and private methods cannot be overridden.",
              "6) And Methods that are final also cannot be overridden.",
              "7) A subclass can use super.methodName() to call the superclass version of an overridden method."
            ]
          },
          {
            "type": "lines",
            "lines": [
              "@quiz (INTERVIEW) What is method overriding in Java?",
              "@answer Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class.",
              "@answer The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch).",
              "@answer The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type.",
              "@quiz (INTERVIEW) What is the difference between method overloading and method overriding?",
              "@answer Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism).",
              "@answer Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism).",
              "@answer Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical.",
              "@quiz (INTERVIEW) What are the rules for method overriding in Java?",
              "@answer 1) Same method name and same parameters (signature must match exactly).",
              "@answer 2) Return type must be the same OR a subclass (covariant return type — Java 5+).",
              "@answer 3) Access modifier cannot be MORE restrictive (public > protected > default > private). Can be less restrictive.",
              "@answer 4) Only inherited (non-private, non-static, non-final) methods can be overridden.",
              "@answer 5) Constructors and private methods CANNOT be overridden.",
              "@answer 6) final methods CANNOT be overridden — compiler error.",
              "@answer 7) static methods CANNOT be overridden — they are hidden (method hiding), not overridden.",
              "@quiz (OCJP TRAP) What is the output? class Animal { void speak(){ System.out.println(\"Animal\"); } } class Dog extends Animal { void speak(){ System.out.println(\"Dog\"); } } Animal a = new Dog(); a.speak();",
              "@answer Output: Dog",
              "@answer Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism.",
              "@answer TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method.",
              "@quiz (OCJP TRAP) Can you override a static method in Java?",
              "@answer NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding.",
              "@answer With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference.",
              "@answer @Override annotation on a static method causes a COMPILE ERROR.",
              "@quiz (OCJP TRAP) What is the output? class Parent { String name = \"Parent\"; void show() { System.out.println(\"Parent show\"); } } class Child extends Parent { String name = \"Child\"; void show() { System.out.println(\"Child show\"); } } Parent p = new Child(); System.out.println(p.name); p.show();",
              "@answer Output: Parent (then) Child show",
              "@answer Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field.",
              "@answer Methods are resolved at RUNTIME based on object type → p.show() calls Child's show().",
              "@answer CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object).",
              "@quiz (INTERVIEW) What is covariant return type in method overriding?",
              "@answer Java 5+ allows the overriding method to return a subtype of the parent method's return type.",
              "@answer Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid.",
              "@answer Why useful: allows more specific return types without breaking the contract.",
              "@quiz (INTERVIEW) What is the purpose of the @Override annotation?",
              "@answer It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method.",
              "@answer Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs.",
              "@answer Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't.",
              "@quiz (INTERVIEW) Can a private method be overridden?",
              "@answer NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override.",
              "@answer @Override on a \"private method override\" will cause a compile error.",
              "@quiz (INTERVIEW) What happens when you call super.methodName() inside an overriding method?",
              "@answer It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour.",
              "@answer Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields.",
              "@quiz (INTERVIEW) Can a constructor be overridden?",
              "@answer NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s).",
              "@answer Constructors can be OVERLOADED (same class, different parameters) but not overridden.",
              "@challenge Design a Shape hierarchy demonstrating method overriding",
              "@desc Create a Shape base class with area() and perimeter() methods. Override in Circle, Rectangle, and Triangle subclasses. Add a printInfo() method in Shape that calls area() and perimeter() — demonstrate polymorphism by storing all shapes in a Shape[] array and calling printInfo() on each.",
              "@hint area() and perimeter() in Shape should either be abstract or return 0.0. Each subclass overrides with real formula. Circle: area = π*r², perimeter = 2*π*r. Rectangle: area = l*w, perimeter = 2*(l+w).",
              "@testcase Shape[] shapes = {new Circle(5), new Rectangle(4,6), new Triangle(3,4,5)}; for(Shape s: shapes) s.printInfo(); — should print area and perimeter of each",
              "@challenge Demonstrate the field hiding vs method overriding trap",
              "@desc Create a Parent class with a String field name=\"Parent\" and void display(). Create Child extending Parent with name=\"Child\" and override display(). Show that: (1) Parent ref = new Child() — which name is accessed? (2) which display() is called? Explain why.",
              "@hint Fields use compile-time (reference) binding. Methods use runtime (object) binding. This is one of the most common OCJP traps.",
              "@testcase Parent p = new Child(); p.name should be \"Parent\". p.display() should call Child's version.",
              "@challenge Implement a polymorphic payment system using method overriding",
              "@desc Create Payment base class with processPayment(double amount). Override in CreditCardPayment, UPIPayment, NetBankingPayment. Each adds its own processing fee logic. Process a list of mixed payments polymorphically.",
              "@hint Store all payment types as Payment[] array. Call processPayment() on each — Java will dispatch to the right subclass at runtime. This is real-world polymorphism.",
              "@testcase payments[0] = new CreditCardPayment(); payments[1] = new UPIPayment(); for(Payment p: payments) p.processPayment(1000.0);"
            ]
          }
        ],
        "inlineComments": [],
        "customQuizzes": [
          {
            "question": "(INTERVIEW) What is method overriding in Java?",
            "answers": [
              "Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class.",
              "The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch).",
              "The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type."
            ]
          },
          {
            "question": "(INTERVIEW) What is the difference between method overloading and method overriding?",
            "answers": [
              "Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism).",
              "Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism).",
              "Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical."
            ]
          },
          {
            "question": "(INTERVIEW) What are the rules for method overriding in Java?",
            "answers": [
              "1) Same method name and same parameters (signature must match exactly).",
              "2) Return type must be the same OR a subclass (covariant return type — Java 5+).",
              "3) Access modifier cannot be MORE restrictive (public > protected > default > private). Can be less restrictive.",
              "4) Only inherited (non-private, non-static, non-final) methods can be overridden.",
              "5) Constructors and private methods CANNOT be overridden.",
              "6) final methods CANNOT be overridden — compiler error.",
              "7) static methods CANNOT be overridden — they are hidden (method hiding), not overridden."
            ]
          },
          {
            "question": "(OCJP TRAP) What is the output? class Animal { void speak(){ System.out.println(\"Animal\"); } } class Dog extends Animal { void speak(){ System.out.println(\"Dog\"); } } Animal a = new Dog(); a.speak();",
            "answers": [
              "Output: Dog",
              "Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism.",
              "TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method."
            ]
          },
          {
            "question": "(OCJP TRAP) Can you override a static method in Java?",
            "answers": [
              "NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding.",
              "With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference.",
              "@Override annotation on a static method causes a COMPILE ERROR."
            ]
          },
          {
            "question": "(OCJP TRAP) What is the output? class Parent { String name = \"Parent\"; void show() { System.out.println(\"Parent show\"); } } class Child extends Parent { String name = \"Child\"; void show() { System.out.println(\"Child show\"); } } Parent p = new Child(); System.out.println(p.name); p.show();",
            "answers": [
              "Output: Parent (then) Child show",
              "Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field.",
              "Methods are resolved at RUNTIME based on object type → p.show() calls Child's show().",
              "CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object)."
            ]
          },
          {
            "question": "(INTERVIEW) What is covariant return type in method overriding?",
            "answers": [
              "Java 5+ allows the overriding method to return a subtype of the parent method's return type.",
              "Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid.",
              "Why useful: allows more specific return types without breaking the contract."
            ]
          },
          {
            "question": "(INTERVIEW) What is the purpose of the @Override annotation?",
            "answers": [
              "It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method.",
              "Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs.",
              "Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't."
            ]
          },
          {
            "question": "(INTERVIEW) Can a private method be overridden?",
            "answers": [
              "NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override.",
              "@Override on a \"private method override\" will cause a compile error."
            ]
          },
          {
            "question": "(INTERVIEW) What happens when you call super.methodName() inside an overriding method?",
            "answers": [
              "It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour.",
              "Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields."
            ]
          },
          {
            "question": "(INTERVIEW) Can a constructor be overridden?",
            "answers": [
              "NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s).",
              "Constructors can be OVERLOADED (same class, different parameters) but not overridden."
            ]
          }
        ],
        "deepChallenges": [
          {
            "title": "Design a Shape hierarchy demonstrating method overriding",
            "desc": [
              "Create a Shape base class with area() and perimeter() methods. Override in Circle, Rectangle, and Triangle subclasses. Add a printInfo() method in Shape that calls area() and perimeter() — demonstrate polymorphism by storing all shapes in a Shape[] array and calling printInfo() on each."
            ],
            "hints": [
              "area() and perimeter() in Shape should either be abstract or return 0.0. Each subclass overrides with real formula. Circle: area = π*r², perimeter = 2*π*r. Rectangle: area = l*w, perimeter = 2*(l+w)."
            ],
            "testcases": [
              "Shape[] shapes = {new Circle(5), new Rectangle(4,6), new Triangle(3,4,5)}; for(Shape s: shapes) s.printInfo(); — should print area and perimeter of each"
            ]
          },
          {
            "title": "Demonstrate the field hiding vs method overriding trap",
            "desc": [
              "Create a Parent class with a String field name=\"Parent\" and void display(). Create Child extending Parent with name=\"Child\" and override display(). Show that: (1) Parent ref = new Child() — which name is accessed? (2) which display() is called? Explain why."
            ],
            "hints": [
              "Fields use compile-time (reference) binding. Methods use runtime (object) binding. This is one of the most common OCJP traps."
            ],
            "testcases": [
              "Parent p = new Child(); p.name should be \"Parent\". p.display() should call Child's version."
            ]
          },
          {
            "title": "Implement a polymorphic payment system using method overriding",
            "desc": [
              "Create Payment base class with processPayment(double amount). Override in CreditCardPayment, UPIPayment, NetBankingPayment. Each adds its own processing fee logic. Process a list of mixed payments polymorphically."
            ],
            "hints": [
              "Store all payment types as Payment[] array. Call processPayment() on each — Java will dispatch to the right subclass at runtime. This is real-world polymorphism."
            ],
            "testcases": [
              "payments[0] = new CreditCardPayment(); payments[1] = new UPIPayment(); for(Payment p: payments) p.processPayment(1000.0);"
            ]
          }
        ],
        "code": "package Chapter_14_OOPSConcepts.Sub_Chapter_13_Method_Overloading_Vs_Method_Overriding;\r\n\r\n/*\r\n*    Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In\r\n*    other words, the same name, and same parameters).\r\n*\r\n*    By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods.\r\n*\r\n*    Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine.\r\n*\r\n*    When we override a method, it's recommended to put @Override immediately above the method definition.\r\n*    The @Override statement is not required, but it's a way to get the compiler to flag\r\n*    an error if you don't actually properly override this method.\r\n*    We'll get an error if we don't follow the overriding rules correctly for that method.\r\n*\r\n*     We can't override static methods,only instance methods can be overridden.\r\n*\r\n*     Method overriding rules\r\n*\r\n*     A method will be considered overridden if we follow these rules.\r\n*\r\n*     1) Firstly, It must have the same name and same arguments.\r\n*     2) The return type can be a subclass of the return type in the parent class.\r\n*     3) It can't have a lower access modifier. In other words, it\r\n*     can't have more restrictive access privileges. For example, if the parent's method is protected, then\r\n*     using private in the child's overridden method is not allowed. However, using public for the child's\r\n*     method would be allowed, in this example.\r\n*     4) Only inherited methods can be overridden, in other words, methods can be overridden only in child classes.\r\n*     5) Constructors and private methods cannot be overridden.\r\n*     6) And Methods that are final also cannot be overridden.\r\n*     7) A subclass can use super.methodName() to call the superclass version of an overridden method.\r\n*\r\n*\r\n*\r\n* */\r\n\r\n// @quiz (INTERVIEW) What is method overriding in Java?\r\n// @answer Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class.\r\n// @answer The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch).\r\n// @answer The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type.\r\n\r\n// @quiz (INTERVIEW) What is the difference between method overloading and method overriding?\r\n// @answer Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism).\r\n// @answer Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism).\r\n// @answer Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical.\r\n\r\n// @quiz (INTERVIEW) What are the rules for method overriding in Java?\r\n// @answer 1) Same method name and same parameters (signature must match exactly).\r\n// @answer 2) Return type must be the same OR a subclass (covariant return type — Java 5+).\r\n// @answer 3) Access modifier cannot be MORE restrictive (public > protected > default > private). Can be less restrictive.\r\n// @answer 4) Only inherited (non-private, non-static, non-final) methods can be overridden.\r\n// @answer 5) Constructors and private methods CANNOT be overridden.\r\n// @answer 6) final methods CANNOT be overridden — compiler error.\r\n// @answer 7) static methods CANNOT be overridden — they are hidden (method hiding), not overridden.\r\n\r\n// @quiz (OCJP TRAP) What is the output? class Animal { void speak(){ System.out.println(\"Animal\"); } } class Dog extends Animal { void speak(){ System.out.println(\"Dog\"); } } Animal a = new Dog(); a.speak();\r\n// @answer Output: Dog\r\n// @answer Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism.\r\n// @answer TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method.\r\n\r\n// @quiz (OCJP TRAP) Can you override a static method in Java?\r\n// @answer NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding.\r\n// @answer With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference.\r\n// @answer @Override annotation on a static method causes a COMPILE ERROR.\r\n\r\n// @quiz (OCJP TRAP) What is the output? class Parent { String name = \"Parent\"; void show() { System.out.println(\"Parent show\"); } } class Child extends Parent { String name = \"Child\"; void show() { System.out.println(\"Child show\"); } } Parent p = new Child(); System.out.println(p.name); p.show();\r\n// @answer Output: Parent (then) Child show\r\n// @answer Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field.\r\n// @answer Methods are resolved at RUNTIME based on object type → p.show() calls Child's show().\r\n// @answer CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object).\r\n\r\n// @quiz (INTERVIEW) What is covariant return type in method overriding?\r\n// @answer Java 5+ allows the overriding method to return a subtype of the parent method's return type.\r\n// @answer Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid.\r\n// @answer Why useful: allows more specific return types without breaking the contract.\r\n\r\n// @quiz (INTERVIEW) What is the purpose of the @Override annotation?\r\n// @answer It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method.\r\n// @answer Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs.\r\n// @answer Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't.\r\n\r\n// @quiz (INTERVIEW) Can a private method be overridden?\r\n// @answer NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override.\r\n// @answer @Override on a \"private method override\" will cause a compile error.\r\n\r\n// @quiz (INTERVIEW) What happens when you call super.methodName() inside an overriding method?\r\n// @answer It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour.\r\n// @answer Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields.\r\n\r\n// @quiz (INTERVIEW) Can a constructor be overridden?\r\n// @answer NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s).\r\n// @answer Constructors can be OVERLOADED (same class, different parameters) but not overridden.\r\n\r\n// @challenge Design a Shape hierarchy demonstrating method overriding\r\n// @desc Create a Shape base class with area() and perimeter() methods. Override in Circle, Rectangle, and Triangle subclasses. Add a printInfo() method in Shape that calls area() and perimeter() — demonstrate polymorphism by storing all shapes in a Shape[] array and calling printInfo() on each.\r\n// @hint area() and perimeter() in Shape should either be abstract or return 0.0. Each subclass overrides with real formula. Circle: area = π*r², perimeter = 2*π*r. Rectangle: area = l*w, perimeter = 2*(l+w).\r\n// @testcase Shape[] shapes = {new Circle(5), new Rectangle(4,6), new Triangle(3,4,5)}; for(Shape s: shapes) s.printInfo(); — should print area and perimeter of each\r\n\r\n// @challenge Demonstrate the field hiding vs method overriding trap\r\n// @desc Create a Parent class with a String field name=\"Parent\" and void display(). Create Child extending Parent with name=\"Child\" and override display(). Show that: (1) Parent ref = new Child() — which name is accessed? (2) which display() is called? Explain why.\r\n// @hint Fields use compile-time (reference) binding. Methods use runtime (object) binding. This is one of the most common OCJP traps.\r\n// @testcase Parent p = new Child(); p.name should be \"Parent\". p.display() should call Child's version.\r\n\r\n// @challenge Implement a polymorphic payment system using method overriding\r\n// @desc Create Payment base class with processPayment(double amount). Override in CreditCardPayment, UPIPayment, NetBankingPayment. Each adds its own processing fee logic. Process a list of mixed payments polymorphically.\r\n// @hint Store all payment types as Payment[] array. Call processPayment() on each — Java will dispatch to the right subclass at runtime. This is real-world polymorphism.\r\n// @testcase payments[0] = new CreditCardPayment(); payments[1] = new UPIPayment(); for(Payment p: payments) p.processPayment(1000.0);\r\n\r\npublic class  MethodOverridingInJava {\r\n}\r\n"
      }
    ]
  }
];
