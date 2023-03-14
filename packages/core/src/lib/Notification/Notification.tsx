import { NotificationProps, notifyType } from './types';
import { useEffect, useState } from 'react';
import { getNotificationColor } from './themes/themes';
import { Checkmark, Cross, Exclamation, Info } from '@web3uikit/icons';
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
    customize,
    dispatch,
    icon,
    id,
    message,
    position = 'topL',
    title = 'New Message',
    type = 'info',
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
            return (
                <Exclamation
                    title="exclamation icon"
                    titleId="notification exclamation icon"
                    fill={getIconColor(type)}
                />
            );
        }
        if (type === 'info')
            return (
                <Info
                    title="info icon"
                    titleId="notification info icon"
                    fill={getIconColor(type)}
                />
            );
        return (
            <Checkmark
                title="checkmark icon"
                titleId="notification checkmark icon"
                fill={getIconColor(type)}
            />
        );
    };

    const getIconColor = (type: notifyType): string => {
        return getNotificationColor(type);
    };

    return (
        <NotificationStyled
            customize={customize}
            data-testid="test-notification"
            id={id}
            isClosing={isClosing}
            onMouseEnter={pauseTimer}
            onMouseLeave={startTimer}
            position={position}
            type={type}
            {...props}
        >
            <IconWrapperStyled data-testid="test-notification-icon-wrapper">
                {getIcon()}
            </IconWrapperStyled>
            <TextContentStyled>
                <TitleStyled
                    customize={customize}
                    data-testid="test-notification-title"
                >
                    {title}
                </TitleStyled>
                <CloseWrapperStyled
                    onClick={closeNotification}
                    data-testid="test-notification-x"
                >
                    <Cross
                        title="cross icon"
                        titleId="notification cross icon"
                        fontSize={10}
                        fill={color.gray40}
                    />
                </CloseWrapperStyled>
                <SpanStyled data-testid="test-notification-message">
                    {message}
                </SpanStyled>
            </TextContentStyled>
            <BarStyled style={{ width: barWidth }} />
        </NotificationStyled>
    );
};

export default Notification;
