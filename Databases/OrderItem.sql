use dbms;

CREATE TABLE OrderItem
(
    OrderItemID varchar(5) PRIMARY KEY,
    OrderID varchar(5),
    PID varchar(5),
    Foreign Key (OrderID) references Orders(OrderID),
    Foreign Key (PID) references  Products(PID) ,
    Quantity INT
);
