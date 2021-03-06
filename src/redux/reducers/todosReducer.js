import {ADD_TODO, DELETE_TODO, COMPLETE_TODO} from './../actionNames';


function todosReducer(todos = {}, action) {
    const { completed = [], notCompleted = [] } = todos;
    switch (action.type) {
        case ADD_TODO:
            const { name } = action.payload;
            const lastNotCompleted = notCompleted[notCompleted.length - 1];
            const newId = lastNotCompleted ? lastNotCompleted.id + 1 : 0;
            const newTodo = { name, id: newId };

            return {
                completed,
                notCompleted: [...notCompleted, newTodo]
            }
        case DELETE_TODO:
            return {
                completed: completed.filter(todo => todo.id !== action.payload.id),
                notCompleted: notCompleted.filter(todo => todo.id !== action.payload.id)
            }
        case COMPLETE_TODO:
            const { id } = action.payload;
            return {
                completed: [...completed, notCompleted.find(todo => todo.id === id)],
                notCompleted: notCompleted.filter(todo => todo.id !== id)
            }
        default:
            return todos;
    }
};


export default todosReducer;