import { css, FlattenSimpleInterpolation } from 'styled-components';

// types
import type { TCardState } from '../CreditCard.types';

///////////////
// COLORS
///////////////

const color: Record<TCardState, string> = {
  inactive: '#fff',
  active: '#fff',
  expired: '#eb5757',
};

///////////////
// STYLES
///////////////

// base
const style = css`
  flex: 1;
  padding: 0 15px;
`;

//
const themes: Record<TCardState, FlattenSimpleInterpolation> = {
  /** @theme `inactive` */
  inactive: css`
    ${style}
    color: ${color.inactive};
  `,
  /** @theme `active` */
  active: css`
    ${style}
    color: ${color.active};
  `,
  /** @theme `expired` */
  expired: css`
    ${style}
    color: ${color.expired};
  `,
};

//
export { themes as expiryStyles };
