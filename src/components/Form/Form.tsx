import React, { Fragment } from 'react';
import { FormProps, DataInput } from './types';
import { Button } from '../Button';
import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import { Radios } from '../Radios';
import { TextArea } from '../TextArea';
import { H3Styled, H4Styled, FormStyled } from './Form.styles';

const Form: React.FC<FormProps> = ({
    buttonConfig,
    data,
    id,
    onSubmit,
    title,
}) => {
    const formSubmitted = (event: React.SyntheticEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target as typeof event.target & HTMLFormElement;

        if (form.checkValidity()) {
            const dataReturned = data.map((item) => ({
                inputName: item.name,
                inputResult: item.selected || item.value,
            }));
            onSubmit &&
                onSubmit({
                    id: id,
                    data: dataReturned,
                });
        } else {
            form.reportValidity();
        }
    };

    const optionAdded = (index: number, opt: string, isRadio: boolean) => {
        if (!data[index].selected || isRadio) {
            data[index].selected = [opt];
        } else {
            data[index]?.selected?.push(opt);
        }
    };

    const optionToggled = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        opt: string,
    ) => {
        const isRadio = Boolean(event.target.type === 'radio');

        if (event.target.checked) {
            optionAdded(index, opt, isRadio);
        } else {
            const filtered = data[index]?.selected?.filter(
                (item) => item !== opt,
            );
            data[index].selected = filtered;
        }
    };

    const renderInput = (
        input: DataInput,
        type: 'text' | 'number' | 'tel' | 'email' | 'password',
        index: number,
    ) => (
        <Input
            key={`input_${index}`}
            label={input.name}
            name={input.name}
            onChange={(e) => (data[index].value = e.target.value)}
            type={type}
            width={input.inputWidth}
            validation={{
                characterMaxLength: input.validation?.characterMaxLength,
                characterMinLength: input.validation?.characterMinLength,
                numberMax: input.validation?.numberMax,
                numberMin: input.validation?.numberMin,
                regExp: input.validation?.regExp,
                regExpInvalidMessage: input.validation?.regExpInvalidMessage,
                required: input.validation?.required,
            }}
        />
    );

    const renderCheckbox = (
        input: DataInput,
        layout: 'box' | 'switch',
        index: number,
    ) => (
        <Fragment key={`cb-group_${index}`}>
            <H4Styled>{input.value}</H4Styled>
            {input.options?.map((opt, i) => (
                <Checkbox
                    key={`cb_${index}-${i}`}
                    label={opt}
                    layout={layout}
                    name={input.name}
                    onChange={(e) => optionToggled(e, index, opt)}
                    validation={{ required: input.validation?.required }}
                />
            ))}
        </Fragment>
    );

    const renderRadioGroup = (input: DataInput, index: number) => (
        <Fragment key={`${input.name}_${index}`}>
            <H4Styled>{input.value}</H4Styled>
            <Radios
                id={`${input.name}_${index}`}
                items={input.options || []}
                onChange={(e) => optionToggled(e, index, e.target.value)}
                validation={{ required: input.validation?.required }}
            />
        </Fragment>
    );

    const renderTextArea = (input: DataInput, index: number) => (
        <Fragment key={`${input.name}_${index}`}>
            <H4Styled>{input.value}</H4Styled>
            <TextArea
                id={`textarea_${index}`}
                name={input.name}
                onChange={(e) => (data[index].value = e.target.value)}
                value={input.value}
                width={input.inputWidth}
                validation={{
                    characterMaxLength: input.validation?.characterMaxLength,
                    characterMinLength: input.validation?.characterMinLength,
                    required: input.validation?.required,
                }}
            />
        </Fragment>
    );

    const renderInputType = (input: DataInput, index: number) => {
        switch (input.type) {
            case 'text':
                return renderInput(input, 'text', index);
            case 'tel':
                return renderInput(input, 'tel', index);
            case 'password':
                return renderInput(input, 'password', index);
            case 'email':
                return renderInput(input, 'email', index);
            case 'number':
                return renderInput(input, 'number', index);
            case 'box':
                return renderCheckbox(input, 'box', index);
            case 'switch':
                return renderCheckbox(input, 'switch', index);
            case 'radios':
                return renderRadioGroup(input, index);
            case 'textarea':
                return renderTextArea(input, index);
            default:
                return;
        }
    };

    return (
        <FormStyled onSubmit={formSubmitted} id={id} data-testid="test-form">
            {title && (
                <H3Styled data-testid="test-form-title">{title}</H3Styled>
            )}

            {data.map((input, i) => (
                <div
                    data-testid={`form-ele-${i}`}
                    data-testclass="form-ele"
                    key={`form-ele-${i}`}
                >
                    {renderInputType(input, i)}
                </div>
            ))}

            <Button {...buttonConfig} id={`form-${id}-submit`} type="submit">
                Submit
            </Button>
        </FormStyled>
    );
};

export default Form;
