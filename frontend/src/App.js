import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Projects from "./components/Projects";
import Project from "./components/Project";
import CreateEditProject from "./components/CreateEditProject";
import Issue from "./components/Issue";
import CreateEditIssue from "./components/CreateEditIssue";

function App() {
    return (
        <Router>
            <Header />
            <div className="container my-5">
                <Route exact path="/" component={Projects} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:id" component={Project} />
                <Route exact path="/projects/create" component={CreateEditProject} />
                <Route exact path="/issues/:id" component={Issue} />
                <Route exact path="/issues/create" component={CreateEditIssue} />
            </div>
        </Router>
    );
}

export default App;