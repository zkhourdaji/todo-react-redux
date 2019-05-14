const jobsReducer = (jobs =[], action) => {
    switch(action.type){
        case 'SEARCH_JOBS':
            return action.payload.jobs;
        default:
            return jobs;
    }
}

export default jobsReducer;