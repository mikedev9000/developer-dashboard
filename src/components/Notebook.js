import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as notebookActions from '../actions/notebookActions';

const Notebook = () => (
  <div>Notebook yeah</div>
);

function mapStateToProps(state) {
  return {
      sprintTasks: state.sprint.tasks,
      codeReviews: state.codeReviews,
      buildsFailing: state.builds.failing,
      buildsRecent: state.builds.recent
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(notebookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Notebook);
