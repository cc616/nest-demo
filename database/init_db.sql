create database `mysql_demo` CHARACTER SET utf8;

CREATE TABLE `mysql_demo`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(32) NOT NULL,
  `address` VARCHAR(256) NOT NULL,
  `age` INT NOT NULL,
  `sex` INT NOT NULL,
  `password` VARCHAR(32) DEFAULT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;

INSERT INTO `mysql_demo`.`user` (`username`, `address`, `age`, `sex`, `password`) values ('admin', 'address', 24, 1, 'admin');
