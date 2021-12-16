import { connect } from 'react-redux';
import { getShiftsData } from '../../../redux/globalRedux';
import PhoneShift from './PhoneShift';

const mapStateToProps = (state) => ({
  rightPerson: getShiftsData(state),
});

export default connect(mapStateToProps)(PhoneShift);
