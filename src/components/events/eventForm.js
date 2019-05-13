import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Field, reduxForm } from 'redux-form';

class EventForm extends Component {

    render() {
        const submit = values => this.props.addEvent(values)
        return (
            <Form onSubmit={this.props.handleSubmit(submit)}>

                <Form.Group>
                    <Form.Label>Event Title: </Form.Label>
                    <Field className='form-control' name='title' component='input' type='text' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Event Date: </Form.Label>
                    <Field className='form-control' name='date' type='date' component='input' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Event start time: </Form.Label>
                    <Field className='form-control' name='from' type='time' component='input' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Event end time: </Form.Label>
                    <Field className='form-control' name='to' type='time' component='input' />
                </Form.Group>

                <Button variant='primary' type='submit'>
                    Add Event
                </Button>
            </Form>
        );
    }

};

const EventReduxForm = reduxForm({
    form: 'eventForm'
})(EventForm);
export default EventReduxForm;