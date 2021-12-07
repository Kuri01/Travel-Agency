import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
const OrderOptionNumber = ({
  currentValue,
  limits,
  setOptionValue,
  tripCost,
  id,
}) => {
  return (
    <div className={styles.number}>
      <input
        className={styles.inputSmall}
        type='number'
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={(event) => setOptionValue(event.currentTarget.value)}
      />
      {tripCost && currentValue ? (
        <strong>
          {formatPrice(calculateTotal(tripCost, { [id]: currentValue }))}
        </strong>
      ) : (
        ''
      )}
    </div>
  );
};

export default OrderOptionNumber;
