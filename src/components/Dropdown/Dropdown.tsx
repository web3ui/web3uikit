import React from 'react';
import {
    DivStyledNoData,
    DivStyledOptionItem,
    DivStyledOptionsContainer,
    DivStyledSelected,
    StyledSelectParentDiv,
} from './Dropdown.styles';
import { useState, useEffect } from 'react';
import { IDropdown } from './types';
import { Illustration } from '../Illustrations';
import { Icon } from '../Icon';
import { OptionProps } from '../Select';

const Dropdown: React.FC<IDropdown> = ({
    options,
    label,
    isLabelFixed = true,
    showSelected = true,
    hideSelected = true,
    selectedState,
    width = '250px',
    icon,
    isDisabled = false,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

    const RenderOptions = () => {
        if (
            options.length == 0 ||
            (options.length == 1 && selectedIndex != null && hideSelected)
        ) {
            return (
                <DivStyledOptionsContainer width={width}>
                    <DivStyledNoData>
                        <Illustration
                            logo="looking"
                            width={'100%'}
                            height={'100px'}
                        />
                        <span>No Data</span>
                    </DivStyledNoData>
                </DivStyledOptionsContainer>
            );
        }
        return (
            <DivStyledOptionsContainer
                data-testid="optionsContainer"
                width={width}
            >
                {options
                    .filter(
                        (optionItem) =>
                            options.indexOf(optionItem) != selectedIndex ||
                            !hideSelected,
                    )
                    .map((option) => (
                        <DivStyledOptionItem
                            onClick={() => {
                                handleSelectOptionClick(option);
                            }}
                            key={option.id}
                        >
                            {option?.prefix}
                            {option.label}
                        </DivStyledOptionItem>
                    ))}
            </DivStyledOptionsContainer>
        );
    };

    return (
        <StyledSelectParentDiv
            width={width}
            data-testid="popoverSelect"
            isDisabled={isDisabled}
        >
            <DivStyledSelected
                width={width}
                onClick={() => {
                    if (!isDisabled) {
                        setIsOpen(!isOpen);
                    }
                }}
                isOpen={!!isOpen}
            >
                <div>
                    <span>
                        {icon && (
                            <Icon
                                size={24}
                                svg={icon}
                                style={{
                                    fill: 'currentColor',
                                }}
                            />
                        )}
                    </span>
                    <span>
                        {(isLabelFixed || !selectedIndex) && label}
                        {typeof selectedIndex === 'number' &&
                            showSelected &&
                            options[selectedIndex]?.label}
                    </span>
                    <Icon
                        size={24}
                        svg={isOpen ? 'triangleUp' : 'triangleDown'}
                        style={{
                            fill: 'currentColor',
                        }}
                    />
                </div>
            </DivStyledSelected>
            {isOpen && <RenderOptions />}
        </StyledSelectParentDiv>
    );
};

export default Dropdown;
