use dbms;
CREATE TABLE Cart (
    CartID varchar(5) PRIMARY KEY,
    UserID int,
    Foreign Key (UserID) references User(UserID)
);