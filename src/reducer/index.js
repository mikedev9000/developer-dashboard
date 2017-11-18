import {combineReducers} from 'redux';
import testObj from './testReducer';
import sprint from './sprint';

const rootReducer = combineReducers({
  testObj,
  sprint
});

export default rootReducer;
