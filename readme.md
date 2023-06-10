# operaciones básicas en la consola de MongoDB
## listar todos los elementos de una colección
 para mostros todos los elementos de  mi coleccion  utilizo el comando  db.products.find()

 Este fue el resultado:
 
 ![img1](https://user-images.githubusercontent.com/127431125/235268201-c92d20d9-0d4f-47a9-ac57-3dbcfa939245.jpg)
 
para solo traer  un elemento utilizo este comando:db.products.findOne({"title":"iphone x"})

Este fue el resultado:

![f7dfd055-26f5-4208-a3a9-e6e1e1a72a8f](https://user-images.githubusercontent.com/127431125/235272166-ff47c9a7-5cb2-462d-8ca0-43aed8f846aa.jpg)


## Editar uno de los elementos de la colección
para editar un elemento de mi coleccion  utilizo este comando:db.products.updataOne({title:"iphone6"},{$set{title:"iphone 6 pro max",price:640}}) 

Este fue el resultado:
![a0c6fdf7-c526-44ec-bb0c-1f7cca38d699](https://user-images.githubusercontent.com/127431125/235272868-1c1c39f4-4720-4640-8681-e4b170e45ca4.jpg)

## Eliminar uno de los elementos de la colección.

para elimininar un elemento de mi coleccion utilizo el siguiente comando:db.products.deleteOne({title:"iphone9"})

Este fue el resultado:![3341a286-d5f5-4783-9d55-6e4ecf5c2250](https://user-images.githubusercontent.com/127431125/235272919-6a774810-859f-4caf-89fd-90d02fbaf628.jpg)
[![Mi primer workflow](https://github.com/Davidnaranjo0105/clase-5/actions/workflows/main.yml/badge.svg)](https://github.com/Davidnaranjo0105/clase-5/actions/workflows/main.yml)

