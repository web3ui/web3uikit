import { SVGProps } from 'react';

export interface SVGRProps {
    title?: string;
    titleId?: string;
    isResponsive?: boolean;
}

export type TIconType = SVGProps<SVGSVGElement> & SVGRProps;
