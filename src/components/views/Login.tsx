import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginPicture from "../../media/img/loginPicture.png";

export default function Login() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(`values were submitted`);
    console.log(fields);
    // a call to an external ts file is called here
  }

  return (
    <React.Fragment>
      <div className="logo-container">
        <h1 className="logo shake">noise.</h1>
      </div>
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
      </div>
      <img
        className="login-photo"
        src={loginPicture}
        alt="girl floating holding a phone"
      />
    </React.Fragment>
  );
}
