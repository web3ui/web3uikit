import React from 'react';
import { TCustomize } from '../../interfaces/customize';
import { TThemeName } from '@web3uikit/styles';

export interface NotificationProps extends INotificationStyled {
    /**
     * The notification ID will generated if not assigned
     */
    id: string;

    /**
     * The title to display in notification
     */
    title?: string;

    /**
     * Set element/text that will be shown within the tooltip
     */
    message: JSX.Element | string;

    /**
     * set an icon to show inside the notification
     */
    icon?: React.ReactElement;

    /**
     * used for dispatching state to context
     */

    dispatch: (value: NotificationActionType) => void;
}

export interface INotificationStyled extends INotificationContainer {
    /**
     * customize the heck out of it
     */
    customize?: TCustomize;

    /**
     * starts close animation when true
     */
    isClosing?: boolean;

    /**
     * pick a color theme
     */
    theme?: TThemeName;

    /**
     * type
     */
    type: notifyType;
}

export interface INotificationContainer {
    /**
     * position  of element
     */
    position: IPosition;
}

export type IPosition = 'topR' | 'topL' | 'bottomR' | 'bottomL';

export type notifyType = 'error' | 'info' | 'success' | 'warning';

export type NotificationActionType = {
    type: 'add_notification' | 'remove_notification' | 'clear_notifications';
    payload: PayloadType;
    id: string;
};

export type PayloadType = {
    icon?: React.ReactElement;
    iconColor?: string;
    id?: string;
    message?: string;
    position: IPosition;
    theme?: TThemeName;
    title?: string;
    type: notifyType;
};

export interface IToasts {
    topR: PayloadType[];
    topL: PayloadType[];
    bottomR: PayloadType[];
    bottomL: PayloadType[];
}
