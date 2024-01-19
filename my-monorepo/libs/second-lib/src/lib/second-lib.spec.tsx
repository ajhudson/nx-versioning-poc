import { render } from '@testing-library/react';

import SecondLib from './second-lib';

describe('SecondLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecondLib />);
    expect(baseElement).toBeTruthy();
  });
});
