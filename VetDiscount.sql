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

CREATE TABLE `address` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`state` VARCHAR(2) NOT NULL,
	`city` VARCHAR(255) NOT NULL,
	`zip_code` INT(5),
	`street` VARCHAR(255) NOT NULL,
	`lat` VARCHAR(255),
	`long` VARCHAR(255),
	PRIMARY KEY (`id`)
);

CREATE TABLE `type` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `store` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`hours` VARCHAR(255),
	`owner_id` INT(11) NOT NULL,
	`address_id` INT(11) NOT NULL,
	`type_id` INT(11) NOT NULL,
	FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`),
	FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
	FOREIGN KEY (`type_id`) REFERENCES `type` (`id`),
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
