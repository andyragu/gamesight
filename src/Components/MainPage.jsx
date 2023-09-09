import React from 'react';
import './MainPage.css'; 

function MainPage(props) {
    return (
        <div>
            <div className="header">
                <h1>gamesight</h1>
                <div className="login-option" onClick={() => props.onFormSwitch('login')}>Login</div>
            </div>
            <div className="middle-content">
                <h2>SEE YOUR NEXT GAME</h2>
                <button onClick={() => props.onFormSwitch('register')}>DISCOVER</button>
            </div>
        </div>
    );
}

export default MainPage;
