import React, { useState, useRef, useEffect } from 'react';
import { Tag } from '../Tag';
import { Plus, Minus, LockOpen, LockClosed } from '@web3uikit/icons';
import { AccordionProps } from './types';
import styles from './Accordion.styles';

const {
    SectionStyled,
    HeaderStyled,
    H4Styled,
    DivStyled,
    DivStyledContent,
    getThemeColor,
} = styles;

const Accordion: React.FC<AccordionProps> = ({
    children,
    hasLockIcon,
    id,
    isExpanded = false,
    subTitle,
    tagText,
    theme = 'blue',
    title,
    style,
    icon = {
        open: (
            <Minus
                title="minus icon"
                titleId="accordion minus icon"
                fill={getThemeColor(theme ?? 'blue')}
            />
        ),
        close: (
            <Plus
                title="plus icon"
                titleId="accordion plus icon"
                fill={getThemeColor(theme ?? 'blue')}
            />
        ),
    },
    iconLayout = 'leading',
    contentMaxHeight = null,
    ...props
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
        let currHeight = heightWhenOpen;
        if (contentMaxHeight) currHeight = contentMaxHeight;
        if (isOpen) currHeight = '0px';
        setHeight(currHeight);
        setIsOpen(!isOpen);
    };

    return (
        <SectionStyled
            aria-label="Accordion item"
            data-testid="test-accordion"
            id={id}
            style={{ opacity: opacity, ...style }}
            theme={theme}
            {...props}
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
                    {iconLayout === 'leading' &&
                        (isOpen ? icon.open : icon.close)}
                    {typeof title === 'string' ? (
                        <H4Styled data-testid="test-accordion-title">
                            {title}
                        </H4Styled>
                    ) : (
                        <span data-testid="test-accordion-title">{title}</span>
                    )}
                </DivStyled>

                <DivStyled>
                    {subTitle &&
                        (typeof subTitle === 'string' ? (
                            <p data-testid="test-accordion-subtitle">
                                {subTitle}
                            </p>
                        ) : (
                            <span data-testid="test-accordion-subtitle">
                                {subTitle}
                            </span>
                        ))}
                    {hasLockIcon &&
                        (isOpen ? (
                            <LockOpen
                                title="lock open icon"
                                titleId="accordion lock open icon"
                                fill={getThemeColor(theme)}
                            />
                        ) : (
                            <LockClosed
                                title="lock closed icon"
                                titleId="accordion lock closed icon"
                                fill={getThemeColor(theme)}
                            />
                        ))}
                    {tagText && (
                        <Tag text={tagText} color={theme} tone="dark" />
                    )}
                    {iconLayout === 'trailing' &&
                        (isOpen ? icon.open : icon.close)}
                </DivStyled>
            </HeaderStyled>

            <DivStyledContent
                aria-hidden={isOpen}
                data-testid="test-accordion-content"
                id={`content-${formattedID}`}
                ref={divElement}
                style={{
                    maxHeight: height,
                }}
            >
                {children}
            </DivStyledContent>
        </SectionStyled>
    );
};

export default Accordion;
