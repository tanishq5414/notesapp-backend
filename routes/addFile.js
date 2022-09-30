const express = require('express');
const router = express.Router();
const cors = require('cors');
const file_scheme = require('../models/file.model');
const fileController = require('../controllers/fileController/file.controller');
router.route('/addFile').post(cors(),fileController.apiCreateFile);
router.route('/updateFile').post(cors(),fileController.apiUpdateFile);

module.exports = router;