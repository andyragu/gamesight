import React from 'react'
import { Login } from '../userCreation/Login'
import './LoginPage.css'; 
import { NavLink } from 'react-router-dom';

function LoginPage() {

  return (
      <div className='LoginPage'>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className="header">
            Gamesight
          </div>
        </NavLink>
        <Login/>
      </div>
  )
}

export default LoginPage;