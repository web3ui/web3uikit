import { FC } from 'react';
import { Typography } from '../../Typography';
import { ILabelBaseProps } from './types';

const LabelBase: FC<ILabelBaseProps> = ({
    id,
    testId,
    text,
    required,
    ...props
}) => {
    return (
        <label data-testid={testId} htmlFor={id} {...props}>
            <Typography>
                {text}
                {required && ' *'}
            </Typography>
        </label>
    );
};

export default LabelBase;
