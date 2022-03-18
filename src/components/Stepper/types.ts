export type Step = {
    /**
     * pass any content to the step
     */
    content: React.ReactNode;

    /**
     * give the step a title
     */
    title?: string;
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
}

/**
 * internal props for rendering CSS
 */
export interface StepNumberProps {
    activeStep: number;
    stepTotal: number;
    thisStep: number;
}
