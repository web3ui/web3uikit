import {
    ChangeEvent,
    createRef,
    FC,
    KeyboardEvent,
    useMemo,
    useState,
} from 'react';
import { color } from '@web3uikit/styles';
import { Typography } from '../Typography';
import { VerifyCodeProps } from './types';
import styles from './VerifyCode.styles';

const { InputStyled, DivStyledWrapper, DivStyledTooltip } = styles;

const VerifyCode: FC<VerifyCodeProps> = ({
    autoFocus = false,
    length = 5,
    label = 'Enter Code',
    onCompleted = () => {},
    placeholder = 'X',
    state = 'default',
    errorMessage = 'Entered code is invalid. Please re-send code and try again.',
}) => {
    const [code, setCode] = useState(new Array(length).fill(''));

    const inputRefs = useMemo(
        () =>
            new Array(length)
                .fill(null)
                .map(() => createRef<HTMLInputElement>()),
        [length],
    );

    const processInput = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
        const newCode = [...code];
        const num =
            newCode[idx] === e.target.value[0]
                ? e.target.value[1]
                : e.target.value[0];
        newCode[idx] = num || '';
        setCode(newCode);
        if (idx !== length - 1) {
            inputRefs[idx + 1]?.current?.focus();
        }
        if (newCode.every((num) => num !== '')) {
            onCompleted(newCode.join(''));
        }
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') return;
        const isDeleting = e.key === 'Delete' || e.key === 'Backspace';
        if (isDeleting && !code[idx] && idx !== 0) {
            const newCode = [...code];
            newCode[idx - 1] = '';
            setCode(newCode);
            inputRefs[idx - 1]?.current?.focus();
        }
    };

    const onPaste = (e: any) => {
        e.preventDefault();
        const pastedString = e.clipboardData?.getData('text');
        if (!pastedString) return;

        const isNumber = !Number.isNaN(+pastedString);
        const newCode = pastedString.split('').slice(0, length);
        if (isNumber) {
            setCode(newCode);
            if (newCode.every((num: string) => num !== '')) {
                onCompleted(newCode.join(''));
            }
        }
    };

    return (
        <div className="VerifyCode" data-testid="test-verify-code">
            <Typography
                variant="subtitle2"
                weight="semibold"
                color={color.blue70}
            >
                {label}
            </Typography>
            <DivStyledWrapper
                className="verify-code"
                data-testid="test-verify-code-wrap"
            >
                {code.map((num, idx) => (
                    <InputStyled
                        autoFocus={autoFocus && !code[0].length && idx === 0}
                        className={`${num !== '' && 'is-filled'}`}
                        data-testid={`test-verify-code-input-${idx}`}
                        inputMode="numeric"
                        key={idx}
                        maxLength={1}
                        onChange={(e) => processInput(e, idx)}
                        onKeyDown={(e) =>
                            ['e', 'E', '+', '-', '.'].includes(e.key) &&
                            e.preventDefault()
                        }
                        onKeyUp={(e) => onKeyUp(e, idx)}
                        onPaste={(e) => onPaste(e)}
                        placeholder={placeholder[0]}
                        ref={inputRefs[idx]}
                        type="number"
                        value={num}
                    />
                ))}
            </DivStyledWrapper>
            {state === 'error' && errorMessage !== '' && (
                <DivStyledTooltip data-testid="test-verify-code-error">
                    {errorMessage}
                </DivStyledTooltip>
            )}
        </div>
    );
};

export default VerifyCode;
