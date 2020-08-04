const { model } = require('mongoose');
const ExperienceSchema = require('../schemas/experiences');

module.exports = model('Experience', ExperienceSchema);


