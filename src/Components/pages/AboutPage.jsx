import React from 'react'
import './AboutPage.css'
import { NavLink } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="AboutPage">
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <div className="about-header">
          Gamesight
        </div>
      </NavLink>

        <div className="About-Container">
            <h2 className="About-Title">About</h2>
            <h3 className="About-Text">Gamesight allows for users to discover different games they would 
                have never had found before. Developed by a team of three that loves playing video
                games we wanted to make finding games easy. 
                Whenever we looked for games to play with each other we could otherwise never find.</h3>
        </div>
    </div>
  )
}

export default AboutPage