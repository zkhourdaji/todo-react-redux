import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const EventsList = (props) => {
    return (
        <ListGroup className='mt-3'>
            {
                props.events.map(event =>
                    <ListGroup.Item
                        key={event.id}
                    >
                        <strong>{event.title}</strong> Date: {event.date} Time: {event.from}-{event.to}
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    );
}

export default EventsList;