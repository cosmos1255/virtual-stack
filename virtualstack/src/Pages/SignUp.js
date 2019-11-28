import React from "react";
import InputMask from "react-input-mask";
// import {
//     BrowserRouter as Link
// } from "react-router-dom";
import "./App.css";

// fetch("/api/signup", {
//   method: "POST",
//   body:
//     "'username', 'password', 'name', 'occupation', 'address', 'phoneNumber', 'email'"
// });

export default function SignUp() {
  return (
    <div class="login-header">
      <h2>Sign Up</h2>
      <form onSubmit="fetch">
        <label for="username">Username:</label>
        <input id="login-box" type="username" name="username" required></input>
        <br />
        <label for="password">Password:</label>
        <input id="login-box" type="password" name="password" required></input>
        <br />
        <label for="name">Full Name:</label>
        <input
          id="login-box"
          type="text"
          name="name"
          placeholder="ex. John Doe"
          required
        ></input>
        <br />
        <label for="occupation">Company/School:</label>
        <input id="login-box" type="text" name="occupation" required></input>
        <br />

        <label for="email">Email:</label>
        <input
          id="login-box"
          type="email"
          name="email"
          placeholder="ex. john.doe@email.com"
          required
        ></input>
        <br />
        <label for="phoneNumber">Phone:</label>
        <InputMask
          id="login-box"
          type="tel"
          name="phoneNumber"
          mask="(999) 999-9999"
          placeholder="ex. (123) 456-7890"
          required
        ></InputMask>
        <br />
        <label for="address">Address:</label>
        <input id="login-box" type="address" name="address" required></input>
        <br />
        <input type="submit" value="Sign Up"></input>
      </form>
    </div>
  );
}
