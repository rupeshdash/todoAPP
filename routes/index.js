const { Router } = require('express');
const express = require('express');
const router = Router();

const homeController = require('../controller/home');

router.get('/',homeController.home);

module.exports = router;