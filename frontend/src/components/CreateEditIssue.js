import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateEditIssue() {
    return (
        <div>
            <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center mr-5">
                    <h2 className="mr-3">Create Issue</h2>
                </div>
                <div className="d-flex flex-wrap align-items-center">
                    <Button variant="outline-secondary" className="m-1">Cancel</Button>
                    <Button variant="success" className="m-1">Create</Button>
                </div>
            </div>

            <hr className="divider" />

            <div className="d-flex justify-content-center">
                <Form id="project-form">
                    <Form.Group controlId="issueTitle">
                        <Form.Label>Issue Title</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group controlId="issuePriority">
                        <Form.Label className="mr-3">Priority:</Form.Label>
                        <Form.Check
                            id="low"
                            name="issuePriority"
                            type="radio"
                            label="Low"
                            value="low"
                            inline
                        />
                        <Form.Check
                            id="normal"
                            name="issuePriority"
                            type="radio"
                            label="Normal"
                            value="normal"
                            inline
                        />
                        <Form.Check
                            id="high"
                            name="issuePriority"
                            type="radio"
                            label="High"
                            value="high"
                            inline
                        />
                    </Form.Group>
                    <Form.Group controlId="issueStatus">
                        <Form.Label className="mr-3">Status:</Form.Label>
                        <Form.Check
                            id="open"
                            name="issueStatus"
                            type="radio"
                            label="Open"
                            value="open"
                            inline
                        />
                        <Form.Check
                            id="closed"
                            name="issueStatus"
                            type="radio"
                            label="Closed"
                            value="closed"
                            inline
                        />
                    </Form.Group>
                    <Form.Group controlId="issueDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Add description..." />
                    </Form.Group>

                    <br />

                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                        <Button variant="outline-secondary" className="m-2">Cancel</Button>
                        <Button variant="success" className="m-2">Create</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default CreateEditIssue;