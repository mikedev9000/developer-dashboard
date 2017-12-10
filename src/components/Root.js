import React from "react";
import logo from './../img/welcome.png';
import './../styles/main.scss';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import WorkQueue from './WorkQueue';
import Home from './Home';
import Notebook from './Notebook';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Root extends React.Component {

  /**
   * Life Cycle function - render
   * @returns {XML}
   */
  render() {
    return (

      <div className='container'>

        <Router>
          <div>
            <Navbar>
              <Nav>
                <NavItem eventKey={1}>
                  <Link to="/work-queue">WorkQueue</Link>
                </NavItem>
                <NavItem eventKey={2}>
                  <Link to="/notebook">Notebook</Link>
                </NavItem>
              </Nav>
            </Navbar>

            <Route exact path="/" component={Home} />
            <Route path="/work-queue" component={WorkQueue} />
            <Route path="/notebook" component={Notebook} />
          </div>
        </Router>
      </div>

    );
  }
}

export default Root;
