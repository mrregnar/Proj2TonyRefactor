import React from 'react'
import { useState } from 'react'
import axios from 'axios'
//import "./Login.css";

function LoginUser() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  })
  function handleChange(e) {
    console.log('change is being handled')
    const { name, value } = e.target
    setUser((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }
  function LogInUser(e) {
    e.preventDefault()
    alert('logged in')
    // const newItem = {
    //   itemName: item.itemName,
    //   itemSize: item.itemSize,
    //   itemQuantity: item.itemQuantity,
    // };
    axios.get('/', LogInUser) //put new item here
  }
  return (
    <div class='Login-box'>
      <h2>Login</h2>
      <form>
        <div class='User-box'>
          <label>Username</label>
          <input type='text' name='' required=''></input>
        </div>
        <div class='User-box'>
          <label>Password</label>
          <input type='password' name='' required=''></input>
        </div>
        <a href='/'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}

export default LoginUser
