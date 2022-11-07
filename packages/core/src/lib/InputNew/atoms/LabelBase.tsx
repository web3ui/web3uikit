import { FC } from 'react';
import { Typography } from '../../Typography';
import { ILabelBaseProps } from './types';
import styles from './styles';

const { LabelStyled } = styles;

const LabelBase: FC<ILabelBaseProps> = ({
    id,
    position = 'relative',
    testid,
    text,
    required,
    state,
    ...props
}) => {
    return (
        <LabelStyled
            data-testid={testid}
            htmlFor={id}
            position={position}
            state={state}
            {...props}
        >
            <Typography title={text}>
                {text}
                {required && ' *'}
            </Typography>
        </LabelStyled>
    );
};

export default LabelBase;
