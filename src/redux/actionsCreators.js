import * as actionNames from './actionNames';

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

const searchJobsAction = keyword => ({
    type: actionNames.SEARCH_JOBS,
    payload: {
        keyword
    }
});

const jobSearchResutlsAction = (json) => ({
    type: actionNames.JOB_SEARCH_RESULTS,
    payload:{
        json
    }
});

const url = 'https://jobs.github.com/positions.json?description=';
const searchJobsActionAsync = (keyword) => {
    return (dispatch, getState) => {
        fetch(url + keyword, {mode:'no-cors'})
            .then(res => res.json())
            .then(json => dispatch(jobSearchResutlsAction(json)))
    }
}

export {
    addTodoAction,
    completeTodoAction,
    deleteTodoAction,
    resetStateAction,
    addEvent,
    addContactAction,
    searchJobsAction,
    searchJobsActionAsync
};