import React, { useState, useEffect } from "react";
import { Login } from "./Components/userCreation/Login";
import { Register } from "./Components/userCreation/Register";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./Components/pages/MainPage";
import LoginPage from "./Components/pages/LoginPage";
import AboutPage from "./Components/pages/AboutPage";
import SteamIDPage from "./Components/userCreation/SteamIDPage"; // Adjust the import path if needed

function App() {

    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/steamID" element={<SteamIDPage />}/>
                </Routes>   
            </main>
        </BrowserRouter>
    );
}

export default App;
