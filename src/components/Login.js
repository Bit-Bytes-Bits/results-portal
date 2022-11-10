import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Login.css"


function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);
    history.push("/");
  }

  return (
    <div className="form-form">
    <form className="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        className="input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        className="input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="login-btn" type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;

