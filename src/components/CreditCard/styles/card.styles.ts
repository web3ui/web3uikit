import { css, FlattenSimpleInterpolation } from 'styled-components';

// types
import type { TCardState } from '../CreditCard.types';

///////////////
// COLORS
///////////////

const color: Record<TCardState, string> = {
  inactive: 'rgba(255, 255, 255, 0.1)',
  active: '#21bf96',
  expired: '#eb5757',
};

///////////////
// STYLES
///////////////

// base
const style = css`
  // display
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  background: linear-gradient(
      113.54deg,
      rgba(60, 87, 140, 0.5) 14.91%,
      rgba(70, 86, 169, 0.5) 43.21%,
      rgba(125, 150, 217, 0.345) 44.27%,
      rgba(129, 161, 225, 0.185) 55.76%
    ),
    linear-gradient(151.07deg, #141659 33.25%, #4152a7 98.24%);

  // font
  font-family: 'Open Sans', sans-serif;

  // border
  border-radius: 16px;
  box-sizing: border-box;
  padding: 20px 20px 10px 20px;

  // variables
  --card-width: 270px;

  // size
  width: var(--card-width);
  height: calc(var(--card-width) * 0.6);

  // children
  > * {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
  }
`;

//
const themes: Record<TCardState, FlattenSimpleInterpolation> = {
  /** @theme `inactive` */
  inactive: css`
    ${style}
    border: 2px solid ${color.inactive};
  `,
  /** @theme `active` */
  active: css`
    ${style}
    border: 2px solid ${color.active};
  `,
  /** @theme `expired` */
  expired: css`
    ${style}
    border: 2px solid ${color.expired};
  `,
};

//
export { themes as cardStyles };
