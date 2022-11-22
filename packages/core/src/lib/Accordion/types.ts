import { ReactNode } from 'react';

export const theme = ['blue', 'green', 'red', 'yellow'] as const;
export type TTheme = typeof theme[number];

export interface AccordionProps {
    /**
     * each accordion needs a unique ID
     */
    id: string;

    /**
     * each accordion needs a title
     */
    title: string | JSX.Element;

    /**
     * each accordion needs a content
     */
    children: JSX.Element | JSX.Element[];

    /**
     * you can pass a sub title
     */
    subTitle?: string | JSX.Element;

    /**
     * You can set the accordion to be open by default
     */
    isExpanded?: boolean;

    /**
     * Select a color theme
     */
    theme?: TTheme;

    /**
     * A tag will render if you give it some text
     */
    tagText?: string;

    /**
     * Show a lock icon the opens with the accordion
     */
    hasLockIcon?: boolean;
}
