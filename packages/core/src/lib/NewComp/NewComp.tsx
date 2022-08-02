// Importing React and its awesome hooks
import { useState, useEffect } from 'react';
import { Checkmark, Cross } from '@web3uikit/icons';

// importing elements from the kit, never add more elements, improve what we have
import { Button } from '../Button';

// importing centralized colors
import { color } from '@web3uikit/styles';

// importing props from the components TypeScript interface
import { NewCompProps } from './types';

// importing CSS styles as styled components, sorted alphabetically
import styles from './NewComp.styles';

const {
    HeadingStyled,
    SectionStyled,
    SpanStyled,
    TextStyled,
    TitleStyled,
} = styles;

// Normal boilerplate React functional component
const NewComp: React.FC<NewCompProps> = ({
    // deconstructing props and setting any default values, sorted alphabetically
    bgColor = 'white',
    hasUnderline = false,
    onClick,
    state = 'greenLight',
    textOff,
    textOn,
    ...props
}) => {
    // Standard use of useState to track internal state variables
    const [compState, setCompState] = useState(state);
    const [count, setCount] = useState(-1);

    // Standard use of useEffect hook to mimic life cycle methods
    useEffect(() => {
        setCount(count + 1);
    }, [compState]);

    // A standard function to be called on click
    const toggleState = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        // toggle the components state
        setCompState(compState === 'greenLight' ? 'redLight' : 'greenLight');
        // if the optional callback function if passed, call it
        onClick && onClick(event);
    };

    return (
        <SectionStyled data-testid="test-new-comp" bgColor={bgColor} {...props}>
            <TitleStyled data-testid="test-new-comp-title">
                The Demo Component
            </TitleStyled>
            <SpanStyled>
                {compState === 'greenLight' ? (
                    <Checkmark
                        title="checkmark icon"
                        titleId="new-comp checkmark icon"
                        fill={color.green}
                        fontSize={24}
                    />
                ) : (
                    <Cross
                        title="cross icon"
                        titleId="new-comp cross icon"
                        fill={color.red}
                        fontSize={24}
                    />
                )}
                <HeadingStyled
                    data-testid="test-new-comp-heading"
                    state={compState}
                >
                    {compState === 'greenLight' ? textOn : textOff}
                </HeadingStyled>
            </SpanStyled>
            <Button onClick={toggleState} />
            <TextStyled
                data-testid="test-new-comp-text"
                hasUnderline={hasUnderline}
            >
                Clicked: {count} times
            </TextStyled>
        </SectionStyled>
    );
};

export default NewComp;
