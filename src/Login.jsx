// Login.jsx
import React from 'react';
import './index.css';
import logo from './Images/Intranet-Logo_1.png'; // Import your logo image
function Login({ onLogin }) {
    const validateForm = (e) => {
        e.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (!validateFormFields(username, password)) {
            return;
        }
        const domain = username.split("@")[1];
        const user = {
          domain : domain,
          role:  domain === 'admin.com' ? 'admin' : 'user'
        };
       
        onLogin(user);
    }

    const validateFormFields = (username, password) => {
        if (username.trim() === "" || password.trim() === "") {
            alert("Username or password cannot be blank!");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // More robust regex for email validation

        if (!emailRegex.test(username)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return false;
        }

        return true;
    }

    // const redirectform = () => {
    //     const email = document.getElementById("username").value;
    //     const domain = email.split("@")[1];

    //     if (domain === "admin.com") {
    //         window.location.href = "/HTML/admin.html";
    //     } else {
    //         window.location.href = "/HTML/home.html";
    //     }
    // }

    return (
        <div className="container">
            <img id="logo" src={logo} alt="Logo" />
            <div className="login-container">
                <p className="text">Login</p>
                <form onSubmit={validateForm}>
                    <div className="form-group">
                        <input type="text" placeholder="User Id" id="username" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" id="password" />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
