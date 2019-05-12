import React from 'react';
import { Component } from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Event Title:
                        <input type='text' name='title' onChange={this.handleChange} value={this.state.title} />
                </label>
                <br />
                <label>
                    Event Date:
                        <input type='date' name='date' onChange={this.handleChange} value={this.state.date} />
                </label>
                <br />
                <label>
                    Event start time:
                        <input type='time' name='from' onChange={this.handleChange} value={this.state.from} />
                </label>
                <br />
                <label>
                    Event end time:
                        <input type='time' name='to' onChange={this.handleChange} value={this.state.to} />
                </label>
                <br />
                <button>Add Event</button>
            </form >
        );
    }

};

export default EventForm;