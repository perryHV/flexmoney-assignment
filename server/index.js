const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})
const PORT = process.env.PORT || 5000



app.post("/saveUser", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
    const completePayment = () => {
        //this function completes the payment, so assuming the payment gets completed.
    }
    const newUser = new User({
        username: req.body.username,
        age: req.body.age,
        slot: req.body.slot
    })
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error! " + err))
})

app.listen(PORT, () => {
    console.log(`Successfully served on port: ${PORT}.`);
})