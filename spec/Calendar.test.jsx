import React from 'react';
import { shallow } from 'enzyme';
import Calendar from '../client/src/Calendar';

describe('Calendar component', () => {
  it('has Calendar component', () => {
    const wrapper = shallow(<Calendar />)
    expect(wrapper).toHaveLength(1)
  })
})
