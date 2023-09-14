import React, { useState } from "react";
import { Login } from "./Components/userCreation/Login";
import { Register } from "./Components/userCreation/Register";
import MainPage from './Components/MainPage';

function App() {
    const [currentForm, setCurrentForm] = useState('main');  // Default to main page

    const toggleForm = formName => {
        setCurrentForm(formName);
    }

    const renderForm = () => {
        switch (currentForm) {
            case 'login':
                return <Login onFormSwitch={toggleForm} />;
            case 'register':
                return <Register onFormSwitch={toggleForm} />;
            case 'main':
            default:
                return <MainPage onFormSwitch={toggleForm} />;
        }
    };

    return (
        <div className="App">
            {renderForm()}
        </div>
    );
}

export default App;