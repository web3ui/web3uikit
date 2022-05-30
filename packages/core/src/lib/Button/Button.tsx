import { useState } from 'react';
import Icon from '../Icons/Icon';
import { Plus } from '../Icons/plus';
import ButtonStyles, { getIconStylesByTheme } from './Button.styles';
import { IButtonProps } from './types';
const { ButtonStyled } = ButtonStyles;
const Button = ({
  id,
  icon,
  isDisabled,
  onClick,
  size = 'regular',
  text,
  iconType = 'none',
  theme = 'primary',
}: IButtonProps) => {
  const { iconColor, onHover } = getIconStylesByTheme(theme);
  const [iconColorComputed, setIconColor] = useState(iconColor);
  return (
    <ButtonStyled
      onMouseEnter={() => setIconColor(onHover)}
      onMouseLeave={() => setIconColor(iconColor)}
      isDisabled={isDisabled}
      iconType={iconType}
      size={size}
      theme={theme}
      id={id}
      onClick={!isDisabled ? onClick : (e) => e.preventDefault()}
    >
      <Icon svg={<Plus fill={iconColorComputed} />} />
      <span>{text}</span>
    </ButtonStyled>
  );
};

export default Button;
