const {
    NAME_BD,
    HOST_BD,
    DIALECT_DB,
    TIME_ZONE,
    PORT_BD
} = require('../config/config');

const bd = `${DIALECT_DB}://${HOST_BD}:${PORT_BD}/${NAME_BD}`;

module.exports = bd;