const express = require('express');
const router = express.Router();

const protocolsController = require('./controllers/protocols');

router.get('/radar', protocolsController.getProcotols);

module.exports = router;
