const express = require('express');
const router = express.Router();
const blockchain = require('../controller/blockchain');

router.post('/', blockchain);

module.exports = router;