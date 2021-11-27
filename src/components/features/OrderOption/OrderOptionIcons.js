import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({
  values,
  required,
  currentValue,
  setOptionValue,
}) => (
  <div className={styles.icon}>
    {required ? (
      ''
    ) : (
      <div value='' onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'} /> none
      </div>
    )}
    {values.length &&
      values.map((value) => (
        <div
          className={styles.icon}
          key={value.id}
          onClick={() => setOptionValue(value.id)}
        >
          {' '}
          <Icon name={value.icon} />
          {value.name} ({formatPrice(value.price)})
        </div>
      ))}
  </div>
);
export default OrderOptionIcons;
