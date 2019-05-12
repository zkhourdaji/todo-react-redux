import React from 'react';

const CompletedTodos = (props) => {

    return (
        <ul>
            {props.completedTodos.map(
                completedTodo => 
                <li key={completedTodo.id}
                >
                    {completedTodo.name}
                    {<button onClick={() => props.delete(completedTodo.id)}>Delete</button>}
                </li>
            )}
        </ul>
    );
};

export default CompletedTodos;