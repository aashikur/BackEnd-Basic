const express = require('express')
const app = express();
const port = 5000;

 app.get('/', (req, res ) => {
    res.send('Hey this is my Server First')
 })

 app.get('/data', (req, res) => {
    res.send('More Data coming soon...');
 })

 app.get('/about', (req, res) => {
    res.send('This is my about page');
 })

 app.listen(port, () => {
    console.log(`My Server : running on port ${port}`);
 })