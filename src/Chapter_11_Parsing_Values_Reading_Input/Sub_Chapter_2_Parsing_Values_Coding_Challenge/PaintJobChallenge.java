package Chapter_11_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;

// Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.
// The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).
// Math.ceil() is used to round up — you always need whole buckets, never a fraction.
// The method is overloaded with 3 versions: (area, areaPerBucket), (width, height, areaPerBucket), and (width, height, areaPerBucket, extraBuckets) to handle different input scenarios.
// If width, height or areaOfBucket is zero or negative, or extraBuckets is negative, the method returns -1.

public class PaintJobChallenge {

    public static void main(String[] args) {

        int totalNofBucketsRequired =   getBucketCount(3.26, 0.75);
       

        System.out.println(totalNofBucketsRequired);
    }

    public static int getBucketCount(double width, double height, double areaOfBucket, int extraBuckets){

        int totalNofBucketsRequired = 0;

        if(width <= 0 || height <= 0 || areaOfBucket <= 0 || extraBuckets < 0 ){

            totalNofBucketsRequired = -1;
        }else{

            double areaOfWall = (width * height);

            int totalBucketCount = (int) Math.ceil(areaOfWall / areaOfBucket);

            // A negative bucket count is not a meaningful answer for valid input, and -1
            // is already the invalid-input signal this method returns above, so having
            // more buckets than needed floors the result at 0 instead of colliding.
            totalNofBucketsRequired = Math.max(0, totalBucketCount - extraBuckets);

        }



        return totalNofBucketsRequired;
    }

    public static int getBucketCount(double width, double height, double areaOfBucket){

        int totalNofBucketsRequired = 0;

        if(width <= 0 || height <= 0 || areaOfBucket <= 0 ){

            totalNofBucketsRequired = -1;
        }else{

            double areaOfWall = (width * height);

            totalNofBucketsRequired = (int) Math.ceil(areaOfWall / areaOfBucket);

        }



        return totalNofBucketsRequired;
    }

    public static int getBucketCount(double area, double areaPerBucket){

        int totalNofBucketsRequired = 0;

        if(area <= 0 || areaPerBucket <= 0 ){

            totalNofBucketsRequired = -1;
        }else{

            totalNofBucketsRequired = (int) Math.ceil(area / areaPerBucket);

        }



        return totalNofBucketsRequired;
    }
}