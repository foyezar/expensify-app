import React from 'react';
import { shallow } from "enzyme";
// import ReactShallowRender from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);

  // expect(wrapper.find('h1').text()).toBe('Expensify');
  // const renderer = new ReactShallowRender();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});