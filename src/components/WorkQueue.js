import React,{Component,PropTypes} from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

/**
 * This is a view of _all_ work items waiting for my attention.
 */
const WorkQueue = ({ sprintTasks, codeReviews, buildsFailing }) => (
  <div>
    <h1>Work Queue</h1>
    <ListGroup>

      {buildsFailing.map(item => 
        <ListGroupItem key={`buildFailing-${item.buildJob}-${item.firstFailure.executionNumber}`}>
          Failing Builds: {item.buildJob} - {item.firstFailure.executionNumber}
        </ListGroupItem>
      )}

      {codeReviews.map(item => 
        <ListGroupItem key={`codeReview-${item.id}`}>
          Code Review: {item.repository} - {item.title} - {item.sourceBranch} to {item.targetBranch}
        </ListGroupItem>
      )}

      {sprintTasks.map(item => 
        <ListGroupItem key={`sprintTask-${item.id}`}>
          SprintTask: {item.id} - {item.title}
        </ListGroupItem>
      )}
    </ListGroup>
  </div>
);

export default WorkQueue;
