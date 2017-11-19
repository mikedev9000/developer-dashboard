import request from 'superagent';

import env from  '../.env.js';

class Bitbucket {

  static getPullRequests(onSuccess, onError) {
    request
    .get('/bitbucket/rest/api/1.0//dashboard/pull-requests')
    .query({
      state: 'OPEN',
      order: 'OLDEST'
    })
    .auth(env.bitbucket.username, env.bitbucket.password)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err) {
        onError(err);
        return;
      }

      onSuccess(res.body.values.map(pullRequest => ({
        id: pullRequest.id,
        title: pullRequest.title,
        sourceBranch: pullRequest.fromRef.id.replace('refs/heads', ''),
        targetBranch: pullRequest.toRef.id.replace('refs/heads', ''),
        repository: pullRequest.toRef.repository.slug,
        link: pullRequest.links.self[0].href
      })));
    });
  }

}

export default Bitbucket;