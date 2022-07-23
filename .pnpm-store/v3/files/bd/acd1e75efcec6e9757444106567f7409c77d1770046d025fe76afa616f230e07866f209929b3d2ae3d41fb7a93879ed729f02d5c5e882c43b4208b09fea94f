import m from 'mithril';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = ({ children, ...args }) => ({
  view: () => m(Page, args, children),
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/mithril/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
