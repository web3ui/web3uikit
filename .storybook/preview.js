import { initialize } from 'msw-storybook-addon';
// Start Mock Service Worker
initialize({ onUnhandledRequest: 'bypass' });

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'white',
                value: '#ffffff',
            },
            {
                name: 'light',
                value: '#f9f9f9',
            },
            {
                name: 'grey',
                value: '#ccc',
            },
            {
                name: 'dark',
                value: '#444',
            },
            {
                name: 'black',
                value: '#444',
            },
            {
                name: 'green',
                value: '#21BF96',
            },
            {
                name: 'yellow',
                value: '#ECA609',
            },
            {
                name: 'red',
                value: '#EB5757',
            },
            {
                name: 'blue',
                value: '#2E7DAF',
            },
            {
                name: 'purple',
                value: '#8851DA',
            },
            {
                name: 'pink',
                value: '#DA51BE',
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
        storySort: (a, b) => {
            if (!Boolean(a?.title && b?.title)) {
                // storyStoreV6 type sorting is used during build
                return a[1]?.kind === b[1]?.kind
                    ? 0
                    : a[1].id.localeCompare(b[1].id, undefined, {
                          numeric: true,
                      });
            } else {
                // storyStoreV7 type sorting is used during dev
                return a.title === b.title
                    ? 0
                    : a.id.localeCompare(b.id, undefined, { numeric: true });
            }
        },
    },
};
