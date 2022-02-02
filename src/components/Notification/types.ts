import { TIconType } from '../../components/Icon/collection';

export interface NotificationProps {
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
    icon?: TIconType;

    /**
     * set if notification is visable
     */
    isVisible?: boolean;

    /**
     * set if position relative to container
     */
    isPositionRelative?: boolean;

    /**
     * If isPositionRelative relative is true use this to position element
     */
    position?: IPosition;

    /**
     * If isPositionRelative relative is true use this to fine tune exact positioning
     */
    positionRelativeConfig?: IPositionRelativeConfig;
}

export interface IPositionRelativeConfig {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width?: string;
    height?: string;
}

export type IPosition = 'topR' | 'topL' | 'bottomR' | 'bottomL';
