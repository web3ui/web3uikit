export interface InputProps {
    /**
     * toggle browsers ability to auto complete the input
     */
    autoComplete?: boolean;

    /**
     * it is best to set a unique ID for each input to verify change events
     */
    id?: string;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: string;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * a short piece of text to fill the input before the user interacts
     */
    placeholder?: string;

    /**
     * types of input available
     */
    type?: "text" | "number" | "email" | "tel" | "password";

    /**
     * you can pass a default value so the input is pre-filled
     */
    value?: string;

    /**
     * please give a descriptive name to the input, it help with accessibility
     */
    name?: string;

    /**
     * the input can use state to react to user interaction
     */
    state?: "error" | "confirmed";
}