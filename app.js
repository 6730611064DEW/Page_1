const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const controller = require('../controllers/productController');

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(__dirname, '../public/uploads')),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e6);
    cb(null, unique + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp/;
  const ok = allowed.test(path.extname(file.originalname).toLowerCase())
          && allowed.test(file.mimetype);
  ok ? cb(null, true) : cb(new Error('Only image files are allowed'));
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

router.get('/', controller.index);
router.get('/products/new', controller.newForm);
router.post('/products', upload.single('image'), controller.create);
router.get('/products/:id/edit', controller.editForm);
router.post('/products/:id/update', upload.single('image'), controller.update);
router.post('/products/:id/delete', controller.delete);

module.exports = router;
