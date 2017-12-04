-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2017 at 01:31 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kayak`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `carId` int(10) NOT NULL,
  `carName` varchar(100) NOT NULL,
  `carType` varchar(100) NOT NULL,
  `capacity` int(10) NOT NULL,
  `luggageCapacity` int(10) NOT NULL,
  `carDoors` int(10) NOT NULL,
  `airportPickup` tinyint(1) NOT NULL,
  `airConditioning` tinyint(1) NOT NULL,
  `automatic` tinyint(1) NOT NULL,
  `hybrid` tinyint(1) NOT NULL,
  `price` int(100) NOT NULL,
  `car_number` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`carId`, `carName`, `carType`, `capacity`, `luggageCapacity`, `carDoors`, `airportPickup`, `airConditioning`, `automatic`, `hybrid`, `price`, `car_number`, `image`) VALUES
(1, 'Toyota Corolla', 'Economy', 4, 1, 4, 1, 1, 1, 1, 10, 'SAM123', NULL),
(2, 'Hyundai Accent', 'Intermediate', 2, 2, 3, 1, 1, 1, 0, 20, 'JON123', NULL),
(3, 'BMW 3 series', 'Awesome', 2, 2, 2, 1, 1, 0, 0, 100, 'DAN123', NULL),
(4, 'Tesla model S', 'SUV', 2, 2, 2, 1, 0, 0, 0, 200, 'JAY123', NULL),
(5, 'ABC', 'SUV', 2, 2, 2, 1, 0, 0, 0, 200, 'RAM123', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`carId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `carId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
