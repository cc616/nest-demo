drop database mysql_demo;

create database IF NOT EXISTS mysql_demo CHARACTER SET utf8;

use mysql_demo;

CREATE TABLE IF NOT EXISTS user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL,
  address VARCHAR(256) NOT NULL,
  age INT DEFAULT NOT NULL,
  sex INT DEFAULT NOT NULL,
  password VARCHAR(32) DEFAULT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) DEFAULT CHARSET=utf8;

INSERT INTO user (username, address, age, sex) values ('张三', '高新区软件园e区', 24, 1);
