import React, { useState, useRef, useEffect } from 'react';
import { Tag } from '../Tag';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { AccordionProps } from './types';
import {
    SectionStyled,
    HeaderStyled,
    H4Styled,
    DivStyled,
    DivStyledContent,
    getThemeColor,
} from './Accordion.styles';

const Accordion: React.FC<AccordionProps> = ({
    children,
    hasLockIcon,
    id,
    isExpanded = false,
    subTitle,
    tagText,
    theme = 'blue',
    title,
}) => {
    const [isOpen, setIsOpen] = useState(isExpanded);
    const [height, setHeight] = useState('');
    const [opacity, setOpacity] = useState('0%');
    const [heightWhenOpen, setHeightWhenOpen] = useState('');
    const formattedID = id.replace(/\s/g, '-');
    const divElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeightWhenOpen(`${divElement.current?.clientHeight}px`);
        setHeight(isOpen ? heightWhenOpen : '0px');
        setOpacity('100%');
    }, []);

    const toggleOpen = () => {
        setHeight(isOpen ? '0px' : heightWhenOpen);
        setIsOpen(!isOpen);
    };

    return (
        <SectionStyled
            aria-label="Accordion item"
            data-testid="test-accordion"
            id={id}
            style={{ opacity: opacity }}
            theme={theme}
        >
            <HeaderStyled
                aria-controls={`content-${formattedID}`}
                aria-expanded={isOpen}
                data-testid="test-accordion-header"
                id={`accordion-control-${formattedID}`}
                role="button"
                onClick={toggleOpen}
            >
                <DivStyled>
                    <Icon
                        svg={isOpen ? iconTypes.minus : iconTypes.plus}
                        fill={getThemeColor(theme)}
                    />
                    <H4Styled data-testid="test-accordion-title">
                        {title}
                    </H4Styled>
                </DivStyled>

                <DivStyled>
                    {subTitle && (
                        <p data-testid="test-accordion-subtitle">{subTitle}</p>
                    )}
                    {hasLockIcon && (
                        <Icon
                            svg={
                                isOpen
                                    ? iconTypes.lockOpen
                                    : iconTypes.lockClosed
                            }
                            fill={getThemeColor(theme)}
                        />
                    )}
                    {tagText && (
                        <Tag text={tagText} color={theme} tone="dark" />
                    )}
                </DivStyled>
            </HeaderStyled>

            <DivStyledContent
                aria-hidden={isOpen}
                data-testid="test-accordion-content"
                id={`content-${formattedID}`}
                ref={divElement}
                style={{ maxHeight: height }}
            >
                {children}
            </DivStyledContent>
        </SectionStyled>
    );
};

export default Accordion;
