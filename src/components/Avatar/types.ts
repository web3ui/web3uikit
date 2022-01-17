export interface AvatarProps {}

export type Theme = 'image' | 'letters';

export interface AvatarProps {
    /**
     * The avatar theme (initial letters or image)
     */
    theme: Theme;

    /**
     * Is Avatar Rounded
     */
    isRounded?: boolean;

    /**
     * The initial letters if Theme is `letters`
     */
    text?: string;

    /**
     * The image to use
     */
    image?: string;
}
