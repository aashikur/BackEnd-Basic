const express = require('express');
const app = express();
const port = 3000;
 const phones = require('./phones.json')

app.get('/', (req, res) => {
    res.send("port is ff... ")
})


app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('this is my ', id)
    const goFor = phones.find(phone => phone.id === id) || {};
    res.send(goFor);
    
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})