import { color } from '@web3uikit/styles';
export interface IPlanCardProps {
    /**
     * the description/features of the current plan
     */
    description: string[];

    /**
     * The footer/button of the card
     */
    footer: JSX.Element;

    /**
     * the component can be set as disabled
     */
    isActive: boolean;

    /**
     * Is the plan the current users plan
     */
    isCurrentPlan: boolean;

    /**
     * the title component of the Card
     */
    title?: JSX.Element;

    /**
     * the subtitle component of the Card
     */
    subTitle: JSX.Element;

    /**
     * the description title component of the Card
     */
    descriptionTitle: JSX.Element;

    /**
     * a horizontal line on the top
     */
    horizontalLine: boolean;

    /**
     * border color
     */
    borderColor: typeof color | string;

    /**
     * Card background color
     */
    backgroundColor?: typeof color | string;

    /**
     * Custom icon for description list
     */

    icon?: JSX.Element;

    /**
     * set custom height
     */

    height?: string;

    /**
     *  set custom width
     */

    width?: string;

    /**
     * set custom  max width
     */

    maxWidth?: string;
}
