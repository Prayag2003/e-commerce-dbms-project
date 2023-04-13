use dbms_project;

create table orders
( 
	cartId varchar(5) ,
	custId varchar(5) , 
	billTotal int NOT NULL , 
	billDate varchar(20) NOT NULL ,
	FOREIGN KEY (cartId) REFERENCES cart_Table(cartId) ,
	FOREIGN KEY (custId) REFERENCES customers(custId)
);