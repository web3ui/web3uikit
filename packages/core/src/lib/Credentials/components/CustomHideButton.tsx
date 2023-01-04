import React from 'react';
import { HideButton } from '../../HideButton';
import { Tooltip } from '../../Tooltip';
import { ICredentialsProps } from '../types';
import styles from '../Credentials.styles';

const { DivIconWrapperStyled } = styles;

const CustomHideButton: React.FC<Pick<ICredentialsProps, 'hasIconTooltip'> & {
    isValueHidden: boolean;
    onHideToggle: () => void;
}> = ({ isValueHidden, onHideToggle, hasIconTooltip }) => {
    return hasIconTooltip ? (
        <Tooltip
            content={isValueHidden ? 'View' : 'Hide'}
            position="bottom"
            arrowSize={4}
            customize={{
                fontSize: '12px',
                fontWeight: '400',
                margin: 'auto 8px auto 0',
                padding: '4px 8px',
                onHover: 'lighten',
            }}
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
        />
    ) : (
        <HideButton
            onToggle={() => {
                onHideToggle();
            }}
            isHidden={isValueHidden}
        />
    );
};

export default CustomHideButton;
