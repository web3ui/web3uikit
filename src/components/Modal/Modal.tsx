import React from 'react';
import { ModalProps } from './types';
import Button from '../Button/Button';
import { iconTypes } from '../Icon/collection';
import {
    ModalHeader,
    ModalStyled,
    ModalFooter,
    ModalContent,
    ModalWrapperStyled,
} from './Modal.styles';

const Modal: React.FC<ModalProps> = ({
    cancelText = 'Cancel',
    children,
    hasCancel = true,
    hasFooter = true,
    id = String(Date.now()),
    isCancelDisabled,
    isOkDisabled,
    isVisible = true,
    okText = 'Ok',
    okButtonColor,
    onCancel,
    onCloseButtonPressed,
    onOk,
    title,
}: ModalProps) => (
    <ModalWrapperStyled
        id={id}
        isVisible={isVisible}
        data-testid="modal-test-id"
    >
        <ModalStyled>
            <ModalHeader data-testid={'modal-header-test-id'}>
                <h3>{title}</h3>
                <Button
                    data-testid={'modal-close-test-id'}
                    icon={iconTypes.x}
                    iconLayout={'icon-only'}
                    onClick={
                        onCloseButtonPressed
                            ? onCloseButtonPressed
                            : () => {
                                  console.log('close triggered');
                              }
                    }
                    theme={'outline'}
                />
            </ModalHeader>

            <ModalContent id={'content'} data-testid={'modal-content-test-id'}>
                {children}
            </ModalContent>

            {hasFooter && (
                <ModalFooter
                    data-testid={'modal-footer-test-id'}
                    hasCancel={hasCancel}
                >
                    {hasCancel && (
                        <Button
                            data-testid={'modal-cancel-button-test-id'}
                            disabled={isCancelDisabled}
                            text={cancelText}
                            onClick={
                                onCancel
                                    ? onCancel
                                    : () => {
                                          console.log('cancel triggered');
                                      }
                            }
                            theme={'outline'}
                        />
                    )}
                    <Button
                        color={okButtonColor}
                        data-testid={'modal-ok-button-test-id'}
                        disabled={isOkDisabled}
                        onClick={
                            onOk
                                ? onOk
                                : () => {
                                    console.log('ok triggered');
                                }
                        }
                        text={okText}
                        theme={okButtonColor ? 'colored' : 'primary'}
                    />
                </ModalFooter>
            )}
        </ModalStyled>
    </ModalWrapperStyled>
);

export default Modal;
