import React from 'react';
import { ISelectExtendedProps, OptionProps } from '../../types';
import styles from '../SelectBeta.styles';
import { Tag } from '../../../Tag';
import { ColorProps } from '../../../Todo/types';

const {
    DivStyledCustomSelect,
    DivStyledPlaceholder,
    ListItemStyledTag,
    ListStyledSelected,
    SpanStyledItemIcon,
    SpanStyledItemSelected,
} = styles;

const colors: ColorProps[] = [
    'blue',
    'green',
    'grey',
    'yellow',
    'purple',
    'blueLight',
    'pink',
];

const SelectedItemsList: React.FunctionComponent<ISelectExtendedProps> = ({
    addItem,
    customSelect,
    disabled = false,
    isMulti = false,
    name = 'select',
    options = [],
    placeholder,
    prefixIcon,
    setIsOpen,
    value = [],
}) => {
    if (customSelect) {
        return (
            <DivStyledCustomSelect
                id="w3uik-custom-select-container"
                onClick={() => {
                    if (!disabled) setIsOpen((prev) => !prev);
                }}
            >
                {customSelect}
            </DivStyledCustomSelect>
        );
    }
    const MultiSelection = () => {
        return (value as string[]).map((option, i) => (
            <ListItemStyledTag
                key={option}
                onClick={(e) => e.stopPropagation()}
            >
                <Tag
                    text={
                        (options.find(
                            (curr) => curr.id === option,
                        ) as OptionProps)?.label as string
                    }
                    theme="chips"
                    tone="light"
                    color={
                        i < colors.length
                            ? colors[i]
                            : colors[i % colors.length]
                    }
                    onCancelClick={() => {
                        if (!disabled) addItem(option);
                    }}
                    active={false}
                    hasCancel={isMulti}
                />
            </ListItemStyledTag>
        ));
    };

    const SingleSelection = () => {
        const currItem = options.find((option) => option.id === value);
        return currItem ? (
            <ListItemStyledTag
                aria-label="option-selected"
                data-testid="test-select-selected"
                style={{ margin: 'auto' }}
            >
                {prefixIcon && (
                    <SpanStyledItemIcon>{prefixIcon}</SpanStyledItemIcon>
                )}
                {currItem?.prefix && (
                    <SpanStyledItemIcon>{currItem?.prefix}</SpanStyledItemIcon>
                )}
                <SpanStyledItemSelected>
                    {currItem?.label as string}
                </SpanStyledItemSelected>
            </ListItemStyledTag>
        ) : null;
    };

    return value.length > 0 ? (
        <ListStyledSelected
            aria-disabled={disabled}
            aria-label="options-selected"
            data-testid="test-select-selected-items"
            onClick={() => {
                if (!disabled) setIsOpen((prev) => !prev);
            }}
        >
            {isMulti ? MultiSelection() : <SingleSelection />}
        </ListStyledSelected>
    ) : (
        <DivStyledPlaceholder aria-disabled={disabled}>
            {placeholder ?? `Select ${name}`}
        </DivStyledPlaceholder>
    );
};

export default SelectedItemsList;
