const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Prakash@76', // Use your MySQL password
    database: 'Company'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// API routes

// Get all categories
app.get('/api/categories', (req, res) => {
    db.query('SELECT * FROM category', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get all products
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM product', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get all transactions
app.get('/api/transactions', (req, res) => {
    db.query('SELECT * FROM transaction', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get transaction details with products
app.get('/api/transaction_product', (req, res) => {
    const transactionId = req.params.id;
    const query = `
        SELECT t.transaction_id, t.transaction_date, t.customer_name, t.total_amount, p.product_name, tp.quantity
        FROM transaction t
        JOIN transaction_product tp ON t.transaction_id = tp.transaction_id
        JOIN product p ON tp.product_id = p.product_id
        WHERE t.transaction_id = ?`;

    db.query(query, [transactionId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log('Server running on http://localhost:${port}');
});