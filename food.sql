CREATE TABLE `food` (
  `idfood` int(11) NOT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `item_cost` double DEFAULT NULL,
  `item_picture` varchar(45) DEFAULT NULL,
  `item_description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idfood`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
