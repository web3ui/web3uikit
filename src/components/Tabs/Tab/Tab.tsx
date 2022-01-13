import React from "react";
import { useTab } from "../app";
import { StyledTab } from "./Tab.styles";
import { TabProps } from './types';

export const Tab: React.FC<TabProps> = (props) => {
  const {
    name,
    disable = false,
    className = '',
    children
  } = props;

  const {
    isActive,
    activate,
    ...attrs
  } = useTab(name);

  return (
    <StyledTab
      className={className}
      isActive={isActive}
      disable={disable}
      onClick={activate}

      {...attrs}
    >
      {children}
    </StyledTab>
  );
}
