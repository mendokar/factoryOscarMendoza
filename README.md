# factoryOscarMendoza
Repositorio para el alojamiento de la prueba de desarrollo GO y Angular 


1 Descargar e instalar Docker
2 Descargar la imagen de postgres Docker
	docker pull postgres:latest
3 Ejecutar la imagen de docker con los datos de acceso
	docker run --name some-postgres -e POSTGRES_PASSWORD=postgres -d postgres
4 Abrir la configuracion para crear la base de datos y las tablas 
	docker exec -it some-postgres psql -U postgres

5 Clonar el repositorio https://github.com/mendokar/factoryOscarMendoza

6 En la carpeta front instalar las dependencias con npm i

7 En la carpeta back/go-factory-api

8 Ejecutar los scripts del archivo scripts_ddl.sql

9 Ejecutar los scripts del archivo scripts_dml.sql

10 Descargar e instalar el proyecto swagger

11 Ejecutar el proyecto front con ng serve -o port=4400

12 Ejecutar el proyecto back/go-factory-api con el comando go .src/main.go