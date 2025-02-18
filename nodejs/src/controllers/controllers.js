import {pool} from '../db/db.js'
// creamos las variables constantes con el callback de la ruta
// se coloca export en cada variable para poder exportarlas y usarlas
export const home = (req, res) => res.render('home', {titulo: "Home"});
export const login = (req, res) => res.render('login', {titulo: "Login"});
export const registro = (req, res) => res.render('registro', {titulo: "Registro"});
export const crud = (req, res) => res.render('crud', {titulo: "Crud"});
// creo callback de prueba de conexión
export const pruebacon = async (req, res) => {
    const [result] = await pool.query('SELECT 2+2 AS RESULTADO');
    res.json(result[0]);
    // req.body
};

