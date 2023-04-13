use dbms_project;

create table product_category(
    CId varchar(5) Primary Key,
    CName varchar(15)
);

insert into product_category values 
    ("C0001", "SmartPhones"),
    ("C0002", "FootWear"),
    ("C0003", "Books"),
    ("C0004", "FashionWear");