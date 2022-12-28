import express from 'express'

const userRouter = express.Router()

userRouter.get('/', (request, response) => {
    console.log('Hello')
    response.send({name: 'Alpha emmanuel'})
})

export default userRouter