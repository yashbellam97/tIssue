import React from "react";

function ProjectListItem() {
    return (
        <div className="d-flex flex-wrap justify-content-between project-list-item">
            <div className="d-flex flex-wrap mr-3">
                <p className="mr-3 project-name">Project Name</p>
                <p>3 issues</p>
            </div>
            <p>Created on 31/12/2020 by John</p>
        </div>
    );
}

export default ProjectListItem;