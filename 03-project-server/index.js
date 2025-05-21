const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World is working realtime!');
})
    const users = [
        {
            id: 1,
            name: 'John Doe',
            details: [
                { key: 'age', value: 32 },
                { key: 'gender', value: 'Male' },
                { key: 'hobbies', value: ['swimming', 'playing chess'] }
            ]
        },
        {
            id: 2,
            name: 'Jane Doe',
            details: [
                { key: 'age', value: 28 },
                { key: 'gender', value: 'Female' },
                { key: 'hobbies', value: ['reading', 'watching movies'] }
            ]
        }
    ];

app.get('/users', (req, res) => {
    res.send(users);
})

 app.post('/users', (req, res) => {
    // console.log('user post method')
    // console.log(req.body); 
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);

 })


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})