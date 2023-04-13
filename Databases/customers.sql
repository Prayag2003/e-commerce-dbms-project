use dbms_project;

create table customers
( 
  custId varchar(5) Primary Key,
  custName varchar(30)  NOT NULL, 
  custMail varchar(100) NOT NULL, 
  custPass varchar(40) NOT NULL   
);
 