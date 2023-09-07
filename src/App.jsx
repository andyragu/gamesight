<<<<<<< HEAD
<<<<<<< Updated upstream
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> main
import {Login} from "./Components/Login";
import {Register} from "./Components/register";

function App() {

  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

<<<<<<< HEAD

=======
export default function App() {
  return (
    <div>
      <h1>GameSight</h1>
      <p>GameSight is a platform for sharing and discovering video games.</p>
    </div>
  )
}
>>>>>>> Stashed changes
=======
export default App
>>>>>>> main
