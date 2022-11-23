import { IPopoverDropdownProps } from './types';
import styles from './PopoverDropdown.styles';
import { color } from '@web3uikit/styles';
import depreciatedWarning from '../../utils/depreciationWarning';
import { Fragment } from 'react';

const { DivStyled, ListStyled } = styles;

const PopoverDropdown: React.FC<IPopoverDropdownProps> = ({
    backgroundColor = color.blue70,
    children,
    id,
    isArrowHidden = false,
    move,
    moveBody,
    parent,
    position = 'bottom',
    width = '150px',
    ...props
}) => {
    if (move) {
        depreciatedWarning('move prop in PopoverDropdown');
    }
    return (
        <DivStyled
            aria-haspopup="true"
            data-comp="PopoverDropdown"
            data-testid="test-popover-dropdown"
            id={id}
            {...props}
        >
            <Fragment key="popover-dropdown-parent">{parent}</Fragment>
            <ListStyled
                key="popover-dropdown-children"
                backgroundColor={backgroundColor}
                data-testid="test-popover-dropdown-list"
                moveBody={moveBody}
                position={position}
                role="menu"
                width={width}
                isArrowHidden={isArrowHidden}
            >
                {children.map((child, index) => {
                    return (
                        <li
                            data-testid="test-popover-dropdown-child"
                            key={`dropdown-element-${index}`}
                        >
                            {child}
                        </li>
                    );
                })}
            </ListStyled>
        </DivStyled>
    );
};

export default PopoverDropdown;
