import React, { useState } from "react";
import loginPicture from "../../media/img/loginPicture.png";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
export default function Login() {

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const[errorOccured, setErrorOccured] = useState(false);

  const history = useHistory();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    
    let data = JSON.stringify({
      email: fields.email,
      password: fields.password
    });
    axios.post(`https://ruhack-noise.herokuapp.com/users/login`, JSON.parse(data))
      .then(res => {
      setErrorOccured(false);
      console.log("SHEESH");
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      history.push("/home")
    }, err =>{
      setErrorOccured(true);
      console.log("LOGIN FAILED")
    })
    event.preventDefault(); 
  }

  return (
    <React.Fragment>
      <div className="logo-container">
        <h1 className="logo shake">noise.</h1>
      </div>
      <div className="login-body">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
          <div className="forgot-container">
            <Link to="#" style={{ textDecoration: "None" }}>
              <span>Forgot Password?</span>
            </Link>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="reg-here-container">
          <p>
            Don't Have an Account?{" "}
            <Link to="/Register" style={{ textDecoration: "None" }}>
              <span>Register Here.</span>
            </Link>
          </p>
        </div>
        {errorOccured && <div>Invalid Login</div>}
      </div>
      <img
        className="login-photo"
        src={loginPicture}
        alt="girl floating holding a phone"
      />
    </React.Fragment>
  );
}
