import React from "react";
import "./App.css";

import Calculator from "./components/Calculator/Calculator";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <label style={{ paddingRight: 20 }}>Calculator</label>
            </header>
            <Calculator />
        </div>
    );
}

export default App;
