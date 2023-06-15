import axios from "axios";

export const login = async (data) => {
    return await axios.post(`http://localhost:3010/api/users/login`, data)
}

export const register = async (data) => {
    return await axios.post(`http://localhost:3010/api/users`, data)
}

export const getData = async () => {
    return await axios.get(`http://localhost:3010/api/users/profile`)
}

export const logout = async () => {
    return await axios.post('http://localhost:3010/api/users/logout',{})
}