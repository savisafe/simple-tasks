import React from 'react';
import './App.css';
import {WelcomePopup} from "./components/WelcomePopup";
import {Board} from "./components/Board";

function App() {
    return (
        <div>
            <WelcomePopup/>
            <Board/>
        </div>
    );
}

export default App;
