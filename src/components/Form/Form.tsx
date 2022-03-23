import React, { Fragment } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { CreditCardProps } from '../CreditCard';
import { DatePicker } from '../DatePicker';
import { Input } from '../Input';
import { Radios } from '../Radios';
import { Select } from '../Select';
import { TextArea } from '../TextArea';
import { H3Styled, H4Styled, FormStyled } from './Form.styles';
import { FormProps, DataInput } from './types';

const Form: React.FC<FormProps> = ({
    buttonConfig,
    data,
    id,
    onSubmit,
    title,
    customFooter,
    isDisabled = false,
}) => {
    const formSubmitted = (event: React.SyntheticEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target as typeof event.target & HTMLFormElement;

        if (form.checkValidity()) {
            const dataReturned = data.map((item) => ({
                inputName: item.name,
                inputResult: item.selectedCard || item.selected || item.value,
                key: item.key,
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

    const optionAdded = (
        elementIndex: number,
        opt: string | number,
        isRadio: boolean,
    ) => {
        if (isRadio) {
            // @ts-ignore:next-line
            const selectRadioValue = data[elementIndex].options[Number(opt)];
            if (typeof selectRadioValue === 'string') {
                data[elementIndex].selected = [selectRadioValue];
            } else {
                data[elementIndex].selectedCard = selectRadioValue;
            }
            return;
        }

        if (!data[elementIndex].selected) {
            data[elementIndex].selected = [String(opt)];
        } else {
            data[elementIndex]?.selected?.push(String(opt));
        }
    };

    const optionToggled = (
        event: React.ChangeEvent<HTMLInputElement>,
        elementIndex: number,
        opt: string,
    ) => {
        const isRadio = Boolean(event.target.type === 'radio');

        if (event.target.checked) {
            optionAdded(elementIndex, opt, isRadio);
        } else {
            const filtered = data[elementIndex]?.selected?.filter(
                (item) => item !== opt,
            );
            data[elementIndex].selected = filtered;
        }
    };

    const renderDatePicker = (
        input: DataInput,
        type: 'date',
        index: number,
    ) => (
        <DatePicker
            id={`${type}_${index}`}
            label={input.name}
            onChange={(e) => (data[index].selected = [String(e.date)])}
            validation={{ required: input.validation?.required }}
            disabled={isDisabled}
        />
    );

    const renderInput = (
        input: DataInput,
        type: 'text' | 'number' | 'tel' | 'email' | 'password',
        index: number,
    ) => (
        <Input
            key={`input_${index}`}
            id={`input_${index}`}
            value={input.value}
            label={input.name}
            name={input.name}
            onChange={(e) => (data[index].value = e.target.value)}
            type={type}
            width={input.inputWidth}
            disabled={isDisabled}
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
            {(input.options || ([] as Array<CreditCardProps | string>)).map(
                (opt, i) => (
                    <Checkbox
                        key={`cb_${index}-${i}`}
                        label={String(opt)}
                        layout={layout}
                        name={input.name}
                        onChange={(e) => optionToggled(e, index, String(opt))}
                        validation={{ required: input.validation?.required }}
                        disabled={isDisabled}
                    />
                ),
            )}
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
                disabled={isDisabled}
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
                state={isDisabled ? 'disabled' : undefined}
                validation={{
                    characterMaxLength: input.validation?.characterMaxLength,
                    characterMinLength: input.validation?.characterMinLength,
                    required: input.validation?.required,
                }}
            />
        </Fragment>
    );

    const renderSelect = (input: DataInput, type: string, index: number) => {
        return (
            <Select
                id={`${input.name}_${index}`}
                label={input.name}
                onChangeTraditional={(e) =>
                    (data[index].value = e.target.value)
                }
                options={input.selectOptions}
                traditionalHTML5={type === 'traditional'}
                validation={{
                    required: Boolean(input.validation?.required),
                }}
                width={input.inputWidth}
                disabled={isDisabled}
            />
        );
    };

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
            case 'select':
                return renderSelect(input, 'traditional', index);
            case 'textarea':
                return renderTextArea(input, index);
            case 'date':
                return renderDatePicker(input, 'date', index);
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
                    className="form-item"
                    data-testclass="form-ele"
                    data-testid={`form-ele-${i}`}
                    key={`form-ele-${i}`}
                >
                    {renderInputType(input, i)}
                </div>
            ))}

            {customFooter ? (
                <div className="customFooter">{customFooter}</div>
            ) : (
                <Button
                    {...buttonConfig}
                    id="form-submit"
                    type="submit"
                    disabled={isDisabled}
                >
                    Submit
                </Button>
            )}
        </FormStyled>
    );
};

export default Form;
