/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ReviewBox from './reviewBox';

describe('<ReviewBox />', () => {
  it('should render', () => {
    const wrapper = shallow(<ReviewBox />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should have children', () => {
    const wrapper = shallow(<ReviewBox />);
    expect(wrapper.find('.reviews').props.children).toHaveLength(5);
  });
});
