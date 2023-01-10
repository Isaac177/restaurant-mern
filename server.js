const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const connectDB = require('./database/db');
const cors = require('cors');
const morgan = require('morgan');

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

connectDB();

app.listen(port, () => console.log(`Listening on port ${port}`));