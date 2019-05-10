import { connect } from "react-redux";
import React from 'react';

const TodoList = (props) => {
    return (
        <ul>
            {
                props.todos.map((todo) => <Todo key={todo.id} todo={todo} delete={props.delete} />)
            }
        </ul>
    );
}

const Todo = (props) => {
    return (
        <li>
            {props.todo.name}
            <button onClick={() => props.delete(props.todo.id)}>Delete</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch({
                type: 'DELETE_TODO',
                payload:{
                    id: id
                }
            });
        }
    }
}
export default connect(null, mapDispatchToProps)(TodoList);