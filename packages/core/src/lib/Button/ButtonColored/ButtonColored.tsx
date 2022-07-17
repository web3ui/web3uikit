import { ButtonProps } from '../types';
import styles from './ButtonColored.styles';

const { ButtonColoredStyled } = styles;

const ButtonColored: React.FC<ButtonProps> = ({
    color,
    ...props
}: ButtonProps) => <ButtonColoredStyled color={color} {...props} />;

export default ButtonColored;
