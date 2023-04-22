import express, { Express, Router } from "express";

const router = express.Router();
const textController = require('../controller/text.controller')

router.post('/create', textController.create)

module.exports = router;
