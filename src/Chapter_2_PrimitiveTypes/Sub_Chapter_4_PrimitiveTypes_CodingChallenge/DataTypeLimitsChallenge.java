package Chapter_2_PrimitiveTypes.Sub_Chapter_4_PrimitiveTypes_CodingChallenge;

/*
 * Challenge: Declare all 8 primitive data types, assign useful values, and print each with a label.
 * Also demonstrate integer overflow on a byte value.
 */
public class DataTypeLimitsChallenge {

    public static void main(String[] args) {
        byte byteValue = Byte.MAX_VALUE;
        short shortValue = Short.MAX_VALUE;
        int intValue = Integer.MAX_VALUE;
        long longValue = Long.MAX_VALUE;
        float floatValue = 123.45f;
        double doubleValue = 123456.789;
        char charValue = 'J';
        boolean booleanValue = true;

        System.out.println("byte: " + byteValue);
        System.out.println("short: " + shortValue);
        System.out.println("int: " + intValue);
        System.out.println("long: " + longValue);
        System.out.println("float: " + floatValue);
        System.out.println("double: " + doubleValue);
        System.out.println("char: " + charValue);
        System.out.println("boolean: " + booleanValue);

        byte overflowByte = (byte) (byteValue + 1);
        System.out.println("byte overflow example: " + byteValue + " + 1 = " + overflowByte);
    }
}
