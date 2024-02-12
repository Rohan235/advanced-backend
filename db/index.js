import mongoose  from "mongoose";

import { DB_NAME } from "../src/constants.js";

const connetDB = async ()=>{
    try{
        const connectionString =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database connected successfully !! DB HOST : ${connectionString.connection.host}`);
    }
    catch(error){
        console.log('MongoDb Connection error : ',error);
        process.exit(1); // Forcibly shut down if connection fails  
    }
}

export default connetDB;