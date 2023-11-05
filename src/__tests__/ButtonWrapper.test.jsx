// ButtonWrapper.test.jsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import ButtonWrapper from '@/components/ButtonWrapper';

  jest.mock('@paypal/react-paypal-js', () => ({
    usePayPalScriptReducer: jest.fn(() => [
      { isPending: false, isResolved: true }, 
      jest.fn(), 
    ]),
    PayPalButtons: jest.fn(() => <div>Mock Buttons</div>)  
  }));

describe('ButtonWrapper', () => {

  it('renders correctly', () => {
    const { getByText } = render(<ButtonWrapper />);
    expect(getByText('Mock Buttons')).toBeInTheDocument();
  });

  it('calls createOrder when approved', () => {
    const createOrder = jest.fn();
    PayPalButtons.mockImplementation(({ onApprove }) => {
      onApprove();  
      return <div>Mock Buttons</div>
    });

    render(<ButtonWrapper createOrder={createOrder} />);   
    expect(createOrder).toHaveBeenCalled(); 
  });

});