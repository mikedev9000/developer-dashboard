import request from 'superagent';

import issuesInCurrentSprint from './mock-data/issues_in_current_sprint.json';

const myProject = 'SCRUM';

const mockData = {
  [`/rest/api/2/search?jql=Project=${myProject} AND Sprint in openSprints()`] : issuesInCurrentSprint
}

class Jira {

  static getIssuesInCurrentSprint(onSuccess, onError) {
    request
    .post('/jira/issues')
    .send({ name: 'Manny', species: 'cat' })
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err) {
        onError(err);
        return;
      }

      onSuccess(res.data.map(issue => {
        // TODO - convert issue to generic task used by UI
      }));
    });
  }

}

export default Jira;