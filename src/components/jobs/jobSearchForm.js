import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const JobSearchForm = (props) => {

    const submit = values => {
        props.searchJobs(values.keyword);
    }
    return (
        <Form onSubmit={props.handleSubmit(submit)}>
            <Form.Group>
                <Form.Label>Keyword: </Form.Label>
                <Field className='form-control' component='input' type='text' name='keyword' />
            </Form.Group>
            <Button>Search</Button>
        </Form>
    );

};

export default reduxForm({ form: 'jobSearchForm' })(JobSearchForm)