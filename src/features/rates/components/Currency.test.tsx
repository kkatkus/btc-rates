import React from 'react';
import { mount } from 'enzyme';

import Currency from './Currency';

import Big from 'big.js';

jest.mock('../../../utils/helper', () => ({
  getLanguage: () => 'de-DE',
}));

describe('<Currencies />', () => {
  it('should display correct currency', () => {
    const props = {
      btc: '1',
      currency: 'EUR',
      rate: new Big(1.123),
    };
    const wrapper = mount(<Currency {...props} />);
    expect(wrapper.html()).toEqual('<div style="font-size: 24px;">1,12&nbsp;€</div>');
  });

  it('should floor - no free food', () => {
    const props = {
      btc: '1',
      currency: 'EUR',
      rate: new Big(1.1999),
    };
    const wrapper = mount(<Currency {...props} />);
    expect(wrapper.html()).toEqual('<div style="font-size: 24px;">1,19&nbsp;€</div>');
  });

  it('should show in correct format', () => {
    const props = {
      btc: '1234.56789',
      currency: 'EUR',
      rate: new Big(1199.9),
    };

    const wrapper = mount(<Currency {...props} />);
    expect(wrapper.html()).toEqual('<div style="font-size: 24px;">1.481.358,01&nbsp;€</div>');
  });
});
