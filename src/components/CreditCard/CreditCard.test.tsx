import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// @ts-ignore
import { toJSON } from 'cssjson';

// types
import type { CSSProperties } from 'react';
import type { FlattenSimpleInterpolation } from 'styled-components';
import { cardState, TCardState } from './CreditCard.types';

// styles
import { CardStyled as styled } from './CreditCard.styles';
import { cardStyles, expiryStyles, radioStyles } from './styles';

// stories
import * as stories from './CreditCard.stories';
const { CardInactive, CardActive, CardExpired } = composeStories(stories);

/**
 * - find rule in a css`` styled component
 * - TODO: support pseudo and nested selectors @oscario2
 * @param style
 * @param rule
 * @returns
 */
const getStyledRule = (
  style: FlattenSimpleInterpolation,
  rule: (keyof CSSProperties)[]
) => {
  // `boxShadow` to `box-shadow`
  const rules = rule.map((r) => r.replace(/([A-Z])/g, '-$1').toLowerCase());

  // remove comments
  let pre = style.join('').replace(/[\/]+.*?\n/g, '');

  // remove spaces and multilines
  pre = pre.replace(/[\s]+/g, ' ');

  // map to json
  const { attributes } = toJSON(pre) as {
    attributes: Record<string, string>;
  };

  return rules.map((r) => attributes[r]);
};

interface ITestSuite {
  /** render type */
  type: string;
  /** class name to find */
  find: string;
  /** styled component to verify from */
  styles: Record<TCardState, FlattenSimpleInterpolation>;
  /** styles to verify */
  rules: (keyof CSSProperties)[];
  /** exclude from test */
  exclude?: boolean;
  /** only run this test */
  only?: boolean;
}

const suite: ITestSuite[] = [
  {
    type: 'card',
    find: styled.Card.toString(),
    styles: cardStyles,
    rules: ['border'],
  },
  {
    type: 'expiry',
    find: styled.Info.Expiry.toString(),
    styles: expiryStyles,
    rules: ['color'],
  },
  {
    type: 'radio',
    find: styled.Radio.toString(),
    styles: radioStyles,
    rules: ['boxShadow'],
  },
];

const getStory = (key: TCardState) => {
  switch (key) {
    case 'inactive':
      return <CardInactive />;
    case 'active':
      return <CardActive />;
    case 'expired':
      return <CardExpired />;
  }
};

const runTest = (key: TCardState) => {
  describe(`CreditCard - ${key}`, () => {
    let container: HTMLElement;

    beforeEach(() => {
      // arrange
      const story = getStory(key);
      ({ container } = render(story));
    });

    // filter
    const only = suite.filter((k) => k.only);
    const exclude = suite.filter((k) => !k.exclude);
    const tests = only.length > 0 ? only : exclude;

    // tests
    for (const { type, find, styles, rules } of tests) {
      it(`renders ${type}`, () => {
        // act
        const child = container.querySelector(find) as HTMLElement;
        const match = getStyledRule(styles[key], rules);

        // assert
        expect(match.length > 0).toBeTruthy();
        match.forEach((rule) => {
          expect(rule).not.toBeUndefined();
          expect(rule.length > 0).toBeTruthy();
          expect(child).toHaveStyleRule(rule);
        });
      });
    }
  });
};

cardState.forEach((state) => {
  runTest(state);
});
