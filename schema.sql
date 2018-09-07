CREATE DATABASE bearbnb;

USE bearbnb;

CREATE TABLE calendar (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  booking_date date,
  house_id INT,
  availability TINYINT,
  price INT,
  FOREIGN KEY (house_id) REFERENCES houses (house_id)
);

CREATE TABLE houses (
  house_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  average_rating INT,
  ratings INT,
  cleaning_fee INT,
  service_fee INT,
  occupancy INT
);

CREATE TABLE booking (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  house_id INT,
  check_in DATE,
  check_out DATE,
  adults INT,
  children INT,
  infants INT,
  total_occupancy INT,
  price INT,
  cleaning_fee INT,
  service_fee INT,
  total_price INT,
  FOREIGN KEY (house_id) REFERENCES houses (id)
)