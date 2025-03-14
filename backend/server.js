const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarDB = require('./config/db');

dotenv.config();
conectarDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4000' }));

// Importa rutas API
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/espacios', require('./routes/espacioDeportivoRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor backend en puerto ${process.env.PORT}`);
});
