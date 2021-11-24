/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    console.log(pattern);
    output = output.filter((trip) => pattern.test(trip.name));
  }

  // TODO - filter by duration

  if (filters.duration) {
    output = output.filter(
      (trip) =>
        filters.duration.from <= trip.days && filters.duration.to >= trip.days
    );
  }
  // TODO - filter by tags
  if (filters.tags && filters.tags.length > 0) {
    filters.tags.forEach((tag) => {
      output = output.filter((trip) => trip.tags.includes(tag));
    });
  }
  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  let filtered = trips;

  // TODO - filter trips by tripId
  filtered = filtered.filter((trip) => trip.id === tripId);
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  let filtered = trips;

  filtered = filtered.filter((trip) => trip.country.code === countryCode);

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
