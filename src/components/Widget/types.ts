import {iconTypes} from "../Icon/collection";

export interface WidgetProps {
    /**
     * set id of widget
     */
    id?: string;

    /**
     * set description
     */
    description: string;

    /**
     * set hint text
     */
    hint?: string;

    /**
     * set icon
     */
    icon?: iconTypes;

    /**
     * set icon position
     */
    iconLayout: "leading" | "trailing" | "none"

    /**
     * set title of widget
     */
    title: string;
}

export type information = {
    title: string;
    description: string;
    stats?: string;
}