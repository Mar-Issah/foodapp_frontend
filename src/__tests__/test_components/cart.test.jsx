// CartIcon.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import CartIcon from '@/components/CartIcon';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn(() => <div>Mock Icon</div>),
}));

jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faCartShopping: {},
}));

jest.mock('next/link', () => jest.fn(() => <div>Mock Link</div>));

describe('CartIcon', () => {
  it('renders correctly', () => {
    useSelector.mockImplementation(callback => callback({
      cart: { quantity: 5 },
    }));

    const { getByText } = render(<CartIcon />);
    expect(getByText('(5)')).toBeInTheDocument();
  });
});