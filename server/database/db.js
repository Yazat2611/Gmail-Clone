import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection=() => {
    try
    {
        mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-tk0cc4g-shard-00-00.xfixxj3.mongodb.net:27017,ac-tk0cc4g-shard-00-01.xfixxj3.mongodb.net:27017,ac-tk0cc4g-shard-00-02.xfixxj3.mongodb.net:27017/?ssl=true&replicaSet=atlas-qi2g5b-shard-0&authSource=admin&retryWrites=true&w=majority`);
        console.log("Database is connected succesfully  ");
    }

    catch(error)
    {
        console.log("Error while connecting the data base",error.message);
    }
}

export default Connection