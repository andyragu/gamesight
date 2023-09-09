import React, { useEffect, useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/register";
import MainPage from './Components/MainPage';

function App() {
  const [currentForm, setCurrentForm] = useState('main');  // Set default to main page

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {currentForm === 'login' && <Login onFormSwitch={toggleForm} />}
      {currentForm === 'register' && <Register onFormSwitch={toggleForm} />}
      {currentForm === 'main' && <MainPage onFormSwitch={toggleForm} />}
    </div>
  );
}

export default App;

