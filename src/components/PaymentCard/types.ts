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
     * the component can be set as disabled
     */
    title: JSX.Element;
    /**
     * the component can be set as disabled
     */
    subTitle: string;
    /**
     * the component can be set as disabled
     */
    descriptionTitle: string;
}
