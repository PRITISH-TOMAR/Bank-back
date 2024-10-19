const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000
const cors = require('cors')
const {connectToMongoDB} = require("./Connection/Connect")

const  userRoute  = require('./Routes/userRoute')
const  accountRoute  = require('./Routes/accountRoute')



//....................................
//MongoDB Connect
const dotenv = require('dotenv')
dotenv.config({ path: '.env' });


const url = process.env.MONGO_URL ;
// In case you do not have MONGO_URI


connectToMongoDB(url)  

//.....................................
 

app.use(express.json())   

const corsOptions = {
    origin: [process.env.MAIN_URL, "http://localhost:3000"],
    credentials: true, 
}

app.use(cors(corsOptions));
 


//......................................

app.use('/user', userRoute)
app.use('/account', accountRoute)



app.listen(PORT, ()=> console.log(`Running Server at ${PORT}`))