import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
               className="input"
               type="text"
               name="username"
               value={FormData.username}
               onChange={handleChange}
            />
            <input
               className="input"
               type="password"
               name="password"
               value={FormData.password}
               onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;