// Importing React and its awesome hooks
import React, { useState, useEffect } from 'react';

// importing elements from the kit, never add more elements, improve what we have
import Icon from '../Icon/Icon';
import { iconTypes } from '../Icon/collection';
import { Button } from '../Button';

// importing centralized colors
import color from '../../styles/colors';

// importing props from the components TypeScript interface
import { NewCompProps } from './types';

// importing CSS styles as styled components, sorted alphabetically
import {
    HeadingStyled,
    SectionStyled,
    SpanStyled,
    TextStyled,
    TitleStyled,
} from './NewComp.styles';

// Normal boilerplate React functional component
const NewComp: React.FC<NewCompProps> = ({
    // deconstructing props and setting any default values, sorted alphabetically
    hasUnderline = false,
    onClick,
    state = 'greenLight',
    textOff,
    textOn,
}) => {
    // Standard use of useState to track internal state variables
    const [compState, setCompState] = useState(state);
    let [count, setCount] = useState(-1);

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
        <SectionStyled data-testid="test-new-comp">
            <TitleStyled data-testid="test-title">
                The Demo Component
            </TitleStyled>
            <SpanStyled>
                <Icon
                    svg={
                        compState === 'greenLight'
                            ? iconTypes.checkmark
                            : iconTypes.x
                    }
                    fill={compState === 'greenLight' ? color.green : color.red}
                    size={30}
                />
                <HeadingStyled state={compState} data-testid="test-heading">
                    {compState === 'greenLight' ? textOn : textOff}
                </HeadingStyled>
            </SpanStyled>
            <Button onClick={toggleState}></Button>
            <TextStyled hasUnderline={hasUnderline} data-testid="test-text">
                Clicked: {count} times
            </TextStyled>
        </SectionStyled>
    );
};

export default NewComp;
