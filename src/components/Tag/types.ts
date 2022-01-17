export type Tone = 'dark' | 'light';

export interface TagProps {
    /**
     * The tag ID will be generated if not assigned
     */
    id?: string;

    /**
     * The text to display in the tag
     */
    text: string;

    /**
     * Set Theme of tag
     */
    theme?: 'regular' | 'status' | 'discount';

    /**
     * Set if tag is active. Must set theme to 'status' before
     */
    active?: boolean;

    /**
     * Choose a color for the tag
     */
    color?: 'green' | 'red' | 'grey' | 'yellow' | 'blue' | 'purple' | 'pink';

    /**
     * Choose a tone for the selected color
     */
    tone?: Tone;
}
