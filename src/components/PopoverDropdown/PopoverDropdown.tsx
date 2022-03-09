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
    move,
    parent,
    position,
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
                    <DivStyledArrow position={position} move={move} />
                    <DivStyledDropdown position={position}>
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
