// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
        default: 'page',
        values: [
            {
                name: 'page',
                value: '#FFFFFF',
            },
            {
                name: 'footer',
                value: '#041836',
            },
            {
                name: 'body',
                value: '#F2F6FF',
            },
            {
                name: 'blue',
                value: '#2E7DAF',
            },
            {
                name: 'green',
                value: '#21BF96',
            },
            {
                name: 'red',
                value: '#EB5757',
            },
            {
                name: 'yellow',
                value: '#ECA609',
            },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};
