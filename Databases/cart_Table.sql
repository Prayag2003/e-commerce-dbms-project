use dbms_project;
create table cart_Table (
    cartId varchar(5) Primary Key,
    custId varchar(5),
    PId varchar(5),
    addedQuantity int,
    Purchased boolean default false NOT NULL,
    FOREIGN KEY (custId) REFERENCES customers(custId),
    FOREIGN KEY (PId) REFERENCES products(PId)
);