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

            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-12">
                        <img src={logo} alt="" />
                        <h1>
                            Welcome to React + Redux Starter Kit hahaha
                </h1>
                    </div>
                </div>
                <div className="row">
                    <WorkQueue items={this.props.sprint.tasks} />
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
        sprint: state.sprint
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