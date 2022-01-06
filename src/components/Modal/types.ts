export interface ModalProps {

    /**
     * this collection of radio buttons needs an ID to group them
     */
    id: string;

    /**
     * set content of modal
     */
    children: Array<React.ReactNode>;

    /*
    *  set text of 'Ok' button
    */
    okText?: string;

    /**
     * set if 'Ok' button is disabled
     */
    okDisabled?: boolean;

    /**
     * set if 'Cancel' button is disabled
     */
    cancelDisabled?: boolean;

    /**
     * set text of 'Cancel' button
     */
    cancelText?: string;

    /**
     * set if modal is visible
     */
    isVisible: boolean;

    /**
     * Run function on 'Ok'
     */
    onOk: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    /**
     * Run function on 'Cancel'
     */
    onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;


    /**
     * set title of modal
     */
    title?: string;
}