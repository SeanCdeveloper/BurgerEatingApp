DROP DATABASE IF EXISTS burger_db;

CREATE database burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INTEGER NOT NULL auto_increment PRIMARY KEY,
  burger_name VARCHAR(30),
  devour BOOLEAN DEFAULT false
);

