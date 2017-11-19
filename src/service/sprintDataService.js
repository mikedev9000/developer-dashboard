import jira from '../client/jira';

/**
 * TODO - make this service load data from an API like this example: http://www.sohamkamani.com/blog/2016/06/05/redux-apis/ 
 */
const sprintDataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action);

  switch (action.type) {
  case '_INITIALIZE_STATE':
    // falls through
  case '_GET_SPRINT_TASKS':
    jira.getIssuesInCurrentSprint((tasks) => {
      next({
        type: '_GET_SPRINT_TASKS_RECEIVED',
        tasks
      });
    }, (err) => {
      console.log('ruh roh, failed to get print tasks', err);
    });
    break;
  /*
  Do nothing if the action does not interest us
  */
  default:
    break;
  }
};

export default sprintDataService;
