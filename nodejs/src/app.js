console.log("Hola NodeJS!!");

//  1 crear package.json : npm init -yes

//  2 instalar módulos : npm i "nombre módulo" módulos en producción    "express" siempre
                    //   npm i "nombre módulo" -D módulos en desarrollo  "nodemon"
                    // npm install => lee todo el package.json e instala los módulos

// 3 añadir al package.json script "start" nodemon ruta

// 4 arrancar npm run/ start

// npm remove + nombre módulo => borrar el módulo
// npx nombre módulo => ejecuta pero no instala módulos en local

//"start": "nodemon src/app.js" instalaba la antigua biblioteca nodemon, ahora se usa para lo mismo el flag node --watch

//--------------------------------------------------------------------------------------------------

// importar los módulos que vamos a necesitar
    // const express = require('express') => esto es la manera antigua de como se hace con JS
    // esta es la manera nueva. Typescript. Pero OJO!! que sólo se puede usar una u otra.
import express from 'express';// si lo hacemos de esta manera debemos meter en el package.json "type":"module"
import ejs from 'ejs'; // este motor de plantilla no es necesario importarlo ya q express lo trae
import {dirname, join} from 'path'; // nos da la ruta absoluta en la que me encuentro
import { fileURLToPath } from 'url';
import indexRoutes from './routes/routes.js'; // Importamos nuestro enrutador. Solemos llamarlo indexRouter
import {PORT} from './config.js' // importo las variables de entorno que he creado


const __dirname = dirname(fileURLToPath(import.meta.url)); // nos da la ruta relativa. Poner siempre!!

// ejecuto el módulo 'express', se suele almacenar el la constante app
const app = express();

// inicio un servidor
app.listen(PORT);
console.log("El servidoor está escuchando por el puerto", PORT);

// configurador de plantillas
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
console.log(__dirname);

// Usamos enrutador
app.use(indexRoutes);

