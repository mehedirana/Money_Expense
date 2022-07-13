import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { expenseReducer } from './expense/expenseReducer';

const persisConfig ={
    key: 'root',
    storage: AsyncStorage,
    expenseList: ['expenseList']

}

const middleware =[thunk];


export const store = createStore( expenseReducer, applyMiddleware(...middleware))


export const persistor = persistStore(store)