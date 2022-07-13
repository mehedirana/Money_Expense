import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { expenseReducer } from './expense/expenseReducer';

const persisConfig = {
    key: 'root',
    storage: AsyncStorage,
    expenseList: ['expenseList']

}
const rootReducer = combineReducers({ expenseList: persistReducer(persisConfig, expenseReducer) })
const middleware = [thunk];


export const store = createStore(rootReducer, applyMiddleware(...middleware))


export const persistor = persistStore(store)