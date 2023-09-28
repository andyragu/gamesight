import React from 'react'
import { Login } from '../userCreation/Login'
import './LoginPage.css'; 

function LoginPage(props) {

  return (
      <div className='LoginPage'>
        <div className="header">
          Gamesight
        </div>
        <Login/>
      </div>
  )
}

export default LoginPage;