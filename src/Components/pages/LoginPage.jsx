import React from 'react'
import { Login } from '../userCreation/Login'

const style = {
  backgroundImage: 'linear-gratient(180deg, #000000, #202029)'
};

function LoginPage(props) {

  return (
      <div className='LoginPage' style = {style}>
        <Login/>
      </div>
  )
}

export default LoginPage;