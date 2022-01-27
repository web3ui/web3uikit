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
    position,
}: NotificationProps) => {
    const [visible, setVisible] = useState(isVisible);
    const [positionRelativeConfigState, setPositionRelativeConfigState] =
        useState({});
    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    useEffect(() => {
        if (isPositionRelative) {
            switch (position) {
                case 'topL':
                    setPositionRelativeConfigState({
                        ...positionRelativeConfig,
                        top: '0px',
                        left: '0px',
                    });
                    break;
                case 'topR':
                    console.log('in');
                    setPositionRelativeConfigState({
                        ...positionRelativeConfig,
                        top: '0px',
                        right: '0px',
                    });
                    break;
                case 'bottomL':
                    setPositionRelativeConfigState({
                        ...positionRelativeConfig,
                        bottom: '0px',
                        left: '0px',
                    });
                    break;
                case 'bottomR':
                    setPositionRelativeConfigState({
                        ...positionRelativeConfig,
                        bottom: '0px',
                        right: '0px',
                    });
                    break;
            }
        }
    }, [position]);

    return (
        <>
            {positionRelativeConfigState && (
                <NotificationStyled
                    id={id}
                    data-testid={'test-notification-id'}
                    isVisible={visible}
                    isPositionRelative={isPositionRelative}
                    positionRelativeConfig={positionRelativeConfigState}
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
            )}
        </>
    );
};

export default Notification;
