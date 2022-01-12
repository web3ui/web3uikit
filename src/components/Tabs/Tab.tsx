import React from "react";
import { useActiveTab, useSetActiveTab } from "./hooks";
import { StyledTab } from "./Tab.styles";

export type TabProps = {
  name: string;
  className?: string;
  disable?: boolean;
};

export const Tab: React.FC<TabProps> = (props) => {
  const {
    name,
    disable = false,
    className,
    children
  } = props;

  const isActive = useActiveTab(name);
  const setActiveTab = useSetActiveTab(name);

  return (
    <StyledTab
      className={className}
      isActive={isActive}
      disable={disable}
      onClick={setActiveTab}
      role="tab"
    >
      {children}
    </StyledTab>
  );
}

Tab.displayName = "Tab";