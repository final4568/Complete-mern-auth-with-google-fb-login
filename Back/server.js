require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path');

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

//routes 
app.use('/user', require('./routers/userRouter'))
app.use('/user/iamge', require('./routers/uploadimage'))


const URI = process.env.MONGODB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to mongodb successfully")
})

app.use('/', (req, res) => {
    res.json({ msg: "Hello from server side" })
})

const PORT = process.env.port || 5000
app.listen(PORT, (req, res) => {
    console.log(`Your server is running on ${PORT} number `);
})