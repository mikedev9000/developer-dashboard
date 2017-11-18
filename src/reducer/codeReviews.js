import * as types from "./../constant/actionTypes";
import initialState from './../constant/initialState';

export default function testLoadReducer(state=initialState.codeReviews, action){

  switch(action.type){
    case '_GET_CODE_REVIEWS_RECEIVED':
          return action.codeReviews;
    default:
      return state;
  }

}
