import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
const OrderForm = ({ tripCost, options }) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} tripOptions={options} />
    </Col>
  </Row>
);

export default OrderForm;

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
