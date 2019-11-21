import React from 'react';
import { mount } from 'enzyme';

import Rates from './Rates';

import { getMockProvider } from '../../../utils/test';

describe('<Rates />', () => {
  it('matches snapshot', () => {
    const { MockProvider } = getMockProvider();
    const wrapper = mount(
      <MockProvider>
        <Rates />
      </MockProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should not have error message', () => {
    const { MockProvider } = getMockProvider({
      rates: {
        error: '',
      },
    });
    const wrapper = mount(
      <MockProvider>
        <Rates />
      </MockProvider>,
    );
    expect(wrapper.find('#error-message')).toHaveLength(0);
  });

  it('should have error message', () => {
    const { MockProvider } = getMockProvider({
      rates: {
        error: 'error message',
      },
    });
    const wrapper = mount(
      <MockProvider>
        <Rates />
      </MockProvider>,
    );
    expect(wrapper.find('#error-message')).toHaveLength(1);
  });
});
