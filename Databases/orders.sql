use dbms_project;

CREATE TABLE Orders
(
    OrderID varchar(5) PRIMARY KEY,
    UserID varchar(5),
    Foreign Key (UserID) references UserTable(UserID),
    OrderDate varchar(20),
    TotalAmount INT

);