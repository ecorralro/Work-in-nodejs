import {Router} from 'express';
//Importo los callbacks de controllers OJO!! Con su extensión(.js)
import{home, login, registro, crud, pruebacon} from '../controllers/controllers.js'

const router = Router();

// Creamos las rutas
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);
router.get('/crud', crud);

// Ruta de prueba de conexión
router.get('/pruebacon', pruebacon);

export default router;