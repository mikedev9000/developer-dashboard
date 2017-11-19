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
    next({
      type: '_GET_SPRINT_TASKS_RECEIVED',
      tasks: [
        {
          id: 'XYZ-001',
          title: 'Make toast',
          description: 'Everybody likes toast, so just build this feature already!',
          priority: 100,
          assignee: 'mrmeseeks',
          state: 'IN_PROGRESS'
        },
        {
          id: 'XYZ-002',
          title: 'Buy butter',
          description: 'Now that I have toast, I just realized that it needs butter. Doh!',
          priority: 50,
          assignee: 'mikedev9000',
          state: 'NOT_STARTED'
        },
        {
          id: 'XYZ-003',
          title: 'drink coffee',
          description: '',
          priority: 10,
          assignee: 'mikedev9000',
          state: 'COMPLETED'
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

export default sprintDataService;
