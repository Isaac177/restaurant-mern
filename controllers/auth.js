const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret, jwtExpire} = require('../config/dev');



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
};


exports.signinController = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid password." });
        }
        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
        //res.status(200).json({ token });

        const userData = {
            id: user._id,
            email: user.email,
            role: user.role
        };
        //res.cookie('token', token, {expiresIn: jwtExpire});
        res.status(200).json({ token, user: userData });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};