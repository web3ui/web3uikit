import React, { FC, useState } from 'react';
import color from '../../styles/colors';
import { Icon, iconTypes } from '../Icon';
import { CopyIconStyled } from './CopyButton.styles';
import { CopiedValue, CopyButtonProps, CopyFn } from './types';

export const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
    const [copiedText, setCopiedText] = useState<CopiedValue>(null);

    const copy: CopyFn = async (text) => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported');
            return false;
        }
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            return true;
        } catch (error) {
            console.warn('Copy failed', error);
            setCopiedText(null);
            return false;
        }
    };

    return [copiedText, copy];
};

const CopyButton: FC<CopyButtonProps> = ({ text, onCopy = () => {} }) => {
    const [value, copy] = useCopyToClipboard();

    const copyToClipboard = (): void => {
        copy(`${text}`);
    };

    return (
        <CopyIconStyled
            className="input_copy"
            onClick={(e) => {
                onCopy(e);
                copyToClipboard();
            }}
        >
            {value ? (
                <Icon svg={iconTypes.check} fill={color.green} />
            ) : (
                <Icon svg={iconTypes.copy} />
            )}
        </CopyIconStyled>
    );
};

export default CopyButton;
