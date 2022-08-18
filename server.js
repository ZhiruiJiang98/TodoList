const express = require('express')
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = 4000;
app.list(PORT, () => console.log('Listening on PORT', PORT))