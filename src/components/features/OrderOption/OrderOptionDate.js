import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ setOptionValue }) => {
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);

  const handleDate = (date) => {
    setOptionValue(date);
    setStartDate(date);
  };
  return <DatePicker selected={startDate} onChange={handleDate} />;
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
