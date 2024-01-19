import { render } from '@testing-library/react';

import SecondBoringLabel from './second-boring-label';

describe('SecondBoringLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecondBoringLabel />);
    expect(baseElement).toBeTruthy();
  });
});
