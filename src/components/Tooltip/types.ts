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
	 * Set Position of Tooltip
	 */
	position?: "top" | "bottom" | "left" | "right";
}