import { NotificationProps } from './types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { notificationStyles } from './Notification.styles';
import color from '../../styles/colors';

const NotificationStyled = styled.div`
    ${notificationStyles.initialStyles}
`;

const BoxStyled = styled.div`
    ${notificationStyles.box}
`;

const SpanStyled = styled.span`
    ${notificationStyles.message}
`;

const ParagraphStyled = styled.p`
    ${notificationStyles.title}
`;

const FlexStyled = styled.div`
    ${notificationStyles.flex}
`

const Notification: React.FC<NotificationProps> = ({
    id = String(Date.now()),
    icon,
    message,
    title = "New Message",
    isVisible = false,
}: NotificationProps) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible)
    }, [isVisible])

    return (
        <>
        {visible && (
            <NotificationStyled id={id} data-testid={'test-notification-id'}>
            <Icon fill={`${color.white}`} size={20} svg={icon || iconTypes.bell} />
            <BoxStyled>
                <FlexStyled>
                <ParagraphStyled data-testid={'test-notification-title'}>
                    {title}
                </ParagraphStyled>
                <div
                    data-testid={'test-notification-x'}
                    onClick={() => setVisible(false)}
                >
                    <Icon fill={`${color.white}`} size={20} svg={iconTypes.x} />
                </div>
                </FlexStyled>
                <SpanStyled data-testid={'test-notification-message'}>
                {message}
                </SpanStyled>
            </BoxStyled>
            </NotificationStyled>
        )}
        </>
    );
};

export default Notification;
