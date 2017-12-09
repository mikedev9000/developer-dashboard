import request from 'superagent';

import env from  '../.env.js';

class Bamboo {

  static getFailingBuilds(onSuccess, onError) {
    if(!env.bamboo.enabled) {
      return;
    }
    request
    .get('/bamboo/rest/api/5.5.0/result')
    .query({
      buildstate: 'Failed'
    })
    .auth(env.bamboo.username, env.bamboo.password)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err) {
        onError(err);
        return;
      }

      onSuccess(res.body.results.results.map(result => ({
        id: result.key,
        state: result.state,
        buildJob: `{result.planName}`,
        latestAttempt: {
          executionNumber: 59,
          timestamp: result.buildStartedTime,
          url: `${env.bamboo.baseUrl}/${result.key.replace(/-/g, '')}`
        },
        firstFailure: null // TODO -looks like we have to do further requests to get first failure
      })));
    });
  }

}

export default Bamboo;
