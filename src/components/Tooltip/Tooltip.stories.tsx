import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import color from "../../styles/colors";

export default {
  title: 'Popup/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: '50%',
      marginTop: '30px',
    }}
  >
    <Tooltip {...args} />
  </div>
);

export const Bottom = Template.bind({});
Bottom.args = {
  text: "Tooltip text",
  children: [<Icon key='0' svg={iconTypes.helpCircle} fill={color.grey} />],
};

export const Top = Template.bind({});
Top.args = {
  position: 'top',
  text: "Tooltip text",
  children: [<Icon key='2' svg={iconTypes.helpCircle} fill={color.grey} />],
};

export const Left = Template.bind({});
Left.args = {
  text: "Tooltip text",
  position: 'left',
  children: [<Icon key='4' svg={iconTypes.helpCircle} fill={color.grey} />],
};


export const Right = Template.bind({});
Right.args = {
  text: "Tooltip text",
  position: 'right',
  children: [<Icon key='6' svg={iconTypes.helpCircle} fill={color.grey} />],
};
