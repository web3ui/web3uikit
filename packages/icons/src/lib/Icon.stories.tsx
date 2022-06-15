// import { storiesOf } from '@storybook/react';

// // component
// import Icon from './Icon';
import * as Icons from './icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
const IconsGallery = () => {
    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>Icons here</div>;
};
export default {
    title: '10.Icons',
    component: IconsGallery,
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof IconsGallery>;

const Template: ComponentStory<typeof IconsGallery> = (args) => {
    return <IconsGallery />;
};
