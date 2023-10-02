import React from 'react'
import './LoginPage.css'; 
import { NavLink } from 'react-router-dom';
import myImage from '../steamicon/steam-logo-white-removebg-preview.png';

function LoginPage() {

  return (
      <div className='LoginPage'>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <div className="login-header">
              Gamesight
            </div>
          </NavLink>
          <div className="login-box">
                <h2 className="login-title">Logging in to gamesight with your Steam allows you to get the full experience of discovering games</h2>
                <h2 className="login-explanation">To provide a better service we will fetch public information about your account from the Steam Web API (this includes steamid, profile name, avatar, and game list). This website is not affiliated with Valve Corporation or Steam. You can delete your account and all of the data at any time.</h2>
                <button id="login-steam">
                  <img src={myImage} alt="Steam-Image2" className="steam-image2" width="20" height="20"/>
                  Login with Steam
                </button>
          </div>

      </div>
  )
}

export default LoginPage;