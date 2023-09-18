import React, { useState } from "react";
import { Login } from "./Components/userCreation/Login";
import { Register } from "./Components/userCreation/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/pages/MainPage";
import LoginPage from "./Components/pages/LoginPage";

function App() {
    /*const [currentForm, setCurrentForm] = useState('main');  // Default to main page

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
    }; */

    return (
        //So this makes it so it sends you to different pages when using the specified path
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                </Routes>   
            </main>
        </BrowserRouter>
    );
}

export default App;