const ResponseUtil = require('../utils/responses');
const ExperiencesDao = require('../db/dao/experiencesDao');
const messages = require('../constants/messages');
const services = require('../services/externalAPIs');

async function getExperiences(req, res) {
    try {
        const experiences = await ExperiencesDao.getExperiences();
        if (experiences == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.success(res, experiences);
    }
    catch (e) { return messages.ERROR }
}

async function setExperience(req, res) {
    try {
        const images = await services.getImage(req.body.titulo);
        req.body.imagenRelacionada = images;
        const experience = await ExperiencesDao.setExperience(req.body);
        if (experience == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.created(res, req.body);
    }
    catch (e) { return messages.ERROR }
}

module.exports = {
    getExperiences,
    setExperience
}