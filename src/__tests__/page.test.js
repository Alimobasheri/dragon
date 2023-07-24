import { render } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders without errors', () => {
    render(<Home />);
  });
});
