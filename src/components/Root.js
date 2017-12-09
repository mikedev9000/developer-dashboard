import React from "react";
import logo from './../img/welcome.png';
import './../styles/main.scss';

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
                  <ul>
                    <li><Link to="/work-queue">WorkQueue</Link></li>
                    <li><Link to="/notebook">Notebook</Link></li>
                  </ul>

                  <hr/>

                  <Route exact path="/" component={Home}/>
                  <Route path="/work-queue" component={WorkQueue}/>
                  <Route path="/notebook" component={Notebook}/>
                </div>
              </Router>
            </div>

        );
    }
}

export default Root;
