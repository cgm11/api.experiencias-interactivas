const { Schema } = require('mongoose');

const experienceSchema = new Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    salaInteractiva: {
        type: String
    },
    imagenRelacionada: {
        type: String
    },
    imagen: {
        type: String
    }
});

module.exports = experienceSchema;