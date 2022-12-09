import { FC } from 'react';
import { Typography } from '../../Typography';
import { ILabelBaseProps } from './types';
import styles from './styles';

const { LabelStyled } = styles;

const LabelBase: FC<ILabelBaseProps> = ({
    color,
    id,
    required,
    testid,
    text,
    typographyFontWeight,
    typographyVariant,
    ...props
}) => {
    return (
        <LabelStyled data-testid={testid} htmlFor={id} {...props}>
            <Typography
                color={color}
                title={text}
                variant={typographyVariant}
                weight={typographyFontWeight}
            >
                {text}
                {required && '*'}
            </Typography>
        </LabelStyled>
    );
};

export default LabelBase;
