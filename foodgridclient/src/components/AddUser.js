import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Registration.css";

function AddUser() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    communityName: "",
    contactMethod: "",
  });

  function handleChange(e) {
    console.log("change is being handled");
    const { name, value } = e.target;
    setUser((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function addUser(e) {
    e.preventDefault();
    alert("user added");
    const newUser = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      communityName: user.communityName,
      contactMethod: user.contactMethod,
    };
    axios.post("/users", newUser); //put new item here
  }

  return (
    <div class="Registration-box">
      <h2>Sign Up</h2>
      <form>
        <div class="User-box">
          <input
            onChange={handleChange}
            name="userName"
            placeholder="name"
            value={user.userName}
            type="text"
          ></input>
          <label htmlFor="userName">User Name</label>
        </div>
        <div class="User-box">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="email"
            value={user.email}
          ></input>
          <label htmlFor="email">Email</label>
        </div>
        <div class="User-box">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
          ></input>
          <label htmlFor="password">Password</label>
        </div>
        <div class="User-box">
          <input
            onChange={handleChange}
            name="phoneNumber"
            placeholder="Phone Number"
            value={user.phoneNumber}
            type="text"
          ></input>
          <label htmlFor="PhoneNumber">Phone Number</label>
        </div>
        <div class="User-box">
          <input
            onChange={handleChange}
            name="communityName"
            placeholder="Community"
            value={user.communityName}
            type="text"
          ></input>
          <label htmlFor="commuinityName">Community Name</label>
        </div>
        <div class="User-box">
          <input
            onChange={handleChange}
            name="contactMethod"
            placeholder="Contact Method"
            value={user.contactMethod}
            type="text"
          ></input>
          <label htmlFor="ContactMethod">Contact Method</label>
        </div>
        <a onClick={addUser}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default AddUser;
