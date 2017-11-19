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
      
      onSuccess(res.body.issues.map(issue => ({
        id: issue.key,
        title: issue.fields.summary,
        description: issue.fields.description,
        priority: 100, //TODO - get the actual ranking from jira
        assignee: issue.fields.assignee && {
          name: issue.fields.assignee.name,
          avartarUrl: issue.fields.assignee.avatarUrls['24x24']
        },
        state: issue.fields.status.name
      })));
    });
  }

}

export default Jira;