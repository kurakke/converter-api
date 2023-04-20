import express from "express";

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/getById', userController.getById);
router.post('/create', userController.create);

module.exports = router;