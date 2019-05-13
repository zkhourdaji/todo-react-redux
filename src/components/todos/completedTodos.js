import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CompletedTodos = (props) => {

    return (
        <ListGroup className='mt-4'>
            {props.completedTodos.map(
                completedTodo =>
                    <ListGroup.Item key={completedTodo.id}>
                        {completedTodo.name}
                        {
                            <Button
                                className='ml-5'
                                variant='danger'
                                onClick={() => props.delete(completedTodo.id)}>
                                Delete
                            </Button>
                        }
                    </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default CompletedTodos;