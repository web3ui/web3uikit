import { useCallback } from 'react';
import {
    DivDropdownArrowStyled,
    DivIconAndTextStyled,
    DivInnerStyledOptionsContainer,
    DivStyledNoData,
    DivStyledOptionItem,
    DivStyledOptionsContainer,
    DivStyledSelected,
    StyledSelectParentDiv,
} from './Dropdown.styles';
import { useState, useEffect } from 'react';
import { IDropdown } from './types';
import { Illustration } from '../Illustrations';
import {
    ChevronDown,
    ChevronUp,
    TriangleDown,
    TriangleUp,
} from '@web3uikit/icons';
import { OptionProps } from '../Select';
import { Typography } from '../Typography';

const Dropdown: React.FC<IDropdown> = ({
    defaultOptionIndex,
    dropdownArrowType = 'normal',
    hasOutline = true,
    hideSelected = true,
    icon,
    isContentCentered,
    isDisabled = false,
    isLabelFixed = true,
    isLabelVisible = true,
    label,
    onChange,
    options,
    selectedState,
    showSelected = true,
    width = '250px',
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] =
        useState<number | undefined>(defaultOptionIndex);
    useEffect(() => {
        if (isDisabled) {
            setIsOpen(false);
        }
    }, [isDisabled, isOpen]);
    useEffect(() => {
        if (typeof selectedState == 'number') {
            setSelectedIndex(selectedState);
        }
    }, [selectedState, selectedIndex]);

    const handleSelectOptionClick = (selectedOption: OptionProps) => {
        setIsOpen(false);
        const indexOf = options.indexOf(selectedOption);
        setSelectedIndex(indexOf);
        onChange(selectedOption);
    };

    const RenderOptions = useCallback(() => {
        if (
            options.length == 0 ||
            (options.length == 1 && selectedIndex != null && hideSelected)
        ) {
            return (
                <DivStyledOptionsContainer
                    data-testid="test-dropdown-container"
                    isOpen={isOpen}
                    width={width}
                    {...props}
                >
                    <DivInnerStyledOptionsContainer>
                        <DivStyledNoData data-testid="test-dropdown-data">
                            <Illustration
                                logo="looking"
                                width={'100%'}
                                height={'100px'}
                            />
                            <Typography variant="caption14" weight="400">
                                No Data
                            </Typography>
                        </DivStyledNoData>
                    </DivInnerStyledOptionsContainer>
                </DivStyledOptionsContainer>
            );
        }
        return (
            <DivStyledOptionsContainer
                data-testid="test-dropdown-options-container"
                isOpen={isOpen}
                width={width}
            >
                <DivInnerStyledOptionsContainer>
                    {options
                        .filter(
                            (optionItem) =>
                                options.indexOf(optionItem) != selectedIndex ||
                                !hideSelected,
                        )
                        .map((option) => (
                            <DivStyledOptionItem
                                isContentCentered={!!isContentCentered}
                                onClick={() => {
                                    handleSelectOptionClick(option);
                                }}
                                key={option.id}
                            >
                                {option?.prefix}
                                {isLabelVisible && (
                                    <Typography
                                        variant="caption14"
                                        weight="400"
                                        color="#041836"
                                    >
                                        {option.label}
                                    </Typography>
                                )}
                            </DivStyledOptionItem>
                        ))}
                </DivInnerStyledOptionsContainer>
            </DivStyledOptionsContainer>
        );
    }, [isOpen]);

    return (
        <StyledSelectParentDiv
            data-testid="test-dropdown"
            isDisabled={isDisabled}
            width={width}
        >
            <DivStyledSelected
                data-testid="test-dropdown-wrap"
                hasLabelAndIcon={!!label && !!icon}
                hasOutline={hasOutline}
                isOpen={!!isOpen}
                onClick={() => {
                    if (!isDisabled) {
                        setIsOpen(!isOpen);
                    }
                }}
                width={width}
            >
                <div>
                    <DivIconAndTextStyled isContentCentered={!!isContentCentered}>
                        <span data-testid="test-dropdown-icon">
                            {icon && icon}
                            {typeof selectedIndex == 'number' &&
                                options[selectedIndex]?.prefix &&
                                options[selectedIndex]?.prefix}
                        </span>
                        {isLabelVisible && (
                            <div>
                            <Typography variant="caption14" weight="400">
                                {(isLabelFixed ||
                                    typeof selectedIndex != 'number') &&
                                    label}
                                {typeof selectedIndex === 'number' &&
                                    showSelected &&
                                    options[selectedIndex]?.label}
                            </Typography>
                            </div>
                        )}
                    </DivIconAndTextStyled>

                 
                    <DivDropdownArrowStyled isContentCentered={!!isContentCentered}>
                        {dropdownArrowType === 'normal' ? (
                            isOpen ? (
                                <ChevronUp
                                    title="chevron up icon"
                                    titleId="dropdown chevron up icon"
                                    fontSize={24}
                                    style={{
                                        fill: 'currentColor',
                                    }}
                                />
                            ) : (
                                <ChevronDown
                                    fontSize={24}
                                    title="chevron down icon"
                                    titleId="dropdown chevron down icon"
                                    style={{
                                        fill: 'currentColor',
                                    }}
                                />
                            )
                        ) : isOpen ? (
                            <TriangleUp
                                title="triangle up icon"
                                titleId="dropdown triangle up icon"
                                fontSize={24}
                                style={{
                                    fill: 'currentColor',
                                }}
                            />
                        ) : (
                            <TriangleDown
                                title="triangle down icon"
                                titleId="dropdown triangle down icon"
                                fontSize={24}
                                style={{
                                    fill: 'currentColor',
                                }}
                            />
                        )}
                        </DivDropdownArrowStyled>
                </div>
            </DivStyledSelected>
            <RenderOptions />
        </StyledSelectParentDiv>
    );
};

export default Dropdown;
