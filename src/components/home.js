import NewTodo from './newTodo';
import TodoList from './todoList';
import React from 'react';

const Home = () => {
    return (
        <>
            <NewTodo />
            <TodoList />
        </>
    );
};

export default Home;