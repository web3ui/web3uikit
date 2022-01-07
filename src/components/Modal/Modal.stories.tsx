import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Modal from "./Modal";
import {Icon} from "../Icon";
import {iconTypes} from "../Icon/collection";
import colors from "../../styles/colors";
import {Input} from "../Input";

export default {
    title: "Popup/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Regular = Template.bind({});
Regular.args = {
    id: "regular",
    title: "Confirm",
    isVisible: true,
    children: [
        <div
        key={"0"}
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
        >
            <Icon svg={iconTypes.cloud} size={64} fill={colors.blueDark2}/>
            <p>Proceed uploading?</p>
        </div>
    ]
};

export const ButtonsDisabled = Template.bind({});
ButtonsDisabled.args = {
    id: "disabled",
    title: "Confirm",
    okText: "Download",
    cancelText: "Abort",
    isVisible: true,
    isOkDisabled: true,
    isCancelDisabled: true,
    children: [
        <div
            key={"1"}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
        >
            <Icon svg={iconTypes.download} size={64} fill={colors.blueDark2}/>
            <p>Wait until the file is ready to be downloaded</p>
        </div>
    ]
};

export const OneButtonDisabled = Template.bind({});
OneButtonDisabled.args = {
    id: "disabled",
    title: "Newsletter",
    okText: "Disabled",
    cancelText: "Cancel",
    isVisible: true,
    onCancel: () => { console.log('cancel button clicked')},
    onOk: () => {console.log('ok button clicked')},
    isOkDisabled: true,
    children: [
        <div
            key={"2"}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
        >
            <Icon svg={iconTypes.mail} size={64} fill={colors.blueDark2}/>
            <Input key={0} onChange={(e) => console.log(e.target.value)} placeholder={"E-Mail Address"} type={"email"}/>
        </div>
    ]
};
