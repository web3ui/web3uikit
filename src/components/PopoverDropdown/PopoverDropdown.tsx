import React, { useState } from 'react';
import {
    DivStyledArrow,
    DivStyledChild,
    DivStyledDropdown,
    DivStyledFlex
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
    console.log('visible => ', showDropdown);
    return (
        <DivStyledFlex
            id={id}
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
            // onMouseEnter={() => setVisibility(true)}
            // onMouseUp={() => setVisibility(true)}
            // onMouseLeave={() => setVisibility(true)}
        >
            <div data-testid={'dropdown-parent-test-id'}>{parent}</div>

            {/* {showDropdown && ( */}
            <div
                style={{
                    // position: 'relative',
                    // width: '300px',
                    // marginTop: -5,
                    // paddingTop: 5,
                    // height: '400px',
                    // height: '-webkit-fill-available',
                    // border: '10px solid transparent',
                    // position: 'relative',
                    // // width: '300px',
                    // marginTop: -5,
                    // paddingTop: 5,
                    // height: '-webkit-fill-available',
                }}
            >
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
            </div>
            {/* )} */}
        </DivStyledFlex>
    );
};

export default PopoverDropdown;
