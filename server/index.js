const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./Router/auth')
const DataBase = require('./config/DataConnection')
const dotenv = require('dotenv');
dotenv.config();
DataBase();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`This server is run ${PORT}`)
})