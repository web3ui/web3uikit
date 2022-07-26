import { SVGProps } from 'react';
export interface SVGRProps {
    title?: string;
    titleId?: string;
}

export type TIconType = SVGProps<SVGSVGElement> & SVGRProps;
