import { connect } from "react-redux";
import React from 'react';
import { completeTodoAction, deleteTodoAction } from "../redux/actionsCreators";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const TodoList = (props) => {
    return (
        <ListGroup className='mt-4'>
            {
                props.notCompleted.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    complete={props.complete}
                    delete={props.delete}
                />)
            }
        </ListGroup>
    );
}

const Todo = (props) => {
    return (
        <ListGroup.Item>
            {props.todo.name}
            <ButtonGroup className='ml-5'>
                <Button variant='success' onClick={() => props.complete(props.todo.id)}>Complete</Button>
                <Button variant='danger' onClick={() => props.delete(props.todo.id)}>Delete</Button>
            </ButtonGroup>
        </ListGroup.Item>
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