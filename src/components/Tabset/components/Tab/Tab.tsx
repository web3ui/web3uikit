import React, { useRef, useEffect } from 'react';
import { useTab } from './useTab';
import { TabContainer } from './Tab.styles';
import { TabProps } from './types';

export const Tab: React.FC<TabProps> = ({
    index,
    disabled,
    className,
    children,
}) => {
    const ref = useRef<HTMLButtonElement>(null!);

    const { isFocused, onMouseDown, ...rest } = useTab(index!);

    useEffect(() => {
        if (ref.current) {
            if (isFocused) {
                ref.current.focus();
            }
        }
    }, [isFocused]);

    const mouseDownHandler = disabled ? undefined : onMouseDown;

    return (
        <TabContainer
            className={className}
            onMouseDown={mouseDownHandler}
            disabled={disabled}
            ref={ref}
            {...rest}
        >
            {children}
        </TabContainer>
    );
};
