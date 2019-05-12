import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class EventForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            from: '',
            to: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addEvent(this.state);
    }


    handleChange(event) {
        console.log(event.target);
        switch (event.target.name) {
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'date':
                this.setState({ date: event.target.value });
                break;
            case 'from':
                this.setState({ from: event.target.value });
                break;
            case 'to':
                this.setState({ to: event.target.value });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Event Title: </Form.Label>
                    <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        name='title'
                        value={this.state.title} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Event Date: </Form.Label>
                    <Form.Control
                        onChange={this.handleChange}
                        type='date'
                        name='date'
                        value={this.state.date}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Event start time: </Form.Label>
                    <Form.Control
                        onChange={this.handleChange}
                        type='time'
                        name='from'
                        value={this.state.from}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Event end time: </Form.Label>
                    <Form.Control 
                        onChange={this.handleChange}
                        type='time'
                        name='from'
                        value={this.state.to}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Add Event
                </Button>
            </Form>
        );
    }

};

export default EventForm;