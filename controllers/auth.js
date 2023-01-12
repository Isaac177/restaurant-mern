const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signupController = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({errorMessage: 'Email is already taken'});
        } else {
            const newUser = new User();
            newUser.username = username;
            newUser.email = email;

            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);

            await newUser.save();

            return res.status(201).json({successMessage: 'Registration successful. Please sign in.'});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: 'Server error'});
    }
}