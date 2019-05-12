import React from 'react';

const EventsList = (props) => {
    return (
        <ul>
            {props.events.map(event => <li key={event.id}>{event.title}</li>)}
        </ul>
    );
}

export default EventsList;