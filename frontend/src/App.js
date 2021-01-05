import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    return (
        <div>
            <Header />
            <Signup />
            <Login />
        </div>
    );
}

export default App;