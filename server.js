const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./database/db');

connectDB();

app.listen(port, () => console.log(`Listening on port ${port}`));