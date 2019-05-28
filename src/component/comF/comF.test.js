import React from 'react';
import { shallow } from 'enzyme';
import ComF from './comF';

describe('<ComF />', () => {
  test('renders', () => {
    const wrapper = shallow(<ComF />);
    expect(wrapper).toMatchSnapshot();
  });
});
