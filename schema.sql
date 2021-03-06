CREATE DATABASE bookings;

USE bookings;

CREATE TABLE houses (
  house_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  average_rating DECIMAL (4, 2),
  ratings INT,
  cleaning_fee INT,
  service_fee INT,
  occupancy INT,
  average_rate INT,
  taxes INT
);

CREATE TABLE calendar (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  booking_date DATE,
  house_id INT,
  availability TINYINT,
  price INT,
  FOREIGN KEY (house_id) REFERENCES houses (house_id)
);

CREATE TABLE booking (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  house_id INT,
  check_in DATE,
  check_out DATE,
  adults INT,
  children INT,
  infants INT,
  price INT,
  cleaning_fee INT,
  service_fee INT,
  taxes INT,
  FOREIGN KEY (house_id) REFERENCES houses (house_id)
);
