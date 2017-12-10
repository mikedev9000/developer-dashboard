import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as notebookActions from '../actions/notebookActions';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import colors from '../constant/colors';

class NotebookPageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.colorByType = {
      thought: colors.cyan,
      hypothesis: colors.yellow,
      fact: colors.green,
      experiment: colors.purple
    }
  }

  render() {
    console.log(this.props);
    const page = this.props.notebook[this.props.pageId];
    console.log(page);
    return (
      <ListGroup>
        {Object.values(page.entries).map(entry => (
          <ListGroupItem
            key={entry.entryId}
          >
            {entry.entryId} - {entry.title} - <span style={{ color: this.colorByType[entry.type] }}>{entry.type}</span>
          </ListGroupItem>
        ))}
      </ListGroup>
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
  NotebookPageList);
