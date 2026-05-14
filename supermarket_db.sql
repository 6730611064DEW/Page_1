-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2026 at 06:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `supermarket_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int(11) DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `stock`, `image`, `created_at`) VALUES
(1, 'นมสด 1L', 'นมและโยเกิร์ต', 45.00, 50, '1778341967793-924022.jpg', '2026-05-09 13:01:34'),
(2, 'ข้าวสาร 5kg', 'ธัญพืช', 199.00, 30, '1778342025702-16615.jpg', '2026-05-09 13:01:34'),
(3, 'น้ำดื่ม 6 ขวด', 'เครื่องดื่ม', 79.00, 80, '1778342924741-863040.jpg', '2026-05-09 13:01:34'),
(5, 'ไข่ไก่ 10 ฟอง', 'ไข่และเนื้อสัตว์', 89.00, 20, '1778342986239-739172.jpg', '2026-05-09 13:01:34'),
(9, 'ผ้าอนามัย', 'เครื่องใช้', 75.00, 0, '1778343132107-193651.jpg', '2026-05-09 16:12:12'),
(10, 'พารา', 'ยาสามัญ', 50.00, 20, '1778343254200-294655.jpg', '2026-05-09 16:14:14'),
(11, 'ขนมปังแผ่น', 'อาหาร', 25.00, 0, '1778343619578-378495.jpg', '2026-05-09 16:20:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
