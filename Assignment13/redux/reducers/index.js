import userReducer from './userReducer';
import { combineReducers, Reducer } from 'redux';

// Simple root reducer
// Map each slice of state name to its reducer

export default combineReducers({ user: userReducer });
