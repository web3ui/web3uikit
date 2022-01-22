import React, { useEffect, useState } from 'react';
import { ModalProps } from './types';
import Button from '../Button/Button';
import ModalStyles from './Modal.styles';
import { iconTypes } from '../Icon/collection';

const {
    ModalHeader,
    ModalStyled,
    ModalFooter,
    ModalContent,
    ModalWrapperStyled,
} = ModalStyles;

const Modal: React.FC<ModalProps> = ({
    cancelText = 'Cancel',
    children,
    containerStyle,
    footerStyle,
    headerStyle,
    id = String(Date.now()),
    isCancelDisabled,
    isOkDisabled,
    isVisible = true,
    okText = 'Ok',
    onCancel,
    onOk,
    style,
    title,
}: ModalProps) => {
    const [visible, setVisibility] = useState(isVisible);

    useEffect(() => {
        setVisibility(isVisible);
    }, [isVisible]);

    return (
        <ModalWrapperStyled
            id={id}
            isVisible={visible}
            data-testid="modal-test-id"
        >
            <ModalStyled style={style}>
                <ModalHeader data-testid={'modal-header-test-id'} style={headerStyle} >
                    <h3>{title}</h3>
                    <Button
                        data-testid={'modal-close-test-id'}
                        icon={iconTypes.x}
                        iconLayout={'icon-only'}
                        onClick={() => setVisibility(false)}
                        theme={'outline'}
                    />
                </ModalHeader>

                <ModalContent
                    id={'content'}
                    data-testid={'modal-content-test-id'}
                    style={containerStyle}
                >
                    {children}
                </ModalContent>

                <ModalFooter data-testid={'modal-footer-test-id'} style={footerStyle} >
                    <Button
                        data-testid={'modal-cancel-button-test-id'}
                        disabled={isCancelDisabled}
                        text={cancelText}
                        onClick={
                            onCancel
                                ? onCancel
                                : () => {
                                      setVisibility(false);
                                  }
                        }
                        theme={'outline'}
                    />
                    <Button
                        data-testid={'modal-ok-button-test-id'}
                        onClick={
                            onOk
                                ? onOk
                                : () => {
                                      console.log('ok triggered');
                                  }
                        }
                        disabled={isOkDisabled}
                        text={okText}
                        theme={'primary'}
                    />
                </ModalFooter>
            </ModalStyled>
        </ModalWrapperStyled>
    );
};

export default Modal;
