import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as notebookActions from '../actions/notebookActions';

class NotebookPageAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: 'thought'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.model = {
      types: [
        'thought',
        'hypothesis',
        'fact',
        'experiment'
      ]
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.actions.saveEntry(
      this.props.pageId,
      {
        type: this.state.type,
        title: this.state.title
      });
    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <select name="type" value={this.state.type} onChange={this.handleChange}>
          {this.model.types.map(type =>
            <option value={type}>{type}</option>)}
        </select>
        <input type="submit" value="Create Entry" />
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
