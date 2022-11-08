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

    ret
}