import { render } from '@testing-library/react';

import BuildableSwc from './buildable-swc';

describe('BuildableSwc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuildableSwc />);
    expect(baseElement).toBeTruthy();
  });
});
