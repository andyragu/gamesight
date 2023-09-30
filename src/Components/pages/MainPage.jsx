import React, { useRef, useEffect } from 'react';
import './MainPage.css';
import SteamIDInput from '../userCreation/SteamIDInput';
import { NavLink } from 'react-router-dom';
import myImage from '../steamicon/steam-logo-white-removebg-preview.png';

function MainPage(props) {
    const sectionTwoRef = useRef(null);

    const scrollToSectionTwo = () => {
        sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
    }, []);

    return (
        <div className="container">
            <section className="one">
                <div className="header">
                    <h1 className="namePage">Gamesight</h1>
                    <div className="right-options">
                        <NavLink to="/about" style={{ textDecoration: 'none' }}>
                            <div className="about-option">about</div>
                        </NavLink>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <div className="howitworks-option">how it works</div>
                        </NavLink>
                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <img src={myImage} alt="Steam Image" className="steam-image" width="20" height="20" />
                            <div className="login-option">login</div>
                        </NavLink>
                    </div>
                </div>
                <div className="middle-content">
                    <h2>SEE YOUR NEXT GAME</h2>
                                
                    <button onClick={scrollToSectionTwo}>DISCOVER</button>

                </div>
            </section>

            <section id="two" ref={sectionTwoRef}>
                <div className="page-name">
                    <h2>Discover</h2>
                </div>
            </section>
        </div>
    );
}

export default MainPage;
