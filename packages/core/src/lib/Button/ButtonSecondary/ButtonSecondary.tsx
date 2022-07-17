import { ButtonProps } from '../types';
import styles from './ButtonSecondary.styles';

const { ButtonSecondaryStyled } = styles;

const ButtonSecondary: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => (
    <ButtonSecondaryStyled {...props} />
);

export default ButtonSecondary;
