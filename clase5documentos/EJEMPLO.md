# from zero to superhero

---------
Guía de PostgreSQL para la creación y manipulación de una base de datos de productos

En esta guía te mostraremos cómo crear una base de datos de productos en PostgreSQL y cómo realizar algunas operaciones básicas, como insertar, consultar, actualizar y eliminar datos. También te proporcionaremos algunos ejemplos adicionales de selección de datos utilizando la cláusula `WHERE`.

Para seguir esta guía, necesitarás tener PostgreSQL instalado en tu sistema. Si no lo tienes instalado, puedes descargarlo desde el sitio web oficial: https://www.postgresql.org/download/

Sin más preámbulos, ¡comencemos!

## Clase 5 - PostgreSQL

## Crear Base de datos

Crea una base de datos de productos en PostgreSQL y una tabla llamada `productos` con los siguientes campos:

```pg
CREATE DATABASE productos;
```

Para crear la tabla se ejecuta:

```pg
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  inventario INTEGER NOT NULL
);
```

## Ejemplos de operaciones

A continuación, te proporcionamos algunos ejemplos de operaciones básicas que puedes realizar en la base de datos de `productos`:

### Insertar datos

Inserta algunos registros en la tabla `productos`:

```pg
INSERT INTO productos (nombre, descripcion, precio, inventario)
VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100),
       ('Producto 2', 'Descripción del producto 2', 19.99, 50),
       ('Producto 3', 'Descripción del producto 3', 5.99, 200);
```

### Consultar datos

Consulta los registros de la tabla `productos`:

```pg
SELECT * FROM productos;
```

#### Seleccionar registros que cumplan una condición

Selecciona los productos que tengan un precio menor o igual a 10:

```pg
SELECT * FROM productos
WHERE precio <= 10;
```

#### Seleccionar registros que contengan una cadena de texto

Selecciona los productos que contengan la palabra "rojo" en su descripción:

```pg
SELECT * FROM productos
WHERE descripcion LIKE '%rojo%';
```

#### Seleccionar registros que cumplan múltiples condiciones

Selecciona los productos que tengan un precio entre 5 y 15 y un inventario mayor a 50:

```pg
SELECT * FROM productos
WHERE precio BETWEEN 5 AND 15
  AND inventario > 50;
```

#### Seleccionar registros que no cumplan una condición

Selecciona los productos que no tengan la palabra "azul" en su descripción:

```pg
SELECT * FROM productos
WHERE descripcion NOT LIKE '%azul%';
```

### Actualizar datos

```pg
UPDATE productos
SET precio = 15.99
WHERE id = 1;
```

### Eliminar datos

Elimina un registro de la tabla `productos`:


```pg
DELETE FROM productos
WHERE id = 2;
```
**Schema (PostgreSQL v15)**

    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      inventory INTEGER NOT NULL
    );
    iNSERT INTO products (name, description, price, inventory)
    VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100),
           ('Producto 2', 'Descripción del producto 2', 19.99, 50),
           ('Producto 3', 'Descripción del producto 3', 5.99, 200),
           ('Producto 4', 'Descripción del producto 4', 17.99, 400),
           ('Producto 5', 'Descripción del producto 5', 29.99, 550),
           ('Producto 6', 'Descripción del producto 6', 8.99, 600),
           ('Producto 7', 'Descripción del producto 7', 18.99, 700),
           ('Producto 8', 'Descripción del producto 8', 11.99, 80);

---

**Query #1**

    select * from products order by price,inventory asc;

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200       |
| 6   | Producto 6 | Descripción del producto 6 | 8.99  | 600       |
| 1   | Producto 1 | Descripción del producto 1 | 10.99 | 100       |
| 8   | Producto 8 | Descripción del producto 8 | 11.99 | 80        |
| 4   | Producto 4 | Descripción del producto 4 | 17.99 | 400       |
| 7   | Producto 7 | Descripción del producto 7 | 18.99 | 700       |
| 2   | Producto 2 | Descripción del producto 2 | 19.99 | 50        |
| 5   | Producto 5 | Descripción del producto 5 | 29.99 | 550       |

---
**Query #2**

    select *from products
    where  inventory > 0 
    order by products  asc
    offset 2
    limit 3
    ;

| id  | name       | description                | price | inventory |
| --- | ---------- | -------------------------- | ----- | --------- |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200       |
| 4   | Producto 4 | Descripción del producto 4 | 17.99 | 400       |
| 5   | Producto 5 | Descripción del producto 5 | 29.99 | 550       |

---

[View on DB Fiddle](https://www.db-fiddle.com/)
