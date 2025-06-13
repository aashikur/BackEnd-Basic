const express = require('express');
require('dotenv').config()
const { ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pyzmqm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

    // Connect to the "TestCoffeeDatabase" database and access its "movies" collection
    const TestCoffeeDatabase = client.db("TestCoffeeDatabase");
    const AddCoffees = TestCoffeeDatabase.collection("AddCoffees");
    
    // Catch From Data and Sent to TESTCOFFEEDATABASE
    app.post('/addcoffee', async (req, res) => {
      const newCoffee = req.body;
      const result = await AddCoffees.insertOne(newCoffee);
      res.send(result)
      
    })
  
    // From DB sent data to Client Side
    app.get('/addcoffee', async (req, res) => {
      const result = await AddCoffees.find().toArray();
      res.send(result);
    })
    // View Details of Coffee
    app.get('/addcoffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await AddCoffees.findOne(query);
      res.send(result);
    }) 

    // Delete match Coffees by ID 
    app.delete('/addcoffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await AddCoffees.deleteOne(query);
      res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Hello Man, TEST COFFEE is working!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});