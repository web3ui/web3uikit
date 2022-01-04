import styled from 'styled-components';

// themes
import { cardStyles, expiryStyles, radioStyles } from './styles';

// types
import type { ICreditCardProps } from './CreditCard.types';

///////////////
// STYLES
///////////////

type TStyleProps = Pick<ICreditCardProps, 'state'>;

/**
 * container
 **/
const Card = styled.div<TStyleProps>`
  ${({ state }) => cardStyles[state]};
`;

/**
 * status radio
 * top-left
 */
const Radio = styled.div<TStyleProps>`
  ${({ state }) => radioStyles[state]};
`;

const Info = {
  /**
   * card name
   * bottom-left
   **/
  Name: styled.span``,
  /**
   * card expiry
   * bottom-center
   **/
  Expiry: styled.span<TStyleProps>`
    ${({ state }) => expiryStyles[state]};
  `,
  /**
   * card number
   * center-left
   **/
  Number: styled.span`
    color: #fff;
  `,
};

/**
 * brand logo
 * bottom-right
 **/
const Provider = styled.div`
  border-radius: 50%;
  align-self: flex-end;

  // variables
  --circle-size: 22px;

  // size
  height: var(--circle-size);
  width: var(--circle-size);

  // fade
  background: #ff5f00;

  //
  box-shadow: 
    // left circle
    inset calc(var(--circle-size) * 0.6) 0 0 0 #eb001b,
    // right circle
    calc(var(--circle-size) * 0.6) 0 0 0 #f79e1b;
`;

export const CardStyled = {
  Card,
  Radio,
  Info,
  Provider,
};

///////////////
// LAYOUT
///////////////

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardLayout = {
  ContainerFlex,
};
