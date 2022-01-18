export type RadiosValidate = {
    required?: boolean;
};

export interface RadiosProps {
    /**
     * this collection of radio buttons needs an ID to group them
     */
    id: string;

    /**
     * you must supply radio button items, each of these should be a string
     */
    items: string[];

    /**
     * you can supply a title for the radio group, it will return a HTML legend tag stayed as an H3
     */
    title?: string;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * You can validate your radios
     */
    validation?: RadiosValidate;
}
