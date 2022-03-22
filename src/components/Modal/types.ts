import React from 'react';
import type { ButtonProps } from '../Button';

export interface ModalProps {
    /**
     * The ID of the modal will be generated automatically if not set
     */
    id?: string;

    /**
     * set content of modal
     */
    children: JSX.Element | JSX.Element[];

    /**
     * should the modal have a cancel button
     */
    hasCancel?: boolean;

    /**
     * should the modal have a footer
     */
    hasFooter?: boolean;

    /**
     * set text of 'Cancel' button
     */
    cancelText?: string;

    /**
     * should the header component have a bottom border
     */
    headerHasBottomBorder?: boolean;

    /**
     * set to true to fix header and footer
     */
    fixedMode?: boolean;

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

    /**
     * Run function on 'X', you should prob use this event to set isVisible to false or ideally remove Modal from the render
     */
    onCloseButtonPressed?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => void;

    /**
     * set color of Ok/Confirm button
     */
    okButtonColor?: 'blue' | 'green' | 'yellow' | 'red';

    /*
     *  set text of 'Ok' button
     */
    okText?: string;

    /**
     * set title of modal
     */
    title?: string | JSX.Element;

    /**
     * set a custom width for modal with any CSS value. EG: 70%, 60vw, 400px
     */
    width?: string;

    /**
     * To Have a custom footer
     */
    customFooter?: JSX.Element;

    /**
     * To have a custom close button. The button id must be set to `close`.
     */
    closeButton?: ButtonProps;

    /**
     * Whether the content of the modal can overflow.
     */
    canOverflow?: boolean;
}
