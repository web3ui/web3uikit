import React, { FC, useState } from 'react';
import color from '../../styles/colors';
import { Icon, iconTypes } from '../Icon';
import { CopyIconStyled } from './CopyButton.styles';
import { CopyButtonProps } from './types';

const CopyButton: FC<CopyButtonProps> = ({ text }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (): void => {
        if (typeof navigator == 'undefined') return;
        navigator.clipboard.writeText(`${text}`);
        setIsCopied(true);
    };

    return (
        <CopyIconStyled
            className="input_copy"
            onClick={() => copyToClipboard()}
        >
            {isCopied ? (
                <Icon svg={iconTypes.check} fill={color.green} />
            ) : (
                <Icon svg={iconTypes.copy} />
            )}
        </CopyIconStyled>
    );
};

export default CopyButton;
