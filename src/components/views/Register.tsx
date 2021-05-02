import React, { useState } from "react";
<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
=======
import { Link, useHistory } from 'react-router-dom';
import RegisterUser from "../actions/RegisterUser";
>>>>>>> 3e82d232533ba955ac92084af9447d0b49742148

export default function Register() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    password: "",
    verifypassword: "",
  });

  const [errorOccured, setErrorOccured] = useState(false);

  const history = useHistory();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    let info = JSON.stringify({
      name: `${fields.firstName} ${fields.lastName}`,
      email: fields.email,
      city: fields.city,
      password: fields.password,
    });
    event.preventDefault();
    axios
      .post(`https://ruhack-noise.herokuapp.com/users`, JSON.parse(info))
      .then(
        (res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          setErrorOccured(false);
          history.push("/home");
        },
        (err) => {
          // FAILED
          setErrorOccured(true);
          console.log("LOGIN FAILED");
        }
      );
  }

  return (
    <React.Fragment>
      <h1 className="logo">noise.</h1>
      <div className="register-body">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="firstName"
            placeholder="First Name"
            value={fields.firstName}
          />
          <input
            type="text"
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name"
            value={fields.lastName}
          />
          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder="Email"
            value={fields.email}
          />
          <input
            type="text"
            onChange={handleChange}
            name="city"
            placeholder="City"
            value={fields.city}
          />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
            value={fields.password}
          />
          <input
            type="password"
            onChange={handleChange}
            name="verifypassword"
            placeholder="Re-enter Password"
            value={fields.verifypassword}
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already Have an Account? <Link to="/login">Login Here.</Link>
        </p>
        {errorOccured && <div>Register Failed</div>}
      </div>
    </React.Fragment>
  );
}
