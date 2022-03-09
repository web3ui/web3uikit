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
    SwitchingText,
} = composeStories(stories);

let container: HTMLDivElement;
const labelTestID = 'test-checkbox-label';
const inputTestID = 'test-checkbox-input';
const textTestID = 'test-checkbox-text';
const testEvent = jest.fn();

describe('Checkbox - Box', () => {
    const testId = Box?.args?.id;
    const testLabelText = Box?.args?.label;
    const testNameText = Box?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Box
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label).not.toBeNull();
    });

    it('renders the component mode correctly', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label?.dataset?.layout).toBe('box');
    });

    it('renders the label text correctly', () => {
        const label: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(label?.textContent).toBe(testLabelText);
    });

    it('renders the an input child', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]  > input`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input ID that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.id).toBe(testId);
    });

    it('renders the input name that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.name).toBe(testNameText);
    });

    it('renders the input checked or unchecked with the boolean passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.value).toBeFalsy;
        expect(input?.checked).toBeFalsy;
    });

    it('renders the disabled attribute to the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.disabled).toBeFalsy;
    });

    it('the component returns onChange event when changed', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        label && fireEvent.click(label);
        expect(testEvent).toHaveBeenCalled();
        expect(testEvent).toHaveBeenCalledWith(input);
    });
});

describe('Checkbox - Box disabled', () => {
    const testId = BoxDisabled?.args?.id;
    const testLabelText = BoxDisabled?.args?.label;
    const testNameText = BoxDisabled?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <BoxDisabled
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label).not.toBeNull();
    });

    it('renders the component mode correctly', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label?.dataset?.layout).toBe('box');
    });

    it('renders the label text correctly', () => {
        const label: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(label?.textContent).toBe(testLabelText);
    });

    it('renders the an input child', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]  > input`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input ID that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.id).toBe(testId);
    });

    it('renders the input name that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.name).toBe(testNameText);
    });

    it('renders the input checked or unchecked with the boolean passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.value).toBeFalsy;
        expect(input?.checked).toBeFalsy;
    });

    it('renders the disabled attribute to the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.disabled).toBeTruthy;
    });

    // it('the component is disabled so will not return anything', () => {
    //     const label: HTMLLabelElement | null = container.querySelector(
    //         `[data-testid="${labelTestID}"]`,
    //     );
    //     label && fireEvent.click(label);
    //     expect(testEvent).not.toHaveBeenCalled();
    // });
});

describe('Checkbox - Box on by default', () => {
    const testId = BoxOnByDefault?.args?.id;
    const testLabelText = BoxOnByDefault?.args?.label;
    const testNameText = BoxOnByDefault?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <BoxOnByDefault
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label).not.toBeNull();
    });

    it('renders the component mode correctly', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label?.dataset?.layout).toBe('box');
    });

    it('renders the label text correctly', () => {
        const label: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(label?.textContent).toBe(testLabelText);
    });

    it('renders the an input child', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]  > input`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input ID that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.id).toBe(testId);
    });

    it('renders the input name that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.name).toBe(testNameText);
    });

    it('renders the input checked or unchecked with the boolean passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.value).toBeTruthy;
        expect(input?.checked).toBeTruthy;
    });

    it('renders the disabled attribute to the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.disabled).toBeFalsy;
    });

    it('the component returns onChange event when changed', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        label && fireEvent.click(label);
        expect(testEvent).toHaveBeenCalled();
        expect(testEvent).toHaveBeenCalledWith(input);
    });
});

describe('Checkbox - Switch', () => {
    const testId = Switch?.args?.id;
    const testLabelText = Switch?.args?.label;
    const testNameText = Switch?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Switch
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label).not.toBeNull();
    });

    it('renders the component mode correctly', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label?.dataset?.layout).toBe('switch');
    });

    it('renders the label text correctly', () => {
        const label: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(label?.textContent).toBe(testLabelText);
    });

    it('renders the an input child', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]  > input`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input ID that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.id).toBe(testId);
    });

    it('renders the input name that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.name).toBe(testNameText);
    });

    it('renders the input checked or unchecked with the boolean passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.value).toBeFalsy;
        expect(input?.checked).toBeFalsy;
    });

    it('renders the disabled attribute to the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.disabled).toBeFalsy;
    });

    it('the component returns onChange event when changed', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        label && fireEvent.click(label);
        expect(testEvent).toHaveBeenCalled();
        expect(testEvent).toHaveBeenCalledWith(input);
    });
});

describe('Checkbox - Switch disabled', () => {
    const testId = SwitchDisabled?.args?.id;
    const testLabelText = SwitchDisabled?.args?.label;
    const testNameText = SwitchDisabled?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <SwitchDisabled
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label).not.toBeNull();
    });

    it('renders the component mode correctly', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label?.dataset?.layout).toBe('switch');
    });

    it('renders the label text correctly', () => {
        const label: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(label?.textContent).toBe(testLabelText);
    });

    it('renders the an input child', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]  > input`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input ID that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.id).toBe(testId);
    });

    it('renders the input name that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.name).toBe(testNameText);
    });

    it('renders the input checked or unchecked with the boolean passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.value).toBeFalsy;
        expect(input?.checked).toBeFalsy;
    });

    it('renders the disabled attribute to the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.disabled).toBeTruthy;
    });

    // it('the component is disabled so will not return anything', () => {
    //     const label: HTMLLabelElement | null = container.querySelector(
    //         `[data-testid="${labelTestID}"]`,
    //     );
    //     label && fireEvent.click(label);
    //     expect(testEvent).not.toHaveBeenCalled();
    // });
});

describe('Checkbox - Switch on by default', () => {
    const testId = SwitchOnByDefault?.args?.id;
    const testLabelText = SwitchOnByDefault?.args?.label;
    const testNameText = SwitchOnByDefault?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <SwitchOnByDefault
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label).not.toBeNull();
    });

    it('renders the component mode correctly', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label?.dataset?.layout).toBe('switch');
    });

    it('renders the label text correctly', () => {
        const label: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(label?.textContent).toBe(testLabelText);
    });

    it('renders the an input child', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]  > input`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input ID that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.id).toBe(testId);
    });

    it('renders the input name that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.name).toBe(testNameText);
    });

    it('renders the input checked or unchecked with the boolean passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.value).toBeTruthy;
        expect(input?.checked).toBeTruthy;
    });

    it('renders the disabled attribute to the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.disabled).toBeFalsy;
    });

    it('the component returns onChange event when changed', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        label && fireEvent.click(label);
        expect(testEvent).toHaveBeenCalled();
        expect(testEvent).toHaveBeenCalledWith(input);
    });
});

describe('Checkbox - SwitchingText', () => {
    const testId = SwitchingText?.args?.id;
    const testLabelText = SwitchingText?.args?.label;
    const testNameText = SwitchingText?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <SwitchingText
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label).not.toBeNull();
    });

    it('renders the component mode correctly', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        expect(label?.dataset?.layout).toBe('switch');
    });

    it('renders the label text correctly', () => {
        const label: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(label?.textContent).toBe(testLabelText);
    });

    it('renders the an input child', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]  > input`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the input ID that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.id).toBe(testId);
    });

    it('renders the input name that is passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.name).toBe(testNameText);
    });

    it('renders the input checked or unchecked with the boolean passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.value).toBeFalsy;
        expect(input?.checked).toBeFalsy;
    });

    it('renders the disabled attribute to the input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        expect(input?.disabled).toBeFalsy;
    });

    it('the component returns onChange event when changed', () => {
        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${inputTestID}"]`,
        );
        label && fireEvent.click(label);
        expect(testEvent).toHaveBeenCalled();
        expect(testEvent).toHaveBeenCalledWith(input);
    });

    it('renders the labelWhenChecked text correctly', () => {
        const text: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(text?.textContent).toBe(testLabelText);

        const label: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${labelTestID}"]`,
        );
        label && fireEvent.click(label);

        const textUpdated: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${textTestID}"]`,
        );
        expect(textUpdated?.textContent).toBe(testLabelText);
    });
});
