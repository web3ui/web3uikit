import type { BaseAnnotations, BaseStoryFn as OriginalBaseStoryFn } from '@storybook/addons';
import type { WebProjectAnnotations } from '@storybook/preview-web';
import type { StoryFn as OriginalStoryFn, StoryObj, Meta, Args,StoryContext, ReactFramework } from '@storybook/react';
import type { ReactElement } from 'react';

type StoryFnReactReturnType = ReactElement<unknown>;

export type BaseStoryFn<Args> = OriginalBaseStoryFn<Args, StoryFnReactReturnType> & BaseAnnotations<Args, StoryFnReactReturnType>;
/**
 * Object representing the preview.ts module
 *
 * Used in storybook testing utilities.
 * @see [Unit testing with Storybook](https://storybook.js.org/docs/react/workflows/unit-testing)
 */
export type GlobalConfig = WebProjectAnnotations<ReactFramework>;

export type TestingStory<T = Args> = StoryFn<T> | StoryObj<T>;

export type StoryFile = { default: Meta<any>, __esModule?: boolean }

export type TestingStoryPlayContext<T = Args> = Partial<StoryContext<ReactFramework, T>> & Pick<StoryContext, 'canvasElement'>

export type TestingStoryPlayFn<TArgs = Args> = (context: TestingStoryPlayContext<TArgs>) => Promise<void> | void;

export type StoryFn<TArgs = Args> = OriginalStoryFn<TArgs> & { play: TestingStoryPlayFn<TArgs> }

/**
 * T represents the whole es module of a stories file. K of T means named exports (basically the Story type)
 * 1. pick the keys K of T that have properties that are Story<AnyProps>
 * 2. infer the actual prop type for each Story
 * 3. reconstruct Story with Partial. Story<Props> -> Story<Partial<Props>>
 */
export type StoriesWithPartialProps<T> = { 
  [K in keyof T as T[K] extends TestingStory<any> ? K : never]: T[K] extends TestingStory<infer P> ? StoryFn<Partial<P>> : unknown 
}
