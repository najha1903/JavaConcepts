/* Deep Problem: Shape Hierarchy and Polymorphic Reporting — Model a small geometry system with a base Shape type and specialized subclasses for circles, rectangles, and triangles. Each shape must compute its own area, while a shared reporting method uses instanceof checks and polymorphism to print detailed runtime information. */
package Chapter_14_OOPSConcepts.Sub_Chapter_16_DeepProblems;

public class ShapeHierarchyDeepProblem {

    static class Shape {
        protected final String color;
        protected final String name;

        public Shape(String color, String name) {
            this.color = color;
            this.name = name;
        }

        public double area() {
            return 0.0;
        }
    }

    static class Circle extends Shape {
        private final double radius;

        public Circle(String color, double radius) {
            super(color, "Circle");
            this.radius = radius;
        }

        @Override
        public double area() {
            return Math.PI * radius * radius;
        }
    }

    static class Rectangle extends Shape {
        private final double width;
        private final double height;

        public Rectangle(String color, double width, double height) {
            super(color, "Rectangle");
            this.width = width;
            this.height = height;
        }

        @Override
        public double area() {
            return width * height;
        }
    }

    static class Triangle extends Shape {
        private final double base;
        private final double height;

        public Triangle(String color, double base, double height) {
            super(color, "Triangle");
            this.base = base;
            this.height = height;
        }

        @Override
        public double area() {
            return 0.5 * base * height;
        }
    }

    public static void printShapeInfo(Shape shape) {
        if (shape instanceof Circle) {
            Circle circle = (Circle) shape;
            System.out.printf("%s (%s) radius-based area = %.2f%n", circle.name, circle.color, circle.area());
        } else if (shape instanceof Rectangle) {
            Rectangle rectangle = (Rectangle) shape;
            System.out.printf("%s (%s) width/height area = %.2f%n", rectangle.name, rectangle.color, rectangle.area());
        } else if (shape instanceof Triangle) {
            Triangle triangle = (Triangle) shape;
            System.out.printf("%s (%s) base/height area = %.2f%n", triangle.name, triangle.color, triangle.area());
        } else {
            System.out.printf("Unknown shape (%s) area = %.2f%n", shape.color, shape.area());
        }
    }

    public static void main(String[] args) {
        Shape[] shapes = {
                new Circle("Blue", 3.5),
                new Rectangle("Green", 4.0, 6.5),
                new Triangle("Orange", 5.0, 8.0)
        };

        System.out.println("Shape report using polymorphism:");
        for (Shape shape : shapes) {
            printShapeInfo(shape);
        }
    }
}
