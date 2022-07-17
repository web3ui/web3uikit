import { ButtonProps } from '../types';
import styles from './ButtonPrimary.styles';

const { ButtonPrimaryStyled } = styles;

const ButtonPrimary: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => (
    <ButtonPrimaryStyled {...props} />
);

export default ButtonPrimary;
