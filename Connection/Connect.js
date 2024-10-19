const mongoose = require("mongoose");

const connectToMongoDB = (Url) =>{
    return mongoose.connect(Url)
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((error)=>{
        console.log("MongoDB Error:", error);
    });
}

module.exports = {
    connectToMongoDB,
}
 