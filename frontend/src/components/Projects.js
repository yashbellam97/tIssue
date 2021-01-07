import React from "react";

import Button from 'react-bootstrap/Button';

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
                <ul>
                    <li>Project</li>
                    <li>Project</li>
                    <li>Project</li>
                    <li>Project</li>
                    <li>Project</li>
                    <li>Project</li>
                    <li>Project</li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;