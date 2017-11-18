import {combineReducers} from 'redux';
import testObj from './testReducer';
import sprint from './sprint';
import codeReviews from './codeReviews';
import builds from './builds';

const rootReducer = combineReducers({
  testObj,
  sprint,
  codeReviews,
  builds
});

export default rootReducer;
