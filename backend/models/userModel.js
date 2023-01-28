import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:[true, 'Email address ust be unique'],
        required: [true, 'Email address cannot be blank']
    },
    passwordHash: String,
})


userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        //delete hashed password
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('user', userSchema)
export default User