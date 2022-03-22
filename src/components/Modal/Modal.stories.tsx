import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon';
import colors from '../../styles/colors';
import { Input } from '../Input';
import { useArgs } from '@storybook/addons';
import { Button } from '../Button';
import Dropdown from '../Dropdown/Dropdown';

const hasPositionAbsoluteFix = {
    transform: 'scale(1)',
    height: '90vh',
};

export default {
    title: '5.Popup/Modal',
    component: Modal,
    decorators: [
        (storyFn) => <div style={hasPositionAbsoluteFix}>{storyFn()}</div>,
    ],
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

export const BorderedHeader = Template.bind({});
BorderedHeader.args = {
    id: 'regular',
    title: 'Bordered Header',
    isVisible: true,
    headerHasBottomBorder: true,
    children: [
        <div
            key={'0'}
            style={{
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <Icon svg={iconTypes.cloud} size={64} fill={colors.blueDark2} />
            <p>This is a demo on how to use <em>headerHasBottomBorder</em> props?</p>
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
                <Button text="Send E-Mail" />
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

export const MaxHeight = Template.bind({});
MaxHeight.args = {
    id: 'height',
    title: 'If the modal wont fix in view it becomes scrollable',
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
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
            <p>Moralis web3uiKit will be PAMP!</p>
        </div>,
    ],
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
    id: 'width',
    title: 'You can pass any valid CSS value as width',
    isVisible: true,
    children: [
        <p>this Modal is 300px width (and will scale down with screen size)</p>,
    ],
    width: '300px',
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
    title: 'This is a custom Footer Modal',
    children: [
        <p
            style={{
                fontWeight: 600,
                marginRight: '1em',
                textAlign: 'center',
            }}
        >
            Modal Body!
        </p>,
    ],
    hasCancel: false,
    customFooter: <p id="Custom-Footer">Custom Footer Here</p>,
};

export const CustomCloseButton = Template.bind({});
CustomCloseButton.args = {
    id: 'regular',
    title: 'Confirm',
    isVisible: true,
    closeButton: (
        <Button
            id="close"
            text="Custom close button"
            theme="secondary"
            type="button"
        />
    ),
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

export const CustomCloseRoundButton = Template.bind({});
CustomCloseRoundButton.args = {
    id: 'regular',
    title: 'Confirm',
    isVisible: true,
    closeButton: (
        <Button
            icon="arrowCircleRight"
            iconLayout="icon-only"
            id="close"
            onClick={() => {}}
            text="Primary icon only"
            theme="primary"
            type="button"
            radius={40}
        />
    ),
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

export const NoTitle = Template.bind({});
NoTitle.args = {
    id: 'regular',
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

export const WithDropdown = Template.bind({});
WithDropdown.args = {
    id: 'regular',
    isVisible: true,
    hasFooter: false,
    canOverflow: true,
    children: [
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            efficitur id leo sed auctor. Cras mollis, nisi ut venenatis aliquet,
            purus nisl finibus ipsum, eget condimentum dolor lacus vel risus.
            Curabitur ullamcorper lorem porttitor nisl auctor, in rutrum mauris
            luctus. Fusce vel mi ut sapien porttitor pulvinar.
        </p>,
        <Dropdown
            onChange={() => {}}
            label="Select Region: "
            width="100%"
            options={[
                {
                    id: 'New York',
                    label: 'New York',
                },
                {
                    id: 'Toronto',
                    label: 'Toronto',
                },
                {
                    id: 'London',
                    label: 'London',
                },
                {
                    id: 'Amsterdam',
                    label: 'Amsterdam',
                },
                {
                    id: 'Frankfurt',
                    label: 'Frankfurt',
                },
                {
                    id: 'Bangalore',
                    label: 'Bangalore',
                },
                {
                    id: 'Singapore',
                    label: 'Singapore',
                },
            ]}
        />,
    ],
};

export const NoOverflow = Template.bind({});
NoOverflow.args = {
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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu posuere tortor. Maecenas ac suscipit lacus. Fusce at enim
                sagittis justo accumsan pellentesque. Proin faucibus posuere
                varius. Nam egestas, purus eget auctor aliquam, sem nisi iaculis
                tortor, at posuere urna lorem vitae est. Aliquam tempus eu risus
                vitae aliquet. Nulla suscipit diam eget interdum iaculis. Etiam
                sed turpis mi. Sed blandit, diam quis rhoncus viverra, magna
                massa posuere purus, in vulputate magna orci id risus. Curabitur
                rhoncus libero eget malesuada ultrices. Quisque pellentesque
                lacus tincidunt, ultrices metus vel, luctus justo. Quisque
                dapibus lectus vel sem sodales, in mollis nisi hendrerit.
                Aliquam hendrerit consequat tellus tincidunt sollicitudin.
                Praesent efficitur mauris sed risus egestas, sed feugiat tortor
                pretium. Duis sed hendrerit elit, in scelerisque nunc. Phasellus
                consectetur nisl vitae ornare commodo. Pellentesque posuere elit
                non dignissim sollicitudin. Ut viverra suscipit ligula. In sed
                sagittis felis. Nunc egestas fermentum libero, in laoreet justo
                cursus nec. Fusce posuere, quam eu venenatis mattis, lorem orci
                pharetra turpis, eget euismod purus nulla in magna. Mauris orci
                leo, suscipit ut porta ac, ornare vel elit. Nam eu nisi aliquam
                lorem viverra sagittis. Mauris nec lacus et nisl faucibus
                blandit. Donec sagittis elit urna, quis dapibus massa laoreet
                quis. Vestibulum a tortor porttitor, ultricies velit eu,
                imperdiet elit. Nam ullamcorper placerat hendrerit. Curabitur
                ornare bibendum elit, nec tincidunt velit tempor ac. Vivamus nec
                viverra lacus. Pellentesque id dui eleifend, vehicula quam non,
                tincidunt enim. Nulla ut magna vitae nunc efficitur eleifend
                vitae consequat ipsum. Vivamus id eros eget tellus ultrices
                ullamcorper in quis purus. Ut mattis et massa ac consectetur.
                Mauris porttitor interdum feugiat. Integer nisl leo, sodales a
                rhoncus vitae, ultricies at quam. Fusce in eleifend metus. Duis
                ultricies dignissim erat, et commodo tellus rutrum sed. Nullam
                iaculis eros sit amet augue volutpat gravida. Cras sit amet
                bibendum tortor. Sed efficitur pretium urna ac maximus. Nunc
                feugiat mauris sed purus ultrices posuere. Suspendisse
                scelerisque, eros quis bibendum accumsan, elit libero molestie
                sem, sagittis condimentum nulla dui et ligula. Nam at malesuada
                nibh, sit amet accumsan urna. Morbi finibus neque facilisis
                lobortis dapibus. Proin ut risus et risus mollis hendrerit sed
                non eros. Ut eget pretium neque. Curabitur ut aliquet ligula.
                Mauris in tempor metus. Vivamus sagittis augue vel sapien
                bibendum, nec gravida lectus vehicula.
            </p>
        </div>,
    ],
};
