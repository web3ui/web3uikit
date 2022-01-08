export interface SelectProps {

    /**
     * id will be generated automatically if not set
     */
    id?: string;

    /**
     * children should be Array out of <Option selected={boolean} /> components
     */
    children: Array<React.ReactNode>;

    /**
     * returns selected option value
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * set theme of selector
     */
    theme?: "regular" | "imgLeft";

    /**
     * set title/label of dropdown
     */
    title?: string;

}

export interface OptionProps {

    /**
     * id will be generated automatically if not set
     */
    id?: string;

    /**
     * set if option is selected
     */
    selected?: boolean;

    /**
     * must set value of option
     */
    value: string;
}