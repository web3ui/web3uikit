export interface ModalProps {
    /**
     * The ID of the modal will be generated automatically if not set
     */
    id?: string;

    /**
     * set content of modal
     */
    children: Array<React.ReactNode>;

    /**
     * set text of 'Cancel' button
     */
    cancelText?: string;

    /**
     * set if 'Cancel' button is disabled
     */
    isCancelDisabled?: boolean;

    /**
     * set if 'Ok' button is disabled
     */
    isOkDisabled?: boolean;

    /**
     * set if modal is visible
     */
    isVisible?: boolean;

    /**
     * Run function on 'Cancel'
     */
    onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    /**
     * Run function on 'Ok'
     */
    onOk?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    /*
     *  set text of 'Ok' button
     */
    okText?: string;

    /**
     * set title of modal
     */
    title?: string;
}
