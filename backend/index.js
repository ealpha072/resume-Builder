import config from './utils/config.js'
import middleware from './utils/middleware.js'
import express from 'express'

const app  = express()
import cors from 'cors'
import mongoose from 'mongoose'

//routes
import userRouter from './controllers/users.js'
import logger from './utils/logger.js'

console.log(`Connecting to `, config.url)
mongoose.connect(config.url)
.then(()=> {
    console.log('Connected to MONOGDB')
    app.listen(config.PORT, () => {logger.info(`Server listening on port ${config.PORT}`)})
})
.catch(error => {
    console.log(error.message)
})

app.use(cors())
app.use(express.json())
app.use(middleware.logRequest)
app.use(middleware.faviconIgnore)
app.use('/users', userRouter)

app.use(middleware.unknownEndpoints)
app.use(middleware.errorHandler)