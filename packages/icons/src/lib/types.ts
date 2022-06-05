import type { TIconType } from './collection';

export interface IconProps {
    /**
     * set a color for the SVG, its a good idea to import these from styles/colors but its default is inherit so you can set the fill in CSS either
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
    svg: TIconType;

    /**
     * CSS style props
     */
    style?: React.CSSProperties;
}
