const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/customer/create', Controller.create);

module.exports = router;