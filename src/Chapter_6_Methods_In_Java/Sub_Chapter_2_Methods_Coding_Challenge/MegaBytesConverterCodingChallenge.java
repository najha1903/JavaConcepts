package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge converts a whole number of kilobytes into megabytes plus leftover kilobytes.
// printMegaBytesAndKiloBytes(int kiloBytes) is a void method because its job is to print a formatted result, not return one.
// Integer division gives the whole megabytes: 2500 / 1024 is 2.
// The remainder operator gives the leftover kilobytes: 2500 % 1024 is 452.
// Invalid input should print exactly "Invalid Value"; the exercise treats negative kilobyte values as invalid.
// Important: output formatting is part of the requirement, so extra spaces can make an otherwise correct calculation fail.
// Example results: 2500 prints "2500 KB = 2 MB and 452 KB", and 5000 prints "5000 KB = 4 MB and 904 KB".

public class MegaBytesConverterCodingChallenge {

    public static void main(String[] args) {

        printMegaBytesAndKiloBytes(2500);
        printMegaBytesAndKiloBytes(-1024);
        printMegaBytesAndKiloBytes(5000);

    }

    public static void printMegaBytesAndKiloBytes(int kilobytes){

        int megabytes;

        int remainingKilobytes;

        if(kilobytes < 0){
            System.out.println("Invalid Value");
        }else{
            megabytes = kilobytes / 1024;
            remainingKilobytes = kilobytes % 1024;
            System.out.println(kilobytes + " KB = " + megabytes + " MB and " + remainingKilobytes + " KB");
        }
    }

}
