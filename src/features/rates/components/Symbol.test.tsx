import React from 'react';
import { mount } from 'enzyme';

import Symbol from './Symbol';

describe('<Symbol />', () => {
  it('should match dolar symbol', () => {
    const wrapper = mount(<Symbol symbol="&#36;" />);
    expect(wrapper.text()).toEqual('$');
  });

  it('should match empty symbol', () => {
    const wrapper = mount(<Symbol symbol="" />);
    expect(wrapper.text()).toEqual('');
  });
});
