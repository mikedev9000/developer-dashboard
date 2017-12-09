import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as notebookActions from '../actions/notebookActions';

class NotebookPageAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.actions.createPage(this.state.title);
    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <input type="submit" value="Create Page" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(notebookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  NotebookPageAdder);
