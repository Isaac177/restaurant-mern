const express = require('express');
const router = express.Router();
const {signupValidator, validatorResult} = require('../middleware/validator');


router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.post('/signup', signupValidator, validatorResult, (req, res) => {
    res.json({
        data: 'You hit signup API endpoint'
    });
});

module.exports = router;