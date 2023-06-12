export interface IButtonProps {
    /**
     * content of the element
     */
    children: JSX.Element[] | JSX.Element;

    /**
     * content of the element
     */
    className?: string;

    /**
     * set element to be noninteractive
     */
    disabled?: boolean;

    /**
     * call back function
     */
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    /**
     * set the size of the element
     */
    size?: 'small' | 'regular' | 'large' | 'xl';

    /**
     * apply custom CSS
     */
    style?: React.CSSProperties;

    /**
     * Set the HTML button type for form interaction
     */
    type?: 'button' | 'submit' | 'reset';
}
