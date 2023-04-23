use dbms_project;

create table Products
( CID varchar(5) , PID varchar(5) Primary Key , Pname varchar(40) NOT NULL,
 Price int NOT NULL , Qty int NOT NULL,
 FOREIGN KEY (CID) REFERENCES ProductCategory(CID) );
 
 insert into Products values
 ( "C0001" , "P0001" , "Samsung F-23" , 30000 , 15 ),
 ( "C0001" , "P0002" , "Redmi Note 12" , 20000 ,  10 ),
 ( "C0001" , "P0003" , "OnePlus 11R " , 50000 , 9 ),
 ( "C0001" , "P0004" , "RealMe C55" , 25000 , 8 ),
 ( "C0001" , "P0005" , "Vivo T2 Pro" , 15000 , 20 ),
 ( "C0001" , "P0006" , "Samsung M-32" , 60000 , 5 ),
 
 ( "C0002" , "P0007" , "Nike Air Max" , 20000 , 13),
 ( "C0002" , "P0008" , "Reebok Pro" , 25000 , 12 ),
 ( "C0002" , "P0009" , "Puma Flying Pro" ,40000  ,25 ),
 ( "C0002" , "P0010" , "Adidas Gazelle " , 35000  , 20 ),
 ( "C0002" , "P0011" , "Air Jordan" , 50000  , 3),
 ( "C0002" , "P0012" , "Converse Chhuck 70" , 15000 , 12 ),
 
 ( "C0003" , "P0013" , "How to Win Friends and Influence People " , 500 , 200 ),
 ( "C0003" , "P0014" , "Think and Grow Rich" , 550 , 250 ),
 ( "C0003" , "P0015" , "Atomic Habits" , 1000 , 200 ),
 ( "C0003" , "P0016" , "Deep Work" , 400 , 100 ),
 ( "C0003" , "P0017" , "The Alchemist" , 600  , 200 ),
 ( "C0003" , "P0018" , "How to Stop Worrying and Start Living" , 450 , 120 ),
 
 ( "C0004" , "P0019" , "SweatShirts" , 450  , 30 ),
 ( "C0004" , "P0020" , "T-Shirts" , 1000 , 60 ),
 ( "C0004" , "P0021" , "Trousers" , 700 , 35 ),
 ( "C0004" , "P0022" , "Sweaters" , 600 , 40 ),
 ( "C0004" , "P0023" , "Pajamas" , 550 , 25 ),
 ( "C0004" , "P0024" , "Socks" , 80 , 200 );