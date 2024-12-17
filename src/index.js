import express from 'express';
import dotenv from 'dotenv';
import ConnectDatabase from './Lib/db.js';

const app = express();

dotenv.config({path:'./env'})

ConnectDatabase()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server running on port ${process.env.PORT}`)
      
    })
})
.catch((error) => {
    console.log("MONGODB CONNECTION FAILED !!: ", error);
    process.exit(1);
})