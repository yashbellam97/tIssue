import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    return (
        <Router>
            <Header />
            <div className="container my-5">
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </div>
        </Router>
    );
}

export default App;