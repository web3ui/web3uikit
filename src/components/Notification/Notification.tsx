import { NotificationProps } from './types';
import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import {
    BoxStyled,
    FlexStyled,
    NotificationStyled,
    ParagraphStyled,
    SpanStyled,
} from './Notification.styles';
import color from '../../styles/colors';

const Notification: React.FC<NotificationProps> = ({
    id = String(Date.now()),
    icon,
    message,
    title = 'New Message',
    isVisible = false,
    isPositionRelative = false,
    positionRelativeConfig = {},
}: NotificationProps) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    return (
        <>
            <NotificationStyled
                id={id}
                data-testid={'test-notification-id'}
                isVisible={visible}
                isPositionRelative={isPositionRelative}
                positionRelativeConfig={positionRelativeConfig}
            >
                <Icon
                    fill={`${color.white}`}
                    size={20}
                    svg={icon || iconTypes.bell}
                />
                <BoxStyled>
                    <FlexStyled>
                        <ParagraphStyled
                            data-testid={'test-notification-title'}
                        >
                            {title}
                        </ParagraphStyled>
                        <div
                            data-testid={'test-notification-x'}
                            onClick={() => setVisible(false)}
                        >
                            <Icon
                                fill={`${color.white}`}
                                size={20}
                                svg={iconTypes.x}
                            />
                        </div>
                    </FlexStyled>
                    <SpanStyled data-testid={'test-notification-message'}>
                        {message}
                    </SpanStyled>
                </BoxStyled>
            </NotificationStyled>
        </>
    );
};

export default Notification;
