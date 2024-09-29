const express = require('express');
const router = express.Router();
const payment = require('../controller/payment');

router.post('/', payment);

module.exports = router;