export interface AvatarProps {}

export type Theme = 'image' | 'letters';

export interface AvatarProps {
    /**
     * The layout for the user
     */
    theme: Theme;

    /**
     * you can set rounded edge to display the avatar in a circle
     */
    isRounded?: boolean;

    /**
     * pass two letters, like the users initials, BG for example
     */
    text?: string;

    /**
     * pass a valid url for an image
     */
    image?: string;
}
