**Schema (MySQL v5.7)**

    create table products (
     id serial primary key ,
      nombre varchar(100) not null,
      descripcion text,
      precio decimal (10,2) not null,
      inventario integer not null
      );
      
      insert into products (nombre,descripcion,precio,inventario)
      values ('products1','descripcion del producto 1',10.99,100),
      ('products2','descripcion del producto 2',10.99,50),
      ('products3','descripcion del producto 3',5.99,200);
      

---

**Query #1**

    SELECT * FROM products;

| id  | nombre    | descripcion                | precio | inventario |
| --- | --------- | -------------------------- | ------ | ---------- |
| 1   | products1 | descripcion del producto 1 | 10.99  | 100        |
| 2   | products2 | descripcion del producto 2 | 10.99  | 50         |
| 3   | products3 | descripcion del producto 3 | 5.99   | 200        |

---
**Query #2**

    select * from products  where id = 2;

| id  | nombre    | descripcion                | precio | inventario |
| --- | --------- | -------------------------- | ------ | ---------- |
| 2   | products2 | descripcion del producto 2 | 10.99  | 50         |

---
**Query #3**

    update products set precio = 15.99 where id = 1;

There are no results to be displayed.

---
**Query #4**

    delete from products where id = 3;

There are no results to be displayed.

---
**Query #5**

    select * FROM products;

| id  | nombre    | descripcion                | precio | inventario |
| --- | --------- | -------------------------- | ------ | ---------- |
| 1   | products1 | descripcion del producto 1 | 15.99  | 100        |
| 2   | products2 | descripcion del producto 2 | 10.99  | 50         |

---

[View on DB Fiddle](https://www.db-fiddle.com/)