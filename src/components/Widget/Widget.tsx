import { IWidgetProps } from './types';
import WidgetStyles from './Widget.styles';
import colors from '../../styles/colors';
import React from 'react';
import { Typography } from '../Typography';
const Widget: React.FC<IWidgetProps> = ({ children, info, title }) => {
    return (
        <WidgetStyles.WidgetStyled>
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
        </WidgetStyles.WidgetStyled>
    );
};

export default Widget;
