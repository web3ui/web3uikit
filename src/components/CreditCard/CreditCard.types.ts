import type { DOMAttributes } from 'react';

///////////////
// TYPES
///////////////

// favor `string` over `enum` to support typings for .jsx
export const cardState = ['inactive', 'active', 'expired'] as const;
export type TCardState = typeof cardState[number];

///////////////
// INTERFACES
///////////////

/**
 * props to parse into component
 * @component `<Component name={}>` or `<Component {...props}>`
 */
export interface ICreditCardProps extends DOMAttributes<HTMLElement> {
  /**
   * card holder name
   */
  name: string;

  /**
   * front-side numbers of credit card
   */
  cardNumber: string;

  /**
   * card expiry month
   */
  expiryMonth: number;

  /**
   * card expiry year
   */
  expiryYear: number;

  /**
   * theme of card
   * TODO: find a way to use `theme` with proper type and not `any` @oscario2
   */
  state: TCardState;
}
