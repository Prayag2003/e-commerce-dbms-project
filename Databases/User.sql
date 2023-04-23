use dbms;

create table User
(
    UserID varchar(5) PRIMARY KEY,
    Name varchar(20),
    Email varchar(20),
    PhoneNumber varchar(30),
    Password varchar(20),
    Address varchar(20)
);
