export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];

export interface TodoProps {
    /**
     * Input label
     */
    label: string;

    /**
     * an optional button text
     */
    buttonText?: string;

    /**
     * an optional params which determine if the todo list content width will be full 100%
     */
    fullWidth?: boolean;

    /**
     * when the user changes the array by adding or removing items
     */
    onChange?: (updateList: string[]) => void;

    /**
     * an optional regular expression to match the input text
     */
    pattern?: string;

    /**
     * a list which will be rendered initially
     */
    todos?: string[];
}

export type ColorProps =
    | 'green'
    | 'red'
    | 'grey'
    | 'yellow'
    | 'blue'
    | 'blueLight'
    | 'purple'
    | 'pink';
