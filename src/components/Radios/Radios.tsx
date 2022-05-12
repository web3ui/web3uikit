import React, { useEffect, useState } from 'react';
import { RadiosProps } from './';
import { CreditCard, CreditCardProps } from '../CreditCard';
import styles from './Radios.styles';

const {
    DivStyled,
    DivWrapperStyled,
    FieldsetStyled,
    LabelStyled,
    LegendStyled,
    RadioButtonStyled,
} = styles;

const Radios: React.FC<RadiosProps> = ({
    disabled = false,
    id,
    isRow = false,
    items,
    ref,
    onChange,
    onValidChange,
    onBlur,
    onCreditCardRemoved,
    selectedState,
    setWhichIsChecked,
    suffix,
    title,
    validation,
    ...props
}) => {
    const formattedID = id?.replace(/\s/g, '-');
    const isCreditCards = Boolean(typeof items[0] === 'object');
    const [whichIsChecked, setChecked] = useState<number>(
        setWhichIsChecked || items.length,
    );

    const valueChanged = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (disabled) return;

        if (onValidChange && isValid(event)) {
            onValidChange(event);
        } else if (onValidChange && !isValid(event)) {
            onValidChange();
        } else if (onChange) {
            onChange(event);
        }

        if (typeof selectedState == 'undefined') {
            setChecked(index);
        }
    };

    const hasValidation = () => Boolean(validation?.required);

    const isValid = (
        event:
            | React.FocusEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLInputElement>,
    ): boolean => {
        // check if there exists validation rules
        if (!hasValidation()) return true;

        // check for HTML validation
        if (!event?.target.checkValidity()) return false;

        // if no errors were found, then return true
        return true;
    };

    useEffect(() => {
        if (typeof selectedState != 'undefined') {
            setChecked(selectedState);
        }
    }, [selectedState]);

    const renderCreditCard = (item: CreditCardProps, arrayIndex: number) => (
        <CreditCard
            {...item}
            onRemove={() =>
                onCreditCardRemoved && onCreditCardRemoved(arrayIndex)
            }
        />
    );

    return (
        <FieldsetStyled id={`${formattedID}`} data-testid="test-fieldset">
            {title && (
                <LegendStyled data-testid="test-legend">{title}</LegendStyled>
            )}
            <DivWrapperStyled isRow={isRow}>
                {(items as Array<CreditCardProps | string>).map(
                    (item: CreditCardProps | string, i: number) => (
                        <DivStyled
                            key={`${formattedID}_${i}`}
                            disabled={disabled}
                        >
                            <RadioButtonStyled
                                checked={i === whichIsChecked}
                                data-testid={`test-input-${i}`}
                                id={`${formattedID}_${i}`}
                                ref={ref}
                                name={`${formattedID}_group`}
                                onChange={(e) => {
                                    valueChanged(e, i);
                                }}
                                onBlur={(e) => onBlur && onBlur(e)}
                                required={validation?.required}
                                type="radio"
                                value={i}
                                {...props}
                            />
                            <LabelStyled
                                data-testid={`test-label-${i}`}
                                htmlFor={`${formattedID}_${i}`}
                                isCreditCardMode={isCreditCards}
                                role="label"
                            >
                                {typeof item === 'string'
                                    ? item
                                    : renderCreditCard(item, i)}
                            </LabelStyled>
                        </DivStyled>
                    ),
                )}

                {suffix && <>{suffix}</>}
            </DivWrapperStyled>
        </FieldsetStyled>
    );
};

export default Radios;
