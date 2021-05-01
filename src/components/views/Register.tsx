import { stringify } from "node:querystring";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    email: "",
    city: "",
    password: "",
    verifypassword: "",
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
      <div className="register-body">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name"
          />
          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            onChange={handleChange}
            name="city"
            placeholder="City"
          />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            onChange={handleChange}
            name="verifypassword"
            placeholder="Re-enter Password"
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already Have an Account? <Link to="/login">Login Here.</Link>
        </p>
      </div>
    </React.Fragment>
  );
}
