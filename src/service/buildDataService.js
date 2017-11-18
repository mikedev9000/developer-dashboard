import request from 'superagent';

const getFailingBuilds = (next) => {
  next({
    type: '_GET_FAILING_BUILDS_RECEIVED',
    failing: [
      {
        buildJob: 'my-build',
        latestAttempt: {
          executionNumber: 59,
          timestamp: '2017-01-01T12:00:00.000Z',
          url: 'http://jenkins/my-build/execution/59'
        },
        firstFailure: {
          executionNumber: 50,
          timestamp: '2017-01-01T12:00:00.000Z'
        }
      }
    ]
  });
};

const getRecentBuilds = (next) => {
  next({
    type: '_GET_RECENT_BUILDS_RECEIVED',
    recent: [
      {
        buildJob: 'my-other-build',
        executionNumber: 87,
        status: 'PENDING',
        url: 'http://jenkins/my-other-build/execution/87',
        timestamp: '2017-01-01T12:00:00.000Z'
      },
      {
        buildJob: 'my-other-build-2',
        executionNumber: 43,
        status: 'SUCCESS',
        url: 'http://jenkins/my-other-build-2/execution/43',
        timestamp: '2017-01-01T12:00:00.000Z'
      }
    ]
  });
};

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
      getFailingBuilds(next);
      getRecentBuilds(next);
      break;
    case '_GET_FAILING_BUILDS':
      getFailingBuilds(next);
      break;
    case '_GET_RECENT_BUILDS':
      getFailingBuilds(next);
      break;
    /*
    Do nothing if the action does not interest us
    */
    default:
      break;
  }
};

export default buildDataService;
