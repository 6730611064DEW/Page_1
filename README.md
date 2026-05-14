# 🛒 Supermarket Inventory Management System
> Node.js + Express + MySQL + EJS (MVC Architecture)

## โครงสร้างโปรเจกต์
```
supermarket-app/
├── controllers/
│   └── productController.js   ← Logic ทั้งหมด (CRUD)
├── models/
│   └── productModel.js        ← SQL queries
├── routes/
│   └── productRoutes.js       ← Route + Multer config
├── public/
│   └── uploads/               ← รูปภาพสินค้า
├── views/
│   ├── index.ejs              ← Dashboard
│   └── form.ejs               ← Add/Edit form
├── app.js                     ← Entry point
├── package.json
├── supermarket_db.sql         ← SQL setup
└── README.md
```

## ขั้นตอนการติดตั้ง

### 1. Clone หรือ Download โปรเจกต์
```bash
cd supermarket-app
```

### 2. ติดตั้ง dependencies
```bash
npm install
```

### 3. ตั้งค่าฐานข้อมูล MySQL
```bash
mysql -u root -p < supermarket_db.sql
```

### 4. ตั้งค่า environment (ถ้าต้องการ)
สร้างไฟล์ `.env` หรือแก้ค่าใน `models/productModel.js`:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=supermarket_db
```

### 5. รันโปรเจกต์
```bash
# Production
npm start

# Development (auto-reload)
npm run dev
```

### 6. เปิดเบราว์เซอร์
```
http://localhost:3000
```

## ฟีเจอร์
| ฟีเจอร์ | รายละเอียด |
| Dashboard | แสดงสินค้าทั้งหมดแบบ Card Grid |
| Search | ค้นหาสินค้าตามชื่อ |
| Add Product | เพิ่มสินค้าพร้อมอัปโหลดรูปภาพ |
| Edit Product | แก้ไขข้อมูล + เปลี่ยนรูปภาพ (ลบรูปเก่าอัตโนมัติ) |
| Delete Product | ลบสินค้า + รูปภาพ พร้อม Confirmation Modal |
| Out of Stock | แสดง badge สีแดงเมื่อ stock = 0 |
| Image Preview | แสดง preview รูปก่อน submit |

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js 4.x
- **Database:** MySQL (mysql2)
- **Template:** EJS
- **Upload:** Multer
- **UI:** Bootstrap 5.3
