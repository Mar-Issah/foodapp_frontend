import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';

test('Button component renders correctly', () => {
  const label = 'Test Button';
  const { getByText } = render(<Button label={label} />);

  const buttonElement = getByText(label);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(label);
});