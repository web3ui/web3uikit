import React, { useState, useRef, useEffect } from 'react';
import { Tag } from '../Tag';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import color from '../../styles/colors';
import { AccordionProps } from './types';
import {
    SectionStyled,
    HeaderStyled,
    HeadingStyled,
    DivFlexStyled,
    ContentDivStyled,
} from './Accordion.styles';

const Accordion: React.FC<AccordionProps> = ({ id, isExpanded = false }) => {
    const [isOpen, setIsOpen] = useState(isExpanded);
    const [height, setHeight] = useState('');
    const [heightWhenOpen, setHeightWhenOpen] = useState('');
    const formattedID = id.replace(/\s/g, '-');
    const divElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeightWhenOpen(`${divElement.current?.clientHeight}px`);
        setHeight(isOpen ? heightWhenOpen : '0px');
    }, []);

    const toggleOpen = () => {
        setHeight(isOpen ? '0px' : heightWhenOpen);
        setIsOpen(!isOpen);
    };

    return (
        <SectionStyled aria-label="Accordion item">
            <HeaderStyled
                aria-controls={`content-${formattedID}`}
                aria-expanded={isOpen}
                id={`accordion-control-${formattedID}`}
                role="button"
                onClick={toggleOpen}
            >
                <DivFlexStyled>
                    <Icon
                        svg={isOpen ? iconTypes.minus : iconTypes.plus}
                        fill={color.blue}
                    />
                    <HeadingStyled>Accordion title</HeadingStyled>
                </DivFlexStyled>

                <DivFlexStyled style={{ marginLeft: 'auto' }}>
                    <p>a sub title</p>
                    <Icon
                        svg={isOpen ? iconTypes.lockOpen : iconTypes.lockClosed}
                        fill={color.blue}
                    />
                    <Tag text="Get" color="blue" />
                </DivFlexStyled>
            </HeaderStyled>

            <ContentDivStyled
                aria-hidden={isOpen}
                id={`content-${formattedID}`}
                ref={divElement}
                style={{ maxHeight: height }}
            >
                <div>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo.
                    </p>
                </div>
            </ContentDivStyled>
        </SectionStyled>
    );
};

export default Accordion;
