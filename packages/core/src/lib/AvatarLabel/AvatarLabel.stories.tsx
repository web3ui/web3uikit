import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarLabel from './AvatarLabel';
import { color, legacyColor } from '@web3uikit/styles';

export default {
    title: '6.Graphic/Avatar Label',
    component: AvatarLabel,
    argTypes: {},
} as ComponentMeta<typeof AvatarLabel>;

const Template: ComponentStory<typeof AvatarLabel> = (args) => (
    <AvatarLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    image: 'https://moralis.io/wp-content/uploads/2023/05/defaultAvatar.jpg',
    imageBorderColor: color.aero80,
    imageBorderRadius: 50,
    imageSize: 80,
    text: 'Level 0',
    textColor: color.white,
    textBGColor: legacyColor.pink,
    textFontSize: 10,
};
