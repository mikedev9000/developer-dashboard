import React,{Component,PropTypes} from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

/**
 * This is a view of _all_ work items waiting for my attention.
 */
const WorkQueue = ({ sprintTasks, codeReviews, buildsFailing }) => (
  <div className="work-queue">
    <ListGroup>
      {buildsFailing.map(item => 
        <div className="failing-build">
          <ListGroupItem key={`buildFailing-${item.buildJob}-${item.firstFailure.executionNumber}`}>
            Failing Builds: {item.buildJob} - {item.firstFailure.executionNumber}
          </ListGroupItem>
        </div>
      )}

      {codeReviews.map(item => 
        <ListGroupItem key={`codeReview-${item.id}`}>
         Code Review: {item.repository} - {item.title} - {item.sourceBranch} to {item.targetBranch}
        </ListGroupItem>
      )}

      {sprintTasks.map(item => 
        <div key={`sprintTask-${item.id}`} className={item.state.isClosed ? 'item-closed' : 'item-open'}>
          <ListGroupItem>
            <img src={item.type.iconUrl} />
            <a href={item.link} target="__blank">{item.id}</a>
            {item.title}
          </ListGroupItem>
        </div>
      )}
    </ListGroup>
  </div>
);

export default WorkQueue;
