import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Toggle } from './toggle';

describe('Toggle', () => {
  let root;

  beforeEach(() => {
    root = mount(<Toggle>Check me</Toggle>);
  });

  it('renders a simple toggle by default', () => {
    const outerEl = root.find('div.rw-Toggle');
    expect(outerEl.exists()).toBe(true);

    const innerCb = root.find('div.rw-Toggle input[type="checkbox"]');
    expect(innerCb.exists()).toBe(true);
    expect(innerCb.hasClass('rw-Toggle-input')).toBe(true);

    const label = root.find('div.rw-Toggle label');
    expect(label.exists()).toBe(true);

    const widget = root.find('span.rw-Toggle-widget');
    expect(widget.exists()).toBe(true);
  });

  it('places the children inside the label', () => {
    const label = root.find('div.rw-Toggle label');
    expect(label.text()).toBe('Check me');
  });

  it('generates a random unique ID for the input', () => {
    const innerCb = root.find('div.rw-Toggle input[type="checkbox"]');
    expect(innerCb.prop('id')).toMatch(/^toggle_/);
    const label = root.find('div.rw-Toggle label');
    expect(label.prop('htmlFor')).toBe(innerCb.prop('id'));
  });

  describe('when a className prop is given', () => {
    beforeEach(() => {
      root.setProps({className: 'some-class'});
    });

    it('sets the className on the outer element', () => {
      const outerEl = root.find('div.rw-Toggle');
      expect(outerEl.hasClass('some-class')).toBe(true);
    });
  });

  describe('when given the size prop', () => {
    beforeEach(() => {
      root.setProps({size: 'sm'});
    });

    it('gives the outer element the is-size-sm class', () => {
      const el = root.find('div.rw-Toggle');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when an id prop is given', () => {
    beforeEach(() => {
      root.setProps({id: 'some-id'});
    });

    it('sets the input id and label for attributes', () => {
      const innerCb = root.find('div.rw-Toggle input[type="checkbox"]');
      expect(innerCb.is('#some-id')).toBe(true);
      const label = root.find('div.rw-Toggle label');
      expect(label.prop('htmlFor')).toBe('some-id');
    });
  });

  describe('when an inputClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({inputClassName: 'some-input-class'});
    });

    it('sets the className on the inner checkbox', () => {
      const innerCb = root.find('input[type="checkbox"]');
      expect(innerCb.hasClass('rw-Toggle-input some-input-class')).toBe(true);
    });
  });

  describe('when a labelClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({labelClassName: 'some-label-class'});
    });

    it('sets the className on the inner label', () => {
      const label = root.find('label');
      expect(label.hasClass('rw-Toggle-label some-label-class')).toBe(true);
    });
  });

  describe('when a widgetClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({widgetClassName: 'some-widget-class'});
    });

    it('sets the className on the inner widget', () => {
      const widget = root.find('.rw-Toggle-widget');
      expect(widget.hasClass('rw-Toggle-widget some-widget-class')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onClick = () => 47;
    const onFocus = () => 23;

    beforeEach(() => {
      root.setProps({onClick, onFocus});
    });

    it('puts the additional props on the inner input', () => {
      const el = root.find('input[type="checkbox"]');
      expect(el.prop('onClick')).toBe(onClick);
      expect(el.prop('onFocus')).toBe(onFocus);
    });
  });

  describe('when the value is changed', () => {
    const onChange = jest.fn();

    beforeEach(() => {
      root.setProps({onChange});
      root.find('input').simulate('change', {target: {checked: true}});
    });

    it('calls the onChange callback with the new value', () => {
      expect(onChange).toBeCalledWith(true);
    });
  });
});