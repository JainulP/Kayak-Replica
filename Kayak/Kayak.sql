CREATE DATABASE  IF NOT EXISTS `kayak` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kayak`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: kayak
-- ------------------------------------------------------
-- Server version	5.7.19

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
  PRIMARY KEY (`HotelId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Fairmont San Jose','San Jose, CA',8,'66778897','170 South Market Street','CA',NULL,NULL,'95113','4',NULL),(2,'Hotel De Anza','San Jose, CA',8,'33445533','233 West Santa Clara Street','CA',NULL,NULL,'95113','4',NULL),(3,'Wyndham Garden San Jose – Silicon Valley','San Jose, CA',8,'55667722','399 Silicon Valley Boulevard','CA',NULL,NULL,'95138','3',NULL),(4,'Row NYC','New York, NY',7,'4433243','700 8th Avenue','NY',NULL,NULL,'10036','4',NULL),(5,'Sofitel New York','New York, NY',9,'343546','45 West 44TH Street','NY',NULL,NULL,'10036','3',NULL);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotelbooking`
--

DROP TABLE IF EXISTS `hotelbooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotelbooking` (
  `BillingId` int(11) NOT NULL,
  `GuestId` int(11) NOT NULL,
  `GuestName` varchar(45) NOT NULL,
  `RoomId` int(11) NOT NULL,
  `CheckInDate` datetime NOT NULL,
  `CheckOutDate` datetime NOT NULL,
  PRIMARY KEY (`BillingId`),
  KEY `RoomId_idx` (`RoomId`),
  CONSTRAINT `RoomId` FOREIGN KEY (`RoomId`) REFERENCES `rooms` (`RoomId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotelbooking`
--

LOCK TABLES `hotelbooking` WRITE;
/*!40000 ALTER TABLE `hotelbooking` DISABLE KEYS */;
INSERT INTO `hotelbooking` VALUES (1,1,'Jainul',1,'2017-12-01 00:00:00','2017-12-04 00:00:00'),(2,1,'Jainul',3,'2017-12-06 00:00:00','2017-12-09 00:00:00'),(3,1,'Jainul',5,'2017-12-15 00:00:00','2017-12-25 00:00:00'),(4,1,'Jainul',7,'2018-01-15 00:00:00','2018-01-17 00:00:00'),(5,1,'Jainul',9,'2018-02-05 00:00:00','2018-02-07 00:00:00'),(6,1,'Jainul',2,'2018-12-15 00:00:00','2017-12-25 00:00:00');
/*!40000 ALTER TABLE `hotelbooking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rooms` (
  `RoomId` int(11) NOT NULL AUTO_INCREMENT,
  `HotelId` int(11) DEFAULT NULL,
  `RoomType` varchar(500) NOT NULL,
  `Price` int(10) NOT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `MaxGuests` varchar(45) DEFAULT NULL,
  `Amenities` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`RoomId`),
  KEY `HotelId_idx` (`HotelId`),
  CONSTRAINT `HotelId` FOREIGN KEY (`HotelId`) REFERENCES `hotel` (`HotelId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,1,'Delux Room',200,NULL,'3','Shower, Bath, Television'),(2,1,'Standard Room',100,NULL,'3','Shower, Bath, Television'),(3,2,'Delux Room',250,NULL,'3','Shower, Bath, Television'),(4,2,'Standard Room',200,NULL,'3','Shower, Bath, Television'),(5,3,'Delux Room',110,NULL,'3','Shower, Bath, Television'),(6,3,'Standard Room',100,NULL,'3','Shower, Bath, Television'),(7,4,'Delux Room',300,NULL,'3','Shower, Bath, Television'),(8,4,'Standard Room',280,NULL,'3','Shower, Bath, Television'),(9,5,'Delux Room',350,NULL,'3','Shower, Bath, Television'),(10,5,'Standard Room',300,NULL,'3','Shower, Bath, Television'),(11,4,'Delux Room',300,NULL,'3','Shower, Bath, Television');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
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

--
-- Dumping routines for database 'kayak'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-17 11:56:20
