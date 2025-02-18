//configurar variables de entorno del puerto del servidor de forma correcta

export const PORT = process.env.PORT || 3000

// configurar variables de entorno de BBDD => Forma correcta!!

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'userlogin';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_PORT = process.env.DB_PORT || 3306;