import React from "react";
import './Signup.css';

const Signup = () => {
    return (
        <div className="login-container">
            <h1 className="title">User Login</h1>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    );
}

export default Signup;
