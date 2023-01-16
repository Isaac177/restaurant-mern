const express = require('express');
const router = express.Router();
const {signupValidator, validatorResult, signinValidator} = require('../middleware/validator');
const {signupController, signinController} = require('../controllers/auth');
const User = require("../models/User");


router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.post('/signup', signupValidator, validatorResult, signupController);
router.post('/signin', signinValidator, validatorResult, signinController);
router.get('/users', (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;