import { css, FlattenSimpleInterpolation } from 'styled-components';

// types
import type { TCardState } from '../CreditCard.types';

///////////////
// COLORS
///////////////

type TColorProps = 'background' | 'inner' | 'outer' | 'border';

const inactiveColor: Record<TColorProps, string> = {
  background: '#f2f6ff',
  inner: '#f2f6ff',
  outer: '#f2f6ff',
  border: '#9eccea',
};

const activeColor: Record<TColorProps, string> = {
  background: '#f2f6ff',
  inner: '#21bf96',
  outer: '#21bf96',
  border: '#7ad9c0',
};

const expiredColor: Record<TColorProps, string> = {
  background: 'transparent',
  inner: 'transparent',
  outer: 'transparent',
  border: 'transparent',
};

///////////////
// STYLES
///////////////

// base
const style = css`
  border-radius: 50%;
  box-sizing: border-box;
`;

//
const themes: Record<TCardState, FlattenSimpleInterpolation> = {
  /** @theme `inactive` */
  inactive: css`
    ${style}

    // variables
    --inner-size: 8px;

    // inner circle
    background: ${inactiveColor.background};
    height: var(--inner-size);
    width: var(--inner-size);

    //
    box-shadow: 
      // outer circle
      0 0 0 calc(var(--inner-size) - 2px) ${inactiveColor.outer},
      // border
      0 0 0 calc(var(--inner-size) - 1px) ${inactiveColor.border};
  `,
  /** @theme `active` */
  active: css`
    ${style}

    // variables
    --inner-size: 8px;

    // inner circle
    background: ${activeColor.background};
    height: var(--inner-size);
    width: var(--inner-size);

    //
    box-shadow: 
      // outer circle
      0 0 0 calc(var(--inner-size) - 2px) ${activeColor.outer},
      // border
      0 0 0 calc(var(--inner-size) - 1px) ${activeColor.border};
  `,
  /** @theme `expired` */
  expired: css`
    ${style}

    // variables
    --inner-size: 8px;

    // inner circle
    background: ${expiredColor.background};
    height: var(--inner-size);
    width: var(--inner-size);

    //
    box-shadow: 
      // outer circle
      0 0 0 calc(var(--inner-size) - 2px) ${expiredColor.outer},
      // border
      0 0 0 calc(var(--inner-size) - 1px) ${expiredColor.border};
  `,
};

//
export { themes as radioStyles };
