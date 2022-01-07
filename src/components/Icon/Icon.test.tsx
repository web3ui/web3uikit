import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Icon.stories';

const { Example, Size16, Size32, Size64 } = composeStories(stories);

describe('Icon - Example', () => {
  let container: HTMLDivElement;
  const testId = 'test-icon';
  const testTitle = 'mail icon';
  const testSize = Example?.args?.size;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Example />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  it('renders the component', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon).not.toBeNull();
  });
  it('renders correct SVG', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.textContent).toBe(testTitle);
  });
  xit('renders the correct size', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.clientHeight).toBe(testSize);
    expect(icon?.clientWidth).toBe(testSize);
  });
  xit('renders aria hidden attribute', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.ariaHidden).toBe('true');
  });
});

describe('Icon - Size16', () => {
  let container: HTMLDivElement;
  const testId = 'test-icon';
  const testTitle = 'mail icon';
  const testSize = Size16?.args?.size;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Size16 />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  it('renders the component', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon).not.toBeNull();
  });
  it('renders correct SVG', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.textContent).toBe(testTitle);
  });
  xit('renders the correct size', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.clientHeight).toBe(testSize);
    expect(icon?.clientWidth).toBe(testSize);
  });
  xit('renders aria hidden attribute', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.ariaHidden).toBe('true');
  });
});

describe('Icon - Size32', () => {
  let container: HTMLDivElement;
  const testId = 'test-icon';
  const testTitle = 'mail icon';
  const testSize = Size32?.args?.size;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Size32 />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  it('renders the component', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon).not.toBeNull();
  });
  it('renders correct SVG', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.textContent).toBe(testTitle);
  });
  xit('renders the correct size', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.clientHeight).toBe(testSize);
    expect(icon?.clientWidth).toBe(testSize);
  });
  xit('renders aria hidden attribute', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.ariaHidden).toBe('true');
  });
});

describe('Icon - Size64', () => {
  let container: HTMLDivElement;
  const testId = 'test-icon';
  const testTitle = 'mail icon';
  const testSize = Size64?.args?.size;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Size64 />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  it('renders the component', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon).not.toBeNull();
  });
  it('renders correct SVG', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.textContent).toBe(testTitle);
  });
  xit('renders the correct size', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.clientHeight).toBe(testSize);
    expect(icon?.clientWidth).toBe(testSize);
  });
  xit('renders aria hidden attribute', () => {
    const icon = container.querySelector(`[data-testid="${testId}"]`);
    expect(icon?.ariaHidden).toBe('true');
  });
});
