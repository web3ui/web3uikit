import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ICreditCardProps } from '.';

// components
import { CreditCard } from './CreditCard';

// utils
import { creditCardState } from './CreditCard.utils';

///////////////
// HELPERS
///////////////

// generalize component
const Component = CreditCard;
type TComponent = typeof Component;

// generalize state
type TProps = ICreditCardProps;
const state: TProps = creditCardState;

// modify state
const setState = (props: Partial<TProps>): TProps => {
  return { ...state, ...props };
};

///////////////
// STORIES
///////////////

export default {
  title: `Interaction/${Component.name}`,
  component: Component,
} as ComponentMeta<TComponent>;

// extract types for `args` autocompletion
const template: ComponentStory<TComponent> = (args) => <Component {...args} />;

////
// default
///

// figma: default - inactive
export const CardInactive = template.bind({});
CardInactive.args = setState({});

// figma: default - active
export const CardActive = template.bind({});
CardActive.args = setState({ state: 'active' });

// figma: default - expired
export const CardExpired = template.bind({});
CardExpired.args = setState({ state: 'expired' });

////
// hover
///

// figma: hover - inactive
export const CardHoverInactive = template.bind({});
CardHoverInactive.args = setState({});

// figma: hover - active
export const CardHoverActive = template.bind({});
CardHoverActive.args = setState({ state: 'active' });

// figma: hover - expired
export const CardHoverExpired = template.bind({});
CardHoverExpired.args = setState({ state: 'expired' });

////
// pressed
///

// figma: pressed - inactive
export const CardPressedIdle = template.bind({});
CardPressedIdle.args = setState({});

// figma: pressed - active
export const CardPressedActive = template.bind({});
CardPressedActive.args = setState({ state: 'active' });

// figma: pressed - expired
export const CardPressedExpired = template.bind({});
CardPressedExpired.args = setState({ state: 'expired' });
