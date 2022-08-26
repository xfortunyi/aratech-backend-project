const express = require('express');
const router = express.Router();

const protocolsController = require('./controllers/protocols');

router.post('/radar', protocolsController.radarInstructions);

module.exports = router;
