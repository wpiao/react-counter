const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.listen(3000, () => console.log('Server is up on port 3000!'));

