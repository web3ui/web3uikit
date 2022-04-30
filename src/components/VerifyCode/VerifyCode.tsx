import React, {
    ChangeEvent,
    createRef,
    FC,
    KeyboardEvent,
    useEffect,
    useMemo,
    useState,
} from 'react';
import color from '../../styles/colors';
import { Typography } from '../Typography';
import { VerifyCodeProps } from './types';
import styles from './VerifyCode.styles';

const { DivStyledItem, DivStyledWrapper, InputStyled } = styles;

const VerifyCode: FC<VerifyCodeProps> = ({
    autoFocus = false,
    length = 5,
    onChange = () => {},
    onCompleted = () => {},
    placeholder = 'X',
    value: pValue,
    title = 'Enter Code',
    type = 'text',
    passwordMask = 'X',
}) => {
    const emptyValue = new Array(length).fill(placeholder);

    const [activeIndex, setActiveIndex] = useState<number>(-1);
    // Array of characters to display the code. if nothing is there then placeholder is shown
    const [value, setValue] = useState<string[]>(
        pValue ? pValue.split('') : emptyValue,
    );

    const codeInputRef = createRef<HTMLInputElement>();
    const itemsRef = useMemo(
        () =>
            new Array(length).fill(null).map(() => createRef<HTMLDivElement>()),
        [length],
    );

    const isCodeRegex = new RegExp(`^[0-9]{${length}}$`);

    const getItem = (index: number) => itemsRef[index]?.current;
    const focusItem = (index: number): void => getItem(index)?.focus();
    const blurItem = (index: number): void => getItem(index)?.blur();

    const onItemFocus = (index: number) => () => {
        setActiveIndex(index);
        if (codeInputRef.current) codeInputRef.current.focus();
    };

    const onInputKeyUp = ({ key }: KeyboardEvent) => {
        const newValue = [...value];
        const nextIndex = activeIndex + 1;
        const prevIndex = activeIndex - 1;
        const codeInput = codeInputRef.current;
        const currentItem = getItem(activeIndex);

        const isLast = nextIndex === length;
        const isDeleting = key === 'Delete' || key === 'Backspace';

        onItemFocus(activeIndex);

        // if delete key is pressed replace current value with placeholder and focus on prevIndex
        if (isDeleting) {
            newValue[activeIndex] = placeholder;
            setValue(newValue);
            if (activeIndex > 0) {
                setActiveIndex(prevIndex);
                focusItem(prevIndex);
            }

            return;
        }

        if (key === 'ArrowRight') {
            setActiveIndex(nextIndex % length);
            focusItem(nextIndex % length);
            return;
        }

        if (key === 'ArrowLeft') {
            setActiveIndex(prevIndex >= 0 ? prevIndex : length - 1);
            focusItem(prevIndex >= 0 ? prevIndex : length - 1);
            return;
        }

        // if key pressed is not number don't do anything
        if (Number.isNaN(+key)) return;

        // otherwise replace the current value and replace with new one.
        if (codeInput) codeInput.value = '';
        newValue[activeIndex] = key;
        setValue(newValue);

        // After input is set go to next box
        if (!isLast) {
            setActiveIndex(nextIndex);
            focusItem(nextIndex);
            return;
        }

        // if all conditions fail leave the component since all boxes are filled.
        if (codeInput) codeInput.blur();
        if (currentItem) currentItem.blur();

        setActiveIndex(-1);
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value: changeValue } = e.target;
        const isCode = isCodeRegex.test(changeValue);

        if (!isCode) return;

        setValue(changeValue.split(''));
        blurItem(activeIndex);
    };

    const onInputBlur = () => {
        if (activeIndex === -1) return;

        blurItem(activeIndex);
        setActiveIndex(-1);
    };

    // autoFocus - focus on the first box on component mount
    useEffect(() => {
        if (autoFocus && itemsRef[0].current) {
            itemsRef[0].current.focus();
        }
    }, []);

    // clipboard pasting event listener
    useEffect(() => {
        const codeInput = codeInputRef.current;
        if (!codeInput) return;

        const onPaste = (e: ClipboardEvent) => {
            e.preventDefault();

            const pastedString = e.clipboardData?.getData('text');
            if (!pastedString) return;

            const isNumber = !Number.isNaN(+pastedString);
            if (isNumber) setValue(pastedString.split('').slice(0, length));
        };

        codeInput.addEventListener('paste', onPaste);
        return () => codeInput.removeEventListener('paste', onPaste);
    }, []);

    useEffect(() => {
        const stringValue = value.join('');
        const isCompleted = stringValue.length === length;

        if (isCompleted && stringValue !== emptyValue.join('')) {
            onCompleted(stringValue);
        }
        onChange(stringValue);
    }, [value, length]);

    useEffect(() => {
        if (typeof pValue !== 'string') return;
        if (pValue === '' && value.join('') === emptyValue.join('')) return;
        // key internal state value and external prop value in sync
        if (pValue !== value.join('')) setValue(pValue.split(''));
    }, [pValue]);

    const renderItemText = (itemValue: string) => {
        if (itemValue === placeholder) return placeholder;
        return type === 'password' ? passwordMask : itemValue;
    };

    return (
        <>
            <Typography variant="body18" weight="bold" color={color.black}>
                {title}
            </Typography>
            <DivStyledWrapper
                className="verify-code"
                data-testid="test-verify-code-id"
            >
                <InputStyled
                    data-testid="test-verify-code-input-id"
                    ref={codeInputRef}
                    type="text"
                    inputMode="numeric"
                    id="verify-code-input"
                    onChange={onInputChange}
                    onKeyUp={onInputKeyUp}
                    onBlur={onInputBlur}
                />
                {itemsRef.map((ref, i) => (
                    <DivStyledItem
                        key={i}
                        ref={ref}
                        role="button"
                        tabIndex={0}
                        className={`${
                            value[i] !== placeholder
                                ? 'is-filled'
                                : 'is-placeholder'
                        } ${i === activeIndex ? 'is-active' : ''}`}
                        onFocus={onItemFocus(i)}
                    >
                        {renderItemText(value[i])}
                    </DivStyledItem>
                ))}
            </DivStyledWrapper>
        </>
    );
};

export default VerifyCode;
