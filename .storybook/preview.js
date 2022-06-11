export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (a, b) =>
            a.title === b.title
                ? 0
                : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
};
