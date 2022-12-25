// Quench_Valley
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//mmiddle wares
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.juguzvf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
  try{
    const serviceCollection = client.db("Quench_Valley").collection("services");
    const userCollection = client.db("Quench_Valley").collection("users");

     //for get all service
     app.get("/services", async (req, res) => {
      const query = {};
      const result =await serviceCollection.find(query).toArray()
      res.send(result);
    });

    //get breakfast data by category
    app.get("/breakfast", async (req, res) => {
      // const query = {}
      const products = await serviceCollection
        .find({ categoryName: "breakfast" })
        .toArray();
      res.send(products);
    });
    //get dinner data by category
    app.get("/dinner", async (req, res) => {
      // const query = {}
      const products = await serviceCollection
        .find({ categoryName: "dinner" })
        .toArray();
      res.send(products);
    });
    //get drinks data by category
    app.get("/drinks", async (req, res) => {
      // const query = {}
      const products = await serviceCollection
        .find({ categoryName: "drinks" })
        .toArray();
      res.send(products);
    });
    //get indianFood data by category
    app.get("/indianFood", async (req, res) => {
      // const query = {}
      const products = await serviceCollection
        .find({ categoryName: "indianFood" })
        .toArray();
      res.send(products);
    });
    //get italianFood data by category
    app.get("/italianFood", async (req, res) => {
      // const query = {}
      const products = await serviceCollection
        .find({ categoryName: "italianFood" })
        .toArray();
      res.send(products);
    });
    //get veganFood data by category
    app.get("/veganFood", async (req, res) => {
      // const query = {}
      const products = await serviceCollection
        .find({ categoryName: "veganFood" })
        .toArray();
      res.send(products);
    });


    // post user when they are created
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

  }
  finally{

  }
}run().catch((err) => console.error(err));



app.get("/", (res, req) => {
    req.send("Quench_Valley server is running");
  });
  
  app.listen(port, () => {
    console.log(`Quench_Valley Server running onporrt: ${port}`);
  });