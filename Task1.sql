CREATE DATABASE Company;
DROP DATABASE company;
CREATE TABLE Company.category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE Company.product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE Company.transaction (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    customer_name VARCHAR(255),
    total_amount DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Company.transaction_product (
    transaction_id INT,
    product_id INT,
    quantity INT NOT NULL,
    PRIMARY KEY (transaction_id, product_id),
    FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

SELECT * FROM company.transaction_product;

