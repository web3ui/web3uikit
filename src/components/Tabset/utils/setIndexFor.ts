import { Children, cloneElement } from 'react';
import type { ReactElement } from 'react';

type IndexProps = {
    index?: number;
}

export const setIndexFor = <T extends IndexProps>(children: ReactElement<T>[]) => {
    return Children.map<ReactElement<T>, ReactElement<T>>(children, (child, index) => {
        return cloneElement(child, { index });
    })
}