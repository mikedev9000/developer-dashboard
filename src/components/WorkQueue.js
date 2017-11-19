import React,{Component,PropTypes} from "react";
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';

/**
 * This is a view of _all_ work items waiting for my attention.
 */
const WorkQueue = ({ sprintTasks, codeReviews, buildsFailing }) => (
  <div className="work-queue">
    <ListGroup>
      {buildsFailing.map(item => 
        <div className="failing-build" key={`buildFailing-${item.buildJob}-${item.firstFailure.executionNumber}`}>
          <ListGroupItem>
            Failing Builds: {item.buildJob} - {item.firstFailure.executionNumber}
          </ListGroupItem>
        </div>
      )}

      {codeReviews.map(item => 
        <ListGroupItem key={`codeReview-${item.id}`}>
         Code Review: {item.repository} - {item.title} - {item.sourceBranch} to {item.targetBranch}
        </ListGroupItem>
      )}

      {sprintTasks
        .filter(item => !item.assignee || item.assignee.isMe)
        .filter(item => !item.state.isClosed)
        .map(item => 
          <div key={`sprintTask-${item.id}`} className={item.state.isClosed ? 'item-closed' : 'item-open'}>
            <ListGroupItem>
              <Row>
                <Col xs="1">
                  <img src={item.type.iconUrl} />
                </Col>
                <Col xs="10" style={{'text-align' : 'left'}}>
                  <a href={item.link} target="__blank">{item.id}</a> {item.title}
                </Col>
                <Col xs="1">
                  {item.assignee && <img src={item.assignee.avatarUrl} />}
                </Col>
              </Row>
            </ListGroupItem>
          </div>
        )}
    </ListGroup>
  </div>
);

export default WorkQueue;
