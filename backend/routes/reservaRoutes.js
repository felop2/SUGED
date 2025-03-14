const router = require('express').Router();
const reservaController = require('../controllers/reservaController');

router.get('/', reservaController.obtenerReservas);
router.post('/', reservaController.crearReserva);
router.delete('/:id', reservaController.eliminarReserva);

module.exports = router;
