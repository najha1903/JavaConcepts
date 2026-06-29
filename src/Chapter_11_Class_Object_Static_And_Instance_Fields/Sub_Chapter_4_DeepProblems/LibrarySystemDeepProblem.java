/* Deep Problem: Library Inventory Tracker — Design a compact library system that models books as objects, tracks a shared total count through a static field, and supports checkout and return workflows. The solution should show how instance state and class-wide state interact in a realistic domain model. */
package Chapter_11_Class_Object_Static_And_Instance_Fields.Sub_Chapter_4_DeepProblems;

public class LibrarySystemDeepProblem {

    static class Book {
        private static int bookCount = 0;

        private final String title;
        private final String author;
        private final String isbn;
        private boolean isCheckedOut;

        public Book(String title, String author, String isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
            this.isCheckedOut = false;
            bookCount++;
        }

        public boolean checkOut() {
            if (isCheckedOut) {
                return false;
            }
            isCheckedOut = true;
            return true;
        }

        public boolean returnBook() {
            if (!isCheckedOut) {
                return false;
            }
            isCheckedOut = false;
            return true;
        }

        public static int getBookCount() {
            return bookCount;
        }

        @Override
        public String toString() {
            return String.format("Title: %-22s Author: %-18s ISBN: %-15s Status: %s",
                    title,
                    author,
                    isbn,
                    isCheckedOut ? "Checked Out" : "Available");
        }
    }

    public static void main(String[] args) {
        Book[] books = {
                new Book("Clean Code", "Robert Martin", "9780132350884"),
                new Book("Effective Java", "Joshua Bloch", "9780134685991"),
                new Book("Refactoring", "Martin Fowler", "9780201485677"),
                new Book("Design Patterns", "GoF", "9780201633610"),
                new Book("Java Concurrency", "Brian Goetz", "9780321349606")
        };

        System.out.println("Total books created: " + Book.getBookCount());
        System.out.println();

        books[0].checkOut();
        books[3].checkOut();
        books[0].returnBook();

        System.out.println("Library status report:");
        for (Book book : books) {
            System.out.println(book);
        }

        System.out.println();
        System.out.println("Static book count still tracked as: " + Book.getBookCount());
    }
}
