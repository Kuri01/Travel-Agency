import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ setOptionValue }) => {
  const [startDate] = useState(new Date());
  console.log(startDate);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setOptionValue(date)}
    />
  );
};

export default OrderOptionDate;
