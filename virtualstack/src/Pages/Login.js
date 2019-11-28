import React from "react";
// import {
//     BrowserRouter as Link
// } from "react-router-dom";
import "./App.css";

// fetch("https://virtual-stack.herokuapp.com/api/signin", {
//   method: "POST",
//   headers: { username: "username", password: "password" }
// });

export default function Login() {
  return (
    <div class="login-header">
      <h2>Login</h2>
      <form onSubmit="fetch">
        <label for="username">Username:</label>
        <input id="login-box" type="username" name="username" required></input>
        <br />
        <label for="password">Password:</label>
        <input id="login-box" type="password" name="password" required></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}
