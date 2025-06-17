import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser)
    console.log(response.data)
  }
  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }

  useEffect(() => {
    // getAllUsers()
    // getUserById(1)
    // const newUser = {
    //   "username": "elif",
    //   "password": "763"
    // }
    // createUser(newUser)

    // updateUser("688d", {
    //   "username": "yoti",
    //   "password": "5656"
    // })
  }, [])
  return (
    <div>

    </div>
  )
}

export default App
