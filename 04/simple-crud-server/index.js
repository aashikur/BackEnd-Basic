const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000

// middleware 
app.use(cors());
app.use(express.json())


// mdaashikur
// TkrRO9sWqmOVkrqj
// --------------------------------------------------------------------------
const uri = "mongodb+srv://simpleDBuser:TkrRO9sWqmOVkrqj@cluster0.pyzmqm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     const database = client.db("userDB");
//     const usersCollections = database.collection("users");

//     app.post('/users', async (req, res) => {
//       console.log('data in the server', req.body); 
//       const newUser = req.body;
//           const result = await usersCollections.insertOne(newUser);
//           res.send(result);

//     })



//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//   }
// }
// run().catch(console.dir);


// --------------------------------------------------------------------------

async function run() {
  try {
    // Connect to the "sample_mflix" database and access its "movies" collection
    await client.connect();
    const usersCollection = client.db("userDB").collection("users");

    // This cursor For Sent data to Client Side (Display in UI )
    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    
    // __ Scarching Something...+++++++++++
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id) }

        const result = await usersCollection.findOne(query);
        res.send(result);

     
    })

    // Insert the defined document into the "movies" collection
    app.post('/users', async (req, res) => {
      console.log('data in the server', req.body);
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    }) 

    // Delete Added here +++++++++++++++++++
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;    
      const query = {_id: new ObjectId(id)} 
      const result = await usersCollection.deleteOne(query); 
         console.log('to be id', id)
         res.send(result);

    })

    // ||||||||||||||||||||||||||||||||||| Put / Patch
    app.put('/users/:id', async(req, res) => {
      const id = req.params.id;
      const user = req.body;
      const filter = {_id : new ObjectId(id)};
      console.log(user);

    /* Set the upsert option to insert a document if no documents match
    the filter */
    const options = { upsert: true };

      const updateDoc =  {
        $set: {
          name: user.name,
          email: user.email,
          address: 'unknown for now'
        }
      }
          const result = await usersCollection.updateOne(filter, updateDoc, options);
          res.send(result);
    })


    // Print the ID of the inserted document
    await client.db("admin").command({ ping: 1 });
  } catch(error){
    console.error(error);
  }
}
  // Run the function and handle any errors
  run().catch(console.dir);

  //************************************************************ */
  app.get('/', (req, res) => {
    res.send('Server Running...');
  })



  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

