import NewTodo from '../todos/newTodo';
import TodoList from '../todos/todoList';
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