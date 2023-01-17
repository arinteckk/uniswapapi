const express = require('express');
const ctrl = require('../Controller/controller');

const router = express.Router();


router.post('/saveData', ctrl.saveData);

module.exports = router;