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
    title: JSX.Element;

    /**
     * the subtitle component of the Card
     */
    subTitle: string;

    /**
     * the description title component of the Card
     */
    descriptionTitle: string;
}
