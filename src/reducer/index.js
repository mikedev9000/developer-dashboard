import {combineReducers} from 'redux';
import sprint from './sprint';
import codeReviews from './codeReviews';
import builds from './builds';

const rootReducer = combineReducers({
  sprint,
  codeReviews,
  builds
});

export default rootReducer;
