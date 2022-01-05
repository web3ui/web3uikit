import { PillProps } from './types';
import React from 'react';
import styled from 'styled-components';
import { pillStyles } from './Pill.styles';

const TabStyled = styled.button<
  Pick<PillProps, 'active' | 'disabled' | 'pressed' | 'isBar'>
>`
  ${pillStyles.initialStyles}
  
  ${(p) => getPillStyleByActivity(p.active, p.pressed, p.disabled, p.isBar)}
  ${(p) => p.isBar ? pillStyles.isBar : ``}
`;

const getPillStyleByActivity = (
  active: boolean | undefined,
  pressed: boolean | undefined,
  disabled: boolean | undefined,
  isBar: boolean | undefined,
) => {
  if (active) {
    if (pressed) {
      return !isBar ? pillStyles.active + pillStyles.pressedActive : pillStyles.active;
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
    isBar = false,
    pressed = false,
}: PillProps) => {
  return (
    <TabStyled
      id={id}
      active={active}
      disabled={disabled}
      isBar={isBar}
      pressed={pressed}
      onClick={onClick}
    >
      {text}
    </TabStyled>
  );
};

export default Pill;
