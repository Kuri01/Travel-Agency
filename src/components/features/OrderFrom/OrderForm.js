import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice.js';
import { calculateTotal } from '../../../utils/calculateTotal.js';
import settings from '../../../data/settings.js';
const sendOrder = (options, tripCost, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    countryCode,
  };

  if (payload.contact !== '' && payload.name !== '' && payload !== '') {
    console.log('rozne od null!!!!!!!!!!!!!!!!!!!!!!');
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ tripCost, options, setOrderOption, countryCode }) => (
  <Row>
    {pricing.length ? (
      pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption
            key={option.id}
            {...option}
            currentValue={options[option.id]}
            setOrderOption={setOrderOption}
            tripCost={tripCost}
          />
        </Col>
      ))
    ) : (
      <p>Sorry, don't see options :(</p>
    )}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} tripOptions={options} />
    </Col>
    {console.log(options)}
    {options.contact !== '' &&
    options.startDate !== '' &&
    options.name !== '' ? (
      <button onClick={() => sendOrder(options, tripCost, countryCode)}>
        Order now!
      </button>
    ) : (
      <p>Fulfill form!</p>
    )}
  </Row>
);

export default OrderForm;

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  // options: PropTypes.object,
};
