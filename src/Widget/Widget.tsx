import { IWidgetProps } from './types';
import WidgetStyles from './Widget.styles';
import React from 'react';
import { Typography } from '../components/Typography';
const Widget: React.FC<IWidgetProps> = ({ children, info, topic }) => {
    return (
        <WidgetStyles.WidgetStyled>
            <div>
                <Typography
                    data-testid="widget-topic"
                    variant="caption12"
                    weight="400"
                >
                    {topic}
                </Typography>
                <Typography data-testid="widget-info" variant="h4" weight="600">
                    {info}
                </Typography>
            </div>
            {children}
        </WidgetStyles.WidgetStyled>
    );
};

export default Widget;
