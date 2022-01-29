export type Tone = 'dark' | 'light';

export interface TagProps {
    /**
     * you can set an ID
     */
    id?: string;

    /**
     * text to display to the users, should be some sort of status
     */
    text: string;

    /**
     * set layout of the element
     */
    theme?: 'regular' | 'status' | 'discount';

    /**
     * if theme = 'status', active can be set true, to show a tick icon
     */
    active?: boolean;

    /**
     * choose a color for the tag
     */
    color?: 'green' | 'red' | 'grey' | 'yellow' | 'blue' | 'purple' | 'pink';

    /**
     * choose a tone for the selected color
     */
    tone?: Tone;
}
