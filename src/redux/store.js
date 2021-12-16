import { combineReducers, createStore } from 'redux';
import tripList from '../data/trips.json';

import globalReducer from './globalRedux';
import filtersReducer from './filtersRedux';
import orderReducer from './orderRedux';
// define initial state and shallow-merge initial data
const initialState = {
  trips: tripList,
  countries: {},
  regions: {},
  subregions: {},
  tags: {},
  filters: {
    searchPhrase: '',
    tags: [],
    duration: {
      from: 1,
      to: 14,
    },
  },
  order: {
    trip: null,
    email: '',
    options: {},
  },
  shifts: [
    { name: 'Amanda', start: 8, end: 12, description: '678.243.8455' },
    {
      name: 'Tobias',
      start: 12,
      end: 16,
      description: '278.443.6443',
    },
    {
      name: 'Helena',
      start: 16,
      end: 22,
      description: '167.280.3970',
    },
    {
      name: '',
      start: 22,
      end: 8,
      description: 'Now closed!',
    },
  ],
};

// define reducers
const reducers = {
  filters: filtersReducer,
  order: orderReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
