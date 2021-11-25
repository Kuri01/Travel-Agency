// import styles from './OrderSummary';
import React from 'react';
import styles from './OrderSummary.module.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({ tripCost, tripOptions }) => (
  <h2 className={styles.component}>
    Total: <strong>{formatPrice(calculateTotal(tripCost, tripOptions))}</strong>
  </h2>
);

export default OrderSummary;
