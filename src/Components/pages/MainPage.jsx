import React from 'react';
import './MainPage.css'; 

function MainPage(props) {
    return (
        <div>
            <div className="header">
                <h1 className="namePage">Gamesight</h1>
                <div className="right-options">
                    <div className="about-option">about</div>
                    <div className="howitworks-option">how it works</div>
                    <div className="login-option" onClick={() => props.onFormSwitch('login')}>login</div>
                </div>
            </div>
            <div className="middle-content">
                <h2>SEE YOUR NEXT GAME</h2>
                <button onClick={() => props.onFormSwitch('register')}>DISCOVER</button>
            </div>
        </div>
    );
}

export default MainPage;
 