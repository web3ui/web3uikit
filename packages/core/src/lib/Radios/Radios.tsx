import { useEffect, useState } from 'react';
import { RadiosProps } from './';
import { CreditCard, CreditCardProps } from '../CreditCard';
import styles from './Radios.styles';
import styled from 'styled-components';

const {
    DivStyled,
    DivWrapperStyled,
    FieldsetStyled,
    LabelStyled,
    LegendStyled,
    RadioButtonStyled,
} = styles;

const StyledCreditCard = styled(CreditCard)`
    ${(p) =>
        p.size === 'small' &&
        `
            padding-left: 50px;
            width: 100%;
        `}
`;

const Radios: React.FC<RadiosProps> = ({
    disabled = false,
    id,
    isRow = false,
    items,
    onBlur,
    onChange,
    onCreditCardRemoved,
    ref,
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

    useEffect(() => {
        if (typeof selectedState != 'undefined') {
            setChecked(selectedState);
        }
    }, [selectedState]);

    const renderCreditCard = (item: CreditCardProps, arrayIndex: number) => (
        <StyledCreditCard
            {...item}
            pressed={arrayIndex === whichIsChecked}
            onRemove={() =>
                onCreditCardRemoved && onCreditCardRemoved(arrayIndex)
            }
        />
    );

    return (
        <FieldsetStyled id={`${formattedID}`} data-testid="test-radios">
            {title && (
                <LegendStyled data-testid="test-radios-legend">
                    {title}
                </LegendStyled>
            )}
            <DivWrapperStyled isRow={isRow}>
                {(items as Array<CreditCardProps | string>).map(
                    (item: CreditCardProps | string, i: number) => (
                        <DivStyled
                            key={`${formattedID}_${i}`}
                            isRow={isRow === true}
                            disabled={disabled}
                            isSmall={
                                typeof item !== 'string'
                                    ? item.size === 'small'
                                    : false
                            }
                        >
                            <RadioButtonStyled
                                checked={i === whichIsChecked}
                                data-testid={`test-radios-input-${i}`}
                                id={`${formattedID}_${i}`}
                                ref={ref}
                                name={`${formattedID}_group`}
                                onChange={(e) => {
                                    if (disabled) {
                                        return;
                                    }
                                    onChange(e);
                                    if (typeof selectedState == 'undefined') {
                                        setChecked(i);
                                    }
                                }}
                                onBlur={(e) => onBlur && onBlur(e)}
                                required={validation?.required}
                                type="radio"
                                value={i}
                                {...props}
                            />
                            <LabelStyled
                                data-testid={`test-radios-label-${i}`}
                                htmlFor={`${formattedID}_${i}`}
                                isCreditCardMode={isCreditCards}
                                isSmall={
                                    typeof item !== 'string'
                                        ? item.size === 'small'
                                        : false
                                }
                                role="label"
                            >
                                {typeof item === 'string'
                                    ? item
                                    : renderCreditCard(item, i)}
                            </LabelStyled>
                        </DivStyled>
                    ),
                )}

                {suffix && (
                    <span data-testid="test-radios-suffix">{suffix}</span>
                )}
            </DivWrapperStyled>
        </FieldsetStyled>
    );
};

export default Radios;
