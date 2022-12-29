import { SVGProps } from 'react';

export interface SVGRProps {
    title?: string;
    titleId?: string;
    isResponsive?: boolean;
    style?: SVGSVGElement['style'];
}

export type TIconType = SVGProps<Omit<SVGSVGElement, 'style'>> & SVGRProps;
