import { PillProps } from './types';
import React from 'react';
import styled from 'styled-components';
import { pillStyles } from './Pill.styles';

const TabStyled = styled.button<
  Pick<PillProps, 'active' | 'disabled' | 'pressed'>
>`
  ${pillStyles.initialStyles}

  ${(p) => getPillStlyeByActivity(p.active, p.pressed, p.disabled)}
`;

const getPillStlyeByActivity = (
  active: boolean | undefined,
  pressed: boolean | undefined,
  disabled: boolean | undefined
) => {
  if (active) {
    if (pressed) {
      return pillStyles.active + pillStyles.pressedActive;
    }
    if (disabled) {
      return pillStyles.active + pillStyles.disabled;
    }
    return pillStyles.active + pillStyles.activeHover;
  } else {
    if (pressed) {
      return pillStyles.inactive + pillStyles.pressedInactive;
    }
    if (disabled) {
      return pillStyles.inactive + pillStyles.disabled;
    }
    return pillStyles.inactive + pillStyles.inactiveHover;
  }
};

const Pill: React.FC<PillProps> = ({
  id = String(Date.now()),
  text = 'Tab',
  disabled,
  active = false,
  onClick,
  pressed = false,
}: PillProps) => {
  return (
    <TabStyled
      id={id}
      active={active}
      pressed={pressed}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </TabStyled>
  );
};

export default Pill;
