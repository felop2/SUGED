const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Atlas conectado.');
    } catch (error) {
        console.error(error);
    }
};

module.exports = conectarDB;
