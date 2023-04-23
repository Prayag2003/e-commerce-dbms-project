use dbms_project;

CREATE TABLE CartItem
(
    CartItemID varchar(5) PRIMARY KEY,
    CartID varchar(5) ,
    Foreign Key (CartID) references Cart(CartID),
    PID varchar(5),
    Foreign Key (PID) references Products (PID)

);
