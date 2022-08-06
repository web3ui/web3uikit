import { PartialStoryFn } from '@storybook/csf';
import { extractComponentDescription } from '@storybook/docs-tools';
import { ReactFramework } from '..';
export declare const parameters: {
    docs: {
        inlineStories: boolean;
        prepareForInline: (storyFn: PartialStoryFn<ReactFramework>) => import("../preview/types").StoryFnReactReturnType;
        extractArgTypes: import("@storybook/docs-tools").ArgTypesExtractor;
        extractComponentDescription: typeof extractComponentDescription;
    };
};
export declare const decorators: ((storyFn: PartialStoryFn<ReactFramework, import("@storybook/csf").Args>, context: import("@storybook/csf").StoryContext<ReactFramework, import("@storybook/csf").Args>) => import("../preview/types").StoryFnReactReturnType)[];
export declare const argTypesEnhancers: (<TFramework extends import("@storybook/csf").AnyFramework>(context: import("@storybook/csf").StoryContextForEnhancers<TFramework, import("@storybook/csf").Args>) => import("@storybook/addons").Parameters | import("@storybook/csf").StrictArgTypes<import("@storybook/csf").Args>)[];
