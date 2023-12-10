import { combineReducers } from 'redux';

import testReducer from './test';

// We pass to the combineReducers an object which has the shape of the desired state
// here, we'll have compartment (property) trucks and user in the state
// we associate to each compartment the reducer that handles this part of the state
const rootReducer = combineReducers({
  test: testReducer,

});

export default rootReducer;
