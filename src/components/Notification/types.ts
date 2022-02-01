import { iconTypes } from '../../components/Icon/collection';

export interface NotificationProps extends INotificationStyled {
    /**
     * The notification ID will generated if not assigned
     */
    id?: string;

    /**
     * The title to display in notification
     */
    title?: string;

    /**
     * The message to display in notification
     */
    message: string;

    /**
     * set an icon to show inside the notification
     * import { iconTypes } from "../../components/Icon/collection"
     */
    icon?: iconTypes;
}

export interface INotificationStyled {
    /**
     * type
     */
    type: type;

    /**
     * set if notification is visable
     */
    isVisible?: boolean;

    /**
     * position  of element
     */
    position?: IPosition;
}

export type IPosition = 'topR' | 'topL' | 'bottomR' | 'bottomL';

export type type = 'error' | 'info' | 'success' | 'warning';
