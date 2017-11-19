import bitbucket from '../client/bitbucket';

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
      bitbucket.getPullRequests(codeReviews => {
        next({
          type: '_GET_CODE_REVIEWS_RECEIVED',
          codeReviews
        });
      }, err => console.log('failked to get code reviews', err));
      break;
    /*
    Do nothing if the action does not interest us
    */
    default:
      break;
  }
};

export default codeReviewDataService;
