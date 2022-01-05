import { iconTypes } from "./collection";

export interface IconProps {
    /**
     * set a color for the SVG, its a good idea to import these from styles/colors
     */
    fill?: string;

    /**
     * set a pixel size, SVGs render as a square icons
     */
    size?: number;

    /**
     * pick the icon SVG you would like to render.
     * import { iconTypes } from "../../components/Icon/collection"
     */
    svg: iconTypes;
}