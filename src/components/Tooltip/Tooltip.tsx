import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../../styles/colors';
import { tooltipStyles } from './Tooltip.styles';
import { TooltipProps } from './types';

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const TooltipContainer = styled.div<Pick<TooltipProps, 'position'>>`
  ${tooltipStyles.initialStyles}
  ${tooltipStyles.container}
    ${(p) => getContainerStyleByPosition(p.position)}
`;

const getContainerStyleByPosition = (
  position: 'top' | 'bottom' | 'left' | 'right' | undefined
) => {
  switch (position) {
    case 'top':
      return `
                background-color: ${color.blueDark2};
                top: calc(${tooltipStyles.marginTooltip} * -1);
                
                &:before {
                  border-top-color: ${color.blueDark2};
                  top: 100%;
                }
            `;
    case 'bottom':
      return `  
                background-color: ${color.blueDark2};
                bottom: calc(${tooltipStyles.marginTooltip} * -1);

                &:before {
                  bottom: 100%;
                  border-bottom-color: ${color.blueDark2};
                }
            `;
    case 'left':
      return `
                background-color: ${color.blueDark2};
                left: auto;
                right: ${tooltipStyles.marginTooltip};
                top: 50%;
                transform: translateX(0) translateY(-50%);

                &:before {
                  border-left-color: ${color.blueDark2};
                  left: auto;
                  right: calc(${tooltipStyles.arrowSizeTooltip} * -2);
                  top: 50%;
                  transform: translateX(0) translateY(-50%);
                }
            `;
    case 'right':
      return `
                background-color: ${color.blueDark2};
                left: ${tooltipStyles.marginTooltip};
                top: 50%;
                transform: translateX(0) translateY(-50%);

                &:before {
                  border-right-color: ${color.blueDark2};
                  left: calc(${tooltipStyles.arrowSizeTooltip} * -1);
                  top: 50%;
                  transform: translateX(0) translateY(-50%);
                }
            `;
    default:
      return `
                bottom: calc(100% + 5px);
                background-color: ${color.blueDark2};
            `;
  }
};

const Tooltip: React.FC<TooltipProps> = ({
  id = String(Date.now()),
  position = 'bottom',
  text = 'Tooltip text',
  children,
}: TooltipProps) => {
  const [showTooltip, setVisibility] = useState(false);

  if (!children || children?.length === 0) {
    return <div style={{ display: 'none' }}></div>;
  }

  return (
    <TooltipWrapper
      id={id}
      data-testid={'tooltip-wrapper-test-id'}
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      {children}
      {showTooltip && (
        <TooltipContainer position={position}>{text}</TooltipContainer>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
