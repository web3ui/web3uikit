import React, { useRef, useEffect } from "react";
import { useTab } from "../../app";
import { StyledTab } from "./Tab.styles";
import { TabProps } from './types';

export const Tab: React.FC<TabProps> = (props) => {
  const {
    index,
    disable = false,
    className = '',
    children
  } = props;

  const ref = useRef<HTMLButtonElement>(null!);

  const {
    isActive,
    isFocused,
    ...attrs
  } = useTab(index!);

  useEffect(() => {
    if (ref.current) {
      if (isFocused) {
        ref.current.focus();
      }
    }
  }, [isFocused])

  return (
    <StyledTab
      className={className}
      isActive={isActive}
      disable={disable}
      ref={ref}

      {...attrs}
    >
      {children}
    </StyledTab>
  );
}
