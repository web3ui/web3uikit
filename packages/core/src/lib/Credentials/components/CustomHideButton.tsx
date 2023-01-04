import React from 'react';
import { HideButton } from '../../HideButton';
import { Tooltip } from '../../Tooltip';
import { ICredentialsProps } from '../types';
import styles from '../Credentials.styles';

const { DivIconWrapperStyled } = styles;

const CustomHideButton: React.FC<Pick<ICredentialsProps, 'hasIconTooltip'> & {
    isValueHidden: boolean;
    onHideToggle: () => void;
}> = ({ hasIconTooltip, isValueHidden, onHideToggle }) => {
    return hasIconTooltip ? (
        <Tooltip
            arrowSize={4}
            children={
                <DivIconWrapperStyled>
                    <HideButton
                        onToggle={() => {
                            onHideToggle();
                        }}
                        isHidden={isValueHidden}
                    />
                </DivIconWrapperStyled>
            }
            content={isValueHidden ? 'View' : 'Hide'}
            customize={{
                fontSize: '12px',
                fontWeight: '400',
                margin: 'auto 8px auto 0',
                onHover: 'lighten',
                padding: '4px 8px',
            }}
            position="bottom"
        />
    ) : (
        <HideButton
            isHidden={isValueHidden}
            onToggle={() => {
                onHideToggle();
            }}
        />
    );
};

export default CustomHideButton;
