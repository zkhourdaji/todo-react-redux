import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React from 'react';
import {Route} from 'react-router-dom';

const header = (props) => (
    <Navbar bg='light'>
        <Container>
            <Nav>
                <Nav.Link href='todos'>Todos</Nav.Link>
                <Nav.Link href='events'>Events</Nav.Link>
                <Route
                        path='/todos'
                        render={() =>
                            <Nav.Link href='completed'>Completed Todos</Nav.Link>
                        }
                    />
            </Nav>
        </Container>
    </Navbar>
)

export default header;