import { ButtonProps } from '../types';
import styles from './ButtonOutline.styles';

const { ButtonOutlineStyled } = styles;

const ButtonOutline: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => (
    <ButtonOutlineStyled {...props} />
);

export default ButtonOutline;
