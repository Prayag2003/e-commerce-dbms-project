use dbms;
create table Employee(
    EmpID int auto_increment Primary key,
    EmpName varchar(30),
    EmpEmail varchar(50) unique,
    EmpAge int,
    EmpAddress varchar(255)
);