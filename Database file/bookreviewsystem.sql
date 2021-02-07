-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: bookreviewsystem
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(30) NOT NULL,
  `email` varchar(40) DEFAULT 'np',
  `no_of_books` int DEFAULT '0',
  `intrest_area` varchar(40) DEFAULT 'np',
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Robert Martin','martin@gmail.com',1,'programming'),(2,'Andrew Hunt','hunt@gmail.com',1,'programming'),(3,'Thomas Cormen','cormen@gmail.com',1,'programming'),(4,'Donald E. Knuth','knuth@gmail.com',1,'programming'),(5,'Gayle McDowell','gayle@gmail.com',1,'programming'),(6,'W.W. Sawyer','Sawyer@gmail.com',1,'mathematics'),(7,'Paul Lockhart','Lockhart@gmail.com',1,'mathematics'),(8,'Aigner','Aigner@gmail.com',1,'mathematics'),(9,'Steven Strogatz','Strogatz@gmail.com',1,'mathematics'),(10,'Courant','Courant@gmail.com',1,'mathematics'),(11,'Noelle Stevenson','Stevenson@gmail.com',1,'Comic'),(12,'Art Spiegelman','Spiegelman@gmail.com',1,'Comic'),(13,'Jeff Lemire','Lemire@gmail.com',1,'Comic'),(14,'Mark Danielewski','Danielewski@gmail.com',1,'Horror'),(15,'Ira Levin','Levin@gmail.com',1,'Horror'),(16,'William Golding','Golding@gmail.com',1,'Horror'),(17,'Marcel Proust','Proust@gmail.com',1,'Novel'),(18,'James Joyce','Joyce@gmail.com',1,'Novel'),(19,'William Shakespeare','Shakespeare@gmail.com',1,'Novel'),(20,'A.P.J. Abdul Kalam','apjabdulKalam@gmail.com',0,'Biography, fiction');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `averagereview`
--

DROP TABLE IF EXISTS `averagereview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `averagereview` (
  `ISBN_NO` varchar(20) NOT NULL,
  `avg_writing_style` int DEFAULT NULL,
  `avg_engagement` int DEFAULT NULL,
  `avg_grip_factor` int DEFAULT NULL,
  `avg_grammer` int DEFAULT NULL,
  `review_count` int DEFAULT NULL,
  `avg_worth_read` int DEFAULT NULL,
  `avg_interactivity` int DEFAULT NULL,
  PRIMARY KEY (`ISBN_NO`),
  CONSTRAINT `averagereview_ibfk_1` FOREIGN KEY (`ISBN_NO`) REFERENCES `book` (`ISBN_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `averagereview`
--

LOCK TABLES `averagereview` WRITE;
/*!40000 ALTER TABLE `averagereview` DISABLE KEYS */;
INSERT INTO `averagereview` VALUES ('BOOK-ISBN-1',50,58,51,57,7,57,63),('BOOK-ISBN-10',27,31,28,29,4,27,33),('BOOK-ISBN-11',14,16,14,16,2,16,18),('BOOK-ISBN-12',14,16,14,16,2,16,18),('BOOK-ISBN-13',23,25,23,24,3,25,27),('BOOK-ISBN-14',14,16,14,16,2,16,18),('BOOK-ISBN-15',14,16,14,16,2,16,18),('BOOK-ISBN-16',14,16,14,16,2,16,18),('BOOK-ISBN-17',19,21,19,21,3,25,28),('BOOK-ISBN-18',14,16,14,16,2,16,18),('BOOK-ISBN-19',24,26,24,26,3,26,27),('BOOK-ISBN-2',41,46,38,43,6,40,54),('BOOK-ISBN-24',8,10,10,9,1,10,8),('BOOK-ISBN-3',14,16,14,16,2,16,18),('BOOK-ISBN-4',23,26,23,25,3,25,27),('BOOK-ISBN-5',24,25,24,25,3,26,28),('BOOK-ISBN-6',14,16,14,16,2,16,18),('BOOK-ISBN-7',32,27,31,36,4,35,36),('BOOK-ISBN-8',14,16,14,16,2,16,18),('BOOK-ISBN-9',14,16,14,16,2,16,18);
/*!40000 ALTER TABLE `averagereview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `ISBN_NO` varchar(20) NOT NULL,
  `name` varchar(230) NOT NULL,
  `author_id` int NOT NULL,
  `pages` int DEFAULT '0',
  `price` decimal(7,2) DEFAULT '0.00',
  `publication` varchar(100) DEFAULT 'np',
  `category` varchar(100) DEFAULT 'np',
  `language` varchar(20) DEFAULT 'np',
  `release_date` date DEFAULT NULL,
  PRIMARY KEY (`ISBN_NO`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES ('BOOK-ISBN-1','Clean Code',1,700,600.00,'Cs publication','programming','English','2015-08-19'),('BOOK-ISBN-10','What is Mathematics?',10,1200,690.00,'theYashl publication','Mathematics','English','2012-08-23'),('BOOK-ISBN-11','Nimona',11,900,1600.00,'SB publication','Comic','English','2000-06-15'),('BOOK-ISBN-12','Maus: A Survivors Tale',12,800,1600.00,'SB publication','Comic','English','2000-06-15'),('BOOK-ISBN-13','Sweet Tooth',13,700,600.00,'SB publication','Comic','English','2000-06-15'),('BOOK-ISBN-14','House of Leaves',14,900,600.00,'Peaky B. publication','Horror','English','2020-07-09'),('BOOK-ISBN-15','Rosemary’s Baby',15,800,600.00,'Peaky B. publication','Horror','English','2000-07-09'),('BOOK-ISBN-16','Lord of the Flie',16,700,901.00,'Peaky B. publication','Horror','English','2020-07-06'),('BOOK-ISBN-17','In Search of Lost Time',17,900,1200.00,'Ramu publication','Novel','English','2016-08-02'),('BOOK-ISBN-18','Ulysses',18,800,1300.00,'Ramu publication','Novel','English','2016-08-02'),('BOOK-ISBN-19','Hamlet',19,700,1000.00,'Ramu publication','Novel','English','2015-08-02'),('BOOK-ISBN-2','The Pragmatic Programmer',2,800,1600.00,'Cs publication','programming','English','2016-08-23'),('BOOK-ISBN-24','wings of fire',20,499,799.00,'Cs publication','Biography, fiction','English, marathi','2011-07-25'),('BOOK-ISBN-3','Introduction to Algorithms',3,700,600.00,'Cs publication','programming','English','2015-08-23'),('BOOK-ISBN-4','The Art of Computer Programming',4,1700,300.00,'Cs publication','programming','English','2007-01-23'),('BOOK-ISBN-5','Cracking the Coding Interview',5,1200,690.00,'Cs publication','programming','English','2012-08-23'),('BOOK-ISBN-6','Prelude to mathematics',6,900,1600.00,'theYashl publication','Mathematics','English','2016-08-23'),('BOOK-ISBN-7','Measurement',7,800,1600.00,'theYashl publication','Mathematics','English','2016-08-23'),('BOOK-ISBN-8','Introduction to Algorithms',8,700,600.00,'theYashl publication','Mathematics','English','2015-08-23'),('BOOK-ISBN-9','The Joy of x',9,1700,300.00,'theYashl publication','Mathematics','English','2007-01-23');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `description`
--

DROP TABLE IF EXISTS `description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `description` (
  `ISBN_NO` varchar(20) NOT NULL,
  `descr` varchar(1000) NOT NULL DEFAULT 'NA',
  PRIMARY KEY (`ISBN_NO`),
  CONSTRAINT `description_ibfk_1` FOREIGN KEY (`ISBN_NO`) REFERENCES `book` (`ISBN_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `description`
--

LOCK TABLES `description` WRITE;
/*!40000 ALTER TABLE `description` DISABLE KEYS */;
INSERT INTO `description` VALUES ('BOOK-ISBN-1','Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn\'t have to be that way. updated'),('BOOK-ISBN-10','For more than two thousand years a familiarity with mathematics has been regarded as an indispensable part of the intellectual equipment of every cultured person. Today, unfortunately, the traditional place of mathematics in education is in grave danger. The teaching and learning of mathematics has degenerated into the realm of rote memorization, the outcome of which leads'),('BOOK-ISBN-11','The graphic novel debut from rising star Noelle Stevenson, based on her beloved and critically acclaimed web comic, which Slate awarded its Cartoonist Studio Prize, calling it a deadpan epic.'),('BOOK-ISBN-12','Acclaimed as a quiet triumph and a brutally moving work of art, the first volume of Art Spieglman\'s Maus introduced readers to Vladek Spiegleman, a Jewish survivor of Hitler\'s Europe, and his son, a cartoonist trying to come to terms with his father, his father\'s terrifying story, and History itself'),('BOOK-ISBN-13','In this stunning new novel, Ian McEwan\'s first female protagonist since Atonement is about to learn that espionage is the ultimate seduction.'),('BOOK-ISBN-14','Years ago, when House of Leaves was first being passed around, it was nothing more than a badly bundled heap of paper, parts of which would occasionally surface on the Internet. No one could have anticipated the small but devoted following this terrifying story would soon command'),('BOOK-ISBN-15','Rosemary and Guy Woodhouse, an ordinary young couple, settle into a New York City apartment, unaware that the elderly neighbors and their bizarre group of friends have taken a disturbing interest in them. But by the time Rosemary discovers the horrifying truth, it may be far too late!'),('BOOK-ISBN-16','Graham Lord has published nineteen books, among them seven biographies, two autobiographies, nine novels, two novellas, a dozen short stories, scores of essays, hundreds of book reviews, and thousands of newspaper and magazine columns and articles.'),('BOOK-ISBN-17','On the surface a traditional Bildungsroman describing the narrator’s journey of self-discovery, this huge and complex book is also a panoramic and richly comic portrait of France in the author’s lifetime, and a profound meditation on the nature of art, love, time, memory and death'),('BOOK-ISBN-18','Loosely based on the Odyssey, this landmark of modern literature follows ordinary Dubliners in 1904. Capturing a single day in the life of Dubliner Leopold Bloom, his friends Buck Mulligan and Stephen Dedalus, his wife Molly, and a scintillating cast of supporting characters, Joyce pushes Celtic lyricism and vulgarity to splendid extremes'),('BOOK-ISBN-19','Among Shakespeare plays, Hamlet is considered by many his masterpiece. Among actors, the role of Hamlet, Prince of Denmark, is considered the jewel in the crown of a triumphant theatrical career. Now Kenneth Branagh plays the leading role and co-directs a brillant ensemble performance'),('BOOK-ISBN-2','Ward Cunningham Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users'),('BOOK-ISBN-24','Ward Cunningham Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users'),('BOOK-ISBN-3','This title covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming'),('BOOK-ISBN-4','The bible of all fundamental algorithms and the work that taught many of today\'s software developers most of what they know about computer programming. -Byte, September 1995 I can\'t begin to tell you how many pleasurable hours of study and recreation they have afforded'),('BOOK-ISBN-5','Now in the 5th edition, Cracking the Coding Interview gives you the interview preparation you need to get the top software developer jobs. This is a deeply technical book and focuses on the software engineering skills to ace your interview.'),('BOOK-ISBN-6','No mathematician can be a complete mathematician unless he is also something of a poet. - K. Weierstrass\nIn this lively and stimulating account.'),('BOOK-ISBN-7','For seven years, Paul Lockhart s A Mathematician s Lament enjoyed a samizdat-style popularity in the mathematics underground, before demand prompted its 2009 publication to even wider applause and debate.'),('BOOK-ISBN-8','The bible of all fundamental algorithms and the work that taught many of today\'s software developers most of what they know about computer programming. '),('BOOK-ISBN-9','A world-class mathematician and regular contributor to the New York Times hosts a delightful tour of the greatest ideas of math, revealing how it connects to literature, philosophy, law, medicine, art, business, even pop culture in ways we never imagined');
/*!40000 ALTER TABLE `description` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `Image_id` int NOT NULL AUTO_INCREMENT,
  `ISBN_NO` varchar(20) NOT NULL,
  `Img_link` varchar(200) NOT NULL,
  PRIMARY KEY (`Image_id`),
  KEY `ISBN_NO` (`ISBN_NO`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`ISBN_NO`) REFERENCES `book` (`ISBN_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'BOOK-ISBN-1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo'),(41,'BOOK-ISBN-2','https://m.media-amazon.com/images/I/518FqJvR9aL.jpg'),(42,'BOOK-ISBN-3','https://images-na.ssl-images-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg'),(43,'BOOK-ISBN-4','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnADbT_2ShGOSsRLuogE2aqgoDZiAaIOpRSA&usqp=CAU'),(44,'BOOK-ISBN-5','https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SY291_BO1,204,203,200_QL40_ML2_.jpg'),(45,'BOOK-ISBN-6','https://images-eu.ssl-images-amazon.com/images/I/41laYBjqGTL._AC_UL474_SR474,450_.jpg'),(46,'BOOK-ISBN-7','https://images-na.ssl-images-amazon.com/images/I/51IsUJCJE3L._SX329_BO1,204,203,200_.jpg'),(47,'BOOK-ISBN-8','https://images-na.ssl-images-amazon.com/images/I/41U9ewMywQL._SX349_BO1,204,203,200_.jpg'),(48,'BOOK-ISBN-9','https://images-na.ssl-images-amazon.com/images/I/81pwx9XBEPL.jpg'),(49,'BOOK-ISBN-10','https://images-na.ssl-images-amazon.com/images/I/81a6eQCqzPL.jpg'),(50,'BOOK-ISBN-11','https://images-na.ssl-images-amazon.com/images/I/51s4-vDvyxL._SX329_BO1,204,203,200_.jpg'),(51,'BOOK-ISBN-12','https://images-na.ssl-images-amazon.com/images/I/91p17bGVEXL.jpg'),(52,'BOOK-ISBN-13','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2013%2F01%2Fsweet-tooth-cover-var.jpg&q=85'),(53,'BOOK-ISBN-14','https://images-na.ssl-images-amazon.com/images/I/41jpemUkbEL._SX369_BO1,204,203,200_.jpg'),(54,'BOOK-ISBN-15','https://images-na.ssl-images-amazon.com/images/I/71FFeQ-vy6L.jpg'),(55,'BOOK-ISBN-16','https://images-na.ssl-images-amazon.com/images/I/81jlbxMyR4L.jpg'),(56,'BOOK-ISBN-17','https://images-na.ssl-images-amazon.com/images/I/81yo44UiIUL.__BG0,0,0,0_FMpng_AC_UL600_SR387,600_.jpg'),(57,'BOOK-ISBN-18','https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg'),(58,'BOOK-ISBN-19','https://www.ustarnovels.com/media/1000x1000/cover_hamlet.jpg'),(59,'BOOK-ISBN-24','https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588286863l/634583._SY475_.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `ISBN_NO` varchar(20) NOT NULL,
  `writing_style` int NOT NULL,
  `engagement` int NOT NULL,
  `grip_factor` int NOT NULL,
  `grammer` int NOT NULL,
  `user_id` int NOT NULL,
  `worth_read` int DEFAULT NULL,
  `interactivity` int DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `ISBN_NO` (`ISBN_NO`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`ISBN_NO`) REFERENCES `book` (`ISBN_NO`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_crediential` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'BOOK-ISBN-1',7,8,7,8,1,8,9),(2,'BOOK-ISBN-1',7,8,7,8,1,8,9),(3,'BOOK-ISBN-2',7,8,7,8,2,8,9),(4,'BOOK-ISBN-2',7,8,7,8,2,8,9),(5,'BOOK-ISBN-3',7,8,7,8,2,8,9),(6,'BOOK-ISBN-3',7,8,7,8,3,8,9),(7,'BOOK-ISBN-4',7,8,7,8,3,8,9),(8,'BOOK-ISBN-4',7,8,7,8,4,8,9),(9,'BOOK-ISBN-5',7,8,7,8,4,8,9),(10,'BOOK-ISBN-5',7,8,7,8,4,8,9),(11,'BOOK-ISBN-6',7,8,7,8,4,8,9),(12,'BOOK-ISBN-6',7,8,7,8,5,8,9),(13,'BOOK-ISBN-7',7,8,7,8,5,8,9),(14,'BOOK-ISBN-7',7,8,7,8,6,8,9),(15,'BOOK-ISBN-8',7,8,7,8,6,8,9),(16,'BOOK-ISBN-8',7,8,7,8,7,8,9),(17,'BOOK-ISBN-9',7,8,7,8,7,8,9),(18,'BOOK-ISBN-9',7,8,7,8,8,8,9),(19,'BOOK-ISBN-10',7,8,7,8,8,8,9),(20,'BOOK-ISBN-10',7,8,7,8,4,8,9),(21,'BOOK-ISBN-11',7,8,7,8,3,8,9),(22,'BOOK-ISBN-11',7,8,7,8,3,8,9),(23,'BOOK-ISBN-12',7,8,7,8,1,8,9),(24,'BOOK-ISBN-12',7,8,7,8,1,8,9),(25,'BOOK-ISBN-13',7,8,7,8,5,8,9),(26,'BOOK-ISBN-13',7,8,7,8,6,8,9),(27,'BOOK-ISBN-14',7,8,7,8,7,8,9),(28,'BOOK-ISBN-14',7,8,7,8,7,8,9),(29,'BOOK-ISBN-15',7,8,7,8,2,8,9),(30,'BOOK-ISBN-15',7,8,7,8,2,8,9),(31,'BOOK-ISBN-16',7,8,7,8,8,8,9),(32,'BOOK-ISBN-16',7,8,7,8,8,8,9),(33,'BOOK-ISBN-17',7,8,7,8,1,8,9),(34,'BOOK-ISBN-17',7,8,7,8,1,8,9),(35,'BOOK-ISBN-18',7,8,7,8,3,8,9),(36,'BOOK-ISBN-19',7,8,7,8,6,8,9),(37,'BOOK-ISBN-18',7,8,7,8,3,8,9),(38,'BOOK-ISBN-19',7,8,7,8,1,8,9),(39,'BOOK-ISBN-1',7,8,7,8,10,8,9),(40,'BOOK-ISBN-1',7,8,7,8,10,8,9),(41,'BOOK-ISBN-1',7,8,7,8,9,8,9),(42,'BOOK-ISBN-1',7,8,7,8,9,8,9),(43,'BOOK-ISBN-17',5,5,5,5,5,9,10),(44,'BOOK-ISBN-10',4,10,7,5,10,6,6),(45,'BOOK-ISBN-10',9,5,7,8,5,5,9),(46,'BOOK-ISBN-7',9,2,8,10,2,9,9),(59,'BOOK-ISBN-19',10,10,10,10,10,10,9),(61,'BOOK-ISBN-4',9,10,9,9,10,9,9),(62,'BOOK-ISBN-13',9,9,9,8,12,9,9),(63,'BOOK-ISBN-1',8,10,9,9,12,9,9),(64,'BOOK-ISBN-24',8,10,10,9,12,10,8),(66,'BOOK-ISBN-5',10,9,10,9,12,10,10),(67,'BOOK-ISBN-7',9,9,9,10,12,10,9);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `delete_review` BEFORE DELETE ON `review` FOR EACH ROW begin
        update averagereview
            set avg_writing_style = avg_writing_style - OLD.writing_style,
                avg_engagement = avg_engagement - OLD.engagement,
                avg_grip_factor = avg_grip_factor - OLD.grip_factor,
                avg_grammer = avg_grammer - OLD.grammer,
                review_count = review_count - 1,
                avg_worth_read = avg_worth_read - OLD.worth_read,
                avg_interactivity = avg_interactivity - OLD.interactivity
        where averagereview.ISBN_NO = OLD.ISBN_NO;
    end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `trending`
--

DROP TABLE IF EXISTS `trending`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trending` (
  `ISBN_NO` int NOT NULL,
  `name` varchar(230) NOT NULL,
  `position` int DEFAULT '0',
  `review_score` decimal(1,1) DEFAULT NULL,
  PRIMARY KEY (`ISBN_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trending`
--

LOCK TABLES `trending` WRITE;
/*!40000 ALTER TABLE `trending` DISABLE KEYS */;
/*!40000 ALTER TABLE `trending` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_crediential`
--

DROP TABLE IF EXISTS `user_crediential`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_crediential` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `area_of_interest` varchar(30) DEFAULT 'np',
  `password` varchar(30) NOT NULL,
  `role` varchar(20) DEFAULT 'user',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_crediential`
--

LOCK TABLES `user_crediential` WRITE;
/*!40000 ALTER TABLE `user_crediential` DISABLE KEYS */;
INSERT INTO `user_crediential` VALUES (1,'Akash','akash@gmail.com','comic','akash@123','user'),(2,'Yash Lohakare','yash@gmail.com','programming','yash@123','user'),(3,'Omkar','omkar@gmail.com','Novel','omkar@123','user'),(4,'sakshi','sakshi@gmail.com','programming','sakshi@123','user'),(5,'nutan','nutan@gmail.com','mathematics','nutan@123','user'),(6,'kedar','kedar@gmail.com','comic','kedar@123','user'),(7,'yami','yami@gmail.com','horror','yami@123','user'),(8,'Ramu kaka','ram@gmail.com','programming','ram@123','user'),(9,'Bhavik','bhavik@gmail.com','mathematics','bhavik@123','user'),(10,'jadoo','jadoo@gmail.com','comic','jadoo@123','user'),(12,'chandrakant','chandrakantshinde195@gmail.com','programming','chandu','Admin'),(18,'chandrakant shinde1','chandrakantshinde19@gmail.com','mathematics, programming','ppp','user');
/*!40000 ALTER TABLE `user_crediential` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-30 18:52:37
