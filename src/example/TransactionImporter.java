package example;

import java.sql.*;

public class TransactionImporter {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/Company";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "Prakash@76";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            System.out.println("Connected to the database!");

            // Insert data
            insertData(connection);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void insertData(Connection connection) throws SQLException {
        // Insert Category
        executeUpdate(connection, "INSERT INTO category (category_name) VALUES ('Electronics')");

        // Insert Product 
        executeUpdate(connection, "INSERT INTO product (product_name, price, category_id) VALUES ('Laptop', 1200.00, 1)");

        // Insert Transaction
        executeUpdate(connection, "INSERT INTO transaction (customer_name, total_amount) VALUES ('Rutuja', 1200.00)");

        // Insert Transaction-Product 
        executeUpdate(connection, "INSERT INTO transaction_product (transaction_id, product_id, quantity) VALUES (1, 1, 1)");
    }

    private static void executeUpdate(Connection connection, String sql) throws SQLException {
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.executeUpdate();
        }
    }
}