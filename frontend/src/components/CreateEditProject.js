import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateEditProject() {
    return (
        <div>
            <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center mr-5">
                    <h2 className="mr-3">Create Project</h2>
                </div>
                <div className="d-flex flex-wrap align-items-center">
                    <Button variant="outline-secondary" className="m-1">Cancel</Button>
                    <Button variant="success" className="m-1">Create</Button>
                </div>
            </div>

            <hr className="divider" />

            <div className="d-flex justify-content-center">
                <Form id="project-form">
                    <Form.Group controlId="projectName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group controlId="projectOwner">
                        <Form.Label>Owner</Form.Label>
                        <Form.Control type="text" value="User" readOnly />
                    </Form.Group>
                    <Form.Group controlId="projectVisibility">
                        <Form.Label className="mr-3">Visibility:</Form.Label>
                        <Form.Check
                            id="public"
                            name="projectVisibility"
                            type="radio"
                            label="Public"
                            value="public"
                            inline
                        />
                        <Form.Check
                            id="private"
                            name="projectVisibility"
                            type="radio"
                            label="Private"
                            value="private"
                            inline
                        />
                    </Form.Group>
                    <Form.Group controlId="projectAdmins">
                        <Form.Label>Admins</Form.Label>
                        <Form.Control as="select" multiple custom>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="projectMembers">
                        <Form.Label>Members</Form.Label>
                        <Form.Control as="select" multiple custom>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                            <option>User</option>
                        </Form.Control>
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

export default CreateEditProject;