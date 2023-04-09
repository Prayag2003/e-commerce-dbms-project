create database dbms;
use dbms;

create table customer ( 
    custID VARCHAR(10)  PRIMARY KEY,
    name VARCHAR(40) NOT NULL  ,
    email VARCHAR(40) NOT NULL UNIQUE ,-- email format constraint using regex
      phoneNo VARCHAR(10) NOT NULL UNIQUE CHECK (LENGTH(phoneNo) = 10 ),
  -- phone number has to be of length 10
    shippingAddress VARCHAR(255) NOT NULL,
);

insert into customer values
( "21BCP197" , "Prayag Bhatt" , "pb@gmail.com",1234567899,"Rehne main toh kya hai, khi bhi reh sakte hain" ) , 
( "21BCP188" , "Harit Doberiya","hd69@gmail.com" , 1234567891 , "Tuta hua saaz hoon main" ) ,
( "21BCP185" , "Karan Dattani" , "kd9696@gmail.com" , 1234567892 , "ABCD" ),
( "21BCP189" , "Istuti Maurya" , "im96@gmail.com" , 1234567893 , "ABCDEF" );