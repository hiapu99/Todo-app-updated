const express = require('express');
const { createTodo, getData, UpdatedData, deleteTodo } = require('../controller/TodoController');
const router = express.Router();
router.post('/post', createTodo);
router.get('/get', getData);
router.put('/put/:id', UpdatedData);
router.delete('/delete/:id', deleteTodo);
module.exports = router