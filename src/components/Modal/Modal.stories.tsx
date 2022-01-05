import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";

export default {
    title: "Interaction/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    id: "regular",
    title: "Book your flight",
    cancelText: "Cancel",
    isVisible: true,
    onOk: () => { console.log('trigger') },
    children: [
        <div
        key={"0"}
        >
            <p>Content</p>
            <p>Goes</p>
            <p>Here</p>
        </div>
    ]
};