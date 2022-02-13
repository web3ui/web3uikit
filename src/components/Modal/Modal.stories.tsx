import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon';
import colors from '../../styles/colors';
import { Input } from '../Input';
import { useArgs } from '@storybook/addons';
import {Button} from '../Button';

export default {
    title: 'Popup/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const [{}, updateArgs] = useArgs();

    return (
        <Modal
            {...args}
            onCancel={() => {
                console.log('canceled');
                updateArgs({ isVisible: false });
            }}
            onOk={() => {
                console.log('pressed ok');
                updateArgs({ isVisible: false });
            }}
            onCloseButtonPressed={() => {
                console.log('pressed close');
                updateArgs({ isVisible: false });
            }}
        />
    );
};

export const Regular = Template.bind({});
Regular.args = {
    id: 'regular',
    title: 'Confirm',
    isVisible: true,
    children: [
        <div
            key={'0'}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Icon svg={iconTypes.cloud} size={64} fill={colors.blueDark2} />
            <p>Proceed uploading?</p>
        </div>,
    ],
};

export const ButtonsDisabled = Template.bind({});
ButtonsDisabled.args = {
    id: 'disabled',
    title: 'Confirm',
    okText: 'Download',
    cancelText: 'Abort',
    isVisible: true,
    isOkDisabled: true,
    isCancelDisabled: true,
    children: [
        <div
            key={'1'}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Icon svg={iconTypes.download} size={64} fill={colors.blueDark2} />
            <p>Wait until the file is ready to be downloaded</p>
        </div>,
    ],
};

export const OneButtonDisabled = Template.bind({});
OneButtonDisabled.args = {
    id: 'disabled',
    title: 'Newsletter',
    okText: 'Disabled',
    cancelText: 'Cancel',
    isVisible: true,
    onCancel: () => {
        console.log('cancel button clicked');
    },
    onOk: () => {
        console.log('ok button clicked');
    },
    isOkDisabled: true,
    children: [
        <div
            key={'2'}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Icon svg={iconTypes.mail} size={64} fill={colors.blueDark2} />
            <Input
                key={0}
                onChange={(e) => console.log(e.target.value)}
                placeholder={'E-Mail Address'}
                type={'email'}
            />
        </div>,
    ],
};

export const NoFooter = Template.bind({});
NoFooter.args = {
    title: 'Recover Password',
    hasFooter: false,
    children: [
        <div
            style={{
                display: 'grid',
                placeItems: 'center',
                width: '100%',
            }}
        >
           <div
               style={{
                   display: 'flex',
               }}
           >
               <p
                   style={{
                       fontWeight: 600,
                       marginRight: '1em',
                   }}
               >
                   Send instruction to reset password
               </p>
               <Button text='Send E-Mail'/>
           </div>
        </div>,
    ],
};

export const NoCancel = Template.bind({});
NoCancel.args = {
    title: 'Recover Password',
    okText: 'Send E-Mail',
    hasCancel: false,
    children: [
        <p
            style={{
                fontWeight: 600,
                marginRight: '1em',
                textAlign: 'center',
            }}
        >
            Send instruction to reset password
        </p>,
    ],
};

export const CustomOkColor = Template.bind({});
CustomOkColor.args = {
    title: 'Delete Account',
    okText: 'Yes! I am 100% sure!',
    okButtonColor: 'red',
    hasCancel: false,
    children: [
        <p
            style={{
                fontWeight: 600,
                marginRight: '1em',
                textAlign: 'center',
            }}
        >
            Are you sure you want to delete your account?
        </p>,
    ],
};
