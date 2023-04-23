use dbms;
CREATE TABLE Orders
(
    OrderID varchar(5) PRIMARY KEY,
    UserID varchar(5),
    Foreign Key (UserID) references User(UserID),
    OrderDate varchar(20),
    TotalAmount INT
);