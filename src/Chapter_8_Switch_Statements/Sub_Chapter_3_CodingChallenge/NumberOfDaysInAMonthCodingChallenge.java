package Chapter_8_Switch_Statements.Sub_Chapter_3_CodingChallenge;

     /*   Write a method isLeapYear with a parameter of type int named year.

        The parameter needs to be greater than or equal to 1 and less than or equal to 9999.

        If the parameter is not in that range return false.

        Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is, otherwise return false.

        A year is a leap year if it is divisible by 4 but not by 100, or it is divisible by 400.

        Examples of input/output:

        isLeapYear(-1600); →  should return false since the parameter is not in the range (1-9999)

        isLeapYear(1600); → should return true since 1600 is a leap year

        isLeapYear(2017); → should return false since 2017 is not a leap year

        isLeapYear(2000); → should return true because 2000 is a leap year

        NOTE:  The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.

        Write another method getDaysInMonth with two parameters month and year. Both of type int.

        If parameter month is < 1 or > 12 return -1.

        If parameter year is < 1 or > 9999 then return -1.

        This method needs to return the number of days in the month. Be careful about leap years they have 29 days in month 2 (February).

        You should check if the year is a leap year using the method isLeapYear described above.

        Examples of input/output:

        getDaysInMonth(1, 2020); → should return 31 since January has 31 days.

        getDaysInMonth(2, 2020); → should return 29 since February has 29 days in a leap year and 2020 is a leap year.

        getDaysInMonth(2, 2018); → should return 28 since February has 28 days if it's not a leap year and 2018 is not a leap year.

        getDaysInMonth(-1, 2020); → should return -1 since the parameter month is invalid.

        getDaysInMonth(1, -2020); → should return -1 since the parameter year is outside the range of 1 to 9999.

*/

public class NumberOfDaysInAMonthCodingChallenge {
    public static void main(String[] args) {

        int year = 2020;
        System.out.println(isLeapYear(year));
        System.out.println(getDaysInMonth(2, 2018));

    }

    public static boolean isLeapYear(int year){

        boolean isLeapYear;

        if(year >= 1  && year <= 9999){


            if((year % 4 == 0 && (year % 100!= 0)) || (year % 400 == 0)){
                isLeapYear = true;
            }else{
                isLeapYear = false;
            }

        }else{
            return false;
        }

        return isLeapYear;
    }

    public static int getDaysInMonth(int month, int year){

        int daysOfMonth = 0;

        if(year >= 1 && year <= 9999){
            if(month >= 1 && month <= 12){
                switch (month){
                    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                        daysOfMonth = 31;
                        break;
                    case 2:
                        if (isLeapYear(year)) {
                          daysOfMonth = 29;
                        }else{
                            daysOfMonth = 28;
                        }
                        break;
                    case 4: case 6: case 9: case 11:
                        daysOfMonth = 30;
                }
            }else{
                return -1;
            }
        }else{
            return -1;
        }


        return daysOfMonth;
    }
}
