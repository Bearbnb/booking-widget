import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/App';
import Guests from '../client/src/Guests';

describe('Guests component', () => {
  it('has Guests component', () => {
    const wrapper = shallow(<Guests />)
    expect(wrapper).toHaveLength(1)
  })

  it('should find p tag', () => {
    const wrapper = shallow(<Guests guestButtonClick={() => jest.fn()} />)
    expect(wrapper.find('p').last()).toHaveLength(1);
  })

  it('should simulate onClick function', () => {

    const props = {
      guestButtonClick: jest.fn()
    }

    const wrapper = shallow(<Guests guestButtonClick={props.guestButtonClick} />)

      wrapper.find('p').last().simulate('click')
      expect(props.guestButtonClick).toHaveBeenCalled();
  })
})
