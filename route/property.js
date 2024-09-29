const express = require('express');
const router = express.Router();
const { property, verify } = require('../controller/property');

router.get('/:id', property);

router.get('verify/:id', verify);

module.exports = router;