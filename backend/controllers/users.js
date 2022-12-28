import express from 'express'
import bcrypt from 'bcrypt'
import User from '../models/userModel.js'


const userRouter = express.Router()

userRouter.get('/', (request, response) => {
    console.log('Hello')
    response.send({name: 'Alpha emmanuel'})
})

userRouter.post('/', async (request, response, next)=>{
    const {email, password, confirmPassword} = request.body


    try {
        const existingUser = await User.findOne({ email })
        console.log(existingUser)
        if ( existingUser ) {
            response.status(400).json({
                error: 'User with email already exists'
            })
        }

        const saltRounds = 10
        const strongPass = await bcrypt.hash(password, saltRounds)
        const newUser = new User({
            email, strongPass
        })
        const savedUser = await newUser.save()
        response.status(201).json(savedUser)
    } catch (error) {
        next(error)
    }
})

export default userRouter