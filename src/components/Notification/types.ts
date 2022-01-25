import { iconTypes } from '../../components/Icon/collection';

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
    icon?: iconTypes;

    /**
     * set if notification is visable
     */
    isVisible?: boolean;

    /**
     * set if position relative to container
     */
    isPositionRelative?: boolean;

    /**
     * If isPositionRelative relative is true use this to fine tune exact positioning
     */
    positionRelativeConfig?: IPositionRelativeConfig;
}

export interface IPositionRelativeConfig {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
}
