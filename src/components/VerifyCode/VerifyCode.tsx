import React, {
    ChangeEvent,
    createRef,
    FC,
    KeyboardEvent,
    useMemo,
    useState,
} from 'react';
import color from '../../styles/colors';
import { Typography } from '../Typography';
import { VerifyCodeProps } from './types';
import styles from './VerifyCode.styles';

const { InputStyled, DivStyledWrapper } = styles;

const VerifyCode: FC<VerifyCodeProps> = ({
    autoFocus = false,
    length = 5,
    label = 'Enter Code',
    onCompleted = () => {},
    placeholder = 'X',
}) => {
    const [code, setCode] = useState([...Array(length)].map(() => ''));
    const inputRefs = useMemo(
        () =>
            new Array(length)
                .fill(null)
                .map(() => createRef<HTMLInputElement>()),
        [length],
    );

    const processInput = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
        const num = e.target.value;
        console.log(e);

        if (/[^0-9]/.test(num)) return;
        const newCode = [...code];
        newCode[idx] = num;
        setCode(newCode);
        if (idx !== length - 1) {
            inputRefs[idx + 1].current?.focus();
        }
        if (newCode.every((num) => num !== '')) {
            onCompleted(newCode.join(''));
        }
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') return;
        console.log(e.key);
        const isDeleting = e.key === 'Delete' || e.key === 'Backspace';
        if (isDeleting && !code[idx] && idx !== 0) {
            const newCode = [...code];
            newCode[idx - 1] = '';
            setCode(newCode);
            inputRefs[idx - 1].current?.focus();
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
        <>
            <Typography
                variant="subtitle2"
                weight="semibold"
                color={color.black}
            >
                {label}
            </Typography>
            <DivStyledWrapper
                className="verify-code"
                data-testid="test-verify-code-id"
            >
                {code.map((num, idx) => (
                    <InputStyled
                        autoFocus={autoFocus && !code[0].length && idx === 0}
                        className={`${num !== '' && 'is-filled'}`}
                        inputMode="numeric"
                        key={idx}
                        maxLength={1}
                        onChange={(e) => processInput(e, idx)}
                        onKeyUp={(e) => onKeyUp(e, idx)}
                        onPaste={(e) => onPaste(e)}
                        placeholder={placeholder[0]}
                        ref={inputRefs[idx]}
                        type="number"
                        value={num}
                    />
                ))}
            </DivStyledWrapper>
        </>
    );
};

export default VerifyCode;
