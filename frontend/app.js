// Fetch categories from the API and display them
function fetchCategories() {
    fetch('http://localhost:3000/api/categories')
        .then(response => response.json())
        .then(data => {
            const categoryList = document.getElementById('category-list');
            data.forEach(category => {
                const listItem = document.createElement('li');
                listItem.textContent = category.category_name;
                categoryList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

// Fetch products from the API and display them
function fetchProducts() {
    fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = product.product_name, product.price;
                productList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Fetch transactions from the API and display them
function fetchTransactions() {
    fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => {
            const transactionList = document.getElementById('transaction-list');
            data.forEach(transaction => {
                const listItem = document.createElement('li');
                listItem.textContent = 'Transaction ID:' + transaction.transaction_id +', Customer:' + transaction.customer_name + ', Total:' + transaction.total_amount;
                transactionList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching transactions:', error));
}

// Call the functions to load the data
fetchCategories();
fetchProducts();
fetchTransactions();