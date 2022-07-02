import { IPopoverDropdownProps } from './types';
import styles from './PopoverDropdown.styles';
import { color } from '@web3uikit/styles';
import depreciatedWarning from '../../utils/depreciationWarning';

const { DivStyled, ListStyled } = styles;

const PopoverDropdown: React.FC<IPopoverDropdownProps> = ({
    backgroundColor = color.blueDark,
    children,
    id,
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
    if (moveBody) {
        depreciatedWarning('moveBody prop in PopoverDropdown');
    }
    return (
        <DivStyled
            aria-haspopup="true"
            data-comp="PopoverDropdown"
            data-testid="test-popover-dropdown"
            id={id}
            {...props}
        >
            {parent}

            <ListStyled
                backgroundColor={backgroundColor}
                data-testid="test-popover-dropdown-list"
                position={position}
                role="menu"
                width={width}
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
