import React from "react";

import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';

function Project() {
    return (
        <div>
            <div className="d-flex flex-wrap align-items-end justify-content-between">
                <div className="d-flex flex-wrap align-items-center mr-5">
                    <h2 className="mr-3 mb-0">Project Title</h2>
                    <div>
                        <Form.Control as="select" custom>
                            <option>Public</option>
                            <option>Private</option>
                        </Form.Control>
                    </div>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Create New
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="">Project</Dropdown.Item>
                        <Dropdown.Item href="">Issue</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <hr className="divider" />

            <Tabs defaultActiveKey="issues">
                <Tab eventKey="issues" title="Issues">
                    <div className="my-5">
                        <ul>
                            <li>Issue</li>
                            <li>Issue</li>
                            <li>Issue</li>
                            <li>Issue</li>
                            <li>Issue</li>
                            <li>Issue</li>
                            <li>Issue</li>
                        </ul>
                    </div>
                </Tab>
                <Tab eventKey="members" title="Members">
                    <div className="my-5">
                        <ul>
                            <li>Member</li>
                            <li>Member</li>
                            <li>Member</li>
                            <li>Member</li>
                            <li>Member</li>
                            <li>Member</li>
                            <li>Member</li>
                        </ul>
                    </div>
                </Tab>
                <Tab eventKey="admins" title="Admins">
                    <div className="my-5">
                        <ul>
                            <li>Admin</li>
                            <li>Admin</li>
                            <li>Admin</li>
                            <li>Admin</li>
                            <li>Admin</li>
                            <li>Admin</li>
                            <li>Admin</li>
                        </ul>
                    </div>
                </Tab>
                <Tab eventKey="owner" title="Owner">
                    <div className="my-5">
                        <p>Owner</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Project;