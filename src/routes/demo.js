const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demo-controller.js');
const authenticationMiddleware = require('../middlewares/authentication').authenticationMiddleware;
router.post('/demo/print-request', authenticationMiddleware, demoController.printRequest);
module.exports = router;