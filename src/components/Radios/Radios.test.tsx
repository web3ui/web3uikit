import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import * as stories from './Radios.stories';

const {
    RadioGroup,
    RadioGroupWithoutTitle,
    RadiosSetParticular,
    RadiosWithLongText,
} = composeStories(stories);

const testFieldsetId = 'test-fieldset';
const testLegendId = 'test-legend';
const testEvent = jest.fn();

test('Radios - RadioGroup', async () => {
    const testTitle = RadioGroup?.args?.title;
    const testId = RadioGroup?.args?.id;
    const testItems = RadioGroup?.args?.items && [...RadioGroup.args.items];

    render(
        <RadioGroup
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );

    // renders the component
    const element = screen.getByTestId(
        testFieldsetId,
    ) as unknown as HTMLFieldSetElement | null;
    expect(element).not.toBeNull();

    // renders a formatted ID
    const formattedID = testId && testId.replace(/\s/g, '-');
    expect(element?.id).toBe(formattedID);

    // renders the title
    const title = screen.getByTestId(
        testLegendId,
    ) as unknown as HTMLLegendElement | null;
    expect(title?.textContent).toBe(testTitle);

    // renders the correct amount of radio inputs
    const inputs = screen.getAllByRole(
        'radio',
    ) as unknown as HTMLInputElement[];
    expect(inputs.length).toBe(testItems?.length);

    // renders the each input correctly
    testItems &&
        inputs.forEach((input: HTMLInputElement, i) =>
            expect(input?.value).toBe(String(i)),
        );

    // renders the correct label for each input
    const labels = screen.getAllByRole(
        'label',
    ) as unknown as HTMLLabelElement[];
    testItems &&
        labels.forEach((label: HTMLLabelElement, i) =>
            expect(label?.textContent).toBe(testItems[i]),
        );

    // When the label is clicked the input is checked to render new styles
    const label: HTMLLabelElement | null = labels[0];
    expect(label).not.toBeNull();
    label && fireEvent.click(label);

    const input: HTMLInputElement | null = inputs[0];
    expect(input?.checked).toBeTruthy();

    // When the label is clicked the checked input is returned
    expect(testEvent).toHaveBeenCalledWith(input);
});

test('Radios - RadioGroupWithoutTitle', async () => {
    const testId = RadioGroupWithoutTitle?.args?.id;
    const testItems = RadioGroupWithoutTitle?.args?.items && [
        ...RadioGroupWithoutTitle.args.items,
    ];

    render(
        <RadioGroupWithoutTitle
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );

    // renders the component
    const element = screen.getByTestId(
        testFieldsetId,
    ) as unknown as HTMLFieldSetElement | null;
    expect(element).not.toBeNull();

    // renders a formatted ID
    const formattedID = testId && testId.replace(/\s/g, '-');
    expect(element?.id).toBe(formattedID);

    // renders no title
    const title = (await screen.queryByText(
        testLegendId,
    )) as unknown as HTMLLegendElement | null;
    expect(title).toBeNull();

    // renders the correct amount of radio inputs
    const inputs = screen.getAllByRole(
        'radio',
    ) as unknown as HTMLInputElement[];
    expect(inputs.length).toBe(testItems?.length);

    // renders the each input correctly
    testItems &&
        inputs.forEach((input: HTMLInputElement, i) =>
            expect(input?.value).toBe(String(i)),
        );

    // renders the correct label for each input
    const labels = screen.getAllByRole(
        'label',
    ) as unknown as HTMLLabelElement[];
    testItems &&
        labels.forEach((label: HTMLLabelElement, i) =>
            expect(label?.textContent).toBe(testItems[i]),
        );

    // When the label is clicked the input is checked to render new styles
    const label: HTMLLabelElement | null = labels[0];
    expect(label).not.toBeNull();
    label && fireEvent.click(label);

    const input: HTMLInputElement | null = inputs[0];
    expect(input?.checked).toBeTruthy();

    // When the label is clicked the checked input is returned
    expect(testEvent).toHaveBeenCalledWith(input);
});

test('Radios - RadiosWithLongText', async () => {
    const testTitle = RadiosWithLongText?.args?.title;
    const testId = RadiosWithLongText?.args?.id;
    const testItems = RadiosWithLongText?.args?.items && [
        ...RadiosWithLongText.args.items,
    ];

    render(
        <RadiosWithLongText
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );

    // renders the component
    const element = screen.getByTestId(
        testFieldsetId,
    ) as unknown as HTMLFieldSetElement | null;
    expect(element).not.toBeNull();

    // renders a formatted ID
    const formattedID = testId && testId.replace(/\s/g, '-');
    expect(element?.id).toBe(formattedID);

    // renders the title
    const title = screen.getByTestId(
        testLegendId,
    ) as unknown as HTMLLegendElement | null;
    expect(title?.textContent).toBe(testTitle);

    // renders the correct amount of radio inputs
    const inputs = screen.getAllByRole(
        'radio',
    ) as unknown as HTMLInputElement[];
    expect(inputs.length).toBe(testItems?.length);

    // renders the each input correctly
    testItems &&
        inputs.forEach((input: HTMLInputElement, i) =>
            expect(input?.value).toBe(String(i)),
        );

    // renders the correct label for each input
    const labels = screen.getAllByRole(
        'label',
    ) as unknown as HTMLLabelElement[];
    testItems &&
        labels.forEach((label: HTMLLabelElement, i) =>
            expect(label?.textContent).toBe(testItems[i]),
        );

    // When the label is clicked the input is checked to render new styles
    const label: HTMLLabelElement | null = labels[0];
    expect(label).not.toBeNull();
    label && fireEvent.click(label);

    const input: HTMLInputElement | null = inputs[0];
    expect(input?.checked).toBeTruthy();

    // When the label is clicked the checked input is returned
    expect(testEvent).toHaveBeenCalledWith(input);
});

test('Radios - RadiosSetParticular', async () => {
    const testTitle = RadiosSetParticular?.args?.title;
    const testId = RadiosSetParticular?.args?.id;
    const testIsChecked = RadiosSetParticular?.args?.setWhichIsChecked;
    const testItems = RadiosSetParticular?.args?.items && [
        ...RadiosSetParticular.args.items,
    ];

    render(
        <RadiosSetParticular
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );

    // renders the component
    const element = screen.getByTestId(
        testFieldsetId,
    ) as unknown as HTMLFieldSetElement | null;
    expect(element).not.toBeNull();

    // renders a formatted ID
    const formattedID = testId && testId.replace(/\s/g, '-');
    expect(element?.id).toBe(formattedID);

    // renders the title
    const title = screen.getByTestId(
        testLegendId,
    ) as unknown as HTMLLegendElement | null;
    expect(title?.textContent).toBe(testTitle);

    // renders the correct amount of radio inputs
    const inputs = screen.getAllByRole(
        'radio',
    ) as unknown as HTMLInputElement[];
    expect(inputs.length).toBe(testItems?.length);

    // renders the each input correctly
    testItems &&
        inputs.forEach((input: HTMLInputElement, i) =>
            expect(input?.value).toBe(String(i)),
        );

    // renders the correct label for each input
    const labels = screen.getAllByRole(
        'label',
    ) as unknown as HTMLLabelElement[];
    testItems &&
        labels.forEach((label: HTMLLabelElement, i) =>
            expect(label?.textContent).toBe(testItems[i]),
        );

    // check if the default checked input is the one set
    const defaultChecked =
        testIsChecked && (inputs[testIsChecked] as unknown as HTMLInputElement);
    defaultChecked && expect(defaultChecked.checked).toBeTruthy();

    // When the label is clicked the input is checked to render new styles
    const label: HTMLLabelElement | null = labels[0];
    expect(label).not.toBeNull();
    label && fireEvent.click(label);

    const input: HTMLInputElement | null = inputs[0];
    expect(input?.checked).toBeTruthy();

    // When the label is clicked the checked input is returned
    expect(testEvent).toHaveBeenCalledWith(input);
});

it('Adds Suffix to Radio', () => {
    const { getByTestId } = render(
        <RadiosSetParticular
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
            suffix={<p data-testid="test"></p>}
        />,
    );
    expect(getByTestId('test')).toBeDefined();
});
