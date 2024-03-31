require('dotenv').config()
const express = require('express');
const cors = require('cors');
const {connectDB} = require("./db/db");
const {readdirSync} = require('fs');

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors());

// parsing incoming request bodies as JSON
app.use(express.json());

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require(`./routes/${route}`)))

const server = () => {
    connectDB();
    app.listen(PORT, _ => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server()