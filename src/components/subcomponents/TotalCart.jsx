import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TotalCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <span className="total-cart">
        <strong>TOTAL: </strong>
        {
          cartItems.length
            ? cartItems.reduce((acc, { price, qty }) => acc + price * qty, 0)
            : null
        }
      </span>
    );
  }
}

TotalCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      forEach: PropTypes.func,
      length: PropTypes.number,
    }),
  ).isRequired,
};
