import React from 'react';
import { CopyButton } from '../../CopyButton';
import { Tooltip } from '../../Tooltip';
import { ICredentialsProps } from '../types';
import styles from '../Credentials.styles';

const { DivIconWrapperStyled } = styles;

const CustomCopyButton: React.FC<Pick<
    ICredentialsProps,
    'customize' | 'hasIconTooltip' | 'text' | 'onCopy'
>> = ({ text, customize, hasIconTooltip, onCopy }) => {
    return hasIconTooltip ? (
        <Tooltip
            content="Copy"
            position="bottom"
            arrowSize={4}
            customize={{
                fontSize: '12px',
                fontWeight: '400',
                margin: 'auto 0',
                padding: '4px 8px',
                onHover: 'lighten',
            }}
            children={
                <DivIconWrapperStyled>
                    <CopyButton
                        fill={customize?.color}
                        iconSize={24}
                        onCopy={onCopy}
                        text={text}
                    />
                </DivIconWrapperStyled>
            }
        />
    ) : (
        <CopyButton
            fill={customize?.color}
            iconSize={24}
            onCopy={onCopy}
            text={text}
        />
    );
};

export default CustomCopyButton;
