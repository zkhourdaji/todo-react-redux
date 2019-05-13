import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, ADD_EVENT } from './actionNames';
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

function todosReducer(todos = {}, action) {

    const { completed = [], notCompleted = [] } = todos;
    switch (action.type) {
        case ADD_TODO:
            const { name } = action.payload;
            const lastNotCompleted = notCompleted[notCompleted.length - 1];
            const newId = lastNotCompleted ? lastNotCompleted.id + 1 : 0;
            const newTodo = { name, id: newId };

            return {
                completed,
                notCompleted: [...notCompleted, newTodo]
            }
        case DELETE_TODO:
            return {
                completed: completed.filter(todo => todo.id !== action.payload.id),
                notCompleted: notCompleted.filter(todo => todo.id !== action.payload.id)
            }
        case COMPLETE_TODO:
            const { id } = action.payload;
            return {
                completed: [...completed, notCompleted.find(todo => todo.id === id)],
                notCompleted: notCompleted.filter(todo => todo.id !== id)
            }
        default:
            return todos;
    }
}

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
const rootReducer = combineReducers({
    todos: todosReducer,
    events: eventsReducer,
    form: formReducer
});
export default rootReducer;