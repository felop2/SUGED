const mongoose = require('mongoose');
const Reserva = require('../models/Reserva');
const Usuario = require('../models/Usuario');
const EspacioDeportivo = require('../models/EspacioDeportivo');

// Crear una nueva reserva
exports.crearReserva = async (req, res) => {
    try {
        // 1. Verificar si el usuario existe por correo institucional
        const usuario = await Usuario.findOne({ correoinstitucional: req.body.usuario });
        if (!usuario) {
            return res.status(400).json({ mensaje: "Usuario no encontrado" });
        }

        // 2. Verificar si el espacio deportivo existe por idespaciodeportivo
        const espacioDeportivo = await EspacioDeportivo.findOne({ idespaciodeportivo: req.body.espaciodeportivo });
        if (!espacioDeportivo) {
            return res.status(400).json({ mensaje: "Espacio deportivo no encontrado" });
        }

        // 3. Si ambos existen, creamos la reserva
        const nuevaReserva = new Reserva({
            idreserva: req.body.idreserva,
            fecha: req.body.fecha,
            horainicio: req.body.horainicio,
            horafinal: req.body.horafinal,
            usuario: usuario._id,  // Usamos el ObjectId del usuario
            espaciodeportivo: espacioDeportivo._id  // Usamos el ObjectId del espacio deportivo
        });

        // 4. Guardar la nueva reserva en la base de datos
        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);
    } catch (error) {
        console.error('Error al crear reserva:', error.message);
        res.status(500).json({ mensaje: 'Error al crear reserva', error: error.message });
    }
};
