import React, { useState } from 'react';
import './Login.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Log in to gamesight...</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />

                    <label htmlFor="password" style={{ marginTop: '1.5rem' }}>Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />

                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="register-text">
                  Don't have an account?  
                  <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => props.onFormSwitch('register')}> Sign up for gamesight</span>
                </div>
            </div>
        </div>
    )
}

