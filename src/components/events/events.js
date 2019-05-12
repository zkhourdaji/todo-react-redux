import React from 'react';
import EventForm from './eventForm';
import EventsList from './eventList';
import {connect} from 'react-redux';
import {addEvent} from './../../redux/actionsCreators'

const Events = (props) => {
    return (
        <>
            <EventForm addEvent={props.addEvent} />
            <EventsList events={props.events}  />
        </>
    );
};

const mapStateToProps = (state) => ({
    events: state.events
});

const mapDispatchToProps = (dispatch) => ({
    addEvent: (event) => dispatch(addEvent(event))
});

const EventsWithRedux = connect(mapStateToProps, mapDispatchToProps)(Events);
export default EventsWithRedux;