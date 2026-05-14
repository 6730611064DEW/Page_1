const Product = require('../models/productModel');
const fs      = require('fs');
const path    = require('path');

const deleteImage = (filename) => {
  if (!filename) return;
  const filePath = path.join(__dirname, '../public/uploads', filename);
  fs.unlink(filePath, (err) => {
    if (err && err.code !== 'ENOENT') console.error('Delete image error:', err);
  });
};

exports.index = async (req, res) => {
  try {
    const search = req.query.search || '';
    const [products] = await Product.getAll(search);
    res.render('index', {
      products,
      search,
      success: req.query.success || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
};

exports.newForm = (req, res) => {
  res.render('form', { product: null, action: '/products', method: 'POST' });
};

exports.create = async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const image = req.file ? req.file.filename : 'no-image.png';
    await Product.create({ name, category, price, stock, image });
    res.redirect('/?success=เพิ่มสินค้าเรียบร้อยแล้ว');
  } catch (err) {
    console.error(err);
    res.status(500).send('Create error');
  }
};

exports.editForm = async (req, res) => {
  try {
    const [rows] = await Product.getById(req.params.id);
    if (!rows.length) return res.status(404).send('Product not found');
    res.render('form', {
      product: rows[0],
      action:  `/products/${rows[0].id}/update`,
      method:  'POST',
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('DB error');
  }
};

exports.update = async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const [rows] = await Product.getById(req.params.id);
    if (!rows.length) return res.status(404).send('Not found');

    const old = rows[0];
    let image = old.image;

    if (req.file) {
      deleteImage(old.image);
      image = req.file.filename;
    }

    await Product.update({ id: req.params.id, name, category, price, stock, image });
    res.redirect('/?success=แก้ไขสินค้าเรียบร้อยแล้ว');
  } catch (err) {
    console.error(err);
    res.status(500).send('Update error');
  }
};

exports.delete = async (req, res) => {
  try {
    const [rows] = await Product.getById(req.params.id);
    if (rows.length) deleteImage(rows[0].image);
    await Product.delete(req.params.id);
    res.redirect('/?success=ลบสินค้าเรียบร้อยแล้ว');
  } catch (err) {
    console.error(err);
    res.status(500).send('Delete error');
  }
};
