-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2017 at 07:48 AM
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
-- Table structure for table `billing`
--

CREATE TABLE `billing` (
  `BillingId` int(11) NOT NULL,
  `BookingType` varchar(10) DEFAULT NULL,
  `BillingDate` datetime DEFAULT NULL,
  `TotalAmount` int(11) DEFAULT NULL,
  `CreditcardId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  `UpdatedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `bookingid` int(11) NOT NULL,
  `carid` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `s_city` varchar(100) DEFAULT NULL,
  `s_date` datetime NOT NULL,
  `e_date` datetime NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `b_date` datetime NOT NULL,
  `payment_id` int(11) NOT NULL,
  `traveler_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`bookingid`, `carid`, `city`, `s_city`, `s_date`, `e_date`, `deleted`, `b_date`, `payment_id`, `traveler_id`) VALUES
(1, 0, 'Sf', NULL, '2018-01-15 00:00:00', '2018-01-17 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(2, 1, 'Sf', NULL, '2018-01-10 00:00:00', '2018-01-12 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(3, 4, 'sf', NULL, '2018-01-10 00:00:00', '2018-01-12 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(4, 4, 'sf', NULL, '2017-01-26 00:00:00', '2017-01-29 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(5, 1, 'Sf', NULL, '2018-01-14 00:00:00', '2018-01-15 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(6, 2, 'Sf', NULL, '2018-01-20 00:00:00', '2018-01-25 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(7, 2, 'Sf', NULL, '2018-01-25 00:00:00', '2018-01-26 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(8, 2, 'Sf', NULL, '2018-01-26 00:00:00', '2018-01-28 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(9, 2, 'Sf', NULL, '2018-01-28 00:00:00', '2018-01-30 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(10, 2, 'Sf', NULL, '2018-01-20 00:00:00', '2018-01-23 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(11, 4, 'sf', NULL, '2018-01-15 00:00:00', '2018-01-20 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(12, 4, 'sf', NULL, '2018-01-17 00:00:00', '2018-01-20 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(13, 4, 'sf', NULL, '2018-01-20 00:00:00', '2018-01-23 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(14, 4, 'sf', NULL, '2018-01-17 00:00:00', '2018-01-20 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(15, 2, 'Sf', NULL, '2018-01-22 00:00:00', '2018-01-23 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(17, 4, 'sf', NULL, '2018-01-27 00:00:00', '2018-01-28 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(19, 3, 'Sf', NULL, '2018-01-27 00:00:00', '2018-01-28 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(20, 3, 'Sf', NULL, '2018-01-27 00:00:00', '2018-01-28 00:00:00', 1, '0000-00-00 00:00:00', 0, 0),
(21, 4, 'sf', NULL, '2018-01-17 00:00:00', '2018-01-28 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(22, 4, 'sf', NULL, '2018-01-17 00:00:00', '2018-01-20 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(23, 3, 'Sf', NULL, '2018-01-17 00:00:00', '2018-01-20 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(24, 3, 'Sf', NULL, '2018-01-17 00:00:00', '2018-01-20 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(25, 2, 'sf', NULL, '2018-01-17 00:00:00', '2018-01-28 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(26, 4, 'sf', NULL, '2017-12-17 00:00:00', '2018-01-10 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(27, 4, 'sf', NULL, '2017-01-26 08:00:00', '2018-01-17 08:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(28, 3, 'Sf', NULL, '2017-01-01 08:00:00', '2018-01-17 08:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(29, 3, 'Sf', NULL, '2017-01-06 08:00:00', '2018-01-17 08:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(30, 2, 'sf', NULL, '2017-01-20 08:00:00', '2018-01-17 08:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(31, 3, 'Sf', NULL, '2018-01-28 08:00:00', '2019-01-02 08:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(32, 1, 'sf', NULL, '2018-12-17 00:00:00', '2019-01-01 00:00:00', 0, '0000-00-00 00:00:00', 0, 0),
(33, 10, 'sf', NULL, '2018-12-17 00:00:00', '2019-01-01 00:00:00', 0, '2017-11-23 10:34:43', 0, 0),
(34, 11, 'san jose', NULL, '2018-12-17 00:00:00', '2019-01-01 00:00:00', 0, '2017-11-23 10:36:40', 0, 0),
(35, 4, 'sf', NULL, '2017-01-07 08:00:00', '2017-12-17 08:00:00', 0, '2017-11-29 18:19:19', 0, 0),
(36, 4, 'sf', NULL, '2018-01-10 08:00:00', '2018-01-17 08:00:00', 0, '2017-11-29 19:03:20', 0, 0),
(37, 2, 'sf', NULL, '2018-02-15 00:00:00', '2018-02-16 00:00:00', 0, '2017-11-29 19:11:31', 0, 0),
(38, 2, 'sf', NULL, '2018-03-15 01:00:00', '2018-03-16 01:00:00', 1, '2017-11-29 19:14:51', 0, 0),
(39, 4, 'sf', 'sj', '2018-03-25 01:00:00', '2018-03-26 01:00:00', 0, '2017-11-30 01:21:15', 0, 0),
(40, 3, 'Sf', 'sj', '2018-03-25 01:00:00', '2018-03-28 01:00:00', 0, '2017-11-30 15:28:37', 1, 2),
(41, 5, 'San Jose', NULL, '2017-11-02 01:00:00', '2017-11-08 00:00:00', 0, '2017-11-30 17:34:27', 61, 68),
(42, 5, 'San Jose', NULL, '2017-11-08 00:00:00', '2018-01-26 00:00:00', 0, '2017-11-30 17:38:12', 62, 69);

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
(3, 'BMW 3 series', 'Awesome', 10, 1, 10, 1, 1, 0, 0, 100, 'DAN123', NULL),
(4, 'Tesla model S', 'Fab', 1, 10, 1, 1, 0, 0, 0, 200, 'JAY123', NULL),
(5, 'ABC', 'SUV', 8, 7, 4, 0, 0, 0, 0, 200, 'RAM123', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `creditcards`
--

CREATE TABLE `creditcards` (
  `CardId` int(11) NOT NULL,
  `CardType` varchar(45) NOT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Cvv` varchar(45) NOT NULL,
  `CardNumber` varchar(45) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  `UpdatedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `flightbooking`
--

CREATE TABLE `flightbooking` (
  `BookingId` int(11) NOT NULL,
  `OneWayBooking` int(11) DEFAULT '1',
  `UserId` int(11) NOT NULL,
  `FlightIdTo` varchar(55) DEFAULT NULL,
  `FlightIdFro` int(11) DEFAULT NULL,
  `SeatType` varchar(45) DEFAULT NULL,
  `TravelerId` varchar(45) NOT NULL,
  `CardId` varchar(45) NOT NULL,
  `Street` varchar(100) NOT NULL,
  `City` varchar(100) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Country` varchar(100) NOT NULL,
  `Zip` varchar(100) NOT NULL,
  `TotalCost` decimal(10,0) DEFAULT NULL,
  `NumberOfSeats` int(11) DEFAULT NULL,
  `NumberOfAdults` int(11) DEFAULT NULL,
  `NumberOfChildren` int(11) DEFAULT NULL,
  `BookingDateTime` datetime DEFAULT NULL,
  `TravelDateTo` datetime DEFAULT NULL,
  `TravelDateFro` datetime DEFAULT NULL,
  `DeleteFlag` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `flightbooking`
--

INSERT INTO `flightbooking` (`BookingId`, `OneWayBooking`, `UserId`, `FlightIdTo`, `FlightIdFro`, `SeatType`, `TravelerId`, `CardId`, `Street`, `City`, `State`, `Country`, `Zip`, `TotalCost`, `NumberOfSeats`, `NumberOfAdults`, `NumberOfChildren`, `BookingDateTime`, `TravelDateTo`, `TravelDateFro`, `DeleteFlag`) VALUES
(5, 1, 1, 'EK 179', NULL, '3', '1,2', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 1, 1, '2017-11-25 23:50:00', '2017-11-28 00:00:00', NULL, 1),
(7, 1, 1, 'EK 179', NULL, '3', '1,2', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 1, 1, '2017-11-25 23:50:00', '2017-11-28 00:00:00', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `FlightId` varchar(100) NOT NULL,
  `AirlinesName` varchar(500) NOT NULL,
  `SourceAirport` varchar(100) NOT NULL,
  `DestinationAirport` varchar(100) NOT NULL,
  `FirstClassSeats` int(10) NOT NULL,
  `BusinessClassSeats` int(10) NOT NULL,
  `EconomyClassSeats` int(10) NOT NULL,
  `FirstClassFares` decimal(10,0) NOT NULL,
  `BusinessClassFares` decimal(10,0) NOT NULL,
  `EconomyClassFares` decimal(10,0) NOT NULL,
  `TakeOffTime` time NOT NULL,
  `LandingTime` time NOT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `Plane` varchar(255) DEFAULT NULL,
  `DeleteFlag` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`FlightId`, `AirlinesName`, `SourceAirport`, `DestinationAirport`, `FirstClassSeats`, `BusinessClassSeats`, `EconomyClassSeats`, `FirstClassFares`, `BusinessClassFares`, `EconomyClassFares`, `TakeOffTime`, `LandingTime`, `Description`, `Plane`, `DeleteFlag`) VALUES
('BA 222', 'British Airways', 'LAX', 'NYC', 10, 10, 5, '665', '444', '234', '04:10:00', '09:00:00', 'Wide-body Jet', 'Boeing 737-800', 0),
('BA 230', 'British Airways', 'NYC', 'LAX', 200, 200, 200, '688', '590', '123', '05:45:00', '10:00:00', 'Narrow-body Jet', 'Boeing 777', 0),
('BA 240', 'British Airways', 'BOS', 'SEA', 200, 200, 200, '556', '333', '223', '02:00:00', '13:00:00', 'Narrow-body Jet', 'Airbus A320-100/200', 0),
('BA 250', 'British Airways', 'SEA', 'SJC', 200, 200, 200, '555', '432', '233', '14:15:00', '16:50:00', 'Wide-body Jet', 'Airbus A321-100/200', 0),
('EK 170', 'Emirates', 'LAX', 'NYC', 200, 200, 200, '600', '500', '300', '23:50:00', '01:00:00', 'Narrow-body Jet', 'Airbus A321-100/200', 0),
('EK 178', 'Emirates', 'SJC', 'NYC', 200, 200, 200, '665', '445', '223', '15:00:00', '21:00:00', 'Wide-body Jet', 'Airbus A320-100/200', 0),
('EK 179', 'Emirates', 'NYC', 'SFO', 200, 200, 200, '700', '600', '400', '01:00:00', '07:00:00', 'Narrow-body Jet', 'Boeing 737-900', 0),
('ET 232', 'Etihaad', 'NYC', 'SFO', 211, 345, 122, '200', '150', '100', '21:00:00', '23:00:00', 'Wide-body Jet', 'Airbus A320-100/200', 0),
('ET 333', 'Etihaad', 'SJC', 'SFO', 111, 234, 111, '450', '444', '100', '11:00:00', '12:00:00', 'Narrow-body Jet', 'Airbus A320-100/200', 0);

-- --------------------------------------------------------

--
-- Table structure for table `flightsavailability`
--

CREATE TABLE `flightsavailability` (
  `Id` int(11) NOT NULL,
  `Date` datetime DEFAULT NULL,
  `FlightId` varchar(100) NOT NULL,
  `FirstClassSeats` int(10) NOT NULL,
  `BusinessClassSeats` int(10) NOT NULL,
  `EconomyClassSeats` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `flightsavailability`
--

INSERT INTO `flightsavailability` (`Id`, `Date`, `FlightId`, `FirstClassSeats`, `BusinessClassSeats`, `EconomyClassSeats`) VALUES
(1, NULL, 'BA 230', 200, 200, 200),
(2, NULL, 'BA 240', 200, 200, 200),
(3, NULL, 'BA 250', 200, 200, 200),
(4, NULL, 'EK 170', 200, 200, 200),
(5, NULL, 'EK 178', 200, 200, 200),
(6, NULL, 'EK 179', 200, 200, 200),
(7, '2017-11-20 00:00:00', 'BA 222', 10, 10, 1),
(8, '2017-11-22 00:00:00', 'BA 222', 10, 10, 1),
(10, '2017-11-28 00:00:00', 'EK 179', 200, 200, 198);

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `HotelId` int(11) NOT NULL,
  `HotelName` varchar(500) NOT NULL,
  `Location` varchar(500) NOT NULL,
  `ReviewScore` decimal(10,0) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  `StreetAddress` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `Longitude` varchar(45) DEFAULT NULL,
  `Latitude` varchar(45) DEFAULT NULL,
  `ZipCode` varchar(45) DEFAULT NULL,
  `Stars` varchar(45) DEFAULT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `DeleteFlag` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`HotelId`, `HotelName`, `Location`, `ReviewScore`, `Phone`, `StreetAddress`, `State`, `Longitude`, `Latitude`, `ZipCode`, `Stars`, `Description`, `DeleteFlag`) VALUES
(1, 'Fairmont San Jose', 'San Jose, CA', '8', '66778897', '170 South Market Street', 'CA', NULL, NULL, '95113', '4', 'Very good luxury hotel. Good for sightseeing and has nearby restaurants and bars.', 0),
(2, 'Hotel De Anza', 'San Jose, CA', '8', '33445533', '233 West Santa Clara Street', 'CA', NULL, NULL, '95113', '4', 'Excellent city hotel. Close to restaurants and bars with nearby parking areas. Fantastic service. Awesome vibe.', 0),
(3, 'Wyndham Garden San Jose – Silicon Valley', 'San Jose, CA', '8', '55667722', '399 Silicon Valley Boulevard', 'CA', NULL, NULL, '95138', '3', 'Excellent family hotel. Great location.', 0),
(4, 'Row NYC', 'New York, NY', '7', '4433243', '700 8th Avenue', 'NY', NULL, NULL, '10036', '4', 'Excellent hotel. Located near shopping areas with easy access to parking.', 0),
(5, 'Sofitel New York', 'New York, NY', '9', '343546', '45 West 44TH Street', 'NY', NULL, NULL, '10036', '3', 'Very good romantic hotel. Fantastic service. Great location.\nVery good romantic hotel. Fantastic service. Great location.\nExcellent business hotel. Close to Great America. Located near shopping areas with easy access to parking. Great pool.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `hotelavailability`
--

CREATE TABLE `hotelavailability` (
  `HotelId` int(11) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `DeluxRoomCount` int(11) DEFAULT NULL,
  `StandardRoomCount` int(11) DEFAULT NULL,
  `KingRoomCount` int(11) DEFAULT NULL,
  `QueenRoomCount` int(11) DEFAULT NULL,
  `DoubleRoomCount` int(11) DEFAULT NULL,
  `DeluxRoomPrice` decimal(10,0) DEFAULT NULL,
  `StandardRoomPrice` decimal(10,0) DEFAULT NULL,
  `KingRoomPrice` decimal(10,0) DEFAULT NULL,
  `QueenRoomPrice` decimal(10,0) DEFAULT NULL,
  `DoubleRoomPrice` decimal(10,0) DEFAULT NULL,
  `Id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hotelavailability`
--

INSERT INTO `hotelavailability` (`HotelId`, `Date`, `DeluxRoomCount`, `StandardRoomCount`, `KingRoomCount`, `QueenRoomCount`, `DoubleRoomCount`, `DeluxRoomPrice`, `StandardRoomPrice`, `KingRoomPrice`, `QueenRoomPrice`, `DoubleRoomPrice`, `Id`) VALUES
(1, NULL, 50, 40, 20, 30, 40, '300', '400', '500', '350', '450', 1),
(4, NULL, 55, 45, 25, 35, 45, '300', '400', '500', '350', '450', 2),
(2, NULL, 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 3),
(3, NULL, 22, 33, 44, 34, 45, '300', '300', '300', '300', '300', 4),
(5, NULL, 50, 60, 50, 20, 25, '400', '300', '350', '380', '390', 5),
(4, '2017-11-22 00:00:00', 2, 0, 0, 0, 0, '300', '400', '500', '350', '450', 6),
(4, '2017-11-23 00:00:00', 5, 5, 5, 5, 5, '300', '400', '500', '350', '450', 7),
(1, '2017-12-22 00:00:00', 50, 42, 20, 30, 40, '300', '400', '500', '350', '450', 11),
(1, '2017-12-23 00:00:00', 50, 42, 20, 30, 40, '300', '400', '500', '350', '450', 12),
(1, '2017-12-23 00:00:00', 50, 42, 20, 30, 40, '300', '400', '500', '350', '450', 13),
(1, '2017-11-28 00:00:00', 50, 30, 20, 30, 40, '300', '400', '500', '350', '450', 14),
(1, '2017-11-29 00:00:00', 50, 30, 20, 30, 40, '300', '400', '500', '350', '450', 15),
(4, '2017-11-29 00:00:00', 55, 43, 25, 35, 45, '300', '400', '500', '350', '450', 16),
(4, '2017-11-28 00:00:00', 55, 43, 25, 35, 45, '300', '400', '500', '350', '450', 17),
(4, '2017-11-21 00:00:00', 55, 45, 25, 35, 45, '300', '400', '500', '350', '450', 18),
(4, '2017-11-24 00:00:00', 55, 45, 25, 35, 45, '300', '400', '500', '350', '450', 19),
(4, '2017-11-25 00:00:00', 55, 45, 25, 35, 45, '300', '400', '500', '350', '450', 20),
(5, '2017-11-23 00:00:00', 50, 60, 50, 20, 25, '400', '300', '350', '380', '390', 21),
(5, '2017-11-21 00:00:00', 50, 60, 50, 20, 25, '400', '300', '350', '380', '390', 22),
(5, '2017-11-22 00:00:00', 50, 60, 50, 20, 25, '400', '300', '350', '380', '390', 23),
(5, '2017-11-24 00:00:00', 50, 60, 50, 20, 25, '400', '300', '350', '380', '390', 24),
(5, '2017-11-25 00:00:00', 50, 60, 50, 20, 25, '400', '300', '350', '380', '390', 25),
(2, '2017-11-24 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 26),
(2, '2017-11-23 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 27),
(2, '2017-11-26 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 28),
(2, '2017-11-27 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 29),
(2, '2017-11-25 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 30),
(2, '2017-11-28 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 31),
(2, '2017-11-29 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 32),
(2, '2017-11-30 00:00:00', 20, 20, 40, 30, 20, '200', '200', '220', '210', '210', 33);

-- --------------------------------------------------------

--
-- Table structure for table `hotelbooking`
--

CREATE TABLE `hotelbooking` (
  `BookingId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `HotelId` int(11) DEFAULT NULL,
  `RoomType` varchar(45) DEFAULT NULL,
  `TravelerId` varchar(45) NOT NULL,
  `CardId` varchar(45) NOT NULL,
  `Street` varchar(100) NOT NULL,
  `City` varchar(100) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Country` varchar(100) NOT NULL,
  `Zip` varchar(100) NOT NULL,
  `TotalCost` decimal(10,0) DEFAULT NULL,
  `NumberOfRooms` int(11) DEFAULT NULL,
  `NumberOfAdults` int(11) DEFAULT NULL,
  `NumberOfChildren` int(11) DEFAULT NULL,
  `BookingDateTime` varchar(255) DEFAULT NULL,
  `CheckInDate` datetime DEFAULT NULL,
  `CheckOutDate` datetime DEFAULT NULL,
  `DeleteFlag` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hotelbooking`
--

INSERT INTO `hotelbooking` (`BookingId`, `UserId`, `HotelId`, `RoomType`, `TravelerId`, `CardId`, `Street`, `City`, `State`, `Country`, `Zip`, `TotalCost`, `NumberOfRooms`, `NumberOfAdults`, `NumberOfChildren`, `BookingDateTime`, `CheckInDate`, `CheckOutDate`, `DeleteFlag`) VALUES
(1, 1, 1, '2', '1', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 3, 2, '2017-11-23 23:50:00', '2017-12-22 00:00:00', '2017-12-24 00:00:00', 1),
(2, 1, 1, '2', '1', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 3, 2, '2017-11-24 23:50:00', '2017-11-28 00:00:00', '2017-11-29 00:00:00', 0),
(3, 1, 1, '2', '1', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 3, 2, '2017-11-24 23:50:00', '2017-11-28 00:00:00', '2017-11-29 00:00:00', 0),
(4, 1, 1, '2', '1', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 3, 2, '2017-11-24 23:50:00', '2017-11-28 00:00:00', '2017-11-29 00:00:00', 0),
(5, 1, 1, '2', '1', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 3, 2, '2017-11-24 23:50:00', '2017-11-28 00:00:00', '2017-11-29 00:00:00', 0),
(6, 1, 1, '2', '1', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 3, 2, '2017-11-24 23:50:00', '2017-11-28 00:00:00', '2017-11-29 00:00:00', 0),
(7, 1, 4, '2', '1', '1', '201 S 4th Street', 'San Jose', 'CA', 'USA', '95112', '300', 2, 3, 2, '2017-11-24 23:50:00', '2017-11-28 00:00:00', '2017-11-29 00:00:00', 0),
(8, 1, 4, 'No bed specified', 'undefined', 'undefined', '', 'w', 'w', 'w', 'w', '300', 0, 0, 0, '2017-11-27T08:20:33.285Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(9, 1, 4, 'No bed specified', 'undefined', 'undefined', 'rer', 'rer', 'rer', 'w', 'rer', '300', 0, 0, 0, '2017-11-27T09:08:57.960Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(10, 1, 4, 'No bed specified', 'undefined', 'undefined', 'w', 'w', 'w', 'w', 'w', '300', 0, 0, 0, '2017-11-27T09:09:32.767Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(11, 1, 5, 'No bed specified', '22', '12', 'w', 'w', 'w', 'w', 'w', '300', 0, 0, 0, '2017-11-27T09:12:23.240Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(12, 1, 4, 'No bed specified', '23', '13', 'w', 'w', 'w', 'ww', 'w', '300', 0, 0, 0, '2017-11-27T09:15:52.100Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(13, 1, 4, 'No bed specified', '24', '14', 'w', 'w', 'w', 'w', 'w', '300', 0, 0, 0, '2017-11-27T09:18:32.580Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(14, 1, 4, 'No bed specified', 'undefined', '15', 'w', 'w', 'w', 'w', 'w', '300', 0, 0, 0, '2017-11-27T09:18:51.787Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(15, 1, 2, 'No bed specified', '25', '16', '201 S 4th st', 'San Jose', 'CA', 'USA', '6678767', '300', 0, 0, 0, '2017-11-27T09:46:28.866Z', '2017-11-23 00:00:00', '2017-11-30 00:00:00', 0),
(16, 1, 4, 'No bed specified', '26', '17', 'w', 'w', 'w', 'w', 'w', '300', 0, 0, 0, '2017-11-27T09:48:06.234Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(17, 1, 4, 'No bed specified', 'Traveler info added successfully with id 28', 'Payment info added successfully with id 19', 'W', 'W', 'W', 'W', 'W', '300', 0, 0, 0, '2017-11-27T23:57:31.405Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(18, 1, 4, 'No bed specified', 'undefined', '25', 'y', 'y', 'y', 'y', 'y', '0', 0, 0, 0, '2017-11-29T06:15:39.197Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(19, 1, 4, 'No bed specified', '33', '26', 'w', 'w', 'w', 'w', 'w', '0', 0, 0, 0, '2017-11-29T06:17:12.645Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(20, 1, 4, 'No bed specified', '34', '27', 'w', 'w', 'w', 'w', 'w', '0', 0, 0, 0, '2017-11-29T06:24:39.886Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(21, 1, 4, 'No bed specified', '35', '28', 'w', 'w', 'w', 'w', 'w', '0', 0, 0, 0, '2017-11-29T06:26:03.489Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(22, 1, 4, 'No bed specified', '36', '29', 'w', 'w', 'w', 'w', 'w', '0', 0, 0, 0, '2017-11-29T06:28:57.134Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0),
(23, 1, 4, 'No bed specified', '37', '30', 'w', 'w', 'w', 'ww', 'w', '0', 0, 0, 0, '2017-11-29T06:34:22.797Z', '2017-11-21 00:00:00', '2017-11-25 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `carid` int(10) NOT NULL,
  `city` varchar(100) NOT NULL,
  `s_date` datetime NOT NULL,
  `e_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`id`, `carid`, `city`, `s_date`, `e_date`) VALUES
(2, 3, 'San Jose', '2017-12-31 00:00:00', '2018-01-01 00:00:00'),
(30, 2, 'San Jose', '2018-01-01 00:00:00', '2018-01-02 00:00:00'),
(31, 1, 'San Jose', '2018-01-04 00:00:00', '2018-01-05 00:00:00'),
(49, 1, 'Sf', '2018-01-09 00:00:00', '2018-01-10 00:00:00'),
(54, 1, 'Sf', '2018-01-12 00:00:00', '2018-01-15 00:00:00'),
(57, 2, 'Sf', '2018-01-20 00:00:00', '2018-01-25 00:00:00'),
(61, 2, 'Sf', '2018-01-17 00:00:00', '2018-01-23 00:00:00'),
(63, 4, 'sf', '2018-01-10 00:00:00', '2019-01-27 00:00:00'),
(67, 4, 'sf', '2018-01-17 00:00:00', '2018-01-20 00:00:00'),
(71, 2, 'Sf', '2018-01-20 00:00:00', '2018-01-25 00:00:00'),
(73, 2, 'Sf', '2018-01-26 00:00:00', '2018-01-30 00:00:00'),
(76, 2, 'sf', '2017-01-20 00:00:00', '2019-01-21 00:00:00'),
(78, 3, 'Sf', '2017-01-06 00:00:00', '2018-01-27 00:00:00'),
(79, 3, 'Sf', '2018-01-28 00:00:00', '2019-01-07 00:00:00'),
(80, 4, 'sf', '2017-01-07 00:00:00', '2017-01-07 08:00:00'),
(81, 4, 'sf', '2017-01-26 00:00:00', '2017-01-26 08:00:00'),
(82, 4, 'sf', '2018-01-15 00:00:00', '2018-03-25 01:00:00'),
(83, 4, 'sf', '2018-03-26 01:00:00', '2019-01-27 00:00:00'),
(84, 3, 'Sf', '2017-01-01 00:00:00', '2018-03-25 01:00:00'),
(85, 3, 'Sf', '2018-03-28 01:00:00', '2019-01-02 00:00:00'),
(90, 5, 'San Jose', '2017-11-01 00:00:00', '2017-11-02 01:00:00'),
(92, 5, 'San Jose', '2018-01-26 00:00:00', '2019-11-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `CardId` int(11) NOT NULL,
  `CardType` varchar(45) NOT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Cvv` varchar(45) NOT NULL,
  `CardNumber` varchar(45) NOT NULL,
  `ExpiryDate` varchar(45) NOT NULL,
  `UserId` int(11) NOT NULL,
  `BookingId` int(11) DEFAULT NULL,
  `DeleteFlag` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`CardId`, `CardType`, `UserName`, `Cvv`, `CardNumber`, `ExpiryDate`, `UserId`, `BookingId`, `DeleteFlag`) VALUES
(1, 'Visa', 'jainul patel', '998', '1800900089991999', '2022-02-22', 1, NULL, 1),
(2, 'Visa', 'jainul patel', '998', '1800900089991999', '2022-02-22', 1, NULL, 1),
(3, 'Visa', 'anu patel', '123', '1800999977776666', '2022-02-22', 1, NULL, 1),
(4, 'MASTERCARD', 'manasa', '544', '3424', '10/23', 1, NULL, 1),
(5, '0', 'ujjval', 'w', 'w', '11/11', 1, NULL, 1),
(6, 'visamaster', 'ujjval', 'w', 'w', 'w', 1, NULL, 1),
(7, 'visamaster', 'ujjval', '111', '111', '08/10', 1, NULL, 0),
(8, 'MASTERCARD', 'w', 'w', 'w', '12/12', 1, NULL, 0),
(9, 'MASTERCARD', 'w', 'w', 'w', 'w', 1, NULL, 0),
(10, 'MASTERCARD', 'w', 'w', 'w', 'w', 1, NULL, 0),
(11, 'MASTERCARD', 'w', 'w', 'w', '12/12', 1, NULL, 0),
(12, 'MASTERCARD', 'w', 'w', 'w', 'w', 1, NULL, 0),
(13, 'MASTERCARD', 'w', 'w', 'w', 'w', 1, NULL, 0),
(14, 'MASTERCARD', 'w', 'w', 'w', 'w', 1, NULL, 0),
(15, 'MASTERCARD', 'w', 'w', 'w', 'w', 1, NULL, 0),
(16, 'MASTERCARD', 'Jainul patel', '565', '32454657658', '07/2019', 1, NULL, 0),
(17, 'MASTERCARD', 'w', 'w', 'w', 'w', 1, NULL, 0),
(22, 'MASTERCARD', 'a', 'a', 'a', 'a', 1, NULL, 0),
(25, 'MASTERCARD', 'y', 'y', 'y', 'y', 1, NULL, 0),
(26, 'MASTERCARD', 'e', 'e', 'e', 'e', 1, NULL, 0),
(34, 'MASTERCARD', 'Somename', '111', '111', '111', 1, NULL, 0),
(40, 'MASTERCARD', 'u', 'u', 'u', 'u', 1, NULL, 0),
(58, 'MASTERCARD', 'q', 'q', 'q', 'q', 1, NULL, 0),
(59, 'MASTERCARD', '', '', '', '', 1, NULL, 0),
(60, 'MASTERCARD', '', '', '', '', 1, NULL, 0),
(61, 'MASTERCARD', 'w', '111', '1111111111111111', '11/11', 1, NULL, 0),
(62, 'MASTERCARD', 'w', '777', '1234567890123456', '12/19', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `travelerinfo`
--

CREATE TABLE `travelerinfo` (
  `TravelerId` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `Phone` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Age` int(3) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `DeleteFlag` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `travelerinfo`
--

INSERT INTO `travelerinfo` (`TravelerId`, `FirstName`, `LastName`, `MiddleName`, `Phone`, `Email`, `Age`, `Gender`, `UserId`, `DeleteFlag`) VALUES
(1, 'Jainul', 'Patel', NULL, '1122334422', 'jainul@gmail.com', NULL, NULL, 1, 1),
(6, 'Jainul1', 'Patel', NULL, '1122334422', 'jainul111@gmail.com', NULL, NULL, 1, 1),
(7, 'anu', 'Patel', NULL, '1122334422', 'anu@gmail.com', NULL, NULL, 1, 1),
(8, 'aaa', 'Patel', NULL, '2334422442', 'aaa@gmail.com', NULL, NULL, 1, 1),
(9, 'aaab', 'Patel', NULL, '2334422442', 'aaab@gmail.com', NULL, NULL, 1, 0),
(10, 'bbn', 'nnm', NULL, '2334422442', 'bbn@gmail.com', NULL, NULL, 1, 0),
(11, 'ma', 'e', NULL, 'w', 'w', NULL, NULL, 1, 0),
(12, 'ww', 'ww', NULL, 'ww', 'ww', NULL, NULL, 1, 0),
(13, 'w', 'w', NULL, 'ww', 'w', NULL, NULL, 1, 0),
(14, 'manasa', 'fdsfd', NULL, 'fsf', 'es', NULL, NULL, 1, 0),
(15, 'wWw', 'w', NULL, 'w', 'w', NULL, NULL, 1, 0),
(16, 'w', 'w', NULL, 'w', 'w', NULL, NULL, 1, 0),
(17, 'w', 'w', NULL, 'w', 'w', NULL, NULL, 1, 0),
(18, 'r', 'w', NULL, 'r', 'w', NULL, NULL, 1, 0),
(19, 'w', 'w', NULL, 'w', 'w', NULL, NULL, 1, 0),
(20, 'bbn', 'nnm', 'jjk', '2334422442', 'bbn@gmail.com', 23, 'female', 1, 0),
(21, 'w', 'w', 'w', 'w', 'w', 32, 'male', 1, 0),
(22, 'w', 'w', 'w', 'w', 'w', 45, '', 1, 0),
(23, 'wWwWwW', 'w', 'w', 'w', 'w', 9, 'female', 1, 0),
(24, 'w', 'w', 'w', 'w', 'w', 34, 'male', 1, 0),
(25, 'jainul patel', 'jainul patel', 'jainul patel', '88899977', 'jainul.patel', 23, 'female', 1, 0),
(26, 'w', 'w', 'w', 'w', 'w', 65, '', 1, 0),
(27, 'w', 'w', NULL, 'w', 'w', NULL, NULL, 1, 0),
(28, 'w', 'W', NULL, 'W', 'W', NULL, NULL, 1, 0),
(29, 'manasa', 'w', 'w', 'w', 'w', 98, 'female', 1, 0),
(30, 'w', 'w', 'w', 'w', 'w', 4, 'female', 1, 0),
(31, 'aA', 'a', 'A', 'a', 'a', 3, 'male', 1, 0),
(32, 'aA', 'a', 'A', 'a', 'a', 3, 'male', 1, 0),
(33, 'w', 'w', 'w', 'w', 'w', 4, 'female', 1, 0),
(34, 'w', 'w', 'w', 'w', 'w', 7, 'female', 1, 0),
(35, 'w', 'w', 'w', 'w', 'w', 9, 'female', 1, 0),
(36, 'w', 'w', 'w', 'w', 'w', 9, 'female', 1, 0),
(37, 'w', 'w', 'w', 'w', 'w', 7, 'female', 1, 0),
(38, 'w', 'w', 'w', 'ww', 'w', 5, 'male', 1, 0),
(39, 'w', 'w', 'w', 'w', 'w', 6, 'female', 1, 0),
(40, 'w', 'w', 'w', 'w', 'w', 6, 'female', 1, 0),
(41, 'Ujjval', 'Soni', 'H', '111111111', 'ujjval.soni@sjsu.edu', 20, 'male', 1, 0),
(47, 'u', 'u', 'u', 'u', 'u', 0, 'male', 1, 0),
(65, 'q', 'q', 'q', 'q', 'q', 0, 'male', 1, 0),
(66, 'w', 'w', 'w', 'ww', 'w', 2, 'female', 1, 0),
(67, '', '', '', '', '', 0, '', 1, 0),
(68, 'w', 'w', 'ww', 'w', 'w', 8, 'female', 1, 0),
(69, 'w', 'w', 'w', 'w', 'w', 9, 'female', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `Address` varchar(500) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `State` varchar(5) DEFAULT NULL,
  `ZipCode` varchar(50) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `ProfileImage` blob,
  `IsAdmin` tinyint(4) NOT NULL DEFAULT '0',
  `CreatedDate` datetime DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  `UpdatedBy` varchar(255) DEFAULT NULL,
  `Password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserId`, `FirstName`, `LastName`, `Address`, `City`, `State`, `ZipCode`, `Phone`, `Email`, `ProfileImage`, `IsAdmin`, `CreatedDate`, `CreatedBy`, `UpdatedDate`, `UpdatedBy`, `Password`) VALUES
(1, 'Jainul', 'Patel', '733', 'San Jose', 'CA', '95112', '123123123', 'jainul.patel@sjsu.edu', NULL, 0, NULL, NULL, NULL, NULL, '123123'),
(11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'lol@mwahah.com', NULL, 0, NULL, NULL, NULL, NULL, '123'),
(12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'lol1@mwahah.com', NULL, 0, NULL, NULL, NULL, NULL, '123'),
(13, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ujjval@hotmail.com', NULL, 0, NULL, NULL, NULL, NULL, '111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `billing`
--
ALTER TABLE `billing`
  ADD PRIMARY KEY (`BillingId`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`bookingid`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`carId`);

--
-- Indexes for table `creditcards`
--
ALTER TABLE `creditcards`
  ADD PRIMARY KEY (`CardId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `flightbooking`
--
ALTER TABLE `flightbooking`
  ADD PRIMARY KEY (`BookingId`),
  ADD KEY `FlightIdTo_idx` (`FlightIdTo`);

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`FlightId`);

--
-- Indexes for table `flightsavailability`
--
ALTER TABLE `flightsavailability`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`HotelId`);

--
-- Indexes for table `hotelavailability`
--
ALTER TABLE `hotelavailability`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `hotelbooking`
--
ALTER TABLE `hotelbooking`
  ADD PRIMARY KEY (`BookingId`);

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`CardId`),
  ADD KEY `UserId_idx` (`UserId`),
  ADD KEY `BookingIdFK_idx` (`BookingId`);

--
-- Indexes for table `travelerinfo`
--
ALTER TABLE `travelerinfo`
  ADD PRIMARY KEY (`TravelerId`),
  ADD KEY `UserId_idx` (`UserId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `billing`
--
ALTER TABLE `billing`
  MODIFY `BillingId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `bookingid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `carId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `creditcards`
--
ALTER TABLE `creditcards`
  MODIFY `CardId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `flightbooking`
--
ALTER TABLE `flightbooking`
  MODIFY `BookingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `flightsavailability`
--
ALTER TABLE `flightsavailability`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `HotelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hotelavailability`
--
ALTER TABLE `hotelavailability`
  MODIFY `Id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `hotelbooking`
--
ALTER TABLE `hotelbooking`
  MODIFY `BookingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `CardId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `travelerinfo`
--
ALTER TABLE `travelerinfo`
  MODIFY `TravelerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `creditcards`
--
ALTER TABLE `creditcards`
  ADD CONSTRAINT `creditcards_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`);

--
-- Constraints for table `flightbooking`
--
ALTER TABLE `flightbooking`
  ADD CONSTRAINT `FlightIdTo` FOREIGN KEY (`FlightIdTo`) REFERENCES `flights` (`FlightId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `UserIdFK` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `travelerinfo`
--
ALTER TABLE `travelerinfo`
  ADD CONSTRAINT `UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
