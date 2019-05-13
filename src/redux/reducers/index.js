import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import eventsReducer from './eventsReducer';
import phonebookReducer from './phonebookReducer';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    todos: todosReducer,
    events: eventsReducer,
    phonebook: phonebookReducer,
    form: formReducer
});

export default rootReducer;