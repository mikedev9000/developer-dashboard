import React,{Component,PropTypes} from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

/**
 * This is a view of _all_ work items waiting for my attention.
 */
const WorkQueue = ({ items }) => (
  <div>
    <h1>Work Queue</h1>
    <ListGroup>
      {items.map(item => 
        <ListGroupItem key={item.id}>
          {item.id} - {item.title}
        </ListGroupItem>
      )}
    </ListGroup>
  </div>
);

export default WorkQueue;
