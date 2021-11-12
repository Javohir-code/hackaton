const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({path: './config/config.env'});


const app = express();


app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    console.log('Working!');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is listening!');
})