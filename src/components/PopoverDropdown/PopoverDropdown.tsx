import React, { useState } from 'react';
import {
    DivStyledArrow,
    DivStyledChild,
    DivStyledDropdown,
    DivStyledFlex,
} from './PopoverDropdown.styles';
import { PopoverDropdownProps } from './types';

const PopoverDropdown: React.FC<PopoverDropdownProps> = ({
    children,
    id,
    move = -50,
    parent,
    position,
    moveBody = -50,
}) => {
    const [showDropdown, setVisibility] = useState(false);
    return (
        <DivStyledFlex
            id={id}
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
        >
            <div data-testid={'dropdown-parent-test-id'}>{parent}</div>

            {showDropdown && (
                <>
                    <DivStyledArrow
                        position={position}
                        move={move}
                        moveBody={moveBody}
                    />
                    <DivStyledDropdown
                        position={position}
                        moveBody={moveBody}
                        move={move}
                    >
                        {children.map((child, index) => {
                            return (
                                <div key={`dropdown-element-${index}`}>
                                    <DivStyledChild>{child}</DivStyledChild>
                                </div>
                            );
                        })}
                    </DivStyledDropdown>
                </>
            )}
        </DivStyledFlex>
    );
};

export default PopoverDropdown;
