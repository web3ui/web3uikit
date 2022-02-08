import { NotificationProps } from './types';
import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { iconTypes, TIconType } from '../Icon/collection';
import NotificationStyles from './Notification.styles';
import color from '../../styles/colors';

const {
    BarStyled,
    CloseWrapperStyled,
    IconWrapperStyled,
    NotificationStyled,
    SpanStyled,
    TextContentStyled,
    TitleStyled,
} = NotificationStyles;

const Notification: React.FC<NotificationProps> = ({
    dispatch,
    icon,
    id,
    message,
    title = 'New Message',
    type = 'info',
    position = 'topL',
}: NotificationProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
    const [barWidth, setBarWidth] = useState(0);

    const notificationWidth = 320;

    const startTimer = () => {
        if (isClosing) return;
        const idInt = setInterval(() => {
            setBarWidth((prev) => {
                if (prev < notificationWidth) return prev + 1;

                clearInterval(idInt);
                return prev;
            });
        }, 20);

        setIntervalId(idInt);
    };

    const pauseTimer = () => {
        clearInterval(intervalId as NodeJS.Timeout);
    };

    useEffect(() => {
        if (isClosing) return;
        if (barWidth === notificationWidth) closeNotification();
    }, [barWidth, isClosing]);

    useEffect(() => startTimer(), []);

    const closeNotification = () => {
        pauseTimer();
        setIsClosing(true);
        setTimeout(() => {
            // @ts-ignore
            dispatch({
                type: 'remove_notification',
                id,
            });
        }, 400);
    };

    const getIcon = (): TIconType => {
        if (icon) return icon;
        if (type === 'error' || type === 'warning') {
            return iconTypes.exclamation;
        }
        if (type === 'info') return iconTypes.info;
        return iconTypes.checkmark;
    };

    return (
        <NotificationStyled
            data-testid={'test-notification-id'}
            id={id}
            isClosing={isClosing}
            onMouseEnter={pauseTimer}
            onMouseLeave={startTimer}
            type={type}
            position={position}
        >
            <IconWrapperStyled data-testid={'test-notification-icon-wrapper'}>
                <Icon size={24} svg={getIcon()} />
            </IconWrapperStyled>
            <TextContentStyled>
                <TitleStyled data-testid={'test-notification-title'}>
                    {title}
                </TitleStyled>
                <CloseWrapperStyled
                    onClick={closeNotification}
                    data-testid={'test-notification-x'}
                >
                    <Icon size={24} svg={iconTypes.x} fill={color.greyIcons} />
                </CloseWrapperStyled>
                <SpanStyled data-testid={'test-notification-message'}>
                    {message}
                </SpanStyled>
            </TextContentStyled>
            <BarStyled style={{ width: barWidth }} />
        </NotificationStyled>
    );
};

export default Notification;
