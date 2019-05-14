import React from 'react';
import { Field, reduxForm } from 'redux-form'


const JobSearchForm = (props) => {

    const submit = values => {
        props.searchJobs(values);
    }
    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <label>Keyword:
            <Field component='input' type='text' name='description' />
            </label>
            <button>Search</button>
        </form>
    );

};

export default reduxForm({ form: 'jobSearchForm' })(JobSearchForm)