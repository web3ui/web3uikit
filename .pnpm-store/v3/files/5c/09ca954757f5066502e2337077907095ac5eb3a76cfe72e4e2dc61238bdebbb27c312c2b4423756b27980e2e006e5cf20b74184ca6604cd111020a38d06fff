import React from 'react';

import type { FunctionComponent } from 'react';
import type { Story } from '@storybook/react';
import type { TestingStory } from './types';

export const globalRender: Story = (args, { parameters }) => {
  if (!parameters.component) {
    throw new Error(`
      Could not render story due to missing 'component' property in Meta.
      Please refer to https://github.com/storybookjs/testing-react#csf3
    `);
  }

  const Component = parameters.component as FunctionComponent;
  return <Component {...args} />;
};

const invalidStoryTypes = new Set(['string', 'number', 'boolean', 'symbol']);

export const isInvalidStory = (story?: any) => (!story || Array.isArray(story) || invalidStoryTypes.has(typeof story))

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];
export function objectEntries<T extends object>(t: T): Entries<T>[] {
  return Object.entries(t) as any;
}

export const getStoryName = (story: TestingStory) => {
  if(story.storyName) {
    return story.storyName
  }

  if(typeof story !== 'function' && story.name) {
    return story.name
  }

  return undefined
}