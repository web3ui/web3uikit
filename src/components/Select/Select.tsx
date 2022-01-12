import React, { useState, useEffect } from "react";
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    FilterText,
    FilterListText
} from "./Select.styles";

export interface SelectProps {
    options: OptionProps[];
    onOptionChange?: (option: OptionProps) => void;
    defaultOptionIndex?: number;
}

export interface OptionProps {
    label: string;
    value: any;
}

const Select: React.FunctionComponent<SelectProps> = ({
    options,
    onOptionChange,
    defaultOptionIndex = 0
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] =
        useState(defaultOptionIndex);

    const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen);
        event.stopPropagation();
    };

    const onOptionClicked = (selectedIndex: number) => () => {
        setSelectedOptionIndex(selectedIndex);
        setIsOpen(false);

        if (onOptionChange) {
            onOptionChange(options[selectedIndex]);
        }
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setIsOpen(false);
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling} className={isOpen ? "actived" : ""}>
                <FilterText className={isOpen ? "actived" : ""}>
                    {options[selectedOptionIndex].label}
                </FilterText>
            </DropDownHeader>
            {isOpen && (
                <DropDownList>
                    {options.map((option, index) =>
                        index !== selectedOptionIndex ? (
                            <FilterListText
                                onClick={onOptionClicked(index)}
                                key={option.label}
                            >
                                {option.label}
                            </FilterListText>
                        ) : null
                    )}
                </DropDownList>
            )}
        </DropDownContainer>
    );
};

export default Select;