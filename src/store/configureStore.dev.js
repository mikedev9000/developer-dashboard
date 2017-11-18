import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from './../reducer/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import sprintDataService from '../service/sprintDataService';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), sprintDataService))
  );
}
