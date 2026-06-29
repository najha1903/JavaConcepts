/* Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems. */
package Chapter_15_Strings.Sub_Chapter_3_DeepProblems;

import java.util.LinkedHashMap;
import java.util.Map;

public class StringAnalyzerDeepProblem {

    public static boolean isPalindrome(String text) {
        String normalized = text.replace(" ", "").toLowerCase();
        int left = 0;
        int right = normalized.length() - 1;

        while (left < right) {
            if (normalized.charAt(left) != normalized.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    public static int wordCount(String text) {
        String trimmed = text.trim();
        if (trimmed.isEmpty()) {
            return 0;
        }
        return trimmed.split("\\s+").length;
    }

    public static char mostFrequentChar(String text) {
        Map<Character, Integer> frequencyMap = new LinkedHashMap<>();
        for (char character : text.toLowerCase().toCharArray()) {
            if (character == ' ') {
                continue;
            }
            frequencyMap.put(character, frequencyMap.getOrDefault(character, 0) + 1);
        }

        char mostFrequent = '\0';
        int highestCount = -1;
        for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() > highestCount) {
                highestCount = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }
        return mostFrequent;
    }

    public static String reverseWords(String sentence) {
        String trimmed = sentence.trim();
        if (trimmed.isEmpty()) {
            return "";
        }

        String[] words = trimmed.split("\\s+");
        StringBuilder builder = new StringBuilder();
        for (int index = words.length - 1; index >= 0; index--) {
            builder.append(words[index]);
            if (index > 0) {
                builder.append(' ');
            }
        }
        return builder.toString();
    }

    public static String generateReport(String text) {
        char frequent = mostFrequentChar(text);
        String frequentDisplay = frequent == '\0' ? "N/A" : Character.toString(frequent);

        return String.format(
                "Original Text   : %s%nPalindrome     : %s%nWord Count     : %d%nMost Common    : %s%nReversed Words : %s",
                text,
                isPalindrome(text),
                wordCount(text),
                frequentDisplay,
                reverseWords(text)
        );
    }

    public static void main(String[] args) {
        String[] samples = {
                "Never odd or even",
                "Java makes coding fun",
                "Step on no pets"
        };

        for (String sample : samples) {
            System.out.println(generateReport(sample));
            System.out.println();
        }
    }
}
