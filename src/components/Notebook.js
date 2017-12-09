import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as notebookActions from '../actions/notebookActions';
import { Col, Row } from 'react-bootstrap';
import NotebookPage from './NotebookPage';
import NotebookPageAdder from './NotebookPageAdder';


class Notebook extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col xs={2}>
          <Row><NotebookPageAdder /></Row>
          <ul>
            {Object.values(this.props.notebook).map(page => (
              <li key={page.pageId}>
                <a onClick={(event) => {
                  console.log('yay ', page);
                  event.preventDefault();
                  this.setState({
                    page
                  })
                  }}>{page.title}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={10}>
            {this.state.page && <NotebookPage pageId={this.state.page.pageId} />}
        </Col>
      </Row>
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
  Notebook);
