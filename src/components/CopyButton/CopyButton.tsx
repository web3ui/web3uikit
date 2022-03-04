import React, { FC, useState } from 'react';
import color from '../../styles/colors';
import { Icon, iconTypes } from '../Icon';
import { CopyIconStyled } from './CopyButton.styles';
import { CopyButtonProps } from './types';

const CopyButton: FC<CopyButtonProps> = ({
    text,
    iconSize,
    onCopy = () => {},
}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (): void => {
        if (typeof navigator == 'undefined') return;
        if (text) navigator.clipboard.writeText(`${text}`);
        setIsCopied(true);
    };

    return (
        <CopyIconStyled
            className="input_copy"
            iconSize={iconSize}
            onClick={(e) => {
                onCopy(e);
                copyToClipboard();
            }}
        >
            {isCopied ? (
                <Icon
                    size={iconSize}
                    svg={iconTypes.check}
                    fill={color.green}
                />
            ) : (
                <Icon size={iconSize} svg={iconTypes.copy} />
            )}
        </CopyIconStyled>
    );
};

export default CopyButton;
