const { Schema, model } = require('mongoose');

const ReservaSchema = new Schema({
    idreserva: String,
    fecha: Date,
    horainicio: String,
    horafinal: String,
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    espaciodeportivo: { type: Schema.Types.ObjectId, ref: 'EspacioDeportivo' }
});

module.exports = model('Reserva', ReservaSchema);


