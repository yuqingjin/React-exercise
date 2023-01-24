// --------------------------------------------------------------------------------------
// Regular, without thunks

import { legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// export default legacy_createStore(rootReducer, {}, composeWithDevTools());

// --------------------------------------------------------------------------------------
// With Thunks

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default legacy_createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

// --------------------------------------------------------------------------------------
// General action creator
export const createAction = (type, payload) => ({ type, payload });
