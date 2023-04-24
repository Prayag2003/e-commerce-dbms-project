use dbms;
create table Employee(
    EmpID int auto_increment Primary key,
    EmpName varchar(30),
    EmpEmail varchar(50),
    EmpAge int,
    EmpAddress varchar(255)
);