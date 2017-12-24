import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Modal } from './modal';
import { jsdom } from 'jsdom';
import { XIcon } from '../icons';

let modalContent, modalRoot;

jest.mock('react-dom', () => ({
  createPortal: jest.fn((content, root) => {
    modalContent = content;
    modalRoot = root;
    return null;
  })
}));

describe('Modal', () => {
  let root, onClose, children;

  beforeEach(() => {
    onClose = jest.fn();
    children = {};

    root = mount(<Modal onClose={onClose}>{children}</Modal>);
  });

  it('creates a portal', () => {
    expect(ReactDOM.createPortal).toHaveBeenCalled();
  });

  it('renders the modal content with the correct props', () => {
    expect(modalContent.props).toEqual({
      role: 'dialog',
      tabIndex: '-1',
      onKeyDown: expect.anything(),
      className: 'rw-Modal-content is-dialog',
      children: [
        expect.objectContaining({
          props: expect.objectContaining({
            type: 'button',
            'aria-label': 'Close',
            onClick: onClose,
            className: 'rw-Modal-close-button is-dialog'
          })
        }),
        children
      ]
    });
  });

  it('renders the modal root with the correct props', () => {
    expect(modalRoot.className).toEqual('rw-Modal');
  });

  describe('when open', () => {
    beforeEach(() => {
      root.setProps({ open: true });
    });

    it('renders the modal content with the correct props', () => {
      expect(modalContent.props).toEqual({
        role: 'dialog',
        tabIndex: '-1',
        onKeyDown: expect.anything(),
        className: 'rw-Modal-content is-dialog is-open',
        children: [
          expect.objectContaining({
            props: expect.objectContaining({
              type: 'button',
              'aria-label': 'Close',
              onClick: onClose,
              className: 'rw-Modal-close-button is-dialog'
            })
          }),
          children
        ]
      });
    });

    it('renders the modal root with the correct props', () => {
      expect(modalRoot.className).toEqual('rw-Modal is-open');
    });
  });

  describe('when animated', () => {
    beforeEach(() => {
      root.setProps({ animated: true });
    });

    it('renders the modal content with the correct props', () => {
      expect(modalContent.props).toEqual({
        role: 'dialog',
        tabIndex: '-1',
        onKeyDown: expect.anything(),
        className: 'rw-Modal-content is-dialog is-animated',
        children: [
          expect.objectContaining({
            props: expect.objectContaining({
              type: 'button',
              'aria-label': 'Close',
              onClick: onClose,
              className: 'rw-Modal-close-button is-dialog'
            })
          }),
          children
        ]
      });
    });

    it('renders the modal root with the correct props', () => {
      expect(modalRoot.className).toEqual('rw-Modal is-animated');
    });
  });

  describe('when type="fullscreen"', () => {
    beforeEach(() => {
      root.setProps({ open: true, type: 'fullscreen' });
    });

    it('renders the modal content with the correct props', () => {
      expect(modalContent.props).toEqual({
        role: 'dialog',
        tabIndex: '-1',
        onKeyDown: expect.anything(),
        className: 'rw-Modal-content is-fullscreen is-open',
        children: [
          expect.objectContaining({
            props: expect.objectContaining({
              type: 'button',
              'aria-label': 'Close',
              onClick: onClose,
              className: 'rw-Modal-close-button is-fullscreen'
            })
          }),
          children
        ]
      });
    });

    it('renders the modal root with the correct props', () => {
      expect(modalRoot.className).toEqual('rw-Modal is-open');
    });
  });
});
