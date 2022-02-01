import { NotificationProps } from './types';
import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import NotificationStyles from './Notification.styles';
import color from '../../styles/colors';
import ReactDOM from 'react-dom';
// import { useNotification } from './NotificationManager';

export const notify = (properties: any, callback: any) => {
    console.log('Hi');
    const { getContainer, ...props } = properties || {};
    const div = document.createElement('div');
    div.setAttribute('id', 'notify-portal');
    // div.style.position = 'absolute';
    if (getContainer) {
        const root = getContainer();
        root.appendChild(div);
    } else {
        document.body.appendChild(div);
    }
    let called = false;

    function ref(notification: Notification) {
        if (called) {
            return;
        }
        called = true;
        callback({
            //   notice(noticeProps) {
            //     notification.add(noticeProps);
            //   },
            //   removeNotice(key) {
            //     notification.remove(key);
            //   },
            component: notification,
            destroy() {
                ReactDOM.unmountComponentAtNode(div);
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
            },

            // Hooks
            //   useNotification() {
            //     return useNotification(notification);
            //   },
        });
    }

    ReactDOM.render(
        [
            <Notification
                message="Somebody messaged you"
                isVisible={true}
                title="New Notification"
                {...props}
                forwardRef={ref}
            />,
        ],
        div,
    );
};

const {
    TextContentStyled,
    CloseWrapperStyled,
    NotificationStyled,
    TitleStyled,
    SpanStyled,
    IconWrapperStyled,
} = NotificationStyles;

const Notification: React.FC<NotificationProps> = ({
    id = String(Date.now()),
    icon,
    message,
    title = 'New Message',
    isVisible = false,
    type = 'info',
    position,
}: NotificationProps) => {
    const [visible, setVisible] = useState(isVisible);
    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    // useEffect(() => {
    //     switch (position) {
    //         case 'topL':
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 top: '0px',
    //                 left: '0px',
    //             });
    //             break;
    //         case 'topR':
    //             console.log('in');
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 top: '0px',
    //                 right: '0px',
    //             });
    //             break;
    //         case 'bottomL':
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 bottom: '0px',
    //                 left: '0px',
    //             });
    //             break;
    //         case 'bottomR':
    //             setPositionRelativeConfigState({
    //                 ...positionRelativeConfig,
    //                 bottom: '0px',
    //                 right: '0px',
    //             });
    //             break;
    //     }
    // }, [position]);

    return (
        <NotificationStyled
            id={id}
            data-testid={'test-notification-id'}
            isVisible={visible}
            type={type}
            position={position}
        >
            <IconWrapperStyled>
                <Icon size={30} svg={icon || iconTypes.copy} />
            </IconWrapperStyled>
            <TextContentStyled>
                <TitleStyled data-testid={'test-notification-title'}>
                    {title}
                </TitleStyled>
                <CloseWrapperStyled onClick={() => setVisible(false)}>
                    <Icon size={24} svg={iconTypes.x} fill={`${color.white}`} />
                </CloseWrapperStyled>
                <SpanStyled data-testid={'test-notification-message'}>
                    {message}
                </SpanStyled>
            </TextContentStyled>
        </NotificationStyled>
    );
};

export default Notification;
