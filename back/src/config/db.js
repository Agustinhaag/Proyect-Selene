import mongoose from "mongoose";
import { dbPassword } from "./envs.js";



const uri = `mongodb+srv://agushaag30:<${dbPassword}>@cluster0.an453rx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
   
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  
    await mongoose.disconnect();
  }
}
run().catch(console.dir);



