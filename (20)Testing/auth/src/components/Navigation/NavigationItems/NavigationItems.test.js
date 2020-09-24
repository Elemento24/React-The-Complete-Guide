import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

// We don't need to write the Identifier of the Test as a JSX element, but just for a better understanding, we are doing it, as this will be the thing that we will be seeing in the console.
describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render 2 <NavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render 3 <NavigationItem /> elements if authenticated', () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should render logout elements if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(
        <NavigationItem link='/logout'>Logout</NavigationItem>
      )
    ).toEqual(true);
  });
});

// The idea behind Enzyme is that, it allows us to write Isolated Tests, where we can just test a singke component, independent of all the other components, i.e. we won't have to load all the components, instead we can load just the component that we want to test, and Enzyme will help us testing it.