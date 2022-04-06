import { PopoverDropdownProps } from './types';
import React, { useState } from 'react';
import {
    DivStyledArrow,
    DivStyledFlex,
    DivStyledDropdown,
    DivStyledChild,
} from './PopoverDropdown.styles';

const PopoverDropdown: React.FC<PopoverDropdownProps> = ({
    children,
    id,
    move = -50,
    parent,
    position,
    moveBody = -50,
}) => {
    const [showDropdown, setVisibility] = useState(false);
    console.log('visible => ', showDropdown);
    return (
        <DivStyledFlex
            id={id}
            onMouseEnter={() => setVisibility(true)}
            onMouseUp={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(true)}
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
