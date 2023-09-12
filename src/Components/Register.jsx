import React, { useState } from 'react';
import './Login.css';  // Note: We are importing Login.css here

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Register for gamesight...</h2>
                <form onSubmit={handleSubmit} action="http://localhost:8000/collectData" method="post">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />

                    <label htmlFor="email">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />

                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />

                    <button type="submit" className="login-button">Register</button>
                </form>
                <div className="register-text">Already have an account? <span onClick={() => props.onFormSwitch('login')}>Log in to gamesight</span></div>
            </div>
        </div>
    )
}



