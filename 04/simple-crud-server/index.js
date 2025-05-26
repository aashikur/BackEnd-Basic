const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');

const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000

// middleware 
app.use(cors());
app.use(express.json())


// mdaashikur
// TkrRO9sWqmOVkrqj

const uri = "mongodb+srv://simpleDBuser:TkrRO9sWqmOVkrqj@cluster0.pyzmqm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);


// --------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Server Running...')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

