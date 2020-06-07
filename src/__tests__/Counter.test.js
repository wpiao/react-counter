import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../components/Counter.jsx';

describe('<Counter /', () => {
  it('exists after my application has loaded', () => {
    const app = shallow(<Counter />);
    expect(app.find('div').exists()).toEqual(true);
    expect(app.find('button').exists()).toEqual(true);
  });

  it('should increment counter when click on increment button', () => {
    const app = mount(<Counter />);
    const increment = app.find('button').at(0);

    increment.simulate('click');
    expect(app.state('counter')).toEqual(1);
    expect(app.find('div').at(1).text()).toEqual('1');

    increment.simulate('click');
    expect(app.state('counter')).toEqual(2);
    expect(app.find('div').at(1).text()).toEqual('2');
  });

  it('sould decrement counter when click on decrement button', () => {
    const app = mount(<Counter />);
    const decrement = app.find('button').at(1);

    decrement.simulate('click');
    expect(app.state('counter')).toEqual(-1);
    expect(app.find('div').at(1).text()).toEqual('-1');

    decrement.simulate('click');
    expect(app.state('counter')).toEqual(-2);
    expect(app.find('div').at(1).text()).toEqual('-2');
  });

  it('should render correctly', () => {
    const counter = renderer.create(<Counter />).toJSON();
    expect(counter).toMatchSnapshot();
  });
});