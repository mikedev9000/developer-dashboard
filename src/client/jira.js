import request from 'superagent';

import env from  '../.env.js';


const mockData = {
  [`/rest/api/2/search?jql=Project=${env.jira.project} AND Sprint in openSprints()`] : '/client/mock-data/issues_in_current_sprint.json'
}

class Jira {

  static getIssuesInCurrentSprint(onSuccess, onError) {
    request
    .get(`/jira/rest/api/2/search`)
    .auth(env.jira.username, env.jira.password)
    .query({ jql: `Project=${env.jira.project} AND Sprint in openSprints()` })
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err) {
        onError(err);
        return;
      }

      onSuccess(res.data.map(issue => {
        // TODO - convert issue to generic task used by UI
        return issue;
      }));
    });
  }

}

export default Jira;