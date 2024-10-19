const express = require('express');
const { Login, Register} = require('../Controllers/User')

const router = express.Router();

router.post('/', Register);
router.post('/get', Login);



module.exports = router;
