import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({ setOptionValue }) => {
  const [value] = useState('');

  return (
    <input
      type='text'
      value={value}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    />
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
