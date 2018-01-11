DROP DATABASE IF EXISTS `vetdiscountdb`;
CREATE DATABASE `vetdiscountdb`;
USE `vetdiscountdb`;

CREATE TABLE `user` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(255) NOT NULL UNIQUE,
	`password` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `store_type` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `store` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`hours` VARCHAR(255),
	`owner_id` INT(11) NOT NULL,
	`type_id` INT(11),
	`phone_number` VARCHAR(255),
	`store_url` VARCHAR(255),
	FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`),
	FOREIGN KEY (`type_id`) REFERENCES `store_type` (`id`),
	PRIMARY KEY (`id`)
);

CREATE TABLE `address` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`state` VARCHAR(2) NOT NULL,
	`city` VARCHAR(255) NOT NULL,
	`zip_code` INT(5),
	`street` VARCHAR(255) NOT NULL,
	`lat` VARCHAR(255),
	`long` VARCHAR(255),
	`store_id` INT(11) NOT NULL,
	FOREIGN KEY (`store_id`) REFERENCES `store` (`id`),
	PRIMARY KEY (`id`)
);

CREATE TABLE `discount` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`amount` VARCHAR(255) NOT NULL,
	`start_date` VARCHAR(255),
	`end_date` VARCHAR(255),
	`info` TEXT,
	`store_id` INT(11) NOT NULL,
	FOREIGN KEY (`store_id`) REFERENCES `store` (`id`),
	PRIMARY KEY (`id`)
);

CREATE TABLE `favorite_list` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`store_id` INT(11) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
	FOREIGN KEY (`store_id`) REFERENCES `store` (`id`),
	PRIMARY KEY (`id`)
);

GRANT ALL PRIVILEGES ON vetdiscountdb.* TO 'veteran'@'localhost' IDENTIFIED BY 'veteran';

INSERT INTO store_type (name) VALUES ('Education');
INSERT INTO store_type (name) VALUES ('Bookstore');
INSERT INTO store_type (name) VALUES ('Liquor');
INSERT INTO store_type (name) VALUES ('Coffee');
INSERT INTO store_type (name) VALUES ('Gym');
INSERT INTO store_type (name) VALUES ('Restaurant');
INSERT INTO store_type (name) VALUES ('Auto');
INSERT INTO store_type (name) VALUES ('Clothes');
INSERT INTO store_type (name) VALUES ('Hardware');
INSERT INTO store_type (name) VALUES ('Grocery');
INSERT INTO store_type (name) VALUES ('Drugstore');


INSERT INTO user (username, password, email) VALUES ('HunterK', 'password123', 'hunter@SD.com');
INSERT INTO store (name, owner_id, type_id) VALUES ('Skill Distillery', '1', '1');
INSERT INTO address (state, city, zip_code, street, store_id) VALUES ('CO', 'Denver', '80111', '7400 East Orchard Road', '1');
INSERT INTO discount (amount, info, store_id) VALUES ('20% off', 'Vets get 20% off on all white board erasers!', '1');

INSERT INTO user (username, password, email) VALUES ('Aaron', '123', 'a@a.com');
INSERT INTO store (name, owner_id, type_id) VALUES ('Barnes and Noble', '2', '2');
INSERT INTO address (state, city, zip_code, street, store_id) VALUES ('FL', 'Orlando', '33467', '123 Main Street', '2');
INSERT INTO discount (amount, info, store_id, start_date, end_date) VALUES ('Buy 1 get 1', 'You only get one. Pay full price.', '2', '01/10/2018', '01/22/2018');

INSERT INTO user (username, password, email) VALUES ('baby', 'baby', 'babylikes2drink@bbb.com');
INSERT INTO store (name, owner_id, type_id) VALUES ('Baby\'s Booze Boutique', '3', '3');
INSERT INTO address (state, city, zip_code, street, store_id) VALUES ('CO', 'Denver', '80111', '1111 Tipsy Blvd.', '3');
INSERT INTO discount (amount, info, store_id, start_date, end_date) VALUES ('15% off everything', 'Baby wants the bottle!', '3', '01/10/2018', '01/30/2018');
