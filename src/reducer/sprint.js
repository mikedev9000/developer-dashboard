import * as types from "./../constant/actionTypes";
import initialState from './../constant/initialState';

const haha = {
  foo: 'bar'
};

const oops = {
  ...haha,
  yay: 'yoy'
}

export default function testLoadReducer(state=initialState.sprint, action){

  switch(action.type){
    case '_GET_SPRINT_TASKS_RECEIVED':
          return {
            ...state,
            tasks: action.tasks
          };
    default:
      return state;
  }

}
