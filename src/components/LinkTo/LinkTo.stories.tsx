import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkTo from './LinkTo';
import color from '../../styles/colors';

export default {
    title: '4.UI/LinkTo',
    component: LinkTo,
} as ComponentMeta<typeof LinkTo>;

const Template: ComponentStory<typeof LinkTo> = (args) => <LinkTo {...args} />;
const TemplateText: ComponentStory<typeof LinkTo> = (args) => (
    <p
        style={{
            color: color.grey,
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            letterSpacing: '0em',
            lineHeight: '24px',
        }}
    >
        This is a link <LinkTo {...args} /> to something
    </p>
);

export const ExternalLink = Template.bind({});
ExternalLink.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    text: 'Moralis Youtube',
    type: 'external',
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
};

export const MailToLinkIconAfter = Template.bind({});
MailToLinkIconAfter.args = {
    address: 'hello@moralis.io',
    iconLayout: 'trailing',
    text: 'Email Us',
    type: 'email',
};

////////////////////
// Visual Testing //
////////////////////
export const LinkWithOutText = Template.bind({});
LinkWithOutText.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    type: 'external',
};

export const LinkInText = TemplateText.bind({});
LinkInText.args = {
    address: 'https://www.youtube.com/c/MoralisWeb3/featured',
    text: 'Moralis Youtube',
    type: 'external',
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
