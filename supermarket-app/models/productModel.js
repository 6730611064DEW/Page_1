const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'supermarket_db',
  waitForConnections: true,
  connectionLimit: 10,
});

const db = pool.promise();

const Product = {
  getAll: (search = '') => {
    if (search) {
      return db.query(
        'SELECT * FROM products WHERE name LIKE ? ORDER BY created_at DESC',
        [`%${search}%`]
      );
    }
    return db.query('SELECT * FROM products ORDER BY created_at DESC');
  },

  getById: (id) =>
    db.query('SELECT * FROM products WHERE id = ?', [id]),

  create: ({ name, category, price, stock, image }) =>
    db.query(
      'INSERT INTO products (name, category, price, stock, image) VALUES (?, ?, ?, ?, ?)',
      [name, category, price, stock, image]
    ),

  update: ({ id, name, category, price, stock, image }) =>
    db.query(
      'UPDATE products SET name=?, category=?, price=?, stock=?, image=? WHERE id=?',
      [name, category, price, stock, image, id]
    ),

  delete: (id) =>
    db.query('DELETE FROM products WHERE id = ?', [id]),
};

module.exports = Product;
