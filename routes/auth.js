const express = require('express');
const router = express.Router();
const {signupValidator, validatorResult, signinValidator} = require('../middleware/validator');
const {signupController, signinController} = require('../controllers/auth');


router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.post('/signup', signupValidator, validatorResult, signupController);
router.post('/singin', signinValidator, validatorResult, signinController);


module.exports = router;