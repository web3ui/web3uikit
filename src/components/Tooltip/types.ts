export interface TooltipProps {
    /**
	 * The Tooltip ID will be generated if not assigned
	 */
	id?: string;

	/**
	 * The text in Tooltip
	 */
	text?: string;

	/**
	 * Set position of Tooltip
	 */
	position?: "top" | "bottom" | "left" | "right";

	/**
	 * Set children which should have a Tooltip 
	 */
	children?: Array<React.ReactNode>
}