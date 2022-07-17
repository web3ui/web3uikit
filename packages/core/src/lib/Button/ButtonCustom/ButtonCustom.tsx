import { ButtonProps } from '../types';
import styles from './ButtonCustom.styles';

const { ButtonCustomStyled } = styles;

const ButtonCustom: React.FC<ButtonProps> = ({
    customize,
    ...props
}: ButtonProps) => {
    return <ButtonCustomStyled customize={customize} {...props} />;
};

export default ButtonCustom;
