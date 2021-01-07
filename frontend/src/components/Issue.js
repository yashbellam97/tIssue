import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Issue() {
    return (
        <div>
            <div className="d-flex flex-wrap align-items-end justify-content-between">
                <div className="d-flex flex-wrap align-items-end mr-5">
                    <h2 className="mr-2 mb-0">Issue Title</h2>
                    <p className="mb-1">in Project</p>
                </div>
                <Button variant="outline-primary" className="text-uppercase text-nowrap">Create New Issue</Button>
            </div>
            <hr className="divider" />
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between p-2 mb-4 issue-metadata">
                <div className="d-flex align-items-center mr-2 my-2 my-sm-0">
                    <Form.Control as="select" custom>
                        <option>Low Priority</option>
                        <option>Normal Priority</option>
                        <option>High Priority</option>
                    </Form.Control>
                </div>

                <p className="order-2 order-sm-1 mx-2 mx-sm-0 my-2 my-sm-0">Created on 31-12-2020 by John</p>

                <div className="order-1 order-sm-2 ml-2 my-2 my-sm-0">
                    <Form.Control as="select" custom>
                        <option>Open</option>
                        <option>Closed</option>
                    </Form.Control>
                </div>
            </div>
            <div className="description mb-5">
                <h3>Description</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut consectetur sodales congue.
                    In luctus est ex, ac malesuada diam lobortis a.
                    Quisque erat est, gravida vel rhoncus quis, tincidunt vitae sem.
                    Vivamus tempus ac justo auctor mollis.
                    Etiam sollicitudin turpis mi, non posuere eros pretium ac.
                    Donec sit amet leo malesuada, venenatis massa vel, eleifend dui.
                    Donec molestie, orci ac pretium laoreet, felis metus maximus orci, vitae hendrerit neque erat vitae est.
                    Maecenas posuere congue eleifend.
                    Vivamus finibus, urna a lobortis commodo, mauris augue ultrices metus, et molestie mauris ligula et mauris.
                    Cras sem justo, dignissim non porttitor id, congue vel lacus.
                    Sed convallis congue orci vel porttitor.
                    Vestibulum eleifend lectus at varius malesuada.
                    Mauris sed neque vitae turpis ultrices facilisis at non dui.
                    Maecenas dolor purus, tristique non neque quis, dapibus lacinia purus.
                    Donec accumsan eu magna ac porttitor.
                    Proin luctus sollicitudin rhoncus.
                    Cras non risus ac nisl auctor sodales.
                </p>
            </div>
            <div>
                <Form>
                    <Form.Group controlId="issueComment">
                        <Form.Control as="textarea" placeholder="Add a comment..." required />
                    </Form.Group>
                    <div className="text-center text-sm-right">
                        <Button variant="primary" type="submit">
                            Add Comment
                        </Button>
                    </div>
                    <br />
                </Form>
            </div>
            <div className="comments">
                <h3>All Comments</h3>
                <ul>
                    <li>Comment</li>
                    <li>Comment</li>
                    <li>Comment</li>
                    <li>Comment</li>
                    <li>Comment</li>
                    <li>Comment</li>
                    <li>Comment</li>
                </ul>
            </div>

        </div>
    );
}

export default Issue;