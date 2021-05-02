import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

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
      <div className="logo-container">
        <h1 className="logo shake">noise.</h1>
      </div>
      <div className="register-body">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-row">
            <input
              className="left-input"
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
          </div>
          <div className="input-row">
            <input
              className="left-input"
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
          </div>
          <div className="input-row">
            <input
              className="left-input last-row-input"
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Password"
              value={fields.password}
            />
            <input
            className="last-row-input"
              type="password"
              onChange={handleChange}
              name="verifypassword"
              placeholder="Re-enter Password"
              value={fields.verifypassword}
            />
          </div>
          <div className="invalid-reg-container">
            {errorOccured && <div>*Invalid Registration</div>}
          </div>
          <div className="link-container">
            <div id="login-here">
              Already Have an Account?{" "}
              <Link to="/login">
                <span>Login Here.</span>
              </Link>
            </div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
