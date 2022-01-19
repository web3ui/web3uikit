import { DropdownProps } from './types';
import React, { useState } from 'react';
import { DropdownStyles } from './Dropdown.styles';

const { DivArrowStyled, DivContainer, DivDropdownElementStyled, ElementDiv } =
    DropdownStyles;

const Dropdown: React.FC<DropdownProps> = ({
    children,
    id = String(Date.now()),
    move,
    parent,
    position,
}) => {
    const [showDropdown, setVisibility] = useState(false);
    return (
        <DivContainer
            id={id}
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
        >
            <div data-testid={'dropdown-parent-test-id'}>{parent}</div>

            {showDropdown && (
                <>
                    <DivArrowStyled position={position} move={move} />
                    <DivDropdownElementStyled position={position}>
                        {children.map((name, index) => {
                            return (
                                <div key={`dropdown-element-${index}`}>
                                    <ElementDiv>{name}</ElementDiv>
                                </div>
                            );
                        })}
                    </DivDropdownElementStyled>
                </>
            )}
        </DivContainer>
    );
};

export default Dropdown;
