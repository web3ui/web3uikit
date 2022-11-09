import { FC } from 'react';
import { Typography } from '../../Typography';
import { ILabelBaseProps } from './types';
import styles from './styles';

const { LabelStyled } = styles;

const LabelBase: FC<ILabelBaseProps> = ({
    id,
    testid,
    text,
    required,
    ...props
}) => {
    return (
        <LabelStyled data-testid={testid} htmlFor={id} {...props}>
            <Typography title={text}>
                {text}
                {required && '*'}
            </Typography>
        </LabelStyled>
    );
};

export default LabelBase;
