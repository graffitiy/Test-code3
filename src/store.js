import thunk from 'redux-thunk';
import reducer from './reducer';

const { createStore, applyMiddleware } = require('redux');

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
