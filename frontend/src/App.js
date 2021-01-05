import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

import Header from "./components/Header";
import Login from "./components/Login";

function App() {
    return (
        <div>
            <Header />
            <Login />
        </div>
    );
}

export default App;