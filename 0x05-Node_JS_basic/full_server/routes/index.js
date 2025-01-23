const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', (request) => {
  AppController.getHomepage(request, router);
});

router.get('/students', (request, response) => {
  StudentsController.getAllStudents(request, response);
});

router.get('/students/:major', (request, response) => {
  StudentsController.getAllStidemtsByMajor(request, response);
});

module.exports = router;
