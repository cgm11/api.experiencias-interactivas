const express = require('express');
const controller = require('../controller/experiencesController');

const router = express.Router();

router.get('/', controller.getExperiences);
router.post('/', controller.setExperience);

module.exports = router;