import axios from 'axios'
const baseUrl = 'http://localhost:5000/users'

const signUp = async (userInfo) => {
    const response = await axios.post(`${baseUrl}/signup`, userInfo)
    return response.data
}

const login = async (creds) => {
    const response = await axios.post(`${baseUrl}/login`, creds)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {signUp, login}