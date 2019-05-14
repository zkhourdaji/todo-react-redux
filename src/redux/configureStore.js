import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {
    todos:{
        completed: [],
        notCompleted: []
    },
    events:[],
    phonebook: [],
    jobs: []
}
const store = createStore(persistedReducer, initialState, applyMiddleware(logger, thunk));
const persistor = persistStore(store);
export {store}
export {persistor};