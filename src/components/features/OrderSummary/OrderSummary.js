// import styles from './OrderSummary';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({ tripCost, tripOptions }) => (
  <h2 className={styles.component}>
    Total: <strong>{formatPrice(calculateTotal(tripCost, tripOptions))}</strong>
  </h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
};

export default OrderSummary;
