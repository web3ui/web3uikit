import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
// @ts-ignore
import { toJSON } from "cssjson";

// types
import type { CSSProperties } from "react";
import type { FlattenSimpleInterpolation } from "styled-components";
import { LinkToProps } from ".";

// styles
import { LinkToStyles as styled } from "./LinkTo.styles";

// stories
import * as stories from "./LinkTo.stories";
const { ExternalLink, ExternalLinkIconAfter, MailToLink, MailToLinkIconAfter } =
	composeStories(stories);

/**
 * - find rule in a css`` styled component
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
  styles: Record<LinkToProps., FlattenSimpleInterpolation>;
  /** styles to verify */
  rules: (keyof CSSProperties)[];
  /** exclude from test */
  exclude?: boolean;
  /** only run this test */
  only?: boolean;
}