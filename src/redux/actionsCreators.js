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

const jobSearchResutlsAction = (jobs) => ({
    type: actionNames.JOB_SEARCH_RESULTS,
    payload:{
        jobs
    }
});

const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=';
const searchJobsActionAsync = (keyword) => {
    return (dispatch, getState) => {
        fetch(url + keyword)
            .then(res => res.json())
            .then(json => dispatch(jobSearchResutlsAction(json)))
            .catch(error => console.log(error));
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