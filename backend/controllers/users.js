import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'


const userRouter = express.Router()

userRouter.get('/', (request, response) => {
    console.log('Hello')
    response.send({name: 'Alpha emmanuel'})
})

userRouter.post('/signup', async (request, response, next)=>{
    const {email, password} = request.body

    try {
        const existingUser = await User.findOne({ email:email })
        if ( existingUser ) {
            response.status(400).json({
                error: 'User with email already exists'
            })
        }

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = new User({
            email, passwordHash
        })

        const savedUser = await newUser.save()
        response.status(201).json({
            user:savedUser,
            message:"Successfully added user, taking you to login page"
        })
    } catch (error) {
        next(error)
    }
})

userRouter.post('/login', async (request, response, next) => {
    console.log(request.body)
    const { email, password } = request.body

    try {
        const foundUser  = await User.findOne({ email })
        console.log(foundUser)
        const passwordCheck = foundUser === null
        ? false :
        await bcrypt.compare(password, foundUser.passwordHash)

        if(!(foundUser && passwordCheck)){
            response.status(400).json({
                error:'Invalid username or password'
            })
        }

        response.status(200).json({email:foundUser.email, id:foundUser._id})
    } catch (error) {
        next(error)
    }
})

export default userRouter