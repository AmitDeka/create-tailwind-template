const express = require('express');
const app = express();

const path = require('path');
const router = express.Router();

// Static Files
app.use(express.static(__dirname + '/src/css'));
app.use('/static', express.static(__dirname + '/static'));

// Routes
app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.use('/', router);

const port = 5000 || 5100 || 5200 || 5400 || 5500;
app.listen(port, () => console.log(`App is running on ${port}`));
