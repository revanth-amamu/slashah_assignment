const express = require('express');
const database = require('./config/db');
const cors = require('cors');
const universitiesRouter = require('./routes/universities.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/universities', universitiesRouter);


const port = 8080;

app.get('/', (req, res) => {
    res.status(200).json("Testing router...");
})

app.listen(port, () => {
    database.connect((err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Connected to database");
        }
    })
    console.log(`Server is running at port ${port}`);
})