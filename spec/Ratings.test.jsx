import React from 'react';
import { shallow } from 'enzyme';
import Ratings from '../client/src/Ratings';

describe('Ratings component', () => {
  it('has Ratings component', () => {
    const wrapper = shallow(<Ratings />)
    expect(wrapper).toHaveLength(1)
  })
})
