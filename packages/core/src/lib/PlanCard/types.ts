import { color } from '@web3uikit/styles';
export interface IPlanCardProps {
    /**
     * the features of the current plan
     */
    features: string[];

    /**
     * The footer/button of the card
     */
    footer?: JSX.Element;

    /**
     * Is the active plan of the user
     */
    isCurrentPlan: boolean;

    /**
     * the title component of the Card
     */
    title?: string;

    /**
     * the subtitle component of the Card
     */
    subTitle?: JSX.Element;

    /**
     * a shorter description of the plan in the Card
     */
    description: JSX.Element;

    /**
     * a horizontal line on the top
     */
    horizontalLine?: boolean;

    /**
     * border color
     */
    borderColor?: typeof color | string;

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

    /**
     * set custom  scroll width
     */

    scrollbarWidth?: string;

    /**
     * set custom  scrollbar background
     */

    scrollbarBackground?: string;

    /**
     * set custom  scrollbar track background
     */

    scrollbarTrackBackground?: string;

    /**
     * set custom  scrollbar  background on hover
     */

    scrollbarHoverBackground?: string;

    /**
     * set label at the top of card
     */

    topLabel?: JSX.Element; 

    /**
     * set the price of the plan
     */
    
    price: JSX.Element;

    /**
     * set the button of the planCard
     */

    ctaButton?: JSX.Element;

    /**
     * set the theme color of the planCard
     */
    themeColor?: typeof color | string;

    /**
     * set the color of the icons next to the features
     */
    featuresIconColor?: string;
}
