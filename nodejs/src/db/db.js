import {createPool} from 'mysql2/promise';// + recomendable que createConection
import {DB_HOST,DB_DATABASE,DB_PORT,DB_PASSWORD,DB_USER} from '../config.js' // importo las variables de entorno que he creado

export const pool = createPool({ // la regla del 5 de BD
    DB_HOST: DB_HOST,
    DB_DATABASE: DB_DATABASE,
    DB_USER: DB_USER,
    DB_PASSWORD: DB_PASSWORD,
    DB_PORT: DB_PORT
});