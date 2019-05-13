import NewTodo from './todos/newTodo';
import TodoList from './todos/todoList';

import React from 'react';

const Home = () => {
    return (
        <React.Fragment>
            <NewTodo />
            <TodoList />
        </React.Fragment>
    );
};

export default Home;