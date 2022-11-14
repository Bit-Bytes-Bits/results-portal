import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";


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

  return (<>
    <form className="login-form" onSubmit={ handleSubmit }>
      <h1>Confirm Your Identity</h1>
      <input
        className="input"
        placeholder="Enter your username"
        type="text"
        name="username"
        value={ formData.username }
        onChange={ handleChange }
      />
      <input
        className="input"
        placeholder="Enter your password"
        type="password"
        name="password"
        value={ formData.password }
        onChange={ handleChange }
      />
      <button className="login-btn" type="submit">Submit</button>
    </form>
    <div className="footer">
      <Footer />
    </div>
  </>
  );
}

export default Login;

