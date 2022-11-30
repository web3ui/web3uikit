import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkTo from './LinkTo';
import { color } from '@web3uikit/styles';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Youtube } from '@web3uikit/icons';

export default {
    title: '4.UI/LinkTo',
    component: LinkTo,
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof LinkTo>;

const Template: ComponentStory<typeof LinkTo> = (args) => <LinkTo {...args} />;
const TemplateText: ComponentStory<typeof LinkTo> = (args) => (
    <div
        style={{
            color: color.blueGray50,
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            letterSpacing: '0em',
            lineHeight: '24px',
        }}
    >
        This is a link <LinkTo {...args} /> to something
    </div>
);

export const ExternalLink = Template.bind({});
ExternalLink.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    text: 'Moralis Youtube',
    type: 'external',
    iconLayout: 'leading',
};

export const ExternalLinkIconAfter = Template.bind({});
ExternalLinkIconAfter.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    iconLayout: 'trailing',
    text: 'Moralis Youtube',
    type: 'external',
};

export const MailToLink = Template.bind({});
MailToLink.args = {
    address: 'hello@moralis.io',
    text: 'Email Us',
    type: 'email',
    iconLayout: 'leading',
};

export const MailToLinkIconAfter = Template.bind({});
MailToLinkIconAfter.args = {
    address: 'hello@moralis.io',
    iconLayout: 'trailing',
    text: 'Email Us',
    type: 'email',
};

// //////////////////
// Visual Testing //
// //////////////////
export const LinkWithOutText = Template.bind({});
LinkWithOutText.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    type: 'external',
    iconLayout: 'leading',
};

export const LinkInText = TemplateText.bind({});
LinkInText.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    text: 'Moralis Youtube',
    type: 'external',
    iconLayout: 'leading',
};

export const LinkInTextIconAfter = TemplateText.bind({});
LinkInTextIconAfter.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    iconLayout: 'trailing',
    text: 'Moralis Youtube',
    type: 'external',
};

export const MailToLinkInText = TemplateText.bind({});
MailToLinkInText.args = {
    address: 'hello@moralis.io',
    text: 'Email Us',
    type: 'email',
};

export const MailToLinkInTextIconAfter = TemplateText.bind({});
MailToLinkInTextIconAfter.args = {
    address: 'hello@moralis.io',
    iconLayout: 'trailing',
    text: 'Email Us',
    type: 'email',
};

export const NoIconLink = TemplateText.bind({});
NoIconLink.args = {
    address: 'hello@moralis.io',
    text: 'Email Us',
    type: 'email',
    iconLayout: 'none',
};
export const LinkWithNoUnderline = TemplateText.bind({});
LinkWithNoUnderline.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    iconLayout: 'trailing',
    text: 'Moralis Youtube',
    type: 'external',
    isUnderlined: false,
};
export const LinkWithCustomIcon = TemplateText.bind({});
LinkWithCustomIcon.args = {
    icon: <Youtube fontSize={18} fill={color.navy40} />,
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    iconLayout: 'trailing',
    text: 'Moralis Youtube',
    type: 'external',
    isUnderlined: false,
};
export const InternalLink: ComponentStory<typeof LinkTo> = Template.bind({});
InternalLink.decorators = [
    (Story) => (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Story />} />
                <Route
                    path="home"
                    element={
                        <LinkTo address="/" type="internal" text="Go Back" />
                    }
                />
            </Routes>
        </MemoryRouter>
    ),
];
InternalLink.args = {
    type: 'internal',
    address: '/home',
    text: 'Go to Home',
    fontSize: '24px',
};
