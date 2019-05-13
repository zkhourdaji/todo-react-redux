import {ADD_EVENT} from './../actionNames';

function eventsReducer(events = [], action) {
    switch (action.type) {
        case ADD_EVENT:
            const lastEvent = events[events.length - 1];
            const newId = lastEvent ? lastEvent.id + 1 : 0;
            const event = { ...action.payload.event, id: newId };
            return [...events, event];
        default:
            return events;
    }
}

export default eventsReducer;