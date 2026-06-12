const mongoose = require('mongoose');

async function connectDB(){


    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connected successfully')
    }
    catch(error){
        console.error('Database connection error:',error);
        process.exit(1);
    }
}

module.exports = connectDB;