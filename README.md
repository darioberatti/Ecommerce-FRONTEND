# RETRO FUTBOL CLUB (FRONT-END)

## Antes de empezar..

##### Te sugerimos ir a seguir los pasos del archivo "README.md" del repositorio que pertenece al back-end de este proyecto: <a href="https://github.com/martinferrando2005/Ecommerce-BACKEND.git">Ecommerce-BACKEND</a>

## Descripcion
<p> Retro Futbol Club es un E-commerce el cual surge como un proyecto propuesto por <a href="https://www.plataforma5.la/" target="blank">Plataforma 5 - Coding Bootcamp.</a> 
Nos dedicamos a la venta de indumentaria deportiva antigua (precisamente Futbol) de los jugadores mas exitosos en el campo.
</p>

## Inicializacion

- Primero clonamos este repositorio.
- Abrimos una nueva terminal, nos paramos sobre la carpeta del repositorio y ejecutamos el comando  "code ." para abrirlo en **Visual Studio Code** o tu editor de texto de preferencia. 
- Una vez hecho esto, volvemos a la terminal (siempre parados sobre la carpeta del repositorio) y ejecutamos los siguientes comandos:  
	- "npm i" - Para instalar las dependencias.
	- "npm start" - Para levantar el front-end de nuestra aplicacion.

## Metodologia de Trabajo
- Antes de arrancar a trabajar, tener en cuenta las siguientes pautas cada vez que se vaya a crear una nueva funcion en el proyecto:
	- En la terminal, parados sobre la carpeta del repositorio, movernos a la rama de produccion "develop" ejecutando `git checkout develop`.
	- Desde ahi, ejecutar `git pull` para obtener los cambios mas recientes.
	- Luego, ejecutar `git checkout -b "feature/(nombreDeLaFuncion)"` para crear una nueva rama de trabajo o `git checkout -b "bugfix/(nombreDeLaFuncion)` para crear una rama en la que arreglaras algun bug.
- Para guardar los cambios: 
	- `git add .` 
	- `git commit -m "(especificarCambios)"`
	- `git push`
	- Realizar el merge de la rama teniendo como base la develop.

## Autores

```javascript 
const autores = [ "Mateo Navarro", " Santiago Moran", " Dario Beratti", " Martin Ferrando"]
autores.join(",") // "Mateo Navarro, Santiago Moran, Dario Beratti, Martin Ferrando"
```
