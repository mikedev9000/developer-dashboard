import React from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

class PriorityListWithRelationships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.listItems = {};
  }

  render() {
    return (
      <div>
        <ListGroup>
          {Object.values(this.props.nodes).map((key, node) =>(
            <ListGroupItem
              ref={(item) => this.listItems[key] = item}
            >
              {node}
            </ListGroupItem>
          ))}

          <ListGroupItem ref={2}>2</ListGroupItem>
          <ListGroupItem ref={3}>3</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default PriorityListWithRelationships;
