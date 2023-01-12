const express = require('express');
const app = express();
const port = 9000;
const connectDB = require('./database/db');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes);


connectDB().then((t,e)=>{
    console.log("test")
});

app.listen(port, () => console.log(`Listening on port ${port}`));


