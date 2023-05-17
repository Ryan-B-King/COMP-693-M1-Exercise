const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get('/public/index.html');

app.get('/public', function (req, res)
{
    res.render('index.html');
});

app.listen(5000);