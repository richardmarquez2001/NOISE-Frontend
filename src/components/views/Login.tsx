import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
export default function Login() {

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    axios.post(`https://ruhack-noise.herokuapp.com/users/login`,
      {
        email: fields.email,
        password: fields.password
      }
    ).then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      history.push("/home")
    }, err =>{
      // FAILED
      console.log("LOGIN FAILED")
    })
  }

  return (
    <React.Fragment>
      <h1 className="logo">noise.</h1>
      <div className="login-body">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="email"
            value={fields.email}
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            value={fields.password}
          />
          <Link to="#">Forgot Password?</Link>
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't Have an Account? <Link to="/Register">Register Here.</Link>
        </p>
      </div>
    </React.Fragment>
  );
}
