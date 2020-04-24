// store.js
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
/* Modules*/
import auth from './modules/auth';
import modals from './modules/modals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth,
  modals
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
