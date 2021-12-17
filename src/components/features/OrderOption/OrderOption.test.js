import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';
describe('component OrderOption', () => {
  it('should render without error', () => {
    const component = shallow(
      <OrderOption type={'icons'} name={'Your name'} />
    );
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });
  it('should render name props in title', () => {
    const component = shallow(
      <OrderOption type={'icons'} name={'Your name'} />
    );
    expect(component.find('.title').contains('Your name')).toEqual(true);
  });
});
const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );

      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });
    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);
          console.log(renderedSubcomponent.debug());
          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('select')
            .simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
      case 'icons': {
        it('contains icons', () => {
          const icons = renderedSubcomponent.find('Icon');
          const iconsWrapper = renderedSubcomponent.find('.icon');
          const iconActiveWrapper = renderedSubcomponent.find('.iconActive');
          const emptyOption = iconsWrapper.at(0);

          expect(emptyOption.prop('value')).toBe('');
          expect(iconsWrapper.length).toBe(2);
          expect(iconsWrapper.length + iconActiveWrapper.length).toBe(3);
          expect(icons.length).toBe(3);
        });
        it('should run setOptionValue function on click', () => {
          renderedSubcomponent.find('.icon').at(1).simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }

      case 'checkboxes': {
        it('contains all checkboxes', () => {
          const inputs = renderedSubcomponent.find('input');
          expect(inputs.length).toBe(mockProps.values.length);
          expect(inputs.at(0).prop('type')).toBe('checkbox');
          expect(inputs.at(1).prop('type')).toBe('checkbox');
          expect(inputs.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(inputs.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('should run setOptionValue function on change', () => {
          const targetInput = renderedSubcomponent.find(
            `input[value="${testValue}"]`
          );
          targetInput.simulate('change', { currentTarget: { checked: true } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: [mockProps.currentValue, testValue],
          });
        });
        break;
      }
      case 'number': {
        it('should contain all number inputs', () => {
          const targetWrapper = renderedSubcomponent.find(
            'div[className="number"]'
          );
          const targetInput = targetWrapper.find('input[type="number"]');
          console.log(renderedSubcomponent.debug());
          expect(targetWrapper).toBeTruthy();
          expect(targetInput.length).toBe(1);
        });
        it('should run setOptionValue on number input change', () => {
          const targetWrapper = renderedSubcomponent.find(
            'div[className="number"]'
          );
          const targetInput = targetWrapper.find('input[type="number"]');
          targetInput.simulate('change', {
            currentTarget: { value: testValueNumber },
          });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValueNumber,
          });
        });
        break;
      }
      case 'text': {
        it('should contain all text inputs', () => {
          console.log(renderedSubcomponent.debug());
          const targetInput = renderedSubcomponent.find('input[type="text"]');
          expect(targetInput.length).toBe(1);
        });
        it('should run setOptionValue on text input change', () => {
          const targetInput = renderedSubcomponent.find('input[type="text"]');
          targetInput.simulate('change', {
            currentTarget: { value: testValue },
          });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
      case 'date': {
        it('should contain DatePicker component', () => {
          const targetComponent = renderedSubcomponent.find(DatePicker);
          expect(targetComponent).toBeTruthy();
          targetComponent.simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
      default:
    }
  });
}
