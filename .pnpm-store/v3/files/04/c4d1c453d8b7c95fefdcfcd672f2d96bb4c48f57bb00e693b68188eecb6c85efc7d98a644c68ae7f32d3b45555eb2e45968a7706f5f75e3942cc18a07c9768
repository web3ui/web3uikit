import { defaultDecorateStory, combineParameters } from '@storybook/client-api';
import addons, { applyHooks, HooksContext, mockChannel } from '@storybook/addons';
import type { Meta, StoryContext, ReactFramework } from '@storybook/react';
import { isExportStory } from '@storybook/csf'

import type { GlobalConfig, StoriesWithPartialProps, StoryFile, TestingStory, TestingStoryPlayContext } from './types';
import { getStoryName, globalRender, isInvalidStory, objectEntries } from './utils';

// Some addons use the channel api to communicate between manager/preview, and this is a client only feature, therefore we must mock it.
addons.setChannel(mockChannel());

let globalStorybookConfig = {};

const decorateStory = applyHooks(defaultDecorateStory);

const isValidStoryExport = (storyName: string, nonStoryExportsConfig = {}) =>
  isExportStory(storyName, nonStoryExportsConfig) && storyName !== '__namedExportsOrder'

/** Function that sets the globalConfig of your storybook. The global config is the preview module of your .storybook folder.
 *
 * It should be run a single time, so that your global config (e.g. decorators) is applied to your stories when using `composeStories` or `composeStory`.
 *
 * Example:
 *```jsx
 * // setup.js (for jest)
 * import { setGlobalConfig } from '@storybook/testing-react';
 * import * as globalStorybookConfig from './.storybook/preview';
 *
 * setGlobalConfig(globalStorybookConfig);
 *```
 *
 * @param config - e.g. (import * as globalConfig from '../.storybook/preview')
 */
export function setGlobalConfig(config: GlobalConfig) {
  globalStorybookConfig = config;
}

/**
 * Function that will receive a story along with meta (e.g. a default export from a .stories file)
 * and optionally a globalConfig e.g. (import * from '../.storybook/preview)
 * and will return a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing a story in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStory } from '@storybook/testing-react';
 * import Meta, { Primary as PrimaryStory } from './Button.stories';
 *
 * const Primary = composeStory(PrimaryStory, Meta);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param story
 * @param meta - e.g. (import Meta from './Button.stories')
 * @param [globalConfig] - e.g. (import * as globalConfig from '../.storybook/preview') this can be applied automatically if you use `setGlobalConfig` in your setup files.
 */
export function composeStory<GenericArgs>(
  story: TestingStory<GenericArgs>,
  meta: Meta<GenericArgs | any>,
  globalConfig: GlobalConfig = globalStorybookConfig
) {

  if (isInvalidStory(story)) {
    throw new Error(
      `Cannot compose story due to invalid format. @storybook/testing-react expected a function/object but received ${typeof story} instead.`
    );
  }

  if (story.story !== undefined) {
    throw new Error(
      `StoryFn.story object-style annotation is not supported. @storybook/testing-react expects hoisted CSF stories.
       https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations`
    );
  }

  const renderFn = typeof story === 'function' ? story : story.render ?? meta.render ?? globalRender;
  const finalStoryFn = (context: StoryContext<ReactFramework, GenericArgs>) => {
    const { passArgsFirst = true } = context.parameters;
    if (!passArgsFirst) {
      throw new Error(
        'composeStory does not support legacy style stories (with passArgsFirst = false).'
      );
    }

    return renderFn(context.args, context);
  };

  const combinedDecorators = [
    ...(story.decorators || []),
    ...(meta?.decorators || []),
    ...(globalConfig.decorators || []),
  ];

  const decorated = decorateStory<ReactFramework>(
    finalStoryFn as any,
    combinedDecorators as any
  );

  const defaultGlobals = Object.entries(
    (globalConfig.globalTypes || {}) as Record<string, { defaultValue: any }>
  ).reduce((acc, [arg, { defaultValue }]) => {
    if (defaultValue) {
      acc[arg] = defaultValue;
    }
    return acc;
  }, {} as Record<string, { defaultValue: any }>);

  const combinedParameters = combineParameters(
    globalConfig.parameters || {},
    meta?.parameters || {},
    story.parameters || {},
    { component: meta?.component }
  )

  const combinedArgs = {
    ...meta?.args,
    ...story.args
  } as GenericArgs

  const context = {
    componentId: '',
    kind: '',
    title: '',
    id: '',
    name: '',
    story: '',
    argTypes: globalConfig.argTypes || {},
    globals: defaultGlobals,
    parameters: combinedParameters,
    initialArgs: combinedArgs,
    args: combinedArgs,
    viewMode: 'story',
    originalStoryFn: renderFn,
    hooks: new HooksContext(),
  } as StoryContext<ReactFramework, GenericArgs>;

  const composedStory = (extraArgs: Partial<GenericArgs>) => {
    return decorated({
      ...context,
      args: {
        ...combinedArgs, ...extraArgs
      }
    })
  }

  const boundPlay = ({ ...extraContext }: TestingStoryPlayContext<GenericArgs>) => {
    return story.play?.({ ...context, ...extraContext });
  }

  composedStory.storyName = story.storyName || story.name
  composedStory.args = combinedArgs
  composedStory.play = boundPlay;
  composedStory.decorators = combinedDecorators
  composedStory.parameters = combinedParameters

  return composedStory
}

/**
 * Function that will receive a stories import (e.g. `import * as stories from './Button.stories'`)
 * and optionally a globalConfig (e.g. `import * from '../.storybook/preview`)
 * and will return an object containing all the stories passed, but now as a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing stories in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStories } from '@storybook/testing-react';
 * import * as stories from './Button.stories';
 *
 * const { Primary, Secondary } = composeStories(stories);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param storiesImport - e.g. (import * as stories from './Button.stories')
 * @param [globalConfig] - e.g. (import * as globalConfig from '../.storybook/preview') this can be applied automatically if you use `setGlobalConfig` in your setup files.
 */
export function composeStories<
  TModule extends StoryFile
>(storiesImport: TModule, globalConfig?: GlobalConfig) {
  const { default: meta, __esModule, ...stories } = storiesImport;

  // This function should take this as input: 
  // {
  //   default: Meta,
  //   Primary: Story<ButtonProps>, <-- Props extends Args
  //   Secondary: Story<OtherProps>,
  // }

  // And strips out default, then return composed stories as output: 
  // {
  //   Primary: ComposedStory<Partial<ButtonProps>>,
  //   Secondary: ComposedStory<Partial<OtherProps>>,
  // }

  // Compose an object containing all processed stories passed as parameters
  const composedStories = objectEntries(stories).reduce<Partial<StoriesWithPartialProps<TModule>>>(
    (storiesMap, [key, _story]) => {
      const storyName = String(key)
      // filter out non-story exports
      if (!isValidStoryExport(storyName, meta)) {
        return storiesMap;
      }

      const story = _story as TestingStory
      story.storyName = getStoryName(story) || storyName
      const result = Object.assign(storiesMap, {
        [key]: composeStory(story, meta, globalConfig)
      });
      return result;
    },
    {}
  );

  // @TODO: the inferred type of composedStories is correct but Partial.
  // investigate whether we can return an unpartial type of that without this hack
  return composedStories as unknown as Omit<StoriesWithPartialProps<TModule>, keyof StoryFile>;
}