import React from 'react';
import { CopyButton } from '../../CopyButton';
import { Tooltip } from '../../Tooltip';
import { ICredentialsProps } from '../types';
import styles from '../Credentials.styles';

const { DivIconWrapperStyled } = styles;

const CustomCopyButton: React.FC<Pick<
    ICredentialsProps,
    'customize' | 'hasIconTooltip' | 'text' | 'onCopy'
>> = ({ customize, hasIconTooltip, onCopy, text }) => {
    return hasIconTooltip ? (
        <Tooltip
            arrowSize={4}
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
            content="Copy"
            customize={{
                fontSize: '12px',
                fontWeight: '400',
                margin: 'auto 0',
                onHover: 'lighten',
                padding: '4px 8px',
            }}
            position="bottom"
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
