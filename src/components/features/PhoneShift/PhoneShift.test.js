import { shallow } from 'enzyme';
import React from 'react';
import PhoneShift from './PhoneShift.js';

const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
    getHours() {
      return customDate.split('T').pop().split(':')[0];
    }
  };

const select = {
  container: '.phoneNumber',
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    // const now = mockDate;
    // console.log(new trueDate(Date.now()));
    const component = shallow(
      <PhoneShift rightPerson={mockGetShiftsData(mockShifts)} />
    );
    const renderedPhoneNumber = component.find(select.container).text();
    expect(renderedPhoneNumber).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

const mockShifts = [
  { name: 'Amanda', start: 8, end: 12, description: '678.243.8455' },
  {
    name: 'Tobias',
    start: 12,
    end: 16,
    description: '278.443.6443',
  },
  {
    name: 'Helena',
    start: 16,
    end: 22,
    description: '167.280.3970',
  },
  {
    name: '',
    start: 22,
    end: 8,
    description: 'Now closed!',
  },
];

const mockGetShiftsData = (shifts) => {
  const currentTime = new Date().getHours();
  const rightPerson = shifts.filter(
    (person) => person.start <= currentTime && currentTime < person.end
  );
  const defaultPerson = shifts.filter((person) => person.name === '');
  if (rightPerson.length) {
    return rightPerson[0];
  } else {
    return defaultPerson[0];
  }
};

describe('PhoneShift Component', () => {
  it('Should render withour error', () => {
    console.log(mockGetShiftsData(mockShifts));
    const component = shallow(
      <PhoneShift rightPerson={mockGetShiftsData(mockShifts)} />
    );
    expect(component).toBeTruthy();
  });
  it('should throw an error if without props', () => {
    expect(() => shallow(<PhoneShift />)).toThrow();
  });

  it('should render only one phone div', () => {
    const component = shallow(
      <PhoneShift rightPerson={mockGetShiftsData(mockShifts)} />
    );
    expect(component.find('.phoneNumber').length).toBe(1);
  });
});

describe('Component PhoneShift with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', `Amanda - 678.243.8455`);
  checkDescriptionAtTime('12:00:00', `Tobias - 278.443.6443`);
  checkDescriptionAtTime('21:59:59', `Helena - 167.280.3970`);
  checkDescriptionAtTime('22:00:00', `Now closed!`);
});
