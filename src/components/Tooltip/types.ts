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
	 * Set visibility of Tooltip
	 */
	active?: boolean;

	/**
	 * Set Position of Tooltip
	 */
	position?: "top" | "bottom" | "left" | "right";
}