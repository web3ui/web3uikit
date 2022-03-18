import React, { FC, useState } from 'react';
import color from '../../styles/colors';
import { Icon, iconTypes } from '../Icon';
import { ButtonStyled } from './CopyButton.styles';
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

const CopyButton: FC<CopyButtonProps> = ({
    text,
    iconSize = 24,
    onCopy = () => {},
    revertIn = 3000,
}) => {
    const [, copy] = useCopyToClipboard();
    const [value, set] = useState(false);

    const copyToClipboard = (): void => {
        copy(`${text}`);
        set(true);
        setTimeout(() => {
            set(false);
        }, revertIn);
    };

    return (
        <ButtonStyled
            className="input_copy"
            data-testid="copy-icon"
            iconSize={iconSize}
            onClick={(e) => {
                onCopy(e);
                copyToClipboard();
            }}
        >
            <Icon
                fill={value ? color.green : color.blue}
                size={iconSize}
                svg={value ? iconTypes.check : iconTypes.copy}
            />
        </ButtonStyled>
    );
};

export default CopyButton;
