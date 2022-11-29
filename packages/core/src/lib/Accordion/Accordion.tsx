import React, { useState } from 'react';
import { Tag } from '../Tag';
import { Plus, Minus, LockOpen, LockClosed } from '@web3uikit/icons';
import { AccordionProps } from './types';
import styles from './Accordion.styles';
import AnimateHeight, { Height } from 'react-animate-height';

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
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(isExpanded);
    const [height, setHeight] = useState(isExpanded ? 'auto' : 0);
    const formattedID = id.replace(/\s/g, '-');

    const toggleOpen = () => {
        setHeight(isOpen ? 0 : 'auto');
        setIsOpen((prev) => !prev);
    };

    return (
        <SectionStyled
            aria-label="Accordion item"
            data-testid="test-accordion"
            id={id}
            style={{ ...style }}
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
            <AnimateHeight
                height={height as Height}
                duration={300}
                animateOpacity={true}
            >
                <DivStyledContent
                    aria-hidden={isOpen}
                    data-testid="test-accordion-content"
                    id={`content-${formattedID}`}
                >
                    {children}
                </DivStyledContent>
            </AnimateHeight>
        </SectionStyled>
    );
};

export default Accordion;
