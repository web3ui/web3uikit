import { FC } from 'react';
import { ILabelBaseProps } from './types';

const LabelBase: FC<ILabelBaseProps> = ({ id, text, required }) => {
    return (
        <label data-testid="test-input-label" id={id}>
            {text} {required && '*'}
        </label>
    );
};

export default LabelBase;
