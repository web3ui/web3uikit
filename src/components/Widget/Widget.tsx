import React from 'react';
import colors from '../../styles/colors';
import { Typography } from '../Typography';
import { IWidgetProps } from './types';
import styles from './Widget.styles';

const { DivStyled } = styles;

const Widget: React.FC<IWidgetProps> = ({ children, info, title }) => {
    return (
        <DivStyled data-testid="widget-container">
            <div>
                <Typography
                    data-testid="widget-title"
                    color={colors.blueDark}
                    variant="caption12"
                    weight="400"
                >
                    {title}
                </Typography>
                <Typography
                    data-testid="widget-info"
                    variant="h3"
                    weight="400"
                    color={colors.blueDark}
                >
                    {info}
                </Typography>
            </div>

            {children}
        </DivStyled>
    );
};

export default Widget;
