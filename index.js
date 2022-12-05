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
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
  try{
    const serviceCollection = client.db("Quench_Valley").collection("services");

     //for get all service
     app.get("/services", async (req, res) => {
      const query = {};
      const result =await serviceCollection.find(query).toArray()
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