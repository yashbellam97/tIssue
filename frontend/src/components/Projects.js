import React from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import ProjectListItem from "./ProjectListItem";

function Projects() {
    return (
        <div>
            <div className="d-flex flex-wrap align-items-end justify-content-between">
                <div className="d-flex flex-wrap align-items-center mr-5">
                    <h2 className="mr-3 mb-0">Projects</h2>
                </div>
                <Button variant="success" className="text-nowrap">Create New Project</Button>
            </div>

            <hr className="divider" />

            <div className="projects">
                <ListGroup>
                    <ListGroup.Item action onClick={() => console.log("Pressed")}>
                        <ProjectListItem />
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => console.log("Pressed")}>
                        <ProjectListItem />
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => console.log("Pressed")}>
                        <ProjectListItem />
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => console.log("Pressed")}>
                        <ProjectListItem />
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}

export default Projects;