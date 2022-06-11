import { NotificationProps, notifyType } from './types';
import { useEffect, useState } from 'react';
import { getNotificationColor } from './themes/themes';
import { Ada, Check, Cross, Exclamation, Info } from '@web3uikit/icons';
import NotificationStyles from './Notification.styles';
import { color } from '@web3uikit/styles';

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
    iconColor,
    id,
    message,
    title = 'New Message',
    type = 'info',
    position = 'topL',
    ...props
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

    const getIcon = (): React.ReactElement => {
        if (icon) return icon;
        if (type === 'error' || type === 'warning') {
            return <Exclamation fill={getIconColor(type)} />;
        }
        if (type === 'info') return <Info fill={getIconColor(type)} />;
        return <Check fill={getIconColor(type)} />;
    };

    const getIconColor = (type: notifyType): string => {
        if (iconColor) return iconColor;
        return getNotificationColor(type);
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
            {...props}
        >
            <IconWrapperStyled data-testid={'test-notification-icon-wrapper'}>
                {getIcon()}
            </IconWrapperStyled>
            <TextContentStyled>
                <TitleStyled data-testid={'test-notification-title'}>
                    {title}
                </TitleStyled>
                <CloseWrapperStyled
                    onClick={closeNotification}
                    data-testid={'test-notification-x'}
                >
                    <Cross size={24} fill={color.greyIcons} />
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
