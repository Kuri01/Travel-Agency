/* SELECTORS */
export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const ADD_FILTER_TAG = createActionName('ADD_FILTER_TAG');
export const DELETE_FILTER_TAG = createActionName('DELETE_FILTER_TAG');
// action creators
export const changeSearchPhrase = (payload) => ({
  payload,
  type: CHANGE_PHRASE,
});
export const changeDurationTimeFrom = (payload) => ({
  payload,
  type: CHANGE_DURATION_FROM,
});
export const changeDurationTimeTo = (payload) => ({
  payload,
  type: CHANGE_DURATION_TO,
});
export const addFilterTag = (payload) => ({
  payload,
  type: ADD_FILTER_TAG,
});
export const deleteFilterTag = (payload) => ({
  payload,
  type: DELETE_FILTER_TAG,
});
// TODO - add other action creators

// reducer
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };
    case ADD_FILTER_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };

    case DELETE_FILTER_TAG:
      const index = statePart.tags.indexOf(action.payload);
      statePart.tags.splice(index, 1);
      return {
        ...statePart,
        tags: [...statePart.tags],
      };

    // TODO - handle other action types
    default:
      return statePart;
  }
}
