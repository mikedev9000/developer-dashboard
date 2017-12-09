import {combineReducers} from 'redux';
import sprint from './sprint';
import codeReviews from './codeReviews';
import builds from './builds';
import notebook from './notebook';

const rootReducer = combineReducers({
  sprint,
  codeReviews,
  builds,
  notebook
});

export default rootReducer;
