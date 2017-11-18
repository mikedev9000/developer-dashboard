import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './../reducer/index';
import commonMiddleware from './commonMiddleware';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
      ...commonMiddleware
    ))
  );
}
