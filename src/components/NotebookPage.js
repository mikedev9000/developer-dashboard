import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as notebookActions from '../actions/notebookActions';
import { Col, Row } from 'react-bootstrap';
import NotebookPageEntryAdder from './NotebookPageEntryAdder';

class NotebookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // TODO - simple way to add entries
    // TODO list existing entries

    return (
      <div>
        <Row>
          {this.props.notebook[this.props.pageId].title}
        </Row>
        <Row>
          <NotebookPageEntryAdder pageId={this.props.pageId} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      notebook: state.notebook
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(notebookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  NotebookPage);
