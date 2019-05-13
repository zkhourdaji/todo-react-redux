import React from 'react';
import {Field, reduxForm} from 'redux-form';

const PhonebookForm = (props) => {

    const submit = values => {
        console.log(values);
        props.addContact(values);
    }
    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <label>
                Name:
              <Field name='name' component='input' type='text' />
            </label>

            <label>
                Phone: 
                <Field name='phone' component='input' type='text'/>
            </label>
            
            <label>
                Email:
                <Field name='email' component='input' type='text' />
            </label>
            <button type='submit'>Add Contact</button>
        </form>
    );
};

export default reduxForm({form:'phonebook'})(PhonebookForm);