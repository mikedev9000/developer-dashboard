import request from 'superagent';

/**
 * TODO - make this service load data from an API like this example: http://www.sohamkamani.com/blog/2016/06/05/redux-apis/ 
 */
const codeReviewDataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action);

  switch (action.type) {
    case '_INITIALIZE_STATE':
    // falls through
    case '_GET_CODE_REVIEWS':
      next({
        type: '_GET_CODE_REVIEWS_RECEIVED',
        codeReviews: [
          {
            id: 'my-project/my-repo/1',
            title: 'XYZ-001 toaster frame',
            sourceBranch: 'feature/XYZ-001-toaster-frame',
            targetBranch: 'develop',
            repository: 'my-project/my-repo',
            url: 'https://github.com/my-project/my-repo/pulls/1'
          },
          {
            id: 'my-project/my-repo/2',
            title: 'XYZ-001 power cord for toaster',
            sourceBranch: 'feature/XYZ-001-toaster-power-chord',
            targetBranch: 'develop',
            repository: 'my-project/my-repo',
            url: 'https://github.com/my-project/my-repo/pulls/2'
          },
          {
            id: 'my-project/my-repo/3',
            title: 'XYZ-001 toaster heating elements',
            sourceBranch: 'feature/XYZ-001-toaster-heating-elements',
            targetBranch: 'develop',
            repository: 'my-project/my-repo',
            url: 'https://github.com/my-project/my-repo/pulls/3'
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

export default codeReviewDataService;
