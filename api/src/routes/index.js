const { Router } = require('express');
const router = Router();

// Importar todos los routers;
const reoutes = require('./routes.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use(Router.json());

router.use(reoutes); // esto significa que para todas las rutas, me voy a fijar en el archivo dentro "./routes.js"

module.exports = router;
