import  * as actionNames from './actionNames';

const addTodoAction = (name) => ({
    type: actionNames.ADD_TODO,
    payload: {
        name
    }
});


const completeTodoAction = (id) => (
    {
        type: actionNames.COMPLETE_TODO,
        payload: {
            id
        }
    }
);

const deleteTodoAction = (id) => (
    {
        type: actionNames.DELETE_TODO,
        payload: {
            id
        }
    }
);

const resetStateAction = () => ({
    type: actionNames.RESET_STATE
});

const addEvent = event => ({
    type: actionNames.ADD_EVENT,
    payload: {
        event
    }
});

const addContactAction = contact => ({
    type: actionNames.ADD_CONTACT,
    payload: {
        contact
    }
});

export { 
    addTodoAction, 
    completeTodoAction, 
    deleteTodoAction, 
    resetStateAction,
    addEvent,
    addContactAction
};