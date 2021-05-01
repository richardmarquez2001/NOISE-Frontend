import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
