const express = require('express');
const { addBank, getBank, editBank, removeBank} = require('../Controllers/Account')

const router = express.Router();

router.post('/', addBank);
router.post('/get', getBank);
router.put('/', editBank);
router.delete('/:id', removeBank);


module.exports = router;
