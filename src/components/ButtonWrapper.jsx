'use client';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';
import { reset } from '@/redux/cartSlice';
import axios from 'axios';
import { APP_URL } from '@/lib/url';

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, createOrder }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const style = { layout: 'vertical' };

  console.log(amount);
  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className='spinner' />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            const shipping = details.purchase_units[0].shipping;
            createOrder({
              customer: shipping.name.full_name,
              address: shipping.address.address_line_1,
              total: amount,
              method: 1,
            });
          });
        }}
      />
    </>
  );
};

export default ButtonWrapper;
