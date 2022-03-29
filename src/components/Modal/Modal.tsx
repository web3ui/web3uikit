import React, { useEffect, useState } from 'react';
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
} from './Modal.styles';

const Modal: React.FC<ModalProps> = ({
    cancelText = 'Cancel',
    children,
    headerHasBottomBorder = false,
    fixedMode = false,
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
    canOverflow = false,
}: ModalProps) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        document.addEventListener('click', handleContentClick);
        return () => document.removeEventListener('click', handleContentClick);
    }, []);

    const handleContentClick = (event: any) => {
        const target = event.target as Element;
        if (target.id === 'close') toggleVisibility();
    };

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <DivStyled id={id} isVisible={visible} data-testid="modal-test-id">
            <DivStyledWrap width={width} canOverflow={canOverflow}>
                <HeaderStyled
                    data-testid={'modal-header-test-id'}
                    title={title}
                    fixedMode={fixedMode}
                    headerHasBottomBorder={headerHasBottomBorder}
                >
                    {typeof title == 'string' ? <h3>{title}</h3> : title}
                    {closeButton ? (
                        closeButton
                    ) : (
                        <Button
                            iconColor={'#68738D'}
                            theme={'secondary'}
                            radius={40}
                            id={'close'}
                            data-testid={'modal-close-test-id'}
                            icon={iconTypes.x}
                            iconLayout={'icon-only'}
                            onClick={
                                onCloseButtonPressed
                                    ? onCloseButtonPressed
                                    : toggleVisibility
                            }
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
                        fixedMode={fixedMode}
                    >
                        {hasCancel && (
                            <Button
                                data-testid={'modal-cancel-button-test-id'}
                                disabled={isCancelDisabled}
                                text={cancelText}
                                onClick={onCancel ? onCancel : () => {}}
                                theme={'outline'}
                            />
                        )}
                        <Button
                            color={okButtonColor}
                            data-testid={'modal-ok-button-test-id'}
                            disabled={isOkDisabled}
                            onClick={onOk ? onOk : () => {}}
                            text={okText}
                            theme={okButtonColor ? 'colored' : 'primary'}
                        />
                    </FooterStyled>
                )}

                {customFooter && (
                    <CustomFooterStyled fixedMode={fixedMode}>
                        {customFooter}
                    </CustomFooterStyled>
                )}
            </DivStyledWrap>
        </DivStyled>
    );
};

export default Modal;
