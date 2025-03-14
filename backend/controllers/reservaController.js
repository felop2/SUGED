const Reserva = require('../models/Reserva');

exports.obtenerReservas = async (req, res) => {
    const reservas = await Reserva.find().populate('usuario espaciodeportivo');
    res.json(reservas);
};

exports.crearReserva = async (req, res) => {
    const nuevaReserva = new Reserva(req.body);
    await nuevaReserva.save();
    res.status(201).json(nuevaReserva);
};

exports.eliminarReserva = async (req, res) => {
    await Reserva.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Reserva eliminada' });
};

