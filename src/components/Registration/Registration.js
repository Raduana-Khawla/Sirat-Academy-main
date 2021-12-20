import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { registerUser } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleLoginSubmit}>
        <div class="container">
          <h1>Registration Form</h1>
          {/* <h3 style="text-align: center;color: rgb(26, 106, 172);">Please fill in this form to create an account.</h3> */}
          <hr />
          <label for="email">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="email"
            onBlur={handleOnBlur}
            id="email"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            onBlur={handleOnBlur}
            name="email"
            id="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            onBlur={handleOnBlur}
            name="psw"
            id="psw"
            required
          />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            onBlur={handleOnBlur}
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
