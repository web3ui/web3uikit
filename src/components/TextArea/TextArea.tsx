import React, {
    useState,
    useEffect,
    useRef,
    TextareaHTMLAttributes,
} from 'react';
import {
    StyledLabel,
    TextAreaStyled,
    TextAreaWrapper,
} from './TextArea.styles';

const TextArea = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState('');
    const [textAreaHeight, setTextAreaHeight] = useState('auto');
    const [parentHeight, setParentHeight] = useState('auto');
    const [isPressed, setIsPressed] = useState(false);

    // useEffect(() => {
    //     setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    //     setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    // }, [text]);

    // const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setTextAreaHeight("auto");
    //     setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    //     setText(event.target.value);

    //     if (props.onChange) {
    //         props.onChange(event);
    //     }
    // };
    // const inputEl = useRef(null);

    const [state, setState] = useState('');

    const handleMouseEvent = (type: string) => {
        console.log('type', type);
        switch (type) {
            case 'mouseEntered':
                setState('mouseEntered');
                break;
            case 'focused':
                setState('focused');
                break;
            case 'pressed':
                setState('pressed');
                break;
            case 'unfocused':
                setState('unfocused');
                break;
            case 'mouseLeaved':
                setState('mouseLeaved');
                break;
        }
    };

    function toggleState() {
        // setIsPressed(isPressed ? false : true)
    }

    const buttonRef = useRef();

    return (
        <TextAreaWrapper
            onFocus={() => handleMouseEvent('focused')}
            onBlur={() => handleMouseEvent('unfocused')}
            onMouseEnter={() => handleMouseEvent('mouseEntered')}
            onMouseLeave={() => handleMouseEvent('mouseLeaved')}
            onClick={() => handleMouseEvent('pressed')}
        >
            <StyledLabel state={state}>Label text</StyledLabel>
            <TextAreaStyled placeholder="" />
        </TextAreaWrapper>
        // <div
        //     style={{
        //         minHeight: parentHeight,
        //     }}
        // >
        //     <textarea
        //         {...props}
        //         ref={textAreaRef}
        //         rows={1}
        //         style={{
        //             height: textAreaHeight,
        //         }}
        //         onChange={onChangeHandler}
        //     />
        // </div>
    );
};

export default TextArea;
