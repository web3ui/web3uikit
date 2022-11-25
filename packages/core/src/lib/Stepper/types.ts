export type Step = {
    /**
     * pass any content to the step
     */
    content: React.ReactNode | string;

    /**
     * give the step a title
     */
    title?: string;

    /**
     * title used to display next to step in vertical orientation
     */
    stepTitle?: string;
};

export interface StepperProps {
    /**
     * pass a custom message for when the user finishes
     */
    completeMessage?: string | React.ReactNode;

    /**
     * pass a custom title for when the user finishes
     */
    completeTitle?: string;

    /**
     * show / hide nav buttons
     */
    hasNavButtons?: boolean;

    /**
     * pass help content to the user
     */
    helperContent?: React.ReactNode;

    /**
     * when the process is complete this event will fire
     */
    onComplete?: () => void;

    /**
     * This event will fire when next button clicked
     */
    onNext?: (stepNumber: number) => void;

    /**
     * This event will fire when prev button is clicked
     */
    onPrev?: (stepNumber: number) => void;

    /**
     * Pass the step the user should start on
     * 0 = loading
     * 1 = start
     */
    step?: number;

    /**
     * the Stepper needs data
     */
    stepData: Step[];

    /**
     * header width pass an amount of pixels for responsive max width
     */
    headerWidth?: number;

    /**
     * position of the stepper
     */
    orientation?: 'horizontal' | 'vertical';

    /**
     * content padding
     */
    contentPadding?: string;
}

/**
 * internal props for rendering CSS
 */
export interface StepNumberProps {
    activeStep: number;
    stepTotal: number;
    thisStep: number;
    orientation: 'horizontal' | 'vertical';
}

export interface IStepperNumberProps extends Partial<StepperProps> {
    activeStep: number;
}
