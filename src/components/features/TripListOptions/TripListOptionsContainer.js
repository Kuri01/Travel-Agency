import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeDurationTimeFrom,
  changeDurationTimeTo,
  addFilterTag,
  deleteFilterTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase)),
//   // TODO - add more dispatchers for other filters
//   changeDurationTimeFrom: (duration) =>
//     dispatch(changeDurationTimeFrom(duration)),
// });

const mapDispatchToProps = {
  changeSearchPhrase,
  // TODO - add more dispatchers for other filters
  changeDurationTimeFrom,
  changeDurationTimeTo,
  addFilterTag,
  deleteFilterTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
