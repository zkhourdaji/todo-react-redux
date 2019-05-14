import JobSearchForm from './jobSearchForm';
import JobResults from './jobResults';
import React from 'react';
import {connect} from 'react-redux';
import {searchJobsActionAsync} from './../../redux/actionsCreators';

const Jobs = (props) => {
    return (
        <>
            <JobSearchForm searchJobs={props.searchJobs}/>
            <JobResults />
        </>
    );
   
};

const mapStateToProps = state =>({});

const mapDispatchToProps = dispatch => ({
    searchJobs: (keyword) => dispatch(searchJobsActionAsync(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
