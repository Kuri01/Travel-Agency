import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const props = {
      id: 'abc',
      tags: ['beach'],
    };

    const component = shallow(<TripSummary id={props.id} tags={props.tags} />);
    expect(component.find('Link').prop('to')).toEqual(`/trip/${props.id}`);
  });
  it('should render correct image', () => {
    const expectedAlt = 'testAlt';
    const expectedImageSrc = 'testImage.jpg';
    const component = shallow(
      <TripSummary
        id='abc'
        tags={['beach']}
        image={expectedImageSrc}
        name={expectedAlt}
      />
    );
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('should render correct props', () => {
    const props = {
      id: 'abc',
      tags: ['beach'],
      name: 'testName',
      cost: '11',
      days: 11,
    };
    const component = shallow(<TripSummary key={props.id} {...props} />);
    expect(component.contains(props.name)).toEqual(true);
    expect(component.contains(props.cost)).toEqual(true);
    expect(component.contains(props.days)).toEqual(true);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
    const component = shallow(<TripSummary id='abc' tags={['beach']} />);
    expect(component).toBeTruthy();
  });
  it('should render multiple tags', () => {
    const props = {
      id: 'abc',
      tags: ['beach', 'sand', 'palm'],
    };
    const component = shallow(<TripSummary id={props.id} tags={props.tags} />);
    expect(component.find('.tag').at(0).contains('beach')).toEqual(true);
    expect(component.find('.tag').at(1).contains('sand')).toEqual(true);
    expect(component.find('.tag').at(2).contains('palm')).toEqual(true);
  });
  it('shouldnt render tags div', () => {
    const props = {
      id: 'abc',
      tags: [],
    };
    const component = shallow(<TripSummary id={props.id} tags={props.tags} />);
    expect(component).toBeTruthy();
  });
});
