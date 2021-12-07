import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const props = {
    id: 'abc',
    tags: ['beach', 'sand', 'palm'],
    image: 'image.jpg',
    days: 7,
    name: 'abc',
    cost: '123',
  };

  it('should render correct link', () => {
    const component = shallow(<TripSummary {...props} />);
    expect(component.find('Link').prop('to')).toEqual(`/trip/${props.id}`);
  });
  it('should render correct image', () => {
    const component = shallow(<TripSummary {...props} />);
    expect(component.find('img').prop('src')).toEqual(props.image);
    expect(component.find('img').prop('alt')).toEqual(props.name);
  });
  it('should render correct props', () => {
    const component = shallow(<TripSummary key={props.id} {...props} />);
    expect(component.contains(props.name)).toEqual(true);
    expect(component.contains(props.cost)).toEqual(true);
    expect(component.contains(props.days)).toEqual(true);
  });

  it('should render without crashing', () => {
    const component = shallow(<TripSummary {...props} />);
    expect(component).toBeTruthy();
  });

  it('should throw an error', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  // it('should render with error', ())
  it('should render multiple tags', () => {
    const component = shallow(<TripSummary {...props} />);
    expect(component.find('.tag').at(0).contains('beach')).toEqual(true);
    expect(component.find('.tag').at(1).contains('sand')).toEqual(true);
    expect(component.find('.tag').at(2).contains('palm')).toEqual(true);
  });
  it('shouldnt render tags div', () => {
    const component = shallow(<TripSummary {...props} />);
    expect(component).toBeTruthy();
  });
});
