use dbms;
CREATE TABLE ProductCategory (
    CID varchar(5) PRIMARY KEY,
    CName varchar(15)
);
insert into ProductCategory
values ("C0001", "SmartPhones"),
    ("C0002", "FootWear"),
    ("C0003", "Books"),
    ("C0004", "FashionWear");