use dbms;
create table phoneNumber (
    UserID int,
    PhoneNumber int unique check (length(PhoneNumber) = 10),
    Foreign Key (UserID) references User(UserID)
);