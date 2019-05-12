import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, RESET_STATE, ADD_EVENT } from './actionNames';

const addTodoAction = (name) => ({
    type: ADD_TODO,
    payload: {
        name
    }
});


const completeTodoAction = (id) => (
    {
        type: COMPLETE_TODO,
        payload: {
            id
        }
    }
);

const deleteTodoAction = (id) => (
    {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
);

const resetStateAction = () => ({
    type: RESET_STATE
});

const addEvent = (event) => ({
    type: ADD_EVENT,
    payload: {
        event
    }
});

export { 
    addTodoAction, 
    completeTodoAction, 
    deleteTodoAction, 
    resetStateAction,
    addEvent
};