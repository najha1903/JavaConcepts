/* Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves. */
package Chapter_6_If_Else_Statements.Sub_Chapter_3_DeepProblems;

public class GradeClassifierDeepProblem {

    public static String classify(int score) {
        if (score >= 95) {
            return "A+";
        } else if (score >= 85) {
            return "A";
        } else if (score >= 75) {
            return "B";
        } else if (score >= 65) {
            return "C";
        } else if (score >= 50) {
            return "D";
        }
        return "F";
    }

    public static boolean isPassing(int score) {
        return score >= 50;
    }

    public static String letterGrade(int score) {
        if (score >= 85) {
            return "Distinction";
        } else if (score >= 65) {
            return "Merit";
        } else if (score >= 50) {
            return "Pass";
        }
        return "Fail";
    }

    public static void main(String[] args) {
        System.out.printf("%-8s%-8s%-10s%-15s%n", "Score", "Band", "Passing", "Category");
        for (int score = 40; score <= 100; score += 5) {
            System.out.printf("%-8d%-8s%-10s%-15s%n",
                    score,
                    classify(score),
                    isPassing(score),
                    letterGrade(score));
        }
    }
}
