import axios from 'axios'
const baseUrl = 'http://localhost:5000/users'

const signUp = async (userInfo) => {
    const response = await axios.post(baseUrl, userInfo)
    return response.data
}

export default signUp