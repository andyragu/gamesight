import React from 'react';
import './MainPage.css';
import SteamIDInput from '../userCreation/SteamIDInput';
import { NavLink } from 'react-router-dom';

function MainPage(props) {
    return (
        <div className="container">
            <section className="one">
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
                    <NavLink to="/discover">
                        <button>DISCOVER</button>
                    </NavLink>
                    <NavLink to="/SteamID">
                        <button>SteamID</button>
                    </NavLink>
                </div>
            </section>

            <section className="two">
                <div className="page-name">
                    <h2>Discover</h2>
                </div>
            </section>

            <section className="three">

            </section>
        </div>
    );
}

export default MainPage;
