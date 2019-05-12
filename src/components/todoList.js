import { connect } from "react-redux";
import React from 'react';
import { completeTodoAction, deleteTodoAction } from "../redux/actionsCreators";

const TodoList = (props) => {
    return (
        <ul>
            {
                props.notCompleted.map((todo) => <Todo
                    key={todo.id}
                    todo={todo}
                    complete={props.complete}
                    delete={props.delete}
                />)
            }
        </ul>
    );
}

const Todo = (props) => {
    return (
        <li>
            {props.todo.name}
            <button onClick={() => props.complete(props.todo.id)}>Complete</button>
            <button onClick={() => props.delete(props.todo.id)}>Delete</button>
        </li>
    )
}

const mapStateToProps = (state) => ({
    notCompleted: state.todos.notCompleted
});

const mapDispatchToProps = (dispatch) => ({
    delete: (id) => dispatch(deleteTodoAction(id)),
    complete: (id) => dispatch(completeTodoAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);