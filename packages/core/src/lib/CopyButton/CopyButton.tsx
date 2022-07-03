import { FC, useState } from 'react';
import { color } from '@web3uikit/styles';
import { Check, Copy } from '@web3uikit/icons';
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
    ...props
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
            data-testid="test-copy-button"
            iconSize={iconSize}
            onClick={(e) => {
                onCopy(e);
                copyToClipboard();
            }}
            {...props}
        >
            {value ? (
                <Check
                    title="check icon"
                    titleId="copybutton check icon"
                    fill={color.green}
                    fontSize={iconSize}
                />
            ) : (
                <Copy
                    title="copy icon"
                    titleId="copybutton copy icon"
                    fill={color.blue}
                    fontSize={iconSize}
                />
            )}
        </ButtonStyled>
    );
};

export default CopyButton;
