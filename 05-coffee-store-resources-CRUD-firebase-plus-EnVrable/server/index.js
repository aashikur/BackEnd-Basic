const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const serverless = require("serverless-http"); // ✅ added for Vercel
require('dotenv').config()

const app = express();
// const port = process.env.PORT || 3000; // ❌ Not needed in serverless environment

app.use(cors());
app.use(express.json()); 
//==========================================================

// console.log(process.env.DB_USER, process.env.DB_PWD) // remove this after you've confirmed it is working

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.pyzmqm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const coffeesCollection = client.db("coffeeDB").collection("coffees");
    const coffeesUserCollection = client.db("coffeeDB").collection("users");

    app.get('/coffees', async (req, res) => {
      const cursor = coffeesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await coffeesCollection.findOne(query);
      res.send(result)
    })

    app.post('/coffees', async (req, res) => {
        const newCoffee = req.body;
        const result = await coffeesCollection.insertOne(newCoffee);
        res.send(result); // res.send(result);
        console.log(newCoffee);
    })

    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updateCoffee = req.body; // This is ShortCut for get all Key:Value pairs in req.body
      const updateDoc = {
        $set: updateCoffee
      };
      const result = await coffeesCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    app.delete('/coffees/:id', async(req, res)=> {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    })

    // ==========================================
    // USer Collection
    app.post('/users', async (req, res) => {
      const userProfile = req.body;
      console.log(userProfile);
      const result = await coffeesUserCollection.insertOne(userProfile);
      res.send(result);
    })

    app.get('/users', async (req, res) => {
      const cursor = coffeesUserCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeesUserCollection.deleteOne(query)
      res.send(result);
    })

    app.patch('/users', async (req, res) => {
      const { email, lastSignInTime } = req.body;
      const filter = { email: email };
      const updateDoc = {
        $set: {
          lastSignInTime: lastSignInTime
        }
      }
      const result = await coffeesUserCollection.updateOne(filter, updateDoc);
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

//==========================================================
app.get("/", (req, res) => {
    res.send("hey, Coffee Server is in Live!!!")
})

// ❌ Remove app.listen()
// ✅ Instead, export for Vercel:
module.exports = app;
module.exports.handler = serverless(app);
