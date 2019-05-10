import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux'



/**
 * state = 
 * {
 *  todo: 'string'
 *  todos: []
 * }
 * @param {*} state 
 * @param {*} action 
 */
function myReducer(state, action) {
    console.log(state);
    switch (action.type) {
        case 'ADD_TODO':
            const { name } = action.payload;
            const id = state.todos.length + 1;
            const newTodo = { name, id };
            return {
                todos: [...state.todos, newTodo]
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        default:
            return state;
    }
}

const initialState = {
    todo: '',
    todos: []
}
const store = createStore(myReducer, initialState);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
