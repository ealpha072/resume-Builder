import config from './utils/config.js'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import middleware from './utils/middleware.js'



console.log(`Connecting to `, config.url)
mongoose.connect(config.url)
.then(()=> {
    console.log('Connected to MONOGDB')
    app.listen(config.PORT, () => {`Server listening on port ${config.PORT}`})
})
.catch(error => {
    console.log(error.message)
})

const app  = express()
app.use(cors())
app.use(middleware.logRequest)

app.use(middleware.unknownEndpoints)
app.use(middleware.errorHandler)