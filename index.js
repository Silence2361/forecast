import express from 'express'
import dotenv from 'dotenv'
// import mongoose from 'mongoose'
import router from './src/routers/weatherRouter.js'
import cors from 'cors'

dotenv.config()
const app = express()

// const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api', router)


const start = async() => { 
    try {
        // await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`server is working on port = ${PORT}`))
    } catch (err) {
        console.error('Error connecting to MongoDB:', err)
    }
   
}
// const db = mongoose.connection
// db.on('error',(error) => console.error('Connection Error', error))
// db.once('open',() => console.log('Connection successful'))


start()



 
