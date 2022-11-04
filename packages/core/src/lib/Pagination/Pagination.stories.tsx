import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/addons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from './Pagination';

export default {
    title: '3.Layout/Pagination',
    component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
    const [_, updateArgs] = useArgs();
    const handleChange = (page: number) => {
        action('current page-')(page);
        updateArgs({ currentPage: page });
    };
    return (
        <div style={{ overflowX: 'auto' }}>
            <Pagination {...args} onPageChange={handleChange} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    currentPage: 5,
    pageSize: 2,
    totalCount: 20,
    siblingCount: 2,
};
