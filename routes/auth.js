const express = require('express');
const router = express.Router();
const {signupValidator, validatorResult} = require('../middleware/validator');
const {signupController} = require('../controllers/auth');


router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.post('/signup', signupValidator, validatorResult, signupController);
module.exports = router;