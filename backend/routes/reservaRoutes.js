const router = require('express').Router();
const reservaController = require('../controllers/reservaController');

// Ruta para crear una nueva reserva
router.post('/', reservaController.crearReserva);

module.exports = router;
