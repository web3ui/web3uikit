import React from 'react';
import { ModalProps } from './types';
import Button from '../Button/Button';
import { iconTypes } from '../Icon/collection';
import {
    HeaderStyled,
    DivStyledWrap,
    FooterStyled,
    DivStyledContent,
    DivStyled,
    CustomFooterStyled,
    CustomButtonStyle,
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
    width = '70vw',
    customFooter,
    closeButton,
}: ModalProps) => (
    <DivStyled id={id} isVisible={isVisible} data-testid="modal-test-id">
        <DivStyledWrap width={width}>
            <HeaderStyled data-testid={'modal-header-test-id'} title={title}>
                {typeof title == 'string' ? <h3>{title}</h3> : title}
                {closeButton ? (
                    <CustomButtonStyle
                        onClick={
                            onCloseButtonPressed
                                ? onCloseButtonPressed
                                : () => {
                                      console.log('close triggered');
                                  }
                        }
                    >
                        {closeButton}
                    </CustomButtonStyle>
                ) : (
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
                )}
            </HeaderStyled>

            <DivStyledContent
                id={'content'}
                data-testid={'modal-content-test-id'}
            >
                {children}
            </DivStyledContent>

            {hasFooter && !customFooter && (
                <FooterStyled
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
                </FooterStyled>
            )}

            {customFooter && (
                <CustomFooterStyled>{customFooter}</CustomFooterStyled>
            )}
        </DivStyledWrap>
    </DivStyled>
);

export default Modal;
