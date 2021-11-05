import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react'
import NoResult from './NoResult/NoResult'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


it('Can render a message of no result', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<NoResult />, container);
  });
  const msg = container.querySelector('h3');
  expect(msg.textContent).toBe('Sorry, we didn´t find any results  :( ');
  })

it('Render a div button to go back', () => {
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(<NoResult />, container);
    });
    const div = container.querySelector('.boton');
    expect(div.textContent).toBe('GO BACK');
    })