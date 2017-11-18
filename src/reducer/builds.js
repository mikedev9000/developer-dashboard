import * as types from "./../constant/actionTypes";
import initialState from './../constant/initialState';

export default function testLoadReducer(state = initialState.builds, action) {

  switch (action.type) {
    case '_GET_FAILING_BUILDS_RECEIVED':
      return {
        ...state,
        failing: action.failing
      };
    case '_GET_RECENT_BUILDS_RECEIVED':
      return {
        ...state,
        recent: action.recent
      }
    default:
      return state;
  }

}
