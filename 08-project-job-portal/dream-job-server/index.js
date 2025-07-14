const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middleware
app.use(cors());
app.use(express.json());
dotenv.config();


// dream_job_user
// exAA3TkdNlN2r9WN



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pyzmqm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const DreamDB = client.db("DreamJobDB").collection("jobs");

    app.get('/jobs', async (req, res) => {
        const result = await DreamDB.find().toArray();
        res.send(result);
    })

    app.get('/jobs-details/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id)}
        const result  = await DreamDB.findOne(query);
        res.send(result);

    })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Dream Job Server is running!')
})

app.listen(port, () => {
  console.log(`Dream Job Server listening on port ${port}`)
})
