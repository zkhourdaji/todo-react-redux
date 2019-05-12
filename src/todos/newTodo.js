import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addTodoAction } from '../redux/actionsCreators'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // make sure its not an empty todo
        if (this.state.todo) {
            this.props.addTodo(this.state.todo);
            this.setState({ todo: '' });
        }

    }

    handleChange(event) {
        this.setState({ todo: event.target.value })
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Group>
                    <Form.Label>Add New Todo</Form.Label>
                    <Form.Control type='text'
                        value={this.state.todo}
                        onChange={(event) => this.handleChange(event)}>
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>Add</Button>
            </Form>
        );

    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (name) => dispatch(addTodoAction(name))
})

export default connect(null, mapDispatchToProps)(NewTodo);