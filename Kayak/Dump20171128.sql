-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: kayak
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `billing`
--

DROP TABLE IF EXISTS `billing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billing` (
  `BillingId` int(11) NOT NULL AUTO_INCREMENT,
  `BookingType` varchar(10) DEFAULT NULL,
  `BillingDate` datetime DEFAULT NULL,
  `TotalAmount` int(11) DEFAULT NULL,
  `CreditcardId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  `UpdatedBy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`BillingId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing`
--

LOCK TABLES `billing` WRITE;
/*!40000 ALTER TABLE `billing` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookings` (
  `bookingid` int(11) NOT NULL AUTO_INCREMENT,
  `carid` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `s_date` datetime NOT NULL,
  `e_date` datetime NOT NULL,
  PRIMARY KEY (`bookingid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,0,'Sf','2018-01-15 00:00:00','2018-01-17 00:00:00'),(2,1,'Sf','2018-01-10 00:00:00','2018-01-12 00:00:00'),(3,4,'sf','2018-01-10 00:00:00','2018-01-12 00:00:00'),(4,4,'sf','2017-01-26 00:00:00','2017-01-29 00:00:00'),(5,1,'Sf','2018-01-14 00:00:00','2018-01-15 00:00:00'),(6,2,'Sf','2018-01-20 00:00:00','2018-01-25 00:00:00'),(7,2,'Sf','2018-01-25 00:00:00','2018-01-26 00:00:00'),(8,2,'Sf','2018-01-26 00:00:00','2018-01-28 00:00:00'),(9,2,'Sf','2018-01-28 00:00:00','2018-01-30 00:00:00'),(10,2,'Sf','2018-01-20 00:00:00','2018-01-23 00:00:00'),(11,4,'sf','2018-01-15 00:00:00','2018-01-20 00:00:00'),(12,4,'sf','2018-01-17 00:00:00','2018-01-20 00:00:00'),(13,4,'sf','2018-01-20 00:00:00','2018-01-23 00:00:00'),(14,4,'sf','2018-01-17 00:00:00','2018-01-20 00:00:00'),(15,2,'Sf','2018-01-22 00:00:00','2018-01-23 00:00:00'),(17,4,'sf','2018-01-27 00:00:00','2018-01-28 00:00:00'),(19,3,'Sf','2018-01-27 00:00:00','2018-01-28 00:00:00');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cars` (
  `carId` int(10) NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`carId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'Toyota Corolla','Economy',4,1,4,1,0,0,0,0),(2,'Hyundai Accent','Intermediate',2,2,3,0,1,0,0,0),(3,'Some Car','Awesome',10,1,10,0,0,0,0,0),(4,'Just bored now','Fab',1,10,1,0,0,0,0,0);
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditcards`
--

DROP TABLE IF EXISTS `creditcards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditcards` (
  `CardId` int(11) NOT NULL AUTO_INCREMENT,
  `CardType` varchar(45) NOT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Cvv` varchar(45) NOT NULL,
  `CardNumber` varchar(45) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  `UpdatedBy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`CardId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `creditcards_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditcards`
--

LOCK TABLES `creditcards` WRITE;
/*!40000 ALTER TABLE `creditcards` DISABLE KEYS */;
/*!40000 ALTER TABLE `creditcards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flightbooking`
--

DROP TABLE IF EXISTS `flightbooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flightbooking` (
  `BookingId` int(11) NOT NULL AUTO_INCREMENT,
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
  `DeleteFlag` int(1) DEFAULT '0',
  PRIMARY KEY (`BookingId`),
  KEY `FlightIdTo_idx` (`FlightIdTo`),
  CONSTRAINT `FlightIdTo` FOREIGN KEY (`FlightIdTo`) REFERENCES `flights` (`FlightId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flightbooking`
--

LOCK TABLES `flightbooking` WRITE;
/*!40000 ALTER TABLE `flightbooking` DISABLE KEYS */;
INSERT INTO `flightbooking` VALUES (5,1,1,'EK 179',NULL,'3','1,2','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,1,1,'2017-11-25 23:50:00','2017-11-28 00:00:00',NULL,1),(7,1,1,'EK 179',NULL,'3','1,2','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,1,1,'2017-11-25 23:50:00','2017-11-28 00:00:00',NULL,0);
/*!40000 ALTER TABLE `flightbooking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flights`
--

DROP TABLE IF EXISTS `flights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `DeleteFlag` int(11) DEFAULT '0',
  PRIMARY KEY (`FlightId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flights`
--

LOCK TABLES `flights` WRITE;
/*!40000 ALTER TABLE `flights` DISABLE KEYS */;
INSERT INTO `flights` VALUES ('BA 222','British Airways','LAX','NYC',10,10,5,665,444,234,'04:10:00','09:00:00','Wide-body Jet','Boeing 737-800',0),('BA 230','British Airways','NYC','LAX',200,200,200,688,590,123,'05:45:00','10:00:00','Narrow-body Jet','Boeing 777',0),('BA 240','British Airways','BOS','SEA',200,200,200,556,333,223,'02:00:00','13:00:00','Narrow-body Jet','Airbus A320-100/200',0),('BA 250','British Airways','SEA','SJC',200,200,200,555,432,233,'14:15:00','16:50:00','Wide-body Jet','Airbus A321-100/200',0),('EK 170','Emirates','LAX','NYC',200,200,200,600,500,300,'23:50:00','01:00:00','Narrow-body Jet','Airbus A321-100/200',0),('EK 178','Emirates','SJC','NYC',200,200,200,665,445,223,'15:00:00','21:00:00','Wide-body Jet','Airbus A320-100/200',0),('EK 179','Emirates','NYC','SFO',200,200,200,700,600,400,'01:00:00','07:00:00','Narrow-body Jet','Boeing 737-900',0),('ET 232','Etihaad','NYC','SFO',211,345,122,200,150,100,'21:00:00','23:00:00','Wide-body Jet','Airbus A320-100/200',0),('ET 333','Etihaad','SJC','SFO',111,234,111,450,444,100,'11:00:00','12:00:00','Narrow-body Jet','Airbus A320-100/200',0);
/*!40000 ALTER TABLE `flights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flightsavailability`
--

DROP TABLE IF EXISTS `flightsavailability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flightsavailability` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT NULL,
  `FlightId` varchar(100) NOT NULL,
  `FirstClassSeats` int(10) NOT NULL,
  `BusinessClassSeats` int(10) NOT NULL,
  `EconomyClassSeats` int(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flightsavailability`
--

LOCK TABLES `flightsavailability` WRITE;
/*!40000 ALTER TABLE `flightsavailability` DISABLE KEYS */;
INSERT INTO `flightsavailability` VALUES (1,NULL,'BA 230',200,200,200),(2,NULL,'BA 240',200,200,200),(3,NULL,'BA 250',200,200,200),(4,NULL,'EK 170',200,200,200),(5,NULL,'EK 178',200,200,200),(6,NULL,'EK 179',200,200,200),(7,'2017-11-20 00:00:00','BA 222',10,10,1),(8,'2017-11-22 00:00:00','BA 222',10,10,1),(10,'2017-11-28 00:00:00','EK 179',200,200,198);
/*!40000 ALTER TABLE `flightsavailability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotel` (
  `HotelId` int(11) NOT NULL AUTO_INCREMENT,
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
  `DeleteFlag` int(11) DEFAULT '0',
  PRIMARY KEY (`HotelId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Fairmont San Jose','San Jose, CA',8,'66778897','170 South Market Street','CA',NULL,NULL,'95113','4','Very good luxury hotel. Good for sightseeing and has nearby restaurants and bars.',0),(2,'Hotel De Anza','San Jose, CA',8,'33445533','233 West Santa Clara Street','CA',NULL,NULL,'95113','4','Excellent city hotel. Close to restaurants and bars with nearby parking areas. Fantastic service. Awesome vibe.',0),(3,'Wyndham Garden San Jose – Silicon Valley','San Jose, CA',8,'55667722','399 Silicon Valley Boulevard','CA',NULL,NULL,'95138','3','Excellent family hotel. Great location.',0),(4,'Row NYC','New York, NY',7,'4433243','700 8th Avenue','NY',NULL,NULL,'10036','4','Excellent hotel. Located near shopping areas with easy access to parking.',0),(5,'Sofitel New York','New York, NY',9,'343546','45 West 44TH Street','NY',NULL,NULL,'10036','3','Very good romantic hotel. Fantastic service. Great location.\nVery good romantic hotel. Fantastic service. Great location.\nExcellent business hotel. Close to Great America. Located near shopping areas with easy access to parking. Great pool.',0);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotelavailability`
--

DROP TABLE IF EXISTS `hotelavailability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `Id` int(50) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotelavailability`
--

LOCK TABLES `hotelavailability` WRITE;
/*!40000 ALTER TABLE `hotelavailability` DISABLE KEYS */;
INSERT INTO `hotelavailability` VALUES (1,NULL,50,40,20,30,40,300,400,500,350,450,1),(4,NULL,55,45,25,35,45,300,400,500,350,450,2),(2,NULL,20,20,40,30,20,200,200,220,210,210,3),(3,NULL,22,33,44,34,45,300,300,300,300,300,4),(5,NULL,50,60,50,20,25,400,300,350,380,390,5),(4,'2017-11-22 00:00:00',2,0,0,0,0,300,400,500,350,450,6),(4,'2017-11-23 00:00:00',5,5,5,5,5,300,400,500,350,450,7),(1,'2017-12-22 00:00:00',50,42,20,30,40,300,400,500,350,450,11),(1,'2017-12-23 00:00:00',50,42,20,30,40,300,400,500,350,450,12),(1,'2017-12-23 00:00:00',50,42,20,30,40,300,400,500,350,450,13),(1,'2017-11-28 00:00:00',50,30,20,30,40,300,400,500,350,450,14),(1,'2017-11-29 00:00:00',50,30,20,30,40,300,400,500,350,450,15),(4,'2017-11-29 00:00:00',55,43,25,35,45,300,400,500,350,450,16),(4,'2017-11-28 00:00:00',55,43,25,35,45,300,400,500,350,450,17),(4,'2017-11-21 00:00:00',55,45,25,35,45,300,400,500,350,450,18),(4,'2017-11-24 00:00:00',55,45,25,35,45,300,400,500,350,450,19),(4,'2017-11-25 00:00:00',55,45,25,35,45,300,400,500,350,450,20),(5,'2017-11-23 00:00:00',50,60,50,20,25,400,300,350,380,390,21),(5,'2017-11-21 00:00:00',50,60,50,20,25,400,300,350,380,390,22),(5,'2017-11-22 00:00:00',50,60,50,20,25,400,300,350,380,390,23),(5,'2017-11-24 00:00:00',50,60,50,20,25,400,300,350,380,390,24),(5,'2017-11-25 00:00:00',50,60,50,20,25,400,300,350,380,390,25),(2,'2017-11-24 00:00:00',20,20,40,30,20,200,200,220,210,210,26),(2,'2017-11-23 00:00:00',20,20,40,30,20,200,200,220,210,210,27),(2,'2017-11-26 00:00:00',20,20,40,30,20,200,200,220,210,210,28),(2,'2017-11-27 00:00:00',20,20,40,30,20,200,200,220,210,210,29),(2,'2017-11-25 00:00:00',20,20,40,30,20,200,200,220,210,210,30),(2,'2017-11-28 00:00:00',20,20,40,30,20,200,200,220,210,210,31),(2,'2017-11-29 00:00:00',20,20,40,30,20,200,200,220,210,210,32),(2,'2017-11-30 00:00:00',20,20,40,30,20,200,200,220,210,210,33);
/*!40000 ALTER TABLE `hotelavailability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotelbooking`
--

DROP TABLE IF EXISTS `hotelbooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotelbooking` (
  `BookingId` int(11) NOT NULL AUTO_INCREMENT,
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
  `DeleteFlag` int(1) DEFAULT '0',
  PRIMARY KEY (`BookingId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotelbooking`
--

LOCK TABLES `hotelbooking` WRITE;
/*!40000 ALTER TABLE `hotelbooking` DISABLE KEYS */;
INSERT INTO `hotelbooking` VALUES (1,1,1,'2','1','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,3,2,'2017-11-23 23:50:00','2017-12-22 00:00:00','2017-12-24 00:00:00',1),(2,1,1,'2','1','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,3,2,'2017-11-24 23:50:00','2017-11-28 00:00:00','2017-11-29 00:00:00',0),(3,1,1,'2','1','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,3,2,'2017-11-24 23:50:00','2017-11-28 00:00:00','2017-11-29 00:00:00',0),(4,1,1,'2','1','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,3,2,'2017-11-24 23:50:00','2017-11-28 00:00:00','2017-11-29 00:00:00',0),(5,1,1,'2','1','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,3,2,'2017-11-24 23:50:00','2017-11-28 00:00:00','2017-11-29 00:00:00',0),(6,1,1,'2','1','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,3,2,'2017-11-24 23:50:00','2017-11-28 00:00:00','2017-11-29 00:00:00',0),(7,1,4,'2','1','1','201 S 4th Street','San Jose','CA','USA','95112',300,2,3,2,'2017-11-24 23:50:00','2017-11-28 00:00:00','2017-11-29 00:00:00',0),(8,1,4,'No bed specified','undefined','undefined','','w','w','w','w',300,0,0,0,'2017-11-27T08:20:33.285Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(9,1,4,'No bed specified','undefined','undefined','rer','rer','rer','w','rer',300,0,0,0,'2017-11-27T09:08:57.960Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(10,1,4,'No bed specified','undefined','undefined','w','w','w','w','w',300,0,0,0,'2017-11-27T09:09:32.767Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(11,1,5,'No bed specified','22','12','w','w','w','w','w',300,0,0,0,'2017-11-27T09:12:23.240Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(12,1,4,'No bed specified','23','13','w','w','w','ww','w',300,0,0,0,'2017-11-27T09:15:52.100Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(13,1,4,'No bed specified','24','14','w','w','w','w','w',300,0,0,0,'2017-11-27T09:18:32.580Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(14,1,4,'No bed specified','undefined','15','w','w','w','w','w',300,0,0,0,'2017-11-27T09:18:51.787Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(15,1,2,'No bed specified','25','16','201 S 4th st','San Jose','CA','USA','6678767',300,0,0,0,'2017-11-27T09:46:28.866Z','2017-11-23 00:00:00','2017-11-30 00:00:00',0),(16,1,4,'No bed specified','26','17','w','w','w','w','w',300,0,0,0,'2017-11-27T09:48:06.234Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(17,1,4,'No bed specified','Traveler info added successfully with id 28','Payment info added successfully with id 19','W','W','W','W','W',300,0,0,0,'2017-11-27T23:57:31.405Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(18,1,4,'No bed specified','undefined','25','y','y','y','y','y',0,0,0,0,'2017-11-29T06:15:39.197Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(19,1,4,'No bed specified','33','26','w','w','w','w','w',0,0,0,0,'2017-11-29T06:17:12.645Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(20,1,4,'No bed specified','34','27','w','w','w','w','w',0,0,0,0,'2017-11-29T06:24:39.886Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(21,1,4,'No bed specified','35','28','w','w','w','w','w',0,0,0,0,'2017-11-29T06:26:03.489Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(22,1,4,'No bed specified','36','29','w','w','w','w','w',0,0,0,0,'2017-11-29T06:28:57.134Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0),(23,1,4,'No bed specified','37','30','w','w','w','ww','w',0,0,0,0,'2017-11-29T06:34:22.797Z','2017-11-21 00:00:00','2017-11-25 00:00:00',0);
/*!40000 ALTER TABLE `hotelbooking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `carid` int(10) NOT NULL,
  `city` varchar(100) NOT NULL,
  `s_date` datetime NOT NULL,
  `e_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` VALUES (2,3,'San Jose','2017-12-31 00:00:00','2018-01-01 00:00:00'),(30,2,'San Jose','2018-01-01 00:00:00','2018-01-02 00:00:00'),(31,1,'San Jose','2018-01-04 00:00:00','2018-01-05 00:00:00'),(36,3,'Sf','2017-01-01 00:00:00','2019-01-02 00:00:00'),(40,4,'sf','2017-01-07 00:00:00','2019-01-09 00:00:00'),(49,1,'Sf','2018-01-09 00:00:00','2018-01-10 00:00:00'),(54,1,'Sf','2018-01-12 00:00:00','2018-01-15 00:00:00'),(57,2,'Sf','2018-01-20 00:00:00','2018-01-25 00:00:00'),(61,2,'Sf','2018-01-17 00:00:00','2018-01-23 00:00:00'),(63,4,'sf','2018-01-10 00:00:00','2019-01-27 00:00:00'),(67,4,'sf','2018-01-17 00:00:00','2018-01-20 00:00:00'),(69,4,'sf','2018-01-15 00:00:00','2019-01-27 00:00:00'),(71,2,'Sf','2018-01-20 00:00:00','2018-01-25 00:00:00'),(73,2,'Sf','2018-01-26 00:00:00','2018-01-30 00:00:00'),(75,4,'sf','2017-01-26 00:00:00','2018-01-28 00:00:00'),(76,2,'sf','2017-01-20 00:00:00','2019-01-21 00:00:00'),(78,3,'Sf','2017-01-06 00:00:00','2018-01-27 00:00:00'),(79,3,'Sf','2018-01-28 00:00:00','2019-01-07 00:00:00');
/*!40000 ALTER TABLE `list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `CardId` int(11) NOT NULL AUTO_INCREMENT,
  `CardType` varchar(45) NOT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Cvv` varchar(45) NOT NULL,
  `CardNumber` varchar(45) NOT NULL,
  `ExpiryDate` varchar(45) NOT NULL,
  `UserId` int(11) NOT NULL,
  `BookingId` int(11) DEFAULT NULL,
  `DeleteFlag` int(1) DEFAULT '0',
  PRIMARY KEY (`CardId`),
  KEY `UserId_idx` (`UserId`),
  KEY `BookingIdFK_idx` (`BookingId`),
  CONSTRAINT `UserIdFK` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'Visa','jainul patel','998','1800900089991999','2022-02-22',1,NULL,0),(2,'Visa','jainul patel','998','1800900089991999','2022-02-22',1,NULL,0),(3,'Visa','anu patel','123','1800999977776666','2022-02-22',1,NULL,0),(4,'MASTERCARD','manasa','544','3424','10/23',1,NULL,0),(5,'MASTERCARD','w','w','w','11/11',1,NULL,0),(6,'MASTERCARD','w','w','w','w',1,NULL,0),(7,'MASTERCARD','w','233','w','12/12',1,NULL,0),(8,'MASTERCARD','w','w','w','12/12',1,NULL,0),(9,'MASTERCARD','w','w','w','w',1,NULL,0),(10,'MASTERCARD','w','w','w','w',1,NULL,0),(11,'MASTERCARD','w','w','w','12/12',1,NULL,0),(12,'MASTERCARD','w','w','w','w',1,NULL,0),(13,'MASTERCARD','w','w','w','w',1,NULL,0),(14,'MASTERCARD','w','w','w','w',1,NULL,0),(15,'MASTERCARD','w','w','w','w',1,NULL,0),(16,'MASTERCARD','Jainul patel','565','32454657658','07/2019',1,NULL,0),(17,'MASTERCARD','w','w','w','w',1,NULL,0),(18,'MASTERCARD','w','w','w','w',1,NULL,0),(19,'MASTERCARD','W','W','W','W',1,NULL,0),(20,'MASTERCARD','w','w','w','ww',1,NULL,0),(21,'MASTERCARD','w','w','w','w',1,NULL,0),(22,'MASTERCARD','a','a','a','a',1,NULL,0),(23,'MASTERCARD','a','a','a','a',1,NULL,0),(24,'MASTERCARD','a','a','a','a',1,NULL,0),(25,'MASTERCARD','y','y','y','y',1,NULL,0),(26,'MASTERCARD','e','e','e','e',1,NULL,0),(27,'MASTERCARD','w','w','w','w',1,NULL,0),(28,'MASTERCARD','w','w','w','w',1,NULL,0),(29,'MASTERCARD','w','w','w','w',1,NULL,0),(30,'MASTERCARD','w','w','w','w',1,NULL,0),(31,'MASTERCARD','w','w','w','w',1,NULL,0),(32,'MASTERCARD','w','w','w','w',1,NULL,0),(33,'MASTERCARD','w','w','w','w',1,NULL,0);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travelerinfo`
--

DROP TABLE IF EXISTS `travelerinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `travelerinfo` (
  `TravelerId` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `Phone` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Age` int(3) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `DeleteFlag` int(1) DEFAULT '0',
  PRIMARY KEY (`TravelerId`),
  KEY `UserId_idx` (`UserId`),
  CONSTRAINT `UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travelerinfo`
--

LOCK TABLES `travelerinfo` WRITE;
/*!40000 ALTER TABLE `travelerinfo` DISABLE KEYS */;
INSERT INTO `travelerinfo` VALUES (1,'Jainul','Patel',NULL,'1122334422','jainul@gmail.com',NULL,NULL,1,0),(6,'Jainul1','Patel',NULL,'1122334422','jainul111@gmail.com',NULL,NULL,1,0),(7,'anu','Patel',NULL,'1122334422','anu@gmail.com',NULL,NULL,1,0),(8,'aaa','Patel',NULL,'2334422442','aaa@gmail.com',NULL,NULL,1,0),(9,'aaab','Patel',NULL,'2334422442','aaab@gmail.com',NULL,NULL,1,0),(10,'bbn','nnm',NULL,'2334422442','bbn@gmail.com',NULL,NULL,1,0),(11,'ma','e',NULL,'w','w',NULL,NULL,1,0),(12,'ww','ww',NULL,'ww','ww',NULL,NULL,1,0),(13,'w','w',NULL,'ww','w',NULL,NULL,1,0),(14,'manasa','fdsfd',NULL,'fsf','es',NULL,NULL,1,0),(15,'wWw','w',NULL,'w','w',NULL,NULL,1,0),(16,'w','w',NULL,'w','w',NULL,NULL,1,0),(17,'w','w',NULL,'w','w',NULL,NULL,1,0),(18,'r','w',NULL,'r','w',NULL,NULL,1,0),(19,'w','w',NULL,'w','w',NULL,NULL,1,0),(20,'bbn','nnm','jjk','2334422442','bbn@gmail.com',23,'female',1,0),(21,'w','w','w','w','w',32,'male',1,0),(22,'w','w','w','w','w',45,'',1,0),(23,'wWwWwW','w','w','w','w',9,'female',1,0),(24,'w','w','w','w','w',34,'male',1,0),(25,'jainul patel','jainul patel','jainul patel','88899977','jainul.patel',23,'female',1,0),(26,'w','w','w','w','w',65,'',1,0),(27,'w','w',NULL,'w','w',NULL,NULL,1,0),(28,'w','W',NULL,'W','W',NULL,NULL,1,0),(29,'manasa','w','w','w','w',98,'female',1,0),(30,'w','w','w','w','w',4,'female',1,0),(31,'aA','a','A','a','a',3,'male',1,0),(32,'aA','a','A','a','a',3,'male',1,0),(33,'w','w','w','w','w',4,'female',1,0),(34,'w','w','w','w','w',7,'female',1,0),(35,'w','w','w','w','w',9,'female',1,0),(36,'w','w','w','w','w',9,'female',1,0),(37,'w','w','w','w','w',7,'female',1,0),(38,'w','w','w','ww','w',5,'male',1,0),(39,'w','w','w','w','w',6,'female',1,0),(40,'w','w','w','w','w',6,'female',1,0);
/*!40000 ALTER TABLE `travelerinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
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
  `Password` varchar(500) NOT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jainul','Patel','733','San Jose','CA','95112','123123123','jainul.patel@sjsu.edu',NULL,0,NULL,NULL,NULL,NULL,'123123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-28 23:32:29
