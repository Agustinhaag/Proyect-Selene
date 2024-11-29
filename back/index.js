import express from 'express'
import { port } from './src/config/envs.js';
import cors from 'cors'
import router from './src/routes/index.js';


const app = express();

app.use(express.json())
app.use(cors())

app.use("/", router)


    app.listen(port, console.log(`servidor corriendo en puerto ${port}`))
