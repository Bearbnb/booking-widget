import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/App';
import GuestsCloseButton from '../client/src/Guests';

describe('App component', () => {
  it('has App component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toHaveLength(1)
  })

})
