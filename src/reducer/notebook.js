import * as types from '../constant/actionTypes';

export default function notebook(state = {}, action) {
  switch(action.type) {
    case types.NOTEBOOK_CREATE_PAGE: {
      return {
        ...state,
        [action.pageId]: {
          pageId: action.pageId,
          title: action.title,
          entries: {},
          lastUpdate: new Date()
        }
      }
    }
    case types.NOTEBOOK_SAVE_ENTRY: {
      const page = state[action.pageId];
      return {
        ...state,
        [action.pageId]: {
          ...page,
          entries: {
            ...page.entries,
            [action.entry.entryId] : {
              ...action.entry,
              lastUpdate: new Date()
            }
          },
          lastUpdate: new Date()
        }
      };
    }
    default:
      return state;
  }
}
