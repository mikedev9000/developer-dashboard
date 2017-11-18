import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from './../actions/testActions';
import logo from './../img/welcome.png';
import './../styles/main.scss';

import WorkQueue from './WorkQueue';

class Root extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this._initRoot();
        this.state = {};
    }

    /**
     *
     * @private
     */
    _initRoot() {
        //bind custom function here
    }

    /**
     * Life Cycle function - componentWillMount
     */
    componentWillMount() {
    }

    /**
     * Life Cycle function - componentDidMount
     */
    componentDidMount() {
    }

    /**
     * Life Cycle function - componentWillReceiveProps
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
    }

    /**
     * Life Cycle function - shouldComponentUpdate
     * @param newProps
     * @param newState
     * @returns {boolean}
     */
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    /**
     * Life Cycle function - componentWillUpdate
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate(nextProps, nextState) {
    }

    /**
     * Life Cycle function - componentDidUpdate
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
    }

    /**
     * Life Cycle function - componentWillUnmount
     */
    componentWillUnmount() {
    }

    /**
     * Life Cycle function - render
     * @returns {XML}
     */
    render() {
        return (

            <div className='container'>
                <div className="row">
                    <WorkQueue 
                        sprintTasks={this.props.sprintTasks}
                        codeReviews={this.props.codeReviews}
                        buildsFailing={this.props.buildsFailing}
                    />
                </div>
            </div>

        );
    }
}

/**
 *
 * @type {{}}
 */
Root.propTypes = {};

/**
 *
 * @type {{}}
 */
Root.defaultProps = {};

/**
 *
 * @param state
 * @returns {{state: *}}
 */
function mapStateToProps(state) {
    return {
        state: state,
        message: state.testObj,
        sprintTasks: state.sprint.tasks,
        codeReviews: state.codeReviews,
        buildsFailing: state.builds.failing,
        buildsRecent: state.builds.recent
    };
}

/**
 *
 * @param dispatch
 * @returns {{actions: *}}
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(testActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    Root);