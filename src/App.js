import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import NewTodo from './NewTodo';
import TodoList from './TodoList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ''
    };
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getNewId = () => {
    const { todos } = this.state;
    return todos[todos.length - 1].id + 1;
  }

  handleNewTodo() {

    const { todos, todo } = this.state;

    this.setState({
      todos: [
        ...todos,
        {
          name: todo,
          id: todos.length === 0 ? 0 : this.getNewId()
        }
      ]
    });
  }

  handleTodoChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleDelete(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div>
        <NewTodo
          addNewTodo={this.handleNewTodo}
          todo={this.state.todo}
          handleChange={this.handleTodoChange}
        />
        <TodoList
          todos={this.props.todos}
        />
      </div>
    );
  }
}

// called everytime the store changes
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
});


const connectToStore = connect(mapStateToProps, null);

const connectedComponenet = connectToStore(App);



export default connectedComponenet;
