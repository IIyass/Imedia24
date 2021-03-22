import React from 'react';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PokemonCard from '../components/PokemonCard/index';

configure({adapter: new Adapter()});

describe("PokemonCard", () => {
  it("should render my pokemon card", () => {
    const component = shallow(<PokemonCard name="pikatchu"/>);
    expect(component.getElements()).toMatchSnapshot();
  });
});