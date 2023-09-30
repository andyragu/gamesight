import React from 'react';
import './MainPage.css';
import { NavLink } from 'react-router-dom';


function MainPage(props) {


    return (
        <div class="container">
            <section class="one">
                <div className="header">
                    <h1 className="namePage">Gamesight</h1>
                    <div className="right-options">
                        <NavLink to="/about" style={{ textDecoration: 'none' }}>
                            <div className="about-option">about</div>
                        </NavLink>
                        <NavLink to="/about" style={{ textDecoration: 'none' }}>
                            <div className="howitworks-option">how it works</div>
                        </NavLink>
                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <div className="login-option">login</div>
                        </NavLink>
                    </div>
                </div>
                <div className="middle-content">
                    <h2>SEE YOUR NEXT GAME</h2>
                    <button onClick={() => props.onFormSwitch('register')}>DISCOVER</button>
                </div>
            </section>

            <section class="two">
                <div className="page-name">
                    <h2>Discover</h2>
                </div>
            </section>

            <section class="three">

            </section>
        </div>
    );
}

export default MainPage;
 