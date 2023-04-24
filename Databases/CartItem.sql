use dbms;
CREATE TABLE CartItem (
    CartItemID varchar(5) PRIMARY KEY,
    CartID varchar(5),
    PID varchar(5),
    Foreign Key (CartID) references Cart(CartID),
    Foreign Key (PID) references Products(PID)
);