import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addTodoAction } from '../redux/actionsCreators'

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
        if (this.state.todo){
            this.props.addTodo(this.state.todo);
            this.setState({todo: ''});
        }
   
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

const mapDispatchToProps = (dispatch) => ({
    addTodo: (name) => dispatch(addTodoAction(name))
})

export default connect(null, mapDispatchToProps)(NewTodo);