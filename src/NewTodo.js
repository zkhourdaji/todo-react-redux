import { connect } from 'react-redux';
import React, { Component } from 'react';

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
        this.props.addTodo(this.state.todo);
    }

    handleChange(event) {
        this.setState({ todo: event.target.value })
    }

    render() {
        return (
            <form
                onSubmit={(event) => this.handleSubmit(event)}
            >
                <input
                    type='text'
                    value={this.state.todo}
                    onChange={(event) => this.handleChange(event)}
                />
                <button>
                    Add
          </button>
            </form>
        );

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (name) => {
            dispatch(
                {
                    type: 'ADD_TODO',
                    payload: {
                        name
                    }
                }
            );
        }
    };
};

export default connect(null, mapDispatchToProps)(NewTodo);