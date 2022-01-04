export interface PillProps {
    
    /**
     * ID of pill will be generated automatically if not set
     */
    id?: string

    /**
     * Child of tab
     */
    children?: Array<React.ReactNode>

    /**
     * Set if tab is disabled
     */
    disabled?: boolean

    /**
     * Set text inside tab
     */
    text?: string

}