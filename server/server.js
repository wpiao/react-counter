const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use('/', express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.listen(PORT, () => console.log(`Server is up on port ${PORT}!`));

