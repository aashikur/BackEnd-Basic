const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pyzmqm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const jobsCollection = client.db("DreamJobDB").collection("jobs");
    const applicationsCollection = client.db("DreamJobDB").collection("applications");

    // Get all jobs or jobs by HR email
    app.get('/jobs', async (req, res) => {
      const email = req.query.email;
      let query = {};
      if (email) {
        query.hr_email = email;
      }
      const result = await jobsCollection.find(query).toArray();
      res.send(result);
    });

    // Get job details by ID
    app.get('/jobs-details/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // Post a new job
    app.post('/jobs', async (req, res) => {
      const job = req.body;
      const result = await jobsCollection.insertOne(job);
      res.send(result);
    });

    // Post a new application
    app.post('/applications', async (req, res) => {
      const application = req.body;
      const result = await applicationsCollection.insertOne(application);
      res.send(result);
    });

    // Get all applications or applications for a specific job
    app.get('/applications', async (req, res) => {
      const { jobId } = req.query;
      try {
        let query = {};
        if (jobId) {
          query.JobID = jobId;
        }
        const applications = await applicationsCollection.find(query).toArray();
        res.json(applications);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Get applications for a specific user (my applications)
    app.get('/my-applications', async (req, res) => {
      try {
        const email = req.query.email;
        const result = await applicationsCollection.find({ email: email }).toArray();

        // Attach job details to each application
        for (const app of result) {
          const jobQuery = { _id: new ObjectId(app.JobID) };
          const job = await jobsCollection.findOne(jobQuery);
          app.jobDetails = job;
        }

        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching applications.' });
      }
    });

    // Get a specific application by its ID
    app.get('/applications/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await applicationsCollection.find(query).toArray();
      res.send(result);
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close(); // Keep the connection open for server
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Dream Job Server is running!');
});

app.listen(port, () => {
  console.log(`Dream Job Server listening on port ${port}`);
});