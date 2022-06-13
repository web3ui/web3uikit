import Blockies from 'react-blockies';
import { CrossCircle, Eye, EyeClosed } from '@web3uikit/icons';
import { TInputSize, TInputState, TInputType, TInputValue } from '../types';
import { ReactElement } from 'react';
import styles from '../Input.styles';
import { CopyButton } from '../../CopyButton';

const { DivStyledIconWrapper, DivStyledGrid, ButtonStyledIcon } = styles;
const labelPrefixPresent = (
    type: TInputType,
    leftIcon: ReactElement | undefined,
) => {
    if (type === 'address' || leftIcon) return true;
    return false;
};

const BlockieIcon = ({
    value,
    disabled,
}: TInputValue & { disabled: boolean }) => {
    return (
        <div
            style={{
                borderRadius: '32px',
                display: 'inline-flex',
                overflow: 'hidden',
                width: '24px',
                height: '24px',
                marginRight: '12px',
                opacity: disabled ? '50%' : '100%',
            }}
        >
            <Blockies
                seed={
                    !value
                        ? '0x0000000000000000000000000000000000000000'
                        : (value as string)
                }
                size={6}
            />
        </div>
    );
};

const RenderLeftIcon = ({
    type,
    leftIcon,
    size,
    value,
    disabled,
}: {
    type: TInputType;
    leftIcon: ReactElement | undefined;
    size: TInputSize;
    disabled: boolean;
} & TInputValue) => {
    if (type === 'address')
        return <BlockieIcon disabled={disabled} value={value} />;
    if (!leftIcon) return null;
    return <DivStyledIconWrapper>{leftIcon}</DivStyledIconWrapper>;
};

const RenderRightIcon = ({
    type,
    internalType,
    setInternalType,
    rightIcon,
    value,
    setValue,
    allowCopy,
    allowClear,
    state,
    setState,
    disabled,
}: {
    type: TInputType;
    state: TInputState;
    setState: React.Dispatch<React.SetStateAction<TInputState>>;
    internalType: TInputType;
    setInternalType: React.Dispatch<
        React.SetStateAction<'number' | 'text' | 'tel' | 'email' | 'password'>
    >;
    setValue: React.Dispatch<
        React.SetStateAction<string | number | readonly string[] | undefined>
    >;
    rightIcon: ReactElement | undefined;
    allowCopy: boolean;
    allowClear: boolean;
    disabled: boolean | undefined;
} & TInputValue) => {
    const iconsArray: JSX.Element[] = [];
    if (
        allowClear &&
        !disabled &&
        Boolean(value && value.toString().length > 0)
    ) {
        iconsArray.push(
            <ButtonStyledIcon
                key="cross_icon"
                type="button"
                disabled={disabled}
                onClick={() => {
                    setState('initial');
                    setValue('');
                }}
            >
                <CrossCircle />
            </ButtonStyledIcon>,
        );
    }
    if (rightIcon) {
        iconsArray.push(
            <DivStyledIconWrapper key="right_icon">
                {rightIcon}
            </DivStyledIconWrapper>,
        );
    }
    if (type === 'password') {
        iconsArray.push(
            <ButtonStyledIcon
                key="password_icon"
                onClick={() =>
                    setInternalType((prev) =>
                        prev === 'text' ? 'password' : 'text',
                    )
                }
                disabled={disabled}
                type="button"
            >
                {internalType === 'password' ? <EyeClosed /> : <Eye />}
            </ButtonStyledIcon>,
        );
    }
    if (allowCopy) {
        iconsArray.push(<CopyButton key="copy_icon" text={value as string} />);
    }
    return (
        <DivStyledGrid>{iconsArray.map((Icon, index) => Icon)}</DivStyledGrid>
    );
};

export { labelPrefixPresent, RenderLeftIcon, RenderRightIcon };
