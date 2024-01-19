import { render } from '@testing-library/react';

import FirstBoringLabel from './first-boring-label';

describe('FirstBoringLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstBoringLabel />);
    expect(baseElement).toBeTruthy();
  });
});
