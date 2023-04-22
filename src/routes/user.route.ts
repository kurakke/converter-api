import express from "express";

const router = express.Router();
const userController = require('../controller/user.controller');

router.post('/getById', userController.getById);
router.post('/create', userController.create);

module.exports = router;