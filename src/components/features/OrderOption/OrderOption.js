import React from 'react';
import styles from './OrderOption.module.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({ name, type, currentValue, tripCost, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  const { id, setOrderOption } = otherProps;

  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          name={name}
          currentValue={currentValue}
          tripCost={tripCost}
          {...otherProps}
          setOptionValue={(value) => setOrderOption({ [id]: value })}
        />
      </div>
    );
  }
};

export default OrderOption;
