package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;

public class PaintJobChallenge {
    // write code here

    public static void main(String[] args) {


      // int totalNofBucketsRequired = getBucketCount(2.75, 3.25, 2.5, 1);

    //    int totalNofBucketsRequired =  getBucketCount(7.25, 4.3, 2.35);

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

            totalNofBucketsRequired = totalBucketCount - extraBuckets;

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