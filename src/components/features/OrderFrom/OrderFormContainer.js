import { connect } from 'react-redux';
import { getOrderOptions } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';
import { setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = {
  setOrderOption,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
