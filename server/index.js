import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import router from './router/router.js'

const app = express()
app.use(cors())
app.use(express.json())//parslama işlemini yapıyor

dotenv.config()

app.use('/posts',router)

app.listen(process.env.PORT, () =>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(console.log("bağlandık.")).
    catch((err) => console.log(err))
})