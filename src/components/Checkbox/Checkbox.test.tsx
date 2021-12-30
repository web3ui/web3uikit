import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Checkbox.stories';
import { fireEvent } from '@testing-library/react';

const {
  Box,
  BoxDisabled,
  BoxOnByDefault,
  Switch,
  SwitchDisabled,
  SwitchOnByDefault,
} = composeStories(stories);

describe('Checkbox - Box', () => {
  let container: HTMLDivElement;
  const testId = Box?.args?.id;
  const testLabelText = Box?.args?.label;
  const testNameText = Box?.args?.name;
  const labelTestID = 'test-checkbox-label';
  const inputTestID = 'test-checkbox-input';

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Box />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders the component', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label).not.toBeNull();
  });

  it('renders the component mode correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.dataset?.layout).toBe('box');
  });

  it('renders the label text correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.textContent).toBe(testLabelText);
  });

  it('renders the an input child', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]  > input`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input ID that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.id).toBe(testId);
  });

  it('renders the input name that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.name).toBe(testNameText);
  });

  it('renders the input checked or unchecked with the boolean passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.value).toBeFalsy;
    expect(input?.checked).toBeFalsy;
  });

  it('renders the disabled attribute to the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.disabled).toBeFalsy;
  });

  it('the component returns onChange event when changed', () => {
    console.log = jest.fn();
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    label && fireEvent.click(label);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(input);
  });
});

describe('Checkbox - Box disabled', () => {
  let container: HTMLDivElement;
  const testId = BoxDisabled?.args?.id;
  const testLabelText = BoxDisabled?.args?.label;
  const testNameText = BoxDisabled?.args?.name;
  const labelTestID = 'test-checkbox-label';
  const inputTestID = 'test-checkbox-input';

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<BoxDisabled />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders the component', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label).not.toBeNull();
  });

  it('renders the component mode correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.dataset?.layout).toBe('box');
  });

  it('renders the label text correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.textContent).toBe(testLabelText);
  });

  it('renders the an input child', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]  > input`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input ID that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.id).toBe(testId);
  });

  it('renders the input name that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.name).toBe(testNameText);
  });

  it('renders the input checked or unchecked with the boolean passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.value).toBeFalsy;
    expect(input?.checked).toBeFalsy;
  });

  it('renders the disabled attribute to the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.disabled).toBeTruthy;
  });

  it('the component is disabled so will not return anything', () => {
    console.log = jest.fn();
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    label && fireEvent.click(label);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe('Checkbox - Box on by default', () => {
  let container: HTMLDivElement;
  const testId = BoxOnByDefault?.args?.id;
  const testLabelText = BoxOnByDefault?.args?.label;
  const testNameText = BoxOnByDefault?.args?.name;
  const labelTestID = 'test-checkbox-label';
  const inputTestID = 'test-checkbox-input';

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<BoxOnByDefault />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders the component', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label).not.toBeNull();
  });

  it('renders the component mode correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.dataset?.layout).toBe('box');
  });

  it('renders the label text correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.textContent).toBe(testLabelText);
  });

  it('renders the an input child', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]  > input`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input ID that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.id).toBe(testId);
  });

  it('renders the input name that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.name).toBe(testNameText);
  });

  it('renders the input checked or unchecked with the boolean passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.value).toBeTruthy;
    expect(input?.checked).toBeTruthy;
  });

  it('renders the disabled attribute to the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.disabled).toBeFalsy;
  });

  it('the component returns onChange event when changed', () => {
    console.log = jest.fn();
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    label && fireEvent.click(label);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(input);
  });
});

describe('Checkbox - Switch', () => {
  let container: HTMLDivElement;
  const testId = Switch?.args?.id;
  const testLabelText = Switch?.args?.label;
  const testNameText = Switch?.args?.name;
  const labelTestID = 'test-checkbox-label';
  const inputTestID = 'test-checkbox-input';

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Switch />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders the component', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label).not.toBeNull();
  });

  it('renders the component mode correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.dataset?.layout).toBe('switch');
  });

  it('renders the label text correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.textContent).toBe(testLabelText);
  });

  it('renders the an input child', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]  > input`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input ID that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.id).toBe(testId);
  });

  it('renders the input name that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.name).toBe(testNameText);
  });

  it('renders the input checked or unchecked with the boolean passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.value).toBeFalsy;
    expect(input?.checked).toBeFalsy;
  });

  it('renders the disabled attribute to the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.disabled).toBeFalsy;
  });

  it('the component returns onChange event when changed', () => {
    console.log = jest.fn();
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    label && fireEvent.click(label);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(input);
  });
});

describe('Checkbox - Switch disabled', () => {
  let container: HTMLDivElement;
  const testId = SwitchDisabled?.args?.id;
  const testLabelText = SwitchDisabled?.args?.label;
  const testNameText = SwitchDisabled?.args?.name;
  const labelTestID = 'test-checkbox-label';
  const inputTestID = 'test-checkbox-input';

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<SwitchDisabled />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders the component', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label).not.toBeNull();
  });

  it('renders the component mode correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.dataset?.layout).toBe('switch');
  });

  it('renders the label text correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.textContent).toBe(testLabelText);
  });

  it('renders the an input child', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]  > input`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input ID that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.id).toBe(testId);
  });

  it('renders the input name that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.name).toBe(testNameText);
  });

  it('renders the input checked or unchecked with the boolean passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.value).toBeFalsy;
    expect(input?.checked).toBeFalsy;
  });

  it('renders the disabled attribute to the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.disabled).toBeTruthy;
  });

  it('the component is disabled so will not return anything', () => {
    console.log = jest.fn();
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    label && fireEvent.click(label);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe('Checkbox - Switch on by default', () => {
  let container: HTMLDivElement;
  const testId = SwitchOnByDefault?.args?.id;
  const testLabelText = SwitchOnByDefault?.args?.label;
  const testNameText = SwitchOnByDefault?.args?.name;
  const labelTestID = 'test-checkbox-label';
  const inputTestID = 'test-checkbox-input';

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<SwitchOnByDefault />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders the component', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label).not.toBeNull();
  });

  it('renders the component mode correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.dataset?.layout).toBe('switch');
  });

  it('renders the label text correctly', () => {
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    expect(label?.textContent).toBe(testLabelText);
  });

  it('renders the an input child', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]  > input`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input).not.toBeNull();
  });

  it('renders the input ID that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.id).toBe(testId);
  });

  it('renders the input name that is passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.name).toBe(testNameText);
  });

  it('renders the input checked or unchecked with the boolean passed', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.value).toBeTruthy;
    expect(input?.checked).toBeTruthy;
  });

  it('renders the disabled attribute to the input', () => {
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    expect(input?.disabled).toBeFalsy;
  });

  it('the component returns onChange event when changed', () => {
    console.log = jest.fn();
    const label: HTMLLabelElement | null = container.querySelector(
      `[data-testid="${labelTestID}"]`
    );
    const input: HTMLInputElement | null = container.querySelector(
      `[data-testid="${inputTestID}"]`
    );
    label && fireEvent.click(label);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(input);
  });
});
