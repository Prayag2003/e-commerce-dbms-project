use dbms;
create table User (
    UserID int primary key,
    Name varchar(30),
    Email varchar(60) unique,
    Password varchar(20) unique,
    PhoneNumber int unique check (length(PhoneNumber) = 10),
    Address varchar(255)
);