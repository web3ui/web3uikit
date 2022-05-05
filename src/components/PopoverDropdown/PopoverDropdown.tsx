import React, { useState, useEffect } from 'react';
import { PopoverDropdownProps } from './types';
import PopoverDropdownStyles from './PopoverDropdown.styles';
const { DivStyledArrow, DivStyledFlex, DivStyledDropdown, DivStyledChild } =
    PopoverDropdownStyles;
const PopoverDropdown: React.FC<PopoverDropdownProps> = ({
    children,
    id,
    move = -50,
    parent,
    position,
    moveBody = -50,
    ...props
}) => {
    let timeout: ReturnType<typeof setTimeout>;
    const [showDropdown, setVisibility] = useState(false);

    const onTogglePopover = (state: boolean) => {
        if (state === true) {
            clearTimeout(timeout);
            setVisibility(state);
        } else {
            timeout = setTimeout(() => {
                setVisibility(state);
                clearTimeout(timeout);
            }, 300);
        }
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <DivStyledFlex
            id={id}
            onMouseEnter={() => onTogglePopover(true)}
            onMouseLeave={() => onTogglePopover(false)}
            {...props}
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
