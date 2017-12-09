import * as types from "./../constant/actionTypes";
import uuid from 'uuid/v4';

export function createPage(title){
  return{
    type:types.NOTEBOOK_CREATE_PAGE,
    pageId: uuid(),
    title
  };
}

export function saveEntry(pageId, entry) {
  return {
    type: types.NOTEBOOK_SAVE_ENTRY,
    pageId,
    entry: {
      entryId: uuid(),
      ...entry
    }
  };
}
