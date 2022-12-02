import { ButtonProps } from '../types';
import styles from './ButtonMoneyPrimary.styles';

const { ButtonMoneyPrimaryStyled } = styles;

const ButtonMoneyPrimary: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => (
    <ButtonMoneyPrimaryStyled {...props} />
);

export default ButtonMoneyPrimary;
