import { NotificationProps } from './types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { notificationStyles } from './Notification.styles';

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
    message = "Kresimir: Thank you for sharin..",
    title = "New Message",
    active = false,
}: NotificationProps) => {
    const [visible, setVisible] = useState(active);

    useEffect(() => {
        setVisible(active)
    }, [active])

    return (
        <>
        {visible && (
            <NotificationStyled id={id} data-testid={'test-notification-id'}>
            <Icon size={20} svg={icon || iconTypes.bell} />
            <BoxStyled>
                <FlexStyled>
                <ParagraphStyled data-testid={'test-notification-title'}>
                    {title}
                </ParagraphStyled>
                <div
                    data-testid={'test-notification-x'}
                    onClick={() => setVisible(false)}
                >
                    <Icon size={20} svg={iconTypes.x} />
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
