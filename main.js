const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const { sendToAlice } = require('./controllers/sendToAlice');
const path = require('path');
const { PORT } = require('./src/constants/server');

app
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.use(express.static(__dirname))
.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})
.post('/', async (req, res) => {
    sendToAlice(req, res)
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`))