-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(25) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);