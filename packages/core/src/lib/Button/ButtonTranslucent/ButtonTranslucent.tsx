import { ButtonProps } from '../types';
import styles from './ButtonTranslucent.styles';

const { ButtonTranslucentStyled } = styles;

const ButtonTranslucent: React.FC<ButtonProps> = ({
    ...props
}: ButtonProps) => <ButtonTranslucentStyled {...props} />;

export default ButtonTranslucent;
