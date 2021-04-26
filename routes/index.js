const { Router } = require('express');
const express = require('express');
const router = Router();
const app = express();

const homeController = require('../controller/home');

router.get('/',homeController.home);

router.post('/task-data',homeController.task);



router.get('/delete-task',homeController.delete);


module.exports = router;