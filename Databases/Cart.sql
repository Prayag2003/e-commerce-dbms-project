use dbms;
CREATE TABLE Cart (
    CartID varchar(5) PRIMARY KEY,
    UserID varchar(5),
    Foreign Key (UserID) references User(UserID)
);