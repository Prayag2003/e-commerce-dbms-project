use dbms_lab;
create table customer (
  custID INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL UNIQUE,
  phoneNo VARCHAR(10) NOT NULL UNIQUE CHECK(LENGTH(phoneNo) = 10),
  shippingAddress VARCHAR(255) NOT NULL
);
insert into customer (name, email, phoneNo, shippingAddress)
values (
    "Prayag Bhatt",
    "pb@gmail.com",
    1234567899,
    "Vadodara"
  ),
  (
    "Harit Doberiya",
    "hd69@gmail.com",
    1234567891,
    "Rajkot"
  ),
  (
    "Karan Dattani",
    "kd9696@gmail.com",
    1234567892,
    "Surat"
  ),
  (
    "Istuti Maurya",
    "im96@gmail.com",
    1234567893,
    "Surat"
  );