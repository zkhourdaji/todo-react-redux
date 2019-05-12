import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';



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
    events:[]
}
const store = createStore(persistedReducer, initialState, applyMiddleware(logger));
const persistor = persistStore(store);
export {store}
export {persistor};