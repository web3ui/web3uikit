export const layoutState = ["leading", "trailing"] as const;
export type TLayoutState = typeof layoutState[number];

export interface LinkToProps {
	/**
	 * what is the address you are linking to
	 */
	address: string;

	/**
	 * You can set custom text to the link, or leave blank to see the address
	 */
	text?: string;

	/**
	 * set to an email link or a link to another website
	 */
	type: "email" | "external";

	/**
	 * set the position of the icon, or icon only
	 */
	iconLayout?: TLayoutState;
}
