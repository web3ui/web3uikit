import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Modal from "./Modal";
import {Icon} from "../Icon";
import {iconTypes} from "../Icon/collection";
import colors from "../../styles/colors";

export default {
    title: "Interaction/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;
const [ visible, setVisible] = useState(false)

export const Regular = Template.bind({});
Regular.args = {
    id: "regular",
    title: "Download mp3",
    okText: "Yes",
    cancelText: "Cancel",
    isVisible: visible,
    onOk: () => { console.log('downloading ...') },
    onCancel: () => {setVisible(false)},
    children: [
        <div
        key={"0"}
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
        >
            <Icon svg={iconTypes.download} size={64} fill={colors.blueDark2}/>
            <p>Are you sure you want to download this?</p>
        </div>
    ]
};