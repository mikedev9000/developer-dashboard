import sprintDataService from '../service/sprintDataService';
import codeReviewDataService from '../service/codeReviewDataService';
import buildDataService from '../service/buildDataService';

import persistState from 'redux-localstorage';

export default [
  sprintDataService,
  codeReviewDataService,
  persistState(
    /**
     * This will ensure `state.mine` will be written to localStorage.
     * 
     * Data under "mine" belongs to the current user. The intent is that all
     * edits done in this UI that don't update some external system will 
     * modify state in "mine".
     * 
     * Eventually, this may get replaced with another type of storage, but this is
     * good enough for this app as it stands today.
     */
    'mine'
  ),
  buildDataService
];