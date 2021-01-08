import React from "react";

function IssueListItem() {
    return (
        <div className="d-flex flex-wrap justify-content-between issue-list-item">
            <div className="d-flex flex-wrap mr-3">
                <p className="mr-3 issue-title">Issue Title</p>
                <p>Open • Normal priority</p>
            </div>
            <p>Created on 31/12/2020 by John</p>
        </div>
    );
}

export default IssueListItem;