const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/homepage', controller.homePage);
router.get('/getOne/:id', controller.getOneUser);
router.get('/getAll', controller.getAllUsers);

module.exports = router;
