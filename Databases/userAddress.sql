use dbms;
create table userAddress (
    UserID int,
    locality varchar(255),
    city varchar(30),
    state varchar(30),
    country varchar(30),
    pincode int check(length(pincode) <= 10),
    Foreign key (UserID) references User(UserID)
);