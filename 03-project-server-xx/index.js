const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const cors = require('cors')

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// ----------------------------------------------------------------------------------------
const uri = "mongodb+srv://simpleDBuser:TkrRO9sWqmOVkrqj@cluster0.pyzmqm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}); 


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);
// ----------------------------------------------------------------------------------------

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