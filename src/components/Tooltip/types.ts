export interface TooltipProps {
    /**
	 * The tooltip ID will be generated if not assigned
	 */
	id?: string;

	/**
	 * Set text to show in tooltip
	 */
	text: string;

	/**
	 * Set position of tooltip
	 */
	position?: "top" | "bottom" | "left" | "right";

	/**
	 * Set children which should have a tooltip
	 */
	children: Array<React.ReactNode>
}