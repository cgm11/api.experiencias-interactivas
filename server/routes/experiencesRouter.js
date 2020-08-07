const { Router } = require('express');
const controller = require('../controller/experiencesController');
const middlewares = require('../middlewares/uploadImages');
const router = Router();

router.get('/', controller.getExperiences);
router.post('/', middlewares.upload, controller.setExperience);

module.exports = router;