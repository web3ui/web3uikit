import { useEffect, useState } from 'react';
import { ModalProps } from './types';
import Button from '../Button/Button';
import styles from './Modal.styles';
import { Cross } from '@web3uikit/icons';

const {
    CustomFooterStyled,
    DivStyled,
    DivStyledContent,
    DivStyledWrap,
    FooterStyled,
    HeaderStyled,
} = styles;

const Modal: React.FC<ModalProps> = ({
    canOverflow = false,
    cancelText = 'Cancel',
    children,
    closeButton,
    customFooter,
    fixedMode = false,
    hasCancel = true,
    hasFooter = true,
    headerHasBottomBorder = false,
    id = String(Date.now()),
    isCancelDisabled,
    isCentered = false,
    isOkDisabled,
    isVisible = true,
    okButtonColor,
    okText = 'Ok',
    onCancel,
    onCloseButtonPressed,
    onOk,
    title,
    width = '70vw',
    ...props
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
        <DivStyled
            data-testid="test-modal"
            id={id}
            isCentered={isCentered}
            isVisible={visible}
            {...props}
        >
            <DivStyledWrap width={width} canOverflow={canOverflow}>
                <HeaderStyled
                    data-testid="test-modal-header"
                    title={title}
                    fixedMode={fixedMode}
                    headerHasBottomBorder={headerHasBottomBorder}
                >
                    <>
                        {typeof title == 'string' ? <h3>{title}</h3> : title}
                        {closeButton ? (
                            closeButton
                        ) : (
                            <Button
                                iconColor="#68738D"
                                theme="secondary"
                                radius={100}
                                id="modal-close-button"
                                data-testid="modal-close-test-id"
                                icon={
                                    <Cross
                                        title="cross icon"
                                        titleId="modal cross icon"
                                        fontSize={12}
                                    />
                                }
                                iconLayout="icon-only"
                                onClick={
                                    onCloseButtonPressed
                                        ? onCloseButtonPressed
                                        : toggleVisibility
                                }
                            />
                        )}
                    </>
                </HeaderStyled>

                <DivStyledContent id="content" data-testid="test-modal-content">
                    {children}
                </DivStyledContent>

                {hasFooter && !customFooter && (
                    <FooterStyled
                        data-testid="test-modal-footer"
                        hasCancel={hasCancel}
                        fixedMode={fixedMode}
                    >
                        {hasCancel && (
                            <Button
                                id="modal-cancel-button"
                                data-testid="test-modal-button"
                                disabled={isCancelDisabled}
                                text={cancelText}
                                onClick={onCancel ? onCancel : () => {}}
                                theme="outline"
                            />
                        )}
                        <Button
                            color={okButtonColor}
                            data-testid="test-modal-ok-button"
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
