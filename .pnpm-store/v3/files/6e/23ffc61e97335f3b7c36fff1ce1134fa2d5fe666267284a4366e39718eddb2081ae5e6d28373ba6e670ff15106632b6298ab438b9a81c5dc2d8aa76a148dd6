/**
 * @see https://github.com/storybookjs/addon-svelte-csf/blob/f72b8f28dabbb99c92e12d0170d3c1db4397ee7c/src/parser/extract-stories.ts
 */
declare module '@storybook/addon-svelte-csf/dist/cjs/parser/extract-stories' {
  interface StoryDef {
    name: string;
    template: boolean;
    source: string;
    hasArgs: boolean;
  }

  interface StoriesDef {
    stories: Record<string, StoryDef>;
    allocatedIds: string[];
  }

  function extractStories(component: string): { stories: StoriesDef; allocatedIds: string[] };
}
