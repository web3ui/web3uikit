import React, { useState } from 'react';
import { CreditCard, CreditCardProps } from '../CreditCard';
import { RadiosProps } from './';
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
    onChange,
    onCreditCardRemoved,
    setWhichIsChecked,
    title,
    validation,
}) => {
    const formattedID = id.replace(/\s/g, '-');
    const isCreditCards = Boolean(typeof items[0] === 'object');
    const [whichIsChecked, setChecked] = useState<number>(
        setWhichIsChecked || items.length,
    );

    const renderCreditCard = (item: CreditCardProps, arrayIndex: number) => (
        <CreditCard
            brand={item.brand}
            expiresAt={{
                month: '11',
                year: '21',
            }}
            fingerprint={item.fingerprint}
            id={item.id}
            isExpired={item.isExpired}
            lastDigits={item.lastDigits}
            name={item.name}
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
                                name={`${formattedID}_group`}
                                onChange={(e) => {
                                    if (disabled) {
                                        return;
                                    }
                                    onChange(e);
                                    setChecked(i);
                                }}
                                required={validation?.required}
                                type="radio"
                                value={i}
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
            </DivWrapperStyled>
        </FieldsetStyled>
    );
};

export default Radios;
