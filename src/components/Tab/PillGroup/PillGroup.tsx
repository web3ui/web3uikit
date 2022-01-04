import { Pill } from '..';
import { PillGroupProps } from './types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { pillGroupStyles } from './PillGroup.styles';

const PillGroupStyled = styled.div`
  ${pillGroupStyles.initialStyles}
`;

const PillGroup: React.FC<PillGroupProps> = ({
  id = String(Date.now()),
  tabs = ['Tab'],
  defaultActiveKey = 0,
  children = [<p key={'0'}>Content goes here</p>],
}: PillGroupProps) => {
  const [active, setActive] = useState(defaultActiveKey);
  return (
    <PillGroupStyled id={id}>
      <div style={{ display: 'flex' }}>
        {tabs.map((tab: string, index: number) => {
          return (
            <Pill
              key={index}
              onClick={() => setActive(index)}
              text={tab}
              pressed={active === index}
              active={active === index}
            />
          );
        })}
      </div>
      <div>
        {children.map((child: React.ReactNode, index: number) => {
          if (index === active) {
            return child;
          } else {
            return '';
          }
        })}
      </div>
    </PillGroupStyled>
  );
};

export default PillGroup;
