import request from 'superagent';

/**
 * TODO - make this service load data from an API like this example: http://www.sohamkamani.com/blog/2016/06/05/redux-apis/ 
 */
const buildDataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action);

  switch (action.type) {
    case '_INITIALIZE_STATE':
    // falls through
    case '_GET_FAILING_BUILDS':
      next({
        type: '_GET_FAILING_BUILDS_RECEIVED',
        failing: [
          {
            buildJob: 'my-build',
            executionNumber: 59,
            failingSince: 50,
            url: 'http://jenkins/my-build/execution/59'
          }
        ]
      });
      break;
    /*
    Do nothing if the action does not interest us
    */
    default:
      break;
  }
};

export default buildDataService;
