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
    if (fields.email === "" || fields.firstName === "" || fields.city === "" || fields.password === "" || fields.password !== fields.verifypassword){
      setErrorOccured(true);
      console.log("REGISTER FAILED!");
    }else{
      axios
      .post(`https://ruhack-noise.herokuapp.com/users`, JSON.parse(info))
      .then(
        (res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.profile.user);
          localStorage.setItem("image", res.data.profile.image);
          localStorage.setItem("name", res.data.profile.name);
          setErrorOccured(false);
          history.push("/profile");
        },
        (err) => {
          // FAILED
          setErrorOccured(true);
          console.log("REGISTER FAILED");
        }
      );
    }

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
              placeholder="first name"
              value={fields.firstName}
            />
            <input
              type="text"
              onChange={handleChange}
              name="lastName"
              placeholder="last name"
              value={fields.lastName}
            />
          </div>
          <div className="input-row">
            <input
              className="left-input"
              type="text"
              onChange={handleChange}
              name="email"
              placeholder="email"
              value={fields.email}
            />
            <input
              type="text"
              onChange={handleChange}
              name="city"
              placeholder="city"
              value={fields.city}
            />
          </div>
          <div className="input-row">
            <input
              className="left-input last-row-input"
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="password"
              value={fields.password}
            />
            <input
            className="last-row-input"
              type="password"
              onChange={handleChange}
              name="verifypassword"
              placeholder="re-enter password"
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
