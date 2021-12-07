import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({ setOptionValue, currentValue }) => {
  return (
    <input
      type='text'
      value={currentValue}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    />
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
