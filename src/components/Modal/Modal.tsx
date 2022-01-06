import React, {useEffect, useState} from "react";
import {ModalProps} from "./types";
import Button from "../Button/Button";
import ModalStyles from "./Modal.styles"
import {iconTypes} from "../Icon/collection";

const { ModalHeader, ModalStyled, ModalFooter, ModalContent} = ModalStyles;

const Modal: React.FC<ModalProps> = ({
    id = String(Date.now()),
    children,
    isOkDisabled,
    isCancelDisabled,
    isVisible,
    cancelText = "Cancel",
    okText = "Ok",
    onCancel,
    onOk,
    title
}: ModalProps) => {
    const [visible, setVisibility] = useState(isVisible)

    useEffect(() => {
        setVisibility(isVisible)
    }, [isVisible])

    return (
        <ModalStyled
            id={id}
            isVisible={visible}
            data-testid="modal-test-id"
        >
            <ModalHeader
                data-testid={"modal-header-test-id"}
            >
                <h3>{title}</h3>
                <Button
                    data-testid={"modal-close-test-id"}
                    icon={iconTypes.x}
                    iconLayout={"icon-only"}
                    onClick={() => setVisibility(false)}
                    theme={"outline"}
                />
            </ModalHeader>

            <ModalContent
                id={"content"}
                data-testid={"modal-content-test-id"}
            >
                {children}
            </ModalContent>

            <ModalFooter
                data-testid={"modal-footer-test-id"}
            >
                <Button
                    data-testid={"modal-cancel-button-test-id"}
                    disabled={isCancelDisabled} text={cancelText}
                    onClick={onCancel ? onCancel : () => { setVisibility(false) }}
                    theme={"outline"}
                />
                <Button
                    data-testid={"modal-ok-button-test-id"}
                    onClick={onOk ? onOk : () => { console.log('ok triggered') }}
                    disabled={isOkDisabled}
                    text={okText}
                    theme={"primary"}
                />
            </ModalFooter>

        </ModalStyled>

    )
}

export default Modal;