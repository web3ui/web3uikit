export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];

export interface TodoProps {
    // export interface TodoProps extends Array<TodoState> {
    /**
     * an optional params which determine if the todo list content width will be full 100%
    */
    fullWidth?: boolean;

    /**
     * an optional regular expression to match the input text
    */
    pattern?: string;

    /**
     * a list which will be rendered initially
    */
    todos?: [];
    // todos?: Array<TodoState>;
}

export interface TodoState {
    id: number;
    text: string;
}
