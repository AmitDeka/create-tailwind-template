require('dotenv').config();
const express = require('express');

const app = express();

// Static Files
app.use(express.static(__dirname + '/src/css'));
app.use('/static', express.static(__dirname + '/static'));

// Set view engine as EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Routes
app.get('', (req, res) => {
    res.status(200);
    res.render('index', { title: 'Home Page' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is running on ${port}`));
