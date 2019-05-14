import {  JOB_SEARCH_RESULTS } from './../actionNames';

const jobsReducer = (jobs = [], action) => {
    switch (action.type) {
        case JOB_SEARCH_RESULTS:
            return action.payload.jobs;
        default:
            return jobs;
    }
}

export default jobsReducer;