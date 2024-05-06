const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const port = 3001;
app.listen(port, () => {
    console.log("el servidor esta en el puerto", port);
})

//middleware
app.use(express.json());
app.use('/api',userRoutes);


//mongodb conection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to mongodb atlas'))
.catch((error) => console.error(error));

//routes
app.get('/', (req, res) => {
    res.send('welcome to my api')
})