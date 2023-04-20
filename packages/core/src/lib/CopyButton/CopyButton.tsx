import { FC, useState } from 'react';
import { Tooltip } from '../Tooltip';
import { color } from '@web3uikit/styles';
import { Check, Copy } from '@web3uikit/icons';
import { ButtonStyled } from './CopyButton.styles';
import {
    CopiedValue,
    CopyButtonIconProps,
    CopyButtonProps,
    CopyFn,
} from './types';

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

const CopyButtonIcon: FC<CopyButtonIconProps> = ({
    fill,
    iconSize,
    copied,
}) =>
    copied ? (
        <Check
            title="check icon"
            titleId="copybutton check icon"
            fill={color.mint40}
            fontSize={iconSize}
        />
    ) : (
        <Copy
            title="copy icon"
            titleId="copybutton copy icon"
            fill={fill || color.navy40}
            fontSize={iconSize}
        />
    );

const CopyButton: FC<CopyButtonProps> = ({
    fill,
    iconSize = 24,
    onCopy = () => {},
    revertIn = 3000,
    hasTooltip = false,
    text,
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
            type="button"
            iconSize={iconSize}
            onClick={(e) => {
                onCopy(e);
                copyToClipboard();
            }}
            {...props}
        >
            {hasTooltip ? (
                <Tooltip
                    arrowSize={4}
                    children={
                        <CopyButtonIcon
                            fill={props.customize?.color}
                            iconSize={iconSize}
                            copied={value}
                        />
                    }
                    content="Copy"
                    customize={props.customize}
                    position="bottom"
                />
            ) : (
                <CopyButtonIcon
                    fill={props.customize?.color}
                    iconSize={iconSize}
                    copied={value}
                />
            )}
        </ButtonStyled>
    );
};

export default CopyButton;
