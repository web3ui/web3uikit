import React from 'react';
import { ISelectExtendedProps, OptionProps } from '../../types';
import styles from '../SelectBeta.styles';
import { Tag } from '../../../Tag';
import { ColorProps } from '../../../Todo/types';

const {
    DivStyledPlaceholder,
    ListItemStyledTag,
    ListStyledSelected,
    SpanStyledItemIcon,
    SpanStyledItemText,
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
    isMulti = false,
    name = 'select',
    disabled = false,
    options = [],
    placeholder,
    value = [],
    setIsOpen,
    addItem,
}) => {
    return value.length > 0 ? (
        <ListStyledSelected
            aria-disabled={disabled}
            aria-label="options-selected"
            data-testid="test-select-selected-items"
            onClick={() => {
                if (!disabled) setIsOpen((prev) => !prev);
            }}
        >
            {isMulti ? (
                (value as string[]).map((option, i) => (
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
                ))
            ) : (
                <ListItemStyledTag
                    aria-label="option-selected"
                    data-testid="test-select-selected"
                    style={{ margin: 'auto' }}
                >
                    <SpanStyledItemIcon>
                        {options.find((option) => option.id === value)?.prefix}
                    </SpanStyledItemIcon>
                    <SpanStyledItemText>
                        {
                            options.find((option) => option.id === value)
                                ?.label as string
                        }
                    </SpanStyledItemText>
                </ListItemStyledTag>
            )}
        </ListStyledSelected>
    ) : (
        <DivStyledPlaceholder>
            {placeholder ?? `Select ${name}`}
        </DivStyledPlaceholder>
    );
};

export default SelectedItemsList;
