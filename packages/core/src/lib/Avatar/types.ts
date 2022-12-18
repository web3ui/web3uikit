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
     * pass any string and it will show the first two characters
     */
    text?: string;

    /**
     * specify how many characters you want the text trimmed to
     */
    characterAmount?: number;

    /**
     * pass a valid url for an image
     */
    image?: string;

    /**
     * Avatar Background, if not specified we will generate a color depending on the avatarKey
     */
    avatarBackground?: string;

    /**
     * avatarKey, computes background color off the key passed in here. Note AvatarBackground will override this prop
     */
    avatarKey?: number;

    /**
     * Text Color of avatar
     */
    textColor?: string;

    /**
     * Border Radius of avatar
     */
    borderRadius?: number;

    /**
     * Font size of text within the avatar
     */
    fontSize?: number;

    /**
     * Size of the avatar
     */
    size?: number;
}
