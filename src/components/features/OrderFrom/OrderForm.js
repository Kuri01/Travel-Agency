import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import PropTypes from './PropTypes';

const OrderForm = ({ tripCost, options, setOrderOption }) => (
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
      {console.log(options)}
    </Col>
  </Row>
);

export default OrderForm;

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
