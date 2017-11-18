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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotelavailability`
--

LOCK TABLES `hotelavailability` WRITE;
/*!40000 ALTER TABLE `hotelavailability` DISABLE KEYS */;
INSERT INTO `hotelavailability` VALUES (1,NULL,50,40,20,30,40,300,400,500,350,450,1),(4,NULL,55,45,25,35,45,300,400,500,350,450,2),(2,NULL,20,20,40,30,20,200,200,220,210,210,3),(3,NULL,22,33,44,34,45,300,300,300,300,300,4),(5,NULL,50,60,50,20,25,400,300,350,380,390,5),(4,'2017-11-22 00:00:00',2,0,0,0,0,300,400,500,350,450,6),(4,'2017-11-23 00:00:00',5,5,5,NULL,NULL,300,400,500,350,450,7);
/*!40000 ALTER TABLE `hotelavailability` ENABLE KEYS */;
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
