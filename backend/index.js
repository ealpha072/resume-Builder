import dotenv from 'dotenv'
dotenv.config({path: './.env'})
import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'

const app = express ();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('<h1>Hello there</h1>')
})

const PORT = process.env.PORT || 5000
const URL = process.env.MONGODB_URI
const password = 'tqA9y1CexFPuiaIr'
const url = `mongodb+srv://notes-app-full:${password}@cluster1.lvvbt.mongodb.net/?retryWrites=true&w=majority`
if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}
/*mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true}).then(
    ()=> app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))
).catch(err => console.log(err.message))*/

//console.log(process.argv)

//mongodb+srv://alpha:<password>@cluster0.rypdi.mongodb.net/?retryWrites=true&w=majority